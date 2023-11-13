import Benchmark from "benchmark";
import { withCodSpeed } from "@codspeed/benchmark.js-plugin";
import { renderToString } from "react-dom/server";
import { KanjiLetterComponentYak } from "../letters/KanjiLetterComponent.next-yak.compiled";
import React from "react";
import { KanjiLetterComponentStyled } from "../letters/KanjiLetterComponent.styled-components";


(async () => {
const suite = withCodSpeed(new Benchmark.Suite());

suite
  .add("render KanjiLetterComponentYak", () => {
    return renderToString(<KanjiLetterComponentYak />);
  })
  .add("render KanjiLetterComponentStyled", () => {
    return renderToString(<KanjiLetterComponentStyled />);
  })
  .on("cycle", function (event: Benchmark.Event) {
    console.log(String(event.target));
  })


  await suite.run({ async: true });

})()