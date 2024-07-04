
"use client";    
import React, { type FunctionComponent } from 'react';
import { styled as styledYak, css } from 'next-yak';


const oneTimeDelay = new Promise((resolve) => setTimeout(resolve, 1));

// Simulate a component which accesses apollo or relay data access
// starting with a loading state and then switching to the actual content
const FakeDataLoader = ({children}: { children?: React.ReactNode }) => {
    const [show, setShow] = React.useState(false);
    const showDeferred = React.useDeferredValue(show);
    React.useEffect(() => {
        let isMounted = true;
        oneTimeDelay.then(() => {
            if (isMounted) {
                setShow(true);
            }
        });
        return () => {
            isMounted = false;
        };
    }, []);
    if (!showDeferred) return null;
    return <>{children}</>;
}

const JapaneseCard = styledYak.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;


const Kanji1Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '一';
  }
`;

const Kanji2Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丁';
  }
`;

const Kanji3Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丂';
  }
`;

const Kanji4Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '七';
  }
`;

const Kanji5Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丄';
  }
`;

const Kanji6Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丅';
  }
`;

const Kanji7Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丆';
  }
`;

const Kanji8Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '万';
  }
`;

const Kanji9Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丈';
  }
`;

const Kanji10Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '三';
  }
`;

const Kanji11Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '上';
  }
`;

const Kanji12Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '下';
  }
`;

const Kanji13Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丌';
  }
`;

const Kanji14Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '不';
  }
`;

const Kanji15Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '与';
  }
`;

const Kanji16Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丏';
  }
`;

const Kanji17Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丐';
  }
`;

const Kanji18Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丑';
  }
`;

const Kanji19Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丒';
  }
`;

const Kanji20Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '专';
  }
`;

const Kanji21Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '且';
  }
`;

const Kanji22Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丕';
  }
`;

const Kanji23Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '世';
  }
`;

const Kanji24Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丗';
  }
`;

const Kanji25Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丘';
  }
`;

const Kanji26Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丙';
  }
`;

const Kanji27Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '业';
  }
`;

const Kanji28Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丛';
  }
`;

const Kanji29Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '东';
  }
`;

const Kanji30Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丝';
  }
`;

const Kanji31Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丞';
  }
`;

const Kanji32Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丟';
  }
`;

const Kanji33Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丠';
  }
`;

const Kanji34Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '両';
  }
`;

const Kanji35Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丢';
  }
`;

const Kanji36Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丣';
  }
`;

const Kanji37Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '两';
  }
`;

const Kanji38Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '严';
  }
`;

const Kanji39Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '並';
  }
`;

const Kanji40Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丧';
  }
`;

const Kanji41Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丨';
  }
`;

const Kanji42Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丩';
  }
`;

const Kanji43Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '个';
  }
`;

const Kanji44Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丫';
  }
`;

const Kanji45Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丬';
  }
`;

const Kanji46Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '中';
  }
`;

const Kanji47Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丮';
  }
`;

const Kanji48Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丯';
  }
`;

const Kanji49Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丰';
  }
`;

const Kanji50Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丱';
  }
`;

const Kanji51Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '串';
  }
`;

const Kanji52Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丳';
  }
`;

const Kanji53Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '临';
  }
`;

const Kanji54Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丵';
  }
`;

const Kanji55Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丶';
  }
`;

const Kanji56Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丷';
  }
`;

const Kanji57Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丸';
  }
`;

const Kanji58Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丹';
  }
`;

const Kanji59Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '为';
  }
`;

const Kanji60Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '主';
  }
`;

const Kanji61Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丼';
  }
`;

const Kanji62Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丽';
  }
`;

const Kanji63Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '举';
  }
`;

const Kanji64Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '丿';
  }
`;

const Kanji65Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乀';
  }
`;

const Kanji66Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乁';
  }
`;

const Kanji67Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乂';
  }
`;

const Kanji68Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乃';
  }
`;

const Kanji69Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乄';
  }
`;

const Kanji70Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '久';
  }
`;

const Kanji71Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乆';
  }
`;

const Kanji72Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乇';
  }
`;

const Kanji73Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '么';
  }
`;

const Kanji74Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '义';
  }
`;

const Kanji75Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乊';
  }
`;

const Kanji76Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '之';
  }
`;

const Kanji77Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乌';
  }
`;

const Kanji78Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乍';
  }
`;

const Kanji79Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乎';
  }
`;

const Kanji80Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乏';
  }
`;

const Kanji81Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乐';
  }
`;

const Kanji82Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乑';
  }
`;

const Kanji83Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乒';
  }
`;

const Kanji84Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乓';
  }
`;

const Kanji85Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乔';
  }
`;

const Kanji86Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乕';
  }
`;

const Kanji87Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乖';
  }
`;

const Kanji88Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乗';
  }
`;

const Kanji89Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乘';
  }
`;

const Kanji90Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乙';
  }
`;

const Kanji91Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乚';
  }
`;

const Kanji92Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乛';
  }
`;

const Kanji93Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乜';
  }
`;

const Kanji94Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '九';
  }
`;

const Kanji95Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乞';
  }
`;

const Kanji96Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '也';
  }
`;

const Kanji97Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '习';
  }
`;

const Kanji98Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乡';
  }
`;

const Kanji99Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乢';
  }
`;

const Kanji100Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乣';
  }
`;

const Kanji101Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乤';
  }
`;

const Kanji102Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乥';
  }
`;

const Kanji103Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '书';
  }
`;

const Kanji104Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乧';
  }
`;

const Kanji105Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乨';
  }
`;

const Kanji106Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乩';
  }
`;

const Kanji107Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乪';
  }
`;

const Kanji108Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乫';
  }
`;

const Kanji109Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乬';
  }
`;

const Kanji110Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乭';
  }
`;

const Kanji111Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乮';
  }
`;

const Kanji112Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乯';
  }
`;

const Kanji113Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '买';
  }
`;

const Kanji114Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乱';
  }
`;

const Kanji115Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乲';
  }
`;

const Kanji116Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乳';
  }
`;

const Kanji117Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乴';
  }
`;

const Kanji118Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乵';
  }
`;

const Kanji119Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乶';
  }
`;

const Kanji120Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乷';
  }
`;

const Kanji121Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乸';
  }
`;

const Kanji122Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乹';
  }
`;

const Kanji123Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乺';
  }
`;

const Kanji124Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乻';
  }
`;

const Kanji125Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乼';
  }
`;

const Kanji126Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乽';
  }
`;

const Kanji127Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乾';
  }
`;

const Kanji128Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '乿';
  }
`;

const Kanji129Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亀';
  }
`;

const Kanji130Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亁';
  }
`;

const Kanji131Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亂';
  }
`;

const Kanji132Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亃';
  }
`;

const Kanji133Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亄';
  }
`;

const Kanji134Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亅';
  }
`;

const Kanji135Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '了';
  }
`;

const Kanji136Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亇';
  }
`;

const Kanji137Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '予';
  }
`;

const Kanji138Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '争';
  }
`;

const Kanji139Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亊';
  }
`;

const Kanji140Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '事';
  }
`;

const Kanji141Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '二';
  }
`;

const Kanji142Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亍';
  }
`;

const Kanji143Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '于';
  }
`;

const Kanji144Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亏';
  }
`;

const Kanji145Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亐';
  }
`;

const Kanji146Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '云';
  }
`;

const Kanji147Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '互';
  }
`;

const Kanji148Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亓';
  }
`;

const Kanji149Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '五';
  }
`;

const Kanji150Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '井';
  }
`;

const Kanji151Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亖';
  }
`;

const Kanji152Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亗';
  }
`;

const Kanji153Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亘';
  }
`;

const Kanji154Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亙';
  }
`;

const Kanji155Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亚';
  }
`;

const Kanji156Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '些';
  }
`;

const Kanji157Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亜';
  }
`;

const Kanji158Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亝';
  }
`;

const Kanji159Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亞';
  }
`;

const Kanji160Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亟';
  }
`;

const Kanji161Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亠';
  }
`;

const Kanji162Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亡';
  }
`;

const Kanji163Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亢';
  }
`;

const Kanji164Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亣';
  }
`;

const Kanji165Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '交';
  }
`;

const Kanji166Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亥';
  }
`;

const Kanji167Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亦';
  }
`;

const Kanji168Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '产';
  }
`;

const Kanji169Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亨';
  }
`;

const Kanji170Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亩';
  }
`;

const Kanji171Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亪';
  }
`;

const Kanji172Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '享';
  }
`;

const Kanji173Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '京';
  }
`;

const Kanji174Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亭';
  }
`;

const Kanji175Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亮';
  }
`;

const Kanji176Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亯';
  }
`;

const Kanji177Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亰';
  }
`;

const Kanji178Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亱';
  }
`;

const Kanji179Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亲';
  }
`;

const Kanji180Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亳';
  }
`;

const Kanji181Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亴';
  }
`;

const Kanji182Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亵';
  }
`;

const Kanji183Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亶';
  }
`;

const Kanji184Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亷';
  }
`;

const Kanji185Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亸';
  }
`;

const Kanji186Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亹';
  }
`;

const Kanji187Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '人';
  }
`;

const Kanji188Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亻';
  }
`;

const Kanji189Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亼';
  }
`;

const Kanji190Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亽';
  }
`;

const Kanji191Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亾';
  }
`;

const Kanji192Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '亿';
  }
`;

const Kanji193Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '什';
  }
`;

const Kanji194Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仁';
  }
`;

const Kanji195Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仂';
  }
`;

const Kanji196Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仃';
  }
`;

const Kanji197Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仄';
  }
`;

const Kanji198Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仅';
  }
`;

const Kanji199Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仆';
  }
`;

const Kanji200Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仇';
  }
`;

const Kanji201Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仈';
  }
`;

const Kanji202Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仉';
  }
`;

const Kanji203Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '今';
  }
`;

const Kanji204Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '介';
  }
`;

const Kanji205Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仌';
  }
`;

const Kanji206Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仍';
  }
`;

const Kanji207Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '从';
  }
`;

const Kanji208Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仏';
  }
`;

const Kanji209Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仐';
  }
`;

const Kanji210Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仑';
  }
`;

const Kanji211Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仒';
  }
`;

const Kanji212Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仓';
  }
`;

const Kanji213Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仔';
  }
`;

const Kanji214Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仕';
  }
`;

const Kanji215Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '他';
  }
`;

const Kanji216Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仗';
  }
`;

const Kanji217Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '付';
  }
`;

const Kanji218Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仙';
  }
`;

const Kanji219Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仚';
  }
`;

const Kanji220Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仛';
  }
`;

const Kanji221Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仜';
  }
`;

const Kanji222Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仝';
  }
`;

const Kanji223Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仞';
  }
`;

const Kanji224Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仟';
  }
`;

const Kanji225Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仠';
  }
`;

const Kanji226Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仡';
  }
`;

const Kanji227Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仢';
  }
`;

const Kanji228Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '代';
  }
`;

const Kanji229Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '令';
  }
`;

const Kanji230Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '以';
  }
`;

const Kanji231Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仦';
  }
`;

const Kanji232Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仧';
  }
`;

const Kanji233Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仨';
  }
`;

const Kanji234Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仩';
  }
`;

const Kanji235Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仪';
  }
`;

const Kanji236Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仫';
  }
`;

const Kanji237Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '们';
  }
`;

const Kanji238Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仭';
  }
`;

const Kanji239Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仮';
  }
`;

const Kanji240Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仯';
  }
`;

const Kanji241Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仰';
  }
`;

const Kanji242Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仱';
  }
`;

const Kanji243Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仲';
  }
`;

const Kanji244Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仳';
  }
`;

const Kanji245Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仴';
  }
`;

const Kanji246Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仵';
  }
`;

const Kanji247Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '件';
  }
`;

const Kanji248Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '价';
  }
`;

const Kanji249Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仸';
  }
`;

const Kanji250Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仹';
  }
`;

const Kanji251Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仺';
  }
`;

const Kanji252Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '任';
  }
`;

const Kanji253Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仼';
  }
`;

const Kanji254Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '份';
  }
`;

const Kanji255Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仾';
  }
`;

const Kanji256Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '仿';
  }
`;

const Kanji257Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伀';
  }
`;

const Kanji258Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '企';
  }
`;

const Kanji259Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伂';
  }
`;

const Kanji260Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伃';
  }
`;

const Kanji261Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伄';
  }
`;

const Kanji262Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伅';
  }
`;

const Kanji263Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伆';
  }
`;

const Kanji264Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伇';
  }
`;

const Kanji265Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伈';
  }
`;

const Kanji266Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伉';
  }
`;

const Kanji267Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伊';
  }
`;

const Kanji268Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伋';
  }
`;

const Kanji269Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伌';
  }
`;

const Kanji270Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伍';
  }
`;

const Kanji271Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伎';
  }
`;

const Kanji272Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伏';
  }
`;

const Kanji273Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伐';
  }
`;

const Kanji274Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '休';
  }
`;

const Kanji275Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伒';
  }
`;

const Kanji276Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伓';
  }
`;

const Kanji277Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伔';
  }
`;

const Kanji278Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伕';
  }
`;

const Kanji279Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伖';
  }
`;

const Kanji280Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '众';
  }
`;

const Kanji281Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '优';
  }
`;

const Kanji282Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伙';
  }
`;

const Kanji283Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '会';
  }
`;

const Kanji284Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伛';
  }
`;

const Kanji285Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伜';
  }
`;

const Kanji286Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伝';
  }
`;

const Kanji287Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伞';
  }
`;

const Kanji288Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伟';
  }
`;

const Kanji289Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '传';
  }
`;

const Kanji290Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伡';
  }
`;

const Kanji291Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伢';
  }
`;

const Kanji292Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伣';
  }
`;

const Kanji293Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伤';
  }
`;

const Kanji294Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伥';
  }
`;

const Kanji295Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伦';
  }
`;

const Kanji296Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伧';
  }
`;

const Kanji297Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伨';
  }
`;

const Kanji298Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伩';
  }
`;

const Kanji299Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伪';
  }
`;

const Kanji300Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伫';
  }
`;

const Kanji301Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伬';
  }
`;

const Kanji302Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伭';
  }
`;

const Kanji303Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伮';
  }
`;

const Kanji304Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伯';
  }
`;

const Kanji305Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '估';
  }
`;

const Kanji306Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伱';
  }
`;

const Kanji307Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伲';
  }
`;

const Kanji308Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伳';
  }
`;

const Kanji309Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伴';
  }
`;

const Kanji310Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伵';
  }
`;

const Kanji311Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伶';
  }
`;

const Kanji312Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伷';
  }
`;

const Kanji313Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伸';
  }
`;

const Kanji314Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伹';
  }
`;

const Kanji315Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伺';
  }
`;

const Kanji316Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伻';
  }
`;

const Kanji317Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '似';
  }
`;

const Kanji318Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伽';
  }
`;

const Kanji319Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伾';
  }
`;

const Kanji320Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '伿';
  }
`;

const Kanji321Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佀';
  }
`;

const Kanji322Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佁';
  }
`;

const Kanji323Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佂';
  }
`;

const Kanji324Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佃';
  }
`;

const Kanji325Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佄';
  }
`;

const Kanji326Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佅';
  }
`;

const Kanji327Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '但';
  }
`;

const Kanji328Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佇';
  }
`;

const Kanji329Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佈';
  }
`;

const Kanji330Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佉';
  }
`;

const Kanji331Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佊';
  }
`;

const Kanji332Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佋';
  }
`;

const Kanji333Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佌';
  }
`;

const Kanji334Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '位';
  }
`;

const Kanji335Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '低';
  }
`;

const Kanji336Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '住';
  }
`;

const Kanji337Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佐';
  }
`;

const Kanji338Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佑';
  }
`;

const Kanji339Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佒';
  }
`;

const Kanji340Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '体';
  }
`;

const Kanji341Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佔';
  }
`;

const Kanji342Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '何';
  }
`;

const Kanji343Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佖';
  }
`;

const Kanji344Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佗';
  }
`;

const Kanji345Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佘';
  }
`;

const Kanji346Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '余';
  }
`;

const Kanji347Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佚';
  }
`;

const Kanji348Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佛';
  }
`;

const Kanji349Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '作';
  }
`;

const Kanji350Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佝';
  }
`;

const Kanji351Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佞';
  }
`;

const Kanji352Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佟';
  }
`;

const Kanji353Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '你';
  }
`;

const Kanji354Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佡';
  }
`;

const Kanji355Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佢';
  }
`;

const Kanji356Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佣';
  }
`;

const Kanji357Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佤';
  }
`;

const Kanji358Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佥';
  }
`;

const Kanji359Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佦';
  }
`;

const Kanji360Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佧';
  }
`;

const Kanji361Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佨';
  }
`;

const Kanji362Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佩';
  }
`;

const Kanji363Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佪';
  }
`;

const Kanji364Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佫';
  }
`;

const Kanji365Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佬';
  }
`;

const Kanji366Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佭';
  }
`;

const Kanji367Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佮';
  }
`;

const Kanji368Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佯';
  }
`;

const Kanji369Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佰';
  }
`;

const Kanji370Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佱';
  }
`;

const Kanji371Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佲';
  }
`;

const Kanji372Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佳';
  }
`;

const Kanji373Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佴';
  }
`;

const Kanji374Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '併';
  }
`;

const Kanji375Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佶';
  }
`;

const Kanji376Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佷';
  }
`;

const Kanji377Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佸';
  }
`;

const Kanji378Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佹';
  }
`;

const Kanji379Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佺';
  }
`;

const Kanji380Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佻';
  }
`;

const Kanji381Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佼';
  }
`;

const Kanji382Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佽';
  }
`;

const Kanji383Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '佾';
  }
`;

const Kanji384Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '使';
  }
`;

const Kanji385Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侀';
  }
`;

const Kanji386Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侁';
  }
`;

const Kanji387Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侂';
  }
`;

const Kanji388Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侃';
  }
`;

const Kanji389Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侄';
  }
`;

const Kanji390Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侅';
  }
`;

const Kanji391Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '來';
  }
`;

const Kanji392Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侇';
  }
`;

const Kanji393Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侈';
  }
`;

const Kanji394Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侉';
  }
`;

const Kanji395Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侊';
  }
`;

const Kanji396Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '例';
  }
`;

const Kanji397Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侌';
  }
`;

const Kanji398Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侍';
  }
`;

const Kanji399Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侎';
  }
`;

const Kanji400Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侏';
  }
`;

const Kanji401Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侐';
  }
`;

const Kanji402Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侑';
  }
`;

const Kanji403Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侒';
  }
`;

const Kanji404Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侓';
  }
`;

const Kanji405Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侔';
  }
`;

const Kanji406Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侕';
  }
`;

const Kanji407Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侖';
  }
`;

const Kanji408Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侗';
  }
`;

const Kanji409Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侘';
  }
`;

const Kanji410Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侙';
  }
`;

const Kanji411Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侚';
  }
`;

const Kanji412Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '供';
  }
`;

const Kanji413Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侜';
  }
`;

const Kanji414Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '依';
  }
`;

const Kanji415Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侞';
  }
`;

const Kanji416Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侟';
  }
`;

const Kanji417Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侠';
  }
`;

const Kanji418Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '価';
  }
`;

const Kanji419Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侢';
  }
`;

const Kanji420Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侣';
  }
`;

const Kanji421Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侤';
  }
`;

const Kanji422Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侥';
  }
`;

const Kanji423Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侦';
  }
`;

const Kanji424Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侧';
  }
`;

const Kanji425Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侨';
  }
`;

const Kanji426Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侩';
  }
`;

const Kanji427Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侪';
  }
`;

const Kanji428Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侫';
  }
`;

const Kanji429Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侬';
  }
`;

const Kanji430Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侭';
  }
`;

const Kanji431Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侮';
  }
`;

const Kanji432Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侯';
  }
`;

const Kanji433Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侰';
  }
`;

const Kanji434Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侱';
  }
`;

const Kanji435Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侲';
  }
`;

const Kanji436Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侳';
  }
`;

const Kanji437Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侴';
  }
`;

const Kanji438Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侵';
  }
`;

const Kanji439Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侶';
  }
`;

const Kanji440Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侷';
  }
`;

const Kanji441Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侸';
  }
`;

const Kanji442Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侹';
  }
`;

const Kanji443Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侺';
  }
`;

const Kanji444Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侻';
  }
`;

const Kanji445Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侼';
  }
`;

const Kanji446Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侽';
  }
`;

const Kanji447Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '侾';
  }
`;

const Kanji448Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '便';
  }
`;

const Kanji449Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俀';
  }
`;

const Kanji450Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俁';
  }
`;

const Kanji451Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '係';
  }
`;

const Kanji452Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '促';
  }
`;

const Kanji453Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俄';
  }
`;

const Kanji454Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俅';
  }
`;

const Kanji455Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俆';
  }
`;

const Kanji456Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俇';
  }
`;

const Kanji457Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俈';
  }
`;

const Kanji458Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俉';
  }
`;

const Kanji459Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俊';
  }
`;

const Kanji460Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俋';
  }
`;

const Kanji461Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俌';
  }
`;

const Kanji462Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俍';
  }
`;

const Kanji463Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俎';
  }
`;

const Kanji464Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俏';
  }
`;

const Kanji465Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俐';
  }
`;

const Kanji466Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俑';
  }
`;

const Kanji467Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俒';
  }
`;

const Kanji468Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俓';
  }
`;

const Kanji469Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俔';
  }
`;

const Kanji470Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俕';
  }
`;

const Kanji471Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俖';
  }
`;

const Kanji472Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俗';
  }
`;

const Kanji473Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俘';
  }
`;

const Kanji474Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俙';
  }
`;

const Kanji475Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俚';
  }
`;

const Kanji476Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俛';
  }
`;

const Kanji477Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俜';
  }
`;

const Kanji478Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '保';
  }
`;

const Kanji479Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俞';
  }
`;

const Kanji480Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俟';
  }
`;

const Kanji481Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俠';
  }
`;

const Kanji482Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '信';
  }
`;

const Kanji483Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俢';
  }
`;

const Kanji484Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俣';
  }
`;

const Kanji485Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俤';
  }
`;

const Kanji486Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俥';
  }
`;

const Kanji487Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俦';
  }
`;

const Kanji488Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俧';
  }
`;

const Kanji489Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俨';
  }
`;

const Kanji490Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俩';
  }
`;

const Kanji491Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俪';
  }
`;

const Kanji492Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俫';
  }
`;

const Kanji493Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俬';
  }
`;

const Kanji494Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俭';
  }
`;

const Kanji495Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '修';
  }
`;

const Kanji496Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俯';
  }
`;

const Kanji497Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俰';
  }
`;

const Kanji498Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俱';
  }
`;

const Kanji499Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俲';
  }
`;

const Kanji500Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俳';
  }
`;

const Kanji501Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俴';
  }
`;

const Kanji502Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俵';
  }
`;

const Kanji503Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俶';
  }
`;

const Kanji504Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俷';
  }
`;

const Kanji505Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俸';
  }
`;

const Kanji506Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俹';
  }
`;

const Kanji507Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俺';
  }
`;

const Kanji508Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俻';
  }
`;

const Kanji509Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俼';
  }
`;

const Kanji510Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俽';
  }
`;

const Kanji511Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俾';
  }
`;

const Kanji512Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '俿';
  }
`;

const Kanji513Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倀';
  }
`;

const Kanji514Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倁';
  }
`;

const Kanji515Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倂';
  }
`;

const Kanji516Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倃';
  }
`;

const Kanji517Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倄';
  }
`;

const Kanji518Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倅';
  }
`;

const Kanji519Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倆';
  }
`;

const Kanji520Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倇';
  }
`;

const Kanji521Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倈';
  }
`;

const Kanji522Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倉';
  }
`;

const Kanji523Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倊';
  }
`;

const Kanji524Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '個';
  }
`;

const Kanji525Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倌';
  }
`;

const Kanji526Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倍';
  }
`;

const Kanji527Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倎';
  }
`;

const Kanji528Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倏';
  }
`;

const Kanji529Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倐';
  }
`;

const Kanji530Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '們';
  }
`;

const Kanji531Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倒';
  }
`;

const Kanji532Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倓';
  }
`;

const Kanji533Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倔';
  }
`;

const Kanji534Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倕';
  }
`;

const Kanji535Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倖';
  }
`;

const Kanji536Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倗';
  }
`;

const Kanji537Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倘';
  }
`;

const Kanji538Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '候';
  }
`;

const Kanji539Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倚';
  }
`;

const Kanji540Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倛';
  }
`;

const Kanji541Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倜';
  }
`;

const Kanji542Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倝';
  }
`;

const Kanji543Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倞';
  }
`;

const Kanji544Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '借';
  }
`;

const Kanji545Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倠';
  }
`;

const Kanji546Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倡';
  }
`;

const Kanji547Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倢';
  }
`;

const Kanji548Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倣';
  }
`;

const Kanji549Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '値';
  }
`;

const Kanji550Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倥';
  }
`;

const Kanji551Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倦';
  }
`;

const Kanji552Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倧';
  }
`;

const Kanji553Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倨';
  }
`;

const Kanji554Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倩';
  }
`;

const Kanji555Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倪';
  }
`;

const Kanji556Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倫';
  }
`;

const Kanji557Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倬';
  }
`;

const Kanji558Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倭';
  }
`;

const Kanji559Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倮';
  }
`;

const Kanji560Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倯';
  }
`;

const Kanji561Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倰';
  }
`;

const Kanji562Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倱';
  }
`;

const Kanji563Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倲';
  }
`;

const Kanji564Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倳';
  }
`;

const Kanji565Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倴';
  }
`;

const Kanji566Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倵';
  }
`;

const Kanji567Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倶';
  }
`;

const Kanji568Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倷';
  }
`;

const Kanji569Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倸';
  }
`;

const Kanji570Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倹';
  }
`;

const Kanji571Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '债';
  }
`;

const Kanji572Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倻';
  }
`;

const Kanji573Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '值';
  }
