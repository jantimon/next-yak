import quasiClassifier from '../lib/quasiClassifier.cjs';
import { describe, it, expect } from "vitest";

describe('quasiClassifier', () => {
    it('should classify empty quasi', () => {
        expect(quasiClassifier('', [])).toEqual({
            empty: true,
            unknownSelector: false,
            insideCssValue: false,
            currentNestingScopes: [],
        });
    });
    it("should recognize a comment as empty", () => {
        expect(quasiClassifier("/* comment */", [])).toEqual({
            empty: true,
            unknownSelector: false,
            insideCssValue: false,
            currentNestingScopes: [],
        });
    });
    it("should find incomplete css - unknownSelector", () => {
        expect(quasiClassifier("{ color: blue;", [])).toEqual({
            empty: false,
            unknownSelector: true,
            insideCssValue: false,
            currentNestingScopes: [],
        });
    });
    it("should find incomplete css - insideCssValue", () => {
        expect(quasiClassifier("color: ", [
            ".foo"
        ])).toEqual({
            empty: false,
            unknownSelector: false,
            insideCssValue: true,
            currentNestingScopes: [".foo"],
        });
    });
    it("should find incomplete css - insideCssValue after a media query", () => {
        expect(quasiClassifier("} .foo { color: ", [
            "@media (min-width: 640px)"
        ])).toEqual({
            empty: false,
            unknownSelector: false,
            insideCssValue: true,
            currentNestingScopes: [".foo"],
        });
    });
    it("should find incomplete css - insideCssValue in a multi value", () => {
        expect(quasiClassifier("} .foo { transition: 200ms ", [
            "@media (min-width: 640px)"
        ])).toEqual({
            empty: false,
            unknownSelector: false,
            insideCssValue: true,
            currentNestingScopes: [".foo"],
        });
    });
    it("should find nesting scopes", () => {
        expect(quasiClassifier(`
            .foo {
                .bar {
                    @supports (display: grid) {
        `, [
            "@media (min-width: 640px)"
        ])).toEqual({
            empty: false,
            unknownSelector: false,
            insideCssValue: false,
            currentNestingScopes: [
                "@media (min-width: 640px)",
                ".foo",
                ".bar",
                "@supports (display: grid)",
            ],
        });
    });
    it("should find nesting scopes with properties", () => {
        expect(quasiClassifier(`
            .foo {
                color: purple;
                .x {
                    color: green;
                }
                .bar {
                    color: orange;
                    @supports (display: grid) {
                        color: blue;
        `, [
            "@media (min-width: 640px)"
        ])).toEqual({
            empty: false,
            unknownSelector: false,
            insideCssValue: false,
            currentNestingScopes: [
                "@media (min-width: 640px)",
                ".foo",
                ".bar",
                "@supports (display: grid)",
            ],
        });
    });

    it("should find nesting scopes with properties and closing nestings", () => {
        expect(quasiClassifier(`
            .foo {
                /* }}}}} */
                color: purple;
                .x {
                    color: green;
                }
                .bar {
                    :before {
                        content: '{';
                    }
                    color: orange;
                    @supports (display: grid) {
                        color: blue;
                    }
                }
        `, [
            "@media (min-width: 640px)"
        ])).toEqual({
            empty: false,
            unknownSelector: false,
            insideCssValue: false,
            currentNestingScopes: [
                "@media (min-width: 640px)",
                ".foo",
            ],
        });
    });
});
