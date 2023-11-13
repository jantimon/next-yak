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
      renderToString(<KanjiLetterComponentStyled />).length;
    })
    .add("render KanjiLetterComponentYak", () => {
      renderToString(<KanjiLetterComponentYak />).length;
    })
    .on("cycle", function (event: Benchmark.Event) {
      console.log(String(event.target));
    });

  await suite.run({ async: true });
})();
