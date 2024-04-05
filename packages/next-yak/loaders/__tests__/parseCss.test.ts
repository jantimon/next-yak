import { test, expect } from "vitest";
import { parseCss } from "../lib/parseCss";
test("parseCss inComplete css 1", () => {
  expect(
    parseCss(`
        .foo {
                .fancy {
                        /* hello .world { color: red; } */
                        color: blue;
    `)
  ).toMatchInlineSnapshot(`
      {
        "declarations": [
          {
            "closed": true,
            "property": "color",
            "scope": [
              {
                "name": ".foo",
                "type": "selector",
              },
              {
                "name": ".fancy",
                "type": "selector",
              },
            ],
            "value": "blue",
          },
        ],
        "state": {
          "currentDeclaration": {
            "closed": false,
            "property": "",
            "scope": [],
            "value": "",
          },
          "currentScopes": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
          ],
          "isInsideAtRule": false,
          "isInsideComment": false,
          "isInsidePropertyValue": false,
          "isInsideString": false,
        },
      }
    `);
});

test("parseCss inComplete css 1 ending inside a comment", () => {
  expect(
    parseCss(`
        .foo {
                .fancy {
                        /* hello .world { color: red; }
    `)
  ).toMatchInlineSnapshot(`
    {
      "declarations": [],
      "state": {
        "currentDeclaration": {
          "closed": false,
          "property": "",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
          ],
          "value": "",
        },
        "currentScopes": [
          {
            "name": ".foo",
            "type": "selector",
          },
          {
            "name": ".fancy",
            "type": "selector",
          },
        ],
        "isInsideAtRule": false,
        "isInsideComment": true,
        "isInsidePropertyValue": false,
        "isInsideString": false,
      },
    }
  `);
});

test("parseCss inComplete css 1 ending inside a string", () => {
  expect(
    parseCss(`
        .foo {
                .fancy {
                        background: url('https://example.com
    `)
  ).toMatchInlineSnapshot(`
    {
      "declarations": [
        {
          "closed": false,
          "property": "background",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
          ],
          "value": "url('https://example.com
        ",
        },
      ],
      "state": {
        "currentDeclaration": {
          "closed": false,
          "property": "background",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
          ],
          "value": "url('https://example.com
        ",
        },
        "currentScopes": [
          {
            "name": ".foo",
            "type": "selector",
          },
          {
            "name": ".fancy",
            "type": "selector",
          },
        ],
        "isInsideAtRule": false,
        "isInsideComment": false,
        "isInsidePropertyValue": true,
        "isInsideString": "'",
      },
    }
  `);
});

test("parseCss inComplete css 1 ending inside a double quote string", () => {
  expect(
    parseCss(`
        .foo {
                .fancy {
                        background: url("https://example.com
    `)
  ).toMatchInlineSnapshot(`
    {
      "declarations": [
        {
          "closed": false,
          "property": "background",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
          ],
          "value": "url(\\"https://example.com
        ",
        },
      ],
      "state": {
        "currentDeclaration": {
          "closed": false,
          "property": "background",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
          ],
          "value": "url(\\"https://example.com
        ",
        },
        "currentScopes": [
          {
            "name": ".foo",
            "type": "selector",
          },
          {
            "name": ".fancy",
            "type": "selector",
          },
        ],
        "isInsideAtRule": false,
        "isInsideComment": false,
        "isInsidePropertyValue": true,
        "isInsideString": "\\"",
      },
    }
  `);
});

test("parseCss inComplete css 1 ending outside a comment", () => {
  expect(
    parseCss(`
        .foo {
                .fancy {
                        /* background: url("https://example.com */
                        color: blue
    `)
  ).toMatchInlineSnapshot(`
    {
      "declarations": [
        {
          "closed": false,
          "property": "color",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
          ],
          "value": "blue
    ",
        },
      ],
      "state": {
        "currentDeclaration": {
          "closed": false,
          "property": "color",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
          ],
          "value": "blue
    ",
        },
        "currentScopes": [
          {
            "name": ".foo",
            "type": "selector",
          },
          {
            "name": ".fancy",
            "type": "selector",
          },
        ],
        "isInsideAtRule": false,
        "isInsideComment": false,
        "isInsidePropertyValue": true,
        "isInsideString": false,
      },
    }
  `);
});

test("parseCss inComplete css 1 with @media rule", () => {
  expect(
    parseCss(`
                .foo {
                                .fancy {
                                                background: url('https://example.com');
                                
                

                @media (max-width: 600px) {
                                .baz {
                                                color: red;
                                
        `)
  ).toMatchInlineSnapshot(`
          {
            "declarations": [
              {
                "closed": true,
                "property": "background",
                "scope": [
                  {
                    "name": ".foo",
                    "type": "selector",
                  },
                  {
                    "name": ".fancy",
                    "type": "selector",
                  },
                ],
                "value": "url('https://example.com')",
              },
              {
                "closed": true,
                "property": "color",
                "scope": [
                  {
                    "name": ".foo",
                    "type": "selector",
                  },
                  {
                    "name": ".fancy",
                    "type": "selector",
                  },
                  {
                    "name": "@media (max-width: 600px)",
                    "type": "at-rule",
                  },
                  {
                    "name": ".baz",
                    "type": "selector",
                  },
                ],
                "value": "red",
              },
            ],
            "state": {
              "currentDeclaration": {
                "closed": false,
                "property": "",
                "scope": [],
                "value": "",
              },
              "currentScopes": [
                {
                  "name": ".foo",
                  "type": "selector",
                },
                {
                  "name": ".fancy",
                  "type": "selector",
                },
                {
                  "name": "@media (max-width: 600px)",
                  "type": "at-rule",
                },
                {
                  "name": ".baz",
                  "type": "selector",
                },
              ],
              "isInsideAtRule": false,
              "isInsideComment": false,
              "isInsidePropertyValue": false,
              "isInsideString": false,
            },
          }
        `);
});

