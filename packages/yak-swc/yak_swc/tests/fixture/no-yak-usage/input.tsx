// Should not add an import to the .css module as no css has been extracted

import { styled } from "next-yak";

export const isYak = typeof styled === "function";