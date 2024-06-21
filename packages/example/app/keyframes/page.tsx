import { styled, keyframes } from "next-yak";
import styles from "../page.module.css";
import { Clock } from "../Clock";
import { ClockHands } from "../Test";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

const Headline = styled.h1`
  animation: ${() => rotate} 3s linear infinite;
  display: whatever;
  
`;

const MyWrapper = styled.div`

  ${ClockHands} {
    background: pink !important;
  }
`
  

export default function Home() {
  return (
    <main className={styles.main}>
      <Headline>Hello world</Headline>
      <MyWrapper>
        <Clock />
      </MyWrapper>
    </main>
  );
}
