"use client";
import { useEffect, useState } from "react";
import { compileCSS } from "./compileCSS";
import { compileTS } from "./compileTS";

export const useYakCompiler = (typescriptCode: string) => {
  const [result, setResult] = useState<{
    tsOutput: string;
    cssOutput: string;
  }>({
    tsOutput: "",
    cssOutput: "",
  });
  useEffect(() => {
    let mounted = true;
    Promise.all([compileTS(typescriptCode), compileCSS(typescriptCode)]).then(
      ([tsOutput, cssOutput]) => {
        if (!mounted) return;
        setResult({
          tsOutput,
          cssOutput,
        });
      }
    );
    return () => {
      mounted = false;
    };
  }, [typescriptCode]);
  return result;
};
