import Benchmark from "benchmark";
import { withCodSpeed } from "@codspeed/benchmark.js-plugin";
import { renderToString } from "react-dom/server";
import { KanjiLetterComponentYak } from "../letters/KanjiLetterComponent.next-yak.compiled";
import React from "react";
import { KanjiLetterComponentStyled } from "../letters/KanjiLetterComponent.styled-components";

(async () => {
  const suite = withCodSpeed(new Benchmark.Suite());

  suite
    .add("render KanjiLetterComponentStyled", () => {
      try {
        renderToString(<KanjiLetterComponentStyled />).length;
      } catch (e) {
        console.error(e);
        throw e;
      }
    })
    .add("render KanjiLetterComponentYak", () => {
      try {
        renderToString(<KanjiLetterComponentYak />).length;
      } catch (e) {
        console.error(e);
        throw e;
      }
    })
    .on("cycle", function (event: Benchmark.Event) {
      console.log(String(event.target));
    });

  await suite.run({ async: true });
})();
