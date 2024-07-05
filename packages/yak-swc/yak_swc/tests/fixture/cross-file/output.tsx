// @ts-ignore
import { styled, css, keyframes } from "next-yak";
// @ts-ignore
import { Icon } from "./Icon";
const primary = "green";
const Button = styled.button/*
.Button {
  font-size: 1rem;
  color: green;
}
.Button--$active {
  ::module-selector-import(Icon './Icon') {
    color: red;
  }
}
.Button {
  ::module-selector-import(Icon './Icon') {
    padding: 1rem;
  }
}
.Button--not_$active-and-$hover {
  ::module-selector-import(Icon './Icon') {
    color: blue;
  }
}
.Button--$active-01 {
  border: var(--TODO) solid red;
}*/ `Button`;
const Animation = keyframes/*
@keyframes Animation {
  from {
    color: red;
  }
  to {
    color: blue;
  }
}*/ `Animation`;
const Wrapper = styled.div/*
.Wrapper {
  animation: Animation 1s linear infinite;
  &:hover .Button {
    opacity: 0.5;
  }
}*/ `Wrapper`;
