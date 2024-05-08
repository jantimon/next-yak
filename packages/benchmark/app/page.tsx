"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const IntroText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// Looks like a fancy ghost button with a cool hover border effect
const PerfromanceTestStartLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #000;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  transition: 0.3s;
  margin-right: 10px;
`;

export default function Home() {
  return (
    <Centered>
      <div>
        <IntroText>Render Perfromance Benchmark</IntroText>
        <PerfromanceTestStartLink href="/styled">
          styled-components
        </PerfromanceTestStartLink>
        <PerfromanceTestStartLink href="/yak">yak</PerfromanceTestStartLink>
      </div>
    </Centered>
  );
}