`;

const Kanji574Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倽';
  }
`;

const Kanji575Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倾';
  }
`;

const Kanji576Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '倿';
  }
`;

const Kanji577Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偀';
  }
`;

const Kanji578Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偁';
  }
`;

const Kanji579Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偂';
  }
`;

const Kanji580Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偃';
  }
`;

const Kanji581Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偄';
  }
`;

const Kanji582Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偅';
  }
`;

const Kanji583Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偆';
  }
`;

const Kanji584Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '假';
  }
`;

const Kanji585Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偈';
  }
`;

const Kanji586Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偉';
  }
`;

const Kanji587Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偊';
  }
`;

const Kanji588Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偋';
  }
`;

const Kanji589Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偌';
  }
`;

const Kanji590Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偍';
  }
`;

const Kanji591Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偎';
  }
`;

const Kanji592Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偏';
  }
`;

const Kanji593Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偐';
  }
`;

const Kanji594Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偑';
  }
`;

const Kanji595Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偒';
  }
`;

const Kanji596Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偓';
  }
`;

const Kanji597Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偔';
  }
`;

const Kanji598Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偕';
  }
`;

const Kanji599Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偖';
  }
`;

const Kanji600Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偗';
  }
`;

const Kanji601Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偘';
  }
`;

const Kanji602Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偙';
  }
`;

const Kanji603Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '做';
  }
`;

const Kanji604Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偛';
  }
`;

const Kanji605Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '停';
  }
`;

const Kanji606Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偝';
  }
`;

const Kanji607Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偞';
  }
`;

const Kanji608Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偟';
  }
`;

const Kanji609Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偠';
  }
`;

const Kanji610Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偡';
  }
`;

const Kanji611Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偢';
  }
`;

const Kanji612Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偣';
  }
`;

const Kanji613Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偤';
  }
`;

const Kanji614Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '健';
  }
`;

const Kanji615Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偦';
  }
`;

const Kanji616Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偧';
  }
`;

const Kanji617Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偨';
  }
`;

const Kanji618Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偩';
  }
`;

const Kanji619Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偪';
  }
`;

const Kanji620Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偫';
  }
`;

const Kanji621Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偬';
  }
`;

const Kanji622Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偭';
  }
`;

const Kanji623Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偮';
  }
`;

const Kanji624Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偯';
  }
`;

const Kanji625Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偰';
  }
`;

const Kanji626Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偱';
  }
`;

const Kanji627Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偲';
  }
`;

const Kanji628Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偳';
  }
`;

const Kanji629Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '側';
  }
`;

const Kanji630Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偵';
  }
`;

const Kanji631Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偶';
  }
`;

const Kanji632Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偷';
  }
`;

const Kanji633Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偸';
  }
`;

const Kanji634Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偹';
  }
`;

const Kanji635Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偺';
  }
`;

const Kanji636Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偻';
  }
`;

const Kanji637Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偼';
  }
`;

const Kanji638Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偽';
  }
`;

const Kanji639Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偾';
  }
`;

const Kanji640Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '偿';
  }
`;

const Kanji641Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傀';
  }
`;

const Kanji642Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傁';
  }
`;

const Kanji643Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傂';
  }
`;

const Kanji644Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傃';
  }
`;

const Kanji645Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傄';
  }
`;

const Kanji646Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傅';
  }
`;

const Kanji647Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傆';
  }
`;

const Kanji648Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傇';
  }
`;

const Kanji649Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傈';
  }
`;

const Kanji650Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傉';
  }
`;

const Kanji651Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傊';
  }
`;

const Kanji652Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傋';
  }
`;

const Kanji653Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傌';
  }
`;

const Kanji654Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傍';
  }
`;

const Kanji655Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傎';
  }
`;

const Kanji656Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傏';
  }
`;

const Kanji657Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傐';
  }
`;

const Kanji658Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傑';
  }
`;

const Kanji659Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傒';
  }
`;

const Kanji660Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傓';
  }
`;

const Kanji661Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傔';
  }
`;

const Kanji662Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傕';
  }
`;

const Kanji663Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傖';
  }
`;

const Kanji664Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傗';
  }
`;

const Kanji665Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傘';
  }
`;

const Kanji666Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '備';
  }
`;

const Kanji667Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傚';
  }
`;

const Kanji668Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傛';
  }
`;

const Kanji669Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傜';
  }
`;

const Kanji670Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傝';
  }
`;

const Kanji671Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傞';
  }
`;

const Kanji672Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傟';
  }
`;

const Kanji673Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傠';
  }
`;

const Kanji674Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傡';
  }
`;

const Kanji675Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傢';
  }
`;

const Kanji676Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傣';
  }
`;

const Kanji677Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傤';
  }
`;

const Kanji678Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傥';
  }
`;

const Kanji679Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傦';
  }
`;

const Kanji680Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傧';
  }
`;

const Kanji681Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '储';
  }
`;

const Kanji682Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傩';
  }
`;

const Kanji683Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傪';
  }
`;

const Kanji684Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傫';
  }
`;

const Kanji685Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '催';
  }
`;

const Kanji686Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傭';
  }
`;

const Kanji687Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傮';
  }
`;

const Kanji688Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傯';
  }
`;

const Kanji689Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傰';
  }
`;

const Kanji690Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傱';
  }
`;

const Kanji691Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傲';
  }
`;

const Kanji692Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傳';
  }
`;

const Kanji693Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傴';
  }
`;

const Kanji694Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '債';
  }
`;

const Kanji695Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傶';
  }
`;

const Kanji696Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傷';
  }
`;

const Kanji697Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傸';
  }
`;

const Kanji698Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傹';
  }
`;

const Kanji699Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傺';
  }
`;

const Kanji700Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傻';
  }
`;

const Kanji701Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傼';
  }
`;

const Kanji702Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傽';
  }
`;

const Kanji703Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傾';
  }
`;

const Kanji704Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '傿';
  }
`;

const Kanji705Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僀';
  }
`;

const Kanji706Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僁';
  }
`;

const Kanji707Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僂';
  }
`;

const Kanji708Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僃';
  }
`;

const Kanji709Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僄';
  }
`;

const Kanji710Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僅';
  }
`;

const Kanji711Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僆';
  }
`;

const Kanji712Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僇';
  }
`;

const Kanji713Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僈';
  }
`;

const Kanji714Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僉';
  }
`;

const Kanji715Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僊';
  }
`;

const Kanji716Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僋';
  }
`;

const Kanji717Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僌';
  }
`;

const Kanji718Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '働';
  }
`;

const Kanji719Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僎';
  }
`;

const Kanji720Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '像';
  }
`;

const Kanji721Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僐';
  }
`;

const Kanji722Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僑';
  }
`;

const Kanji723Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僒';
  }
`;

const Kanji724Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僓';
  }
`;

const Kanji725Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僔';
  }
`;

const Kanji726Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僕';
  }
`;

const Kanji727Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僖';
  }
`;

const Kanji728Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僗';
  }
`;

const Kanji729Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僘';
  }
`;

const Kanji730Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僙';
  }
`;

const Kanji731Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僚';
  }
`;

const Kanji732Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僛';
  }
`;

const Kanji733Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僜';
  }
`;

const Kanji734Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僝';
  }
`;

const Kanji735Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僞';
  }
`;

const Kanji736Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僟';
  }
`;

const Kanji737Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僠';
  }
`;

const Kanji738Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僡';
  }
`;

const Kanji739Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僢';
  }
`;

const Kanji740Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僣';
  }
`;

const Kanji741Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僤';
  }
`;

const Kanji742Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僥';
  }
`;

const Kanji743Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僦';
  }
`;

const Kanji744Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僧';
  }
`;

const Kanji745Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僨';
  }
`;

const Kanji746Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僩';
  }
`;

const Kanji747Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僪';
  }
`;

const Kanji748Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僫';
  }
`;

const Kanji749Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僬';
  }
`;

const Kanji750Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僭';
  }
`;

const Kanji751Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僮';
  }
`;

const Kanji752Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僯';
  }
`;

const Kanji753Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僰';
  }
`;

const Kanji754Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僱';
  }
`;

const Kanji755Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僲';
  }
`;

const Kanji756Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僳';
  }
`;

const Kanji757Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僴';
  }
`;

const Kanji758Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僵';
  }
`;

const Kanji759Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僶';
  }
`;

const Kanji760Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僷';
  }
`;

const Kanji761Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僸';
  }
`;

const Kanji762Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '價';
  }
`;

const Kanji763Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僺';
  }
`;

const Kanji764Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僻';
  }
`;

const Kanji765Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僼';
  }
`;

const Kanji766Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僽';
  }
`;

const Kanji767Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僾';
  }
`;

const Kanji768Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '僿';
  }
`;

const Kanji769Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儀';
  }
`;

const Kanji770Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儁';
  }
`;

const Kanji771Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儂';
  }
`;

const Kanji772Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儃';
  }
`;

const Kanji773Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '億';
  }
`;

const Kanji774Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儅';
  }
`;

const Kanji775Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儆';
  }
`;

const Kanji776Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儇';
  }
`;

const Kanji777Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儈';
  }
`;

const Kanji778Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儉';
  }
`;

const Kanji779Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儊';
  }
`;

const Kanji780Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儋';
  }
`;

const Kanji781Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儌';
  }
`;

const Kanji782Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儍';
  }
`;

const Kanji783Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儎';
  }
`;

const Kanji784Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儏';
  }
`;

const Kanji785Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儐';
  }
`;

const Kanji786Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儑';
  }
`;

const Kanji787Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儒';
  }
`;

const Kanji788Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儓';
  }
`;

const Kanji789Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儔';
  }
`;

const Kanji790Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儕';
  }
`;

const Kanji791Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儖';
  }
`;

const Kanji792Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儗';
  }
`;

const Kanji793Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儘';
  }
`;

const Kanji794Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儙';
  }
`;

const Kanji795Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儚';
  }
`;

const Kanji796Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儛';
  }
`;

const Kanji797Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儜';
  }
`;

const Kanji798Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儝';
  }
`;

const Kanji799Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儞';
  }
`;

const Kanji800Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '償';
  }
`;

const Kanji801Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儠';
  }
`;

const Kanji802Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儡';
  }
`;

const Kanji803Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儢';
  }
`;

const Kanji804Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儣';
  }
`;

const Kanji805Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儤';
  }
`;

const Kanji806Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儥';
  }
`;

const Kanji807Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儦';
  }
`;

const Kanji808Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儧';
  }
`;

const Kanji809Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儨';
  }
`;

const Kanji810Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儩';
  }
`;

const Kanji811Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '優';
  }
`;

const Kanji812Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儫';
  }
`;

const Kanji813Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儬';
  }
`;

const Kanji814Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儭';
  }
`;

const Kanji815Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儮';
  }
`;

const Kanji816Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儯';
  }
`;

const Kanji817Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儰';
  }
`;

const Kanji818Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儱';
  }
`;

const Kanji819Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儲';
  }
`;

const Kanji820Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儳';
  }
`;

const Kanji821Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儴';
  }
`;

const Kanji822Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儵';
  }
`;

const Kanji823Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儶';
  }
`;

const Kanji824Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儷';
  }
`;

const Kanji825Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儸';
  }
`;

const Kanji826Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儹';
  }
`;

const Kanji827Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儺';
  }
`;

const Kanji828Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儻';
  }
`;

const Kanji829Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儼';
  }
`;

const Kanji830Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儽';
  }
`;

const Kanji831Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儾';
  }
`;

const Kanji832Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '儿';
  }
`;

const Kanji833Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兀';
  }
`;

const Kanji834Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '允';
  }
`;

const Kanji835Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兂';
  }
`;

const Kanji836Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '元';
  }
`;

const Kanji837Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兄';
  }
`;

const Kanji838Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '充';
  }
`;

const Kanji839Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兆';
  }
`;

const Kanji840Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兇';
  }
`;

const Kanji841Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '先';
  }
`;

const Kanji842Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '光';
  }
`;

const Kanji843Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兊';
  }
`;

const Kanji844Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '克';
  }
`;

const Kanji845Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兌';
  }
`;

const Kanji846Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '免';
  }
`;

const Kanji847Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兎';
  }
`;

const Kanji848Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兏';
  }
`;

const Kanji849Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '児';
  }
`;

const Kanji850Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兑';
  }
`;

const Kanji851Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兒';
  }
`;

const Kanji852Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兓';
  }
`;

const Kanji853Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兔';
  }
`;

const Kanji854Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兕';
  }
`;

const Kanji855Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兖';
  }
`;

const Kanji856Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兗';
  }
`;

const Kanji857Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兘';
  }
`;

const Kanji858Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兙';
  }
`;

const Kanji859Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '党';
  }
`;

const Kanji860Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兛';
  }
`;

const Kanji861Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兜';
  }
`;

const Kanji862Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兝';
  }
`;

const Kanji863Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兞';
  }
`;

const Kanji864Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兟';
  }
`;

const Kanji865Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兠';
  }
`;

const Kanji866Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兡';
  }
`;

const Kanji867Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兢';
  }
`;

const Kanji868Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兣';
  }
`;

const Kanji869Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兤';
  }
`;

const Kanji870Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '入';
  }
`;

const Kanji871Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兦';
  }
`;

const Kanji872Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '內';
  }
`;

const Kanji873Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '全';
  }
`;

const Kanji874Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兩';
  }
`;

const Kanji875Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兪';
  }
`;

const Kanji876Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '八';
  }
`;

const Kanji877Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '公';
  }
`;

const Kanji878Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '六';
  }
`;

const Kanji879Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兮';
  }
`;

const Kanji880Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兯';
  }
`;

const Kanji881Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兰';
  }
`;

const Kanji882Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '共';
  }
`;

const Kanji883Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兲';
  }
`;

const Kanji884Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '关';
  }
`;

const Kanji885Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兴';
  }
`;

const Kanji886Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兵';
  }
`;

const Kanji887Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '其';
  }
`;

const Kanji888Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '具';
  }
`;

const Kanji889Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '典';
  }
`;

const Kanji890Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兹';
  }
`;

const Kanji891Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兺';
  }
`;

const Kanji892Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '养';
  }
`;

const Kanji893Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兼';
  }
`;

const Kanji894Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兽';
  }
`;

const Kanji895Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兾';
  }
`;

const Kanji896Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '兿';
  }
`;

const Kanji897Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冀';
  }
`;

const Kanji898Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冁';
  }
`;

const Kanji899Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冂';
  }
`;

const Kanji900Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冃';
  }
`;

const Kanji901Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冄';
  }
`;

const Kanji902Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '内';
  }
`;

const Kanji903Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '円';
  }
`;

const Kanji904Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冇';
  }
`;

const Kanji905Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冈';
  }
`;

const Kanji906Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冉';
  }
`;

const Kanji907Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冊';
  }
`;

const Kanji908Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冋';
  }
`;

const Kanji909Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '册';
  }
`;

const Kanji910Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '再';
  }
`;

const Kanji911Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冎';
  }
`;

const Kanji912Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冏';
  }
`;

const Kanji913Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冐';
  }
`;

const Kanji914Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冑';
  }
`;

const Kanji915Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冒';
  }
`;

const Kanji916Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冓';
  }
`;

const Kanji917Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冔';
  }
`;

const Kanji918Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冕';
  }
`;

const Kanji919Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冖';
  }
`;

const Kanji920Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冗';
  }
`;

const Kanji921Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冘';
  }
`;

const Kanji922Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '写';
  }
`;

const Kanji923Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冚';
  }
`;

const Kanji924Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '军';
  }
`;

const Kanji925Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '农';
  }
`;

const Kanji926Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冝';
  }
`;

const Kanji927Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冞';
  }
`;

const Kanji928Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冟';
  }
`;

const Kanji929Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冠';
  }
`;

const Kanji930Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冡';
  }
`;

const Kanji931Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冢';
  }
`;

const Kanji932Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冣';
  }
`;

const Kanji933Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冤';
  }
`;

const Kanji934Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冥';
  }
`;

const Kanji935Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冦';
  }
`;

const Kanji936Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冧';
  }
`;

const Kanji937Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冨';
  }
`;

const Kanji938Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冩';
  }
`;

const Kanji939Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冪';
  }
`;

const Kanji940Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冫';
  }
`;

const Kanji941Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冬';
  }
`;

const Kanji942Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冭';
  }
`;

const Kanji943Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冮';
  }
`;

const Kanji944Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冯';
  }
`;

const Kanji945Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冰';
  }
`;

const Kanji946Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冱';
  }
`;

const Kanji947Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冲';
  }
`;

const Kanji948Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '决';
  }
`;

const Kanji949Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冴';
  }
`;

const Kanji950Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '况';
  }
`;

const Kanji951Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冶';
  }
`;

const Kanji952Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冷';
  }
`;

const Kanji953Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冸';
  }
`;

const Kanji954Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冹';
  }
`;

const Kanji955Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冺';
  }
`;

const Kanji956Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冻';
  }
`;

const Kanji957Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冼';
  }
`;

const Kanji958Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冽';
  }
`;

const Kanji959Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冾';
  }
`;

const Kanji960Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '冿';
  }
`;

const Kanji961Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '净';
  }
`;

const Kanji962Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凁';
  }
`;

const Kanji963Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凂';
  }
`;

const Kanji964Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凃';
  }
`;

const Kanji965Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凄';
  }
`;

const Kanji966Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凅';
  }
`;

const Kanji967Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '准';
  }
`;

const Kanji968Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凇';
  }
`;

const Kanji969Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凈';
  }
`;

const Kanji970Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凉';
  }
`;

const Kanji971Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凊';
  }
`;

const Kanji972Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凋';
  }
`;

const Kanji973Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凌';
  }
`;

const Kanji974Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凍';
  }
`;

const Kanji975Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凎';
  }
`;

const Kanji976Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '减';
  }
`;

const Kanji977Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凐';
  }
`;

const Kanji978Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凑';
  }
`;

const Kanji979Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凒';
  }
`;

const Kanji980Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凓';
  }
`;

const Kanji981Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凔';
  }
`;

const Kanji982Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凕';
  }
`;

const Kanji983Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凖';
  }
`;

const Kanji984Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凗';
  }
`;

const Kanji985Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凘';
  }
`;

const Kanji986Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凙';
  }
`;

const Kanji987Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凚';
  }
`;

const Kanji988Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凛';
  }
`;

const Kanji989Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凜';
  }
`;

const Kanji990Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凝';
  }
`;

const Kanji991Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凞';
  }
`;

const Kanji992Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凟';
  }
`;

const Kanji993Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '几';
  }
`;

const Kanji994Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凡';
  }
`;

const Kanji995Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凢';
  }
`;

const Kanji996Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凣';
  }
`;

const Kanji997Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凤';
  }
`;

const Kanji998Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凥';
  }
`;

const Kanji999Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '処';
  }
`;

const Kanji1000Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凧';
  }
`;

const Kanji1001Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凨';
  }
`;

const Kanji1002Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凩';
  }
`;

const Kanji1003Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凪';
  }
`;

const Kanji1004Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凫';
  }
`;

const Kanji1005Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凬';
  }
`;

const Kanji1006Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凭';
  }
`;

const Kanji1007Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凮';
  }
`;

const Kanji1008Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凯';
  }
`;

const Kanji1009Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凰';
  }
`;

const Kanji1010Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凱';
  }
`;

const Kanji1011Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凲';
  }
`;

const Kanji1012Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凳';
  }
`;

const Kanji1013Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凴';
  }
`;

const Kanji1014Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凵';
  }
`;

const Kanji1015Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凶';
  }
`;

const Kanji1016Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凷';
  }
`;

const Kanji1017Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凸';
  }
`;

const Kanji1018Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凹';
  }
`;

const Kanji1019Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '出';
  }
`;

const Kanji1020Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '击';
  }
`;

const Kanji1021Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凼';
  }
`;

const Kanji1022Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '函';
  }
`;

const Kanji1023Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凾';
  }
`;

const Kanji1024Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '凿';
  }
`;

const Kanji1025Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刀';
  }
`;

const Kanji1026Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刁';
  }
`;

const Kanji1027Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刂';
  }
`;

const Kanji1028Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刃';
  }
`;

const Kanji1029Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刄';
  }
`;

const Kanji1030Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刅';
  }
`;

const Kanji1031Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '分';
  }
`;

const Kanji1032Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '切';
  }
`;

const Kanji1033Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刈';
  }
`;

const Kanji1034Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刉';
  }
`;

const Kanji1035Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刊';
  }
`;

const Kanji1036Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刋';
  }
`;

const Kanji1037Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刌';
  }
`;

const Kanji1038Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刍';
  }
`;

const Kanji1039Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刎';
  }
`;

const Kanji1040Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刏';
  }
`;

const Kanji1041Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刐';
  }
`;

const Kanji1042Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刑';
  }
`;

const Kanji1043Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '划';
  }
`;

const Kanji1044Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刓';
  }
`;

const Kanji1045Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刔';
  }
`;

const Kanji1046Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刕';
  }
`;

const Kanji1047Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刖';
  }
`;

const Kanji1048Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '列';
  }
`;

const Kanji1049Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刘';
  }
`;

const Kanji1050Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '则';
  }
`;

const Kanji1051Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刚';
  }
`;

const Kanji1052Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '创';
  }
`;

const Kanji1053Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刜';
  }
`;

const Kanji1054Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '初';
  }
`;

const Kanji1055Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刞';
  }
`;

const Kanji1056Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刟';
  }
`;

const Kanji1057Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '删';
  }
`;

const Kanji1058Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刡';
  }
`;

const Kanji1059Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刢';
  }
`;

const Kanji1060Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刣';
  }
`;

const Kanji1061Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '判';
  }
`;

const Kanji1062Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '別';
  }
`;

const Kanji1063Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刦';
  }
`;

const Kanji1064Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刧';
  }
`;

const Kanji1065Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刨';
  }
`;

const Kanji1066Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '利';
  }
`;

const Kanji1067Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刪';
  }
`;

const Kanji1068Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '别';
  }
`;

const Kanji1069Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刬';
  }
`;

const Kanji1070Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刭';
  }
`;

const Kanji1071Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刮';
  }
`;

const Kanji1072Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刯';
  }
`;

const Kanji1073Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '到';
  }
`;

const Kanji1074Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刱';
  }
`;

const Kanji1075Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刲';
  }
`;

const Kanji1076Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刳';
  }
`;

const Kanji1077Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刴';
  }
`;

const Kanji1078Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刵';
  }
`;

const Kanji1079Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '制';
  }
`;

const Kanji1080Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刷';
  }
`;

const Kanji1081Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '券';
  }
`;

const Kanji1082Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刹';
  }
`;

const Kanji1083Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刺';
  }
`;

const Kanji1084Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刻';
  }
`;

const Kanji1085Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刼';
  }
`;

const Kanji1086Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刽';
  }
`;

const Kanji1087Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刾';
  }
`;

const Kanji1088Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '刿';
  }
`;

const Kanji1089Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剀';
  }
`;

const Kanji1090Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剁';
  }
`;

const Kanji1091Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剂';
  }
`;

const Kanji1092Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剃';
  }
`;

const Kanji1093Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剄';
  }
`;

const Kanji1094Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剅';
  }
`;

const Kanji1095Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剆';
  }
`;

const Kanji1096Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '則';
  }
`;

const Kanji1097Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剈';
  }
`;

const Kanji1098Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剉';
  }
`;

const Kanji1099Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '削';
  }
`;

const Kanji1100Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剋';
  }
`;

const Kanji1101Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剌';
  }
`;

const Kanji1102Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '前';
  }
`;

const Kanji1103Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剎';
  }
`;

const Kanji1104Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剏';
  }
`;

const Kanji1105Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剐';
  }
`;

const Kanji1106Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剑';
  }
`;

const Kanji1107Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剒';
  }
`;

const Kanji1108Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剓';
  }
`;

const Kanji1109Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剔';
  }
`;

const Kanji1110Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剕';
  }
`;

const Kanji1111Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剖';
  }
`;

const Kanji1112Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剗';
  }
`;

const Kanji1113Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剘';
  }
`;

const Kanji1114Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剙';
  }
`;

const Kanji1115Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剚';
  }
`;

const Kanji1116Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剛';
  }
`;

const Kanji1117Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剜';
  }
`;

const Kanji1118Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剝';
  }
`;

const Kanji1119Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剞';
  }
`;

const Kanji1120Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剟';
  }
`;

const Kanji1121Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剠';
  }
`;

const Kanji1122Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剡';
  }
`;

const Kanji1123Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剢';
  }
`;

const Kanji1124Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剣';
  }
`;

const Kanji1125Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剤';
  }
`;

const Kanji1126Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剥';
  }
`;

const Kanji1127Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剦';
  }
`;

const Kanji1128Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剧';
  }
`;

const Kanji1129Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剨';
  }
`;

const Kanji1130Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剩';
  }
`;

const Kanji1131Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剪';
  }
`;

const Kanji1132Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剫';
  }
`;

const Kanji1133Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剬';
  }
`;

const Kanji1134Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剭';
  }
`;

const Kanji1135Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剮';
  }
`;

const Kanji1136Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '副';
  }
`;

const Kanji1137Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剰';
  }
`;

const Kanji1138Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剱';
  }
`;

const Kanji1139Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '割';
  }
`;

const Kanji1140Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剳';
  }
`;

const Kanji1141Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剴';
  }
`;

const Kanji1142Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '創';
  }
`;

const Kanji1143Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剶';
  }
`;

const Kanji1144Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剷';
  }
`;

const Kanji1145Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剸';
  }
`;

const Kanji1146Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剹';
  }
`;

const Kanji1147Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剺';
  }
`;

const Kanji1148Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剻';
  }
`;

const Kanji1149Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剼';
  }
`;

const Kanji1150Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剽';
  }
`;

const Kanji1151Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剾';
  }
`;

const Kanji1152Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '剿';
  }
`;

const Kanji1153Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劀';
  }
`;

const Kanji1154Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劁';
  }
`;

const Kanji1155Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劂';
  }
`;

const Kanji1156Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劃';
  }
`;

