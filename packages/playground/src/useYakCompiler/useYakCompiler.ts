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
    compile(typescriptCode).then(
      ({tsOutput, cssOutput}) => {
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


const compile = async (typescriptCode: string) => {
    const tsOutput = await compileTS(typescriptCode);
    const cssOutput = await compileCSS(tsOutput);
    return { tsOutput, cssOutput };
}