test("parseCss complete css with @media rule", () => {
  expect(
    parseCss(`
                .foo {
                                .fancy {
                                                background: url('https://example.com');
                                
                

                @media (max-width: 600px) {
                                .baz {
                                                color: red;
                                }
                            }
                        }
                        background: url('https://example.com');
                        body {
                            padding: 0;
                        }
                    }
                                
        `)
  ).toMatchInlineSnapshot(`
    {
      "declarations": [
        {
          "closed": true,
          "property": "background",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
          ],
          "value": "url('https://example.com')",
        },
        {
          "closed": true,
          "property": "color",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
            {
              "name": "@media (max-width: 600px)",
              "type": "at-rule",
            },
            {
              "name": ".baz",
              "type": "selector",
            },
          ],
          "value": "red",
        },
        {
          "closed": true,
          "property": "background",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
          ],
          "value": "url('https://example.com')",
        },
        {
          "closed": true,
          "property": "padding",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": "body",
              "type": "selector",
            },
          ],
          "value": "0",
        },
      ],
      "state": {
        "currentDeclaration": {
          "closed": false,
          "property": "",
          "scope": [],
          "value": "",
        },
        "currentScopes": [],
        "isInsideAtRule": false,
        "isInsideComment": false,
        "isInsidePropertyValue": false,
        "isInsideString": false,
      },
    }
  `);
});

test("parseCss inComplete css 1 with @keyframes rule", () => {
  expect(
    parseCss(`
                .foo {
                    .fancy {
                                    background: url('https://example.com');
                    }
                }

                @keyframes slide-in {
                    from {
                                    transform: translateX(-100%);
                    }
                    to {
                                    transform: translateX(0);
                    }
                }
        `)
  ).toMatchInlineSnapshot(`
    {
      "declarations": [
        {
          "closed": true,
          "property": "background",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy",
              "type": "selector",
            },
          ],
          "value": "url('https://example.com')",
        },
        {
          "closed": true,
          "property": "transform",
          "scope": [
            {
              "name": "@keyframes slide-in",
              "type": "at-rule",
            },
            {
              "name": "from",
              "type": "selector",
            },
          ],
          "value": "translateX(-100%)",
        },
        {
          "closed": true,
          "property": "transform",
          "scope": [
            {
              "name": "@keyframes slide-in",
              "type": "at-rule",
            },
            {
              "name": "to",
              "type": "selector",
            },
          ],
          "value": "translateX(0)",
        },
      ],
      "state": {
        "currentDeclaration": {
          "closed": false,
          "property": "",
          "scope": [],
          "value": "",
        },
        "currentScopes": [],
        "isInsideAtRule": false,
        "isInsideComment": false,
        "isInsidePropertyValue": false,
        "isInsideString": false,
      },
    }
  `);
});

test("parseCss inComplete css 1 ending outside a // comment", () => {
  expect(
    parseCss(`
        .foo {
                .fancy section {
                        // background: url("https://example.com
                        color: blue
    `)
  ).toMatchInlineSnapshot(`
    {
      "declarations": [
        {
          "closed": false,
          "property": "color",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy section",
              "type": "selector",
            },
          ],
          "value": "blue
    ",
        },
      ],
      "state": {
        "currentDeclaration": {
          "closed": false,
          "property": "color",
          "scope": [
            {
              "name": ".foo",
              "type": "selector",
            },
            {
              "name": ".fancy section",
              "type": "selector",
            },
          ],
          "value": "blue
    ",
        },
        "currentScopes": [
          {
            "name": ".foo",
            "type": "selector",
          },
          {
            "name": ".fancy section",
            "type": "selector",
          },
        ],
        "isInsideAtRule": false,
        "isInsideComment": false,
        "isInsidePropertyValue": true,
        "isInsideString": false,
      },
    }
  `);
});

test("Handles escaped backslashes in strings", () => {
  expect(
    parseCss(`a { content: "\\\\"; }`).declarations[0].value
  ).toMatchInlineSnapshot('"\\"\\\\\\\\\\""');
});

test("Handles empty declarations", () => {
  expect(
    parseCss(`a { color: "blue";
    ; }`).declarations
  ).toMatchInlineSnapshot(`
    [
      {
        "closed": true,
        "property": "color",
        "scope": [
          {
            "name": "a",
            "type": "selector",
          },
        ],
        "value": "\\"blue\\"",
      },
      {
        "closed": true,
        "property": "",
        "scope": [
          {
            "name": "a",
            "type": "selector",
          },
        ],
        "value": "",
      },
    ]
  `);
});

test("Handles multiline comments", () => {
  expect(
    parseCss(`/* 
  This is
  a multiline
  comment
  */
  p { color: red; }`).declarations
  ).toMatchInlineSnapshot(`
    [
      {
        "closed": true,
        "property": "color",
        "scope": [
          {
            "name": "p",
            "type": "selector",
          },
        ],
        "value": "red",
      },
    ]
  `);
});

test("Handles newlines in property values", () => {
  expect(parseCss(`p { content: "line1\nline2"; }`).declarations)
    .toMatchInlineSnapshot(`
      [
        {
          "closed": true,
          "property": "content",
          "scope": [
            {
              "name": "p",
              "type": "selector",
            },
          ],
          "value": "\\"line1
      line2\\"",
        },
      ]
    `);
});