const Kanji1157Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劄';
  }
`;

const Kanji1158Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劅';
  }
`;

const Kanji1159Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劆';
  }
`;

const Kanji1160Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劇';
  }
`;

const Kanji1161Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劈';
  }
`;

const Kanji1162Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劉';
  }
`;

const Kanji1163Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劊';
  }
`;

const Kanji1164Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劋';
  }
`;

const Kanji1165Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劌';
  }
`;

const Kanji1166Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劍';
  }
`;

const Kanji1167Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劎';
  }
`;

const Kanji1168Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劏';
  }
`;

const Kanji1169Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劐';
  }
`;

const Kanji1170Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劑';
  }
`;

const Kanji1171Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劒';
  }
`;

const Kanji1172Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劓';
  }
`;

const Kanji1173Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劔';
  }
`;

const Kanji1174Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劕';
  }
`;

const Kanji1175Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劖';
  }
`;

const Kanji1176Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劗';
  }
`;

const Kanji1177Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劘';
  }
`;

const Kanji1178Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劙';
  }
`;

const Kanji1179Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劚';
  }
`;

const Kanji1180Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '力';
  }
`;

const Kanji1181Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劜';
  }
`;

const Kanji1182Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劝';
  }
`;

const Kanji1183Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '办';
  }
`;

const Kanji1184Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '功';
  }
`;

const Kanji1185Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '加';
  }
`;

const Kanji1186Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '务';
  }
`;

const Kanji1187Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劢';
  }
`;

const Kanji1188Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劣';
  }
`;

const Kanji1189Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劤';
  }
`;

const Kanji1190Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劥';
  }
`;

const Kanji1191Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劦';
  }
`;

const Kanji1192Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劧';
  }
`;

const Kanji1193Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '动';
  }
`;

const Kanji1194Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '助';
  }
`;

const Kanji1195Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '努';
  }
`;

const Kanji1196Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劫';
  }
`;

const Kanji1197Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劬';
  }
`;

const Kanji1198Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劭';
  }
`;

const Kanji1199Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劮';
  }
`;

const Kanji1200Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劯';
  }
`;

const Kanji1201Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劰';
  }
`;

const Kanji1202Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '励';
  }
`;

const Kanji1203Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劲';
  }
`;

const Kanji1204Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劳';
  }
`;

const Kanji1205Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '労';
  }
`;

const Kanji1206Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劵';
  }
`;

const Kanji1207Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劶';
  }
`;

const Kanji1208Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劷';
  }
`;

const Kanji1209Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劸';
  }
`;

const Kanji1210Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '効';
  }
`;

const Kanji1211Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劺';
  }
`;

const Kanji1212Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劻';
  }
`;

const Kanji1213Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劼';
  }
`;

const Kanji1214Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劽';
  }
`;

const Kanji1215Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '劾';
  }
`;

const Kanji1216Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '势';
  }
`;

const Kanji1217Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勀';
  }
`;

const Kanji1218Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勁';
  }
`;

const Kanji1219Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勂';
  }
`;

const Kanji1220Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勃';
  }
`;

const Kanji1221Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勄';
  }
`;

const Kanji1222Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勅';
  }
`;

const Kanji1223Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勆';
  }
`;

const Kanji1224Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勇';
  }
`;

const Kanji1225Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勈';
  }
`;

const Kanji1226Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勉';
  }
`;

const Kanji1227Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勊';
  }
`;

const Kanji1228Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勋';
  }
`;

const Kanji1229Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勌';
  }
`;

const Kanji1230Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勍';
  }
`;

const Kanji1231Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勎';
  }
`;

const Kanji1232Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勏';
  }
`;

const Kanji1233Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勐';
  }
`;

const Kanji1234Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勑';
  }
`;

const Kanji1235Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勒';
  }
`;

const Kanji1236Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勓';
  }
`;

const Kanji1237Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勔';
  }
`;

const Kanji1238Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '動';
  }
`;

const Kanji1239Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勖';
  }
`;

const Kanji1240Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勗';
  }
`;

const Kanji1241Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勘';
  }
`;

const Kanji1242Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '務';
  }
`;

const Kanji1243Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勚';
  }
`;

const Kanji1244Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勛';
  }
`;

const Kanji1245Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勜';
  }
`;

const Kanji1246Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勝';
  }
`;

const Kanji1247Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勞';
  }
`;

const Kanji1248Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '募';
  }
`;

const Kanji1249Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勠';
  }
`;

const Kanji1250Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勡';
  }
`;

const Kanji1251Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勢';
  }
`;

const Kanji1252Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勣';
  }
`;

const Kanji1253Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勤';
  }
`;

const Kanji1254Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勥';
  }
`;

const Kanji1255Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勦';
  }
`;

const Kanji1256Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勧';
  }
`;

const Kanji1257Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勨';
  }
`;

const Kanji1258Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勩';
  }
`;

const Kanji1259Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勪';
  }
`;

const Kanji1260Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勫';
  }
`;

const Kanji1261Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勬';
  }
`;

const Kanji1262Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勭';
  }
`;

const Kanji1263Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勮';
  }
`;

const Kanji1264Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勯';
  }
`;

const Kanji1265Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勰';
  }
`;

const Kanji1266Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勱';
  }
`;

const Kanji1267Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勲';
  }
`;

const Kanji1268Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勳';
  }
`;

const Kanji1269Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勴';
  }
`;

const Kanji1270Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勵';
  }
`;

const Kanji1271Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勶';
  }
`;

const Kanji1272Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勷';
  }
`;

const Kanji1273Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勸';
  }
`;

const Kanji1274Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勹';
  }
`;

const Kanji1275Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勺';
  }
`;

const Kanji1276Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勻';
  }
`;

const Kanji1277Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勼';
  }
`;

const Kanji1278Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勽';
  }
`;

const Kanji1279Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勾';
  }
`;

const Kanji1280Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '勿';
  }
`;

const Kanji1281Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匀';
  }
`;

const Kanji1282Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匁';
  }
`;

const Kanji1283Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匂';
  }
`;

const Kanji1284Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匃';
  }
`;

const Kanji1285Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匄';
  }
`;

const Kanji1286Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '包';
  }
`;

const Kanji1287Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匆';
  }
`;

const Kanji1288Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匇';
  }
`;

const Kanji1289Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匈';
  }
`;

const Kanji1290Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匉';
  }
`;

const Kanji1291Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匊';
  }
`;

const Kanji1292Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匋';
  }
`;

const Kanji1293Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匌';
  }
`;

const Kanji1294Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匍';
  }
`;

const Kanji1295Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匎';
  }
`;

const Kanji1296Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匏';
  }
`;

const Kanji1297Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匐';
  }
`;

const Kanji1298Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匑';
  }
`;

const Kanji1299Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匒';
  }
`;

const Kanji1300Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匓';
  }
`;

const Kanji1301Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匔';
  }
`;

const Kanji1302Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匕';
  }
`;

const Kanji1303Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '化';
  }
`;

const Kanji1304Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '北';
  }
`;

const Kanji1305Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匘';
  }
`;

const Kanji1306Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匙';
  }
`;

const Kanji1307Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匚';
  }
`;

const Kanji1308Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匛';
  }
`;

const Kanji1309Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匜';
  }
`;

const Kanji1310Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匝';
  }
`;

const Kanji1311Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匞';
  }
`;

const Kanji1312Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匟';
  }
`;

const Kanji1313Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匠';
  }
`;

const Kanji1314Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匡';
  }
`;

const Kanji1315Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匢';
  }
`;

const Kanji1316Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匣';
  }
`;

const Kanji1317Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匤';
  }
`;

const Kanji1318Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匥';
  }
`;

const Kanji1319Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匦';
  }
`;

const Kanji1320Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匧';
  }
`;

const Kanji1321Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匨';
  }
`;

const Kanji1322Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匩';
  }
`;

const Kanji1323Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匪';
  }
`;

const Kanji1324Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匫';
  }
`;

const Kanji1325Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匬';
  }
`;

const Kanji1326Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匭';
  }
`;

const Kanji1327Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匮';
  }
`;

const Kanji1328Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匯';
  }
`;

const Kanji1329Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匰';
  }
`;

const Kanji1330Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匱';
  }
`;

const Kanji1331Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匲';
  }
`;

const Kanji1332Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匳';
  }
`;

const Kanji1333Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匴';
  }
`;

const Kanji1334Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匵';
  }
`;

const Kanji1335Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匶';
  }
`;

const Kanji1336Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匷';
  }
`;

const Kanji1337Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匸';
  }
`;

const Kanji1338Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匹';
  }
`;

const Kanji1339Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '区';
  }
`;

const Kanji1340Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '医';
  }
`;

const Kanji1341Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匼';
  }
`;

const Kanji1342Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匽';
  }
`;

const Kanji1343Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匾';
  }
`;

const Kanji1344Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '匿';
  }
`;

const Kanji1345Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '區';
  }
`;

const Kanji1346Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '十';
  }
`;

const Kanji1347Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卂';
  }
`;

const Kanji1348Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '千';
  }
`;

const Kanji1349Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卄';
  }
`;

const Kanji1350Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卅';
  }
`;

const Kanji1351Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卆';
  }
`;

const Kanji1352Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '升';
  }
`;

const Kanji1353Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '午';
  }
`;

const Kanji1354Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卉';
  }
`;

const Kanji1355Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '半';
  }
`;

const Kanji1356Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卋';
  }
`;

const Kanji1357Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卌';
  }
`;

const Kanji1358Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卍';
  }
`;

const Kanji1359Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '华';
  }
`;

const Kanji1360Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '协';
  }
`;

const Kanji1361Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卐';
  }
`;

const Kanji1362Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卑';
  }
`;

const Kanji1363Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卒';
  }
`;

const Kanji1364Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卓';
  }
`;

const Kanji1365Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '協';
  }
`;

const Kanji1366Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '单';
  }
`;

const Kanji1367Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卖';
  }
`;

const Kanji1368Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '南';
  }
`;

const Kanji1369Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '単';
  }
`;

const Kanji1370Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卙';
  }
`;

const Kanji1371Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '博';
  }
`;

const Kanji1372Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卛';
  }
`;

const Kanji1373Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卜';
  }
`;

const Kanji1374Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卝';
  }
`;

const Kanji1375Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卞';
  }
`;

const Kanji1376Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卟';
  }
`;

const Kanji1377Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '占';
  }
`;

const Kanji1378Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卡';
  }
`;

const Kanji1379Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卢';
  }
`;

const Kanji1380Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卣';
  }
`;

const Kanji1381Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卤';
  }
`;

const Kanji1382Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卥';
  }
`;

const Kanji1383Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卦';
  }
`;

const Kanji1384Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卧';
  }
`;

const Kanji1385Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卨';
  }
`;

const Kanji1386Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卩';
  }
`;

const Kanji1387Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卪';
  }
`;

const Kanji1388Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卫';
  }
`;

const Kanji1389Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卬';
  }
`;

const Kanji1390Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卭';
  }
`;

const Kanji1391Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卮';
  }
`;

const Kanji1392Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卯';
  }
`;

const Kanji1393Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '印';
  }
`;

const Kanji1394Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '危';
  }
`;

const Kanji1395Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卲';
  }
`;

const Kanji1396Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '即';
  }
`;

const Kanji1397Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '却';
  }
`;

const Kanji1398Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卵';
  }
`;

const Kanji1399Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卶';
  }
`;

const Kanji1400Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卷';
  }
`;

const Kanji1401Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卸';
  }
`;

const Kanji1402Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卹';
  }
`;

const Kanji1403Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卺';
  }
`;

const Kanji1404Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卻';
  }
`;

const Kanji1405Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卼';
  }
`;

const Kanji1406Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卽';
  }
`;

const Kanji1407Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卾';
  }
`;

const Kanji1408Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '卿';
  }
`;

const Kanji1409Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厀';
  }
`;

const Kanji1410Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厁';
  }
`;

const Kanji1411Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厂';
  }
`;

const Kanji1412Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厃';
  }
`;

const Kanji1413Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厄';
  }
`;

const Kanji1414Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厅';
  }
`;

const Kanji1415Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '历';
  }
`;

const Kanji1416Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厇';
  }
`;

const Kanji1417Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厈';
  }
`;

const Kanji1418Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厉';
  }
`;

const Kanji1419Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厊';
  }
`;

const Kanji1420Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '压';
  }
`;

const Kanji1421Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厌';
  }
`;

const Kanji1422Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厍';
  }
`;

const Kanji1423Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厎';
  }
`;

const Kanji1424Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厏';
  }
`;

const Kanji1425Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厐';
  }
`;

const Kanji1426Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厑';
  }
`;

const Kanji1427Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厒';
  }
`;

const Kanji1428Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厓';
  }
`;

const Kanji1429Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厔';
  }
`;

const Kanji1430Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厕';
  }
`;

const Kanji1431Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厖';
  }
`;

const Kanji1432Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厗';
  }
`;

const Kanji1433Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厘';
  }
`;

const Kanji1434Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厙';
  }
`;

const Kanji1435Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厚';
  }
`;

const Kanji1436Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厛';
  }
`;

const Kanji1437Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厜';
  }
`;

const Kanji1438Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厝';
  }
`;

const Kanji1439Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厞';
  }
`;

const Kanji1440Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '原';
  }
`;

const Kanji1441Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厠';
  }
`;

const Kanji1442Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厡';
  }
`;

const Kanji1443Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厢';
  }
`;

const Kanji1444Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厣';
  }
`;

const Kanji1445Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厤';
  }
`;

const Kanji1446Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厥';
  }
`;

const Kanji1447Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厦';
  }
`;

const Kanji1448Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厧';
  }
`;

const Kanji1449Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厨';
  }
`;

const Kanji1450Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厩';
  }
`;

const Kanji1451Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厪';
  }
`;

const Kanji1452Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厫';
  }
`;

const Kanji1453Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厬';
  }
`;

const Kanji1454Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厭';
  }
`;

const Kanji1455Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厮';
  }
`;

const Kanji1456Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厯';
  }
`;

const Kanji1457Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厰';
  }
`;

const Kanji1458Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厱';
  }
`;

const Kanji1459Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厲';
  }
`;

const Kanji1460Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厳';
  }
`;

const Kanji1461Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厴';
  }
`;

const Kanji1462Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厵';
  }
`;

const Kanji1463Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厶';
  }
`;

const Kanji1464Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厷';
  }
`;

const Kanji1465Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厸';
  }
`;

const Kanji1466Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厹';
  }
`;

const Kanji1467Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厺';
  }
`;

const Kanji1468Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '去';
  }
`;

const Kanji1469Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厼';
  }
`;

const Kanji1470Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厽';
  }
`;

const Kanji1471Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '厾';
  }
`;

const Kanji1472Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '县';
  }
`;

const Kanji1473Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叀';
  }
`;

const Kanji1474Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叁';
  }
`;

const Kanji1475Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '参';
  }
`;

const Kanji1476Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '參';
  }
`;

const Kanji1477Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叄';
  }
`;

const Kanji1478Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叅';
  }
`;

const Kanji1479Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叆';
  }
`;

const Kanji1480Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叇';
  }
`;

const Kanji1481Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '又';
  }
`;

const Kanji1482Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叉';
  }
`;

const Kanji1483Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '及';
  }
`;

const Kanji1484Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '友';
  }
`;

const Kanji1485Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '双';
  }
`;

const Kanji1486Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '反';
  }
`;

const Kanji1487Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '収';
  }
`;

const Kanji1488Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叏';
  }
`;

const Kanji1489Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叐';
  }
`;

const Kanji1490Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '发';
  }
`;

const Kanji1491Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叒';
  }
`;

const Kanji1492Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叓';
  }
`;

const Kanji1493Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叔';
  }
`;

const Kanji1494Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叕';
  }
`;

const Kanji1495Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '取';
  }
`;

const Kanji1496Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '受';
  }
`;

const Kanji1497Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '变';
  }
`;

const Kanji1498Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叙';
  }
`;

const Kanji1499Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叚';
  }
`;

const Kanji1500Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叛';
  }
`;

const Kanji1501Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叜';
  }
`;

const Kanji1502Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叝';
  }
`;

const Kanji1503Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叞';
  }
`;

const Kanji1504Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叟';
  }
`;

const Kanji1505Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叠';
  }
`;

const Kanji1506Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叡';
  }
`;

const Kanji1507Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叢';
  }
`;

const Kanji1508Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '口';
  }
`;

const Kanji1509Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '古';
  }
`;

const Kanji1510Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '句';
  }
`;

const Kanji1511Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '另';
  }
`;

const Kanji1512Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叧';
  }
`;

const Kanji1513Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叨';
  }
`;

const Kanji1514Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叩';
  }
`;

const Kanji1515Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '只';
  }
`;

const Kanji1516Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叫';
  }
`;

const Kanji1517Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '召';
  }
`;

const Kanji1518Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叭';
  }
`;

const Kanji1519Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叮';
  }
`;

const Kanji1520Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '可';
  }
`;

const Kanji1521Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '台';
  }
`;

const Kanji1522Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叱';
  }
`;

const Kanji1523Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '史';
  }
`;

const Kanji1524Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '右';
  }
`;

const Kanji1525Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叴';
  }
`;

const Kanji1526Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叵';
  }
`;

const Kanji1527Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叶';
  }
`;

const Kanji1528Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '号';
  }
`;

const Kanji1529Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '司';
  }
`;

const Kanji1530Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叹';
  }
`;

const Kanji1531Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叺';
  }
`;

const Kanji1532Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叻';
  }
`;

const Kanji1533Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叼';
  }
`;

const Kanji1534Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叽';
  }
`;

const Kanji1535Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叾';
  }
`;

const Kanji1536Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '叿';
  }
`;

const Kanji1537Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吀';
  }
`;

const Kanji1538Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吁';
  }
`;

const Kanji1539Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吂';
  }
`;

const Kanji1540Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吃';
  }
`;

const Kanji1541Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '各';
  }
`;

const Kanji1542Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吅';
  }
`;

const Kanji1543Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吆';
  }
`;

const Kanji1544Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吇';
  }
`;

const Kanji1545Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '合';
  }
`;

const Kanji1546Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吉';
  }
`;

const Kanji1547Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吊';
  }
`;

const Kanji1548Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吋';
  }
`;

const Kanji1549Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '同';
  }
`;

const Kanji1550Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '名';
  }
`;

const Kanji1551Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '后';
  }
`;

const Kanji1552Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吏';
  }
`;

const Kanji1553Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吐';
  }
`;

const Kanji1554Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '向';
  }
`;

const Kanji1555Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吒';
  }
`;

const Kanji1556Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吓';
  }
`;

const Kanji1557Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吔';
  }
`;

const Kanji1558Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吕';
  }
`;

const Kanji1559Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吖';
  }
`;

const Kanji1560Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吗';
  }
`;

const Kanji1561Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吘';
  }
`;

const Kanji1562Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吙';
  }
`;

const Kanji1563Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吚';
  }
`;

const Kanji1564Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '君';
  }
`;

const Kanji1565Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吜';
  }
`;

const Kanji1566Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吝';
  }
`;

const Kanji1567Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吞';
  }
`;

const Kanji1568Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吟';
  }
`;

const Kanji1569Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吠';
  }
`;

const Kanji1570Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吡';
  }
`;

const Kanji1571Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吢';
  }
`;

const Kanji1572Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吣';
  }
`;

const Kanji1573Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吤';
  }
`;

const Kanji1574Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吥';
  }
`;

const Kanji1575Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '否';
  }
`;

const Kanji1576Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吧';
  }
`;

const Kanji1577Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吨';
  }
`;

const Kanji1578Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吩';
  }
`;

const Kanji1579Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吪';
  }
`;

const Kanji1580Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '含';
  }
`;

const Kanji1581Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '听';
  }
`;

const Kanji1582Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吭';
  }
`;

const Kanji1583Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吮';
  }
`;

const Kanji1584Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '启';
  }
`;

const Kanji1585Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吰';
  }
`;

const Kanji1586Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吱';
  }
`;

const Kanji1587Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吲';
  }
`;

const Kanji1588Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吳';
  }
`;

const Kanji1589Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吴';
  }
`;

const Kanji1590Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吵';
  }
`;

const Kanji1591Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吶';
  }
`;

const Kanji1592Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吷';
  }
`;

const Kanji1593Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吸';
  }
`;

const Kanji1594Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吹';
  }
`;

const Kanji1595Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吺';
  }
`;

const Kanji1596Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吻';
  }
`;

const Kanji1597Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吼';
  }
`;

const Kanji1598Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吽';
  }
`;

const Kanji1599Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吾';
  }
`;

const Kanji1600Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '吿';
  }
`;

const Kanji1601Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呀';
  }
`;

const Kanji1602Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呁';
  }
`;

const Kanji1603Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呂';
  }
`;

const Kanji1604Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呃';
  }
`;

const Kanji1605Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呄';
  }
`;

const Kanji1606Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呅';
  }
`;

const Kanji1607Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呆';
  }
`;

const Kanji1608Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呇';
  }
`;

const Kanji1609Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呈';
  }
`;

const Kanji1610Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呉';
  }
`;

const Kanji1611Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '告';
  }
`;

const Kanji1612Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呋';
  }
`;

const Kanji1613Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呌';
  }
`;

const Kanji1614Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呍';
  }
`;

const Kanji1615Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呎';
  }
`;

const Kanji1616Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呏';
  }
`;

const Kanji1617Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呐';
  }
`;

const Kanji1618Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呑';
  }
`;

const Kanji1619Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呒';
  }
`;

const Kanji1620Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呓';
  }
`;

const Kanji1621Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呔';
  }
`;

const Kanji1622Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呕';
  }
`;

const Kanji1623Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呖';
  }
`;

const Kanji1624Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呗';
  }
`;

const Kanji1625Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '员';
  }
`;

const Kanji1626Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呙';
  }
`;

const Kanji1627Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呚';
  }
`;

const Kanji1628Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呛';
  }
`;

const Kanji1629Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呜';
  }
`;

const Kanji1630Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呝';
  }
`;

const Kanji1631Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呞';
  }
`;

const Kanji1632Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呟';
  }
`;

const Kanji1633Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呠';
  }
`;

const Kanji1634Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呡';
  }
`;

const Kanji1635Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呢';
  }
`;

const Kanji1636Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呣';
  }
`;

const Kanji1637Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呤';
  }
`;

const Kanji1638Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呥';
  }
`;

const Kanji1639Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呦';
  }
`;

const Kanji1640Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呧';
  }
`;

const Kanji1641Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '周';
  }
`;

const Kanji1642Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呩';
  }
`;

const Kanji1643Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呪';
  }
`;

const Kanji1644Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呫';
  }
`;

const Kanji1645Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呬';
  }
`;

const Kanji1646Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呭';
  }
`;

const Kanji1647Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呮';
  }
`;

const Kanji1648Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呯';
  }
`;

const Kanji1649Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呰';
  }
`;

const Kanji1650Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呱';
  }
`;

const Kanji1651Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呲';
  }
`;

const Kanji1652Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '味';
  }
`;

const Kanji1653Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呴';
  }
`;

const Kanji1654Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呵';
  }
`;

const Kanji1655Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呶';
  }
`;

const Kanji1656Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呷';
  }
`;

const Kanji1657Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呸';
  }
`;

const Kanji1658Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呹';
  }
`;

const Kanji1659Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呺';
  }
`;

const Kanji1660Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呻';
  }
`;

const Kanji1661Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呼';
  }
`;

const Kanji1662Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '命';
  }
`;

const Kanji1663Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呾';
  }
`;

const Kanji1664Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '呿';
  }
`;

const Kanji1665Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咀';
  }
`;

const Kanji1666Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咁';
  }
`;

const Kanji1667Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咂';
  }
`;

const Kanji1668Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咃';
  }
`;

const Kanji1669Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咄';
  }
`;

const Kanji1670Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咅';
  }
`;

const Kanji1671Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咆';
  }
`;

const Kanji1672Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咇';
  }
`;

const Kanji1673Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咈';
  }
`;

const Kanji1674Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咉';
  }
`;

const Kanji1675Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咊';
  }
`;

const Kanji1676Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咋';
  }
`;

const Kanji1677Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '和';
  }
`;

const Kanji1678Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咍';
  }
`;

const Kanji1679Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咎';
  }
`;

const Kanji1680Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咏';
  }
`;

const Kanji1681Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咐';
  }
`;

const Kanji1682Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咑';
  }
`;

const Kanji1683Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咒';
  }
`;

const Kanji1684Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咓';
  }
`;

const Kanji1685Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咔';
  }
`;

const Kanji1686Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咕';
  }
`;

const Kanji1687Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咖';
  }
`;

const Kanji1688Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咗';
  }
`;

const Kanji1689Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咘';
  }
`;

const Kanji1690Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咙';
  }
`;

const Kanji1691Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咚';
  }
`;

const Kanji1692Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咛';
  }
`;

const Kanji1693Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咜';
  }
`;

const Kanji1694Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咝';
  }
`;

const Kanji1695Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咞';
  }
`;

const Kanji1696Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咟';
  }
`;

const Kanji1697Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咠';
  }
`;

const Kanji1698Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咡';
  }
`;

const Kanji1699Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咢';
  }
`;

const Kanji1700Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咣';
  }
`;

const Kanji1701Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咤';
  }
`;

const Kanji1702Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咥';
  }
`;

const Kanji1703Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咦';
  }
`;

const Kanji1704Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咧';
  }
`;

const Kanji1705Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咨';
  }
`;

const Kanji1706Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咩';
  }
`;

const Kanji1707Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咪';
  }
`;

const Kanji1708Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咫';
  }
`;

const Kanji1709Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咬';
  }
`;

const Kanji1710Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咭';
  }
`;

const Kanji1711Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咮';
  }
`;

const Kanji1712Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咯';
  }
`;

const Kanji1713Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咰';
  }
`;

const Kanji1714Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咱';
  }
`;

const Kanji1715Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咲';
  }
