import { styled } from "next-yak"
import { useEffect, useState } from "react";

export default () => {
    const [progress, setProgress] = useState(0);
    const [randomColor, setColor] = useState("#" + Math.floor(Math.random()*16777215 / 2 + 16777215 / 2).toString(16));
    // the progress bar will be at 100% after 3 seconds updating every 10ms
    useEffect(() => {
        let startTime = performance.now();
        const interval = setInterval(() => {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(1, elapsed / 3000);
            setProgress(progress);
            if (progress === 1) {
                startTime = performance.now();
                setColor("#" + Math.floor(Math.random()*16777215 / 2 + 16777215 / 2).toString(16))
            }
        }, 10);
        return () => clearInterval(interval);
    }, []);
    return (
        <ProgressBar>
            <Bar $progress={progress} $color={randomColor} />
        </ProgressBar>
    );
}


const ProgressBar = styled.div`
    border-radius: 4px;
    margin: 0 auto;
    height: 20px;
    max-width: 100%;
    background-color: #f0f0f0;
`;

const Bar = styled.div<
  { $progress: number; $color: string }
>`
    height: 100%;
    width: 100%;
    background-color: ${({$color}) => $color};
    transform: scaleX(${({$progress}) => $progress});
    transform-origin: left;

    @media (prefers-reduced-motion: reduce) {
        transition: 0.001s transform;
        transition-delay: 1s;
    }
`