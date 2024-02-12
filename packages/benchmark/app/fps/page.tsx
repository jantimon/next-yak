"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import YakProgressBar from "./yak";
import StyledProgressBar from "./styled";

/**
 * Use the `requestAnimationFrame` API to measure the frame rate of the browser.
 */
function FPS(): JSX.Element {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frameCount = 0;
    let lastFPSUpdate = performance.now();

    const update = () => {
      const now = performance.now();
      frameCount++;

      if (now - lastFPSUpdate >= 1000) {
        const fps = (frameCount * 1000) / (now - lastFPSUpdate);
        divRef.current!.innerText = `FPS: ${fps.toFixed(2)}`;
        frameCount = 0;
        lastFPSUpdate = now;
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, []);
  return <div ref={divRef} />;
}

export default function Page(): JSX.Element {
  const [{ css, html }, setContent] = useState({ css: "", html: "" });
  useEffect(() => {
    setContent(generateRandomContent(10000));
  }, []);
  const [cssInJsEngine, setCssInJsEngine] = useState<
    "none" | "yak" | "styled-components"
  >("none");
  const handleCssInJsEngineChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCssInJsEngine(
      event.target.value as "none" | "yak" | "styled-components"
    );
  };

  return (
    <div>
      <FPS />
      Active CSS-in-JS engine: {cssInJsEngine}
      <div>
        <input
          type="radio"
          id="none"
          name="cssInJsEngine"
          value="none"
          checked={cssInJsEngine === "none"}
          onChange={handleCssInJsEngineChange}
        />
        <label htmlFor="none">None</label>
      </div>
      <div>
        <input
          type="radio"
          id="yak"
          name="cssInJsEngine"
          value="yak"
          checked={cssInJsEngine === "yak"}
          onChange={handleCssInJsEngineChange}
        />
        <label htmlFor="yak">YAK</label>
      </div>
      <div>
        <input
          type="radio"
          id="styled-components"
          name="cssInJsEngine"
          value="styled-components"
          checked={cssInJsEngine === "styled-components"}
          onChange={handleCssInJsEngineChange}
        />
        <label htmlFor="styled-components">StyledComponents</label>
      </div>
      {cssInJsEngine === "yak" && <YakProgressBar />}
      {cssInJsEngine === "styled-components" && <StyledProgressBar />}
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} style={{ opacity: 0 }} />
    </div>
  );
}

/**
 * Generates random CSS and HTML content.
 * @param {number} nodeCount The number of DOM nodes to generate.
 * @returns {{ css: string, html: string }} An object containing the generated CSS and HTML.
 */
function generateRandomContent(nodeCount: number): {
  css: string;
  html: string;
} {
  // Array to hold all generated CSS rules
  const css: string[] = [];
  // String to build the HTML structure
  let html: string = "";

  /**
   * Generates a random string for use as a CSS class name.
   * @returns {string} A random string.
   */
  const generateRandomString = (): string =>
    Math.random().toString(36).substring(2, 15);

  /**
   * Generates a random CSS property and value.
   * @returns {string} A CSS rule as a string.
   */
  const generateRandomCSS = (): string => {
    const properties = [
      "color",
      "background-color",
      "font-size",
      "margin",
      "padding",
    ];
    const values = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "10px",
      "20px",
      "30px",
      "40px",
    ];
    return `${properties[Math.floor(Math.random() * properties.length)]}: ${
      values[Math.floor(Math.random() * values.length)]
    };`;
  };

  /**
   * Creates a CSS class with a random property and adds it to the CSS array.
   * @param {string} className The name of the CSS class to create.
   * @returns {void}
   */
  const createCSSClass = (className: string): void => {
    const cssContent = generateRandomCSS();
    css.push(`.${className} { ${cssContent} }`);
  };

  /**
   * Recursively creates HTML elements with random content and classes.
   * @param {number} depth The current depth of the recursion.
   * @returns {string} The generated HTML string for the current element and its children.
   */
  const createElement = (
    depth: number = 1,
    nodeCount: number = 3000
  ): string => {
    if (depth > nodeCount) return "";

    const tagName = "div";
    let classAttr = "";
    const className = `rnd-${generateRandomString()}`;
    createCSSClass(className);
    classAttr = ` class="${className}"`;

    const content = `Node ${depth}`;
    const child = createElement(depth + 1, nodeCount - 1);
    return `<${tagName}${classAttr}>${content}${child}</${tagName}>`;
  };

  // Generate the HTML structure
  html = "";
  while (nodeCount > 0) {
    const nodes = Math.random() * 100;
    nodeCount -= nodes;
    html += createElement(1, nodes);
  }

  // Return both the CSS and HTML content
  return { css: css.join("\n"), html };
}