`;

const Kanji1716Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咳';
  }
`;

const Kanji1717Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咴';
  }
`;

const Kanji1718Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咵';
  }
`;

const Kanji1719Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咶';
  }
`;

const Kanji1720Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咷';
  }
`;

const Kanji1721Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咸';
  }
`;

const Kanji1722Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咹';
  }
`;

const Kanji1723Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咺';
  }
`;

const Kanji1724Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咻';
  }
`;

const Kanji1725Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咼';
  }
`;

const Kanji1726Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咽';
  }
`;

const Kanji1727Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咾';
  }
`;

const Kanji1728Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '咿';
  }
`;

const Kanji1729Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哀';
  }
`;

const Kanji1730Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '品';
  }
`;

const Kanji1731Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哂';
  }
`;

const Kanji1732Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哃';
  }
`;

const Kanji1733Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哄';
  }
`;

const Kanji1734Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哅';
  }
`;

const Kanji1735Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哆';
  }
`;

const Kanji1736Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哇';
  }
`;

const Kanji1737Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哈';
  }
`;

const Kanji1738Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哉';
  }
`;

const Kanji1739Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哊';
  }
`;

const Kanji1740Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哋';
  }
`;

const Kanji1741Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哌';
  }
`;

const Kanji1742Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '响';
  }
`;

const Kanji1743Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哎';
  }
`;

const Kanji1744Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哏';
  }
`;

const Kanji1745Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哐';
  }
`;

const Kanji1746Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哑';
  }
`;

const Kanji1747Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哒';
  }
`;

const Kanji1748Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哓';
  }
`;

const Kanji1749Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哔';
  }
`;

const Kanji1750Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哕';
  }
`;

const Kanji1751Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哖';
  }
`;

const Kanji1752Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哗';
  }
`;

const Kanji1753Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哘';
  }
`;

const Kanji1754Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哙';
  }
`;

const Kanji1755Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哚';
  }
`;

const Kanji1756Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哛';
  }
`;

const Kanji1757Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哜';
  }
`;

const Kanji1758Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哝';
  }
`;

const Kanji1759Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哞';
  }
`;

const Kanji1760Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哟';
  }
`;

const Kanji1761Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哠';
  }
`;

const Kanji1762Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '員';
  }
`;

const Kanji1763Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哢';
  }
`;

const Kanji1764Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哣';
  }
`;

const Kanji1765Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哤';
  }
`;

const Kanji1766Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哥';
  }
`;

const Kanji1767Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哦';
  }
`;

const Kanji1768Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哧';
  }
`;

const Kanji1769Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哨';
  }
`;

const Kanji1770Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哩';
  }
`;

const Kanji1771Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哪';
  }
`;

const Kanji1772Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哫';
  }
`;

const Kanji1773Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哬';
  }
`;

const Kanji1774Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哭';
  }
`;

const Kanji1775Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哮';
  }
`;

const Kanji1776Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哯';
  }
`;

const Kanji1777Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哰';
  }
`;

const Kanji1778Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哱';
  }
`;

const Kanji1779Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哲';
  }
`;

const Kanji1780Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哳';
  }
`;

const Kanji1781Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哴';
  }
`;

const Kanji1782Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哵';
  }
`;

const Kanji1783Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哶';
  }
`;

const Kanji1784Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哷';
  }
`;

const Kanji1785Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哸';
  }
`;

const Kanji1786Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哹';
  }
`;

const Kanji1787Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哺';
  }
`;

const Kanji1788Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哻';
  }
`;

const Kanji1789Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哼';
  }
`;

const Kanji1790Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哽';
  }
`;

const Kanji1791Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哾';
  }
`;

const Kanji1792Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '哿';
  }
`;

const Kanji1793Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唀';
  }
`;

const Kanji1794Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唁';
  }
`;

const Kanji1795Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唂';
  }
`;

const Kanji1796Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唃';
  }
`;

const Kanji1797Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唄';
  }
`;

const Kanji1798Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唅';
  }
`;

const Kanji1799Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唆';
  }
`;

const Kanji1800Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唇';
  }
`;

const Kanji1801Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唈';
  }
`;

const Kanji1802Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唉';
  }
`;

const Kanji1803Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唊';
  }
`;

const Kanji1804Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唋';
  }
`;

const Kanji1805Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唌';
  }
`;

const Kanji1806Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唍';
  }
`;

const Kanji1807Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唎';
  }
`;

const Kanji1808Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唏';
  }
`;

const Kanji1809Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唐';
  }
`;

const Kanji1810Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唑';
  }
`;

const Kanji1811Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唒';
  }
`;

const Kanji1812Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唓';
  }
`;

const Kanji1813Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唔';
  }
`;

const Kanji1814Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唕';
  }
`;

const Kanji1815Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唖';
  }
`;

const Kanji1816Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唗';
  }
`;

const Kanji1817Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唘';
  }
`;

const Kanji1818Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唙';
  }
`;

const Kanji1819Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唚';
  }
`;

const Kanji1820Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唛';
  }
`;

const Kanji1821Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唜';
  }
`;

const Kanji1822Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唝';
  }
`;

const Kanji1823Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唞';
  }
`;

const Kanji1824Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唟';
  }
`;

const Kanji1825Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唠';
  }
`;

const Kanji1826Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唡';
  }
`;

const Kanji1827Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唢';
  }
`;

const Kanji1828Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唣';
  }
`;

const Kanji1829Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唤';
  }
`;

const Kanji1830Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唥';
  }
`;

const Kanji1831Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唦';
  }
`;

const Kanji1832Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唧';
  }
`;

const Kanji1833Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唨';
  }
`;

const Kanji1834Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唩';
  }
`;

const Kanji1835Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唪';
  }
`;

const Kanji1836Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唫';
  }
`;

const Kanji1837Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唬';
  }
`;

const Kanji1838Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唭';
  }
`;

const Kanji1839Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '售';
  }
`;

const Kanji1840Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唯';
  }
`;

const Kanji1841Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唰';
  }
`;

const Kanji1842Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唱';
  }
`;

const Kanji1843Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唲';
  }
`;

const Kanji1844Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唳';
  }
`;

const Kanji1845Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唴';
  }
`;

const Kanji1846Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唵';
  }
`;

const Kanji1847Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唶';
  }
`;

const Kanji1848Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唷';
  }
`;

const Kanji1849Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唸';
  }
`;

const Kanji1850Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唹';
  }
`;

const Kanji1851Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唺';
  }
`;

const Kanji1852Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唻';
  }
`;

const Kanji1853Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唼';
  }
`;

const Kanji1854Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唽';
  }
`;

const Kanji1855Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唾';
  }
`;

const Kanji1856Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '唿';
  }
`;

const Kanji1857Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啀';
  }
`;

const Kanji1858Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啁';
  }
`;

const Kanji1859Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啂';
  }
`;

const Kanji1860Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啃';
  }
`;

const Kanji1861Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啄';
  }
`;

const Kanji1862Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啅';
  }
`;

const Kanji1863Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '商';
  }
`;

const Kanji1864Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啇';
  }
`;

const Kanji1865Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啈';
  }
`;

const Kanji1866Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啉';
  }
`;

const Kanji1867Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啊';
  }
`;

const Kanji1868Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啋';
  }
`;

const Kanji1869Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啌';
  }
`;

const Kanji1870Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啍';
  }
`;

const Kanji1871Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啎';
  }
`;

const Kanji1872Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '問';
  }
`;

const Kanji1873Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啐';
  }
`;

const Kanji1874Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啑';
  }
`;

const Kanji1875Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啒';
  }
`;

const Kanji1876Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啓';
  }
`;

const Kanji1877Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啔';
  }
`;

const Kanji1878Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啕';
  }
`;

const Kanji1879Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啖';
  }
`;

const Kanji1880Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啗';
  }
`;

const Kanji1881Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啘';
  }
`;

const Kanji1882Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啙';
  }
`;

const Kanji1883Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啚';
  }
`;

const Kanji1884Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啛';
  }
`;

const Kanji1885Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啜';
  }
`;

const Kanji1886Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啝';
  }
`;

const Kanji1887Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啞';
  }
`;

const Kanji1888Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啟';
  }
`;

const Kanji1889Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啠';
  }
`;

const Kanji1890Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啡';
  }
`;

const Kanji1891Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啢';
  }
`;

const Kanji1892Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啣';
  }
`;

const Kanji1893Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啤';
  }
`;

const Kanji1894Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啥';
  }
`;

const Kanji1895Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啦';
  }
`;

const Kanji1896Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啧';
  }
`;

const Kanji1897Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啨';
  }
`;

const Kanji1898Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啩';
  }
`;

const Kanji1899Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啪';
  }
`;

const Kanji1900Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啫';
  }
`;

const Kanji1901Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啬';
  }
`;

const Kanji1902Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啭';
  }
`;

const Kanji1903Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啮';
  }
`;

const Kanji1904Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啯';
  }
`;

const Kanji1905Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啰';
  }
`;

const Kanji1906Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啱';
  }
`;

const Kanji1907Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啲';
  }
`;

const Kanji1908Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啳';
  }
`;

const Kanji1909Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啴';
  }
`;

const Kanji1910Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啵';
  }
`;

const Kanji1911Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啶';
  }
`;

const Kanji1912Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啷';
  }
`;

const Kanji1913Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啸';
  }
`;

const Kanji1914Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啹';
  }
`;

const Kanji1915Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啺';
  }
`;

const Kanji1916Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啻';
  }
`;

const Kanji1917Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啼';
  }
`;

const Kanji1918Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啽';
  }
`;

const Kanji1919Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啾';
  }
`;

const Kanji1920Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '啿';
  }
`;

const Kanji1921Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喀';
  }
`;

const Kanji1922Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喁';
  }
`;

const Kanji1923Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喂';
  }
`;

const Kanji1924Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喃';
  }
`;

const Kanji1925Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '善';
  }
`;

const Kanji1926Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喅';
  }
`;

const Kanji1927Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喆';
  }
`;

const Kanji1928Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喇';
  }
`;

const Kanji1929Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喈';
  }
`;

const Kanji1930Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喉';
  }
`;

const Kanji1931Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喊';
  }
`;

const Kanji1932Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喋';
  }
`;

const Kanji1933Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喌';
  }
`;

const Kanji1934Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喍';
  }
`;

const Kanji1935Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喎';
  }
`;

const Kanji1936Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喏';
  }
`;

const Kanji1937Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喐';
  }
`;

const Kanji1938Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喑';
  }
`;

const Kanji1939Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喒';
  }
`;

const Kanji1940Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喓';
  }
`;

const Kanji1941Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喔';
  }
`;

const Kanji1942Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喕';
  }
`;

const Kanji1943Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喖';
  }
`;

const Kanji1944Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喗';
  }
`;

const Kanji1945Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喘';
  }
`;

const Kanji1946Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喙';
  }
`;

const Kanji1947Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喚';
  }
`;

const Kanji1948Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喛';
  }
`;

const Kanji1949Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喜';
  }
`;

const Kanji1950Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喝';
  }
`;

const Kanji1951Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喞';
  }
`;

const Kanji1952Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喟';
  }
`;

const Kanji1953Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喠';
  }
`;

const Kanji1954Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喡';
  }
`;

const Kanji1955Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喢';
  }
`;

const Kanji1956Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喣';
  }
`;

const Kanji1957Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喤';
  }
`;

const Kanji1958Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喥';
  }
`;

const Kanji1959Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喦';
  }
`;

const Kanji1960Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喧';
  }
`;

const Kanji1961Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喨';
  }
`;

const Kanji1962Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喩';
  }
`;

const Kanji1963Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喪';
  }
`;

const Kanji1964Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喫';
  }
`;

const Kanji1965Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喬';
  }
`;

const Kanji1966Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喭';
  }
`;

const Kanji1967Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '單';
  }
`;

const Kanji1968Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喯';
  }
`;

const Kanji1969Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喰';
  }
`;

const Kanji1970Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喱';
  }
`;

const Kanji1971Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喲';
  }
`;

const Kanji1972Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喳';
  }
`;

const Kanji1973Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喴';
  }
`;

const Kanji1974Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喵';
  }
`;

const Kanji1975Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '営';
  }
`;

const Kanji1976Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喷';
  }
`;

const Kanji1977Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喸';
  }
`;

const Kanji1978Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喹';
  }
`;

const Kanji1979Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喺';
  }
`;

const Kanji1980Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喻';
  }
`;

const Kanji1981Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喼';
  }
`;

const Kanji1982Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喽';
  }
`;

const Kanji1983Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喾';
  }
`;

const Kanji1984Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '喿';
  }
`;

const Kanji1985Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗀';
  }
`;

const Kanji1986Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗁';
  }
`;

const Kanji1987Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗂';
  }
`;

const Kanji1988Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗃';
  }
`;

const Kanji1989Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗄';
  }
`;

const Kanji1990Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗅';
  }
`;

const Kanji1991Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗆';
  }
`;

const Kanji1992Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗇';
  }
`;

const Kanji1993Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗈';
  }
`;

const Kanji1994Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗉';
  }
`;

const Kanji1995Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗊';
  }
`;

const Kanji1996Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗋';
  }
`;

const Kanji1997Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗌';
  }
`;

const Kanji1998Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗍';
  }
`;

const Kanji1999Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗎';
  }
`;

const Kanji2000Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗏';
  }
`;

const Kanji2001Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗐';
  }
`;

const Kanji2002Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗑';
  }
`;

const Kanji2003Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗒';
  }
`;

const Kanji2004Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗓';
  }
`;

const Kanji2005Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗔';
  }
`;

const Kanji2006Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗕';
  }
`;

const Kanji2007Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗖';
  }
`;

const Kanji2008Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗗';
  }
`;

const Kanji2009Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗘';
  }
`;

const Kanji2010Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗙';
  }
`;

const Kanji2011Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗚';
  }
`;

const Kanji2012Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗛';
  }
`;

const Kanji2013Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗜';
  }
`;

const Kanji2014Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗝';
  }
`;

const Kanji2015Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗞';
  }
`;

const Kanji2016Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗟';
  }
`;

const Kanji2017Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗠';
  }
`;

const Kanji2018Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗡';
  }
`;

const Kanji2019Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗢';
  }
`;

const Kanji2020Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗣';
  }
`;

const Kanji2021Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗤';
  }
`;

const Kanji2022Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗥';
  }
`;

const Kanji2023Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗦';
  }
`;

const Kanji2024Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗧';
  }
`;

const Kanji2025Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗨';
  }
`;

const Kanji2026Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗩';
  }
`;

const Kanji2027Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗪';
  }
`;

const Kanji2028Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗫';
  }
`;

const Kanji2029Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗬';
  }
`;

const Kanji2030Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗭';
  }
`;

const Kanji2031Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗮';
  }
`;

const Kanji2032Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗯';
  }
`;

const Kanji2033Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗰';
  }
`;

const Kanji2034Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗱';
  }
`;

const Kanji2035Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗲';
  }
`;

const Kanji2036Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗳';
  }
`;

const Kanji2037Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗴';
  }
`;

const Kanji2038Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗵';
  }
`;

const Kanji2039Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗶';
  }
`;

const Kanji2040Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗷';
  }
`;

const Kanji2041Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗸';
  }
`;

const Kanji2042Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗹';
  }
`;

const Kanji2043Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗺';
  }
`;

const Kanji2044Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗻';
  }
`;

const Kanji2045Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗼';
  }
`;

const Kanji2046Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗽';
  }
`;

const Kanji2047Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗾';
  }
`;

const Kanji2048Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嗿';
  }
`;

const Kanji2049Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘀';
  }
`;

const Kanji2050Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘁';
  }
`;

const Kanji2051Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘂';
  }
`;

const Kanji2052Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘃';
  }
`;

const Kanji2053Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘄';
  }
`;

const Kanji2054Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘅';
  }
`;

const Kanji2055Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘆';
  }
`;

const Kanji2056Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘇';
  }
`;

const Kanji2057Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘈';
  }
`;

const Kanji2058Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘉';
  }
`;

const Kanji2059Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘊';
  }
`;

const Kanji2060Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘋';
  }
`;

const Kanji2061Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘌';
  }
`;

const Kanji2062Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘍';
  }
`;

const Kanji2063Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘎';
  }
`;

const Kanji2064Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘏';
  }
`;

const Kanji2065Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘐';
  }
`;

const Kanji2066Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘑';
  }
`;

const Kanji2067Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘒';
  }
`;

const Kanji2068Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘓';
  }
`;

const Kanji2069Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘔';
  }
`;

const Kanji2070Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘕';
  }
`;

const Kanji2071Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘖';
  }
`;

const Kanji2072Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘗';
  }
`;

const Kanji2073Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘘';
  }
`;

const Kanji2074Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘙';
  }
`;

const Kanji2075Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘚';
  }
`;

const Kanji2076Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘛';
  }
`;

const Kanji2077Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘜';
  }
`;

const Kanji2078Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘝';
  }
`;

const Kanji2079Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘞';
  }
`;

const Kanji2080Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘟';
  }
`;

const Kanji2081Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘠';
  }
`;

const Kanji2082Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘡';
  }
`;

const Kanji2083Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘢';
  }
`;

const Kanji2084Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘣';
  }
`;

const Kanji2085Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘤';
  }
`;

const Kanji2086Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘥';
  }
`;

const Kanji2087Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘦';
  }
`;

const Kanji2088Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘧';
  }
`;

const Kanji2089Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘨';
  }
`;

const Kanji2090Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘩';
  }
`;

const Kanji2091Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘪';
  }
`;

const Kanji2092Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘫';
  }
`;

const Kanji2093Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘬';
  }
`;

const Kanji2094Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘭';
  }
`;

const Kanji2095Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘮';
  }
`;

const Kanji2096Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘯';
  }
`;

const Kanji2097Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘰';
  }
`;

const Kanji2098Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘱';
  }
`;

const Kanji2099Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘲';
  }
`;

const Kanji2100Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘳';
  }
`;

const Kanji2101Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘴';
  }
`;

const Kanji2102Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘵';
  }
`;

const Kanji2103Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘶';
  }
`;

const Kanji2104Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘷';
  }
`;

const Kanji2105Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘸';
  }
`;

const Kanji2106Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘹';
  }
`;

const Kanji2107Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘺';
  }
`;

const Kanji2108Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘻';
  }
`;

const Kanji2109Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘼';
  }
`;

const Kanji2110Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘽';
  }
`;

const Kanji2111Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘾';
  }
`;

const Kanji2112Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嘿';
  }
`;

const Kanji2113Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噀';
  }
`;

const Kanji2114Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噁';
  }
`;

const Kanji2115Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噂';
  }
`;

const Kanji2116Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噃';
  }
`;

const Kanji2117Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噄';
  }
`;

const Kanji2118Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噅';
  }
`;

const Kanji2119Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噆';
  }
`;

const Kanji2120Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噇';
  }
`;

const Kanji2121Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噈';
  }
`;

const Kanji2122Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噉';
  }
`;

const Kanji2123Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噊';
  }
`;

const Kanji2124Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噋';
  }
`;

const Kanji2125Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噌';
  }
`;

const Kanji2126Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噍';
  }
`;

const Kanji2127Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噎';
  }
`;

const Kanji2128Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噏';
  }
`;

const Kanji2129Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噐';
  }
`;

const Kanji2130Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噑';
  }
`;

const Kanji2131Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噒';
  }
`;

const Kanji2132Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噓';
  }
`;

const Kanji2133Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噔';
  }
`;

const Kanji2134Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噕';
  }
`;

const Kanji2135Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噖';
  }
`;

const Kanji2136Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噗';
  }
`;

const Kanji2137Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噘';
  }
`;

const Kanji2138Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噙';
  }
`;

const Kanji2139Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噚';
  }
`;

const Kanji2140Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噛';
  }
`;

const Kanji2141Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噜';
  }
`;

const Kanji2142Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噝';
  }
`;

const Kanji2143Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噞';
  }
`;

const Kanji2144Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噟';
  }
`;

const Kanji2145Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噠';
  }
`;

const Kanji2146Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噡';
  }
`;

const Kanji2147Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噢';
  }
`;

const Kanji2148Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噣';
  }
`;

const Kanji2149Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噤';
  }
`;

const Kanji2150Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噥';
  }
`;

const Kanji2151Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噦';
  }
`;

const Kanji2152Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噧';
  }
`;

const Kanji2153Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '器';
  }
`;

const Kanji2154Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噩';
  }
`;

const Kanji2155Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噪';
  }
`;

const Kanji2156Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噫';
  }
`;

const Kanji2157Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噬';
  }
`;

const Kanji2158Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噭';
  }
`;

const Kanji2159Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噮';
  }
`;

const Kanji2160Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噯';
  }
`;

const Kanji2161Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噰';
  }
`;

const Kanji2162Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噱';
  }
`;

const Kanji2163Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噲';
  }
`;

const Kanji2164Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噳';
  }
`;

const Kanji2165Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噴';
  }
`;

const Kanji2166Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噵';
  }
`;

const Kanji2167Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噶';
  }
`;

const Kanji2168Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噷';
  }
`;

const Kanji2169Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噸';
  }
`;

const Kanji2170Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噹';
  }
`;

const Kanji2171Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噺';
  }
`;

const Kanji2172Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噻';
  }
`;

const Kanji2173Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噼';
  }
`;

const Kanji2174Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噽';
  }
`;

const Kanji2175Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噾';
  }
`;

const Kanji2176Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '噿';
  }
`;

const Kanji2177Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚀';
  }
`;

const Kanji2178Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚁';
  }
`;

const Kanji2179Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚂';
  }
`;

const Kanji2180Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚃';
  }
`;

const Kanji2181Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚄';
  }
`;

const Kanji2182Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚅';
  }
`;

const Kanji2183Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚆';
  }
`;

const Kanji2184Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚇';
  }
`;

const Kanji2185Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚈';
  }
`;

const Kanji2186Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚉';
  }
`;

const Kanji2187Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚊';
  }
`;

const Kanji2188Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚋';
  }
`;

const Kanji2189Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚌';
  }
`;

const Kanji2190Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚍';
  }
`;

const Kanji2191Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚎';
  }
`;

const Kanji2192Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚏';
  }
`;

const Kanji2193Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚐';
  }
`;

const Kanji2194Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚑';
  }
`;

const Kanji2195Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚒';
  }
`;

const Kanji2196Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚓';
  }
`;

const Kanji2197Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚔';
  }
`;

const Kanji2198Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚕';
  }
`;

const Kanji2199Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚖';
  }
`;

const Kanji2200Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚗';
  }
`;

const Kanji2201Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚘';
  }
`;

const Kanji2202Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚙';
  }
`;

const Kanji2203Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚚';
  }
`;

const Kanji2204Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚛';
  }
`;

const Kanji2205Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚜';
  }
`;

const Kanji2206Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚝';
  }
`;

const Kanji2207Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚞';
  }
`;

const Kanji2208Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚟';
  }
`;

const Kanji2209Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚠';
  }
`;

const Kanji2210Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚡';
  }
`;

const Kanji2211Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚢';
  }
`;

const Kanji2212Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚣';
  }
`;

const Kanji2213Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚤';
  }
`;

const Kanji2214Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚥';
  }
`;

const Kanji2215Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚦';
  }
`;

const Kanji2216Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚧';
  }
`;

const Kanji2217Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚨';
  }
`;

const Kanji2218Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚩';
  }
`;

const Kanji2219Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚪';
  }
`;

const Kanji2220Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚫';
  }
`;

const Kanji2221Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚬';
  }
`;

const Kanji2222Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚭';
  }
`;

const Kanji2223Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚮';
  }
`;

const Kanji2224Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚯';
  }
`;

const Kanji2225Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚰';
  }
`;

const Kanji2226Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚱';
  }
`;

const Kanji2227Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚲';
  }
`;

const Kanji2228Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚳';
  }
`;

const Kanji2229Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚴';
  }
`;

const Kanji2230Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚵';
  }
`;

const Kanji2231Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚶';
  }
`;

const Kanji2232Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚷';
  }
`;

const Kanji2233Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚸';
  }
`;

const Kanji2234Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚹';
  }
`;

const Kanji2235Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚺';
  }
`;

const Kanji2236Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚻';
  }
`;

const Kanji2237Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚼';
  }
`;

const Kanji2238Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚽';
  }
`;

const Kanji2239Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚾';
  }
`;

const Kanji2240Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '嚿';
  }
`;

const Kanji2241Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囀';
  }
`;

const Kanji2242Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囁';
  }
`;

const Kanji2243Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囂';
  }
`;

const Kanji2244Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囃';
  }
`;

const Kanji2245Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囄';
  }
`;

const Kanji2246Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囅';
  }
`;

const Kanji2247Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囆';
  }
`;

const Kanji2248Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囇';
  }
`;

const Kanji2249Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囈';
  }
`;

const Kanji2250Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囉';
  }
`;

const Kanji2251Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囊';
  }
`;

const Kanji2252Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囋';
  }
`;

const Kanji2253Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囌';
  }
`;

const Kanji2254Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囍';
  }
`;

const Kanji2255Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囎';
  }
`;

const Kanji2256Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囏';
  }
`;

const Kanji2257Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囐';
  }
`;

const Kanji2258Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囑';
  }
`;

const Kanji2259Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囒';
  }
`;

const Kanji2260Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囓';
  }
`;

const Kanji2261Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囔';
  }
`;

const Kanji2262Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囕';
  }
`;

const Kanji2263Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囖';
  }
`;

const Kanji2264Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囗';
  }
`;

const Kanji2265Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囘';
  }
`;

const Kanji2266Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囙';
  }
`;

const Kanji2267Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囚';
  }
`;

const Kanji2268Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '四';
  }
`;

const Kanji2269Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囜';
  }
`;

const Kanji2270Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囝';
  }
`;

const Kanji2271Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '回';
  }
`;

const Kanji2272Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囟';
  }
`;

const Kanji2273Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '因';
  }
`;

const Kanji2274Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囡';
  }
`;

const Kanji2275Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '团';
  }
`;

const Kanji2276Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '団';
  }
`;

const Kanji2277Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囤';
  }
`;

const Kanji2278Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囥';
  }
`;

const Kanji2279Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囦';
  }
`;

const Kanji2280Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囧';
  }
`;

const Kanji2281Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囨';
  }
`;

const Kanji2282Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囩';
  }
`;

const Kanji2283Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囪';
  }
`;

const Kanji2284Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囫';
  }
`;

const Kanji2285Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囬';
  }
`;

const Kanji2286Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '园';
  }
`;

const Kanji2287Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囮';
  }
`;

const Kanji2288Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囯';
  }
`;

const Kanji2289Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '困';
  }
`;

const Kanji2290Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囱';
  }
`;

const Kanji2291Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囲';
  }
`;

const Kanji2292Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '図';
  }
`;

const Kanji2293Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '围';
  }
`;

const Kanji2294Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囵';
  }
`;

const Kanji2295Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囶';
  }
`;

const Kanji2296Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囷';
  }
`;

const Kanji2297Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囸';
  }
`;

const Kanji2298Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囹';
  }
`;

const Kanji2299Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '固';
  }
`;

const Kanji2300Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囻';
  }
`;

const Kanji2301Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囼';
  }
`;

const Kanji2302Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '国';
  }
`;

const Kanji2303Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '图';
  }
`;

const Kanji2304Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '囿';
  }
`;

const Kanji2305Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圀';
  }
`;

const Kanji2306Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圁';
  }
`;

const Kanji2307Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圂';
  }
`;

const Kanji2308Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圃';
  }
`;

const Kanji2309Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圄';
  }
`;

const Kanji2310Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圅';
  }
`;

const Kanji2311Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圆';
  }
`;

const Kanji2312Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圇';
  }
`;

const Kanji2313Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圈';
  }
`;

const Kanji2314Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圉';
  }
`;

const Kanji2315Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圊';
  }
`;

const Kanji2316Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '國';
  }
`;

const Kanji2317Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圌';
  }
`;

const Kanji2318Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圍';
  }
`;

const Kanji2319Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圎';
  }
`;

const Kanji2320Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圏';
  }
`;

const Kanji2321Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圐';
  }
`;

const Kanji2322Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圑';
  }
`;

const Kanji2323Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '園';
  }
`;

const Kanji2324Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圓';
  }
`;

const Kanji2325Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圔';
  }
`;

const Kanji2326Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圕';
  }
`;

const Kanji2327Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圖';
  }
`;

const Kanji2328Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圗';
  }
`;

const Kanji2329Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '團';
  }
`;

const Kanji2330Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圙';
  }
`;

const Kanji2331Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圚';
  }
`;

const Kanji2332Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圛';
  }
`;

const Kanji2333Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圜';
  }
`;

const Kanji2334Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圝';
  }
`;

const Kanji2335Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圞';
  }
`;

const Kanji2336Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '土';
  }
`;

const Kanji2337Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圠';
  }
`;

const Kanji2338Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圡';
  }
`;

const Kanji2339Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圢';
  }
`;

const Kanji2340Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圣';
  }
`;

const Kanji2341Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圤';
  }
`;

const Kanji2342Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圥';
  }
`;

const Kanji2343Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圦';
  }
`;

const Kanji2344Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圧';
  }
`;

const Kanji2345Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '在';
  }
`;

const Kanji2346Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圩';
  }
`;

const Kanji2347Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圪';
  }
`;

const Kanji2348Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圫';
  }
`;

const Kanji2349Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圬';
  }
`;

const Kanji2350Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圭';
  }
`;

const Kanji2351Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圮';
  }
`;

const Kanji2352Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圯';
  }
`;

const Kanji2353Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '地';
  }
`;

const Kanji2354Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圱';
  }
`;

const Kanji2355Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圲';
  }
`;

const Kanji2356Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圳';
  }
`;

const Kanji2357Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圴';
  }
`;

const Kanji2358Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圵';
  }
`;

const Kanji2359Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圶';
  }
`;

const Kanji2360Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圷';
  }
`;

const Kanji2361Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圸';
  }
`;

const Kanji2362Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圹';
  }
`;

const Kanji2363Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '场';
  }
`;

const Kanji2364Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圻';
  }
`;

const Kanji2365Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圼';
  }
`;

const Kanji2366Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圽';
  }
`;

const Kanji2367Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圾';
  }
`;

const Kanji2368Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '圿';
  }
`;

const Kanji2369Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '址';
  }
`;

const Kanji2370Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坁';
  }
`;

const Kanji2371Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坂';
  }
`;

const Kanji2372Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坃';
  }
`;

const Kanji2373Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坄';
  }
`;

const Kanji2374Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坅';
  }
`;

const Kanji2375Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坆';
  }
`;

const Kanji2376Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '均';
  }
`;

const Kanji2377Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坈';
  }
`;

const Kanji2378Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坉';
  }
`;

const Kanji2379Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坊';
  }
`;

const Kanji2380Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坋';
  }
`;

const Kanji2381Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坌';
  }
`;

const Kanji2382Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坍';
  }
`;

const Kanji2383Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坎';
  }
`;

const Kanji2384Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坏';
  }
`;

const Kanji2385Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坐';
  }
`;

const Kanji2386Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坑';
  }
`;

const Kanji2387Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坒';
  }
`;

const Kanji2388Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坓';
  }
`;

const Kanji2389Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坔';
  }
`;

const Kanji2390Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坕';
  }
`;

const Kanji2391Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坖';
  }
`;

const Kanji2392Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '块';
  }
`;

const Kanji2393Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坘';
  }
`;

const Kanji2394Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坙';
  }
`;

const Kanji2395Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坚';
  }
`;

const Kanji2396Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坛';
  }
`;

const Kanji2397Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坜';
  }
`;

const Kanji2398Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坝';
  }
`;

const Kanji2399Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坞';
  }
`;

const Kanji2400Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坟';
  }
`;

const Kanji2401Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坠';
  }
`;

const Kanji2402Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坡';
  }
`;

const Kanji2403Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坢';
  }
`;

const Kanji2404Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坣';
  }
`;

const Kanji2405Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坤';
  }
`;

const Kanji2406Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坥';
  }
`;

const Kanji2407Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坦';
  }
`;

const Kanji2408Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坧';
  }
`;

const Kanji2409Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坨';
  }
`;

const Kanji2410Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坩';
  }
`;

const Kanji2411Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坪';
  }
`;

const Kanji2412Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坫';
  }
`;

const Kanji2413Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坬';
  }
`;

const Kanji2414Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坭';
  }
`;

const Kanji2415Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坮';
  }
`;

const Kanji2416Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坯';
  }
`;

const Kanji2417Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坰';
  }
`;

const Kanji2418Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坱';
  }
`;

const Kanji2419Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坲';
  }
`;

const Kanji2420Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坳';
  }
`;

const Kanji2421Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坴';
  }
`;

const Kanji2422Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坵';
  }
`;

const Kanji2423Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坶';
  }
`;

const Kanji2424Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坷';
  }
`;

const Kanji2425Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坸';
  }
`;

const Kanji2426Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坹';
  }
`;

const Kanji2427Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坺';
  }
`;

const Kanji2428Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坻';
  }
`;

const Kanji2429Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坼';
  }
`;

const Kanji2430Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坽';
  }
`;

const Kanji2431Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坾';
  }
`;

const Kanji2432Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '坿';
  }
`;

const Kanji2433Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垀';
  }
`;

const Kanji2434Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垁';
  }
`;

const Kanji2435Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垂';
  }
`;

const Kanji2436Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垃';
  }
`;

const Kanji2437Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垄';
  }
`;

const Kanji2438Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垅';
  }
`;

const Kanji2439Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垆';
  }
`;

const Kanji2440Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垇';
  }
`;

const Kanji2441Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垈';
  }
`;

const Kanji2442Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垉';
  }
`;

const Kanji2443Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垊';
  }
`;

const Kanji2444Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '型';
  }
`;

const Kanji2445Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垌';
  }
`;

const Kanji2446Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垍';
  }
`;

const Kanji2447Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垎';
  }
`;

const Kanji2448Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垏';
  }
`;

const Kanji2449Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垐';
  }
`;

const Kanji2450Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垑';
  }
`;

const Kanji2451Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垒';
  }
`;

const Kanji2452Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垓';
  }
`;

const Kanji2453Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垔';
  }
`;

const Kanji2454Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垕';
  }
`;

const Kanji2455Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垖';
  }
`;

const Kanji2456Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垗';
  }
`;

const Kanji2457Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垘';
  }
`;

const Kanji2458Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垙';
  }
`;

const Kanji2459Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垚';
  }
`;

const Kanji2460Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垛';
  }
`;

const Kanji2461Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垜';
  }
`;

const Kanji2462Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垝';
  }
`;

const Kanji2463Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垞';
  }
`;

const Kanji2464Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垟';
  }
`;

const Kanji2465Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垠';
  }
`;

const Kanji2466Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垡';
  }
`;

const Kanji2467Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垢';
  }
`;

const Kanji2468Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垣';
  }
`;

const Kanji2469Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垤';
  }
`;

const Kanji2470Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垥';
  }
`;

const Kanji2471Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垦';
  }
`;

const Kanji2472Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垧';
  }
`;

const Kanji2473Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垨';
  }
`;

const Kanji2474Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垩';
  }
`;

const Kanji2475Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垪';
  }
`;

const Kanji2476Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垫';
  }
`;

const Kanji2477Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垬';
  }
`;

const Kanji2478Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垭';
  }
`;

const Kanji2479Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垮';
  }
`;

const Kanji2480Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垯';
  }
`;

const Kanji2481Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垰';
  }
`;

const Kanji2482Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垱';
  }
`;

const Kanji2483Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垲';
  }
`;

const Kanji2484Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垳';
  }
`;

const Kanji2485Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垴';
  }
`;

const Kanji2486Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垵';
  }
`;

const Kanji2487Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垶';
  }
`;

const Kanji2488Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垷';
  }
`;

const Kanji2489Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垸';
  }
`;

const Kanji2490Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垹';
  }
`;

const Kanji2491Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垺';
  }
`;

const Kanji2492Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垻';
  }
`;

const Kanji2493Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垼';
  }
`;

const Kanji2494Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垽';
  }
`;

const Kanji2495Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垾';
  }
`;

const Kanji2496Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '垿';
  }
`;

const Kanji2497Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '埀';
  }
`;

const Kanji2498Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '埁';
  }
`;

const Kanji2499Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '埂';
  }
`;

const Kanji2500Character = styledYak(JapaneseCard)`
  font-size: 1em;
  @media (max-width: 640px) {
    font-size: 0.9em;
  }
  display: grid;
  &:before {
    display: block;
    color: #333;
    content: '埃';
  }
`;


const Wrapper = styledYak.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #eee;
    gap: 1rem;
    padding: 1rem;
`;

const baseButtonStyles = css`
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  display: block;
  position: relative;
  width: 100%;
  max-width: 200px;
`;


const BaseButton = styledYak.button`
  ${baseButtonStyles}
`;

const ButtonBadge = styledYak.span`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #f00;
  color: #fff;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transform: translate(50%, 50%);
`;

const RerenderButton = styledYak.button<{ $count: number }>`
  ${baseButtonStyles}
  ${({ $count }) => {
    switch ($count % 3) {
      case 0:
        return css`
          color: #333;
          background-color: #fff;
        `;
      case 1:
        return css`
          color: #fff;
          background-color: #333;
        `;
      case 2:
      default:
        return css`
          color: #333;
          background-color: #ff0;
        `;
      }
    }
  }
`;

const RerenderButtonMedia = styledYak.button<{ $count: number }>`
  ${baseButtonStyles}
  @media (min-width: 1px) {
    ${({ $count }) => {
      switch ($count % 3) {
        case 0:
          return css`
            color: #333;
            background-color: #fff;
          `;
        case 1:
          return css`
            color: #fff;
            background-color: #333;
          `;
        case 2:
        default:
          return css`
            color: #333;
            background-color: #ff0;
          `;
        }
      }
    }
  }
`;

const RenderButtonDynamic = styledYak.button<{ $count: number }>`
  ${baseButtonStyles}
  transform: rotate(${({ $count }) => $count}deg);
`;

const RenderButtonDynamicMedia = styledYak.button<{ $count: number }>`
  ${baseButtonStyles}
  @media (min-width: 1px) {
    transform: rotate(${({ $count }) => $count}deg);
  }
`;

const LibHeader = styledYak.h1`
  text-align: center;
  font-size: 2em;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const ButtonWrapper = styledYak.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  min-width: 100%;
  align-content: center;
  margin-bottom: 1rem;
  justify-content: center;
`;

const RoundSpan = styledYak.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #333;
`;

export const KanjiLetterComponentYak: FunctionComponent = () => {

  const [count0, setCount0] = React.useState(0);
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count4, setCount4] = React.useState(0);
  const [count5, setCount5] = React.useState(0);

  return (
    <>
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", opacity: 0 }}>
      {Array.from({ length: 10001 }, (_, index) => index).map((_, index) => (
        <RoundSpan key={index}>{index + 1}</RoundSpan>
      ))}
    </div>
    <LibHeader onClick={() => document.location.href = "/styled"  }>next-yak</LibHeader>
    <Wrapper 
      style={{ 
        // @ts-ignore
        "--count0": count0 
      }}
      className={`wrapper-${count5}`}
    >

      <ButtonWrapper>
        <BaseButton title="updates css variable on wrapper (next-yak)" onClick={() => {
          performance.mark("updates css variable on wrapper (next-yak)");
          setCount0(count0 + 1);
        }}>--count<ButtonBadge>{count0}</ButtonBadge></BaseButton>

        <RerenderButton title="changes color (next-yak)" onClick={() => {
          performance.mark("changes color (next-yak)");
          setCount1(count1 + 1);
        }} $count={count1}>Color<ButtonBadge>{count1}</ButtonBadge></RerenderButton>

        <RerenderButtonMedia title="changes color in @media (next-yak)" onClick={() => {
          performance.mark("changes color in @media (next-yak)");
          setCount2(count2 + 1);
        }} $count={count2}>Color (@media)<ButtonBadge>{count2}</ButtonBadge></RerenderButtonMedia>

        <RenderButtonDynamic title="changes dynamic value (next-yak)" onClick={() => {
          performance.mark("changes dynamic value (next-yak)");
          setCount3(count3 + 1);
        }} $count={count3}>Rotate<ButtonBadge>{count3}</ButtonBadge></RenderButtonDynamic>

        <RenderButtonDynamicMedia title="changes dynamic value in @media (next-yak)" onClick={() => {
          performance.mark("changes dynamic value in @media (next-yak)");
          setCount4(count4 + 1);
        }} $count={count4}>Rotate (@media)<ButtonBadge>{count3}</ButtonBadge></RenderButtonDynamicMedia>

        <BaseButton title="Wrapper className (next-yak)" onClick={() => {
          performance.mark("Wrapper className (next-yak)");
          setCount5(count5 + 1);
        }}>Wrapper className<ButtonBadge>{count5}</ButtonBadge></BaseButton>
      </ButtonWrapper>

      <FakeDataLoader><Kanji1Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2Character /></FakeDataLoader>
      <FakeDataLoader><Kanji3Character /></FakeDataLoader>
      <FakeDataLoader><Kanji4Character /></FakeDataLoader>
      <FakeDataLoader><Kanji5Character /></FakeDataLoader>
      <FakeDataLoader><Kanji6Character /></FakeDataLoader>
      <FakeDataLoader><Kanji7Character /></FakeDataLoader>
      <FakeDataLoader><Kanji8Character /></FakeDataLoader>
      <FakeDataLoader><Kanji9Character /></FakeDataLoader>
      <FakeDataLoader><Kanji10Character /></FakeDataLoader>
      <FakeDataLoader><Kanji11Character /></FakeDataLoader>
      <FakeDataLoader><Kanji12Character /></FakeDataLoader>
      <FakeDataLoader><Kanji13Character /></FakeDataLoader>
      <FakeDataLoader><Kanji14Character /></FakeDataLoader>
      <FakeDataLoader><Kanji15Character /></FakeDataLoader>
      <FakeDataLoader><Kanji16Character /></FakeDataLoader>
      <FakeDataLoader><Kanji17Character /></FakeDataLoader>
      <FakeDataLoader><Kanji18Character /></FakeDataLoader>
      <FakeDataLoader><Kanji19Character /></FakeDataLoader>
      <FakeDataLoader><Kanji20Character /></FakeDataLoader>
      <FakeDataLoader><Kanji21Character /></FakeDataLoader>
      <FakeDataLoader><Kanji22Character /></FakeDataLoader>
      <FakeDataLoader><Kanji23Character /></FakeDataLoader>
      <FakeDataLoader><Kanji24Character /></FakeDataLoader>
      <FakeDataLoader><Kanji25Character /></FakeDataLoader>
      <FakeDataLoader><Kanji26Character /></FakeDataLoader>
      <FakeDataLoader><Kanji27Character /></FakeDataLoader>
      <FakeDataLoader><Kanji28Character /></FakeDataLoader>
      <FakeDataLoader><Kanji29Character /></FakeDataLoader>
      <FakeDataLoader><Kanji30Character /></FakeDataLoader>
      <FakeDataLoader><Kanji31Character /></FakeDataLoader>
      <FakeDataLoader><Kanji32Character /></FakeDataLoader>
      <FakeDataLoader><Kanji33Character /></FakeDataLoader>
      <FakeDataLoader><Kanji34Character /></FakeDataLoader>
      <FakeDataLoader><Kanji35Character /></FakeDataLoader>
      <FakeDataLoader><Kanji36Character /></FakeDataLoader>
      <FakeDataLoader><Kanji37Character /></FakeDataLoader>
      <FakeDataLoader><Kanji38Character /></FakeDataLoader>
      <FakeDataLoader><Kanji39Character /></FakeDataLoader>
      <FakeDataLoader><Kanji40Character /></FakeDataLoader>
      <FakeDataLoader><Kanji41Character /></FakeDataLoader>
      <FakeDataLoader><Kanji42Character /></FakeDataLoader>
      <FakeDataLoader><Kanji43Character /></FakeDataLoader>
      <FakeDataLoader><Kanji44Character /></FakeDataLoader>
      <FakeDataLoader><Kanji45Character /></FakeDataLoader>
      <FakeDataLoader><Kanji46Character /></FakeDataLoader>
      <FakeDataLoader><Kanji47Character /></FakeDataLoader>
      <FakeDataLoader><Kanji48Character /></FakeDataLoader>
      <FakeDataLoader><Kanji49Character /></FakeDataLoader>
      <FakeDataLoader><Kanji50Character /></FakeDataLoader>
      <FakeDataLoader><Kanji51Character /></FakeDataLoader>
      <FakeDataLoader><Kanji52Character /></FakeDataLoader>
      <FakeDataLoader><Kanji53Character /></FakeDataLoader>
      <FakeDataLoader><Kanji54Character /></FakeDataLoader>
      <FakeDataLoader><Kanji55Character /></FakeDataLoader>
      <FakeDataLoader><Kanji56Character /></FakeDataLoader>
      <FakeDataLoader><Kanji57Character /></FakeDataLoader>
      <FakeDataLoader><Kanji58Character /></FakeDataLoader>
      <FakeDataLoader><Kanji59Character /></FakeDataLoader>
      <FakeDataLoader><Kanji60Character /></FakeDataLoader>
      <FakeDataLoader><Kanji61Character /></FakeDataLoader>
      <FakeDataLoader><Kanji62Character /></FakeDataLoader>
      <FakeDataLoader><Kanji63Character /></FakeDataLoader>
      <FakeDataLoader><Kanji64Character /></FakeDataLoader>
      <FakeDataLoader><Kanji65Character /></FakeDataLoader>
      <FakeDataLoader><Kanji66Character /></FakeDataLoader>
      <FakeDataLoader><Kanji67Character /></FakeDataLoader>
      <FakeDataLoader><Kanji68Character /></FakeDataLoader>
      <FakeDataLoader><Kanji69Character /></FakeDataLoader>
      <FakeDataLoader><Kanji70Character /></FakeDataLoader>
      <FakeDataLoader><Kanji71Character /></FakeDataLoader>
      <FakeDataLoader><Kanji72Character /></FakeDataLoader>
      <FakeDataLoader><Kanji73Character /></FakeDataLoader>
      <FakeDataLoader><Kanji74Character /></FakeDataLoader>
      <FakeDataLoader><Kanji75Character /></FakeDataLoader>
      <FakeDataLoader><Kanji76Character /></FakeDataLoader>
      <FakeDataLoader><Kanji77Character /></FakeDataLoader>
      <FakeDataLoader><Kanji78Character /></FakeDataLoader>
      <FakeDataLoader><Kanji79Character /></FakeDataLoader>
      <FakeDataLoader><Kanji80Character /></FakeDataLoader>
      <FakeDataLoader><Kanji81Character /></FakeDataLoader>
      <FakeDataLoader><Kanji82Character /></FakeDataLoader>
      <FakeDataLoader><Kanji83Character /></FakeDataLoader>
      <FakeDataLoader><Kanji84Character /></FakeDataLoader>
      <FakeDataLoader><Kanji85Character /></FakeDataLoader>
      <FakeDataLoader><Kanji86Character /></FakeDataLoader>
      <FakeDataLoader><Kanji87Character /></FakeDataLoader>
      <FakeDataLoader><Kanji88Character /></FakeDataLoader>
      <FakeDataLoader><Kanji89Character /></FakeDataLoader>
      <FakeDataLoader><Kanji90Character /></FakeDataLoader>
      <FakeDataLoader><Kanji91Character /></FakeDataLoader>
      <FakeDataLoader><Kanji92Character /></FakeDataLoader>
      <FakeDataLoader><Kanji93Character /></FakeDataLoader>
      <FakeDataLoader><Kanji94Character /></FakeDataLoader>
      <FakeDataLoader><Kanji95Character /></FakeDataLoader>
      <FakeDataLoader><Kanji96Character /></FakeDataLoader>
      <FakeDataLoader><Kanji97Character /></FakeDataLoader>
      <FakeDataLoader><Kanji98Character /></FakeDataLoader>
      <FakeDataLoader><Kanji99Character /></FakeDataLoader>
      <FakeDataLoader><Kanji100Character /></FakeDataLoader>
      <FakeDataLoader><Kanji101Character /></FakeDataLoader>
      <FakeDataLoader><Kanji102Character /></FakeDataLoader>
      <FakeDataLoader><Kanji103Character /></FakeDataLoader>
      <FakeDataLoader><Kanji104Character /></FakeDataLoader>
      <FakeDataLoader><Kanji105Character /></FakeDataLoader>
      <FakeDataLoader><Kanji106Character /></FakeDataLoader>
      <FakeDataLoader><Kanji107Character /></FakeDataLoader>
      <FakeDataLoader><Kanji108Character /></FakeDataLoader>
      <FakeDataLoader><Kanji109Character /></FakeDataLoader>
      <FakeDataLoader><Kanji110Character /></FakeDataLoader>
      <FakeDataLoader><Kanji111Character /></FakeDataLoader>
      <FakeDataLoader><Kanji112Character /></FakeDataLoader>
      <FakeDataLoader><Kanji113Character /></FakeDataLoader>
      <FakeDataLoader><Kanji114Character /></FakeDataLoader>
      <FakeDataLoader><Kanji115Character /></FakeDataLoader>
      <FakeDataLoader><Kanji116Character /></FakeDataLoader>
      <FakeDataLoader><Kanji117Character /></FakeDataLoader>
      <FakeDataLoader><Kanji118Character /></FakeDataLoader>
      <FakeDataLoader><Kanji119Character /></FakeDataLoader>
      <FakeDataLoader><Kanji120Character /></FakeDataLoader>
      <FakeDataLoader><Kanji121Character /></FakeDataLoader>
      <FakeDataLoader><Kanji122Character /></FakeDataLoader>
      <FakeDataLoader><Kanji123Character /></FakeDataLoader>
      <FakeDataLoader><Kanji124Character /></FakeDataLoader>
      <FakeDataLoader><Kanji125Character /></FakeDataLoader>
      <FakeDataLoader><Kanji126Character /></FakeDataLoader>
      <FakeDataLoader><Kanji127Character /></FakeDataLoader>
      <FakeDataLoader><Kanji128Character /></FakeDataLoader>
      <FakeDataLoader><Kanji129Character /></FakeDataLoader>
      <FakeDataLoader><Kanji130Character /></FakeDataLoader>
      <FakeDataLoader><Kanji131Character /></FakeDataLoader>
      <FakeDataLoader><Kanji132Character /></FakeDataLoader>
      <FakeDataLoader><Kanji133Character /></FakeDataLoader>
      <FakeDataLoader><Kanji134Character /></FakeDataLoader>
      <FakeDataLoader><Kanji135Character /></FakeDataLoader>
      <FakeDataLoader><Kanji136Character /></FakeDataLoader>
      <FakeDataLoader><Kanji137Character /></FakeDataLoader>
      <FakeDataLoader><Kanji138Character /></FakeDataLoader>
      <FakeDataLoader><Kanji139Character /></FakeDataLoader>
      <FakeDataLoader><Kanji140Character /></FakeDataLoader>
      <FakeDataLoader><Kanji141Character /></FakeDataLoader>
      <FakeDataLoader><Kanji142Character /></FakeDataLoader>
      <FakeDataLoader><Kanji143Character /></FakeDataLoader>
      <FakeDataLoader><Kanji144Character /></FakeDataLoader>
      <FakeDataLoader><Kanji145Character /></FakeDataLoader>
      <FakeDataLoader><Kanji146Character /></FakeDataLoader>
      <FakeDataLoader><Kanji147Character /></FakeDataLoader>
      <FakeDataLoader><Kanji148Character /></FakeDataLoader>
      <FakeDataLoader><Kanji149Character /></FakeDataLoader>
      <FakeDataLoader><Kanji150Character /></FakeDataLoader>
      <FakeDataLoader><Kanji151Character /></FakeDataLoader>
      <FakeDataLoader><Kanji152Character /></FakeDataLoader>
      <FakeDataLoader><Kanji153Character /></FakeDataLoader>
      <FakeDataLoader><Kanji154Character /></FakeDataLoader>
      <FakeDataLoader><Kanji155Character /></FakeDataLoader>
      <FakeDataLoader><Kanji156Character /></FakeDataLoader>
      <FakeDataLoader><Kanji157Character /></FakeDataLoader>
      <FakeDataLoader><Kanji158Character /></FakeDataLoader>
      <FakeDataLoader><Kanji159Character /></FakeDataLoader>
      <FakeDataLoader><Kanji160Character /></FakeDataLoader>
      <FakeDataLoader><Kanji161Character /></FakeDataLoader>
      <FakeDataLoader><Kanji162Character /></FakeDataLoader>
      <FakeDataLoader><Kanji163Character /></FakeDataLoader>
      <FakeDataLoader><Kanji164Character /></FakeDataLoader>
      <FakeDataLoader><Kanji165Character /></FakeDataLoader>
      <FakeDataLoader><Kanji166Character /></FakeDataLoader>
      <FakeDataLoader><Kanji167Character /></FakeDataLoader>
      <FakeDataLoader><Kanji168Character /></FakeDataLoader>
      <FakeDataLoader><Kanji169Character /></FakeDataLoader>
      <FakeDataLoader><Kanji170Character /></FakeDataLoader>
      <FakeDataLoader><Kanji171Character /></FakeDataLoader>
      <FakeDataLoader><Kanji172Character /></FakeDataLoader>
      <FakeDataLoader><Kanji173Character /></FakeDataLoader>
      <FakeDataLoader><Kanji174Character /></FakeDataLoader>
      <FakeDataLoader><Kanji175Character /></FakeDataLoader>
      <FakeDataLoader><Kanji176Character /></FakeDataLoader>
      <FakeDataLoader><Kanji177Character /></FakeDataLoader>
      <FakeDataLoader><Kanji178Character /></FakeDataLoader>
      <FakeDataLoader><Kanji179Character /></FakeDataLoader>
      <FakeDataLoader><Kanji180Character /></FakeDataLoader>
      <FakeDataLoader><Kanji181Character /></FakeDataLoader>
      <FakeDataLoader><Kanji182Character /></FakeDataLoader>
      <FakeDataLoader><Kanji183Character /></FakeDataLoader>
      <FakeDataLoader><Kanji184Character /></FakeDataLoader>
      <FakeDataLoader><Kanji185Character /></FakeDataLoader>
      <FakeDataLoader><Kanji186Character /></FakeDataLoader>
      <FakeDataLoader><Kanji187Character /></FakeDataLoader>
      <FakeDataLoader><Kanji188Character /></FakeDataLoader>
      <FakeDataLoader><Kanji189Character /></FakeDataLoader>
      <FakeDataLoader><Kanji190Character /></FakeDataLoader>
      <FakeDataLoader><Kanji191Character /></FakeDataLoader>
      <FakeDataLoader><Kanji192Character /></FakeDataLoader>
      <FakeDataLoader><Kanji193Character /></FakeDataLoader>
      <FakeDataLoader><Kanji194Character /></FakeDataLoader>
      <FakeDataLoader><Kanji195Character /></FakeDataLoader>
      <FakeDataLoader><Kanji196Character /></FakeDataLoader>
      <FakeDataLoader><Kanji197Character /></FakeDataLoader>
      <FakeDataLoader><Kanji198Character /></FakeDataLoader>
      <FakeDataLoader><Kanji199Character /></FakeDataLoader>
      <FakeDataLoader><Kanji200Character /></FakeDataLoader>
      <FakeDataLoader><Kanji201Character /></FakeDataLoader>
      <FakeDataLoader><Kanji202Character /></FakeDataLoader>
      <FakeDataLoader><Kanji203Character /></FakeDataLoader>
      <FakeDataLoader><Kanji204Character /></FakeDataLoader>
      <FakeDataLoader><Kanji205Character /></FakeDataLoader>
      <FakeDataLoader><Kanji206Character /></FakeDataLoader>
      <FakeDataLoader><Kanji207Character /></FakeDataLoader>
      <FakeDataLoader><Kanji208Character /></FakeDataLoader>
      <FakeDataLoader><Kanji209Character /></FakeDataLoader>
      <FakeDataLoader><Kanji210Character /></FakeDataLoader>
      <FakeDataLoader><Kanji211Character /></FakeDataLoader>
      <FakeDataLoader><Kanji212Character /></FakeDataLoader>
      <FakeDataLoader><Kanji213Character /></FakeDataLoader>
      <FakeDataLoader><Kanji214Character /></FakeDataLoader>
      <FakeDataLoader><Kanji215Character /></FakeDataLoader>
      <FakeDataLoader><Kanji216Character /></FakeDataLoader>
      <FakeDataLoader><Kanji217Character /></FakeDataLoader>
      <FakeDataLoader><Kanji218Character /></FakeDataLoader>
      <FakeDataLoader><Kanji219Character /></FakeDataLoader>
      <FakeDataLoader><Kanji220Character /></FakeDataLoader>
      <FakeDataLoader><Kanji221Character /></FakeDataLoader>
      <FakeDataLoader><Kanji222Character /></FakeDataLoader>
      <FakeDataLoader><Kanji223Character /></FakeDataLoader>
      <FakeDataLoader><Kanji224Character /></FakeDataLoader>
      <FakeDataLoader><Kanji225Character /></FakeDataLoader>
      <FakeDataLoader><Kanji226Character /></FakeDataLoader>
      <FakeDataLoader><Kanji227Character /></FakeDataLoader>
      <FakeDataLoader><Kanji228Character /></FakeDataLoader>
      <FakeDataLoader><Kanji229Character /></FakeDataLoader>
      <FakeDataLoader><Kanji230Character /></FakeDataLoader>
      <FakeDataLoader><Kanji231Character /></FakeDataLoader>
      <FakeDataLoader><Kanji232Character /></FakeDataLoader>
      <FakeDataLoader><Kanji233Character /></FakeDataLoader>
      <FakeDataLoader><Kanji234Character /></FakeDataLoader>
      <FakeDataLoader><Kanji235Character /></FakeDataLoader>
      <FakeDataLoader><Kanji236Character /></FakeDataLoader>
      <FakeDataLoader><Kanji237Character /></FakeDataLoader>
      <FakeDataLoader><Kanji238Character /></FakeDataLoader>
      <FakeDataLoader><Kanji239Character /></FakeDataLoader>
      <FakeDataLoader><Kanji240Character /></FakeDataLoader>
      <FakeDataLoader><Kanji241Character /></FakeDataLoader>
      <FakeDataLoader><Kanji242Character /></FakeDataLoader>
      <FakeDataLoader><Kanji243Character /></FakeDataLoader>
      <FakeDataLoader><Kanji244Character /></FakeDataLoader>
      <FakeDataLoader><Kanji245Character /></FakeDataLoader>
      <FakeDataLoader><Kanji246Character /></FakeDataLoader>
      <FakeDataLoader><Kanji247Character /></FakeDataLoader>
      <FakeDataLoader><Kanji248Character /></FakeDataLoader>
      <FakeDataLoader><Kanji249Character /></FakeDataLoader>
      <FakeDataLoader><Kanji250Character /></FakeDataLoader>
      <FakeDataLoader><Kanji251Character /></FakeDataLoader>
      <FakeDataLoader><Kanji252Character /></FakeDataLoader>
      <FakeDataLoader><Kanji253Character /></FakeDataLoader>
      <FakeDataLoader><Kanji254Character /></FakeDataLoader>
      <FakeDataLoader><Kanji255Character /></FakeDataLoader>
      <FakeDataLoader><Kanji256Character /></FakeDataLoader>
      <FakeDataLoader><Kanji257Character /></FakeDataLoader>
      <FakeDataLoader><Kanji258Character /></FakeDataLoader>
      <FakeDataLoader><Kanji259Character /></FakeDataLoader>
      <FakeDataLoader><Kanji260Character /></FakeDataLoader>
      <FakeDataLoader><Kanji261Character /></FakeDataLoader>
      <FakeDataLoader><Kanji262Character /></FakeDataLoader>
      <FakeDataLoader><Kanji263Character /></FakeDataLoader>
      <FakeDataLoader><Kanji264Character /></FakeDataLoader>
      <FakeDataLoader><Kanji265Character /></FakeDataLoader>
      <FakeDataLoader><Kanji266Character /></FakeDataLoader>
      <FakeDataLoader><Kanji267Character /></FakeDataLoader>
      <FakeDataLoader><Kanji268Character /></FakeDataLoader>
      <FakeDataLoader><Kanji269Character /></FakeDataLoader>
      <FakeDataLoader><Kanji270Character /></FakeDataLoader>
      <FakeDataLoader><Kanji271Character /></FakeDataLoader>
      <FakeDataLoader><Kanji272Character /></FakeDataLoader>
      <FakeDataLoader><Kanji273Character /></FakeDataLoader>
      <FakeDataLoader><Kanji274Character /></FakeDataLoader>
      <FakeDataLoader><Kanji275Character /></FakeDataLoader>
      <FakeDataLoader><Kanji276Character /></FakeDataLoader>
      <FakeDataLoader><Kanji277Character /></FakeDataLoader>
      <FakeDataLoader><Kanji278Character /></FakeDataLoader>
      <FakeDataLoader><Kanji279Character /></FakeDataLoader>
      <FakeDataLoader><Kanji280Character /></FakeDataLoader>
      <FakeDataLoader><Kanji281Character /></FakeDataLoader>
      <FakeDataLoader><Kanji282Character /></FakeDataLoader>
      <FakeDataLoader><Kanji283Character /></FakeDataLoader>
      <FakeDataLoader><Kanji284Character /></FakeDataLoader>
      <FakeDataLoader><Kanji285Character /></FakeDataLoader>
      <FakeDataLoader><Kanji286Character /></FakeDataLoader>
      <FakeDataLoader><Kanji287Character /></FakeDataLoader>
      <FakeDataLoader><Kanji288Character /></FakeDataLoader>
      <FakeDataLoader><Kanji289Character /></FakeDataLoader>
      <FakeDataLoader><Kanji290Character /></FakeDataLoader>
      <FakeDataLoader><Kanji291Character /></FakeDataLoader>
      <FakeDataLoader><Kanji292Character /></FakeDataLoader>
      <FakeDataLoader><Kanji293Character /></FakeDataLoader>
      <FakeDataLoader><Kanji294Character /></FakeDataLoader>
      <FakeDataLoader><Kanji295Character /></FakeDataLoader>
      <FakeDataLoader><Kanji296Character /></FakeDataLoader>
      <FakeDataLoader><Kanji297Character /></FakeDataLoader>
      <FakeDataLoader><Kanji298Character /></FakeDataLoader>
      <FakeDataLoader><Kanji299Character /></FakeDataLoader>
      <FakeDataLoader><Kanji300Character /></FakeDataLoader>
      <FakeDataLoader><Kanji301Character /></FakeDataLoader>
      <FakeDataLoader><Kanji302Character /></FakeDataLoader>
      <FakeDataLoader><Kanji303Character /></FakeDataLoader>
      <FakeDataLoader><Kanji304Character /></FakeDataLoader>
      <FakeDataLoader><Kanji305Character /></FakeDataLoader>
      <FakeDataLoader><Kanji306Character /></FakeDataLoader>
      <FakeDataLoader><Kanji307Character /></FakeDataLoader>
      <FakeDataLoader><Kanji308Character /></FakeDataLoader>
      <FakeDataLoader><Kanji309Character /></FakeDataLoader>
      <FakeDataLoader><Kanji310Character /></FakeDataLoader>
      <FakeDataLoader><Kanji311Character /></FakeDataLoader>
      <FakeDataLoader><Kanji312Character /></FakeDataLoader>
      <FakeDataLoader><Kanji313Character /></FakeDataLoader>
      <FakeDataLoader><Kanji314Character /></FakeDataLoader>
      <FakeDataLoader><Kanji315Character /></FakeDataLoader>
      <FakeDataLoader><Kanji316Character /></FakeDataLoader>
      <FakeDataLoader><Kanji317Character /></FakeDataLoader>
      <FakeDataLoader><Kanji318Character /></FakeDataLoader>
      <FakeDataLoader><Kanji319Character /></FakeDataLoader>
      <FakeDataLoader><Kanji320Character /></FakeDataLoader>
      <FakeDataLoader><Kanji321Character /></FakeDataLoader>
      <FakeDataLoader><Kanji322Character /></FakeDataLoader>
      <FakeDataLoader><Kanji323Character /></FakeDataLoader>
      <FakeDataLoader><Kanji324Character /></FakeDataLoader>
      <FakeDataLoader><Kanji325Character /></FakeDataLoader>
      <FakeDataLoader><Kanji326Character /></FakeDataLoader>
      <FakeDataLoader><Kanji327Character /></FakeDataLoader>
      <FakeDataLoader><Kanji328Character /></FakeDataLoader>
      <FakeDataLoader><Kanji329Character /></FakeDataLoader>
      <FakeDataLoader><Kanji330Character /></FakeDataLoader>
      <FakeDataLoader><Kanji331Character /></FakeDataLoader>
      <FakeDataLoader><Kanji332Character /></FakeDataLoader>
      <FakeDataLoader><Kanji333Character /></FakeDataLoader>
      <FakeDataLoader><Kanji334Character /></FakeDataLoader>
      <FakeDataLoader><Kanji335Character /></FakeDataLoader>
      <FakeDataLoader><Kanji336Character /></FakeDataLoader>
      <FakeDataLoader><Kanji337Character /></FakeDataLoader>
      <FakeDataLoader><Kanji338Character /></FakeDataLoader>
      <FakeDataLoader><Kanji339Character /></FakeDataLoader>
      <FakeDataLoader><Kanji340Character /></FakeDataLoader>
      <FakeDataLoader><Kanji341Character /></FakeDataLoader>
      <FakeDataLoader><Kanji342Character /></FakeDataLoader>
      <FakeDataLoader><Kanji343Character /></FakeDataLoader>
      <FakeDataLoader><Kanji344Character /></FakeDataLoader>
      <FakeDataLoader><Kanji345Character /></FakeDataLoader>
      <FakeDataLoader><Kanji346Character /></FakeDataLoader>
      <FakeDataLoader><Kanji347Character /></FakeDataLoader>
      <FakeDataLoader><Kanji348Character /></FakeDataLoader>
      <FakeDataLoader><Kanji349Character /></FakeDataLoader>
      <FakeDataLoader><Kanji350Character /></FakeDataLoader>
      <FakeDataLoader><Kanji351Character /></FakeDataLoader>
      <FakeDataLoader><Kanji352Character /></FakeDataLoader>
      <FakeDataLoader><Kanji353Character /></FakeDataLoader>
      <FakeDataLoader><Kanji354Character /></FakeDataLoader>
      <FakeDataLoader><Kanji355Character /></FakeDataLoader>
      <FakeDataLoader><Kanji356Character /></FakeDataLoader>
      <FakeDataLoader><Kanji357Character /></FakeDataLoader>
      <FakeDataLoader><Kanji358Character /></FakeDataLoader>
      <FakeDataLoader><Kanji359Character /></FakeDataLoader>
      <FakeDataLoader><Kanji360Character /></FakeDataLoader>
      <FakeDataLoader><Kanji361Character /></FakeDataLoader>
      <FakeDataLoader><Kanji362Character /></FakeDataLoader>
      <FakeDataLoader><Kanji363Character /></FakeDataLoader>
      <FakeDataLoader><Kanji364Character /></FakeDataLoader>
      <FakeDataLoader><Kanji365Character /></FakeDataLoader>
      <FakeDataLoader><Kanji366Character /></FakeDataLoader>
      <FakeDataLoader><Kanji367Character /></FakeDataLoader>
      <FakeDataLoader><Kanji368Character /></FakeDataLoader>
      <FakeDataLoader><Kanji369Character /></FakeDataLoader>
      <FakeDataLoader><Kanji370Character /></FakeDataLoader>
      <FakeDataLoader><Kanji371Character /></FakeDataLoader>
      <FakeDataLoader><Kanji372Character /></FakeDataLoader>
      <FakeDataLoader><Kanji373Character /></FakeDataLoader>
      <FakeDataLoader><Kanji374Character /></FakeDataLoader>
      <FakeDataLoader><Kanji375Character /></FakeDataLoader>
      <FakeDataLoader><Kanji376Character /></FakeDataLoader>
      <FakeDataLoader><Kanji377Character /></FakeDataLoader>
      <FakeDataLoader><Kanji378Character /></FakeDataLoader>
      <FakeDataLoader><Kanji379Character /></FakeDataLoader>
      <FakeDataLoader><Kanji380Character /></FakeDataLoader>
      <FakeDataLoader><Kanji381Character /></FakeDataLoader>
      <FakeDataLoader><Kanji382Character /></FakeDataLoader>
      <FakeDataLoader><Kanji383Character /></FakeDataLoader>
      <FakeDataLoader><Kanji384Character /></FakeDataLoader>
      <FakeDataLoader><Kanji385Character /></FakeDataLoader>
      <FakeDataLoader><Kanji386Character /></FakeDataLoader>
      <FakeDataLoader><Kanji387Character /></FakeDataLoader>
      <FakeDataLoader><Kanji388Character /></FakeDataLoader>
      <FakeDataLoader><Kanji389Character /></FakeDataLoader>
      <FakeDataLoader><Kanji390Character /></FakeDataLoader>
      <FakeDataLoader><Kanji391Character /></FakeDataLoader>
      <FakeDataLoader><Kanji392Character /></FakeDataLoader>
      <FakeDataLoader><Kanji393Character /></FakeDataLoader>
      <FakeDataLoader><Kanji394Character /></FakeDataLoader>
      <FakeDataLoader><Kanji395Character /></FakeDataLoader>
      <FakeDataLoader><Kanji396Character /></FakeDataLoader>
      <FakeDataLoader><Kanji397Character /></FakeDataLoader>
      <FakeDataLoader><Kanji398Character /></FakeDataLoader>
      <FakeDataLoader><Kanji399Character /></FakeDataLoader>
      <FakeDataLoader><Kanji400Character /></FakeDataLoader>
      <FakeDataLoader><Kanji401Character /></FakeDataLoader>
      <FakeDataLoader><Kanji402Character /></FakeDataLoader>
      <FakeDataLoader><Kanji403Character /></FakeDataLoader>
      <FakeDataLoader><Kanji404Character /></FakeDataLoader>
      <FakeDataLoader><Kanji405Character /></FakeDataLoader>
      <FakeDataLoader><Kanji406Character /></FakeDataLoader>
      <FakeDataLoader><Kanji407Character /></FakeDataLoader>
      <FakeDataLoader><Kanji408Character /></FakeDataLoader>
      <FakeDataLoader><Kanji409Character /></FakeDataLoader>
      <FakeDataLoader><Kanji410Character /></FakeDataLoader>
      <FakeDataLoader><Kanji411Character /></FakeDataLoader>
      <FakeDataLoader><Kanji412Character /></FakeDataLoader>
      <FakeDataLoader><Kanji413Character /></FakeDataLoader>
      <FakeDataLoader><Kanji414Character /></FakeDataLoader>
      <FakeDataLoader><Kanji415Character /></FakeDataLoader>
      <FakeDataLoader><Kanji416Character /></FakeDataLoader>
      <FakeDataLoader><Kanji417Character /></FakeDataLoader>
      <FakeDataLoader><Kanji418Character /></FakeDataLoader>
      <FakeDataLoader><Kanji419Character /></FakeDataLoader>
      <FakeDataLoader><Kanji420Character /></FakeDataLoader>
      <FakeDataLoader><Kanji421Character /></FakeDataLoader>
      <FakeDataLoader><Kanji422Character /></FakeDataLoader>
      <FakeDataLoader><Kanji423Character /></FakeDataLoader>
      <FakeDataLoader><Kanji424Character /></FakeDataLoader>
      <FakeDataLoader><Kanji425Character /></FakeDataLoader>
      <FakeDataLoader><Kanji426Character /></FakeDataLoader>
      <FakeDataLoader><Kanji427Character /></FakeDataLoader>
      <FakeDataLoader><Kanji428Character /></FakeDataLoader>
      <FakeDataLoader><Kanji429Character /></FakeDataLoader>
      <FakeDataLoader><Kanji430Character /></FakeDataLoader>
      <FakeDataLoader><Kanji431Character /></FakeDataLoader>
      <FakeDataLoader><Kanji432Character /></FakeDataLoader>
      <FakeDataLoader><Kanji433Character /></FakeDataLoader>
      <FakeDataLoader><Kanji434Character /></FakeDataLoader>
      <FakeDataLoader><Kanji435Character /></FakeDataLoader>
      <FakeDataLoader><Kanji436Character /></FakeDataLoader>
      <FakeDataLoader><Kanji437Character /></FakeDataLoader>
      <FakeDataLoader><Kanji438Character /></FakeDataLoader>
      <FakeDataLoader><Kanji439Character /></FakeDataLoader>
      <FakeDataLoader><Kanji440Character /></FakeDataLoader>
      <FakeDataLoader><Kanji441Character /></FakeDataLoader>
      <FakeDataLoader><Kanji442Character /></FakeDataLoader>
      <FakeDataLoader><Kanji443Character /></FakeDataLoader>
      <FakeDataLoader><Kanji444Character /></FakeDataLoader>
      <FakeDataLoader><Kanji445Character /></FakeDataLoader>
      <FakeDataLoader><Kanji446Character /></FakeDataLoader>
      <FakeDataLoader><Kanji447Character /></FakeDataLoader>
      <FakeDataLoader><Kanji448Character /></FakeDataLoader>
      <FakeDataLoader><Kanji449Character /></FakeDataLoader>
      <FakeDataLoader><Kanji450Character /></FakeDataLoader>
      <FakeDataLoader><Kanji451Character /></FakeDataLoader>
      <FakeDataLoader><Kanji452Character /></FakeDataLoader>
      <FakeDataLoader><Kanji453Character /></FakeDataLoader>
      <FakeDataLoader><Kanji454Character /></FakeDataLoader>
      <FakeDataLoader><Kanji455Character /></FakeDataLoader>
      <FakeDataLoader><Kanji456Character /></FakeDataLoader>
      <FakeDataLoader><Kanji457Character /></FakeDataLoader>
      <FakeDataLoader><Kanji458Character /></FakeDataLoader>
      <FakeDataLoader><Kanji459Character /></FakeDataLoader>
      <FakeDataLoader><Kanji460Character /></FakeDataLoader>
      <FakeDataLoader><Kanji461Character /></FakeDataLoader>
      <FakeDataLoader><Kanji462Character /></FakeDataLoader>
      <FakeDataLoader><Kanji463Character /></FakeDataLoader>
      <FakeDataLoader><Kanji464Character /></FakeDataLoader>
      <FakeDataLoader><Kanji465Character /></FakeDataLoader>
      <FakeDataLoader><Kanji466Character /></FakeDataLoader>
      <FakeDataLoader><Kanji467Character /></FakeDataLoader>
      <FakeDataLoader><Kanji468Character /></FakeDataLoader>
      <FakeDataLoader><Kanji469Character /></FakeDataLoader>
      <FakeDataLoader><Kanji470Character /></FakeDataLoader>
      <FakeDataLoader><Kanji471Character /></FakeDataLoader>
      <FakeDataLoader><Kanji472Character /></FakeDataLoader>
      <FakeDataLoader><Kanji473Character /></FakeDataLoader>
      <FakeDataLoader><Kanji474Character /></FakeDataLoader>
      <FakeDataLoader><Kanji475Character /></FakeDataLoader>
      <FakeDataLoader><Kanji476Character /></FakeDataLoader>
      <FakeDataLoader><Kanji477Character /></FakeDataLoader>
      <FakeDataLoader><Kanji478Character /></FakeDataLoader>
      <FakeDataLoader><Kanji479Character /></FakeDataLoader>
      <FakeDataLoader><Kanji480Character /></FakeDataLoader>
      <FakeDataLoader><Kanji481Character /></FakeDataLoader>
      <FakeDataLoader><Kanji482Character /></FakeDataLoader>
      <FakeDataLoader><Kanji483Character /></FakeDataLoader>
      <FakeDataLoader><Kanji484Character /></FakeDataLoader>
      <FakeDataLoader><Kanji485Character /></FakeDataLoader>
      <FakeDataLoader><Kanji486Character /></FakeDataLoader>
      <FakeDataLoader><Kanji487Character /></FakeDataLoader>
      <FakeDataLoader><Kanji488Character /></FakeDataLoader>
      <FakeDataLoader><Kanji489Character /></FakeDataLoader>
      <FakeDataLoader><Kanji490Character /></FakeDataLoader>
      <FakeDataLoader><Kanji491Character /></FakeDataLoader>
      <FakeDataLoader><Kanji492Character /></FakeDataLoader>
      <FakeDataLoader><Kanji493Character /></FakeDataLoader>
      <FakeDataLoader><Kanji494Character /></FakeDataLoader>
      <FakeDataLoader><Kanji495Character /></FakeDataLoader>
      <FakeDataLoader><Kanji496Character /></FakeDataLoader>
      <FakeDataLoader><Kanji497Character /></FakeDataLoader>
      <FakeDataLoader><Kanji498Character /></FakeDataLoader>
      <FakeDataLoader><Kanji499Character /></FakeDataLoader>
      <FakeDataLoader><Kanji500Character /></FakeDataLoader>
      <FakeDataLoader><Kanji501Character /></FakeDataLoader>
      <FakeDataLoader><Kanji502Character /></FakeDataLoader>
      <FakeDataLoader><Kanji503Character /></FakeDataLoader>
      <FakeDataLoader><Kanji504Character /></FakeDataLoader>
      <FakeDataLoader><Kanji505Character /></FakeDataLoader>
      <FakeDataLoader><Kanji506Character /></FakeDataLoader>
      <FakeDataLoader><Kanji507Character /></FakeDataLoader>
      <FakeDataLoader><Kanji508Character /></FakeDataLoader>
      <FakeDataLoader><Kanji509Character /></FakeDataLoader>
      <FakeDataLoader><Kanji510Character /></FakeDataLoader>
      <FakeDataLoader><Kanji511Character /></FakeDataLoader>
      <FakeDataLoader><Kanji512Character /></FakeDataLoader>
      <FakeDataLoader><Kanji513Character /></FakeDataLoader>
      <FakeDataLoader><Kanji514Character /></FakeDataLoader>
      <FakeDataLoader><Kanji515Character /></FakeDataLoader>
      <FakeDataLoader><Kanji516Character /></FakeDataLoader>
      <FakeDataLoader><Kanji517Character /></FakeDataLoader>
      <FakeDataLoader><Kanji518Character /></FakeDataLoader>
      <FakeDataLoader><Kanji519Character /></FakeDataLoader>
      <FakeDataLoader><Kanji520Character /></FakeDataLoader>
      <FakeDataLoader><Kanji521Character /></FakeDataLoader>
      <FakeDataLoader><Kanji522Character /></FakeDataLoader>
      <FakeDataLoader><Kanji523Character /></FakeDataLoader>
      <FakeDataLoader><Kanji524Character /></FakeDataLoader>
      <FakeDataLoader><Kanji525Character /></FakeDataLoader>
      <FakeDataLoader><Kanji526Character /></FakeDataLoader>
      <FakeDataLoader><Kanji527Character /></FakeDataLoader>
      <FakeDataLoader><Kanji528Character /></FakeDataLoader>
      <FakeDataLoader><Kanji529Character /></FakeDataLoader>
      <FakeDataLoader><Kanji530Character /></FakeDataLoader>
      <FakeDataLoader><Kanji531Character /></FakeDataLoader>
      <FakeDataLoader><Kanji532Character /></FakeDataLoader>
      <FakeDataLoader><Kanji533Character /></FakeDataLoader>
      <FakeDataLoader><Kanji534Character /></FakeDataLoader>
      <FakeDataLoader><Kanji535Character /></FakeDataLoader>
      <FakeDataLoader><Kanji536Character /></FakeDataLoader>
      <FakeDataLoader><Kanji537Character /></FakeDataLoader>
      <FakeDataLoader><Kanji538Character /></FakeDataLoader>
      <FakeDataLoader><Kanji539Character /></FakeDataLoader>
      <FakeDataLoader><Kanji540Character /></FakeDataLoader>
      <FakeDataLoader><Kanji541Character /></FakeDataLoader>
      <FakeDataLoader><Kanji542Character /></FakeDataLoader>
      <FakeDataLoader><Kanji543Character /></FakeDataLoader>
      <FakeDataLoader><Kanji544Character /></FakeDataLoader>
      <FakeDataLoader><Kanji545Character /></FakeDataLoader>
      <FakeDataLoader><Kanji546Character /></FakeDataLoader>
      <FakeDataLoader><Kanji547Character /></FakeDataLoader>
      <FakeDataLoader><Kanji548Character /></FakeDataLoader>
      <FakeDataLoader><Kanji549Character /></FakeDataLoader>
      <FakeDataLoader><Kanji550Character /></FakeDataLoader>
      <FakeDataLoader><Kanji551Character /></FakeDataLoader>
      <FakeDataLoader><Kanji552Character /></FakeDataLoader>
      <FakeDataLoader><Kanji553Character /></FakeDataLoader>
      <FakeDataLoader><Kanji554Character /></FakeDataLoader>
      <FakeDataLoader><Kanji555Character /></FakeDataLoader>
      <FakeDataLoader><Kanji556Character /></FakeDataLoader>
      <FakeDataLoader><Kanji557Character /></FakeDataLoader>
      <FakeDataLoader><Kanji558Character /></FakeDataLoader>
      <FakeDataLoader><Kanji559Character /></FakeDataLoader>
      <FakeDataLoader><Kanji560Character /></FakeDataLoader>
      <FakeDataLoader><Kanji561Character /></FakeDataLoader>
      <FakeDataLoader><Kanji562Character /></FakeDataLoader>
      <FakeDataLoader><Kanji563Character /></FakeDataLoader>
      <FakeDataLoader><Kanji564Character /></FakeDataLoader>
      <FakeDataLoader><Kanji565Character /></FakeDataLoader>
      <FakeDataLoader><Kanji566Character /></FakeDataLoader>
      <FakeDataLoader><Kanji567Character /></FakeDataLoader>
      <FakeDataLoader><Kanji568Character /></FakeDataLoader>
      <FakeDataLoader><Kanji569Character /></FakeDataLoader>
      <FakeDataLoader><Kanji570Character /></FakeDataLoader>
      <FakeDataLoader><Kanji571Character /></FakeDataLoader>
      <FakeDataLoader><Kanji572Character /></FakeDataLoader>
      <FakeDataLoader><Kanji573Character /></FakeDataLoader>
      <FakeDataLoader><Kanji574Character /></FakeDataLoader>
      <FakeDataLoader><Kanji575Character /></FakeDataLoader>
      <FakeDataLoader><Kanji576Character /></FakeDataLoader>
      <FakeDataLoader><Kanji577Character /></FakeDataLoader>
      <FakeDataLoader><Kanji578Character /></FakeDataLoader>
      <FakeDataLoader><Kanji579Character /></FakeDataLoader>
      <FakeDataLoader><Kanji580Character /></FakeDataLoader>
      <FakeDataLoader><Kanji581Character /></FakeDataLoader>
      <FakeDataLoader><Kanji582Character /></FakeDataLoader>
      <FakeDataLoader><Kanji583Character /></FakeDataLoader>
      <FakeDataLoader><Kanji584Character /></FakeDataLoader>
      <FakeDataLoader><Kanji585Character /></FakeDataLoader>
      <FakeDataLoader><Kanji586Character /></FakeDataLoader>
      <FakeDataLoader><Kanji587Character /></FakeDataLoader>
      <FakeDataLoader><Kanji588Character /></FakeDataLoader>
      <FakeDataLoader><Kanji589Character /></FakeDataLoader>
      <FakeDataLoader><Kanji590Character /></FakeDataLoader>
      <FakeDataLoader><Kanji591Character /></FakeDataLoader>
      <FakeDataLoader><Kanji592Character /></FakeDataLoader>
      <FakeDataLoader><Kanji593Character /></FakeDataLoader>
      <FakeDataLoader><Kanji594Character /></FakeDataLoader>
      <FakeDataLoader><Kanji595Character /></FakeDataLoader>
      <FakeDataLoader><Kanji596Character /></FakeDataLoader>
      <FakeDataLoader><Kanji597Character /></FakeDataLoader>
      <FakeDataLoader><Kanji598Character /></FakeDataLoader>
      <FakeDataLoader><Kanji599Character /></FakeDataLoader>
      <FakeDataLoader><Kanji600Character /></FakeDataLoader>
      <FakeDataLoader><Kanji601Character /></FakeDataLoader>
      <FakeDataLoader><Kanji602Character /></FakeDataLoader>
      <FakeDataLoader><Kanji603Character /></FakeDataLoader>
      <FakeDataLoader><Kanji604Character /></FakeDataLoader>
      <FakeDataLoader><Kanji605Character /></FakeDataLoader>
      <FakeDataLoader><Kanji606Character /></FakeDataLoader>
      <FakeDataLoader><Kanji607Character /></FakeDataLoader>
      <FakeDataLoader><Kanji608Character /></FakeDataLoader>
      <FakeDataLoader><Kanji609Character /></FakeDataLoader>
      <FakeDataLoader><Kanji610Character /></FakeDataLoader>
      <FakeDataLoader><Kanji611Character /></FakeDataLoader>
      <FakeDataLoader><Kanji612Character /></FakeDataLoader>
      <FakeDataLoader><Kanji613Character /></FakeDataLoader>
      <FakeDataLoader><Kanji614Character /></FakeDataLoader>
      <FakeDataLoader><Kanji615Character /></FakeDataLoader>
      <FakeDataLoader><Kanji616Character /></FakeDataLoader>
      <FakeDataLoader><Kanji617Character /></FakeDataLoader>
      <FakeDataLoader><Kanji618Character /></FakeDataLoader>
      <FakeDataLoader><Kanji619Character /></FakeDataLoader>
      <FakeDataLoader><Kanji620Character /></FakeDataLoader>
      <FakeDataLoader><Kanji621Character /></FakeDataLoader>
      <FakeDataLoader><Kanji622Character /></FakeDataLoader>
      <FakeDataLoader><Kanji623Character /></FakeDataLoader>
      <FakeDataLoader><Kanji624Character /></FakeDataLoader>
      <FakeDataLoader><Kanji625Character /></FakeDataLoader>
      <FakeDataLoader><Kanji626Character /></FakeDataLoader>
      <FakeDataLoader><Kanji627Character /></FakeDataLoader>
      <FakeDataLoader><Kanji628Character /></FakeDataLoader>
      <FakeDataLoader><Kanji629Character /></FakeDataLoader>
      <FakeDataLoader><Kanji630Character /></FakeDataLoader>
      <FakeDataLoader><Kanji631Character /></FakeDataLoader>
      <FakeDataLoader><Kanji632Character /></FakeDataLoader>
      <FakeDataLoader><Kanji633Character /></FakeDataLoader>
      <FakeDataLoader><Kanji634Character /></FakeDataLoader>
      <FakeDataLoader><Kanji635Character /></FakeDataLoader>
      <FakeDataLoader><Kanji636Character /></FakeDataLoader>
      <FakeDataLoader><Kanji637Character /></FakeDataLoader>
      <FakeDataLoader><Kanji638Character /></FakeDataLoader>
      <FakeDataLoader><Kanji639Character /></FakeDataLoader>
      <FakeDataLoader><Kanji640Character /></FakeDataLoader>
      <FakeDataLoader><Kanji641Character /></FakeDataLoader>
      <FakeDataLoader><Kanji642Character /></FakeDataLoader>
      <FakeDataLoader><Kanji643Character /></FakeDataLoader>
      <FakeDataLoader><Kanji644Character /></FakeDataLoader>
      <FakeDataLoader><Kanji645Character /></FakeDataLoader>
      <FakeDataLoader><Kanji646Character /></FakeDataLoader>
      <FakeDataLoader><Kanji647Character /></FakeDataLoader>
      <FakeDataLoader><Kanji648Character /></FakeDataLoader>
      <FakeDataLoader><Kanji649Character /></FakeDataLoader>
      <FakeDataLoader><Kanji650Character /></FakeDataLoader>
      <FakeDataLoader><Kanji651Character /></FakeDataLoader>
      <FakeDataLoader><Kanji652Character /></FakeDataLoader>
      <FakeDataLoader><Kanji653Character /></FakeDataLoader>
      <FakeDataLoader><Kanji654Character /></FakeDataLoader>
      <FakeDataLoader><Kanji655Character /></FakeDataLoader>
      <FakeDataLoader><Kanji656Character /></FakeDataLoader>
      <FakeDataLoader><Kanji657Character /></FakeDataLoader>
      <FakeDataLoader><Kanji658Character /></FakeDataLoader>
      <FakeDataLoader><Kanji659Character /></FakeDataLoader>
      <FakeDataLoader><Kanji660Character /></FakeDataLoader>
      <FakeDataLoader><Kanji661Character /></FakeDataLoader>
      <FakeDataLoader><Kanji662Character /></FakeDataLoader>
      <FakeDataLoader><Kanji663Character /></FakeDataLoader>
      <FakeDataLoader><Kanji664Character /></FakeDataLoader>
      <FakeDataLoader><Kanji665Character /></FakeDataLoader>
      <FakeDataLoader><Kanji666Character /></FakeDataLoader>
      <FakeDataLoader><Kanji667Character /></FakeDataLoader>
      <FakeDataLoader><Kanji668Character /></FakeDataLoader>
      <FakeDataLoader><Kanji669Character /></FakeDataLoader>
      <FakeDataLoader><Kanji670Character /></FakeDataLoader>
      <FakeDataLoader><Kanji671Character /></FakeDataLoader>
      <FakeDataLoader><Kanji672Character /></FakeDataLoader>
      <FakeDataLoader><Kanji673Character /></FakeDataLoader>
      <FakeDataLoader><Kanji674Character /></FakeDataLoader>
      <FakeDataLoader><Kanji675Character /></FakeDataLoader>
      <FakeDataLoader><Kanji676Character /></FakeDataLoader>
      <FakeDataLoader><Kanji677Character /></FakeDataLoader>
      <FakeDataLoader><Kanji678Character /></FakeDataLoader>
      <FakeDataLoader><Kanji679Character /></FakeDataLoader>
      <FakeDataLoader><Kanji680Character /></FakeDataLoader>
      <FakeDataLoader><Kanji681Character /></FakeDataLoader>
      <FakeDataLoader><Kanji682Character /></FakeDataLoader>
      <FakeDataLoader><Kanji683Character /></FakeDataLoader>
      <FakeDataLoader><Kanji684Character /></FakeDataLoader>
      <FakeDataLoader><Kanji685Character /></FakeDataLoader>
      <FakeDataLoader><Kanji686Character /></FakeDataLoader>
      <FakeDataLoader><Kanji687Character /></FakeDataLoader>
      <FakeDataLoader><Kanji688Character /></FakeDataLoader>
      <FakeDataLoader><Kanji689Character /></FakeDataLoader>
      <FakeDataLoader><Kanji690Character /></FakeDataLoader>
      <FakeDataLoader><Kanji691Character /></FakeDataLoader>
      <FakeDataLoader><Kanji692Character /></FakeDataLoader>
      <FakeDataLoader><Kanji693Character /></FakeDataLoader>
      <FakeDataLoader><Kanji694Character /></FakeDataLoader>
      <FakeDataLoader><Kanji695Character /></FakeDataLoader>
      <FakeDataLoader><Kanji696Character /></FakeDataLoader>
      <FakeDataLoader><Kanji697Character /></FakeDataLoader>
      <FakeDataLoader><Kanji698Character /></FakeDataLoader>
      <FakeDataLoader><Kanji699Character /></FakeDataLoader>
      <FakeDataLoader><Kanji700Character /></FakeDataLoader>
      <FakeDataLoader><Kanji701Character /></FakeDataLoader>
      <FakeDataLoader><Kanji702Character /></FakeDataLoader>
      <FakeDataLoader><Kanji703Character /></FakeDataLoader>
      <FakeDataLoader><Kanji704Character /></FakeDataLoader>
      <FakeDataLoader><Kanji705Character /></FakeDataLoader>
      <FakeDataLoader><Kanji706Character /></FakeDataLoader>
      <FakeDataLoader><Kanji707Character /></FakeDataLoader>
      <FakeDataLoader><Kanji708Character /></FakeDataLoader>
      <FakeDataLoader><Kanji709Character /></FakeDataLoader>
      <FakeDataLoader><Kanji710Character /></FakeDataLoader>
      <FakeDataLoader><Kanji711Character /></FakeDataLoader>
      <FakeDataLoader><Kanji712Character /></FakeDataLoader>
      <FakeDataLoader><Kanji713Character /></FakeDataLoader>
      <FakeDataLoader><Kanji714Character /></FakeDataLoader>
      <FakeDataLoader><Kanji715Character /></FakeDataLoader>
      <FakeDataLoader><Kanji716Character /></FakeDataLoader>
      <FakeDataLoader><Kanji717Character /></FakeDataLoader>
      <FakeDataLoader><Kanji718Character /></FakeDataLoader>
      <FakeDataLoader><Kanji719Character /></FakeDataLoader>
      <FakeDataLoader><Kanji720Character /></FakeDataLoader>
      <FakeDataLoader><Kanji721Character /></FakeDataLoader>
      <FakeDataLoader><Kanji722Character /></FakeDataLoader>
      <FakeDataLoader><Kanji723Character /></FakeDataLoader>
      <FakeDataLoader><Kanji724Character /></FakeDataLoader>
      <FakeDataLoader><Kanji725Character /></FakeDataLoader>
      <FakeDataLoader><Kanji726Character /></FakeDataLoader>
      <FakeDataLoader><Kanji727Character /></FakeDataLoader>
      <FakeDataLoader><Kanji728Character /></FakeDataLoader>
      <FakeDataLoader><Kanji729Character /></FakeDataLoader>
      <FakeDataLoader><Kanji730Character /></FakeDataLoader>
      <FakeDataLoader><Kanji731Character /></FakeDataLoader>
      <FakeDataLoader><Kanji732Character /></FakeDataLoader>
      <FakeDataLoader><Kanji733Character /></FakeDataLoader>
      <FakeDataLoader><Kanji734Character /></FakeDataLoader>
      <FakeDataLoader><Kanji735Character /></FakeDataLoader>
      <FakeDataLoader><Kanji736Character /></FakeDataLoader>
      <FakeDataLoader><Kanji737Character /></FakeDataLoader>
      <FakeDataLoader><Kanji738Character /></FakeDataLoader>
      <FakeDataLoader><Kanji739Character /></FakeDataLoader>
      <FakeDataLoader><Kanji740Character /></FakeDataLoader>
      <FakeDataLoader><Kanji741Character /></FakeDataLoader>
      <FakeDataLoader><Kanji742Character /></FakeDataLoader>
      <FakeDataLoader><Kanji743Character /></FakeDataLoader>
      <FakeDataLoader><Kanji744Character /></FakeDataLoader>
      <FakeDataLoader><Kanji745Character /></FakeDataLoader>
      <FakeDataLoader><Kanji746Character /></FakeDataLoader>
      <FakeDataLoader><Kanji747Character /></FakeDataLoader>
      <FakeDataLoader><Kanji748Character /></FakeDataLoader>
      <FakeDataLoader><Kanji749Character /></FakeDataLoader>
      <FakeDataLoader><Kanji750Character /></FakeDataLoader>
      <FakeDataLoader><Kanji751Character /></FakeDataLoader>
      <FakeDataLoader><Kanji752Character /></FakeDataLoader>
      <FakeDataLoader><Kanji753Character /></FakeDataLoader>
      <FakeDataLoader><Kanji754Character /></FakeDataLoader>
      <FakeDataLoader><Kanji755Character /></FakeDataLoader>
      <FakeDataLoader><Kanji756Character /></FakeDataLoader>
      <FakeDataLoader><Kanji757Character /></FakeDataLoader>
      <FakeDataLoader><Kanji758Character /></FakeDataLoader>
      <FakeDataLoader><Kanji759Character /></FakeDataLoader>
      <FakeDataLoader><Kanji760Character /></FakeDataLoader>
      <FakeDataLoader><Kanji761Character /></FakeDataLoader>
      <FakeDataLoader><Kanji762Character /></FakeDataLoader>
      <FakeDataLoader><Kanji763Character /></FakeDataLoader>
      <FakeDataLoader><Kanji764Character /></FakeDataLoader>
      <FakeDataLoader><Kanji765Character /></FakeDataLoader>
      <FakeDataLoader><Kanji766Character /></FakeDataLoader>
      <FakeDataLoader><Kanji767Character /></FakeDataLoader>
      <FakeDataLoader><Kanji768Character /></FakeDataLoader>
      <FakeDataLoader><Kanji769Character /></FakeDataLoader>
      <FakeDataLoader><Kanji770Character /></FakeDataLoader>
      <FakeDataLoader><Kanji771Character /></FakeDataLoader>
      <FakeDataLoader><Kanji772Character /></FakeDataLoader>
      <FakeDataLoader><Kanji773Character /></FakeDataLoader>
      <FakeDataLoader><Kanji774Character /></FakeDataLoader>
      <FakeDataLoader><Kanji775Character /></FakeDataLoader>
      <FakeDataLoader><Kanji776Character /></FakeDataLoader>
      <FakeDataLoader><Kanji777Character /></FakeDataLoader>
      <FakeDataLoader><Kanji778Character /></FakeDataLoader>
      <FakeDataLoader><Kanji779Character /></FakeDataLoader>
      <FakeDataLoader><Kanji780Character /></FakeDataLoader>
      <FakeDataLoader><Kanji781Character /></FakeDataLoader>
      <FakeDataLoader><Kanji782Character /></FakeDataLoader>
      <FakeDataLoader><Kanji783Character /></FakeDataLoader>
      <FakeDataLoader><Kanji784Character /></FakeDataLoader>
      <FakeDataLoader><Kanji785Character /></FakeDataLoader>
      <FakeDataLoader><Kanji786Character /></FakeDataLoader>
      <FakeDataLoader><Kanji787Character /></FakeDataLoader>
      <FakeDataLoader><Kanji788Character /></FakeDataLoader>
      <FakeDataLoader><Kanji789Character /></FakeDataLoader>
      <FakeDataLoader><Kanji790Character /></FakeDataLoader>
      <FakeDataLoader><Kanji791Character /></FakeDataLoader>
      <FakeDataLoader><Kanji792Character /></FakeDataLoader>
      <FakeDataLoader><Kanji793Character /></FakeDataLoader>
      <FakeDataLoader><Kanji794Character /></FakeDataLoader>
      <FakeDataLoader><Kanji795Character /></FakeDataLoader>
      <FakeDataLoader><Kanji796Character /></FakeDataLoader>
      <FakeDataLoader><Kanji797Character /></FakeDataLoader>
      <FakeDataLoader><Kanji798Character /></FakeDataLoader>
      <FakeDataLoader><Kanji799Character /></FakeDataLoader>
      <FakeDataLoader><Kanji800Character /></FakeDataLoader>
      <FakeDataLoader><Kanji801Character /></FakeDataLoader>
      <FakeDataLoader><Kanji802Character /></FakeDataLoader>
      <FakeDataLoader><Kanji803Character /></FakeDataLoader>
      <FakeDataLoader><Kanji804Character /></FakeDataLoader>
      <FakeDataLoader><Kanji805Character /></FakeDataLoader>
      <FakeDataLoader><Kanji806Character /></FakeDataLoader>
      <FakeDataLoader><Kanji807Character /></FakeDataLoader>
      <FakeDataLoader><Kanji808Character /></FakeDataLoader>
      <FakeDataLoader><Kanji809Character /></FakeDataLoader>
      <FakeDataLoader><Kanji810Character /></FakeDataLoader>
      <FakeDataLoader><Kanji811Character /></FakeDataLoader>
      <FakeDataLoader><Kanji812Character /></FakeDataLoader>
      <FakeDataLoader><Kanji813Character /></FakeDataLoader>
      <FakeDataLoader><Kanji814Character /></FakeDataLoader>
      <FakeDataLoader><Kanji815Character /></FakeDataLoader>
      <FakeDataLoader><Kanji816Character /></FakeDataLoader>
      <FakeDataLoader><Kanji817Character /></FakeDataLoader>
      <FakeDataLoader><Kanji818Character /></FakeDataLoader>
      <FakeDataLoader><Kanji819Character /></FakeDataLoader>
      <FakeDataLoader><Kanji820Character /></FakeDataLoader>
      <FakeDataLoader><Kanji821Character /></FakeDataLoader>
      <FakeDataLoader><Kanji822Character /></FakeDataLoader>
      <FakeDataLoader><Kanji823Character /></FakeDataLoader>
      <FakeDataLoader><Kanji824Character /></FakeDataLoader>
      <FakeDataLoader><Kanji825Character /></FakeDataLoader>
      <FakeDataLoader><Kanji826Character /></FakeDataLoader>
      <FakeDataLoader><Kanji827Character /></FakeDataLoader>
      <FakeDataLoader><Kanji828Character /></FakeDataLoader>
      <FakeDataLoader><Kanji829Character /></FakeDataLoader>
      <FakeDataLoader><Kanji830Character /></FakeDataLoader>
      <FakeDataLoader><Kanji831Character /></FakeDataLoader>
      <FakeDataLoader><Kanji832Character /></FakeDataLoader>
      <FakeDataLoader><Kanji833Character /></FakeDataLoader>
      <FakeDataLoader><Kanji834Character /></FakeDataLoader>
      <FakeDataLoader><Kanji835Character /></FakeDataLoader>
      <FakeDataLoader><Kanji836Character /></FakeDataLoader>
      <FakeDataLoader><Kanji837Character /></FakeDataLoader>
      <FakeDataLoader><Kanji838Character /></FakeDataLoader>
      <FakeDataLoader><Kanji839Character /></FakeDataLoader>
      <FakeDataLoader><Kanji840Character /></FakeDataLoader>
      <FakeDataLoader><Kanji841Character /></FakeDataLoader>
      <FakeDataLoader><Kanji842Character /></FakeDataLoader>
      <FakeDataLoader><Kanji843Character /></FakeDataLoader>
      <FakeDataLoader><Kanji844Character /></FakeDataLoader>
      <FakeDataLoader><Kanji845Character /></FakeDataLoader>
      <FakeDataLoader><Kanji846Character /></FakeDataLoader>
      <FakeDataLoader><Kanji847Character /></FakeDataLoader>
      <FakeDataLoader><Kanji848Character /></FakeDataLoader>
      <FakeDataLoader><Kanji849Character /></FakeDataLoader>
      <FakeDataLoader><Kanji850Character /></FakeDataLoader>
      <FakeDataLoader><Kanji851Character /></FakeDataLoader>
      <FakeDataLoader><Kanji852Character /></FakeDataLoader>
      <FakeDataLoader><Kanji853Character /></FakeDataLoader>
      <FakeDataLoader><Kanji854Character /></FakeDataLoader>
      <FakeDataLoader><Kanji855Character /></FakeDataLoader>
      <FakeDataLoader><Kanji856Character /></FakeDataLoader>
      <FakeDataLoader><Kanji857Character /></FakeDataLoader>
      <FakeDataLoader><Kanji858Character /></FakeDataLoader>
      <FakeDataLoader><Kanji859Character /></FakeDataLoader>
      <FakeDataLoader><Kanji860Character /></FakeDataLoader>
      <FakeDataLoader><Kanji861Character /></FakeDataLoader>
      <FakeDataLoader><Kanji862Character /></FakeDataLoader>
      <FakeDataLoader><Kanji863Character /></FakeDataLoader>
      <FakeDataLoader><Kanji864Character /></FakeDataLoader>
      <FakeDataLoader><Kanji865Character /></FakeDataLoader>
      <FakeDataLoader><Kanji866Character /></FakeDataLoader>
      <FakeDataLoader><Kanji867Character /></FakeDataLoader>
      <FakeDataLoader><Kanji868Character /></FakeDataLoader>
      <FakeDataLoader><Kanji869Character /></FakeDataLoader>
      <FakeDataLoader><Kanji870Character /></FakeDataLoader>
      <FakeDataLoader><Kanji871Character /></FakeDataLoader>
      <FakeDataLoader><Kanji872Character /></FakeDataLoader>
      <FakeDataLoader><Kanji873Character /></FakeDataLoader>
      <FakeDataLoader><Kanji874Character /></FakeDataLoader>
      <FakeDataLoader><Kanji875Character /></FakeDataLoader>
      <FakeDataLoader><Kanji876Character /></FakeDataLoader>
      <FakeDataLoader><Kanji877Character /></FakeDataLoader>
      <FakeDataLoader><Kanji878Character /></FakeDataLoader>
      <FakeDataLoader><Kanji879Character /></FakeDataLoader>
      <FakeDataLoader><Kanji880Character /></FakeDataLoader>
      <FakeDataLoader><Kanji881Character /></FakeDataLoader>
      <FakeDataLoader><Kanji882Character /></FakeDataLoader>
      <FakeDataLoader><Kanji883Character /></FakeDataLoader>
      <FakeDataLoader><Kanji884Character /></FakeDataLoader>
      <FakeDataLoader><Kanji885Character /></FakeDataLoader>
      <FakeDataLoader><Kanji886Character /></FakeDataLoader>
      <FakeDataLoader><Kanji887Character /></FakeDataLoader>
      <FakeDataLoader><Kanji888Character /></FakeDataLoader>
      <FakeDataLoader><Kanji889Character /></FakeDataLoader>
      <FakeDataLoader><Kanji890Character /></FakeDataLoader>
      <FakeDataLoader><Kanji891Character /></FakeDataLoader>
      <FakeDataLoader><Kanji892Character /></FakeDataLoader>
      <FakeDataLoader><Kanji893Character /></FakeDataLoader>
      <FakeDataLoader><Kanji894Character /></FakeDataLoader>
      <FakeDataLoader><Kanji895Character /></FakeDataLoader>
      <FakeDataLoader><Kanji896Character /></FakeDataLoader>
      <FakeDataLoader><Kanji897Character /></FakeDataLoader>
      <FakeDataLoader><Kanji898Character /></FakeDataLoader>
      <FakeDataLoader><Kanji899Character /></FakeDataLoader>
      <FakeDataLoader><Kanji900Character /></FakeDataLoader>
      <FakeDataLoader><Kanji901Character /></FakeDataLoader>
      <FakeDataLoader><Kanji902Character /></FakeDataLoader>
      <FakeDataLoader><Kanji903Character /></FakeDataLoader>
      <FakeDataLoader><Kanji904Character /></FakeDataLoader>
      <FakeDataLoader><Kanji905Character /></FakeDataLoader>
      <FakeDataLoader><Kanji906Character /></FakeDataLoader>
      <FakeDataLoader><Kanji907Character /></FakeDataLoader>
      <FakeDataLoader><Kanji908Character /></FakeDataLoader>
      <FakeDataLoader><Kanji909Character /></FakeDataLoader>
      <FakeDataLoader><Kanji910Character /></FakeDataLoader>
      <FakeDataLoader><Kanji911Character /></FakeDataLoader>
      <FakeDataLoader><Kanji912Character /></FakeDataLoader>
      <FakeDataLoader><Kanji913Character /></FakeDataLoader>
      <FakeDataLoader><Kanji914Character /></FakeDataLoader>
      <FakeDataLoader><Kanji915Character /></FakeDataLoader>
      <FakeDataLoader><Kanji916Character /></FakeDataLoader>
      <FakeDataLoader><Kanji917Character /></FakeDataLoader>
      <FakeDataLoader><Kanji918Character /></FakeDataLoader>
      <FakeDataLoader><Kanji919Character /></FakeDataLoader>
      <FakeDataLoader><Kanji920Character /></FakeDataLoader>
      <FakeDataLoader><Kanji921Character /></FakeDataLoader>
      <FakeDataLoader><Kanji922Character /></FakeDataLoader>
      <FakeDataLoader><Kanji923Character /></FakeDataLoader>
      <FakeDataLoader><Kanji924Character /></FakeDataLoader>
      <FakeDataLoader><Kanji925Character /></FakeDataLoader>
      <FakeDataLoader><Kanji926Character /></FakeDataLoader>
      <FakeDataLoader><Kanji927Character /></FakeDataLoader>
      <FakeDataLoader><Kanji928Character /></FakeDataLoader>
      <FakeDataLoader><Kanji929Character /></FakeDataLoader>
      <FakeDataLoader><Kanji930Character /></FakeDataLoader>
      <FakeDataLoader><Kanji931Character /></FakeDataLoader>
      <FakeDataLoader><Kanji932Character /></FakeDataLoader>
      <FakeDataLoader><Kanji933Character /></FakeDataLoader>
      <FakeDataLoader><Kanji934Character /></FakeDataLoader>
      <FakeDataLoader><Kanji935Character /></FakeDataLoader>
      <FakeDataLoader><Kanji936Character /></FakeDataLoader>
      <FakeDataLoader><Kanji937Character /></FakeDataLoader>
      <FakeDataLoader><Kanji938Character /></FakeDataLoader>
      <FakeDataLoader><Kanji939Character /></FakeDataLoader>
      <FakeDataLoader><Kanji940Character /></FakeDataLoader>
      <FakeDataLoader><Kanji941Character /></FakeDataLoader>
      <FakeDataLoader><Kanji942Character /></FakeDataLoader>
      <FakeDataLoader><Kanji943Character /></FakeDataLoader>
      <FakeDataLoader><Kanji944Character /></FakeDataLoader>
      <FakeDataLoader><Kanji945Character /></FakeDataLoader>
      <FakeDataLoader><Kanji946Character /></FakeDataLoader>
      <FakeDataLoader><Kanji947Character /></FakeDataLoader>
      <FakeDataLoader><Kanji948Character /></FakeDataLoader>
      <FakeDataLoader><Kanji949Character /></FakeDataLoader>
      <FakeDataLoader><Kanji950Character /></FakeDataLoader>
      <FakeDataLoader><Kanji951Character /></FakeDataLoader>
      <FakeDataLoader><Kanji952Character /></FakeDataLoader>
      <FakeDataLoader><Kanji953Character /></FakeDataLoader>
      <FakeDataLoader><Kanji954Character /></FakeDataLoader>
      <FakeDataLoader><Kanji955Character /></FakeDataLoader>
      <FakeDataLoader><Kanji956Character /></FakeDataLoader>
      <FakeDataLoader><Kanji957Character /></FakeDataLoader>
      <FakeDataLoader><Kanji958Character /></FakeDataLoader>
      <FakeDataLoader><Kanji959Character /></FakeDataLoader>
      <FakeDataLoader><Kanji960Character /></FakeDataLoader>
      <FakeDataLoader><Kanji961Character /></FakeDataLoader>
      <FakeDataLoader><Kanji962Character /></FakeDataLoader>
      <FakeDataLoader><Kanji963Character /></FakeDataLoader>
      <FakeDataLoader><Kanji964Character /></FakeDataLoader>
      <FakeDataLoader><Kanji965Character /></FakeDataLoader>
      <FakeDataLoader><Kanji966Character /></FakeDataLoader>
      <FakeDataLoader><Kanji967Character /></FakeDataLoader>
      <FakeDataLoader><Kanji968Character /></FakeDataLoader>
      <FakeDataLoader><Kanji969Character /></FakeDataLoader>
      <FakeDataLoader><Kanji970Character /></FakeDataLoader>
      <FakeDataLoader><Kanji971Character /></FakeDataLoader>
      <FakeDataLoader><Kanji972Character /></FakeDataLoader>
      <FakeDataLoader><Kanji973Character /></FakeDataLoader>
      <FakeDataLoader><Kanji974Character /></FakeDataLoader>
      <FakeDataLoader><Kanji975Character /></FakeDataLoader>
      <FakeDataLoader><Kanji976Character /></FakeDataLoader>
      <FakeDataLoader><Kanji977Character /></FakeDataLoader>
      <FakeDataLoader><Kanji978Character /></FakeDataLoader>
      <FakeDataLoader><Kanji979Character /></FakeDataLoader>
      <FakeDataLoader><Kanji980Character /></FakeDataLoader>
      <FakeDataLoader><Kanji981Character /></FakeDataLoader>
      <FakeDataLoader><Kanji982Character /></FakeDataLoader>
      <FakeDataLoader><Kanji983Character /></FakeDataLoader>
      <FakeDataLoader><Kanji984Character /></FakeDataLoader>
      <FakeDataLoader><Kanji985Character /></FakeDataLoader>
      <FakeDataLoader><Kanji986Character /></FakeDataLoader>
      <FakeDataLoader><Kanji987Character /></FakeDataLoader>
      <FakeDataLoader><Kanji988Character /></FakeDataLoader>
      <FakeDataLoader><Kanji989Character /></FakeDataLoader>
      <FakeDataLoader><Kanji990Character /></FakeDataLoader>
      <FakeDataLoader><Kanji991Character /></FakeDataLoader>
      <FakeDataLoader><Kanji992Character /></FakeDataLoader>
      <FakeDataLoader><Kanji993Character /></FakeDataLoader>
      <FakeDataLoader><Kanji994Character /></FakeDataLoader>
      <FakeDataLoader><Kanji995Character /></FakeDataLoader>
      <FakeDataLoader><Kanji996Character /></FakeDataLoader>
      <FakeDataLoader><Kanji997Character /></FakeDataLoader>
      <FakeDataLoader><Kanji998Character /></FakeDataLoader>
      <FakeDataLoader><Kanji999Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1000Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1001Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1002Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1003Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1004Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1005Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1006Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1007Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1008Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1009Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1010Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1011Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1012Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1013Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1014Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1015Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1016Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1017Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1018Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1019Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1020Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1021Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1022Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1023Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1024Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1025Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1026Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1027Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1028Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1029Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1030Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1031Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1032Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1033Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1034Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1035Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1036Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1037Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1038Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1039Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1040Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1041Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1042Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1043Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1044Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1045Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1046Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1047Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1048Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1049Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1050Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1051Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1052Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1053Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1054Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1055Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1056Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1057Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1058Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1059Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1060Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1061Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1062Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1063Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1064Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1065Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1066Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1067Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1068Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1069Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1070Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1071Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1072Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1073Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1074Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1075Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1076Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1077Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1078Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1079Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1080Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1081Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1082Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1083Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1084Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1085Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1086Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1087Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1088Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1089Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1090Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1091Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1092Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1093Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1094Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1095Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1096Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1097Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1098Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1099Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1100Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1101Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1102Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1103Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1104Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1105Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1106Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1107Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1108Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1109Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1110Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1111Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1112Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1113Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1114Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1115Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1116Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1117Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1118Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1119Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1120Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1121Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1122Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1123Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1124Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1125Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1126Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1127Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1128Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1129Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1130Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1131Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1132Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1133Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1134Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1135Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1136Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1137Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1138Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1139Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1140Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1141Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1142Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1143Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1144Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1145Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1146Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1147Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1148Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1149Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1150Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1151Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1152Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1153Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1154Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1155Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1156Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1157Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1158Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1159Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1160Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1161Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1162Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1163Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1164Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1165Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1166Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1167Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1168Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1169Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1170Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1171Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1172Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1173Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1174Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1175Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1176Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1177Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1178Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1179Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1180Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1181Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1182Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1183Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1184Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1185Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1186Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1187Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1188Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1189Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1190Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1191Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1192Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1193Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1194Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1195Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1196Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1197Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1198Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1199Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1200Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1201Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1202Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1203Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1204Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1205Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1206Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1207Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1208Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1209Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1210Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1211Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1212Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1213Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1214Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1215Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1216Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1217Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1218Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1219Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1220Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1221Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1222Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1223Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1224Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1225Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1226Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1227Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1228Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1229Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1230Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1231Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1232Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1233Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1234Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1235Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1236Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1237Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1238Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1239Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1240Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1241Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1242Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1243Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1244Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1245Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1246Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1247Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1248Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1249Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1250Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1251Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1252Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1253Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1254Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1255Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1256Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1257Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1258Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1259Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1260Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1261Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1262Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1263Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1264Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1265Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1266Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1267Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1268Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1269Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1270Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1271Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1272Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1273Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1274Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1275Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1276Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1277Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1278Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1279Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1280Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1281Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1282Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1283Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1284Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1285Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1286Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1287Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1288Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1289Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1290Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1291Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1292Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1293Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1294Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1295Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1296Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1297Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1298Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1299Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1300Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1301Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1302Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1303Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1304Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1305Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1306Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1307Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1308Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1309Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1310Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1311Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1312Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1313Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1314Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1315Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1316Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1317Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1318Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1319Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1320Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1321Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1322Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1323Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1324Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1325Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1326Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1327Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1328Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1329Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1330Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1331Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1332Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1333Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1334Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1335Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1336Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1337Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1338Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1339Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1340Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1341Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1342Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1343Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1344Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1345Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1346Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1347Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1348Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1349Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1350Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1351Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1352Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1353Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1354Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1355Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1356Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1357Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1358Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1359Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1360Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1361Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1362Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1363Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1364Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1365Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1366Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1367Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1368Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1369Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1370Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1371Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1372Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1373Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1374Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1375Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1376Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1377Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1378Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1379Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1380Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1381Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1382Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1383Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1384Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1385Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1386Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1387Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1388Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1389Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1390Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1391Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1392Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1393Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1394Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1395Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1396Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1397Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1398Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1399Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1400Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1401Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1402Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1403Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1404Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1405Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1406Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1407Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1408Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1409Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1410Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1411Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1412Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1413Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1414Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1415Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1416Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1417Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1418Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1419Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1420Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1421Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1422Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1423Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1424Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1425Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1426Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1427Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1428Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1429Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1430Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1431Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1432Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1433Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1434Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1435Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1436Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1437Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1438Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1439Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1440Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1441Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1442Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1443Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1444Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1445Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1446Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1447Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1448Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1449Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1450Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1451Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1452Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1453Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1454Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1455Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1456Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1457Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1458Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1459Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1460Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1461Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1462Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1463Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1464Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1465Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1466Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1467Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1468Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1469Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1470Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1471Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1472Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1473Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1474Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1475Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1476Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1477Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1478Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1479Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1480Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1481Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1482Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1483Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1484Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1485Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1486Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1487Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1488Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1489Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1490Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1491Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1492Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1493Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1494Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1495Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1496Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1497Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1498Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1499Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1500Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1501Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1502Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1503Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1504Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1505Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1506Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1507Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1508Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1509Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1510Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1511Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1512Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1513Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1514Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1515Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1516Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1517Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1518Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1519Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1520Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1521Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1522Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1523Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1524Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1525Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1526Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1527Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1528Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1529Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1530Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1531Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1532Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1533Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1534Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1535Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1536Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1537Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1538Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1539Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1540Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1541Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1542Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1543Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1544Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1545Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1546Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1547Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1548Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1549Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1550Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1551Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1552Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1553Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1554Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1555Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1556Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1557Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1558Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1559Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1560Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1561Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1562Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1563Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1564Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1565Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1566Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1567Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1568Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1569Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1570Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1571Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1572Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1573Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1574Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1575Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1576Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1577Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1578Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1579Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1580Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1581Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1582Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1583Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1584Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1585Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1586Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1587Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1588Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1589Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1590Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1591Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1592Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1593Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1594Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1595Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1596Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1597Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1598Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1599Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1600Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1601Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1602Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1603Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1604Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1605Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1606Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1607Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1608Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1609Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1610Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1611Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1612Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1613Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1614Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1615Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1616Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1617Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1618Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1619Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1620Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1621Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1622Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1623Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1624Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1625Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1626Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1627Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1628Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1629Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1630Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1631Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1632Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1633Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1634Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1635Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1636Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1637Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1638Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1639Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1640Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1641Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1642Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1643Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1644Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1645Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1646Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1647Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1648Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1649Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1650Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1651Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1652Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1653Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1654Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1655Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1656Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1657Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1658Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1659Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1660Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1661Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1662Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1663Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1664Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1665Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1666Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1667Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1668Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1669Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1670Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1671Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1672Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1673Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1674Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1675Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1676Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1677Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1678Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1679Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1680Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1681Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1682Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1683Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1684Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1685Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1686Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1687Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1688Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1689Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1690Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1691Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1692Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1693Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1694Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1695Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1696Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1697Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1698Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1699Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1700Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1701Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1702Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1703Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1704Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1705Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1706Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1707Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1708Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1709Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1710Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1711Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1712Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1713Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1714Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1715Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1716Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1717Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1718Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1719Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1720Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1721Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1722Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1723Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1724Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1725Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1726Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1727Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1728Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1729Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1730Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1731Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1732Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1733Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1734Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1735Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1736Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1737Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1738Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1739Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1740Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1741Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1742Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1743Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1744Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1745Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1746Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1747Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1748Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1749Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1750Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1751Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1752Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1753Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1754Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1755Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1756Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1757Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1758Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1759Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1760Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1761Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1762Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1763Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1764Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1765Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1766Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1767Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1768Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1769Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1770Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1771Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1772Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1773Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1774Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1775Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1776Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1777Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1778Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1779Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1780Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1781Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1782Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1783Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1784Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1785Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1786Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1787Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1788Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1789Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1790Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1791Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1792Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1793Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1794Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1795Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1796Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1797Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1798Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1799Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1800Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1801Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1802Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1803Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1804Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1805Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1806Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1807Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1808Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1809Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1810Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1811Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1812Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1813Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1814Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1815Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1816Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1817Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1818Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1819Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1820Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1821Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1822Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1823Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1824Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1825Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1826Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1827Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1828Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1829Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1830Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1831Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1832Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1833Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1834Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1835Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1836Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1837Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1838Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1839Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1840Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1841Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1842Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1843Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1844Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1845Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1846Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1847Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1848Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1849Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1850Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1851Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1852Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1853Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1854Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1855Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1856Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1857Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1858Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1859Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1860Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1861Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1862Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1863Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1864Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1865Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1866Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1867Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1868Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1869Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1870Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1871Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1872Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1873Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1874Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1875Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1876Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1877Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1878Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1879Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1880Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1881Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1882Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1883Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1884Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1885Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1886Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1887Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1888Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1889Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1890Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1891Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1892Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1893Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1894Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1895Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1896Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1897Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1898Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1899Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1900Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1901Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1902Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1903Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1904Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1905Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1906Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1907Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1908Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1909Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1910Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1911Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1912Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1913Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1914Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1915Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1916Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1917Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1918Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1919Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1920Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1921Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1922Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1923Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1924Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1925Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1926Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1927Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1928Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1929Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1930Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1931Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1932Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1933Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1934Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1935Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1936Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1937Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1938Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1939Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1940Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1941Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1942Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1943Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1944Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1945Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1946Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1947Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1948Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1949Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1950Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1951Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1952Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1953Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1954Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1955Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1956Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1957Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1958Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1959Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1960Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1961Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1962Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1963Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1964Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1965Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1966Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1967Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1968Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1969Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1970Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1971Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1972Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1973Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1974Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1975Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1976Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1977Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1978Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1979Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1980Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1981Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1982Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1983Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1984Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1985Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1986Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1987Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1988Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1989Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1990Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1991Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1992Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1993Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1994Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1995Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1996Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1997Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1998Character /></FakeDataLoader>
      <FakeDataLoader><Kanji1999Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2000Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2001Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2002Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2003Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2004Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2005Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2006Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2007Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2008Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2009Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2010Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2011Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2012Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2013Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2014Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2015Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2016Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2017Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2018Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2019Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2020Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2021Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2022Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2023Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2024Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2025Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2026Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2027Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2028Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2029Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2030Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2031Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2032Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2033Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2034Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2035Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2036Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2037Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2038Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2039Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2040Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2041Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2042Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2043Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2044Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2045Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2046Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2047Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2048Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2049Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2050Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2051Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2052Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2053Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2054Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2055Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2056Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2057Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2058Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2059Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2060Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2061Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2062Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2063Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2064Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2065Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2066Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2067Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2068Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2069Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2070Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2071Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2072Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2073Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2074Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2075Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2076Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2077Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2078Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2079Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2080Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2081Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2082Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2083Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2084Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2085Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2086Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2087Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2088Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2089Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2090Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2091Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2092Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2093Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2094Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2095Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2096Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2097Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2098Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2099Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2100Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2101Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2102Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2103Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2104Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2105Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2106Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2107Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2108Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2109Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2110Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2111Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2112Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2113Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2114Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2115Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2116Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2117Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2118Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2119Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2120Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2121Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2122Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2123Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2124Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2125Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2126Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2127Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2128Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2129Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2130Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2131Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2132Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2133Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2134Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2135Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2136Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2137Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2138Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2139Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2140Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2141Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2142Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2143Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2144Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2145Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2146Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2147Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2148Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2149Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2150Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2151Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2152Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2153Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2154Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2155Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2156Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2157Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2158Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2159Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2160Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2161Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2162Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2163Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2164Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2165Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2166Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2167Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2168Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2169Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2170Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2171Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2172Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2173Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2174Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2175Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2176Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2177Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2178Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2179Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2180Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2181Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2182Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2183Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2184Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2185Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2186Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2187Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2188Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2189Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2190Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2191Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2192Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2193Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2194Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2195Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2196Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2197Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2198Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2199Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2200Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2201Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2202Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2203Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2204Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2205Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2206Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2207Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2208Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2209Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2210Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2211Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2212Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2213Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2214Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2215Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2216Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2217Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2218Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2219Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2220Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2221Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2222Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2223Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2224Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2225Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2226Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2227Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2228Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2229Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2230Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2231Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2232Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2233Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2234Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2235Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2236Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2237Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2238Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2239Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2240Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2241Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2242Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2243Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2244Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2245Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2246Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2247Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2248Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2249Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2250Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2251Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2252Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2253Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2254Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2255Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2256Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2257Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2258Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2259Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2260Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2261Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2262Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2263Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2264Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2265Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2266Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2267Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2268Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2269Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2270Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2271Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2272Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2273Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2274Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2275Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2276Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2277Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2278Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2279Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2280Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2281Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2282Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2283Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2284Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2285Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2286Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2287Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2288Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2289Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2290Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2291Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2292Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2293Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2294Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2295Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2296Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2297Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2298Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2299Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2300Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2301Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2302Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2303Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2304Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2305Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2306Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2307Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2308Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2309Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2310Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2311Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2312Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2313Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2314Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2315Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2316Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2317Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2318Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2319Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2320Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2321Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2322Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2323Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2324Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2325Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2326Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2327Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2328Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2329Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2330Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2331Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2332Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2333Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2334Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2335Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2336Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2337Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2338Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2339Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2340Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2341Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2342Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2343Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2344Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2345Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2346Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2347Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2348Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2349Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2350Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2351Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2352Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2353Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2354Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2355Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2356Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2357Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2358Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2359Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2360Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2361Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2362Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2363Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2364Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2365Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2366Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2367Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2368Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2369Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2370Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2371Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2372Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2373Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2374Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2375Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2376Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2377Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2378Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2379Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2380Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2381Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2382Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2383Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2384Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2385Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2386Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2387Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2388Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2389Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2390Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2391Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2392Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2393Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2394Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2395Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2396Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2397Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2398Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2399Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2400Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2401Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2402Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2403Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2404Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2405Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2406Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2407Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2408Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2409Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2410Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2411Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2412Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2413Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2414Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2415Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2416Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2417Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2418Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2419Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2420Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2421Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2422Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2423Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2424Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2425Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2426Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2427Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2428Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2429Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2430Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2431Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2432Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2433Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2434Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2435Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2436Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2437Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2438Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2439Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2440Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2441Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2442Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2443Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2444Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2445Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2446Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2447Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2448Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2449Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2450Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2451Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2452Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2453Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2454Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2455Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2456Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2457Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2458Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2459Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2460Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2461Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2462Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2463Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2464Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2465Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2466Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2467Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2468Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2469Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2470Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2471Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2472Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2473Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2474Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2475Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2476Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2477Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2478Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2479Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2480Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2481Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2482Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2483Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2484Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2485Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2486Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2487Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2488Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2489Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2490Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2491Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2492Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2493Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2494Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2495Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2496Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2497Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2498Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2499Character /></FakeDataLoader>
      <FakeDataLoader><Kanji2500Character /></FakeDataLoader>
    </Wrapper>
    
        <a href="https://github.com/jantimon/next-yak/">next-yak</a>
    </>
  );
};
