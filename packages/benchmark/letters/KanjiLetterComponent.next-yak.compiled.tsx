// @ts-nocheck
"use client";import React,{type FunctionComponent}from'react';import{styled as styledYak,css}from'next-yak';const oneTimeDelay=new Promise(resolve=>setTimeout(resolve,1));// Simulate a component which accesses apollo or relay data access
// starting with a loading state and then switching to the actual content
const FakeDataLoader=({children}:{children?:React.ReactNode;})=>{const[show,setShow]=React.useState(false);const showDeferred=React.useDeferredValue(show);React.useEffect(()=>{let isMounted=true;oneTimeDelay.then(()=>{if(isMounted){setShow(true);}});return()=>{isMounted=false;};},[]);if(!showDeferred)return null;return<>{children}</>;};const JapaneseCard=/*YAK Extracted CSS:
.JapaneseCard {
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
}*/ /*#__PURE__*/styledYak.div("JapaneseCard");const Kanji1Character=/*YAK Extracted CSS:
.Kanji1Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1Character");const Kanji2Character=/*YAK Extracted CSS:
.Kanji2Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2Character");const Kanji3Character=/*YAK Extracted CSS:
.Kanji3Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji3Character");const Kanji4Character=/*YAK Extracted CSS:
.Kanji4Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji4Character");const Kanji5Character=/*YAK Extracted CSS:
.Kanji5Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji5Character");const Kanji6Character=/*YAK Extracted CSS:
.Kanji6Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji6Character");const Kanji7Character=/*YAK Extracted CSS:
.Kanji7Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji7Character");const Kanji8Character=/*YAK Extracted CSS:
.Kanji8Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji8Character");const Kanji9Character=/*YAK Extracted CSS:
.Kanji9Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji9Character");const Kanji10Character=/*YAK Extracted CSS:
.Kanji10Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji10Character");const Kanji11Character=/*YAK Extracted CSS:
.Kanji11Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji11Character");const Kanji12Character=/*YAK Extracted CSS:
.Kanji12Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji12Character");const Kanji13Character=/*YAK Extracted CSS:
.Kanji13Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji13Character");const Kanji14Character=/*YAK Extracted CSS:
.Kanji14Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji14Character");const Kanji15Character=/*YAK Extracted CSS:
.Kanji15Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji15Character");const Kanji16Character=/*YAK Extracted CSS:
.Kanji16Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji16Character");const Kanji17Character=/*YAK Extracted CSS:
.Kanji17Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji17Character");const Kanji18Character=/*YAK Extracted CSS:
.Kanji18Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji18Character");const Kanji19Character=/*YAK Extracted CSS:
.Kanji19Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji19Character");const Kanji20Character=/*YAK Extracted CSS:
.Kanji20Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji20Character");const Kanji21Character=/*YAK Extracted CSS:
.Kanji21Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji21Character");const Kanji22Character=/*YAK Extracted CSS:
.Kanji22Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji22Character");const Kanji23Character=/*YAK Extracted CSS:
.Kanji23Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji23Character");const Kanji24Character=/*YAK Extracted CSS:
.Kanji24Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji24Character");const Kanji25Character=/*YAK Extracted CSS:
.Kanji25Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji25Character");const Kanji26Character=/*YAK Extracted CSS:
.Kanji26Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji26Character");const Kanji27Character=/*YAK Extracted CSS:
.Kanji27Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji27Character");const Kanji28Character=/*YAK Extracted CSS:
.Kanji28Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji28Character");const Kanji29Character=/*YAK Extracted CSS:
.Kanji29Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji29Character");const Kanji30Character=/*YAK Extracted CSS:
.Kanji30Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji30Character");const Kanji31Character=/*YAK Extracted CSS:
.Kanji31Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji31Character");const Kanji32Character=/*YAK Extracted CSS:
.Kanji32Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji32Character");const Kanji33Character=/*YAK Extracted CSS:
.Kanji33Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji33Character");const Kanji34Character=/*YAK Extracted CSS:
.Kanji34Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji34Character");const Kanji35Character=/*YAK Extracted CSS:
.Kanji35Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji35Character");const Kanji36Character=/*YAK Extracted CSS:
.Kanji36Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji36Character");const Kanji37Character=/*YAK Extracted CSS:
.Kanji37Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji37Character");const Kanji38Character=/*YAK Extracted CSS:
.Kanji38Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji38Character");const Kanji39Character=/*YAK Extracted CSS:
.Kanji39Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji39Character");const Kanji40Character=/*YAK Extracted CSS:
.Kanji40Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji40Character");const Kanji41Character=/*YAK Extracted CSS:
.Kanji41Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji41Character");const Kanji42Character=/*YAK Extracted CSS:
.Kanji42Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji42Character");const Kanji43Character=/*YAK Extracted CSS:
.Kanji43Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji43Character");const Kanji44Character=/*YAK Extracted CSS:
.Kanji44Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji44Character");const Kanji45Character=/*YAK Extracted CSS:
.Kanji45Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji45Character");const Kanji46Character=/*YAK Extracted CSS:
.Kanji46Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji46Character");const Kanji47Character=/*YAK Extracted CSS:
.Kanji47Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji47Character");const Kanji48Character=/*YAK Extracted CSS:
.Kanji48Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji48Character");const Kanji49Character=/*YAK Extracted CSS:
.Kanji49Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji49Character");const Kanji50Character=/*YAK Extracted CSS:
.Kanji50Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji50Character");const Kanji51Character=/*YAK Extracted CSS:
.Kanji51Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji51Character");const Kanji52Character=/*YAK Extracted CSS:
.Kanji52Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji52Character");const Kanji53Character=/*YAK Extracted CSS:
.Kanji53Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji53Character");const Kanji54Character=/*YAK Extracted CSS:
.Kanji54Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji54Character");const Kanji55Character=/*YAK Extracted CSS:
.Kanji55Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji55Character");const Kanji56Character=/*YAK Extracted CSS:
.Kanji56Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji56Character");const Kanji57Character=/*YAK Extracted CSS:
.Kanji57Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji57Character");const Kanji58Character=/*YAK Extracted CSS:
.Kanji58Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji58Character");const Kanji59Character=/*YAK Extracted CSS:
.Kanji59Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji59Character");const Kanji60Character=/*YAK Extracted CSS:
.Kanji60Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji60Character");const Kanji61Character=/*YAK Extracted CSS:
.Kanji61Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji61Character");const Kanji62Character=/*YAK Extracted CSS:
.Kanji62Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji62Character");const Kanji63Character=/*YAK Extracted CSS:
.Kanji63Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji63Character");const Kanji64Character=/*YAK Extracted CSS:
.Kanji64Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji64Character");const Kanji65Character=/*YAK Extracted CSS:
.Kanji65Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji65Character");const Kanji66Character=/*YAK Extracted CSS:
.Kanji66Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji66Character");const Kanji67Character=/*YAK Extracted CSS:
.Kanji67Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji67Character");const Kanji68Character=/*YAK Extracted CSS:
.Kanji68Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji68Character");const Kanji69Character=/*YAK Extracted CSS:
.Kanji69Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji69Character");const Kanji70Character=/*YAK Extracted CSS:
.Kanji70Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji70Character");const Kanji71Character=/*YAK Extracted CSS:
.Kanji71Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji71Character");const Kanji72Character=/*YAK Extracted CSS:
.Kanji72Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji72Character");const Kanji73Character=/*YAK Extracted CSS:
.Kanji73Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji73Character");const Kanji74Character=/*YAK Extracted CSS:
.Kanji74Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji74Character");const Kanji75Character=/*YAK Extracted CSS:
.Kanji75Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji75Character");const Kanji76Character=/*YAK Extracted CSS:
.Kanji76Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji76Character");const Kanji77Character=/*YAK Extracted CSS:
.Kanji77Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji77Character");const Kanji78Character=/*YAK Extracted CSS:
.Kanji78Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji78Character");const Kanji79Character=/*YAK Extracted CSS:
.Kanji79Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji79Character");const Kanji80Character=/*YAK Extracted CSS:
.Kanji80Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji80Character");const Kanji81Character=/*YAK Extracted CSS:
.Kanji81Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji81Character");const Kanji82Character=/*YAK Extracted CSS:
.Kanji82Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji82Character");const Kanji83Character=/*YAK Extracted CSS:
.Kanji83Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji83Character");const Kanji84Character=/*YAK Extracted CSS:
.Kanji84Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji84Character");const Kanji85Character=/*YAK Extracted CSS:
.Kanji85Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji85Character");const Kanji86Character=/*YAK Extracted CSS:
.Kanji86Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji86Character");const Kanji87Character=/*YAK Extracted CSS:
.Kanji87Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji87Character");const Kanji88Character=/*YAK Extracted CSS:
.Kanji88Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji88Character");const Kanji89Character=/*YAK Extracted CSS:
.Kanji89Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji89Character");const Kanji90Character=/*YAK Extracted CSS:
.Kanji90Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji90Character");const Kanji91Character=/*YAK Extracted CSS:
.Kanji91Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji91Character");const Kanji92Character=/*YAK Extracted CSS:
.Kanji92Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji92Character");const Kanji93Character=/*YAK Extracted CSS:
.Kanji93Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji93Character");const Kanji94Character=/*YAK Extracted CSS:
.Kanji94Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji94Character");const Kanji95Character=/*YAK Extracted CSS:
.Kanji95Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji95Character");const Kanji96Character=/*YAK Extracted CSS:
.Kanji96Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji96Character");const Kanji97Character=/*YAK Extracted CSS:
.Kanji97Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji97Character");const Kanji98Character=/*YAK Extracted CSS:
.Kanji98Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji98Character");const Kanji99Character=/*YAK Extracted CSS:
.Kanji99Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji99Character");const Kanji100Character=/*YAK Extracted CSS:
.Kanji100Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji100Character");const Kanji101Character=/*YAK Extracted CSS:
.Kanji101Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji101Character");const Kanji102Character=/*YAK Extracted CSS:
.Kanji102Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji102Character");const Kanji103Character=/*YAK Extracted CSS:
.Kanji103Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji103Character");const Kanji104Character=/*YAK Extracted CSS:
.Kanji104Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji104Character");const Kanji105Character=/*YAK Extracted CSS:
.Kanji105Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji105Character");const Kanji106Character=/*YAK Extracted CSS:
.Kanji106Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji106Character");const Kanji107Character=/*YAK Extracted CSS:
.Kanji107Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji107Character");const Kanji108Character=/*YAK Extracted CSS:
.Kanji108Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji108Character");const Kanji109Character=/*YAK Extracted CSS:
.Kanji109Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji109Character");const Kanji110Character=/*YAK Extracted CSS:
.Kanji110Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji110Character");const Kanji111Character=/*YAK Extracted CSS:
.Kanji111Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji111Character");const Kanji112Character=/*YAK Extracted CSS:
.Kanji112Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji112Character");const Kanji113Character=/*YAK Extracted CSS:
.Kanji113Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji113Character");const Kanji114Character=/*YAK Extracted CSS:
.Kanji114Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji114Character");const Kanji115Character=/*YAK Extracted CSS:
.Kanji115Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji115Character");const Kanji116Character=/*YAK Extracted CSS:
.Kanji116Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji116Character");const Kanji117Character=/*YAK Extracted CSS:
.Kanji117Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji117Character");const Kanji118Character=/*YAK Extracted CSS:
.Kanji118Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji118Character");const Kanji119Character=/*YAK Extracted CSS:
.Kanji119Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji119Character");const Kanji120Character=/*YAK Extracted CSS:
.Kanji120Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji120Character");const Kanji121Character=/*YAK Extracted CSS:
.Kanji121Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji121Character");const Kanji122Character=/*YAK Extracted CSS:
.Kanji122Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji122Character");const Kanji123Character=/*YAK Extracted CSS:
.Kanji123Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji123Character");const Kanji124Character=/*YAK Extracted CSS:
.Kanji124Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji124Character");const Kanji125Character=/*YAK Extracted CSS:
.Kanji125Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji125Character");const Kanji126Character=/*YAK Extracted CSS:
.Kanji126Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji126Character");const Kanji127Character=/*YAK Extracted CSS:
.Kanji127Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji127Character");const Kanji128Character=/*YAK Extracted CSS:
.Kanji128Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji128Character");const Kanji129Character=/*YAK Extracted CSS:
.Kanji129Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji129Character");const Kanji130Character=/*YAK Extracted CSS:
.Kanji130Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji130Character");const Kanji131Character=/*YAK Extracted CSS:
.Kanji131Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji131Character");const Kanji132Character=/*YAK Extracted CSS:
.Kanji132Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji132Character");const Kanji133Character=/*YAK Extracted CSS:
.Kanji133Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji133Character");const Kanji134Character=/*YAK Extracted CSS:
.Kanji134Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji134Character");const Kanji135Character=/*YAK Extracted CSS:
.Kanji135Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji135Character");const Kanji136Character=/*YAK Extracted CSS:
.Kanji136Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji136Character");const Kanji137Character=/*YAK Extracted CSS:
.Kanji137Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji137Character");const Kanji138Character=/*YAK Extracted CSS:
.Kanji138Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji138Character");const Kanji139Character=/*YAK Extracted CSS:
.Kanji139Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji139Character");const Kanji140Character=/*YAK Extracted CSS:
.Kanji140Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji140Character");const Kanji141Character=/*YAK Extracted CSS:
.Kanji141Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji141Character");const Kanji142Character=/*YAK Extracted CSS:
.Kanji142Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji142Character");const Kanji143Character=/*YAK Extracted CSS:
.Kanji143Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji143Character");const Kanji144Character=/*YAK Extracted CSS:
.Kanji144Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji144Character");const Kanji145Character=/*YAK Extracted CSS:
.Kanji145Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji145Character");const Kanji146Character=/*YAK Extracted CSS:
.Kanji146Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji146Character");const Kanji147Character=/*YAK Extracted CSS:
.Kanji147Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji147Character");const Kanji148Character=/*YAK Extracted CSS:
.Kanji148Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji148Character");const Kanji149Character=/*YAK Extracted CSS:
.Kanji149Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji149Character");const Kanji150Character=/*YAK Extracted CSS:
.Kanji150Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji150Character");const Kanji151Character=/*YAK Extracted CSS:
.Kanji151Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji151Character");const Kanji152Character=/*YAK Extracted CSS:
.Kanji152Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji152Character");const Kanji153Character=/*YAK Extracted CSS:
.Kanji153Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji153Character");const Kanji154Character=/*YAK Extracted CSS:
.Kanji154Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji154Character");const Kanji155Character=/*YAK Extracted CSS:
.Kanji155Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji155Character");const Kanji156Character=/*YAK Extracted CSS:
.Kanji156Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji156Character");const Kanji157Character=/*YAK Extracted CSS:
.Kanji157Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji157Character");const Kanji158Character=/*YAK Extracted CSS:
.Kanji158Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji158Character");const Kanji159Character=/*YAK Extracted CSS:
.Kanji159Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji159Character");const Kanji160Character=/*YAK Extracted CSS:
.Kanji160Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji160Character");const Kanji161Character=/*YAK Extracted CSS:
.Kanji161Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji161Character");const Kanji162Character=/*YAK Extracted CSS:
.Kanji162Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji162Character");const Kanji163Character=/*YAK Extracted CSS:
.Kanji163Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji163Character");const Kanji164Character=/*YAK Extracted CSS:
.Kanji164Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji164Character");const Kanji165Character=/*YAK Extracted CSS:
.Kanji165Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji165Character");const Kanji166Character=/*YAK Extracted CSS:
.Kanji166Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji166Character");const Kanji167Character=/*YAK Extracted CSS:
.Kanji167Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji167Character");const Kanji168Character=/*YAK Extracted CSS:
.Kanji168Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji168Character");const Kanji169Character=/*YAK Extracted CSS:
.Kanji169Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji169Character");const Kanji170Character=/*YAK Extracted CSS:
.Kanji170Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji170Character");const Kanji171Character=/*YAK Extracted CSS:
.Kanji171Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji171Character");const Kanji172Character=/*YAK Extracted CSS:
.Kanji172Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji172Character");const Kanji173Character=/*YAK Extracted CSS:
.Kanji173Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji173Character");const Kanji174Character=/*YAK Extracted CSS:
.Kanji174Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji174Character");const Kanji175Character=/*YAK Extracted CSS:
.Kanji175Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji175Character");const Kanji176Character=/*YAK Extracted CSS:
.Kanji176Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji176Character");const Kanji177Character=/*YAK Extracted CSS:
.Kanji177Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji177Character");const Kanji178Character=/*YAK Extracted CSS:
.Kanji178Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji178Character");const Kanji179Character=/*YAK Extracted CSS:
.Kanji179Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji179Character");const Kanji180Character=/*YAK Extracted CSS:
.Kanji180Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji180Character");const Kanji181Character=/*YAK Extracted CSS:
.Kanji181Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji181Character");const Kanji182Character=/*YAK Extracted CSS:
.Kanji182Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji182Character");const Kanji183Character=/*YAK Extracted CSS:
.Kanji183Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji183Character");const Kanji184Character=/*YAK Extracted CSS:
.Kanji184Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji184Character");const Kanji185Character=/*YAK Extracted CSS:
.Kanji185Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji185Character");const Kanji186Character=/*YAK Extracted CSS:
.Kanji186Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji186Character");const Kanji187Character=/*YAK Extracted CSS:
.Kanji187Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji187Character");const Kanji188Character=/*YAK Extracted CSS:
.Kanji188Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji188Character");const Kanji189Character=/*YAK Extracted CSS:
.Kanji189Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji189Character");const Kanji190Character=/*YAK Extracted CSS:
.Kanji190Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji190Character");const Kanji191Character=/*YAK Extracted CSS:
.Kanji191Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji191Character");const Kanji192Character=/*YAK Extracted CSS:
.Kanji192Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji192Character");const Kanji193Character=/*YAK Extracted CSS:
.Kanji193Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji193Character");const Kanji194Character=/*YAK Extracted CSS:
.Kanji194Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji194Character");const Kanji195Character=/*YAK Extracted CSS:
.Kanji195Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji195Character");const Kanji196Character=/*YAK Extracted CSS:
.Kanji196Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji196Character");const Kanji197Character=/*YAK Extracted CSS:
.Kanji197Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji197Character");const Kanji198Character=/*YAK Extracted CSS:
.Kanji198Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji198Character");const Kanji199Character=/*YAK Extracted CSS:
.Kanji199Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji199Character");const Kanji200Character=/*YAK Extracted CSS:
.Kanji200Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji200Character");const Kanji201Character=/*YAK Extracted CSS:
.Kanji201Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji201Character");const Kanji202Character=/*YAK Extracted CSS:
.Kanji202Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji202Character");const Kanji203Character=/*YAK Extracted CSS:
.Kanji203Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji203Character");const Kanji204Character=/*YAK Extracted CSS:
.Kanji204Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji204Character");const Kanji205Character=/*YAK Extracted CSS:
.Kanji205Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji205Character");const Kanji206Character=/*YAK Extracted CSS:
.Kanji206Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji206Character");const Kanji207Character=/*YAK Extracted CSS:
.Kanji207Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji207Character");const Kanji208Character=/*YAK Extracted CSS:
.Kanji208Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji208Character");const Kanji209Character=/*YAK Extracted CSS:
.Kanji209Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji209Character");const Kanji210Character=/*YAK Extracted CSS:
.Kanji210Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji210Character");const Kanji211Character=/*YAK Extracted CSS:
.Kanji211Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji211Character");const Kanji212Character=/*YAK Extracted CSS:
.Kanji212Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji212Character");const Kanji213Character=/*YAK Extracted CSS:
.Kanji213Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji213Character");const Kanji214Character=/*YAK Extracted CSS:
.Kanji214Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji214Character");const Kanji215Character=/*YAK Extracted CSS:
.Kanji215Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji215Character");const Kanji216Character=/*YAK Extracted CSS:
.Kanji216Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji216Character");const Kanji217Character=/*YAK Extracted CSS:
.Kanji217Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji217Character");const Kanji218Character=/*YAK Extracted CSS:
.Kanji218Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji218Character");const Kanji219Character=/*YAK Extracted CSS:
.Kanji219Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji219Character");const Kanji220Character=/*YAK Extracted CSS:
.Kanji220Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji220Character");const Kanji221Character=/*YAK Extracted CSS:
.Kanji221Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji221Character");const Kanji222Character=/*YAK Extracted CSS:
.Kanji222Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji222Character");const Kanji223Character=/*YAK Extracted CSS:
.Kanji223Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji223Character");const Kanji224Character=/*YAK Extracted CSS:
.Kanji224Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji224Character");const Kanji225Character=/*YAK Extracted CSS:
.Kanji225Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji225Character");const Kanji226Character=/*YAK Extracted CSS:
.Kanji226Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji226Character");const Kanji227Character=/*YAK Extracted CSS:
.Kanji227Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji227Character");const Kanji228Character=/*YAK Extracted CSS:
.Kanji228Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji228Character");const Kanji229Character=/*YAK Extracted CSS:
.Kanji229Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji229Character");const Kanji230Character=/*YAK Extracted CSS:
.Kanji230Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji230Character");const Kanji231Character=/*YAK Extracted CSS:
.Kanji231Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji231Character");const Kanji232Character=/*YAK Extracted CSS:
.Kanji232Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji232Character");const Kanji233Character=/*YAK Extracted CSS:
.Kanji233Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji233Character");const Kanji234Character=/*YAK Extracted CSS:
.Kanji234Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji234Character");const Kanji235Character=/*YAK Extracted CSS:
.Kanji235Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji235Character");const Kanji236Character=/*YAK Extracted CSS:
.Kanji236Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji236Character");const Kanji237Character=/*YAK Extracted CSS:
.Kanji237Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji237Character");const Kanji238Character=/*YAK Extracted CSS:
.Kanji238Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji238Character");const Kanji239Character=/*YAK Extracted CSS:
.Kanji239Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji239Character");const Kanji240Character=/*YAK Extracted CSS:
.Kanji240Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji240Character");const Kanji241Character=/*YAK Extracted CSS:
.Kanji241Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji241Character");const Kanji242Character=/*YAK Extracted CSS:
.Kanji242Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji242Character");const Kanji243Character=/*YAK Extracted CSS:
.Kanji243Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji243Character");const Kanji244Character=/*YAK Extracted CSS:
.Kanji244Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji244Character");const Kanji245Character=/*YAK Extracted CSS:
.Kanji245Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji245Character");const Kanji246Character=/*YAK Extracted CSS:
.Kanji246Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji246Character");const Kanji247Character=/*YAK Extracted CSS:
.Kanji247Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji247Character");const Kanji248Character=/*YAK Extracted CSS:
.Kanji248Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji248Character");const Kanji249Character=/*YAK Extracted CSS:
.Kanji249Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji249Character");const Kanji250Character=/*YAK Extracted CSS:
.Kanji250Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji250Character");const Kanji251Character=/*YAK Extracted CSS:
.Kanji251Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji251Character");const Kanji252Character=/*YAK Extracted CSS:
.Kanji252Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji252Character");const Kanji253Character=/*YAK Extracted CSS:
.Kanji253Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji253Character");const Kanji254Character=/*YAK Extracted CSS:
.Kanji254Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji254Character");const Kanji255Character=/*YAK Extracted CSS:
.Kanji255Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji255Character");const Kanji256Character=/*YAK Extracted CSS:
.Kanji256Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji256Character");const Kanji257Character=/*YAK Extracted CSS:
.Kanji257Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji257Character");const Kanji258Character=/*YAK Extracted CSS:
.Kanji258Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji258Character");const Kanji259Character=/*YAK Extracted CSS:
.Kanji259Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji259Character");const Kanji260Character=/*YAK Extracted CSS:
.Kanji260Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji260Character");const Kanji261Character=/*YAK Extracted CSS:
.Kanji261Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji261Character");const Kanji262Character=/*YAK Extracted CSS:
.Kanji262Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji262Character");const Kanji263Character=/*YAK Extracted CSS:
.Kanji263Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji263Character");const Kanji264Character=/*YAK Extracted CSS:
.Kanji264Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji264Character");const Kanji265Character=/*YAK Extracted CSS:
.Kanji265Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji265Character");const Kanji266Character=/*YAK Extracted CSS:
.Kanji266Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji266Character");const Kanji267Character=/*YAK Extracted CSS:
.Kanji267Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji267Character");const Kanji268Character=/*YAK Extracted CSS:
.Kanji268Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji268Character");const Kanji269Character=/*YAK Extracted CSS:
.Kanji269Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji269Character");const Kanji270Character=/*YAK Extracted CSS:
.Kanji270Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji270Character");const Kanji271Character=/*YAK Extracted CSS:
.Kanji271Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji271Character");const Kanji272Character=/*YAK Extracted CSS:
.Kanji272Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji272Character");const Kanji273Character=/*YAK Extracted CSS:
.Kanji273Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji273Character");const Kanji274Character=/*YAK Extracted CSS:
.Kanji274Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji274Character");const Kanji275Character=/*YAK Extracted CSS:
.Kanji275Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji275Character");const Kanji276Character=/*YAK Extracted CSS:
.Kanji276Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji276Character");const Kanji277Character=/*YAK Extracted CSS:
.Kanji277Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji277Character");const Kanji278Character=/*YAK Extracted CSS:
.Kanji278Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji278Character");const Kanji279Character=/*YAK Extracted CSS:
.Kanji279Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji279Character");const Kanji280Character=/*YAK Extracted CSS:
.Kanji280Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji280Character");const Kanji281Character=/*YAK Extracted CSS:
.Kanji281Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji281Character");const Kanji282Character=/*YAK Extracted CSS:
.Kanji282Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji282Character");const Kanji283Character=/*YAK Extracted CSS:
.Kanji283Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji283Character");const Kanji284Character=/*YAK Extracted CSS:
.Kanji284Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji284Character");const Kanji285Character=/*YAK Extracted CSS:
.Kanji285Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji285Character");const Kanji286Character=/*YAK Extracted CSS:
.Kanji286Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji286Character");const Kanji287Character=/*YAK Extracted CSS:
.Kanji287Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji287Character");const Kanji288Character=/*YAK Extracted CSS:
.Kanji288Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji288Character");const Kanji289Character=/*YAK Extracted CSS:
.Kanji289Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji289Character");const Kanji290Character=/*YAK Extracted CSS:
.Kanji290Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji290Character");const Kanji291Character=/*YAK Extracted CSS:
.Kanji291Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji291Character");const Kanji292Character=/*YAK Extracted CSS:
.Kanji292Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji292Character");const Kanji293Character=/*YAK Extracted CSS:
.Kanji293Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji293Character");const Kanji294Character=/*YAK Extracted CSS:
.Kanji294Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji294Character");const Kanji295Character=/*YAK Extracted CSS:
.Kanji295Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji295Character");const Kanji296Character=/*YAK Extracted CSS:
.Kanji296Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji296Character");const Kanji297Character=/*YAK Extracted CSS:
.Kanji297Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji297Character");const Kanji298Character=/*YAK Extracted CSS:
.Kanji298Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji298Character");const Kanji299Character=/*YAK Extracted CSS:
.Kanji299Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji299Character");const Kanji300Character=/*YAK Extracted CSS:
.Kanji300Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji300Character");const Kanji301Character=/*YAK Extracted CSS:
.Kanji301Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji301Character");const Kanji302Character=/*YAK Extracted CSS:
.Kanji302Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji302Character");const Kanji303Character=/*YAK Extracted CSS:
.Kanji303Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji303Character");const Kanji304Character=/*YAK Extracted CSS:
.Kanji304Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji304Character");const Kanji305Character=/*YAK Extracted CSS:
.Kanji305Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji305Character");const Kanji306Character=/*YAK Extracted CSS:
.Kanji306Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji306Character");const Kanji307Character=/*YAK Extracted CSS:
.Kanji307Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji307Character");const Kanji308Character=/*YAK Extracted CSS:
.Kanji308Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji308Character");const Kanji309Character=/*YAK Extracted CSS:
.Kanji309Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji309Character");const Kanji310Character=/*YAK Extracted CSS:
.Kanji310Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji310Character");const Kanji311Character=/*YAK Extracted CSS:
.Kanji311Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji311Character");const Kanji312Character=/*YAK Extracted CSS:
.Kanji312Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji312Character");const Kanji313Character=/*YAK Extracted CSS:
.Kanji313Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji313Character");const Kanji314Character=/*YAK Extracted CSS:
.Kanji314Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji314Character");const Kanji315Character=/*YAK Extracted CSS:
.Kanji315Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji315Character");const Kanji316Character=/*YAK Extracted CSS:
.Kanji316Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji316Character");const Kanji317Character=/*YAK Extracted CSS:
.Kanji317Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji317Character");const Kanji318Character=/*YAK Extracted CSS:
.Kanji318Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji318Character");const Kanji319Character=/*YAK Extracted CSS:
.Kanji319Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji319Character");const Kanji320Character=/*YAK Extracted CSS:
.Kanji320Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji320Character");const Kanji321Character=/*YAK Extracted CSS:
.Kanji321Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji321Character");const Kanji322Character=/*YAK Extracted CSS:
.Kanji322Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji322Character");const Kanji323Character=/*YAK Extracted CSS:
.Kanji323Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji323Character");const Kanji324Character=/*YAK Extracted CSS:
.Kanji324Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji324Character");const Kanji325Character=/*YAK Extracted CSS:
.Kanji325Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji325Character");const Kanji326Character=/*YAK Extracted CSS:
.Kanji326Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji326Character");const Kanji327Character=/*YAK Extracted CSS:
.Kanji327Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji327Character");const Kanji328Character=/*YAK Extracted CSS:
.Kanji328Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji328Character");const Kanji329Character=/*YAK Extracted CSS:
.Kanji329Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji329Character");const Kanji330Character=/*YAK Extracted CSS:
.Kanji330Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji330Character");const Kanji331Character=/*YAK Extracted CSS:
.Kanji331Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji331Character");const Kanji332Character=/*YAK Extracted CSS:
.Kanji332Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji332Character");const Kanji333Character=/*YAK Extracted CSS:
.Kanji333Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji333Character");const Kanji334Character=/*YAK Extracted CSS:
.Kanji334Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji334Character");const Kanji335Character=/*YAK Extracted CSS:
.Kanji335Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji335Character");const Kanji336Character=/*YAK Extracted CSS:
.Kanji336Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji336Character");const Kanji337Character=/*YAK Extracted CSS:
.Kanji337Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji337Character");const Kanji338Character=/*YAK Extracted CSS:
.Kanji338Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji338Character");const Kanji339Character=/*YAK Extracted CSS:
.Kanji339Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji339Character");const Kanji340Character=/*YAK Extracted CSS:
.Kanji340Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji340Character");const Kanji341Character=/*YAK Extracted CSS:
.Kanji341Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji341Character");const Kanji342Character=/*YAK Extracted CSS:
.Kanji342Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji342Character");const Kanji343Character=/*YAK Extracted CSS:
.Kanji343Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji343Character");const Kanji344Character=/*YAK Extracted CSS:
.Kanji344Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji344Character");const Kanji345Character=/*YAK Extracted CSS:
.Kanji345Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji345Character");const Kanji346Character=/*YAK Extracted CSS:
.Kanji346Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji346Character");const Kanji347Character=/*YAK Extracted CSS:
.Kanji347Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji347Character");const Kanji348Character=/*YAK Extracted CSS:
.Kanji348Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji348Character");const Kanji349Character=/*YAK Extracted CSS:
.Kanji349Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji349Character");const Kanji350Character=/*YAK Extracted CSS:
.Kanji350Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji350Character");const Kanji351Character=/*YAK Extracted CSS:
.Kanji351Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji351Character");const Kanji352Character=/*YAK Extracted CSS:
.Kanji352Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji352Character");const Kanji353Character=/*YAK Extracted CSS:
.Kanji353Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji353Character");const Kanji354Character=/*YAK Extracted CSS:
.Kanji354Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji354Character");const Kanji355Character=/*YAK Extracted CSS:
.Kanji355Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji355Character");const Kanji356Character=/*YAK Extracted CSS:
.Kanji356Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji356Character");const Kanji357Character=/*YAK Extracted CSS:
.Kanji357Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji357Character");const Kanji358Character=/*YAK Extracted CSS:
.Kanji358Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji358Character");const Kanji359Character=/*YAK Extracted CSS:
.Kanji359Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji359Character");const Kanji360Character=/*YAK Extracted CSS:
.Kanji360Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji360Character");const Kanji361Character=/*YAK Extracted CSS:
.Kanji361Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji361Character");const Kanji362Character=/*YAK Extracted CSS:
.Kanji362Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji362Character");const Kanji363Character=/*YAK Extracted CSS:
.Kanji363Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji363Character");const Kanji364Character=/*YAK Extracted CSS:
.Kanji364Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji364Character");const Kanji365Character=/*YAK Extracted CSS:
.Kanji365Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji365Character");const Kanji366Character=/*YAK Extracted CSS:
.Kanji366Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji366Character");const Kanji367Character=/*YAK Extracted CSS:
.Kanji367Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji367Character");const Kanji368Character=/*YAK Extracted CSS:
.Kanji368Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji368Character");const Kanji369Character=/*YAK Extracted CSS:
.Kanji369Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji369Character");const Kanji370Character=/*YAK Extracted CSS:
.Kanji370Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji370Character");const Kanji371Character=/*YAK Extracted CSS:
.Kanji371Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji371Character");const Kanji372Character=/*YAK Extracted CSS:
.Kanji372Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji372Character");const Kanji373Character=/*YAK Extracted CSS:
.Kanji373Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji373Character");const Kanji374Character=/*YAK Extracted CSS:
.Kanji374Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji374Character");const Kanji375Character=/*YAK Extracted CSS:
.Kanji375Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji375Character");const Kanji376Character=/*YAK Extracted CSS:
.Kanji376Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji376Character");const Kanji377Character=/*YAK Extracted CSS:
.Kanji377Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji377Character");const Kanji378Character=/*YAK Extracted CSS:
.Kanji378Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji378Character");const Kanji379Character=/*YAK Extracted CSS:
.Kanji379Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji379Character");const Kanji380Character=/*YAK Extracted CSS:
.Kanji380Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji380Character");const Kanji381Character=/*YAK Extracted CSS:
.Kanji381Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji381Character");const Kanji382Character=/*YAK Extracted CSS:
.Kanji382Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji382Character");const Kanji383Character=/*YAK Extracted CSS:
.Kanji383Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji383Character");const Kanji384Character=/*YAK Extracted CSS:
.Kanji384Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji384Character");const Kanji385Character=/*YAK Extracted CSS:
.Kanji385Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji385Character");const Kanji386Character=/*YAK Extracted CSS:
.Kanji386Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji386Character");const Kanji387Character=/*YAK Extracted CSS:
.Kanji387Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji387Character");const Kanji388Character=/*YAK Extracted CSS:
.Kanji388Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji388Character");const Kanji389Character=/*YAK Extracted CSS:
.Kanji389Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji389Character");const Kanji390Character=/*YAK Extracted CSS:
.Kanji390Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji390Character");const Kanji391Character=/*YAK Extracted CSS:
.Kanji391Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji391Character");const Kanji392Character=/*YAK Extracted CSS:
.Kanji392Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji392Character");const Kanji393Character=/*YAK Extracted CSS:
.Kanji393Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji393Character");const Kanji394Character=/*YAK Extracted CSS:
.Kanji394Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji394Character");const Kanji395Character=/*YAK Extracted CSS:
.Kanji395Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji395Character");const Kanji396Character=/*YAK Extracted CSS:
.Kanji396Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji396Character");const Kanji397Character=/*YAK Extracted CSS:
.Kanji397Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji397Character");const Kanji398Character=/*YAK Extracted CSS:
.Kanji398Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji398Character");const Kanji399Character=/*YAK Extracted CSS:
.Kanji399Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji399Character");const Kanji400Character=/*YAK Extracted CSS:
.Kanji400Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji400Character");const Kanji401Character=/*YAK Extracted CSS:
.Kanji401Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji401Character");const Kanji402Character=/*YAK Extracted CSS:
.Kanji402Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji402Character");const Kanji403Character=/*YAK Extracted CSS:
.Kanji403Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji403Character");const Kanji404Character=/*YAK Extracted CSS:
.Kanji404Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji404Character");const Kanji405Character=/*YAK Extracted CSS:
.Kanji405Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji405Character");const Kanji406Character=/*YAK Extracted CSS:
.Kanji406Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji406Character");const Kanji407Character=/*YAK Extracted CSS:
.Kanji407Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji407Character");const Kanji408Character=/*YAK Extracted CSS:
.Kanji408Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji408Character");const Kanji409Character=/*YAK Extracted CSS:
.Kanji409Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji409Character");const Kanji410Character=/*YAK Extracted CSS:
.Kanji410Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji410Character");const Kanji411Character=/*YAK Extracted CSS:
.Kanji411Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji411Character");const Kanji412Character=/*YAK Extracted CSS:
.Kanji412Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji412Character");const Kanji413Character=/*YAK Extracted CSS:
.Kanji413Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji413Character");const Kanji414Character=/*YAK Extracted CSS:
.Kanji414Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji414Character");const Kanji415Character=/*YAK Extracted CSS:
.Kanji415Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji415Character");const Kanji416Character=/*YAK Extracted CSS:
.Kanji416Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji416Character");const Kanji417Character=/*YAK Extracted CSS:
.Kanji417Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji417Character");const Kanji418Character=/*YAK Extracted CSS:
.Kanji418Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji418Character");const Kanji419Character=/*YAK Extracted CSS:
.Kanji419Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji419Character");const Kanji420Character=/*YAK Extracted CSS:
.Kanji420Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji420Character");const Kanji421Character=/*YAK Extracted CSS:
.Kanji421Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji421Character");const Kanji422Character=/*YAK Extracted CSS:
.Kanji422Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji422Character");const Kanji423Character=/*YAK Extracted CSS:
.Kanji423Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji423Character");const Kanji424Character=/*YAK Extracted CSS:
.Kanji424Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji424Character");const Kanji425Character=/*YAK Extracted CSS:
.Kanji425Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji425Character");const Kanji426Character=/*YAK Extracted CSS:
.Kanji426Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji426Character");const Kanji427Character=/*YAK Extracted CSS:
.Kanji427Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji427Character");const Kanji428Character=/*YAK Extracted CSS:
.Kanji428Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji428Character");const Kanji429Character=/*YAK Extracted CSS:
.Kanji429Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji429Character");const Kanji430Character=/*YAK Extracted CSS:
.Kanji430Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji430Character");const Kanji431Character=/*YAK Extracted CSS:
.Kanji431Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji431Character");const Kanji432Character=/*YAK Extracted CSS:
.Kanji432Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji432Character");const Kanji433Character=/*YAK Extracted CSS:
.Kanji433Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji433Character");const Kanji434Character=/*YAK Extracted CSS:
.Kanji434Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji434Character");const Kanji435Character=/*YAK Extracted CSS:
.Kanji435Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji435Character");const Kanji436Character=/*YAK Extracted CSS:
.Kanji436Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji436Character");const Kanji437Character=/*YAK Extracted CSS:
.Kanji437Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji437Character");const Kanji438Character=/*YAK Extracted CSS:
.Kanji438Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji438Character");const Kanji439Character=/*YAK Extracted CSS:
.Kanji439Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji439Character");const Kanji440Character=/*YAK Extracted CSS:
.Kanji440Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji440Character");const Kanji441Character=/*YAK Extracted CSS:
.Kanji441Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji441Character");const Kanji442Character=/*YAK Extracted CSS:
.Kanji442Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji442Character");const Kanji443Character=/*YAK Extracted CSS:
.Kanji443Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji443Character");const Kanji444Character=/*YAK Extracted CSS:
.Kanji444Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji444Character");const Kanji445Character=/*YAK Extracted CSS:
.Kanji445Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji445Character");const Kanji446Character=/*YAK Extracted CSS:
.Kanji446Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji446Character");const Kanji447Character=/*YAK Extracted CSS:
.Kanji447Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji447Character");const Kanji448Character=/*YAK Extracted CSS:
.Kanji448Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji448Character");const Kanji449Character=/*YAK Extracted CSS:
.Kanji449Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji449Character");const Kanji450Character=/*YAK Extracted CSS:
.Kanji450Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji450Character");const Kanji451Character=/*YAK Extracted CSS:
.Kanji451Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji451Character");const Kanji452Character=/*YAK Extracted CSS:
.Kanji452Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji452Character");const Kanji453Character=/*YAK Extracted CSS:
.Kanji453Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji453Character");const Kanji454Character=/*YAK Extracted CSS:
.Kanji454Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji454Character");const Kanji455Character=/*YAK Extracted CSS:
.Kanji455Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji455Character");const Kanji456Character=/*YAK Extracted CSS:
.Kanji456Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji456Character");const Kanji457Character=/*YAK Extracted CSS:
.Kanji457Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji457Character");const Kanji458Character=/*YAK Extracted CSS:
.Kanji458Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji458Character");const Kanji459Character=/*YAK Extracted CSS:
.Kanji459Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji459Character");const Kanji460Character=/*YAK Extracted CSS:
.Kanji460Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji460Character");const Kanji461Character=/*YAK Extracted CSS:
.Kanji461Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji461Character");const Kanji462Character=/*YAK Extracted CSS:
.Kanji462Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji462Character");const Kanji463Character=/*YAK Extracted CSS:
.Kanji463Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji463Character");const Kanji464Character=/*YAK Extracted CSS:
.Kanji464Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji464Character");const Kanji465Character=/*YAK Extracted CSS:
.Kanji465Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji465Character");const Kanji466Character=/*YAK Extracted CSS:
.Kanji466Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji466Character");const Kanji467Character=/*YAK Extracted CSS:
.Kanji467Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji467Character");const Kanji468Character=/*YAK Extracted CSS:
.Kanji468Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji468Character");const Kanji469Character=/*YAK Extracted CSS:
.Kanji469Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji469Character");const Kanji470Character=/*YAK Extracted CSS:
.Kanji470Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji470Character");const Kanji471Character=/*YAK Extracted CSS:
.Kanji471Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji471Character");const Kanji472Character=/*YAK Extracted CSS:
.Kanji472Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji472Character");const Kanji473Character=/*YAK Extracted CSS:
.Kanji473Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji473Character");const Kanji474Character=/*YAK Extracted CSS:
.Kanji474Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji474Character");const Kanji475Character=/*YAK Extracted CSS:
.Kanji475Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji475Character");const Kanji476Character=/*YAK Extracted CSS:
.Kanji476Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji476Character");const Kanji477Character=/*YAK Extracted CSS:
.Kanji477Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji477Character");const Kanji478Character=/*YAK Extracted CSS:
.Kanji478Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji478Character");const Kanji479Character=/*YAK Extracted CSS:
.Kanji479Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji479Character");const Kanji480Character=/*YAK Extracted CSS:
.Kanji480Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji480Character");const Kanji481Character=/*YAK Extracted CSS:
.Kanji481Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji481Character");const Kanji482Character=/*YAK Extracted CSS:
.Kanji482Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji482Character");const Kanji483Character=/*YAK Extracted CSS:
.Kanji483Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji483Character");const Kanji484Character=/*YAK Extracted CSS:
.Kanji484Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji484Character");const Kanji485Character=/*YAK Extracted CSS:
.Kanji485Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji485Character");const Kanji486Character=/*YAK Extracted CSS:
.Kanji486Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji486Character");const Kanji487Character=/*YAK Extracted CSS:
.Kanji487Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji487Character");const Kanji488Character=/*YAK Extracted CSS:
.Kanji488Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji488Character");const Kanji489Character=/*YAK Extracted CSS:
.Kanji489Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji489Character");const Kanji490Character=/*YAK Extracted CSS:
.Kanji490Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji490Character");const Kanji491Character=/*YAK Extracted CSS:
.Kanji491Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji491Character");const Kanji492Character=/*YAK Extracted CSS:
.Kanji492Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji492Character");const Kanji493Character=/*YAK Extracted CSS:
.Kanji493Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji493Character");const Kanji494Character=/*YAK Extracted CSS:
.Kanji494Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji494Character");const Kanji495Character=/*YAK Extracted CSS:
.Kanji495Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji495Character");const Kanji496Character=/*YAK Extracted CSS:
.Kanji496Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji496Character");const Kanji497Character=/*YAK Extracted CSS:
.Kanji497Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji497Character");const Kanji498Character=/*YAK Extracted CSS:
.Kanji498Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji498Character");const Kanji499Character=/*YAK Extracted CSS:
.Kanji499Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji499Character");const Kanji500Character=/*YAK Extracted CSS:
.Kanji500Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji500Character");const Kanji501Character=/*YAK Extracted CSS:
.Kanji501Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji501Character");const Kanji502Character=/*YAK Extracted CSS:
.Kanji502Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji502Character");const Kanji503Character=/*YAK Extracted CSS:
.Kanji503Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji503Character");const Kanji504Character=/*YAK Extracted CSS:
.Kanji504Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji504Character");const Kanji505Character=/*YAK Extracted CSS:
.Kanji505Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji505Character");const Kanji506Character=/*YAK Extracted CSS:
.Kanji506Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji506Character");const Kanji507Character=/*YAK Extracted CSS:
.Kanji507Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji507Character");const Kanji508Character=/*YAK Extracted CSS:
.Kanji508Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji508Character");const Kanji509Character=/*YAK Extracted CSS:
.Kanji509Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji509Character");const Kanji510Character=/*YAK Extracted CSS:
.Kanji510Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji510Character");const Kanji511Character=/*YAK Extracted CSS:
.Kanji511Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji511Character");const Kanji512Character=/*YAK Extracted CSS:
.Kanji512Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji512Character");const Kanji513Character=/*YAK Extracted CSS:
.Kanji513Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji513Character");const Kanji514Character=/*YAK Extracted CSS:
.Kanji514Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji514Character");const Kanji515Character=/*YAK Extracted CSS:
.Kanji515Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji515Character");const Kanji516Character=/*YAK Extracted CSS:
.Kanji516Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji516Character");const Kanji517Character=/*YAK Extracted CSS:
.Kanji517Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji517Character");const Kanji518Character=/*YAK Extracted CSS:
.Kanji518Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji518Character");const Kanji519Character=/*YAK Extracted CSS:
.Kanji519Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji519Character");const Kanji520Character=/*YAK Extracted CSS:
.Kanji520Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji520Character");const Kanji521Character=/*YAK Extracted CSS:
.Kanji521Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji521Character");const Kanji522Character=/*YAK Extracted CSS:
.Kanji522Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji522Character");const Kanji523Character=/*YAK Extracted CSS:
.Kanji523Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji523Character");const Kanji524Character=/*YAK Extracted CSS:
.Kanji524Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji524Character");const Kanji525Character=/*YAK Extracted CSS:
.Kanji525Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji525Character");const Kanji526Character=/*YAK Extracted CSS:
.Kanji526Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji526Character");const Kanji527Character=/*YAK Extracted CSS:
.Kanji527Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji527Character");const Kanji528Character=/*YAK Extracted CSS:
.Kanji528Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji528Character");const Kanji529Character=/*YAK Extracted CSS:
.Kanji529Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji529Character");const Kanji530Character=/*YAK Extracted CSS:
.Kanji530Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji530Character");const Kanji531Character=/*YAK Extracted CSS:
.Kanji531Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji531Character");const Kanji532Character=/*YAK Extracted CSS:
.Kanji532Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji532Character");const Kanji533Character=/*YAK Extracted CSS:
.Kanji533Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji533Character");const Kanji534Character=/*YAK Extracted CSS:
.Kanji534Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji534Character");const Kanji535Character=/*YAK Extracted CSS:
.Kanji535Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji535Character");const Kanji536Character=/*YAK Extracted CSS:
.Kanji536Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji536Character");const Kanji537Character=/*YAK Extracted CSS:
.Kanji537Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji537Character");const Kanji538Character=/*YAK Extracted CSS:
.Kanji538Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji538Character");const Kanji539Character=/*YAK Extracted CSS:
.Kanji539Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji539Character");const Kanji540Character=/*YAK Extracted CSS:
.Kanji540Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji540Character");const Kanji541Character=/*YAK Extracted CSS:
.Kanji541Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji541Character");const Kanji542Character=/*YAK Extracted CSS:
.Kanji542Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji542Character");const Kanji543Character=/*YAK Extracted CSS:
.Kanji543Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji543Character");const Kanji544Character=/*YAK Extracted CSS:
.Kanji544Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji544Character");const Kanji545Character=/*YAK Extracted CSS:
.Kanji545Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji545Character");const Kanji546Character=/*YAK Extracted CSS:
.Kanji546Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji546Character");const Kanji547Character=/*YAK Extracted CSS:
.Kanji547Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji547Character");const Kanji548Character=/*YAK Extracted CSS:
.Kanji548Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji548Character");const Kanji549Character=/*YAK Extracted CSS:
.Kanji549Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji549Character");const Kanji550Character=/*YAK Extracted CSS:
.Kanji550Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji550Character");const Kanji551Character=/*YAK Extracted CSS:
.Kanji551Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji551Character");const Kanji552Character=/*YAK Extracted CSS:
.Kanji552Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji552Character");const Kanji553Character=/*YAK Extracted CSS:
.Kanji553Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji553Character");const Kanji554Character=/*YAK Extracted CSS:
.Kanji554Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji554Character");const Kanji555Character=/*YAK Extracted CSS:
.Kanji555Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji555Character");const Kanji556Character=/*YAK Extracted CSS:
.Kanji556Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji556Character");const Kanji557Character=/*YAK Extracted CSS:
.Kanji557Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji557Character");const Kanji558Character=/*YAK Extracted CSS:
.Kanji558Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji558Character");const Kanji559Character=/*YAK Extracted CSS:
.Kanji559Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji559Character");const Kanji560Character=/*YAK Extracted CSS:
.Kanji560Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji560Character");const Kanji561Character=/*YAK Extracted CSS:
.Kanji561Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji561Character");const Kanji562Character=/*YAK Extracted CSS:
.Kanji562Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji562Character");const Kanji563Character=/*YAK Extracted CSS:
.Kanji563Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji563Character");const Kanji564Character=/*YAK Extracted CSS:
.Kanji564Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji564Character");const Kanji565Character=/*YAK Extracted CSS:
.Kanji565Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji565Character");const Kanji566Character=/*YAK Extracted CSS:
.Kanji566Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji566Character");const Kanji567Character=/*YAK Extracted CSS:
.Kanji567Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji567Character");const Kanji568Character=/*YAK Extracted CSS:
.Kanji568Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji568Character");const Kanji569Character=/*YAK Extracted CSS:
.Kanji569Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji569Character");const Kanji570Character=/*YAK Extracted CSS:
.Kanji570Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji570Character");const Kanji571Character=/*YAK Extracted CSS:
.Kanji571Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji571Character");const Kanji572Character=/*YAK Extracted CSS:
.Kanji572Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji572Character");const Kanji573Character=/*YAK Extracted CSS:
.Kanji573Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji573Character");const Kanji574Character=/*YAK Extracted CSS:
.Kanji574Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji574Character");const Kanji575Character=/*YAK Extracted CSS:
.Kanji575Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji575Character");const Kanji576Character=/*YAK Extracted CSS:
.Kanji576Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji576Character");const Kanji577Character=/*YAK Extracted CSS:
.Kanji577Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji577Character");const Kanji578Character=/*YAK Extracted CSS:
.Kanji578Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji578Character");const Kanji579Character=/*YAK Extracted CSS:
.Kanji579Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji579Character");const Kanji580Character=/*YAK Extracted CSS:
.Kanji580Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji580Character");const Kanji581Character=/*YAK Extracted CSS:
.Kanji581Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji581Character");const Kanji582Character=/*YAK Extracted CSS:
.Kanji582Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji582Character");const Kanji583Character=/*YAK Extracted CSS:
.Kanji583Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji583Character");const Kanji584Character=/*YAK Extracted CSS:
.Kanji584Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji584Character");const Kanji585Character=/*YAK Extracted CSS:
.Kanji585Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji585Character");const Kanji586Character=/*YAK Extracted CSS:
.Kanji586Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji586Character");const Kanji587Character=/*YAK Extracted CSS:
.Kanji587Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji587Character");const Kanji588Character=/*YAK Extracted CSS:
.Kanji588Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji588Character");const Kanji589Character=/*YAK Extracted CSS:
.Kanji589Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji589Character");const Kanji590Character=/*YAK Extracted CSS:
.Kanji590Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji590Character");const Kanji591Character=/*YAK Extracted CSS:
.Kanji591Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji591Character");const Kanji592Character=/*YAK Extracted CSS:
.Kanji592Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji592Character");const Kanji593Character=/*YAK Extracted CSS:
.Kanji593Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji593Character");const Kanji594Character=/*YAK Extracted CSS:
.Kanji594Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji594Character");const Kanji595Character=/*YAK Extracted CSS:
.Kanji595Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji595Character");const Kanji596Character=/*YAK Extracted CSS:
.Kanji596Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji596Character");const Kanji597Character=/*YAK Extracted CSS:
.Kanji597Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji597Character");const Kanji598Character=/*YAK Extracted CSS:
.Kanji598Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji598Character");const Kanji599Character=/*YAK Extracted CSS:
.Kanji599Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji599Character");const Kanji600Character=/*YAK Extracted CSS:
.Kanji600Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji600Character");const Kanji601Character=/*YAK Extracted CSS:
.Kanji601Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji601Character");const Kanji602Character=/*YAK Extracted CSS:
.Kanji602Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji602Character");const Kanji603Character=/*YAK Extracted CSS:
.Kanji603Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji603Character");const Kanji604Character=/*YAK Extracted CSS:
.Kanji604Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji604Character");const Kanji605Character=/*YAK Extracted CSS:
.Kanji605Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji605Character");const Kanji606Character=/*YAK Extracted CSS:
.Kanji606Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji606Character");const Kanji607Character=/*YAK Extracted CSS:
.Kanji607Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji607Character");const Kanji608Character=/*YAK Extracted CSS:
.Kanji608Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji608Character");const Kanji609Character=/*YAK Extracted CSS:
.Kanji609Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji609Character");const Kanji610Character=/*YAK Extracted CSS:
.Kanji610Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji610Character");const Kanji611Character=/*YAK Extracted CSS:
.Kanji611Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji611Character");const Kanji612Character=/*YAK Extracted CSS:
.Kanji612Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji612Character");const Kanji613Character=/*YAK Extracted CSS:
.Kanji613Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji613Character");const Kanji614Character=/*YAK Extracted CSS:
.Kanji614Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji614Character");const Kanji615Character=/*YAK Extracted CSS:
.Kanji615Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji615Character");const Kanji616Character=/*YAK Extracted CSS:
.Kanji616Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji616Character");const Kanji617Character=/*YAK Extracted CSS:
.Kanji617Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji617Character");const Kanji618Character=/*YAK Extracted CSS:
.Kanji618Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji618Character");const Kanji619Character=/*YAK Extracted CSS:
.Kanji619Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji619Character");const Kanji620Character=/*YAK Extracted CSS:
.Kanji620Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji620Character");const Kanji621Character=/*YAK Extracted CSS:
.Kanji621Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji621Character");const Kanji622Character=/*YAK Extracted CSS:
.Kanji622Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji622Character");const Kanji623Character=/*YAK Extracted CSS:
.Kanji623Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji623Character");const Kanji624Character=/*YAK Extracted CSS:
.Kanji624Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji624Character");const Kanji625Character=/*YAK Extracted CSS:
.Kanji625Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji625Character");const Kanji626Character=/*YAK Extracted CSS:
.Kanji626Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji626Character");const Kanji627Character=/*YAK Extracted CSS:
.Kanji627Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji627Character");const Kanji628Character=/*YAK Extracted CSS:
.Kanji628Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji628Character");const Kanji629Character=/*YAK Extracted CSS:
.Kanji629Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji629Character");const Kanji630Character=/*YAK Extracted CSS:
.Kanji630Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji630Character");const Kanji631Character=/*YAK Extracted CSS:
.Kanji631Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji631Character");const Kanji632Character=/*YAK Extracted CSS:
.Kanji632Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji632Character");const Kanji633Character=/*YAK Extracted CSS:
.Kanji633Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji633Character");const Kanji634Character=/*YAK Extracted CSS:
.Kanji634Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji634Character");const Kanji635Character=/*YAK Extracted CSS:
.Kanji635Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji635Character");const Kanji636Character=/*YAK Extracted CSS:
.Kanji636Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji636Character");const Kanji637Character=/*YAK Extracted CSS:
.Kanji637Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji637Character");const Kanji638Character=/*YAK Extracted CSS:
.Kanji638Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji638Character");const Kanji639Character=/*YAK Extracted CSS:
.Kanji639Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji639Character");const Kanji640Character=/*YAK Extracted CSS:
.Kanji640Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji640Character");const Kanji641Character=/*YAK Extracted CSS:
.Kanji641Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji641Character");const Kanji642Character=/*YAK Extracted CSS:
.Kanji642Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji642Character");const Kanji643Character=/*YAK Extracted CSS:
.Kanji643Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji643Character");const Kanji644Character=/*YAK Extracted CSS:
.Kanji644Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji644Character");const Kanji645Character=/*YAK Extracted CSS:
.Kanji645Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji645Character");const Kanji646Character=/*YAK Extracted CSS:
.Kanji646Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji646Character");const Kanji647Character=/*YAK Extracted CSS:
.Kanji647Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji647Character");const Kanji648Character=/*YAK Extracted CSS:
.Kanji648Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji648Character");const Kanji649Character=/*YAK Extracted CSS:
.Kanji649Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji649Character");const Kanji650Character=/*YAK Extracted CSS:
.Kanji650Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji650Character");const Kanji651Character=/*YAK Extracted CSS:
.Kanji651Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji651Character");const Kanji652Character=/*YAK Extracted CSS:
.Kanji652Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji652Character");const Kanji653Character=/*YAK Extracted CSS:
.Kanji653Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji653Character");const Kanji654Character=/*YAK Extracted CSS:
.Kanji654Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji654Character");const Kanji655Character=/*YAK Extracted CSS:
.Kanji655Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji655Character");const Kanji656Character=/*YAK Extracted CSS:
.Kanji656Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji656Character");const Kanji657Character=/*YAK Extracted CSS:
.Kanji657Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji657Character");const Kanji658Character=/*YAK Extracted CSS:
.Kanji658Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji658Character");const Kanji659Character=/*YAK Extracted CSS:
.Kanji659Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji659Character");const Kanji660Character=/*YAK Extracted CSS:
.Kanji660Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji660Character");const Kanji661Character=/*YAK Extracted CSS:
.Kanji661Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji661Character");const Kanji662Character=/*YAK Extracted CSS:
.Kanji662Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji662Character");const Kanji663Character=/*YAK Extracted CSS:
.Kanji663Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji663Character");const Kanji664Character=/*YAK Extracted CSS:
.Kanji664Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji664Character");const Kanji665Character=/*YAK Extracted CSS:
.Kanji665Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji665Character");const Kanji666Character=/*YAK Extracted CSS:
.Kanji666Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji666Character");const Kanji667Character=/*YAK Extracted CSS:
.Kanji667Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji667Character");const Kanji668Character=/*YAK Extracted CSS:
.Kanji668Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji668Character");const Kanji669Character=/*YAK Extracted CSS:
.Kanji669Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji669Character");const Kanji670Character=/*YAK Extracted CSS:
.Kanji670Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji670Character");const Kanji671Character=/*YAK Extracted CSS:
.Kanji671Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji671Character");const Kanji672Character=/*YAK Extracted CSS:
.Kanji672Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji672Character");const Kanji673Character=/*YAK Extracted CSS:
.Kanji673Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji673Character");const Kanji674Character=/*YAK Extracted CSS:
.Kanji674Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji674Character");const Kanji675Character=/*YAK Extracted CSS:
.Kanji675Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji675Character");const Kanji676Character=/*YAK Extracted CSS:
.Kanji676Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji676Character");const Kanji677Character=/*YAK Extracted CSS:
.Kanji677Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji677Character");const Kanji678Character=/*YAK Extracted CSS:
.Kanji678Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji678Character");const Kanji679Character=/*YAK Extracted CSS:
.Kanji679Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji679Character");const Kanji680Character=/*YAK Extracted CSS:
.Kanji680Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji680Character");const Kanji681Character=/*YAK Extracted CSS:
.Kanji681Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji681Character");const Kanji682Character=/*YAK Extracted CSS:
.Kanji682Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji682Character");const Kanji683Character=/*YAK Extracted CSS:
.Kanji683Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji683Character");const Kanji684Character=/*YAK Extracted CSS:
.Kanji684Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji684Character");const Kanji685Character=/*YAK Extracted CSS:
.Kanji685Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji685Character");const Kanji686Character=/*YAK Extracted CSS:
.Kanji686Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji686Character");const Kanji687Character=/*YAK Extracted CSS:
.Kanji687Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji687Character");const Kanji688Character=/*YAK Extracted CSS:
.Kanji688Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji688Character");const Kanji689Character=/*YAK Extracted CSS:
.Kanji689Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji689Character");const Kanji690Character=/*YAK Extracted CSS:
.Kanji690Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji690Character");const Kanji691Character=/*YAK Extracted CSS:
.Kanji691Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji691Character");const Kanji692Character=/*YAK Extracted CSS:
.Kanji692Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji692Character");const Kanji693Character=/*YAK Extracted CSS:
.Kanji693Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji693Character");const Kanji694Character=/*YAK Extracted CSS:
.Kanji694Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji694Character");const Kanji695Character=/*YAK Extracted CSS:
.Kanji695Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji695Character");const Kanji696Character=/*YAK Extracted CSS:
.Kanji696Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji696Character");const Kanji697Character=/*YAK Extracted CSS:
.Kanji697Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji697Character");const Kanji698Character=/*YAK Extracted CSS:
.Kanji698Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji698Character");const Kanji699Character=/*YAK Extracted CSS:
.Kanji699Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji699Character");const Kanji700Character=/*YAK Extracted CSS:
.Kanji700Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji700Character");const Kanji701Character=/*YAK Extracted CSS:
.Kanji701Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji701Character");const Kanji702Character=/*YAK Extracted CSS:
.Kanji702Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji702Character");const Kanji703Character=/*YAK Extracted CSS:
.Kanji703Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji703Character");const Kanji704Character=/*YAK Extracted CSS:
.Kanji704Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji704Character");const Kanji705Character=/*YAK Extracted CSS:
.Kanji705Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji705Character");const Kanji706Character=/*YAK Extracted CSS:
.Kanji706Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji706Character");const Kanji707Character=/*YAK Extracted CSS:
.Kanji707Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji707Character");const Kanji708Character=/*YAK Extracted CSS:
.Kanji708Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji708Character");const Kanji709Character=/*YAK Extracted CSS:
.Kanji709Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji709Character");const Kanji710Character=/*YAK Extracted CSS:
.Kanji710Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji710Character");const Kanji711Character=/*YAK Extracted CSS:
.Kanji711Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji711Character");const Kanji712Character=/*YAK Extracted CSS:
.Kanji712Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji712Character");const Kanji713Character=/*YAK Extracted CSS:
.Kanji713Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji713Character");const Kanji714Character=/*YAK Extracted CSS:
.Kanji714Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji714Character");const Kanji715Character=/*YAK Extracted CSS:
.Kanji715Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji715Character");const Kanji716Character=/*YAK Extracted CSS:
.Kanji716Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji716Character");const Kanji717Character=/*YAK Extracted CSS:
.Kanji717Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji717Character");const Kanji718Character=/*YAK Extracted CSS:
.Kanji718Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji718Character");const Kanji719Character=/*YAK Extracted CSS:
.Kanji719Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji719Character");const Kanji720Character=/*YAK Extracted CSS:
.Kanji720Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji720Character");const Kanji721Character=/*YAK Extracted CSS:
.Kanji721Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji721Character");const Kanji722Character=/*YAK Extracted CSS:
.Kanji722Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji722Character");const Kanji723Character=/*YAK Extracted CSS:
.Kanji723Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji723Character");const Kanji724Character=/*YAK Extracted CSS:
.Kanji724Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji724Character");const Kanji725Character=/*YAK Extracted CSS:
.Kanji725Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji725Character");const Kanji726Character=/*YAK Extracted CSS:
.Kanji726Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji726Character");const Kanji727Character=/*YAK Extracted CSS:
.Kanji727Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji727Character");const Kanji728Character=/*YAK Extracted CSS:
.Kanji728Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji728Character");const Kanji729Character=/*YAK Extracted CSS:
.Kanji729Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji729Character");const Kanji730Character=/*YAK Extracted CSS:
.Kanji730Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji730Character");const Kanji731Character=/*YAK Extracted CSS:
.Kanji731Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji731Character");const Kanji732Character=/*YAK Extracted CSS:
.Kanji732Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji732Character");const Kanji733Character=/*YAK Extracted CSS:
.Kanji733Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji733Character");const Kanji734Character=/*YAK Extracted CSS:
.Kanji734Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji734Character");const Kanji735Character=/*YAK Extracted CSS:
.Kanji735Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji735Character");const Kanji736Character=/*YAK Extracted CSS:
.Kanji736Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji736Character");const Kanji737Character=/*YAK Extracted CSS:
.Kanji737Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji737Character");const Kanji738Character=/*YAK Extracted CSS:
.Kanji738Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji738Character");const Kanji739Character=/*YAK Extracted CSS:
.Kanji739Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji739Character");const Kanji740Character=/*YAK Extracted CSS:
.Kanji740Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji740Character");const Kanji741Character=/*YAK Extracted CSS:
.Kanji741Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji741Character");const Kanji742Character=/*YAK Extracted CSS:
.Kanji742Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji742Character");const Kanji743Character=/*YAK Extracted CSS:
.Kanji743Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji743Character");const Kanji744Character=/*YAK Extracted CSS:
.Kanji744Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji744Character");const Kanji745Character=/*YAK Extracted CSS:
.Kanji745Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji745Character");const Kanji746Character=/*YAK Extracted CSS:
.Kanji746Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji746Character");const Kanji747Character=/*YAK Extracted CSS:
.Kanji747Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji747Character");const Kanji748Character=/*YAK Extracted CSS:
.Kanji748Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji748Character");const Kanji749Character=/*YAK Extracted CSS:
.Kanji749Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji749Character");const Kanji750Character=/*YAK Extracted CSS:
.Kanji750Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji750Character");const Kanji751Character=/*YAK Extracted CSS:
.Kanji751Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji751Character");const Kanji752Character=/*YAK Extracted CSS:
.Kanji752Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji752Character");const Kanji753Character=/*YAK Extracted CSS:
.Kanji753Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji753Character");const Kanji754Character=/*YAK Extracted CSS:
.Kanji754Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji754Character");const Kanji755Character=/*YAK Extracted CSS:
.Kanji755Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji755Character");const Kanji756Character=/*YAK Extracted CSS:
.Kanji756Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji756Character");const Kanji757Character=/*YAK Extracted CSS:
.Kanji757Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji757Character");const Kanji758Character=/*YAK Extracted CSS:
.Kanji758Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji758Character");const Kanji759Character=/*YAK Extracted CSS:
.Kanji759Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji759Character");const Kanji760Character=/*YAK Extracted CSS:
.Kanji760Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji760Character");const Kanji761Character=/*YAK Extracted CSS:
.Kanji761Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji761Character");const Kanji762Character=/*YAK Extracted CSS:
.Kanji762Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji762Character");const Kanji763Character=/*YAK Extracted CSS:
.Kanji763Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji763Character");const Kanji764Character=/*YAK Extracted CSS:
.Kanji764Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji764Character");const Kanji765Character=/*YAK Extracted CSS:
.Kanji765Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji765Character");const Kanji766Character=/*YAK Extracted CSS:
.Kanji766Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji766Character");const Kanji767Character=/*YAK Extracted CSS:
.Kanji767Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji767Character");const Kanji768Character=/*YAK Extracted CSS:
.Kanji768Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji768Character");const Kanji769Character=/*YAK Extracted CSS:
.Kanji769Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji769Character");const Kanji770Character=/*YAK Extracted CSS:
.Kanji770Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji770Character");const Kanji771Character=/*YAK Extracted CSS:
.Kanji771Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji771Character");const Kanji772Character=/*YAK Extracted CSS:
.Kanji772Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji772Character");const Kanji773Character=/*YAK Extracted CSS:
.Kanji773Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji773Character");const Kanji774Character=/*YAK Extracted CSS:
.Kanji774Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji774Character");const Kanji775Character=/*YAK Extracted CSS:
.Kanji775Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji775Character");const Kanji776Character=/*YAK Extracted CSS:
.Kanji776Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji776Character");const Kanji777Character=/*YAK Extracted CSS:
.Kanji777Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji777Character");const Kanji778Character=/*YAK Extracted CSS:
.Kanji778Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji778Character");const Kanji779Character=/*YAK Extracted CSS:
.Kanji779Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji779Character");const Kanji780Character=/*YAK Extracted CSS:
.Kanji780Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji780Character");const Kanji781Character=/*YAK Extracted CSS:
.Kanji781Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji781Character");const Kanji782Character=/*YAK Extracted CSS:
.Kanji782Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji782Character");const Kanji783Character=/*YAK Extracted CSS:
.Kanji783Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji783Character");const Kanji784Character=/*YAK Extracted CSS:
.Kanji784Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji784Character");const Kanji785Character=/*YAK Extracted CSS:
.Kanji785Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji785Character");const Kanji786Character=/*YAK Extracted CSS:
.Kanji786Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji786Character");const Kanji787Character=/*YAK Extracted CSS:
.Kanji787Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji787Character");const Kanji788Character=/*YAK Extracted CSS:
.Kanji788Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji788Character");const Kanji789Character=/*YAK Extracted CSS:
.Kanji789Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji789Character");const Kanji790Character=/*YAK Extracted CSS:
.Kanji790Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji790Character");const Kanji791Character=/*YAK Extracted CSS:
.Kanji791Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji791Character");const Kanji792Character=/*YAK Extracted CSS:
.Kanji792Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji792Character");const Kanji793Character=/*YAK Extracted CSS:
.Kanji793Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji793Character");const Kanji794Character=/*YAK Extracted CSS:
.Kanji794Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji794Character");const Kanji795Character=/*YAK Extracted CSS:
.Kanji795Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji795Character");const Kanji796Character=/*YAK Extracted CSS:
.Kanji796Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji796Character");const Kanji797Character=/*YAK Extracted CSS:
.Kanji797Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji797Character");const Kanji798Character=/*YAK Extracted CSS:
.Kanji798Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji798Character");const Kanji799Character=/*YAK Extracted CSS:
.Kanji799Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji799Character");const Kanji800Character=/*YAK Extracted CSS:
.Kanji800Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji800Character");const Kanji801Character=/*YAK Extracted CSS:
.Kanji801Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji801Character");const Kanji802Character=/*YAK Extracted CSS:
.Kanji802Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji802Character");const Kanji803Character=/*YAK Extracted CSS:
.Kanji803Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji803Character");const Kanji804Character=/*YAK Extracted CSS:
.Kanji804Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji804Character");const Kanji805Character=/*YAK Extracted CSS:
.Kanji805Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji805Character");const Kanji806Character=/*YAK Extracted CSS:
.Kanji806Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji806Character");const Kanji807Character=/*YAK Extracted CSS:
.Kanji807Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji807Character");const Kanji808Character=/*YAK Extracted CSS:
.Kanji808Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji808Character");const Kanji809Character=/*YAK Extracted CSS:
.Kanji809Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji809Character");const Kanji810Character=/*YAK Extracted CSS:
.Kanji810Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji810Character");const Kanji811Character=/*YAK Extracted CSS:
.Kanji811Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji811Character");const Kanji812Character=/*YAK Extracted CSS:
.Kanji812Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji812Character");const Kanji813Character=/*YAK Extracted CSS:
.Kanji813Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji813Character");const Kanji814Character=/*YAK Extracted CSS:
.Kanji814Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji814Character");const Kanji815Character=/*YAK Extracted CSS:
.Kanji815Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji815Character");const Kanji816Character=/*YAK Extracted CSS:
.Kanji816Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji816Character");const Kanji817Character=/*YAK Extracted CSS:
.Kanji817Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji817Character");const Kanji818Character=/*YAK Extracted CSS:
.Kanji818Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji818Character");const Kanji819Character=/*YAK Extracted CSS:
.Kanji819Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji819Character");const Kanji820Character=/*YAK Extracted CSS:
.Kanji820Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji820Character");const Kanji821Character=/*YAK Extracted CSS:
.Kanji821Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji821Character");const Kanji822Character=/*YAK Extracted CSS:
.Kanji822Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji822Character");const Kanji823Character=/*YAK Extracted CSS:
.Kanji823Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji823Character");const Kanji824Character=/*YAK Extracted CSS:
.Kanji824Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji824Character");const Kanji825Character=/*YAK Extracted CSS:
.Kanji825Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji825Character");const Kanji826Character=/*YAK Extracted CSS:
.Kanji826Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji826Character");const Kanji827Character=/*YAK Extracted CSS:
.Kanji827Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji827Character");const Kanji828Character=/*YAK Extracted CSS:
.Kanji828Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji828Character");const Kanji829Character=/*YAK Extracted CSS:
.Kanji829Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji829Character");const Kanji830Character=/*YAK Extracted CSS:
.Kanji830Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji830Character");const Kanji831Character=/*YAK Extracted CSS:
.Kanji831Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji831Character");const Kanji832Character=/*YAK Extracted CSS:
.Kanji832Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji832Character");const Kanji833Character=/*YAK Extracted CSS:
.Kanji833Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji833Character");const Kanji834Character=/*YAK Extracted CSS:
.Kanji834Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji834Character");const Kanji835Character=/*YAK Extracted CSS:
.Kanji835Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji835Character");const Kanji836Character=/*YAK Extracted CSS:
.Kanji836Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji836Character");const Kanji837Character=/*YAK Extracted CSS:
.Kanji837Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji837Character");const Kanji838Character=/*YAK Extracted CSS:
.Kanji838Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji838Character");const Kanji839Character=/*YAK Extracted CSS:
.Kanji839Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji839Character");const Kanji840Character=/*YAK Extracted CSS:
.Kanji840Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji840Character");const Kanji841Character=/*YAK Extracted CSS:
.Kanji841Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji841Character");const Kanji842Character=/*YAK Extracted CSS:
.Kanji842Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji842Character");const Kanji843Character=/*YAK Extracted CSS:
.Kanji843Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji843Character");const Kanji844Character=/*YAK Extracted CSS:
.Kanji844Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji844Character");const Kanji845Character=/*YAK Extracted CSS:
.Kanji845Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji845Character");const Kanji846Character=/*YAK Extracted CSS:
.Kanji846Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji846Character");const Kanji847Character=/*YAK Extracted CSS:
.Kanji847Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji847Character");const Kanji848Character=/*YAK Extracted CSS:
.Kanji848Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji848Character");const Kanji849Character=/*YAK Extracted CSS:
.Kanji849Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji849Character");const Kanji850Character=/*YAK Extracted CSS:
.Kanji850Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji850Character");const Kanji851Character=/*YAK Extracted CSS:
.Kanji851Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji851Character");const Kanji852Character=/*YAK Extracted CSS:
.Kanji852Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji852Character");const Kanji853Character=/*YAK Extracted CSS:
.Kanji853Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji853Character");const Kanji854Character=/*YAK Extracted CSS:
.Kanji854Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji854Character");const Kanji855Character=/*YAK Extracted CSS:
.Kanji855Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji855Character");const Kanji856Character=/*YAK Extracted CSS:
.Kanji856Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji856Character");const Kanji857Character=/*YAK Extracted CSS:
.Kanji857Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji857Character");const Kanji858Character=/*YAK Extracted CSS:
.Kanji858Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji858Character");const Kanji859Character=/*YAK Extracted CSS:
.Kanji859Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji859Character");const Kanji860Character=/*YAK Extracted CSS:
.Kanji860Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji860Character");const Kanji861Character=/*YAK Extracted CSS:
.Kanji861Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji861Character");const Kanji862Character=/*YAK Extracted CSS:
.Kanji862Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji862Character");const Kanji863Character=/*YAK Extracted CSS:
.Kanji863Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji863Character");const Kanji864Character=/*YAK Extracted CSS:
.Kanji864Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji864Character");const Kanji865Character=/*YAK Extracted CSS:
.Kanji865Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji865Character");const Kanji866Character=/*YAK Extracted CSS:
.Kanji866Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji866Character");const Kanji867Character=/*YAK Extracted CSS:
.Kanji867Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji867Character");const Kanji868Character=/*YAK Extracted CSS:
.Kanji868Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji868Character");const Kanji869Character=/*YAK Extracted CSS:
.Kanji869Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji869Character");const Kanji870Character=/*YAK Extracted CSS:
.Kanji870Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji870Character");const Kanji871Character=/*YAK Extracted CSS:
.Kanji871Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji871Character");const Kanji872Character=/*YAK Extracted CSS:
.Kanji872Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji872Character");const Kanji873Character=/*YAK Extracted CSS:
.Kanji873Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji873Character");const Kanji874Character=/*YAK Extracted CSS:
.Kanji874Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji874Character");const Kanji875Character=/*YAK Extracted CSS:
.Kanji875Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji875Character");const Kanji876Character=/*YAK Extracted CSS:
.Kanji876Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji876Character");const Kanji877Character=/*YAK Extracted CSS:
.Kanji877Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji877Character");const Kanji878Character=/*YAK Extracted CSS:
.Kanji878Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji878Character");const Kanji879Character=/*YAK Extracted CSS:
.Kanji879Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji879Character");const Kanji880Character=/*YAK Extracted CSS:
.Kanji880Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji880Character");const Kanji881Character=/*YAK Extracted CSS:
.Kanji881Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji881Character");const Kanji882Character=/*YAK Extracted CSS:
.Kanji882Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji882Character");const Kanji883Character=/*YAK Extracted CSS:
.Kanji883Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji883Character");const Kanji884Character=/*YAK Extracted CSS:
.Kanji884Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji884Character");const Kanji885Character=/*YAK Extracted CSS:
.Kanji885Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji885Character");const Kanji886Character=/*YAK Extracted CSS:
.Kanji886Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji886Character");const Kanji887Character=/*YAK Extracted CSS:
.Kanji887Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji887Character");const Kanji888Character=/*YAK Extracted CSS:
.Kanji888Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji888Character");const Kanji889Character=/*YAK Extracted CSS:
.Kanji889Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji889Character");const Kanji890Character=/*YAK Extracted CSS:
.Kanji890Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji890Character");const Kanji891Character=/*YAK Extracted CSS:
.Kanji891Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji891Character");const Kanji892Character=/*YAK Extracted CSS:
.Kanji892Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji892Character");const Kanji893Character=/*YAK Extracted CSS:
.Kanji893Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji893Character");const Kanji894Character=/*YAK Extracted CSS:
.Kanji894Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji894Character");const Kanji895Character=/*YAK Extracted CSS:
.Kanji895Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji895Character");const Kanji896Character=/*YAK Extracted CSS:
.Kanji896Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji896Character");const Kanji897Character=/*YAK Extracted CSS:
.Kanji897Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji897Character");const Kanji898Character=/*YAK Extracted CSS:
.Kanji898Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji898Character");const Kanji899Character=/*YAK Extracted CSS:
.Kanji899Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji899Character");const Kanji900Character=/*YAK Extracted CSS:
.Kanji900Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji900Character");const Kanji901Character=/*YAK Extracted CSS:
.Kanji901Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji901Character");const Kanji902Character=/*YAK Extracted CSS:
.Kanji902Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji902Character");const Kanji903Character=/*YAK Extracted CSS:
.Kanji903Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji903Character");const Kanji904Character=/*YAK Extracted CSS:
.Kanji904Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji904Character");const Kanji905Character=/*YAK Extracted CSS:
.Kanji905Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji905Character");const Kanji906Character=/*YAK Extracted CSS:
.Kanji906Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji906Character");const Kanji907Character=/*YAK Extracted CSS:
.Kanji907Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji907Character");const Kanji908Character=/*YAK Extracted CSS:
.Kanji908Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji908Character");const Kanji909Character=/*YAK Extracted CSS:
.Kanji909Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji909Character");const Kanji910Character=/*YAK Extracted CSS:
.Kanji910Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji910Character");const Kanji911Character=/*YAK Extracted CSS:
.Kanji911Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji911Character");const Kanji912Character=/*YAK Extracted CSS:
.Kanji912Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji912Character");const Kanji913Character=/*YAK Extracted CSS:
.Kanji913Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji913Character");const Kanji914Character=/*YAK Extracted CSS:
.Kanji914Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji914Character");const Kanji915Character=/*YAK Extracted CSS:
.Kanji915Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji915Character");const Kanji916Character=/*YAK Extracted CSS:
.Kanji916Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji916Character");const Kanji917Character=/*YAK Extracted CSS:
.Kanji917Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji917Character");const Kanji918Character=/*YAK Extracted CSS:
.Kanji918Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji918Character");const Kanji919Character=/*YAK Extracted CSS:
.Kanji919Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji919Character");const Kanji920Character=/*YAK Extracted CSS:
.Kanji920Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji920Character");const Kanji921Character=/*YAK Extracted CSS:
.Kanji921Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji921Character");const Kanji922Character=/*YAK Extracted CSS:
.Kanji922Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji922Character");const Kanji923Character=/*YAK Extracted CSS:
.Kanji923Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji923Character");const Kanji924Character=/*YAK Extracted CSS:
.Kanji924Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji924Character");const Kanji925Character=/*YAK Extracted CSS:
.Kanji925Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji925Character");const Kanji926Character=/*YAK Extracted CSS:
.Kanji926Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji926Character");const Kanji927Character=/*YAK Extracted CSS:
.Kanji927Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji927Character");const Kanji928Character=/*YAK Extracted CSS:
.Kanji928Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji928Character");const Kanji929Character=/*YAK Extracted CSS:
.Kanji929Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji929Character");const Kanji930Character=/*YAK Extracted CSS:
.Kanji930Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji930Character");const Kanji931Character=/*YAK Extracted CSS:
.Kanji931Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji931Character");const Kanji932Character=/*YAK Extracted CSS:
.Kanji932Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji932Character");const Kanji933Character=/*YAK Extracted CSS:
.Kanji933Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji933Character");const Kanji934Character=/*YAK Extracted CSS:
.Kanji934Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji934Character");const Kanji935Character=/*YAK Extracted CSS:
.Kanji935Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji935Character");const Kanji936Character=/*YAK Extracted CSS:
.Kanji936Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji936Character");const Kanji937Character=/*YAK Extracted CSS:
.Kanji937Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji937Character");const Kanji938Character=/*YAK Extracted CSS:
.Kanji938Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji938Character");const Kanji939Character=/*YAK Extracted CSS:
.Kanji939Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji939Character");const Kanji940Character=/*YAK Extracted CSS:
.Kanji940Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji940Character");const Kanji941Character=/*YAK Extracted CSS:
.Kanji941Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji941Character");const Kanji942Character=/*YAK Extracted CSS:
.Kanji942Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji942Character");const Kanji943Character=/*YAK Extracted CSS:
.Kanji943Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji943Character");const Kanji944Character=/*YAK Extracted CSS:
.Kanji944Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji944Character");const Kanji945Character=/*YAK Extracted CSS:
.Kanji945Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji945Character");const Kanji946Character=/*YAK Extracted CSS:
.Kanji946Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji946Character");const Kanji947Character=/*YAK Extracted CSS:
.Kanji947Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji947Character");const Kanji948Character=/*YAK Extracted CSS:
.Kanji948Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji948Character");const Kanji949Character=/*YAK Extracted CSS:
.Kanji949Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji949Character");const Kanji950Character=/*YAK Extracted CSS:
.Kanji950Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji950Character");const Kanji951Character=/*YAK Extracted CSS:
.Kanji951Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji951Character");const Kanji952Character=/*YAK Extracted CSS:
.Kanji952Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji952Character");const Kanji953Character=/*YAK Extracted CSS:
.Kanji953Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji953Character");const Kanji954Character=/*YAK Extracted CSS:
.Kanji954Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji954Character");const Kanji955Character=/*YAK Extracted CSS:
.Kanji955Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji955Character");const Kanji956Character=/*YAK Extracted CSS:
.Kanji956Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji956Character");const Kanji957Character=/*YAK Extracted CSS:
.Kanji957Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji957Character");const Kanji958Character=/*YAK Extracted CSS:
.Kanji958Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji958Character");const Kanji959Character=/*YAK Extracted CSS:
.Kanji959Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji959Character");const Kanji960Character=/*YAK Extracted CSS:
.Kanji960Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji960Character");const Kanji961Character=/*YAK Extracted CSS:
.Kanji961Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji961Character");const Kanji962Character=/*YAK Extracted CSS:
.Kanji962Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji962Character");const Kanji963Character=/*YAK Extracted CSS:
.Kanji963Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji963Character");const Kanji964Character=/*YAK Extracted CSS:
.Kanji964Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji964Character");const Kanji965Character=/*YAK Extracted CSS:
.Kanji965Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji965Character");const Kanji966Character=/*YAK Extracted CSS:
.Kanji966Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji966Character");const Kanji967Character=/*YAK Extracted CSS:
.Kanji967Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji967Character");const Kanji968Character=/*YAK Extracted CSS:
.Kanji968Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji968Character");const Kanji969Character=/*YAK Extracted CSS:
.Kanji969Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji969Character");const Kanji970Character=/*YAK Extracted CSS:
.Kanji970Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji970Character");const Kanji971Character=/*YAK Extracted CSS:
.Kanji971Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji971Character");const Kanji972Character=/*YAK Extracted CSS:
.Kanji972Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji972Character");const Kanji973Character=/*YAK Extracted CSS:
.Kanji973Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji973Character");const Kanji974Character=/*YAK Extracted CSS:
.Kanji974Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji974Character");const Kanji975Character=/*YAK Extracted CSS:
.Kanji975Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji975Character");const Kanji976Character=/*YAK Extracted CSS:
.Kanji976Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji976Character");const Kanji977Character=/*YAK Extracted CSS:
.Kanji977Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji977Character");const Kanji978Character=/*YAK Extracted CSS:
.Kanji978Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji978Character");const Kanji979Character=/*YAK Extracted CSS:
.Kanji979Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji979Character");const Kanji980Character=/*YAK Extracted CSS:
.Kanji980Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji980Character");const Kanji981Character=/*YAK Extracted CSS:
.Kanji981Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji981Character");const Kanji982Character=/*YAK Extracted CSS:
.Kanji982Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji982Character");const Kanji983Character=/*YAK Extracted CSS:
.Kanji983Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji983Character");const Kanji984Character=/*YAK Extracted CSS:
.Kanji984Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji984Character");const Kanji985Character=/*YAK Extracted CSS:
.Kanji985Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji985Character");const Kanji986Character=/*YAK Extracted CSS:
.Kanji986Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji986Character");const Kanji987Character=/*YAK Extracted CSS:
.Kanji987Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji987Character");const Kanji988Character=/*YAK Extracted CSS:
.Kanji988Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji988Character");const Kanji989Character=/*YAK Extracted CSS:
.Kanji989Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji989Character");const Kanji990Character=/*YAK Extracted CSS:
.Kanji990Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji990Character");const Kanji991Character=/*YAK Extracted CSS:
.Kanji991Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji991Character");const Kanji992Character=/*YAK Extracted CSS:
.Kanji992Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji992Character");const Kanji993Character=/*YAK Extracted CSS:
.Kanji993Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji993Character");const Kanji994Character=/*YAK Extracted CSS:
.Kanji994Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji994Character");const Kanji995Character=/*YAK Extracted CSS:
.Kanji995Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji995Character");const Kanji996Character=/*YAK Extracted CSS:
.Kanji996Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji996Character");const Kanji997Character=/*YAK Extracted CSS:
.Kanji997Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji997Character");const Kanji998Character=/*YAK Extracted CSS:
.Kanji998Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji998Character");const Kanji999Character=/*YAK Extracted CSS:
.Kanji999Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji999Character");const Kanji1000Character=/*YAK Extracted CSS:
.Kanji1000Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1000Character");const Kanji1001Character=/*YAK Extracted CSS:
.Kanji1001Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1001Character");const Kanji1002Character=/*YAK Extracted CSS:
.Kanji1002Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1002Character");const Kanji1003Character=/*YAK Extracted CSS:
.Kanji1003Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1003Character");const Kanji1004Character=/*YAK Extracted CSS:
.Kanji1004Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1004Character");const Kanji1005Character=/*YAK Extracted CSS:
.Kanji1005Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1005Character");const Kanji1006Character=/*YAK Extracted CSS:
.Kanji1006Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1006Character");const Kanji1007Character=/*YAK Extracted CSS:
.Kanji1007Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1007Character");const Kanji1008Character=/*YAK Extracted CSS:
.Kanji1008Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1008Character");const Kanji1009Character=/*YAK Extracted CSS:
.Kanji1009Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1009Character");const Kanji1010Character=/*YAK Extracted CSS:
.Kanji1010Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1010Character");const Kanji1011Character=/*YAK Extracted CSS:
.Kanji1011Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1011Character");const Kanji1012Character=/*YAK Extracted CSS:
.Kanji1012Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1012Character");const Kanji1013Character=/*YAK Extracted CSS:
.Kanji1013Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1013Character");const Kanji1014Character=/*YAK Extracted CSS:
.Kanji1014Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1014Character");const Kanji1015Character=/*YAK Extracted CSS:
.Kanji1015Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1015Character");const Kanji1016Character=/*YAK Extracted CSS:
.Kanji1016Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1016Character");const Kanji1017Character=/*YAK Extracted CSS:
.Kanji1017Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1017Character");const Kanji1018Character=/*YAK Extracted CSS:
.Kanji1018Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1018Character");const Kanji1019Character=/*YAK Extracted CSS:
.Kanji1019Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1019Character");const Kanji1020Character=/*YAK Extracted CSS:
.Kanji1020Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1020Character");const Kanji1021Character=/*YAK Extracted CSS:
.Kanji1021Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1021Character");const Kanji1022Character=/*YAK Extracted CSS:
.Kanji1022Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1022Character");const Kanji1023Character=/*YAK Extracted CSS:
.Kanji1023Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1023Character");const Kanji1024Character=/*YAK Extracted CSS:
.Kanji1024Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1024Character");const Kanji1025Character=/*YAK Extracted CSS:
.Kanji1025Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1025Character");const Kanji1026Character=/*YAK Extracted CSS:
.Kanji1026Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1026Character");const Kanji1027Character=/*YAK Extracted CSS:
.Kanji1027Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1027Character");const Kanji1028Character=/*YAK Extracted CSS:
.Kanji1028Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1028Character");const Kanji1029Character=/*YAK Extracted CSS:
.Kanji1029Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1029Character");const Kanji1030Character=/*YAK Extracted CSS:
.Kanji1030Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1030Character");const Kanji1031Character=/*YAK Extracted CSS:
.Kanji1031Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1031Character");const Kanji1032Character=/*YAK Extracted CSS:
.Kanji1032Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1032Character");const Kanji1033Character=/*YAK Extracted CSS:
.Kanji1033Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1033Character");const Kanji1034Character=/*YAK Extracted CSS:
.Kanji1034Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1034Character");const Kanji1035Character=/*YAK Extracted CSS:
.Kanji1035Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1035Character");const Kanji1036Character=/*YAK Extracted CSS:
.Kanji1036Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1036Character");const Kanji1037Character=/*YAK Extracted CSS:
.Kanji1037Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1037Character");const Kanji1038Character=/*YAK Extracted CSS:
.Kanji1038Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1038Character");const Kanji1039Character=/*YAK Extracted CSS:
.Kanji1039Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1039Character");const Kanji1040Character=/*YAK Extracted CSS:
.Kanji1040Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1040Character");const Kanji1041Character=/*YAK Extracted CSS:
.Kanji1041Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1041Character");const Kanji1042Character=/*YAK Extracted CSS:
.Kanji1042Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1042Character");const Kanji1043Character=/*YAK Extracted CSS:
.Kanji1043Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1043Character");const Kanji1044Character=/*YAK Extracted CSS:
.Kanji1044Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1044Character");const Kanji1045Character=/*YAK Extracted CSS:
.Kanji1045Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1045Character");const Kanji1046Character=/*YAK Extracted CSS:
.Kanji1046Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1046Character");const Kanji1047Character=/*YAK Extracted CSS:
.Kanji1047Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1047Character");const Kanji1048Character=/*YAK Extracted CSS:
.Kanji1048Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1048Character");const Kanji1049Character=/*YAK Extracted CSS:
.Kanji1049Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1049Character");const Kanji1050Character=/*YAK Extracted CSS:
.Kanji1050Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1050Character");const Kanji1051Character=/*YAK Extracted CSS:
.Kanji1051Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1051Character");const Kanji1052Character=/*YAK Extracted CSS:
.Kanji1052Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1052Character");const Kanji1053Character=/*YAK Extracted CSS:
.Kanji1053Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1053Character");const Kanji1054Character=/*YAK Extracted CSS:
.Kanji1054Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1054Character");const Kanji1055Character=/*YAK Extracted CSS:
.Kanji1055Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1055Character");const Kanji1056Character=/*YAK Extracted CSS:
.Kanji1056Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1056Character");const Kanji1057Character=/*YAK Extracted CSS:
.Kanji1057Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1057Character");const Kanji1058Character=/*YAK Extracted CSS:
.Kanji1058Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1058Character");const Kanji1059Character=/*YAK Extracted CSS:
.Kanji1059Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1059Character");const Kanji1060Character=/*YAK Extracted CSS:
.Kanji1060Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1060Character");const Kanji1061Character=/*YAK Extracted CSS:
.Kanji1061Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1061Character");const Kanji1062Character=/*YAK Extracted CSS:
.Kanji1062Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1062Character");const Kanji1063Character=/*YAK Extracted CSS:
.Kanji1063Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1063Character");const Kanji1064Character=/*YAK Extracted CSS:
.Kanji1064Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1064Character");const Kanji1065Character=/*YAK Extracted CSS:
.Kanji1065Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1065Character");const Kanji1066Character=/*YAK Extracted CSS:
.Kanji1066Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1066Character");const Kanji1067Character=/*YAK Extracted CSS:
.Kanji1067Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1067Character");const Kanji1068Character=/*YAK Extracted CSS:
.Kanji1068Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1068Character");const Kanji1069Character=/*YAK Extracted CSS:
.Kanji1069Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1069Character");const Kanji1070Character=/*YAK Extracted CSS:
.Kanji1070Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1070Character");const Kanji1071Character=/*YAK Extracted CSS:
.Kanji1071Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1071Character");const Kanji1072Character=/*YAK Extracted CSS:
.Kanji1072Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1072Character");const Kanji1073Character=/*YAK Extracted CSS:
.Kanji1073Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1073Character");const Kanji1074Character=/*YAK Extracted CSS:
.Kanji1074Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1074Character");const Kanji1075Character=/*YAK Extracted CSS:
.Kanji1075Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1075Character");const Kanji1076Character=/*YAK Extracted CSS:
.Kanji1076Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1076Character");const Kanji1077Character=/*YAK Extracted CSS:
.Kanji1077Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1077Character");const Kanji1078Character=/*YAK Extracted CSS:
.Kanji1078Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1078Character");const Kanji1079Character=/*YAK Extracted CSS:
.Kanji1079Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1079Character");const Kanji1080Character=/*YAK Extracted CSS:
.Kanji1080Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1080Character");const Kanji1081Character=/*YAK Extracted CSS:
.Kanji1081Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1081Character");const Kanji1082Character=/*YAK Extracted CSS:
.Kanji1082Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1082Character");const Kanji1083Character=/*YAK Extracted CSS:
.Kanji1083Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1083Character");const Kanji1084Character=/*YAK Extracted CSS:
.Kanji1084Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1084Character");const Kanji1085Character=/*YAK Extracted CSS:
.Kanji1085Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1085Character");const Kanji1086Character=/*YAK Extracted CSS:
.Kanji1086Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1086Character");const Kanji1087Character=/*YAK Extracted CSS:
.Kanji1087Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1087Character");const Kanji1088Character=/*YAK Extracted CSS:
.Kanji1088Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1088Character");const Kanji1089Character=/*YAK Extracted CSS:
.Kanji1089Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1089Character");const Kanji1090Character=/*YAK Extracted CSS:
.Kanji1090Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1090Character");const Kanji1091Character=/*YAK Extracted CSS:
.Kanji1091Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1091Character");const Kanji1092Character=/*YAK Extracted CSS:
.Kanji1092Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1092Character");const Kanji1093Character=/*YAK Extracted CSS:
.Kanji1093Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1093Character");const Kanji1094Character=/*YAK Extracted CSS:
.Kanji1094Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1094Character");const Kanji1095Character=/*YAK Extracted CSS:
.Kanji1095Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1095Character");const Kanji1096Character=/*YAK Extracted CSS:
.Kanji1096Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1096Character");const Kanji1097Character=/*YAK Extracted CSS:
.Kanji1097Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1097Character");const Kanji1098Character=/*YAK Extracted CSS:
.Kanji1098Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1098Character");const Kanji1099Character=/*YAK Extracted CSS:
.Kanji1099Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1099Character");const Kanji1100Character=/*YAK Extracted CSS:
.Kanji1100Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1100Character");const Kanji1101Character=/*YAK Extracted CSS:
.Kanji1101Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1101Character");const Kanji1102Character=/*YAK Extracted CSS:
.Kanji1102Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1102Character");const Kanji1103Character=/*YAK Extracted CSS:
.Kanji1103Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1103Character");const Kanji1104Character=/*YAK Extracted CSS:
.Kanji1104Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1104Character");const Kanji1105Character=/*YAK Extracted CSS:
.Kanji1105Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1105Character");const Kanji1106Character=/*YAK Extracted CSS:
.Kanji1106Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1106Character");const Kanji1107Character=/*YAK Extracted CSS:
.Kanji1107Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1107Character");const Kanji1108Character=/*YAK Extracted CSS:
.Kanji1108Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1108Character");const Kanji1109Character=/*YAK Extracted CSS:
.Kanji1109Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1109Character");const Kanji1110Character=/*YAK Extracted CSS:
.Kanji1110Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1110Character");const Kanji1111Character=/*YAK Extracted CSS:
.Kanji1111Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1111Character");const Kanji1112Character=/*YAK Extracted CSS:
.Kanji1112Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1112Character");const Kanji1113Character=/*YAK Extracted CSS:
.Kanji1113Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1113Character");const Kanji1114Character=/*YAK Extracted CSS:
.Kanji1114Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1114Character");const Kanji1115Character=/*YAK Extracted CSS:
.Kanji1115Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1115Character");const Kanji1116Character=/*YAK Extracted CSS:
.Kanji1116Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1116Character");const Kanji1117Character=/*YAK Extracted CSS:
.Kanji1117Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1117Character");const Kanji1118Character=/*YAK Extracted CSS:
.Kanji1118Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1118Character");const Kanji1119Character=/*YAK Extracted CSS:
.Kanji1119Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1119Character");const Kanji1120Character=/*YAK Extracted CSS:
.Kanji1120Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1120Character");const Kanji1121Character=/*YAK Extracted CSS:
.Kanji1121Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1121Character");const Kanji1122Character=/*YAK Extracted CSS:
.Kanji1122Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1122Character");const Kanji1123Character=/*YAK Extracted CSS:
.Kanji1123Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1123Character");const Kanji1124Character=/*YAK Extracted CSS:
.Kanji1124Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1124Character");const Kanji1125Character=/*YAK Extracted CSS:
.Kanji1125Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1125Character");const Kanji1126Character=/*YAK Extracted CSS:
.Kanji1126Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1126Character");const Kanji1127Character=/*YAK Extracted CSS:
.Kanji1127Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1127Character");const Kanji1128Character=/*YAK Extracted CSS:
.Kanji1128Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1128Character");const Kanji1129Character=/*YAK Extracted CSS:
.Kanji1129Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1129Character");const Kanji1130Character=/*YAK Extracted CSS:
.Kanji1130Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1130Character");const Kanji1131Character=/*YAK Extracted CSS:
.Kanji1131Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1131Character");const Kanji1132Character=/*YAK Extracted CSS:
.Kanji1132Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1132Character");const Kanji1133Character=/*YAK Extracted CSS:
.Kanji1133Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1133Character");const Kanji1134Character=/*YAK Extracted CSS:
.Kanji1134Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1134Character");const Kanji1135Character=/*YAK Extracted CSS:
.Kanji1135Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1135Character");const Kanji1136Character=/*YAK Extracted CSS:
.Kanji1136Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1136Character");const Kanji1137Character=/*YAK Extracted CSS:
.Kanji1137Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1137Character");const Kanji1138Character=/*YAK Extracted CSS:
.Kanji1138Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1138Character");const Kanji1139Character=/*YAK Extracted CSS:
.Kanji1139Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1139Character");const Kanji1140Character=/*YAK Extracted CSS:
.Kanji1140Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1140Character");const Kanji1141Character=/*YAK Extracted CSS:
.Kanji1141Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1141Character");const Kanji1142Character=/*YAK Extracted CSS:
.Kanji1142Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1142Character");const Kanji1143Character=/*YAK Extracted CSS:
.Kanji1143Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1143Character");const Kanji1144Character=/*YAK Extracted CSS:
.Kanji1144Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1144Character");const Kanji1145Character=/*YAK Extracted CSS:
.Kanji1145Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1145Character");const Kanji1146Character=/*YAK Extracted CSS:
.Kanji1146Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1146Character");const Kanji1147Character=/*YAK Extracted CSS:
.Kanji1147Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1147Character");const Kanji1148Character=/*YAK Extracted CSS:
.Kanji1148Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1148Character");const Kanji1149Character=/*YAK Extracted CSS:
.Kanji1149Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1149Character");const Kanji1150Character=/*YAK Extracted CSS:
.Kanji1150Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1150Character");const Kanji1151Character=/*YAK Extracted CSS:
.Kanji1151Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1151Character");const Kanji1152Character=/*YAK Extracted CSS:
.Kanji1152Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1152Character");const Kanji1153Character=/*YAK Extracted CSS:
.Kanji1153Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1153Character");const Kanji1154Character=/*YAK Extracted CSS:
.Kanji1154Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1154Character");const Kanji1155Character=/*YAK Extracted CSS:
.Kanji1155Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1155Character");const Kanji1156Character=/*YAK Extracted CSS:
.Kanji1156Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1156Character");const Kanji1157Character=/*YAK Extracted CSS:
.Kanji1157Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1157Character");const Kanji1158Character=/*YAK Extracted CSS:
.Kanji1158Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1158Character");const Kanji1159Character=/*YAK Extracted CSS:
.Kanji1159Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1159Character");const Kanji1160Character=/*YAK Extracted CSS:
.Kanji1160Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1160Character");const Kanji1161Character=/*YAK Extracted CSS:
.Kanji1161Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1161Character");const Kanji1162Character=/*YAK Extracted CSS:
.Kanji1162Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1162Character");const Kanji1163Character=/*YAK Extracted CSS:
.Kanji1163Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1163Character");const Kanji1164Character=/*YAK Extracted CSS:
.Kanji1164Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1164Character");const Kanji1165Character=/*YAK Extracted CSS:
.Kanji1165Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1165Character");const Kanji1166Character=/*YAK Extracted CSS:
.Kanji1166Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1166Character");const Kanji1167Character=/*YAK Extracted CSS:
.Kanji1167Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1167Character");const Kanji1168Character=/*YAK Extracted CSS:
.Kanji1168Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1168Character");const Kanji1169Character=/*YAK Extracted CSS:
.Kanji1169Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1169Character");const Kanji1170Character=/*YAK Extracted CSS:
.Kanji1170Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1170Character");const Kanji1171Character=/*YAK Extracted CSS:
.Kanji1171Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1171Character");const Kanji1172Character=/*YAK Extracted CSS:
.Kanji1172Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1172Character");const Kanji1173Character=/*YAK Extracted CSS:
.Kanji1173Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1173Character");const Kanji1174Character=/*YAK Extracted CSS:
.Kanji1174Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1174Character");const Kanji1175Character=/*YAK Extracted CSS:
.Kanji1175Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1175Character");const Kanji1176Character=/*YAK Extracted CSS:
.Kanji1176Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1176Character");const Kanji1177Character=/*YAK Extracted CSS:
.Kanji1177Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1177Character");const Kanji1178Character=/*YAK Extracted CSS:
.Kanji1178Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1178Character");const Kanji1179Character=/*YAK Extracted CSS:
.Kanji1179Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1179Character");const Kanji1180Character=/*YAK Extracted CSS:
.Kanji1180Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1180Character");const Kanji1181Character=/*YAK Extracted CSS:
.Kanji1181Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1181Character");const Kanji1182Character=/*YAK Extracted CSS:
.Kanji1182Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1182Character");const Kanji1183Character=/*YAK Extracted CSS:
.Kanji1183Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1183Character");const Kanji1184Character=/*YAK Extracted CSS:
.Kanji1184Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1184Character");const Kanji1185Character=/*YAK Extracted CSS:
.Kanji1185Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1185Character");const Kanji1186Character=/*YAK Extracted CSS:
.Kanji1186Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1186Character");const Kanji1187Character=/*YAK Extracted CSS:
.Kanji1187Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1187Character");const Kanji1188Character=/*YAK Extracted CSS:
.Kanji1188Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1188Character");const Kanji1189Character=/*YAK Extracted CSS:
.Kanji1189Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1189Character");const Kanji1190Character=/*YAK Extracted CSS:
.Kanji1190Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1190Character");const Kanji1191Character=/*YAK Extracted CSS:
.Kanji1191Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1191Character");const Kanji1192Character=/*YAK Extracted CSS:
.Kanji1192Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1192Character");const Kanji1193Character=/*YAK Extracted CSS:
.Kanji1193Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1193Character");const Kanji1194Character=/*YAK Extracted CSS:
.Kanji1194Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1194Character");const Kanji1195Character=/*YAK Extracted CSS:
.Kanji1195Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1195Character");const Kanji1196Character=/*YAK Extracted CSS:
.Kanji1196Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1196Character");const Kanji1197Character=/*YAK Extracted CSS:
.Kanji1197Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1197Character");const Kanji1198Character=/*YAK Extracted CSS:
.Kanji1198Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1198Character");const Kanji1199Character=/*YAK Extracted CSS:
.Kanji1199Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1199Character");const Kanji1200Character=/*YAK Extracted CSS:
.Kanji1200Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1200Character");const Kanji1201Character=/*YAK Extracted CSS:
.Kanji1201Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1201Character");const Kanji1202Character=/*YAK Extracted CSS:
.Kanji1202Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1202Character");const Kanji1203Character=/*YAK Extracted CSS:
.Kanji1203Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1203Character");const Kanji1204Character=/*YAK Extracted CSS:
.Kanji1204Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1204Character");const Kanji1205Character=/*YAK Extracted CSS:
.Kanji1205Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1205Character");const Kanji1206Character=/*YAK Extracted CSS:
.Kanji1206Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1206Character");const Kanji1207Character=/*YAK Extracted CSS:
.Kanji1207Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1207Character");const Kanji1208Character=/*YAK Extracted CSS:
.Kanji1208Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1208Character");const Kanji1209Character=/*YAK Extracted CSS:
.Kanji1209Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1209Character");const Kanji1210Character=/*YAK Extracted CSS:
.Kanji1210Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1210Character");const Kanji1211Character=/*YAK Extracted CSS:
.Kanji1211Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1211Character");const Kanji1212Character=/*YAK Extracted CSS:
.Kanji1212Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1212Character");const Kanji1213Character=/*YAK Extracted CSS:
.Kanji1213Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1213Character");const Kanji1214Character=/*YAK Extracted CSS:
.Kanji1214Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1214Character");const Kanji1215Character=/*YAK Extracted CSS:
.Kanji1215Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1215Character");const Kanji1216Character=/*YAK Extracted CSS:
.Kanji1216Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1216Character");const Kanji1217Character=/*YAK Extracted CSS:
.Kanji1217Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1217Character");const Kanji1218Character=/*YAK Extracted CSS:
.Kanji1218Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1218Character");const Kanji1219Character=/*YAK Extracted CSS:
.Kanji1219Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1219Character");const Kanji1220Character=/*YAK Extracted CSS:
.Kanji1220Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1220Character");const Kanji1221Character=/*YAK Extracted CSS:
.Kanji1221Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1221Character");const Kanji1222Character=/*YAK Extracted CSS:
.Kanji1222Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1222Character");const Kanji1223Character=/*YAK Extracted CSS:
.Kanji1223Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1223Character");const Kanji1224Character=/*YAK Extracted CSS:
.Kanji1224Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1224Character");const Kanji1225Character=/*YAK Extracted CSS:
.Kanji1225Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1225Character");const Kanji1226Character=/*YAK Extracted CSS:
.Kanji1226Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1226Character");const Kanji1227Character=/*YAK Extracted CSS:
.Kanji1227Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1227Character");const Kanji1228Character=/*YAK Extracted CSS:
.Kanji1228Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1228Character");const Kanji1229Character=/*YAK Extracted CSS:
.Kanji1229Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1229Character");const Kanji1230Character=/*YAK Extracted CSS:
.Kanji1230Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1230Character");const Kanji1231Character=/*YAK Extracted CSS:
.Kanji1231Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1231Character");const Kanji1232Character=/*YAK Extracted CSS:
.Kanji1232Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1232Character");const Kanji1233Character=/*YAK Extracted CSS:
.Kanji1233Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1233Character");const Kanji1234Character=/*YAK Extracted CSS:
.Kanji1234Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1234Character");const Kanji1235Character=/*YAK Extracted CSS:
.Kanji1235Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1235Character");const Kanji1236Character=/*YAK Extracted CSS:
.Kanji1236Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1236Character");const Kanji1237Character=/*YAK Extracted CSS:
.Kanji1237Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1237Character");const Kanji1238Character=/*YAK Extracted CSS:
.Kanji1238Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1238Character");const Kanji1239Character=/*YAK Extracted CSS:
.Kanji1239Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1239Character");const Kanji1240Character=/*YAK Extracted CSS:
.Kanji1240Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1240Character");const Kanji1241Character=/*YAK Extracted CSS:
.Kanji1241Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1241Character");const Kanji1242Character=/*YAK Extracted CSS:
.Kanji1242Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1242Character");const Kanji1243Character=/*YAK Extracted CSS:
.Kanji1243Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1243Character");const Kanji1244Character=/*YAK Extracted CSS:
.Kanji1244Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1244Character");const Kanji1245Character=/*YAK Extracted CSS:
.Kanji1245Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1245Character");const Kanji1246Character=/*YAK Extracted CSS:
.Kanji1246Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1246Character");const Kanji1247Character=/*YAK Extracted CSS:
.Kanji1247Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1247Character");const Kanji1248Character=/*YAK Extracted CSS:
.Kanji1248Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1248Character");const Kanji1249Character=/*YAK Extracted CSS:
.Kanji1249Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1249Character");const Kanji1250Character=/*YAK Extracted CSS:
.Kanji1250Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1250Character");const Kanji1251Character=/*YAK Extracted CSS:
.Kanji1251Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1251Character");const Kanji1252Character=/*YAK Extracted CSS:
.Kanji1252Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1252Character");const Kanji1253Character=/*YAK Extracted CSS:
.Kanji1253Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1253Character");const Kanji1254Character=/*YAK Extracted CSS:
.Kanji1254Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1254Character");const Kanji1255Character=/*YAK Extracted CSS:
.Kanji1255Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1255Character");const Kanji1256Character=/*YAK Extracted CSS:
.Kanji1256Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1256Character");const Kanji1257Character=/*YAK Extracted CSS:
.Kanji1257Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1257Character");const Kanji1258Character=/*YAK Extracted CSS:
.Kanji1258Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1258Character");const Kanji1259Character=/*YAK Extracted CSS:
.Kanji1259Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1259Character");const Kanji1260Character=/*YAK Extracted CSS:
.Kanji1260Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1260Character");const Kanji1261Character=/*YAK Extracted CSS:
.Kanji1261Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1261Character");const Kanji1262Character=/*YAK Extracted CSS:
.Kanji1262Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1262Character");const Kanji1263Character=/*YAK Extracted CSS:
.Kanji1263Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1263Character");const Kanji1264Character=/*YAK Extracted CSS:
.Kanji1264Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1264Character");const Kanji1265Character=/*YAK Extracted CSS:
.Kanji1265Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1265Character");const Kanji1266Character=/*YAK Extracted CSS:
.Kanji1266Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1266Character");const Kanji1267Character=/*YAK Extracted CSS:
.Kanji1267Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1267Character");const Kanji1268Character=/*YAK Extracted CSS:
.Kanji1268Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1268Character");const Kanji1269Character=/*YAK Extracted CSS:
.Kanji1269Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1269Character");const Kanji1270Character=/*YAK Extracted CSS:
.Kanji1270Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1270Character");const Kanji1271Character=/*YAK Extracted CSS:
.Kanji1271Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1271Character");const Kanji1272Character=/*YAK Extracted CSS:
.Kanji1272Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1272Character");const Kanji1273Character=/*YAK Extracted CSS:
.Kanji1273Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1273Character");const Kanji1274Character=/*YAK Extracted CSS:
.Kanji1274Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1274Character");const Kanji1275Character=/*YAK Extracted CSS:
.Kanji1275Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1275Character");const Kanji1276Character=/*YAK Extracted CSS:
.Kanji1276Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1276Character");const Kanji1277Character=/*YAK Extracted CSS:
.Kanji1277Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1277Character");const Kanji1278Character=/*YAK Extracted CSS:
.Kanji1278Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1278Character");const Kanji1279Character=/*YAK Extracted CSS:
.Kanji1279Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1279Character");const Kanji1280Character=/*YAK Extracted CSS:
.Kanji1280Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1280Character");const Kanji1281Character=/*YAK Extracted CSS:
.Kanji1281Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1281Character");const Kanji1282Character=/*YAK Extracted CSS:
.Kanji1282Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1282Character");const Kanji1283Character=/*YAK Extracted CSS:
.Kanji1283Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1283Character");const Kanji1284Character=/*YAK Extracted CSS:
.Kanji1284Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1284Character");const Kanji1285Character=/*YAK Extracted CSS:
.Kanji1285Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1285Character");const Kanji1286Character=/*YAK Extracted CSS:
.Kanji1286Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1286Character");const Kanji1287Character=/*YAK Extracted CSS:
.Kanji1287Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1287Character");const Kanji1288Character=/*YAK Extracted CSS:
.Kanji1288Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1288Character");const Kanji1289Character=/*YAK Extracted CSS:
.Kanji1289Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1289Character");const Kanji1290Character=/*YAK Extracted CSS:
.Kanji1290Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1290Character");const Kanji1291Character=/*YAK Extracted CSS:
.Kanji1291Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1291Character");const Kanji1292Character=/*YAK Extracted CSS:
.Kanji1292Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1292Character");const Kanji1293Character=/*YAK Extracted CSS:
.Kanji1293Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1293Character");const Kanji1294Character=/*YAK Extracted CSS:
.Kanji1294Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1294Character");const Kanji1295Character=/*YAK Extracted CSS:
.Kanji1295Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1295Character");const Kanji1296Character=/*YAK Extracted CSS:
.Kanji1296Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1296Character");const Kanji1297Character=/*YAK Extracted CSS:
.Kanji1297Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1297Character");const Kanji1298Character=/*YAK Extracted CSS:
.Kanji1298Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1298Character");const Kanji1299Character=/*YAK Extracted CSS:
.Kanji1299Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1299Character");const Kanji1300Character=/*YAK Extracted CSS:
.Kanji1300Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1300Character");const Kanji1301Character=/*YAK Extracted CSS:
.Kanji1301Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1301Character");const Kanji1302Character=/*YAK Extracted CSS:
.Kanji1302Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1302Character");const Kanji1303Character=/*YAK Extracted CSS:
.Kanji1303Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1303Character");const Kanji1304Character=/*YAK Extracted CSS:
.Kanji1304Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1304Character");const Kanji1305Character=/*YAK Extracted CSS:
.Kanji1305Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1305Character");const Kanji1306Character=/*YAK Extracted CSS:
.Kanji1306Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1306Character");const Kanji1307Character=/*YAK Extracted CSS:
.Kanji1307Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1307Character");const Kanji1308Character=/*YAK Extracted CSS:
.Kanji1308Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1308Character");const Kanji1309Character=/*YAK Extracted CSS:
.Kanji1309Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1309Character");const Kanji1310Character=/*YAK Extracted CSS:
.Kanji1310Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1310Character");const Kanji1311Character=/*YAK Extracted CSS:
.Kanji1311Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1311Character");const Kanji1312Character=/*YAK Extracted CSS:
.Kanji1312Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1312Character");const Kanji1313Character=/*YAK Extracted CSS:
.Kanji1313Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1313Character");const Kanji1314Character=/*YAK Extracted CSS:
.Kanji1314Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1314Character");const Kanji1315Character=/*YAK Extracted CSS:
.Kanji1315Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1315Character");const Kanji1316Character=/*YAK Extracted CSS:
.Kanji1316Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1316Character");const Kanji1317Character=/*YAK Extracted CSS:
.Kanji1317Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1317Character");const Kanji1318Character=/*YAK Extracted CSS:
.Kanji1318Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1318Character");const Kanji1319Character=/*YAK Extracted CSS:
.Kanji1319Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1319Character");const Kanji1320Character=/*YAK Extracted CSS:
.Kanji1320Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1320Character");const Kanji1321Character=/*YAK Extracted CSS:
.Kanji1321Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1321Character");const Kanji1322Character=/*YAK Extracted CSS:
.Kanji1322Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1322Character");const Kanji1323Character=/*YAK Extracted CSS:
.Kanji1323Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1323Character");const Kanji1324Character=/*YAK Extracted CSS:
.Kanji1324Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1324Character");const Kanji1325Character=/*YAK Extracted CSS:
.Kanji1325Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1325Character");const Kanji1326Character=/*YAK Extracted CSS:
.Kanji1326Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1326Character");const Kanji1327Character=/*YAK Extracted CSS:
.Kanji1327Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1327Character");const Kanji1328Character=/*YAK Extracted CSS:
.Kanji1328Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1328Character");const Kanji1329Character=/*YAK Extracted CSS:
.Kanji1329Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1329Character");const Kanji1330Character=/*YAK Extracted CSS:
.Kanji1330Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1330Character");const Kanji1331Character=/*YAK Extracted CSS:
.Kanji1331Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1331Character");const Kanji1332Character=/*YAK Extracted CSS:
.Kanji1332Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1332Character");const Kanji1333Character=/*YAK Extracted CSS:
.Kanji1333Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1333Character");const Kanji1334Character=/*YAK Extracted CSS:
.Kanji1334Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1334Character");const Kanji1335Character=/*YAK Extracted CSS:
.Kanji1335Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1335Character");const Kanji1336Character=/*YAK Extracted CSS:
.Kanji1336Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1336Character");const Kanji1337Character=/*YAK Extracted CSS:
.Kanji1337Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1337Character");const Kanji1338Character=/*YAK Extracted CSS:
.Kanji1338Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1338Character");const Kanji1339Character=/*YAK Extracted CSS:
.Kanji1339Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1339Character");const Kanji1340Character=/*YAK Extracted CSS:
.Kanji1340Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1340Character");const Kanji1341Character=/*YAK Extracted CSS:
.Kanji1341Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1341Character");const Kanji1342Character=/*YAK Extracted CSS:
.Kanji1342Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1342Character");const Kanji1343Character=/*YAK Extracted CSS:
.Kanji1343Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1343Character");const Kanji1344Character=/*YAK Extracted CSS:
.Kanji1344Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1344Character");const Kanji1345Character=/*YAK Extracted CSS:
.Kanji1345Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1345Character");const Kanji1346Character=/*YAK Extracted CSS:
.Kanji1346Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1346Character");const Kanji1347Character=/*YAK Extracted CSS:
.Kanji1347Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1347Character");const Kanji1348Character=/*YAK Extracted CSS:
.Kanji1348Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1348Character");const Kanji1349Character=/*YAK Extracted CSS:
.Kanji1349Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1349Character");const Kanji1350Character=/*YAK Extracted CSS:
.Kanji1350Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1350Character");const Kanji1351Character=/*YAK Extracted CSS:
.Kanji1351Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1351Character");const Kanji1352Character=/*YAK Extracted CSS:
.Kanji1352Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1352Character");const Kanji1353Character=/*YAK Extracted CSS:
.Kanji1353Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1353Character");const Kanji1354Character=/*YAK Extracted CSS:
.Kanji1354Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1354Character");const Kanji1355Character=/*YAK Extracted CSS:
.Kanji1355Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1355Character");const Kanji1356Character=/*YAK Extracted CSS:
.Kanji1356Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1356Character");const Kanji1357Character=/*YAK Extracted CSS:
.Kanji1357Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1357Character");const Kanji1358Character=/*YAK Extracted CSS:
.Kanji1358Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1358Character");const Kanji1359Character=/*YAK Extracted CSS:
.Kanji1359Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1359Character");const Kanji1360Character=/*YAK Extracted CSS:
.Kanji1360Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1360Character");const Kanji1361Character=/*YAK Extracted CSS:
.Kanji1361Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1361Character");const Kanji1362Character=/*YAK Extracted CSS:
.Kanji1362Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1362Character");const Kanji1363Character=/*YAK Extracted CSS:
.Kanji1363Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1363Character");const Kanji1364Character=/*YAK Extracted CSS:
.Kanji1364Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1364Character");const Kanji1365Character=/*YAK Extracted CSS:
.Kanji1365Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1365Character");const Kanji1366Character=/*YAK Extracted CSS:
.Kanji1366Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1366Character");const Kanji1367Character=/*YAK Extracted CSS:
.Kanji1367Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1367Character");const Kanji1368Character=/*YAK Extracted CSS:
.Kanji1368Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1368Character");const Kanji1369Character=/*YAK Extracted CSS:
.Kanji1369Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1369Character");const Kanji1370Character=/*YAK Extracted CSS:
.Kanji1370Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1370Character");const Kanji1371Character=/*YAK Extracted CSS:
.Kanji1371Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1371Character");const Kanji1372Character=/*YAK Extracted CSS:
.Kanji1372Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1372Character");const Kanji1373Character=/*YAK Extracted CSS:
.Kanji1373Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1373Character");const Kanji1374Character=/*YAK Extracted CSS:
.Kanji1374Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1374Character");const Kanji1375Character=/*YAK Extracted CSS:
.Kanji1375Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1375Character");const Kanji1376Character=/*YAK Extracted CSS:
.Kanji1376Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1376Character");const Kanji1377Character=/*YAK Extracted CSS:
.Kanji1377Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1377Character");const Kanji1378Character=/*YAK Extracted CSS:
.Kanji1378Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1378Character");const Kanji1379Character=/*YAK Extracted CSS:
.Kanji1379Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1379Character");const Kanji1380Character=/*YAK Extracted CSS:
.Kanji1380Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1380Character");const Kanji1381Character=/*YAK Extracted CSS:
.Kanji1381Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1381Character");const Kanji1382Character=/*YAK Extracted CSS:
.Kanji1382Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1382Character");const Kanji1383Character=/*YAK Extracted CSS:
.Kanji1383Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1383Character");const Kanji1384Character=/*YAK Extracted CSS:
.Kanji1384Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1384Character");const Kanji1385Character=/*YAK Extracted CSS:
.Kanji1385Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1385Character");const Kanji1386Character=/*YAK Extracted CSS:
.Kanji1386Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1386Character");const Kanji1387Character=/*YAK Extracted CSS:
.Kanji1387Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1387Character");const Kanji1388Character=/*YAK Extracted CSS:
.Kanji1388Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1388Character");const Kanji1389Character=/*YAK Extracted CSS:
.Kanji1389Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1389Character");const Kanji1390Character=/*YAK Extracted CSS:
.Kanji1390Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1390Character");const Kanji1391Character=/*YAK Extracted CSS:
.Kanji1391Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1391Character");const Kanji1392Character=/*YAK Extracted CSS:
.Kanji1392Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1392Character");const Kanji1393Character=/*YAK Extracted CSS:
.Kanji1393Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1393Character");const Kanji1394Character=/*YAK Extracted CSS:
.Kanji1394Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1394Character");const Kanji1395Character=/*YAK Extracted CSS:
.Kanji1395Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1395Character");const Kanji1396Character=/*YAK Extracted CSS:
.Kanji1396Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1396Character");const Kanji1397Character=/*YAK Extracted CSS:
.Kanji1397Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1397Character");const Kanji1398Character=/*YAK Extracted CSS:
.Kanji1398Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1398Character");const Kanji1399Character=/*YAK Extracted CSS:
.Kanji1399Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1399Character");const Kanji1400Character=/*YAK Extracted CSS:
.Kanji1400Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1400Character");const Kanji1401Character=/*YAK Extracted CSS:
.Kanji1401Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1401Character");const Kanji1402Character=/*YAK Extracted CSS:
.Kanji1402Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1402Character");const Kanji1403Character=/*YAK Extracted CSS:
.Kanji1403Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1403Character");const Kanji1404Character=/*YAK Extracted CSS:
.Kanji1404Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1404Character");const Kanji1405Character=/*YAK Extracted CSS:
.Kanji1405Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1405Character");const Kanji1406Character=/*YAK Extracted CSS:
.Kanji1406Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1406Character");const Kanji1407Character=/*YAK Extracted CSS:
.Kanji1407Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1407Character");const Kanji1408Character=/*YAK Extracted CSS:
.Kanji1408Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1408Character");const Kanji1409Character=/*YAK Extracted CSS:
.Kanji1409Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1409Character");const Kanji1410Character=/*YAK Extracted CSS:
.Kanji1410Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1410Character");const Kanji1411Character=/*YAK Extracted CSS:
.Kanji1411Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1411Character");const Kanji1412Character=/*YAK Extracted CSS:
.Kanji1412Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1412Character");const Kanji1413Character=/*YAK Extracted CSS:
.Kanji1413Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1413Character");const Kanji1414Character=/*YAK Extracted CSS:
.Kanji1414Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1414Character");const Kanji1415Character=/*YAK Extracted CSS:
.Kanji1415Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1415Character");const Kanji1416Character=/*YAK Extracted CSS:
.Kanji1416Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1416Character");const Kanji1417Character=/*YAK Extracted CSS:
.Kanji1417Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1417Character");const Kanji1418Character=/*YAK Extracted CSS:
.Kanji1418Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1418Character");const Kanji1419Character=/*YAK Extracted CSS:
.Kanji1419Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1419Character");const Kanji1420Character=/*YAK Extracted CSS:
.Kanji1420Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1420Character");const Kanji1421Character=/*YAK Extracted CSS:
.Kanji1421Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1421Character");const Kanji1422Character=/*YAK Extracted CSS:
.Kanji1422Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1422Character");const Kanji1423Character=/*YAK Extracted CSS:
.Kanji1423Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1423Character");const Kanji1424Character=/*YAK Extracted CSS:
.Kanji1424Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1424Character");const Kanji1425Character=/*YAK Extracted CSS:
.Kanji1425Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1425Character");const Kanji1426Character=/*YAK Extracted CSS:
.Kanji1426Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1426Character");const Kanji1427Character=/*YAK Extracted CSS:
.Kanji1427Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1427Character");const Kanji1428Character=/*YAK Extracted CSS:
.Kanji1428Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1428Character");const Kanji1429Character=/*YAK Extracted CSS:
.Kanji1429Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1429Character");const Kanji1430Character=/*YAK Extracted CSS:
.Kanji1430Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1430Character");const Kanji1431Character=/*YAK Extracted CSS:
.Kanji1431Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1431Character");const Kanji1432Character=/*YAK Extracted CSS:
.Kanji1432Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1432Character");const Kanji1433Character=/*YAK Extracted CSS:
.Kanji1433Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1433Character");const Kanji1434Character=/*YAK Extracted CSS:
.Kanji1434Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1434Character");const Kanji1435Character=/*YAK Extracted CSS:
.Kanji1435Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1435Character");const Kanji1436Character=/*YAK Extracted CSS:
.Kanji1436Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1436Character");const Kanji1437Character=/*YAK Extracted CSS:
.Kanji1437Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1437Character");const Kanji1438Character=/*YAK Extracted CSS:
.Kanji1438Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1438Character");const Kanji1439Character=/*YAK Extracted CSS:
.Kanji1439Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1439Character");const Kanji1440Character=/*YAK Extracted CSS:
.Kanji1440Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1440Character");const Kanji1441Character=/*YAK Extracted CSS:
.Kanji1441Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1441Character");const Kanji1442Character=/*YAK Extracted CSS:
.Kanji1442Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1442Character");const Kanji1443Character=/*YAK Extracted CSS:
.Kanji1443Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1443Character");const Kanji1444Character=/*YAK Extracted CSS:
.Kanji1444Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1444Character");const Kanji1445Character=/*YAK Extracted CSS:
.Kanji1445Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1445Character");const Kanji1446Character=/*YAK Extracted CSS:
.Kanji1446Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1446Character");const Kanji1447Character=/*YAK Extracted CSS:
.Kanji1447Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1447Character");const Kanji1448Character=/*YAK Extracted CSS:
.Kanji1448Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1448Character");const Kanji1449Character=/*YAK Extracted CSS:
.Kanji1449Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1449Character");const Kanji1450Character=/*YAK Extracted CSS:
.Kanji1450Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1450Character");const Kanji1451Character=/*YAK Extracted CSS:
.Kanji1451Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1451Character");const Kanji1452Character=/*YAK Extracted CSS:
.Kanji1452Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1452Character");const Kanji1453Character=/*YAK Extracted CSS:
.Kanji1453Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1453Character");const Kanji1454Character=/*YAK Extracted CSS:
.Kanji1454Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1454Character");const Kanji1455Character=/*YAK Extracted CSS:
.Kanji1455Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1455Character");const Kanji1456Character=/*YAK Extracted CSS:
.Kanji1456Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1456Character");const Kanji1457Character=/*YAK Extracted CSS:
.Kanji1457Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1457Character");const Kanji1458Character=/*YAK Extracted CSS:
.Kanji1458Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1458Character");const Kanji1459Character=/*YAK Extracted CSS:
.Kanji1459Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1459Character");const Kanji1460Character=/*YAK Extracted CSS:
.Kanji1460Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1460Character");const Kanji1461Character=/*YAK Extracted CSS:
.Kanji1461Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1461Character");const Kanji1462Character=/*YAK Extracted CSS:
.Kanji1462Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1462Character");const Kanji1463Character=/*YAK Extracted CSS:
.Kanji1463Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1463Character");const Kanji1464Character=/*YAK Extracted CSS:
.Kanji1464Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1464Character");const Kanji1465Character=/*YAK Extracted CSS:
.Kanji1465Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1465Character");const Kanji1466Character=/*YAK Extracted CSS:
.Kanji1466Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1466Character");const Kanji1467Character=/*YAK Extracted CSS:
.Kanji1467Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1467Character");const Kanji1468Character=/*YAK Extracted CSS:
.Kanji1468Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1468Character");const Kanji1469Character=/*YAK Extracted CSS:
.Kanji1469Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1469Character");const Kanji1470Character=/*YAK Extracted CSS:
.Kanji1470Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1470Character");const Kanji1471Character=/*YAK Extracted CSS:
.Kanji1471Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1471Character");const Kanji1472Character=/*YAK Extracted CSS:
.Kanji1472Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1472Character");const Kanji1473Character=/*YAK Extracted CSS:
.Kanji1473Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1473Character");const Kanji1474Character=/*YAK Extracted CSS:
.Kanji1474Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1474Character");const Kanji1475Character=/*YAK Extracted CSS:
.Kanji1475Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1475Character");const Kanji1476Character=/*YAK Extracted CSS:
.Kanji1476Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1476Character");const Kanji1477Character=/*YAK Extracted CSS:
.Kanji1477Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1477Character");const Kanji1478Character=/*YAK Extracted CSS:
.Kanji1478Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1478Character");const Kanji1479Character=/*YAK Extracted CSS:
.Kanji1479Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1479Character");const Kanji1480Character=/*YAK Extracted CSS:
.Kanji1480Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1480Character");const Kanji1481Character=/*YAK Extracted CSS:
.Kanji1481Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1481Character");const Kanji1482Character=/*YAK Extracted CSS:
.Kanji1482Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1482Character");const Kanji1483Character=/*YAK Extracted CSS:
.Kanji1483Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1483Character");const Kanji1484Character=/*YAK Extracted CSS:
.Kanji1484Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1484Character");const Kanji1485Character=/*YAK Extracted CSS:
.Kanji1485Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1485Character");const Kanji1486Character=/*YAK Extracted CSS:
.Kanji1486Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1486Character");const Kanji1487Character=/*YAK Extracted CSS:
.Kanji1487Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1487Character");const Kanji1488Character=/*YAK Extracted CSS:
.Kanji1488Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1488Character");const Kanji1489Character=/*YAK Extracted CSS:
.Kanji1489Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1489Character");const Kanji1490Character=/*YAK Extracted CSS:
.Kanji1490Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1490Character");const Kanji1491Character=/*YAK Extracted CSS:
.Kanji1491Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1491Character");const Kanji1492Character=/*YAK Extracted CSS:
.Kanji1492Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1492Character");const Kanji1493Character=/*YAK Extracted CSS:
.Kanji1493Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1493Character");const Kanji1494Character=/*YAK Extracted CSS:
.Kanji1494Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1494Character");const Kanji1495Character=/*YAK Extracted CSS:
.Kanji1495Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1495Character");const Kanji1496Character=/*YAK Extracted CSS:
.Kanji1496Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1496Character");const Kanji1497Character=/*YAK Extracted CSS:
.Kanji1497Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1497Character");const Kanji1498Character=/*YAK Extracted CSS:
.Kanji1498Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1498Character");const Kanji1499Character=/*YAK Extracted CSS:
.Kanji1499Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1499Character");const Kanji1500Character=/*YAK Extracted CSS:
.Kanji1500Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1500Character");const Kanji1501Character=/*YAK Extracted CSS:
.Kanji1501Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1501Character");const Kanji1502Character=/*YAK Extracted CSS:
.Kanji1502Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1502Character");const Kanji1503Character=/*YAK Extracted CSS:
.Kanji1503Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1503Character");const Kanji1504Character=/*YAK Extracted CSS:
.Kanji1504Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1504Character");const Kanji1505Character=/*YAK Extracted CSS:
.Kanji1505Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1505Character");const Kanji1506Character=/*YAK Extracted CSS:
.Kanji1506Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1506Character");const Kanji1507Character=/*YAK Extracted CSS:
.Kanji1507Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1507Character");const Kanji1508Character=/*YAK Extracted CSS:
.Kanji1508Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1508Character");const Kanji1509Character=/*YAK Extracted CSS:
.Kanji1509Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1509Character");const Kanji1510Character=/*YAK Extracted CSS:
.Kanji1510Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1510Character");const Kanji1511Character=/*YAK Extracted CSS:
.Kanji1511Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1511Character");const Kanji1512Character=/*YAK Extracted CSS:
.Kanji1512Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1512Character");const Kanji1513Character=/*YAK Extracted CSS:
.Kanji1513Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1513Character");const Kanji1514Character=/*YAK Extracted CSS:
.Kanji1514Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1514Character");const Kanji1515Character=/*YAK Extracted CSS:
.Kanji1515Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1515Character");const Kanji1516Character=/*YAK Extracted CSS:
.Kanji1516Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1516Character");const Kanji1517Character=/*YAK Extracted CSS:
.Kanji1517Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1517Character");const Kanji1518Character=/*YAK Extracted CSS:
.Kanji1518Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1518Character");const Kanji1519Character=/*YAK Extracted CSS:
.Kanji1519Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1519Character");const Kanji1520Character=/*YAK Extracted CSS:
.Kanji1520Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1520Character");const Kanji1521Character=/*YAK Extracted CSS:
.Kanji1521Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1521Character");const Kanji1522Character=/*YAK Extracted CSS:
.Kanji1522Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1522Character");const Kanji1523Character=/*YAK Extracted CSS:
.Kanji1523Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1523Character");const Kanji1524Character=/*YAK Extracted CSS:
.Kanji1524Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1524Character");const Kanji1525Character=/*YAK Extracted CSS:
.Kanji1525Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1525Character");const Kanji1526Character=/*YAK Extracted CSS:
.Kanji1526Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1526Character");const Kanji1527Character=/*YAK Extracted CSS:
.Kanji1527Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1527Character");const Kanji1528Character=/*YAK Extracted CSS:
.Kanji1528Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1528Character");const Kanji1529Character=/*YAK Extracted CSS:
.Kanji1529Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1529Character");const Kanji1530Character=/*YAK Extracted CSS:
.Kanji1530Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1530Character");const Kanji1531Character=/*YAK Extracted CSS:
.Kanji1531Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1531Character");const Kanji1532Character=/*YAK Extracted CSS:
.Kanji1532Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1532Character");const Kanji1533Character=/*YAK Extracted CSS:
.Kanji1533Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1533Character");const Kanji1534Character=/*YAK Extracted CSS:
.Kanji1534Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1534Character");const Kanji1535Character=/*YAK Extracted CSS:
.Kanji1535Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1535Character");const Kanji1536Character=/*YAK Extracted CSS:
.Kanji1536Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1536Character");const Kanji1537Character=/*YAK Extracted CSS:
.Kanji1537Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1537Character");const Kanji1538Character=/*YAK Extracted CSS:
.Kanji1538Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1538Character");const Kanji1539Character=/*YAK Extracted CSS:
.Kanji1539Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1539Character");const Kanji1540Character=/*YAK Extracted CSS:
.Kanji1540Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1540Character");const Kanji1541Character=/*YAK Extracted CSS:
.Kanji1541Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1541Character");const Kanji1542Character=/*YAK Extracted CSS:
.Kanji1542Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1542Character");const Kanji1543Character=/*YAK Extracted CSS:
.Kanji1543Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1543Character");const Kanji1544Character=/*YAK Extracted CSS:
.Kanji1544Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1544Character");const Kanji1545Character=/*YAK Extracted CSS:
.Kanji1545Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1545Character");const Kanji1546Character=/*YAK Extracted CSS:
.Kanji1546Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1546Character");const Kanji1547Character=/*YAK Extracted CSS:
.Kanji1547Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1547Character");const Kanji1548Character=/*YAK Extracted CSS:
.Kanji1548Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1548Character");const Kanji1549Character=/*YAK Extracted CSS:
.Kanji1549Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1549Character");const Kanji1550Character=/*YAK Extracted CSS:
.Kanji1550Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1550Character");const Kanji1551Character=/*YAK Extracted CSS:
.Kanji1551Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1551Character");const Kanji1552Character=/*YAK Extracted CSS:
.Kanji1552Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1552Character");const Kanji1553Character=/*YAK Extracted CSS:
.Kanji1553Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1553Character");const Kanji1554Character=/*YAK Extracted CSS:
.Kanji1554Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1554Character");const Kanji1555Character=/*YAK Extracted CSS:
.Kanji1555Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1555Character");const Kanji1556Character=/*YAK Extracted CSS:
.Kanji1556Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1556Character");const Kanji1557Character=/*YAK Extracted CSS:
.Kanji1557Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1557Character");const Kanji1558Character=/*YAK Extracted CSS:
.Kanji1558Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1558Character");const Kanji1559Character=/*YAK Extracted CSS:
.Kanji1559Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1559Character");const Kanji1560Character=/*YAK Extracted CSS:
.Kanji1560Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1560Character");const Kanji1561Character=/*YAK Extracted CSS:
.Kanji1561Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1561Character");const Kanji1562Character=/*YAK Extracted CSS:
.Kanji1562Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1562Character");const Kanji1563Character=/*YAK Extracted CSS:
.Kanji1563Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1563Character");const Kanji1564Character=/*YAK Extracted CSS:
.Kanji1564Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1564Character");const Kanji1565Character=/*YAK Extracted CSS:
.Kanji1565Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1565Character");const Kanji1566Character=/*YAK Extracted CSS:
.Kanji1566Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1566Character");const Kanji1567Character=/*YAK Extracted CSS:
.Kanji1567Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1567Character");const Kanji1568Character=/*YAK Extracted CSS:
.Kanji1568Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1568Character");const Kanji1569Character=/*YAK Extracted CSS:
.Kanji1569Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1569Character");const Kanji1570Character=/*YAK Extracted CSS:
.Kanji1570Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1570Character");const Kanji1571Character=/*YAK Extracted CSS:
.Kanji1571Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1571Character");const Kanji1572Character=/*YAK Extracted CSS:
.Kanji1572Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1572Character");const Kanji1573Character=/*YAK Extracted CSS:
.Kanji1573Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1573Character");const Kanji1574Character=/*YAK Extracted CSS:
.Kanji1574Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1574Character");const Kanji1575Character=/*YAK Extracted CSS:
.Kanji1575Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1575Character");const Kanji1576Character=/*YAK Extracted CSS:
.Kanji1576Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1576Character");const Kanji1577Character=/*YAK Extracted CSS:
.Kanji1577Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1577Character");const Kanji1578Character=/*YAK Extracted CSS:
.Kanji1578Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1578Character");const Kanji1579Character=/*YAK Extracted CSS:
.Kanji1579Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1579Character");const Kanji1580Character=/*YAK Extracted CSS:
.Kanji1580Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1580Character");const Kanji1581Character=/*YAK Extracted CSS:
.Kanji1581Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1581Character");const Kanji1582Character=/*YAK Extracted CSS:
.Kanji1582Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1582Character");const Kanji1583Character=/*YAK Extracted CSS:
.Kanji1583Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1583Character");const Kanji1584Character=/*YAK Extracted CSS:
.Kanji1584Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1584Character");const Kanji1585Character=/*YAK Extracted CSS:
.Kanji1585Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1585Character");const Kanji1586Character=/*YAK Extracted CSS:
.Kanji1586Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1586Character");const Kanji1587Character=/*YAK Extracted CSS:
.Kanji1587Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1587Character");const Kanji1588Character=/*YAK Extracted CSS:
.Kanji1588Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1588Character");const Kanji1589Character=/*YAK Extracted CSS:
.Kanji1589Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1589Character");const Kanji1590Character=/*YAK Extracted CSS:
.Kanji1590Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1590Character");const Kanji1591Character=/*YAK Extracted CSS:
.Kanji1591Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1591Character");const Kanji1592Character=/*YAK Extracted CSS:
.Kanji1592Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1592Character");const Kanji1593Character=/*YAK Extracted CSS:
.Kanji1593Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1593Character");const Kanji1594Character=/*YAK Extracted CSS:
.Kanji1594Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1594Character");const Kanji1595Character=/*YAK Extracted CSS:
.Kanji1595Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1595Character");const Kanji1596Character=/*YAK Extracted CSS:
.Kanji1596Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1596Character");const Kanji1597Character=/*YAK Extracted CSS:
.Kanji1597Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1597Character");const Kanji1598Character=/*YAK Extracted CSS:
.Kanji1598Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1598Character");const Kanji1599Character=/*YAK Extracted CSS:
.Kanji1599Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1599Character");const Kanji1600Character=/*YAK Extracted CSS:
.Kanji1600Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1600Character");const Kanji1601Character=/*YAK Extracted CSS:
.Kanji1601Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1601Character");const Kanji1602Character=/*YAK Extracted CSS:
.Kanji1602Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1602Character");const Kanji1603Character=/*YAK Extracted CSS:
.Kanji1603Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1603Character");const Kanji1604Character=/*YAK Extracted CSS:
.Kanji1604Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1604Character");const Kanji1605Character=/*YAK Extracted CSS:
.Kanji1605Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1605Character");const Kanji1606Character=/*YAK Extracted CSS:
.Kanji1606Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1606Character");const Kanji1607Character=/*YAK Extracted CSS:
.Kanji1607Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1607Character");const Kanji1608Character=/*YAK Extracted CSS:
.Kanji1608Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1608Character");const Kanji1609Character=/*YAK Extracted CSS:
.Kanji1609Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1609Character");const Kanji1610Character=/*YAK Extracted CSS:
.Kanji1610Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1610Character");const Kanji1611Character=/*YAK Extracted CSS:
.Kanji1611Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1611Character");const Kanji1612Character=/*YAK Extracted CSS:
.Kanji1612Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1612Character");const Kanji1613Character=/*YAK Extracted CSS:
.Kanji1613Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1613Character");const Kanji1614Character=/*YAK Extracted CSS:
.Kanji1614Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1614Character");const Kanji1615Character=/*YAK Extracted CSS:
.Kanji1615Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1615Character");const Kanji1616Character=/*YAK Extracted CSS:
.Kanji1616Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1616Character");const Kanji1617Character=/*YAK Extracted CSS:
.Kanji1617Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1617Character");const Kanji1618Character=/*YAK Extracted CSS:
.Kanji1618Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1618Character");const Kanji1619Character=/*YAK Extracted CSS:
.Kanji1619Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1619Character");const Kanji1620Character=/*YAK Extracted CSS:
.Kanji1620Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1620Character");const Kanji1621Character=/*YAK Extracted CSS:
.Kanji1621Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1621Character");const Kanji1622Character=/*YAK Extracted CSS:
.Kanji1622Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1622Character");const Kanji1623Character=/*YAK Extracted CSS:
.Kanji1623Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1623Character");const Kanji1624Character=/*YAK Extracted CSS:
.Kanji1624Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1624Character");const Kanji1625Character=/*YAK Extracted CSS:
.Kanji1625Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1625Character");const Kanji1626Character=/*YAK Extracted CSS:
.Kanji1626Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1626Character");const Kanji1627Character=/*YAK Extracted CSS:
.Kanji1627Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1627Character");const Kanji1628Character=/*YAK Extracted CSS:
.Kanji1628Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1628Character");const Kanji1629Character=/*YAK Extracted CSS:
.Kanji1629Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1629Character");const Kanji1630Character=/*YAK Extracted CSS:
.Kanji1630Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1630Character");const Kanji1631Character=/*YAK Extracted CSS:
.Kanji1631Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1631Character");const Kanji1632Character=/*YAK Extracted CSS:
.Kanji1632Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1632Character");const Kanji1633Character=/*YAK Extracted CSS:
.Kanji1633Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1633Character");const Kanji1634Character=/*YAK Extracted CSS:
.Kanji1634Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1634Character");const Kanji1635Character=/*YAK Extracted CSS:
.Kanji1635Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1635Character");const Kanji1636Character=/*YAK Extracted CSS:
.Kanji1636Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1636Character");const Kanji1637Character=/*YAK Extracted CSS:
.Kanji1637Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1637Character");const Kanji1638Character=/*YAK Extracted CSS:
.Kanji1638Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1638Character");const Kanji1639Character=/*YAK Extracted CSS:
.Kanji1639Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1639Character");const Kanji1640Character=/*YAK Extracted CSS:
.Kanji1640Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1640Character");const Kanji1641Character=/*YAK Extracted CSS:
.Kanji1641Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1641Character");const Kanji1642Character=/*YAK Extracted CSS:
.Kanji1642Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1642Character");const Kanji1643Character=/*YAK Extracted CSS:
.Kanji1643Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1643Character");const Kanji1644Character=/*YAK Extracted CSS:
.Kanji1644Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1644Character");const Kanji1645Character=/*YAK Extracted CSS:
.Kanji1645Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1645Character");const Kanji1646Character=/*YAK Extracted CSS:
.Kanji1646Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1646Character");const Kanji1647Character=/*YAK Extracted CSS:
.Kanji1647Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1647Character");const Kanji1648Character=/*YAK Extracted CSS:
.Kanji1648Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1648Character");const Kanji1649Character=/*YAK Extracted CSS:
.Kanji1649Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1649Character");const Kanji1650Character=/*YAK Extracted CSS:
.Kanji1650Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1650Character");const Kanji1651Character=/*YAK Extracted CSS:
.Kanji1651Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1651Character");const Kanji1652Character=/*YAK Extracted CSS:
.Kanji1652Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1652Character");const Kanji1653Character=/*YAK Extracted CSS:
.Kanji1653Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1653Character");const Kanji1654Character=/*YAK Extracted CSS:
.Kanji1654Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1654Character");const Kanji1655Character=/*YAK Extracted CSS:
.Kanji1655Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1655Character");const Kanji1656Character=/*YAK Extracted CSS:
.Kanji1656Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1656Character");const Kanji1657Character=/*YAK Extracted CSS:
.Kanji1657Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1657Character");const Kanji1658Character=/*YAK Extracted CSS:
.Kanji1658Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1658Character");const Kanji1659Character=/*YAK Extracted CSS:
.Kanji1659Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1659Character");const Kanji1660Character=/*YAK Extracted CSS:
.Kanji1660Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1660Character");const Kanji1661Character=/*YAK Extracted CSS:
.Kanji1661Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1661Character");const Kanji1662Character=/*YAK Extracted CSS:
.Kanji1662Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1662Character");const Kanji1663Character=/*YAK Extracted CSS:
.Kanji1663Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1663Character");const Kanji1664Character=/*YAK Extracted CSS:
.Kanji1664Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1664Character");const Kanji1665Character=/*YAK Extracted CSS:
.Kanji1665Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1665Character");const Kanji1666Character=/*YAK Extracted CSS:
.Kanji1666Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1666Character");const Kanji1667Character=/*YAK Extracted CSS:
.Kanji1667Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1667Character");const Kanji1668Character=/*YAK Extracted CSS:
.Kanji1668Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1668Character");const Kanji1669Character=/*YAK Extracted CSS:
.Kanji1669Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1669Character");const Kanji1670Character=/*YAK Extracted CSS:
.Kanji1670Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1670Character");const Kanji1671Character=/*YAK Extracted CSS:
.Kanji1671Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1671Character");const Kanji1672Character=/*YAK Extracted CSS:
.Kanji1672Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1672Character");const Kanji1673Character=/*YAK Extracted CSS:
.Kanji1673Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1673Character");const Kanji1674Character=/*YAK Extracted CSS:
.Kanji1674Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1674Character");const Kanji1675Character=/*YAK Extracted CSS:
.Kanji1675Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1675Character");const Kanji1676Character=/*YAK Extracted CSS:
.Kanji1676Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1676Character");const Kanji1677Character=/*YAK Extracted CSS:
.Kanji1677Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1677Character");const Kanji1678Character=/*YAK Extracted CSS:
.Kanji1678Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1678Character");const Kanji1679Character=/*YAK Extracted CSS:
.Kanji1679Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1679Character");const Kanji1680Character=/*YAK Extracted CSS:
.Kanji1680Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1680Character");const Kanji1681Character=/*YAK Extracted CSS:
.Kanji1681Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1681Character");const Kanji1682Character=/*YAK Extracted CSS:
.Kanji1682Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1682Character");const Kanji1683Character=/*YAK Extracted CSS:
.Kanji1683Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1683Character");const Kanji1684Character=/*YAK Extracted CSS:
.Kanji1684Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1684Character");const Kanji1685Character=/*YAK Extracted CSS:
.Kanji1685Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1685Character");const Kanji1686Character=/*YAK Extracted CSS:
.Kanji1686Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1686Character");const Kanji1687Character=/*YAK Extracted CSS:
.Kanji1687Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1687Character");const Kanji1688Character=/*YAK Extracted CSS:
.Kanji1688Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1688Character");const Kanji1689Character=/*YAK Extracted CSS:
.Kanji1689Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1689Character");const Kanji1690Character=/*YAK Extracted CSS:
.Kanji1690Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1690Character");const Kanji1691Character=/*YAK Extracted CSS:
.Kanji1691Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1691Character");const Kanji1692Character=/*YAK Extracted CSS:
.Kanji1692Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1692Character");const Kanji1693Character=/*YAK Extracted CSS:
.Kanji1693Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1693Character");const Kanji1694Character=/*YAK Extracted CSS:
.Kanji1694Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1694Character");const Kanji1695Character=/*YAK Extracted CSS:
.Kanji1695Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1695Character");const Kanji1696Character=/*YAK Extracted CSS:
.Kanji1696Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1696Character");const Kanji1697Character=/*YAK Extracted CSS:
.Kanji1697Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1697Character");const Kanji1698Character=/*YAK Extracted CSS:
.Kanji1698Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1698Character");const Kanji1699Character=/*YAK Extracted CSS:
.Kanji1699Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1699Character");const Kanji1700Character=/*YAK Extracted CSS:
.Kanji1700Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1700Character");const Kanji1701Character=/*YAK Extracted CSS:
.Kanji1701Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1701Character");const Kanji1702Character=/*YAK Extracted CSS:
.Kanji1702Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1702Character");const Kanji1703Character=/*YAK Extracted CSS:
.Kanji1703Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1703Character");const Kanji1704Character=/*YAK Extracted CSS:
.Kanji1704Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1704Character");const Kanji1705Character=/*YAK Extracted CSS:
.Kanji1705Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1705Character");const Kanji1706Character=/*YAK Extracted CSS:
.Kanji1706Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1706Character");const Kanji1707Character=/*YAK Extracted CSS:
.Kanji1707Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1707Character");const Kanji1708Character=/*YAK Extracted CSS:
.Kanji1708Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1708Character");const Kanji1709Character=/*YAK Extracted CSS:
.Kanji1709Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1709Character");const Kanji1710Character=/*YAK Extracted CSS:
.Kanji1710Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1710Character");const Kanji1711Character=/*YAK Extracted CSS:
.Kanji1711Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1711Character");const Kanji1712Character=/*YAK Extracted CSS:
.Kanji1712Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1712Character");const Kanji1713Character=/*YAK Extracted CSS:
.Kanji1713Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1713Character");const Kanji1714Character=/*YAK Extracted CSS:
.Kanji1714Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1714Character");const Kanji1715Character=/*YAK Extracted CSS:
.Kanji1715Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1715Character");const Kanji1716Character=/*YAK Extracted CSS:
.Kanji1716Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1716Character");const Kanji1717Character=/*YAK Extracted CSS:
.Kanji1717Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1717Character");const Kanji1718Character=/*YAK Extracted CSS:
.Kanji1718Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1718Character");const Kanji1719Character=/*YAK Extracted CSS:
.Kanji1719Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1719Character");const Kanji1720Character=/*YAK Extracted CSS:
.Kanji1720Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1720Character");const Kanji1721Character=/*YAK Extracted CSS:
.Kanji1721Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1721Character");const Kanji1722Character=/*YAK Extracted CSS:
.Kanji1722Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1722Character");const Kanji1723Character=/*YAK Extracted CSS:
.Kanji1723Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1723Character");const Kanji1724Character=/*YAK Extracted CSS:
.Kanji1724Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1724Character");const Kanji1725Character=/*YAK Extracted CSS:
.Kanji1725Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1725Character");const Kanji1726Character=/*YAK Extracted CSS:
.Kanji1726Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1726Character");const Kanji1727Character=/*YAK Extracted CSS:
.Kanji1727Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1727Character");const Kanji1728Character=/*YAK Extracted CSS:
.Kanji1728Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1728Character");const Kanji1729Character=/*YAK Extracted CSS:
.Kanji1729Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1729Character");const Kanji1730Character=/*YAK Extracted CSS:
.Kanji1730Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1730Character");const Kanji1731Character=/*YAK Extracted CSS:
.Kanji1731Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1731Character");const Kanji1732Character=/*YAK Extracted CSS:
.Kanji1732Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1732Character");const Kanji1733Character=/*YAK Extracted CSS:
.Kanji1733Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1733Character");const Kanji1734Character=/*YAK Extracted CSS:
.Kanji1734Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1734Character");const Kanji1735Character=/*YAK Extracted CSS:
.Kanji1735Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1735Character");const Kanji1736Character=/*YAK Extracted CSS:
.Kanji1736Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1736Character");const Kanji1737Character=/*YAK Extracted CSS:
.Kanji1737Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1737Character");const Kanji1738Character=/*YAK Extracted CSS:
.Kanji1738Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1738Character");const Kanji1739Character=/*YAK Extracted CSS:
.Kanji1739Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1739Character");const Kanji1740Character=/*YAK Extracted CSS:
.Kanji1740Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1740Character");const Kanji1741Character=/*YAK Extracted CSS:
.Kanji1741Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1741Character");const Kanji1742Character=/*YAK Extracted CSS:
.Kanji1742Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1742Character");const Kanji1743Character=/*YAK Extracted CSS:
.Kanji1743Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1743Character");const Kanji1744Character=/*YAK Extracted CSS:
.Kanji1744Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1744Character");const Kanji1745Character=/*YAK Extracted CSS:
.Kanji1745Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1745Character");const Kanji1746Character=/*YAK Extracted CSS:
.Kanji1746Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1746Character");const Kanji1747Character=/*YAK Extracted CSS:
.Kanji1747Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1747Character");const Kanji1748Character=/*YAK Extracted CSS:
.Kanji1748Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1748Character");const Kanji1749Character=/*YAK Extracted CSS:
.Kanji1749Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1749Character");const Kanji1750Character=/*YAK Extracted CSS:
.Kanji1750Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1750Character");const Kanji1751Character=/*YAK Extracted CSS:
.Kanji1751Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1751Character");const Kanji1752Character=/*YAK Extracted CSS:
.Kanji1752Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1752Character");const Kanji1753Character=/*YAK Extracted CSS:
.Kanji1753Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1753Character");const Kanji1754Character=/*YAK Extracted CSS:
.Kanji1754Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1754Character");const Kanji1755Character=/*YAK Extracted CSS:
.Kanji1755Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1755Character");const Kanji1756Character=/*YAK Extracted CSS:
.Kanji1756Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1756Character");const Kanji1757Character=/*YAK Extracted CSS:
.Kanji1757Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1757Character");const Kanji1758Character=/*YAK Extracted CSS:
.Kanji1758Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1758Character");const Kanji1759Character=/*YAK Extracted CSS:
.Kanji1759Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1759Character");const Kanji1760Character=/*YAK Extracted CSS:
.Kanji1760Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1760Character");const Kanji1761Character=/*YAK Extracted CSS:
.Kanji1761Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1761Character");const Kanji1762Character=/*YAK Extracted CSS:
.Kanji1762Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1762Character");const Kanji1763Character=/*YAK Extracted CSS:
.Kanji1763Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1763Character");const Kanji1764Character=/*YAK Extracted CSS:
.Kanji1764Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1764Character");const Kanji1765Character=/*YAK Extracted CSS:
.Kanji1765Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1765Character");const Kanji1766Character=/*YAK Extracted CSS:
.Kanji1766Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1766Character");const Kanji1767Character=/*YAK Extracted CSS:
.Kanji1767Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1767Character");const Kanji1768Character=/*YAK Extracted CSS:
.Kanji1768Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1768Character");const Kanji1769Character=/*YAK Extracted CSS:
.Kanji1769Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1769Character");const Kanji1770Character=/*YAK Extracted CSS:
.Kanji1770Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1770Character");const Kanji1771Character=/*YAK Extracted CSS:
.Kanji1771Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1771Character");const Kanji1772Character=/*YAK Extracted CSS:
.Kanji1772Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1772Character");const Kanji1773Character=/*YAK Extracted CSS:
.Kanji1773Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1773Character");const Kanji1774Character=/*YAK Extracted CSS:
.Kanji1774Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1774Character");const Kanji1775Character=/*YAK Extracted CSS:
.Kanji1775Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1775Character");const Kanji1776Character=/*YAK Extracted CSS:
.Kanji1776Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1776Character");const Kanji1777Character=/*YAK Extracted CSS:
.Kanji1777Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1777Character");const Kanji1778Character=/*YAK Extracted CSS:
.Kanji1778Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1778Character");const Kanji1779Character=/*YAK Extracted CSS:
.Kanji1779Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1779Character");const Kanji1780Character=/*YAK Extracted CSS:
.Kanji1780Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1780Character");const Kanji1781Character=/*YAK Extracted CSS:
.Kanji1781Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1781Character");const Kanji1782Character=/*YAK Extracted CSS:
.Kanji1782Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1782Character");const Kanji1783Character=/*YAK Extracted CSS:
.Kanji1783Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1783Character");const Kanji1784Character=/*YAK Extracted CSS:
.Kanji1784Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1784Character");const Kanji1785Character=/*YAK Extracted CSS:
.Kanji1785Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1785Character");const Kanji1786Character=/*YAK Extracted CSS:
.Kanji1786Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1786Character");const Kanji1787Character=/*YAK Extracted CSS:
.Kanji1787Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1787Character");const Kanji1788Character=/*YAK Extracted CSS:
.Kanji1788Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1788Character");const Kanji1789Character=/*YAK Extracted CSS:
.Kanji1789Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1789Character");const Kanji1790Character=/*YAK Extracted CSS:
.Kanji1790Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1790Character");const Kanji1791Character=/*YAK Extracted CSS:
.Kanji1791Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1791Character");const Kanji1792Character=/*YAK Extracted CSS:
.Kanji1792Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1792Character");const Kanji1793Character=/*YAK Extracted CSS:
.Kanji1793Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1793Character");const Kanji1794Character=/*YAK Extracted CSS:
.Kanji1794Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1794Character");const Kanji1795Character=/*YAK Extracted CSS:
.Kanji1795Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1795Character");const Kanji1796Character=/*YAK Extracted CSS:
.Kanji1796Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1796Character");const Kanji1797Character=/*YAK Extracted CSS:
.Kanji1797Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1797Character");const Kanji1798Character=/*YAK Extracted CSS:
.Kanji1798Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1798Character");const Kanji1799Character=/*YAK Extracted CSS:
.Kanji1799Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1799Character");const Kanji1800Character=/*YAK Extracted CSS:
.Kanji1800Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1800Character");const Kanji1801Character=/*YAK Extracted CSS:
.Kanji1801Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1801Character");const Kanji1802Character=/*YAK Extracted CSS:
.Kanji1802Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1802Character");const Kanji1803Character=/*YAK Extracted CSS:
.Kanji1803Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1803Character");const Kanji1804Character=/*YAK Extracted CSS:
.Kanji1804Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1804Character");const Kanji1805Character=/*YAK Extracted CSS:
.Kanji1805Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1805Character");const Kanji1806Character=/*YAK Extracted CSS:
.Kanji1806Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1806Character");const Kanji1807Character=/*YAK Extracted CSS:
.Kanji1807Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1807Character");const Kanji1808Character=/*YAK Extracted CSS:
.Kanji1808Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1808Character");const Kanji1809Character=/*YAK Extracted CSS:
.Kanji1809Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1809Character");const Kanji1810Character=/*YAK Extracted CSS:
.Kanji1810Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1810Character");const Kanji1811Character=/*YAK Extracted CSS:
.Kanji1811Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1811Character");const Kanji1812Character=/*YAK Extracted CSS:
.Kanji1812Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1812Character");const Kanji1813Character=/*YAK Extracted CSS:
.Kanji1813Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1813Character");const Kanji1814Character=/*YAK Extracted CSS:
.Kanji1814Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1814Character");const Kanji1815Character=/*YAK Extracted CSS:
.Kanji1815Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1815Character");const Kanji1816Character=/*YAK Extracted CSS:
.Kanji1816Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1816Character");const Kanji1817Character=/*YAK Extracted CSS:
.Kanji1817Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1817Character");const Kanji1818Character=/*YAK Extracted CSS:
.Kanji1818Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1818Character");const Kanji1819Character=/*YAK Extracted CSS:
.Kanji1819Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1819Character");const Kanji1820Character=/*YAK Extracted CSS:
.Kanji1820Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1820Character");const Kanji1821Character=/*YAK Extracted CSS:
.Kanji1821Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1821Character");const Kanji1822Character=/*YAK Extracted CSS:
.Kanji1822Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1822Character");const Kanji1823Character=/*YAK Extracted CSS:
.Kanji1823Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1823Character");const Kanji1824Character=/*YAK Extracted CSS:
.Kanji1824Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1824Character");const Kanji1825Character=/*YAK Extracted CSS:
.Kanji1825Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1825Character");const Kanji1826Character=/*YAK Extracted CSS:
.Kanji1826Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1826Character");const Kanji1827Character=/*YAK Extracted CSS:
.Kanji1827Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1827Character");const Kanji1828Character=/*YAK Extracted CSS:
.Kanji1828Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1828Character");const Kanji1829Character=/*YAK Extracted CSS:
.Kanji1829Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1829Character");const Kanji1830Character=/*YAK Extracted CSS:
.Kanji1830Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1830Character");const Kanji1831Character=/*YAK Extracted CSS:
.Kanji1831Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1831Character");const Kanji1832Character=/*YAK Extracted CSS:
.Kanji1832Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1832Character");const Kanji1833Character=/*YAK Extracted CSS:
.Kanji1833Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1833Character");const Kanji1834Character=/*YAK Extracted CSS:
.Kanji1834Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1834Character");const Kanji1835Character=/*YAK Extracted CSS:
.Kanji1835Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1835Character");const Kanji1836Character=/*YAK Extracted CSS:
.Kanji1836Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1836Character");const Kanji1837Character=/*YAK Extracted CSS:
.Kanji1837Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1837Character");const Kanji1838Character=/*YAK Extracted CSS:
.Kanji1838Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1838Character");const Kanji1839Character=/*YAK Extracted CSS:
.Kanji1839Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1839Character");const Kanji1840Character=/*YAK Extracted CSS:
.Kanji1840Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1840Character");const Kanji1841Character=/*YAK Extracted CSS:
.Kanji1841Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1841Character");const Kanji1842Character=/*YAK Extracted CSS:
.Kanji1842Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1842Character");const Kanji1843Character=/*YAK Extracted CSS:
.Kanji1843Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1843Character");const Kanji1844Character=/*YAK Extracted CSS:
.Kanji1844Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1844Character");const Kanji1845Character=/*YAK Extracted CSS:
.Kanji1845Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1845Character");const Kanji1846Character=/*YAK Extracted CSS:
.Kanji1846Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1846Character");const Kanji1847Character=/*YAK Extracted CSS:
.Kanji1847Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1847Character");const Kanji1848Character=/*YAK Extracted CSS:
.Kanji1848Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1848Character");const Kanji1849Character=/*YAK Extracted CSS:
.Kanji1849Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1849Character");const Kanji1850Character=/*YAK Extracted CSS:
.Kanji1850Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1850Character");const Kanji1851Character=/*YAK Extracted CSS:
.Kanji1851Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1851Character");const Kanji1852Character=/*YAK Extracted CSS:
.Kanji1852Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1852Character");const Kanji1853Character=/*YAK Extracted CSS:
.Kanji1853Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1853Character");const Kanji1854Character=/*YAK Extracted CSS:
.Kanji1854Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1854Character");const Kanji1855Character=/*YAK Extracted CSS:
.Kanji1855Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1855Character");const Kanji1856Character=/*YAK Extracted CSS:
.Kanji1856Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1856Character");const Kanji1857Character=/*YAK Extracted CSS:
.Kanji1857Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1857Character");const Kanji1858Character=/*YAK Extracted CSS:
.Kanji1858Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1858Character");const Kanji1859Character=/*YAK Extracted CSS:
.Kanji1859Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1859Character");const Kanji1860Character=/*YAK Extracted CSS:
.Kanji1860Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1860Character");const Kanji1861Character=/*YAK Extracted CSS:
.Kanji1861Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1861Character");const Kanji1862Character=/*YAK Extracted CSS:
.Kanji1862Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1862Character");const Kanji1863Character=/*YAK Extracted CSS:
.Kanji1863Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1863Character");const Kanji1864Character=/*YAK Extracted CSS:
.Kanji1864Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1864Character");const Kanji1865Character=/*YAK Extracted CSS:
.Kanji1865Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1865Character");const Kanji1866Character=/*YAK Extracted CSS:
.Kanji1866Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1866Character");const Kanji1867Character=/*YAK Extracted CSS:
.Kanji1867Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1867Character");const Kanji1868Character=/*YAK Extracted CSS:
.Kanji1868Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1868Character");const Kanji1869Character=/*YAK Extracted CSS:
.Kanji1869Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1869Character");const Kanji1870Character=/*YAK Extracted CSS:
.Kanji1870Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1870Character");const Kanji1871Character=/*YAK Extracted CSS:
.Kanji1871Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1871Character");const Kanji1872Character=/*YAK Extracted CSS:
.Kanji1872Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1872Character");const Kanji1873Character=/*YAK Extracted CSS:
.Kanji1873Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1873Character");const Kanji1874Character=/*YAK Extracted CSS:
.Kanji1874Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1874Character");const Kanji1875Character=/*YAK Extracted CSS:
.Kanji1875Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1875Character");const Kanji1876Character=/*YAK Extracted CSS:
.Kanji1876Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1876Character");const Kanji1877Character=/*YAK Extracted CSS:
.Kanji1877Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1877Character");const Kanji1878Character=/*YAK Extracted CSS:
.Kanji1878Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1878Character");const Kanji1879Character=/*YAK Extracted CSS:
.Kanji1879Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1879Character");const Kanji1880Character=/*YAK Extracted CSS:
.Kanji1880Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1880Character");const Kanji1881Character=/*YAK Extracted CSS:
.Kanji1881Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1881Character");const Kanji1882Character=/*YAK Extracted CSS:
.Kanji1882Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1882Character");const Kanji1883Character=/*YAK Extracted CSS:
.Kanji1883Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1883Character");const Kanji1884Character=/*YAK Extracted CSS:
.Kanji1884Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1884Character");const Kanji1885Character=/*YAK Extracted CSS:
.Kanji1885Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1885Character");const Kanji1886Character=/*YAK Extracted CSS:
.Kanji1886Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1886Character");const Kanji1887Character=/*YAK Extracted CSS:
.Kanji1887Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1887Character");const Kanji1888Character=/*YAK Extracted CSS:
.Kanji1888Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1888Character");const Kanji1889Character=/*YAK Extracted CSS:
.Kanji1889Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1889Character");const Kanji1890Character=/*YAK Extracted CSS:
.Kanji1890Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1890Character");const Kanji1891Character=/*YAK Extracted CSS:
.Kanji1891Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1891Character");const Kanji1892Character=/*YAK Extracted CSS:
.Kanji1892Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1892Character");const Kanji1893Character=/*YAK Extracted CSS:
.Kanji1893Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1893Character");const Kanji1894Character=/*YAK Extracted CSS:
.Kanji1894Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1894Character");const Kanji1895Character=/*YAK Extracted CSS:
.Kanji1895Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1895Character");const Kanji1896Character=/*YAK Extracted CSS:
.Kanji1896Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1896Character");const Kanji1897Character=/*YAK Extracted CSS:
.Kanji1897Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1897Character");const Kanji1898Character=/*YAK Extracted CSS:
.Kanji1898Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1898Character");const Kanji1899Character=/*YAK Extracted CSS:
.Kanji1899Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1899Character");const Kanji1900Character=/*YAK Extracted CSS:
.Kanji1900Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1900Character");const Kanji1901Character=/*YAK Extracted CSS:
.Kanji1901Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1901Character");const Kanji1902Character=/*YAK Extracted CSS:
.Kanji1902Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1902Character");const Kanji1903Character=/*YAK Extracted CSS:
.Kanji1903Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1903Character");const Kanji1904Character=/*YAK Extracted CSS:
.Kanji1904Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1904Character");const Kanji1905Character=/*YAK Extracted CSS:
.Kanji1905Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1905Character");const Kanji1906Character=/*YAK Extracted CSS:
.Kanji1906Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1906Character");const Kanji1907Character=/*YAK Extracted CSS:
.Kanji1907Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1907Character");const Kanji1908Character=/*YAK Extracted CSS:
.Kanji1908Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1908Character");const Kanji1909Character=/*YAK Extracted CSS:
.Kanji1909Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1909Character");const Kanji1910Character=/*YAK Extracted CSS:
.Kanji1910Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1910Character");const Kanji1911Character=/*YAK Extracted CSS:
.Kanji1911Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1911Character");const Kanji1912Character=/*YAK Extracted CSS:
.Kanji1912Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1912Character");const Kanji1913Character=/*YAK Extracted CSS:
.Kanji1913Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1913Character");const Kanji1914Character=/*YAK Extracted CSS:
.Kanji1914Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1914Character");const Kanji1915Character=/*YAK Extracted CSS:
.Kanji1915Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1915Character");const Kanji1916Character=/*YAK Extracted CSS:
.Kanji1916Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1916Character");const Kanji1917Character=/*YAK Extracted CSS:
.Kanji1917Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1917Character");const Kanji1918Character=/*YAK Extracted CSS:
.Kanji1918Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1918Character");const Kanji1919Character=/*YAK Extracted CSS:
.Kanji1919Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1919Character");const Kanji1920Character=/*YAK Extracted CSS:
.Kanji1920Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1920Character");const Kanji1921Character=/*YAK Extracted CSS:
.Kanji1921Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1921Character");const Kanji1922Character=/*YAK Extracted CSS:
.Kanji1922Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1922Character");const Kanji1923Character=/*YAK Extracted CSS:
.Kanji1923Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1923Character");const Kanji1924Character=/*YAK Extracted CSS:
.Kanji1924Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1924Character");const Kanji1925Character=/*YAK Extracted CSS:
.Kanji1925Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1925Character");const Kanji1926Character=/*YAK Extracted CSS:
.Kanji1926Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1926Character");const Kanji1927Character=/*YAK Extracted CSS:
.Kanji1927Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1927Character");const Kanji1928Character=/*YAK Extracted CSS:
.Kanji1928Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1928Character");const Kanji1929Character=/*YAK Extracted CSS:
.Kanji1929Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1929Character");const Kanji1930Character=/*YAK Extracted CSS:
.Kanji1930Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1930Character");const Kanji1931Character=/*YAK Extracted CSS:
.Kanji1931Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1931Character");const Kanji1932Character=/*YAK Extracted CSS:
.Kanji1932Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1932Character");const Kanji1933Character=/*YAK Extracted CSS:
.Kanji1933Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1933Character");const Kanji1934Character=/*YAK Extracted CSS:
.Kanji1934Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1934Character");const Kanji1935Character=/*YAK Extracted CSS:
.Kanji1935Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1935Character");const Kanji1936Character=/*YAK Extracted CSS:
.Kanji1936Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1936Character");const Kanji1937Character=/*YAK Extracted CSS:
.Kanji1937Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1937Character");const Kanji1938Character=/*YAK Extracted CSS:
.Kanji1938Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1938Character");const Kanji1939Character=/*YAK Extracted CSS:
.Kanji1939Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1939Character");const Kanji1940Character=/*YAK Extracted CSS:
.Kanji1940Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1940Character");const Kanji1941Character=/*YAK Extracted CSS:
.Kanji1941Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1941Character");const Kanji1942Character=/*YAK Extracted CSS:
.Kanji1942Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1942Character");const Kanji1943Character=/*YAK Extracted CSS:
.Kanji1943Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1943Character");const Kanji1944Character=/*YAK Extracted CSS:
.Kanji1944Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1944Character");const Kanji1945Character=/*YAK Extracted CSS:
.Kanji1945Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1945Character");const Kanji1946Character=/*YAK Extracted CSS:
.Kanji1946Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1946Character");const Kanji1947Character=/*YAK Extracted CSS:
.Kanji1947Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1947Character");const Kanji1948Character=/*YAK Extracted CSS:
.Kanji1948Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1948Character");const Kanji1949Character=/*YAK Extracted CSS:
.Kanji1949Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1949Character");const Kanji1950Character=/*YAK Extracted CSS:
.Kanji1950Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1950Character");const Kanji1951Character=/*YAK Extracted CSS:
.Kanji1951Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1951Character");const Kanji1952Character=/*YAK Extracted CSS:
.Kanji1952Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1952Character");const Kanji1953Character=/*YAK Extracted CSS:
.Kanji1953Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1953Character");const Kanji1954Character=/*YAK Extracted CSS:
.Kanji1954Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1954Character");const Kanji1955Character=/*YAK Extracted CSS:
.Kanji1955Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1955Character");const Kanji1956Character=/*YAK Extracted CSS:
.Kanji1956Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1956Character");const Kanji1957Character=/*YAK Extracted CSS:
.Kanji1957Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1957Character");const Kanji1958Character=/*YAK Extracted CSS:
.Kanji1958Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1958Character");const Kanji1959Character=/*YAK Extracted CSS:
.Kanji1959Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1959Character");const Kanji1960Character=/*YAK Extracted CSS:
.Kanji1960Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1960Character");const Kanji1961Character=/*YAK Extracted CSS:
.Kanji1961Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1961Character");const Kanji1962Character=/*YAK Extracted CSS:
.Kanji1962Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1962Character");const Kanji1963Character=/*YAK Extracted CSS:
.Kanji1963Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1963Character");const Kanji1964Character=/*YAK Extracted CSS:
.Kanji1964Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1964Character");const Kanji1965Character=/*YAK Extracted CSS:
.Kanji1965Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1965Character");const Kanji1966Character=/*YAK Extracted CSS:
.Kanji1966Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1966Character");const Kanji1967Character=/*YAK Extracted CSS:
.Kanji1967Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1967Character");const Kanji1968Character=/*YAK Extracted CSS:
.Kanji1968Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1968Character");const Kanji1969Character=/*YAK Extracted CSS:
.Kanji1969Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1969Character");const Kanji1970Character=/*YAK Extracted CSS:
.Kanji1970Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1970Character");const Kanji1971Character=/*YAK Extracted CSS:
.Kanji1971Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1971Character");const Kanji1972Character=/*YAK Extracted CSS:
.Kanji1972Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1972Character");const Kanji1973Character=/*YAK Extracted CSS:
.Kanji1973Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1973Character");const Kanji1974Character=/*YAK Extracted CSS:
.Kanji1974Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1974Character");const Kanji1975Character=/*YAK Extracted CSS:
.Kanji1975Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1975Character");const Kanji1976Character=/*YAK Extracted CSS:
.Kanji1976Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1976Character");const Kanji1977Character=/*YAK Extracted CSS:
.Kanji1977Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1977Character");const Kanji1978Character=/*YAK Extracted CSS:
.Kanji1978Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1978Character");const Kanji1979Character=/*YAK Extracted CSS:
.Kanji1979Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1979Character");const Kanji1980Character=/*YAK Extracted CSS:
.Kanji1980Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1980Character");const Kanji1981Character=/*YAK Extracted CSS:
.Kanji1981Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1981Character");const Kanji1982Character=/*YAK Extracted CSS:
.Kanji1982Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1982Character");const Kanji1983Character=/*YAK Extracted CSS:
.Kanji1983Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1983Character");const Kanji1984Character=/*YAK Extracted CSS:
.Kanji1984Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1984Character");const Kanji1985Character=/*YAK Extracted CSS:
.Kanji1985Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1985Character");const Kanji1986Character=/*YAK Extracted CSS:
.Kanji1986Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1986Character");const Kanji1987Character=/*YAK Extracted CSS:
.Kanji1987Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1987Character");const Kanji1988Character=/*YAK Extracted CSS:
.Kanji1988Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1988Character");const Kanji1989Character=/*YAK Extracted CSS:
.Kanji1989Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1989Character");const Kanji1990Character=/*YAK Extracted CSS:
.Kanji1990Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1990Character");const Kanji1991Character=/*YAK Extracted CSS:
.Kanji1991Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1991Character");const Kanji1992Character=/*YAK Extracted CSS:
.Kanji1992Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1992Character");const Kanji1993Character=/*YAK Extracted CSS:
.Kanji1993Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1993Character");const Kanji1994Character=/*YAK Extracted CSS:
.Kanji1994Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1994Character");const Kanji1995Character=/*YAK Extracted CSS:
.Kanji1995Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1995Character");const Kanji1996Character=/*YAK Extracted CSS:
.Kanji1996Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1996Character");const Kanji1997Character=/*YAK Extracted CSS:
.Kanji1997Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1997Character");const Kanji1998Character=/*YAK Extracted CSS:
.Kanji1998Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1998Character");const Kanji1999Character=/*YAK Extracted CSS:
.Kanji1999Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji1999Character");const Kanji2000Character=/*YAK Extracted CSS:
.Kanji2000Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2000Character");const Kanji2001Character=/*YAK Extracted CSS:
.Kanji2001Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2001Character");const Kanji2002Character=/*YAK Extracted CSS:
.Kanji2002Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2002Character");const Kanji2003Character=/*YAK Extracted CSS:
.Kanji2003Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2003Character");const Kanji2004Character=/*YAK Extracted CSS:
.Kanji2004Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2004Character");const Kanji2005Character=/*YAK Extracted CSS:
.Kanji2005Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2005Character");const Kanji2006Character=/*YAK Extracted CSS:
.Kanji2006Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2006Character");const Kanji2007Character=/*YAK Extracted CSS:
.Kanji2007Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2007Character");const Kanji2008Character=/*YAK Extracted CSS:
.Kanji2008Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2008Character");const Kanji2009Character=/*YAK Extracted CSS:
.Kanji2009Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2009Character");const Kanji2010Character=/*YAK Extracted CSS:
.Kanji2010Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2010Character");const Kanji2011Character=/*YAK Extracted CSS:
.Kanji2011Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2011Character");const Kanji2012Character=/*YAK Extracted CSS:
.Kanji2012Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2012Character");const Kanji2013Character=/*YAK Extracted CSS:
.Kanji2013Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2013Character");const Kanji2014Character=/*YAK Extracted CSS:
.Kanji2014Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2014Character");const Kanji2015Character=/*YAK Extracted CSS:
.Kanji2015Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2015Character");const Kanji2016Character=/*YAK Extracted CSS:
.Kanji2016Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2016Character");const Kanji2017Character=/*YAK Extracted CSS:
.Kanji2017Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2017Character");const Kanji2018Character=/*YAK Extracted CSS:
.Kanji2018Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2018Character");const Kanji2019Character=/*YAK Extracted CSS:
.Kanji2019Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2019Character");const Kanji2020Character=/*YAK Extracted CSS:
.Kanji2020Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2020Character");const Kanji2021Character=/*YAK Extracted CSS:
.Kanji2021Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2021Character");const Kanji2022Character=/*YAK Extracted CSS:
.Kanji2022Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2022Character");const Kanji2023Character=/*YAK Extracted CSS:
.Kanji2023Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2023Character");const Kanji2024Character=/*YAK Extracted CSS:
.Kanji2024Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2024Character");const Kanji2025Character=/*YAK Extracted CSS:
.Kanji2025Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2025Character");const Kanji2026Character=/*YAK Extracted CSS:
.Kanji2026Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2026Character");const Kanji2027Character=/*YAK Extracted CSS:
.Kanji2027Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2027Character");const Kanji2028Character=/*YAK Extracted CSS:
.Kanji2028Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2028Character");const Kanji2029Character=/*YAK Extracted CSS:
.Kanji2029Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2029Character");const Kanji2030Character=/*YAK Extracted CSS:
.Kanji2030Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2030Character");const Kanji2031Character=/*YAK Extracted CSS:
.Kanji2031Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2031Character");const Kanji2032Character=/*YAK Extracted CSS:
.Kanji2032Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2032Character");const Kanji2033Character=/*YAK Extracted CSS:
.Kanji2033Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2033Character");const Kanji2034Character=/*YAK Extracted CSS:
.Kanji2034Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2034Character");const Kanji2035Character=/*YAK Extracted CSS:
.Kanji2035Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2035Character");const Kanji2036Character=/*YAK Extracted CSS:
.Kanji2036Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2036Character");const Kanji2037Character=/*YAK Extracted CSS:
.Kanji2037Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2037Character");const Kanji2038Character=/*YAK Extracted CSS:
.Kanji2038Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2038Character");const Kanji2039Character=/*YAK Extracted CSS:
.Kanji2039Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2039Character");const Kanji2040Character=/*YAK Extracted CSS:
.Kanji2040Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2040Character");const Kanji2041Character=/*YAK Extracted CSS:
.Kanji2041Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2041Character");const Kanji2042Character=/*YAK Extracted CSS:
.Kanji2042Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2042Character");const Kanji2043Character=/*YAK Extracted CSS:
.Kanji2043Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2043Character");const Kanji2044Character=/*YAK Extracted CSS:
.Kanji2044Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2044Character");const Kanji2045Character=/*YAK Extracted CSS:
.Kanji2045Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2045Character");const Kanji2046Character=/*YAK Extracted CSS:
.Kanji2046Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2046Character");const Kanji2047Character=/*YAK Extracted CSS:
.Kanji2047Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2047Character");const Kanji2048Character=/*YAK Extracted CSS:
.Kanji2048Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2048Character");const Kanji2049Character=/*YAK Extracted CSS:
.Kanji2049Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2049Character");const Kanji2050Character=/*YAK Extracted CSS:
.Kanji2050Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2050Character");const Kanji2051Character=/*YAK Extracted CSS:
.Kanji2051Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2051Character");const Kanji2052Character=/*YAK Extracted CSS:
.Kanji2052Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2052Character");const Kanji2053Character=/*YAK Extracted CSS:
.Kanji2053Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2053Character");const Kanji2054Character=/*YAK Extracted CSS:
.Kanji2054Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2054Character");const Kanji2055Character=/*YAK Extracted CSS:
.Kanji2055Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2055Character");const Kanji2056Character=/*YAK Extracted CSS:
.Kanji2056Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2056Character");const Kanji2057Character=/*YAK Extracted CSS:
.Kanji2057Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2057Character");const Kanji2058Character=/*YAK Extracted CSS:
.Kanji2058Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2058Character");const Kanji2059Character=/*YAK Extracted CSS:
.Kanji2059Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2059Character");const Kanji2060Character=/*YAK Extracted CSS:
.Kanji2060Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2060Character");const Kanji2061Character=/*YAK Extracted CSS:
.Kanji2061Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2061Character");const Kanji2062Character=/*YAK Extracted CSS:
.Kanji2062Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2062Character");const Kanji2063Character=/*YAK Extracted CSS:
.Kanji2063Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2063Character");const Kanji2064Character=/*YAK Extracted CSS:
.Kanji2064Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2064Character");const Kanji2065Character=/*YAK Extracted CSS:
.Kanji2065Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2065Character");const Kanji2066Character=/*YAK Extracted CSS:
.Kanji2066Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2066Character");const Kanji2067Character=/*YAK Extracted CSS:
.Kanji2067Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2067Character");const Kanji2068Character=/*YAK Extracted CSS:
.Kanji2068Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2068Character");const Kanji2069Character=/*YAK Extracted CSS:
.Kanji2069Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2069Character");const Kanji2070Character=/*YAK Extracted CSS:
.Kanji2070Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2070Character");const Kanji2071Character=/*YAK Extracted CSS:
.Kanji2071Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2071Character");const Kanji2072Character=/*YAK Extracted CSS:
.Kanji2072Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2072Character");const Kanji2073Character=/*YAK Extracted CSS:
.Kanji2073Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2073Character");const Kanji2074Character=/*YAK Extracted CSS:
.Kanji2074Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2074Character");const Kanji2075Character=/*YAK Extracted CSS:
.Kanji2075Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2075Character");const Kanji2076Character=/*YAK Extracted CSS:
.Kanji2076Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2076Character");const Kanji2077Character=/*YAK Extracted CSS:
.Kanji2077Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2077Character");const Kanji2078Character=/*YAK Extracted CSS:
.Kanji2078Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2078Character");const Kanji2079Character=/*YAK Extracted CSS:
.Kanji2079Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2079Character");const Kanji2080Character=/*YAK Extracted CSS:
.Kanji2080Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2080Character");const Kanji2081Character=/*YAK Extracted CSS:
.Kanji2081Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2081Character");const Kanji2082Character=/*YAK Extracted CSS:
.Kanji2082Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2082Character");const Kanji2083Character=/*YAK Extracted CSS:
.Kanji2083Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2083Character");const Kanji2084Character=/*YAK Extracted CSS:
.Kanji2084Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2084Character");const Kanji2085Character=/*YAK Extracted CSS:
.Kanji2085Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2085Character");const Kanji2086Character=/*YAK Extracted CSS:
.Kanji2086Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2086Character");const Kanji2087Character=/*YAK Extracted CSS:
.Kanji2087Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2087Character");const Kanji2088Character=/*YAK Extracted CSS:
.Kanji2088Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2088Character");const Kanji2089Character=/*YAK Extracted CSS:
.Kanji2089Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2089Character");const Kanji2090Character=/*YAK Extracted CSS:
.Kanji2090Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2090Character");const Kanji2091Character=/*YAK Extracted CSS:
.Kanji2091Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2091Character");const Kanji2092Character=/*YAK Extracted CSS:
.Kanji2092Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2092Character");const Kanji2093Character=/*YAK Extracted CSS:
.Kanji2093Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2093Character");const Kanji2094Character=/*YAK Extracted CSS:
.Kanji2094Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2094Character");const Kanji2095Character=/*YAK Extracted CSS:
.Kanji2095Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2095Character");const Kanji2096Character=/*YAK Extracted CSS:
.Kanji2096Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2096Character");const Kanji2097Character=/*YAK Extracted CSS:
.Kanji2097Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2097Character");const Kanji2098Character=/*YAK Extracted CSS:
.Kanji2098Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2098Character");const Kanji2099Character=/*YAK Extracted CSS:
.Kanji2099Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2099Character");const Kanji2100Character=/*YAK Extracted CSS:
.Kanji2100Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2100Character");const Kanji2101Character=/*YAK Extracted CSS:
.Kanji2101Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2101Character");const Kanji2102Character=/*YAK Extracted CSS:
.Kanji2102Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2102Character");const Kanji2103Character=/*YAK Extracted CSS:
.Kanji2103Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2103Character");const Kanji2104Character=/*YAK Extracted CSS:
.Kanji2104Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2104Character");const Kanji2105Character=/*YAK Extracted CSS:
.Kanji2105Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2105Character");const Kanji2106Character=/*YAK Extracted CSS:
.Kanji2106Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2106Character");const Kanji2107Character=/*YAK Extracted CSS:
.Kanji2107Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2107Character");const Kanji2108Character=/*YAK Extracted CSS:
.Kanji2108Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2108Character");const Kanji2109Character=/*YAK Extracted CSS:
.Kanji2109Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2109Character");const Kanji2110Character=/*YAK Extracted CSS:
.Kanji2110Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2110Character");const Kanji2111Character=/*YAK Extracted CSS:
.Kanji2111Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2111Character");const Kanji2112Character=/*YAK Extracted CSS:
.Kanji2112Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2112Character");const Kanji2113Character=/*YAK Extracted CSS:
.Kanji2113Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2113Character");const Kanji2114Character=/*YAK Extracted CSS:
.Kanji2114Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2114Character");const Kanji2115Character=/*YAK Extracted CSS:
.Kanji2115Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2115Character");const Kanji2116Character=/*YAK Extracted CSS:
.Kanji2116Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2116Character");const Kanji2117Character=/*YAK Extracted CSS:
.Kanji2117Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2117Character");const Kanji2118Character=/*YAK Extracted CSS:
.Kanji2118Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2118Character");const Kanji2119Character=/*YAK Extracted CSS:
.Kanji2119Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2119Character");const Kanji2120Character=/*YAK Extracted CSS:
.Kanji2120Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2120Character");const Kanji2121Character=/*YAK Extracted CSS:
.Kanji2121Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2121Character");const Kanji2122Character=/*YAK Extracted CSS:
.Kanji2122Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2122Character");const Kanji2123Character=/*YAK Extracted CSS:
.Kanji2123Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2123Character");const Kanji2124Character=/*YAK Extracted CSS:
.Kanji2124Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2124Character");const Kanji2125Character=/*YAK Extracted CSS:
.Kanji2125Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2125Character");const Kanji2126Character=/*YAK Extracted CSS:
.Kanji2126Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2126Character");const Kanji2127Character=/*YAK Extracted CSS:
.Kanji2127Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2127Character");const Kanji2128Character=/*YAK Extracted CSS:
.Kanji2128Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2128Character");const Kanji2129Character=/*YAK Extracted CSS:
.Kanji2129Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2129Character");const Kanji2130Character=/*YAK Extracted CSS:
.Kanji2130Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2130Character");const Kanji2131Character=/*YAK Extracted CSS:
.Kanji2131Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2131Character");const Kanji2132Character=/*YAK Extracted CSS:
.Kanji2132Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2132Character");const Kanji2133Character=/*YAK Extracted CSS:
.Kanji2133Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2133Character");const Kanji2134Character=/*YAK Extracted CSS:
.Kanji2134Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2134Character");const Kanji2135Character=/*YAK Extracted CSS:
.Kanji2135Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2135Character");const Kanji2136Character=/*YAK Extracted CSS:
.Kanji2136Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2136Character");const Kanji2137Character=/*YAK Extracted CSS:
.Kanji2137Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2137Character");const Kanji2138Character=/*YAK Extracted CSS:
.Kanji2138Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2138Character");const Kanji2139Character=/*YAK Extracted CSS:
.Kanji2139Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2139Character");const Kanji2140Character=/*YAK Extracted CSS:
.Kanji2140Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2140Character");const Kanji2141Character=/*YAK Extracted CSS:
.Kanji2141Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2141Character");const Kanji2142Character=/*YAK Extracted CSS:
.Kanji2142Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2142Character");const Kanji2143Character=/*YAK Extracted CSS:
.Kanji2143Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2143Character");const Kanji2144Character=/*YAK Extracted CSS:
.Kanji2144Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2144Character");const Kanji2145Character=/*YAK Extracted CSS:
.Kanji2145Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2145Character");const Kanji2146Character=/*YAK Extracted CSS:
.Kanji2146Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2146Character");const Kanji2147Character=/*YAK Extracted CSS:
.Kanji2147Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2147Character");const Kanji2148Character=/*YAK Extracted CSS:
.Kanji2148Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2148Character");const Kanji2149Character=/*YAK Extracted CSS:
.Kanji2149Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2149Character");const Kanji2150Character=/*YAK Extracted CSS:
.Kanji2150Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2150Character");const Kanji2151Character=/*YAK Extracted CSS:
.Kanji2151Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2151Character");const Kanji2152Character=/*YAK Extracted CSS:
.Kanji2152Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2152Character");const Kanji2153Character=/*YAK Extracted CSS:
.Kanji2153Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2153Character");const Kanji2154Character=/*YAK Extracted CSS:
.Kanji2154Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2154Character");const Kanji2155Character=/*YAK Extracted CSS:
.Kanji2155Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2155Character");const Kanji2156Character=/*YAK Extracted CSS:
.Kanji2156Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2156Character");const Kanji2157Character=/*YAK Extracted CSS:
.Kanji2157Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2157Character");const Kanji2158Character=/*YAK Extracted CSS:
.Kanji2158Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2158Character");const Kanji2159Character=/*YAK Extracted CSS:
.Kanji2159Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2159Character");const Kanji2160Character=/*YAK Extracted CSS:
.Kanji2160Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2160Character");const Kanji2161Character=/*YAK Extracted CSS:
.Kanji2161Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2161Character");const Kanji2162Character=/*YAK Extracted CSS:
.Kanji2162Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2162Character");const Kanji2163Character=/*YAK Extracted CSS:
.Kanji2163Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2163Character");const Kanji2164Character=/*YAK Extracted CSS:
.Kanji2164Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2164Character");const Kanji2165Character=/*YAK Extracted CSS:
.Kanji2165Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2165Character");const Kanji2166Character=/*YAK Extracted CSS:
.Kanji2166Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2166Character");const Kanji2167Character=/*YAK Extracted CSS:
.Kanji2167Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2167Character");const Kanji2168Character=/*YAK Extracted CSS:
.Kanji2168Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2168Character");const Kanji2169Character=/*YAK Extracted CSS:
.Kanji2169Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2169Character");const Kanji2170Character=/*YAK Extracted CSS:
.Kanji2170Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2170Character");const Kanji2171Character=/*YAK Extracted CSS:
.Kanji2171Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2171Character");const Kanji2172Character=/*YAK Extracted CSS:
.Kanji2172Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2172Character");const Kanji2173Character=/*YAK Extracted CSS:
.Kanji2173Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2173Character");const Kanji2174Character=/*YAK Extracted CSS:
.Kanji2174Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2174Character");const Kanji2175Character=/*YAK Extracted CSS:
.Kanji2175Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2175Character");const Kanji2176Character=/*YAK Extracted CSS:
.Kanji2176Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2176Character");const Kanji2177Character=/*YAK Extracted CSS:
.Kanji2177Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2177Character");const Kanji2178Character=/*YAK Extracted CSS:
.Kanji2178Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2178Character");const Kanji2179Character=/*YAK Extracted CSS:
.Kanji2179Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2179Character");const Kanji2180Character=/*YAK Extracted CSS:
.Kanji2180Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2180Character");const Kanji2181Character=/*YAK Extracted CSS:
.Kanji2181Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2181Character");const Kanji2182Character=/*YAK Extracted CSS:
.Kanji2182Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2182Character");const Kanji2183Character=/*YAK Extracted CSS:
.Kanji2183Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2183Character");const Kanji2184Character=/*YAK Extracted CSS:
.Kanji2184Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2184Character");const Kanji2185Character=/*YAK Extracted CSS:
.Kanji2185Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2185Character");const Kanji2186Character=/*YAK Extracted CSS:
.Kanji2186Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2186Character");const Kanji2187Character=/*YAK Extracted CSS:
.Kanji2187Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2187Character");const Kanji2188Character=/*YAK Extracted CSS:
.Kanji2188Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2188Character");const Kanji2189Character=/*YAK Extracted CSS:
.Kanji2189Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2189Character");const Kanji2190Character=/*YAK Extracted CSS:
.Kanji2190Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2190Character");const Kanji2191Character=/*YAK Extracted CSS:
.Kanji2191Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2191Character");const Kanji2192Character=/*YAK Extracted CSS:
.Kanji2192Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2192Character");const Kanji2193Character=/*YAK Extracted CSS:
.Kanji2193Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2193Character");const Kanji2194Character=/*YAK Extracted CSS:
.Kanji2194Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2194Character");const Kanji2195Character=/*YAK Extracted CSS:
.Kanji2195Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2195Character");const Kanji2196Character=/*YAK Extracted CSS:
.Kanji2196Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2196Character");const Kanji2197Character=/*YAK Extracted CSS:
.Kanji2197Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2197Character");const Kanji2198Character=/*YAK Extracted CSS:
.Kanji2198Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2198Character");const Kanji2199Character=/*YAK Extracted CSS:
.Kanji2199Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2199Character");const Kanji2200Character=/*YAK Extracted CSS:
.Kanji2200Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2200Character");const Kanji2201Character=/*YAK Extracted CSS:
.Kanji2201Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2201Character");const Kanji2202Character=/*YAK Extracted CSS:
.Kanji2202Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2202Character");const Kanji2203Character=/*YAK Extracted CSS:
.Kanji2203Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2203Character");const Kanji2204Character=/*YAK Extracted CSS:
.Kanji2204Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2204Character");const Kanji2205Character=/*YAK Extracted CSS:
.Kanji2205Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2205Character");const Kanji2206Character=/*YAK Extracted CSS:
.Kanji2206Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2206Character");const Kanji2207Character=/*YAK Extracted CSS:
.Kanji2207Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2207Character");const Kanji2208Character=/*YAK Extracted CSS:
.Kanji2208Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2208Character");const Kanji2209Character=/*YAK Extracted CSS:
.Kanji2209Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2209Character");const Kanji2210Character=/*YAK Extracted CSS:
.Kanji2210Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2210Character");const Kanji2211Character=/*YAK Extracted CSS:
.Kanji2211Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2211Character");const Kanji2212Character=/*YAK Extracted CSS:
.Kanji2212Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2212Character");const Kanji2213Character=/*YAK Extracted CSS:
.Kanji2213Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2213Character");const Kanji2214Character=/*YAK Extracted CSS:
.Kanji2214Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2214Character");const Kanji2215Character=/*YAK Extracted CSS:
.Kanji2215Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2215Character");const Kanji2216Character=/*YAK Extracted CSS:
.Kanji2216Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2216Character");const Kanji2217Character=/*YAK Extracted CSS:
.Kanji2217Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2217Character");const Kanji2218Character=/*YAK Extracted CSS:
.Kanji2218Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2218Character");const Kanji2219Character=/*YAK Extracted CSS:
.Kanji2219Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2219Character");const Kanji2220Character=/*YAK Extracted CSS:
.Kanji2220Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2220Character");const Kanji2221Character=/*YAK Extracted CSS:
.Kanji2221Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2221Character");const Kanji2222Character=/*YAK Extracted CSS:
.Kanji2222Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2222Character");const Kanji2223Character=/*YAK Extracted CSS:
.Kanji2223Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2223Character");const Kanji2224Character=/*YAK Extracted CSS:
.Kanji2224Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2224Character");const Kanji2225Character=/*YAK Extracted CSS:
.Kanji2225Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2225Character");const Kanji2226Character=/*YAK Extracted CSS:
.Kanji2226Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2226Character");const Kanji2227Character=/*YAK Extracted CSS:
.Kanji2227Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2227Character");const Kanji2228Character=/*YAK Extracted CSS:
.Kanji2228Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2228Character");const Kanji2229Character=/*YAK Extracted CSS:
.Kanji2229Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2229Character");const Kanji2230Character=/*YAK Extracted CSS:
.Kanji2230Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2230Character");const Kanji2231Character=/*YAK Extracted CSS:
.Kanji2231Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2231Character");const Kanji2232Character=/*YAK Extracted CSS:
.Kanji2232Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2232Character");const Kanji2233Character=/*YAK Extracted CSS:
.Kanji2233Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2233Character");const Kanji2234Character=/*YAK Extracted CSS:
.Kanji2234Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2234Character");const Kanji2235Character=/*YAK Extracted CSS:
.Kanji2235Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2235Character");const Kanji2236Character=/*YAK Extracted CSS:
.Kanji2236Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2236Character");const Kanji2237Character=/*YAK Extracted CSS:
.Kanji2237Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2237Character");const Kanji2238Character=/*YAK Extracted CSS:
.Kanji2238Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2238Character");const Kanji2239Character=/*YAK Extracted CSS:
.Kanji2239Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2239Character");const Kanji2240Character=/*YAK Extracted CSS:
.Kanji2240Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2240Character");const Kanji2241Character=/*YAK Extracted CSS:
.Kanji2241Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2241Character");const Kanji2242Character=/*YAK Extracted CSS:
.Kanji2242Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2242Character");const Kanji2243Character=/*YAK Extracted CSS:
.Kanji2243Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2243Character");const Kanji2244Character=/*YAK Extracted CSS:
.Kanji2244Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2244Character");const Kanji2245Character=/*YAK Extracted CSS:
.Kanji2245Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2245Character");const Kanji2246Character=/*YAK Extracted CSS:
.Kanji2246Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2246Character");const Kanji2247Character=/*YAK Extracted CSS:
.Kanji2247Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2247Character");const Kanji2248Character=/*YAK Extracted CSS:
.Kanji2248Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2248Character");const Kanji2249Character=/*YAK Extracted CSS:
.Kanji2249Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2249Character");const Kanji2250Character=/*YAK Extracted CSS:
.Kanji2250Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2250Character");const Kanji2251Character=/*YAK Extracted CSS:
.Kanji2251Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2251Character");const Kanji2252Character=/*YAK Extracted CSS:
.Kanji2252Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2252Character");const Kanji2253Character=/*YAK Extracted CSS:
.Kanji2253Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2253Character");const Kanji2254Character=/*YAK Extracted CSS:
.Kanji2254Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2254Character");const Kanji2255Character=/*YAK Extracted CSS:
.Kanji2255Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2255Character");const Kanji2256Character=/*YAK Extracted CSS:
.Kanji2256Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2256Character");const Kanji2257Character=/*YAK Extracted CSS:
.Kanji2257Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2257Character");const Kanji2258Character=/*YAK Extracted CSS:
.Kanji2258Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2258Character");const Kanji2259Character=/*YAK Extracted CSS:
.Kanji2259Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2259Character");const Kanji2260Character=/*YAK Extracted CSS:
.Kanji2260Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2260Character");const Kanji2261Character=/*YAK Extracted CSS:
.Kanji2261Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2261Character");const Kanji2262Character=/*YAK Extracted CSS:
.Kanji2262Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2262Character");const Kanji2263Character=/*YAK Extracted CSS:
.Kanji2263Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2263Character");const Kanji2264Character=/*YAK Extracted CSS:
.Kanji2264Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2264Character");const Kanji2265Character=/*YAK Extracted CSS:
.Kanji2265Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2265Character");const Kanji2266Character=/*YAK Extracted CSS:
.Kanji2266Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2266Character");const Kanji2267Character=/*YAK Extracted CSS:
.Kanji2267Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2267Character");const Kanji2268Character=/*YAK Extracted CSS:
.Kanji2268Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2268Character");const Kanji2269Character=/*YAK Extracted CSS:
.Kanji2269Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2269Character");const Kanji2270Character=/*YAK Extracted CSS:
.Kanji2270Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2270Character");const Kanji2271Character=/*YAK Extracted CSS:
.Kanji2271Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2271Character");const Kanji2272Character=/*YAK Extracted CSS:
.Kanji2272Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2272Character");const Kanji2273Character=/*YAK Extracted CSS:
.Kanji2273Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2273Character");const Kanji2274Character=/*YAK Extracted CSS:
.Kanji2274Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2274Character");const Kanji2275Character=/*YAK Extracted CSS:
.Kanji2275Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2275Character");const Kanji2276Character=/*YAK Extracted CSS:
.Kanji2276Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2276Character");const Kanji2277Character=/*YAK Extracted CSS:
.Kanji2277Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2277Character");const Kanji2278Character=/*YAK Extracted CSS:
.Kanji2278Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2278Character");const Kanji2279Character=/*YAK Extracted CSS:
.Kanji2279Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2279Character");const Kanji2280Character=/*YAK Extracted CSS:
.Kanji2280Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2280Character");const Kanji2281Character=/*YAK Extracted CSS:
.Kanji2281Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2281Character");const Kanji2282Character=/*YAK Extracted CSS:
.Kanji2282Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2282Character");const Kanji2283Character=/*YAK Extracted CSS:
.Kanji2283Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2283Character");const Kanji2284Character=/*YAK Extracted CSS:
.Kanji2284Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2284Character");const Kanji2285Character=/*YAK Extracted CSS:
.Kanji2285Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2285Character");const Kanji2286Character=/*YAK Extracted CSS:
.Kanji2286Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2286Character");const Kanji2287Character=/*YAK Extracted CSS:
.Kanji2287Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2287Character");const Kanji2288Character=/*YAK Extracted CSS:
.Kanji2288Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2288Character");const Kanji2289Character=/*YAK Extracted CSS:
.Kanji2289Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2289Character");const Kanji2290Character=/*YAK Extracted CSS:
.Kanji2290Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2290Character");const Kanji2291Character=/*YAK Extracted CSS:
.Kanji2291Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2291Character");const Kanji2292Character=/*YAK Extracted CSS:
.Kanji2292Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2292Character");const Kanji2293Character=/*YAK Extracted CSS:
.Kanji2293Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2293Character");const Kanji2294Character=/*YAK Extracted CSS:
.Kanji2294Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2294Character");const Kanji2295Character=/*YAK Extracted CSS:
.Kanji2295Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2295Character");const Kanji2296Character=/*YAK Extracted CSS:
.Kanji2296Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2296Character");const Kanji2297Character=/*YAK Extracted CSS:
.Kanji2297Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2297Character");const Kanji2298Character=/*YAK Extracted CSS:
.Kanji2298Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2298Character");const Kanji2299Character=/*YAK Extracted CSS:
.Kanji2299Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2299Character");const Kanji2300Character=/*YAK Extracted CSS:
.Kanji2300Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2300Character");const Kanji2301Character=/*YAK Extracted CSS:
.Kanji2301Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2301Character");const Kanji2302Character=/*YAK Extracted CSS:
.Kanji2302Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2302Character");const Kanji2303Character=/*YAK Extracted CSS:
.Kanji2303Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2303Character");const Kanji2304Character=/*YAK Extracted CSS:
.Kanji2304Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2304Character");const Kanji2305Character=/*YAK Extracted CSS:
.Kanji2305Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2305Character");const Kanji2306Character=/*YAK Extracted CSS:
.Kanji2306Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2306Character");const Kanji2307Character=/*YAK Extracted CSS:
.Kanji2307Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2307Character");const Kanji2308Character=/*YAK Extracted CSS:
.Kanji2308Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2308Character");const Kanji2309Character=/*YAK Extracted CSS:
.Kanji2309Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2309Character");const Kanji2310Character=/*YAK Extracted CSS:
.Kanji2310Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2310Character");const Kanji2311Character=/*YAK Extracted CSS:
.Kanji2311Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2311Character");const Kanji2312Character=/*YAK Extracted CSS:
.Kanji2312Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2312Character");const Kanji2313Character=/*YAK Extracted CSS:
.Kanji2313Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2313Character");const Kanji2314Character=/*YAK Extracted CSS:
.Kanji2314Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2314Character");const Kanji2315Character=/*YAK Extracted CSS:
.Kanji2315Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2315Character");const Kanji2316Character=/*YAK Extracted CSS:
.Kanji2316Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2316Character");const Kanji2317Character=/*YAK Extracted CSS:
.Kanji2317Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2317Character");const Kanji2318Character=/*YAK Extracted CSS:
.Kanji2318Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2318Character");const Kanji2319Character=/*YAK Extracted CSS:
.Kanji2319Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2319Character");const Kanji2320Character=/*YAK Extracted CSS:
.Kanji2320Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2320Character");const Kanji2321Character=/*YAK Extracted CSS:
.Kanji2321Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2321Character");const Kanji2322Character=/*YAK Extracted CSS:
.Kanji2322Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2322Character");const Kanji2323Character=/*YAK Extracted CSS:
.Kanji2323Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2323Character");const Kanji2324Character=/*YAK Extracted CSS:
.Kanji2324Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2324Character");const Kanji2325Character=/*YAK Extracted CSS:
.Kanji2325Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2325Character");const Kanji2326Character=/*YAK Extracted CSS:
.Kanji2326Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2326Character");const Kanji2327Character=/*YAK Extracted CSS:
.Kanji2327Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2327Character");const Kanji2328Character=/*YAK Extracted CSS:
.Kanji2328Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2328Character");const Kanji2329Character=/*YAK Extracted CSS:
.Kanji2329Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2329Character");const Kanji2330Character=/*YAK Extracted CSS:
.Kanji2330Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2330Character");const Kanji2331Character=/*YAK Extracted CSS:
.Kanji2331Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2331Character");const Kanji2332Character=/*YAK Extracted CSS:
.Kanji2332Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2332Character");const Kanji2333Character=/*YAK Extracted CSS:
.Kanji2333Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2333Character");const Kanji2334Character=/*YAK Extracted CSS:
.Kanji2334Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2334Character");const Kanji2335Character=/*YAK Extracted CSS:
.Kanji2335Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2335Character");const Kanji2336Character=/*YAK Extracted CSS:
.Kanji2336Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2336Character");const Kanji2337Character=/*YAK Extracted CSS:
.Kanji2337Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2337Character");const Kanji2338Character=/*YAK Extracted CSS:
.Kanji2338Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2338Character");const Kanji2339Character=/*YAK Extracted CSS:
.Kanji2339Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2339Character");const Kanji2340Character=/*YAK Extracted CSS:
.Kanji2340Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2340Character");const Kanji2341Character=/*YAK Extracted CSS:
.Kanji2341Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2341Character");const Kanji2342Character=/*YAK Extracted CSS:
.Kanji2342Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2342Character");const Kanji2343Character=/*YAK Extracted CSS:
.Kanji2343Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2343Character");const Kanji2344Character=/*YAK Extracted CSS:
.Kanji2344Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2344Character");const Kanji2345Character=/*YAK Extracted CSS:
.Kanji2345Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2345Character");const Kanji2346Character=/*YAK Extracted CSS:
.Kanji2346Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2346Character");const Kanji2347Character=/*YAK Extracted CSS:
.Kanji2347Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2347Character");const Kanji2348Character=/*YAK Extracted CSS:
.Kanji2348Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2348Character");const Kanji2349Character=/*YAK Extracted CSS:
.Kanji2349Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2349Character");const Kanji2350Character=/*YAK Extracted CSS:
.Kanji2350Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2350Character");const Kanji2351Character=/*YAK Extracted CSS:
.Kanji2351Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2351Character");const Kanji2352Character=/*YAK Extracted CSS:
.Kanji2352Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2352Character");const Kanji2353Character=/*YAK Extracted CSS:
.Kanji2353Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2353Character");const Kanji2354Character=/*YAK Extracted CSS:
.Kanji2354Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2354Character");const Kanji2355Character=/*YAK Extracted CSS:
.Kanji2355Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2355Character");const Kanji2356Character=/*YAK Extracted CSS:
.Kanji2356Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2356Character");const Kanji2357Character=/*YAK Extracted CSS:
.Kanji2357Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2357Character");const Kanji2358Character=/*YAK Extracted CSS:
.Kanji2358Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2358Character");const Kanji2359Character=/*YAK Extracted CSS:
.Kanji2359Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2359Character");const Kanji2360Character=/*YAK Extracted CSS:
.Kanji2360Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2360Character");const Kanji2361Character=/*YAK Extracted CSS:
.Kanji2361Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2361Character");const Kanji2362Character=/*YAK Extracted CSS:
.Kanji2362Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2362Character");const Kanji2363Character=/*YAK Extracted CSS:
.Kanji2363Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2363Character");const Kanji2364Character=/*YAK Extracted CSS:
.Kanji2364Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2364Character");const Kanji2365Character=/*YAK Extracted CSS:
.Kanji2365Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2365Character");const Kanji2366Character=/*YAK Extracted CSS:
.Kanji2366Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2366Character");const Kanji2367Character=/*YAK Extracted CSS:
.Kanji2367Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2367Character");const Kanji2368Character=/*YAK Extracted CSS:
.Kanji2368Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2368Character");const Kanji2369Character=/*YAK Extracted CSS:
.Kanji2369Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2369Character");const Kanji2370Character=/*YAK Extracted CSS:
.Kanji2370Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2370Character");const Kanji2371Character=/*YAK Extracted CSS:
.Kanji2371Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2371Character");const Kanji2372Character=/*YAK Extracted CSS:
.Kanji2372Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2372Character");const Kanji2373Character=/*YAK Extracted CSS:
.Kanji2373Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2373Character");const Kanji2374Character=/*YAK Extracted CSS:
.Kanji2374Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2374Character");const Kanji2375Character=/*YAK Extracted CSS:
.Kanji2375Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2375Character");const Kanji2376Character=/*YAK Extracted CSS:
.Kanji2376Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2376Character");const Kanji2377Character=/*YAK Extracted CSS:
.Kanji2377Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2377Character");const Kanji2378Character=/*YAK Extracted CSS:
.Kanji2378Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2378Character");const Kanji2379Character=/*YAK Extracted CSS:
.Kanji2379Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2379Character");const Kanji2380Character=/*YAK Extracted CSS:
.Kanji2380Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2380Character");const Kanji2381Character=/*YAK Extracted CSS:
.Kanji2381Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2381Character");const Kanji2382Character=/*YAK Extracted CSS:
.Kanji2382Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2382Character");const Kanji2383Character=/*YAK Extracted CSS:
.Kanji2383Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2383Character");const Kanji2384Character=/*YAK Extracted CSS:
.Kanji2384Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2384Character");const Kanji2385Character=/*YAK Extracted CSS:
.Kanji2385Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2385Character");const Kanji2386Character=/*YAK Extracted CSS:
.Kanji2386Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2386Character");const Kanji2387Character=/*YAK Extracted CSS:
.Kanji2387Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2387Character");const Kanji2388Character=/*YAK Extracted CSS:
.Kanji2388Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2388Character");const Kanji2389Character=/*YAK Extracted CSS:
.Kanji2389Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2389Character");const Kanji2390Character=/*YAK Extracted CSS:
.Kanji2390Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2390Character");const Kanji2391Character=/*YAK Extracted CSS:
.Kanji2391Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2391Character");const Kanji2392Character=/*YAK Extracted CSS:
.Kanji2392Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2392Character");const Kanji2393Character=/*YAK Extracted CSS:
.Kanji2393Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2393Character");const Kanji2394Character=/*YAK Extracted CSS:
.Kanji2394Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2394Character");const Kanji2395Character=/*YAK Extracted CSS:
.Kanji2395Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2395Character");const Kanji2396Character=/*YAK Extracted CSS:
.Kanji2396Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2396Character");const Kanji2397Character=/*YAK Extracted CSS:
.Kanji2397Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2397Character");const Kanji2398Character=/*YAK Extracted CSS:
.Kanji2398Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2398Character");const Kanji2399Character=/*YAK Extracted CSS:
.Kanji2399Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2399Character");const Kanji2400Character=/*YAK Extracted CSS:
.Kanji2400Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2400Character");const Kanji2401Character=/*YAK Extracted CSS:
.Kanji2401Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2401Character");const Kanji2402Character=/*YAK Extracted CSS:
.Kanji2402Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2402Character");const Kanji2403Character=/*YAK Extracted CSS:
.Kanji2403Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2403Character");const Kanji2404Character=/*YAK Extracted CSS:
.Kanji2404Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2404Character");const Kanji2405Character=/*YAK Extracted CSS:
.Kanji2405Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2405Character");const Kanji2406Character=/*YAK Extracted CSS:
.Kanji2406Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2406Character");const Kanji2407Character=/*YAK Extracted CSS:
.Kanji2407Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2407Character");const Kanji2408Character=/*YAK Extracted CSS:
.Kanji2408Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2408Character");const Kanji2409Character=/*YAK Extracted CSS:
.Kanji2409Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2409Character");const Kanji2410Character=/*YAK Extracted CSS:
.Kanji2410Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2410Character");const Kanji2411Character=/*YAK Extracted CSS:
.Kanji2411Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2411Character");const Kanji2412Character=/*YAK Extracted CSS:
.Kanji2412Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2412Character");const Kanji2413Character=/*YAK Extracted CSS:
.Kanji2413Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2413Character");const Kanji2414Character=/*YAK Extracted CSS:
.Kanji2414Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2414Character");const Kanji2415Character=/*YAK Extracted CSS:
.Kanji2415Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2415Character");const Kanji2416Character=/*YAK Extracted CSS:
.Kanji2416Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2416Character");const Kanji2417Character=/*YAK Extracted CSS:
.Kanji2417Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2417Character");const Kanji2418Character=/*YAK Extracted CSS:
.Kanji2418Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2418Character");const Kanji2419Character=/*YAK Extracted CSS:
.Kanji2419Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2419Character");const Kanji2420Character=/*YAK Extracted CSS:
.Kanji2420Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2420Character");const Kanji2421Character=/*YAK Extracted CSS:
.Kanji2421Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2421Character");const Kanji2422Character=/*YAK Extracted CSS:
.Kanji2422Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2422Character");const Kanji2423Character=/*YAK Extracted CSS:
.Kanji2423Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2423Character");const Kanji2424Character=/*YAK Extracted CSS:
.Kanji2424Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2424Character");const Kanji2425Character=/*YAK Extracted CSS:
.Kanji2425Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2425Character");const Kanji2426Character=/*YAK Extracted CSS:
.Kanji2426Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2426Character");const Kanji2427Character=/*YAK Extracted CSS:
.Kanji2427Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2427Character");const Kanji2428Character=/*YAK Extracted CSS:
.Kanji2428Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2428Character");const Kanji2429Character=/*YAK Extracted CSS:
.Kanji2429Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2429Character");const Kanji2430Character=/*YAK Extracted CSS:
.Kanji2430Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2430Character");const Kanji2431Character=/*YAK Extracted CSS:
.Kanji2431Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2431Character");const Kanji2432Character=/*YAK Extracted CSS:
.Kanji2432Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2432Character");const Kanji2433Character=/*YAK Extracted CSS:
.Kanji2433Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2433Character");const Kanji2434Character=/*YAK Extracted CSS:
.Kanji2434Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2434Character");const Kanji2435Character=/*YAK Extracted CSS:
.Kanji2435Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2435Character");const Kanji2436Character=/*YAK Extracted CSS:
.Kanji2436Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2436Character");const Kanji2437Character=/*YAK Extracted CSS:
.Kanji2437Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2437Character");const Kanji2438Character=/*YAK Extracted CSS:
.Kanji2438Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2438Character");const Kanji2439Character=/*YAK Extracted CSS:
.Kanji2439Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2439Character");const Kanji2440Character=/*YAK Extracted CSS:
.Kanji2440Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2440Character");const Kanji2441Character=/*YAK Extracted CSS:
.Kanji2441Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2441Character");const Kanji2442Character=/*YAK Extracted CSS:
.Kanji2442Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2442Character");const Kanji2443Character=/*YAK Extracted CSS:
.Kanji2443Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2443Character");const Kanji2444Character=/*YAK Extracted CSS:
.Kanji2444Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2444Character");const Kanji2445Character=/*YAK Extracted CSS:
.Kanji2445Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2445Character");const Kanji2446Character=/*YAK Extracted CSS:
.Kanji2446Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2446Character");const Kanji2447Character=/*YAK Extracted CSS:
.Kanji2447Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2447Character");const Kanji2448Character=/*YAK Extracted CSS:
.Kanji2448Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2448Character");const Kanji2449Character=/*YAK Extracted CSS:
.Kanji2449Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2449Character");const Kanji2450Character=/*YAK Extracted CSS:
.Kanji2450Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2450Character");const Kanji2451Character=/*YAK Extracted CSS:
.Kanji2451Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2451Character");const Kanji2452Character=/*YAK Extracted CSS:
.Kanji2452Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2452Character");const Kanji2453Character=/*YAK Extracted CSS:
.Kanji2453Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2453Character");const Kanji2454Character=/*YAK Extracted CSS:
.Kanji2454Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2454Character");const Kanji2455Character=/*YAK Extracted CSS:
.Kanji2455Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2455Character");const Kanji2456Character=/*YAK Extracted CSS:
.Kanji2456Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2456Character");const Kanji2457Character=/*YAK Extracted CSS:
.Kanji2457Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2457Character");const Kanji2458Character=/*YAK Extracted CSS:
.Kanji2458Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2458Character");const Kanji2459Character=/*YAK Extracted CSS:
.Kanji2459Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2459Character");const Kanji2460Character=/*YAK Extracted CSS:
.Kanji2460Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2460Character");const Kanji2461Character=/*YAK Extracted CSS:
.Kanji2461Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2461Character");const Kanji2462Character=/*YAK Extracted CSS:
.Kanji2462Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2462Character");const Kanji2463Character=/*YAK Extracted CSS:
.Kanji2463Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2463Character");const Kanji2464Character=/*YAK Extracted CSS:
.Kanji2464Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2464Character");const Kanji2465Character=/*YAK Extracted CSS:
.Kanji2465Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2465Character");const Kanji2466Character=/*YAK Extracted CSS:
.Kanji2466Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2466Character");const Kanji2467Character=/*YAK Extracted CSS:
.Kanji2467Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2467Character");const Kanji2468Character=/*YAK Extracted CSS:
.Kanji2468Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2468Character");const Kanji2469Character=/*YAK Extracted CSS:
.Kanji2469Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2469Character");const Kanji2470Character=/*YAK Extracted CSS:
.Kanji2470Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2470Character");const Kanji2471Character=/*YAK Extracted CSS:
.Kanji2471Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2471Character");const Kanji2472Character=/*YAK Extracted CSS:
.Kanji2472Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2472Character");const Kanji2473Character=/*YAK Extracted CSS:
.Kanji2473Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2473Character");const Kanji2474Character=/*YAK Extracted CSS:
.Kanji2474Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2474Character");const Kanji2475Character=/*YAK Extracted CSS:
.Kanji2475Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2475Character");const Kanji2476Character=/*YAK Extracted CSS:
.Kanji2476Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2476Character");const Kanji2477Character=/*YAK Extracted CSS:
.Kanji2477Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2477Character");const Kanji2478Character=/*YAK Extracted CSS:
.Kanji2478Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2478Character");const Kanji2479Character=/*YAK Extracted CSS:
.Kanji2479Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2479Character");const Kanji2480Character=/*YAK Extracted CSS:
.Kanji2480Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2480Character");const Kanji2481Character=/*YAK Extracted CSS:
.Kanji2481Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2481Character");const Kanji2482Character=/*YAK Extracted CSS:
.Kanji2482Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2482Character");const Kanji2483Character=/*YAK Extracted CSS:
.Kanji2483Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2483Character");const Kanji2484Character=/*YAK Extracted CSS:
.Kanji2484Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2484Character");const Kanji2485Character=/*YAK Extracted CSS:
.Kanji2485Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2485Character");const Kanji2486Character=/*YAK Extracted CSS:
.Kanji2486Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2486Character");const Kanji2487Character=/*YAK Extracted CSS:
.Kanji2487Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2487Character");const Kanji2488Character=/*YAK Extracted CSS:
.Kanji2488Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2488Character");const Kanji2489Character=/*YAK Extracted CSS:
.Kanji2489Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2489Character");const Kanji2490Character=/*YAK Extracted CSS:
.Kanji2490Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2490Character");const Kanji2491Character=/*YAK Extracted CSS:
.Kanji2491Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2491Character");const Kanji2492Character=/*YAK Extracted CSS:
.Kanji2492Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2492Character");const Kanji2493Character=/*YAK Extracted CSS:
.Kanji2493Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2493Character");const Kanji2494Character=/*YAK Extracted CSS:
.Kanji2494Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2494Character");const Kanji2495Character=/*YAK Extracted CSS:
.Kanji2495Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2495Character");const Kanji2496Character=/*YAK Extracted CSS:
.Kanji2496Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2496Character");const Kanji2497Character=/*YAK Extracted CSS:
.Kanji2497Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2497Character");const Kanji2498Character=/*YAK Extracted CSS:
.Kanji2498Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2498Character");const Kanji2499Character=/*YAK Extracted CSS:
.Kanji2499Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2499Character");const Kanji2500Character=/*YAK Extracted CSS:
.Kanji2500Character {
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
}*/ /*#__PURE__*/styledYak(JapaneseCard)("Kanji2500Character");const Wrapper=/*YAK Extracted CSS:
.Wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #eee;
  gap: 1rem;
  padding: 1rem;
}*/ /*#__PURE__*/styledYak.div("Wrapper");const baseButtonStyles=/*YAK Extracted CSS:
.baseButtonStyles {
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  display: block;
  position: relative;
  width: 100%;
  max-width: 200px;
}*/ /*#__PURE__*/css("baseButtonStyles");const BaseButton=/*#__PURE__*/styledYak.button(baseButtonStyles);const ButtonBadge=/*YAK Extracted CSS:
.ButtonBadge {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #f00;
  color: #fff;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transform: translate(50%, 50%);
}*/ /*#__PURE__*/styledYak.span("ButtonBadge");const RerenderButton=/*YAK Extracted CSS:
.RerenderButton__RerenderButton {
  color: #333;
  background-color: #fff;
}
.RerenderButton__RerenderButton_1 {
  color: #fff;
  background-color: #333;
}
.RerenderButton__RerenderButton_2 {
  color: #333;
  background-color: #ff0;
}*/ /*#__PURE__*/styledYak.button(baseButtonStyles,({$count})=>{switch($count%3){case 0:return/*#__PURE__*/css("RerenderButton__RerenderButton");case 1:return/*#__PURE__*/css("RerenderButton__RerenderButton_1");case 2:default:return/*#__PURE__*/css("RerenderButton__RerenderButton_2");}});const RerenderButtonMedia=/*YAK Extracted CSS:
.RerenderButtonMedia__RerenderButtonMedia {
  @media (min-width: 1px) {
    color: #333;
    background-color: #fff;
  }
}
.RerenderButtonMedia__RerenderButtonMedia_1 {
  @media (min-width: 1px) {
    color: #fff;
    background-color: #333;
  }
}
.RerenderButtonMedia__RerenderButtonMedia_2 {
  @media (min-width: 1px) {
    color: #333;
    background-color: #ff0;
  }
}*/ /*#__PURE__*/styledYak.button(baseButtonStyles,({$count})=>{switch($count%3){case 0:return/*#__PURE__*/css("RerenderButtonMedia__RerenderButtonMedia");case 1:return/*#__PURE__*/css("RerenderButtonMedia__RerenderButtonMedia_1");case 2:default:return/*#__PURE__*/css("RerenderButtonMedia__RerenderButtonMedia_2");}});const RenderButtonDynamic=/*YAK Extracted CSS:
.RenderButtonDynamic {
  transform: rotate(var(--RenderButtonDynamic-transform_18fi82j));
}*/ /*#__PURE__*/styledYak.button(baseButtonStyles,"RenderButtonDynamic",{"style":{"--RenderButtonDynamic-transform_18fi82j":({$count})=>($count)+"deg"}});const RenderButtonDynamicMedia=/*YAK Extracted CSS:
.RenderButtonDynamicMedia {
  @media (min-width: 1px) {
    transform: rotate(var(--RenderButtonDynamicMedia-transform_18fi82j));
  }
}*/ /*#__PURE__*/styledYak.button(baseButtonStyles,"RenderButtonDynamicMedia",{"style":{"--RenderButtonDynamicMedia-transform_18fi82j":({$count})=>($count)+"deg"}});const LibHeader=/*YAK Extracted CSS:
.LibHeader {
  text-align: center;
  font-size: 2em;
  color: #333;
  font-family: 'Arial', sans-serif;
}*/ /*#__PURE__*/styledYak.h1("LibHeader");const ButtonWrapper=/*YAK Extracted CSS:
.ButtonWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  min-width: 100%;
  align-content: center;
  margin-bottom: 1rem;
  justify-content: center;
}*/ /*#__PURE__*/styledYak.div("ButtonWrapper");const RoundSpan=/*YAK Extracted CSS:
.RoundSpan {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #333;
}*/ /*#__PURE__*/styledYak.span("RoundSpan");export const KanjiLetterComponentYak:FunctionComponent=()=>{const[count0,setCount0]=React.useState(0);const[count1,setCount1]=React.useState(0);const[count2,setCount2]=React.useState(0);const[count3,setCount3]=React.useState(0);const[count4,setCount4]=React.useState(0);const[count5,setCount5]=React.useState(0);return<>
    <div style={{position:"fixed",inset:0,pointerEvents:"none",opacity:0}}>
      {Array.from({length:10001},(_,index)=>index).map((_,index)=><RoundSpan key={index}>{index+1}</RoundSpan>)}
    </div>
    <LibHeader onClick={()=>document.location.href="/styled"}>next-yak</LibHeader>
    <Wrapper style={{// @ts-ignore
"--count0":count0}}className={`wrapper-${count5}`}>

      <ButtonWrapper>
        <BaseButton title="updates css variable on wrapper (next-yak)"onClick={()=>{performance.mark("updates css variable on wrapper (next-yak)");setCount0(count0+1);}}>--count<ButtonBadge>{count0}</ButtonBadge></BaseButton>

        <RerenderButton title="changes color (next-yak)"onClick={()=>{performance.mark("changes color (next-yak)");setCount1(count1+1);}}$count={count1}>Color<ButtonBadge>{count1}</ButtonBadge></RerenderButton>

        <RerenderButtonMedia title="changes color in @media (next-yak)"onClick={()=>{performance.mark("changes color in @media (next-yak)");setCount2(count2+1);}}$count={count2}>Color (@media)<ButtonBadge>{count2}</ButtonBadge></RerenderButtonMedia>

        <RenderButtonDynamic title="changes dynamic value (next-yak)"onClick={()=>{performance.mark("changes dynamic value (next-yak)");setCount3(count3+1);}}$count={count3}>Rotate<ButtonBadge>{count3}</ButtonBadge></RenderButtonDynamic>

        <RenderButtonDynamicMedia title="changes dynamic value in @media (next-yak)"onClick={()=>{performance.mark("changes dynamic value in @media (next-yak)");setCount4(count4+1);}}$count={count4}>Rotate (@media)<ButtonBadge>{count3}</ButtonBadge></RenderButtonDynamicMedia>

        <BaseButton title="Wrapper className (next-yak)"onClick={()=>{performance.mark("Wrapper className (next-yak)");setCount5(count5+1);}}>Wrapper className<ButtonBadge>{count5}</ButtonBadge></BaseButton>
      </ButtonWrapper>

      <FakeDataLoader><Kanji1Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2Character/></FakeDataLoader>
      <FakeDataLoader><Kanji3Character/></FakeDataLoader>
      <FakeDataLoader><Kanji4Character/></FakeDataLoader>
      <FakeDataLoader><Kanji5Character/></FakeDataLoader>
      <FakeDataLoader><Kanji6Character/></FakeDataLoader>
      <FakeDataLoader><Kanji7Character/></FakeDataLoader>
      <FakeDataLoader><Kanji8Character/></FakeDataLoader>
      <FakeDataLoader><Kanji9Character/></FakeDataLoader>
      <FakeDataLoader><Kanji10Character/></FakeDataLoader>
      <FakeDataLoader><Kanji11Character/></FakeDataLoader>
      <FakeDataLoader><Kanji12Character/></FakeDataLoader>
      <FakeDataLoader><Kanji13Character/></FakeDataLoader>
      <FakeDataLoader><Kanji14Character/></FakeDataLoader>
      <FakeDataLoader><Kanji15Character/></FakeDataLoader>
      <FakeDataLoader><Kanji16Character/></FakeDataLoader>
      <FakeDataLoader><Kanji17Character/></FakeDataLoader>
      <FakeDataLoader><Kanji18Character/></FakeDataLoader>
      <FakeDataLoader><Kanji19Character/></FakeDataLoader>
      <FakeDataLoader><Kanji20Character/></FakeDataLoader>
      <FakeDataLoader><Kanji21Character/></FakeDataLoader>
      <FakeDataLoader><Kanji22Character/></FakeDataLoader>
      <FakeDataLoader><Kanji23Character/></FakeDataLoader>
      <FakeDataLoader><Kanji24Character/></FakeDataLoader>
      <FakeDataLoader><Kanji25Character/></FakeDataLoader>
      <FakeDataLoader><Kanji26Character/></FakeDataLoader>
      <FakeDataLoader><Kanji27Character/></FakeDataLoader>
      <FakeDataLoader><Kanji28Character/></FakeDataLoader>
      <FakeDataLoader><Kanji29Character/></FakeDataLoader>
      <FakeDataLoader><Kanji30Character/></FakeDataLoader>
      <FakeDataLoader><Kanji31Character/></FakeDataLoader>
      <FakeDataLoader><Kanji32Character/></FakeDataLoader>
      <FakeDataLoader><Kanji33Character/></FakeDataLoader>
      <FakeDataLoader><Kanji34Character/></FakeDataLoader>
      <FakeDataLoader><Kanji35Character/></FakeDataLoader>
      <FakeDataLoader><Kanji36Character/></FakeDataLoader>
      <FakeDataLoader><Kanji37Character/></FakeDataLoader>
      <FakeDataLoader><Kanji38Character/></FakeDataLoader>
      <FakeDataLoader><Kanji39Character/></FakeDataLoader>
      <FakeDataLoader><Kanji40Character/></FakeDataLoader>
      <FakeDataLoader><Kanji41Character/></FakeDataLoader>
      <FakeDataLoader><Kanji42Character/></FakeDataLoader>
      <FakeDataLoader><Kanji43Character/></FakeDataLoader>
      <FakeDataLoader><Kanji44Character/></FakeDataLoader>
      <FakeDataLoader><Kanji45Character/></FakeDataLoader>
      <FakeDataLoader><Kanji46Character/></FakeDataLoader>
      <FakeDataLoader><Kanji47Character/></FakeDataLoader>
      <FakeDataLoader><Kanji48Character/></FakeDataLoader>
      <FakeDataLoader><Kanji49Character/></FakeDataLoader>
      <FakeDataLoader><Kanji50Character/></FakeDataLoader>
      <FakeDataLoader><Kanji51Character/></FakeDataLoader>
      <FakeDataLoader><Kanji52Character/></FakeDataLoader>
      <FakeDataLoader><Kanji53Character/></FakeDataLoader>
      <FakeDataLoader><Kanji54Character/></FakeDataLoader>
      <FakeDataLoader><Kanji55Character/></FakeDataLoader>
      <FakeDataLoader><Kanji56Character/></FakeDataLoader>
      <FakeDataLoader><Kanji57Character/></FakeDataLoader>
      <FakeDataLoader><Kanji58Character/></FakeDataLoader>
      <FakeDataLoader><Kanji59Character/></FakeDataLoader>
      <FakeDataLoader><Kanji60Character/></FakeDataLoader>
      <FakeDataLoader><Kanji61Character/></FakeDataLoader>
      <FakeDataLoader><Kanji62Character/></FakeDataLoader>
      <FakeDataLoader><Kanji63Character/></FakeDataLoader>
      <FakeDataLoader><Kanji64Character/></FakeDataLoader>
      <FakeDataLoader><Kanji65Character/></FakeDataLoader>
      <FakeDataLoader><Kanji66Character/></FakeDataLoader>
      <FakeDataLoader><Kanji67Character/></FakeDataLoader>
      <FakeDataLoader><Kanji68Character/></FakeDataLoader>
      <FakeDataLoader><Kanji69Character/></FakeDataLoader>
      <FakeDataLoader><Kanji70Character/></FakeDataLoader>
      <FakeDataLoader><Kanji71Character/></FakeDataLoader>
      <FakeDataLoader><Kanji72Character/></FakeDataLoader>
      <FakeDataLoader><Kanji73Character/></FakeDataLoader>
      <FakeDataLoader><Kanji74Character/></FakeDataLoader>
      <FakeDataLoader><Kanji75Character/></FakeDataLoader>
      <FakeDataLoader><Kanji76Character/></FakeDataLoader>
      <FakeDataLoader><Kanji77Character/></FakeDataLoader>
      <FakeDataLoader><Kanji78Character/></FakeDataLoader>
      <FakeDataLoader><Kanji79Character/></FakeDataLoader>
      <FakeDataLoader><Kanji80Character/></FakeDataLoader>
      <FakeDataLoader><Kanji81Character/></FakeDataLoader>
      <FakeDataLoader><Kanji82Character/></FakeDataLoader>
      <FakeDataLoader><Kanji83Character/></FakeDataLoader>
      <FakeDataLoader><Kanji84Character/></FakeDataLoader>
      <FakeDataLoader><Kanji85Character/></FakeDataLoader>
      <FakeDataLoader><Kanji86Character/></FakeDataLoader>
      <FakeDataLoader><Kanji87Character/></FakeDataLoader>
      <FakeDataLoader><Kanji88Character/></FakeDataLoader>
      <FakeDataLoader><Kanji89Character/></FakeDataLoader>
      <FakeDataLoader><Kanji90Character/></FakeDataLoader>
      <FakeDataLoader><Kanji91Character/></FakeDataLoader>
      <FakeDataLoader><Kanji92Character/></FakeDataLoader>
      <FakeDataLoader><Kanji93Character/></FakeDataLoader>
      <FakeDataLoader><Kanji94Character/></FakeDataLoader>
      <FakeDataLoader><Kanji95Character/></FakeDataLoader>
      <FakeDataLoader><Kanji96Character/></FakeDataLoader>
      <FakeDataLoader><Kanji97Character/></FakeDataLoader>
      <FakeDataLoader><Kanji98Character/></FakeDataLoader>
      <FakeDataLoader><Kanji99Character/></FakeDataLoader>
      <FakeDataLoader><Kanji100Character/></FakeDataLoader>
      <FakeDataLoader><Kanji101Character/></FakeDataLoader>
      <FakeDataLoader><Kanji102Character/></FakeDataLoader>
      <FakeDataLoader><Kanji103Character/></FakeDataLoader>
      <FakeDataLoader><Kanji104Character/></FakeDataLoader>
      <FakeDataLoader><Kanji105Character/></FakeDataLoader>
      <FakeDataLoader><Kanji106Character/></FakeDataLoader>
      <FakeDataLoader><Kanji107Character/></FakeDataLoader>
      <FakeDataLoader><Kanji108Character/></FakeDataLoader>
      <FakeDataLoader><Kanji109Character/></FakeDataLoader>
      <FakeDataLoader><Kanji110Character/></FakeDataLoader>
      <FakeDataLoader><Kanji111Character/></FakeDataLoader>
      <FakeDataLoader><Kanji112Character/></FakeDataLoader>
      <FakeDataLoader><Kanji113Character/></FakeDataLoader>
      <FakeDataLoader><Kanji114Character/></FakeDataLoader>
      <FakeDataLoader><Kanji115Character/></FakeDataLoader>
      <FakeDataLoader><Kanji116Character/></FakeDataLoader>
      <FakeDataLoader><Kanji117Character/></FakeDataLoader>
      <FakeDataLoader><Kanji118Character/></FakeDataLoader>
      <FakeDataLoader><Kanji119Character/></FakeDataLoader>
      <FakeDataLoader><Kanji120Character/></FakeDataLoader>
      <FakeDataLoader><Kanji121Character/></FakeDataLoader>
      <FakeDataLoader><Kanji122Character/></FakeDataLoader>
      <FakeDataLoader><Kanji123Character/></FakeDataLoader>
      <FakeDataLoader><Kanji124Character/></FakeDataLoader>
      <FakeDataLoader><Kanji125Character/></FakeDataLoader>
      <FakeDataLoader><Kanji126Character/></FakeDataLoader>
      <FakeDataLoader><Kanji127Character/></FakeDataLoader>
      <FakeDataLoader><Kanji128Character/></FakeDataLoader>
      <FakeDataLoader><Kanji129Character/></FakeDataLoader>
      <FakeDataLoader><Kanji130Character/></FakeDataLoader>
      <FakeDataLoader><Kanji131Character/></FakeDataLoader>
      <FakeDataLoader><Kanji132Character/></FakeDataLoader>
      <FakeDataLoader><Kanji133Character/></FakeDataLoader>
      <FakeDataLoader><Kanji134Character/></FakeDataLoader>
      <FakeDataLoader><Kanji135Character/></FakeDataLoader>
      <FakeDataLoader><Kanji136Character/></FakeDataLoader>
      <FakeDataLoader><Kanji137Character/></FakeDataLoader>
      <FakeDataLoader><Kanji138Character/></FakeDataLoader>
      <FakeDataLoader><Kanji139Character/></FakeDataLoader>
      <FakeDataLoader><Kanji140Character/></FakeDataLoader>
      <FakeDataLoader><Kanji141Character/></FakeDataLoader>
      <FakeDataLoader><Kanji142Character/></FakeDataLoader>
      <FakeDataLoader><Kanji143Character/></FakeDataLoader>
      <FakeDataLoader><Kanji144Character/></FakeDataLoader>
      <FakeDataLoader><Kanji145Character/></FakeDataLoader>
      <FakeDataLoader><Kanji146Character/></FakeDataLoader>
      <FakeDataLoader><Kanji147Character/></FakeDataLoader>
      <FakeDataLoader><Kanji148Character/></FakeDataLoader>
      <FakeDataLoader><Kanji149Character/></FakeDataLoader>
      <FakeDataLoader><Kanji150Character/></FakeDataLoader>
      <FakeDataLoader><Kanji151Character/></FakeDataLoader>
      <FakeDataLoader><Kanji152Character/></FakeDataLoader>
      <FakeDataLoader><Kanji153Character/></FakeDataLoader>
      <FakeDataLoader><Kanji154Character/></FakeDataLoader>
      <FakeDataLoader><Kanji155Character/></FakeDataLoader>
      <FakeDataLoader><Kanji156Character/></FakeDataLoader>
      <FakeDataLoader><Kanji157Character/></FakeDataLoader>
      <FakeDataLoader><Kanji158Character/></FakeDataLoader>
      <FakeDataLoader><Kanji159Character/></FakeDataLoader>
      <FakeDataLoader><Kanji160Character/></FakeDataLoader>
      <FakeDataLoader><Kanji161Character/></FakeDataLoader>
      <FakeDataLoader><Kanji162Character/></FakeDataLoader>
      <FakeDataLoader><Kanji163Character/></FakeDataLoader>
      <FakeDataLoader><Kanji164Character/></FakeDataLoader>
      <FakeDataLoader><Kanji165Character/></FakeDataLoader>
      <FakeDataLoader><Kanji166Character/></FakeDataLoader>
      <FakeDataLoader><Kanji167Character/></FakeDataLoader>
      <FakeDataLoader><Kanji168Character/></FakeDataLoader>
      <FakeDataLoader><Kanji169Character/></FakeDataLoader>
      <FakeDataLoader><Kanji170Character/></FakeDataLoader>
      <FakeDataLoader><Kanji171Character/></FakeDataLoader>
      <FakeDataLoader><Kanji172Character/></FakeDataLoader>
      <FakeDataLoader><Kanji173Character/></FakeDataLoader>
      <FakeDataLoader><Kanji174Character/></FakeDataLoader>
      <FakeDataLoader><Kanji175Character/></FakeDataLoader>
      <FakeDataLoader><Kanji176Character/></FakeDataLoader>
      <FakeDataLoader><Kanji177Character/></FakeDataLoader>
      <FakeDataLoader><Kanji178Character/></FakeDataLoader>
      <FakeDataLoader><Kanji179Character/></FakeDataLoader>
      <FakeDataLoader><Kanji180Character/></FakeDataLoader>
      <FakeDataLoader><Kanji181Character/></FakeDataLoader>
      <FakeDataLoader><Kanji182Character/></FakeDataLoader>
      <FakeDataLoader><Kanji183Character/></FakeDataLoader>
      <FakeDataLoader><Kanji184Character/></FakeDataLoader>
      <FakeDataLoader><Kanji185Character/></FakeDataLoader>
      <FakeDataLoader><Kanji186Character/></FakeDataLoader>
      <FakeDataLoader><Kanji187Character/></FakeDataLoader>
      <FakeDataLoader><Kanji188Character/></FakeDataLoader>
      <FakeDataLoader><Kanji189Character/></FakeDataLoader>
      <FakeDataLoader><Kanji190Character/></FakeDataLoader>
      <FakeDataLoader><Kanji191Character/></FakeDataLoader>
      <FakeDataLoader><Kanji192Character/></FakeDataLoader>
      <FakeDataLoader><Kanji193Character/></FakeDataLoader>
      <FakeDataLoader><Kanji194Character/></FakeDataLoader>
      <FakeDataLoader><Kanji195Character/></FakeDataLoader>
      <FakeDataLoader><Kanji196Character/></FakeDataLoader>
      <FakeDataLoader><Kanji197Character/></FakeDataLoader>
      <FakeDataLoader><Kanji198Character/></FakeDataLoader>
      <FakeDataLoader><Kanji199Character/></FakeDataLoader>
      <FakeDataLoader><Kanji200Character/></FakeDataLoader>
      <FakeDataLoader><Kanji201Character/></FakeDataLoader>
      <FakeDataLoader><Kanji202Character/></FakeDataLoader>
      <FakeDataLoader><Kanji203Character/></FakeDataLoader>
      <FakeDataLoader><Kanji204Character/></FakeDataLoader>
      <FakeDataLoader><Kanji205Character/></FakeDataLoader>
      <FakeDataLoader><Kanji206Character/></FakeDataLoader>
      <FakeDataLoader><Kanji207Character/></FakeDataLoader>
      <FakeDataLoader><Kanji208Character/></FakeDataLoader>
      <FakeDataLoader><Kanji209Character/></FakeDataLoader>
      <FakeDataLoader><Kanji210Character/></FakeDataLoader>
      <FakeDataLoader><Kanji211Character/></FakeDataLoader>
      <FakeDataLoader><Kanji212Character/></FakeDataLoader>
      <FakeDataLoader><Kanji213Character/></FakeDataLoader>
      <FakeDataLoader><Kanji214Character/></FakeDataLoader>
      <FakeDataLoader><Kanji215Character/></FakeDataLoader>
      <FakeDataLoader><Kanji216Character/></FakeDataLoader>
      <FakeDataLoader><Kanji217Character/></FakeDataLoader>
      <FakeDataLoader><Kanji218Character/></FakeDataLoader>
      <FakeDataLoader><Kanji219Character/></FakeDataLoader>
      <FakeDataLoader><Kanji220Character/></FakeDataLoader>
      <FakeDataLoader><Kanji221Character/></FakeDataLoader>
      <FakeDataLoader><Kanji222Character/></FakeDataLoader>
      <FakeDataLoader><Kanji223Character/></FakeDataLoader>
      <FakeDataLoader><Kanji224Character/></FakeDataLoader>
      <FakeDataLoader><Kanji225Character/></FakeDataLoader>
      <FakeDataLoader><Kanji226Character/></FakeDataLoader>
      <FakeDataLoader><Kanji227Character/></FakeDataLoader>
      <FakeDataLoader><Kanji228Character/></FakeDataLoader>
      <FakeDataLoader><Kanji229Character/></FakeDataLoader>
      <FakeDataLoader><Kanji230Character/></FakeDataLoader>
      <FakeDataLoader><Kanji231Character/></FakeDataLoader>
      <FakeDataLoader><Kanji232Character/></FakeDataLoader>
      <FakeDataLoader><Kanji233Character/></FakeDataLoader>
      <FakeDataLoader><Kanji234Character/></FakeDataLoader>
      <FakeDataLoader><Kanji235Character/></FakeDataLoader>
      <FakeDataLoader><Kanji236Character/></FakeDataLoader>
      <FakeDataLoader><Kanji237Character/></FakeDataLoader>
      <FakeDataLoader><Kanji238Character/></FakeDataLoader>
      <FakeDataLoader><Kanji239Character/></FakeDataLoader>
      <FakeDataLoader><Kanji240Character/></FakeDataLoader>
      <FakeDataLoader><Kanji241Character/></FakeDataLoader>
      <FakeDataLoader><Kanji242Character/></FakeDataLoader>
      <FakeDataLoader><Kanji243Character/></FakeDataLoader>
      <FakeDataLoader><Kanji244Character/></FakeDataLoader>
      <FakeDataLoader><Kanji245Character/></FakeDataLoader>
      <FakeDataLoader><Kanji246Character/></FakeDataLoader>
      <FakeDataLoader><Kanji247Character/></FakeDataLoader>
      <FakeDataLoader><Kanji248Character/></FakeDataLoader>
      <FakeDataLoader><Kanji249Character/></FakeDataLoader>
      <FakeDataLoader><Kanji250Character/></FakeDataLoader>
      <FakeDataLoader><Kanji251Character/></FakeDataLoader>
      <FakeDataLoader><Kanji252Character/></FakeDataLoader>
      <FakeDataLoader><Kanji253Character/></FakeDataLoader>
      <FakeDataLoader><Kanji254Character/></FakeDataLoader>
      <FakeDataLoader><Kanji255Character/></FakeDataLoader>
      <FakeDataLoader><Kanji256Character/></FakeDataLoader>
      <FakeDataLoader><Kanji257Character/></FakeDataLoader>
      <FakeDataLoader><Kanji258Character/></FakeDataLoader>
      <FakeDataLoader><Kanji259Character/></FakeDataLoader>
      <FakeDataLoader><Kanji260Character/></FakeDataLoader>
      <FakeDataLoader><Kanji261Character/></FakeDataLoader>
      <FakeDataLoader><Kanji262Character/></FakeDataLoader>
      <FakeDataLoader><Kanji263Character/></FakeDataLoader>
      <FakeDataLoader><Kanji264Character/></FakeDataLoader>
      <FakeDataLoader><Kanji265Character/></FakeDataLoader>
      <FakeDataLoader><Kanji266Character/></FakeDataLoader>
      <FakeDataLoader><Kanji267Character/></FakeDataLoader>
      <FakeDataLoader><Kanji268Character/></FakeDataLoader>
      <FakeDataLoader><Kanji269Character/></FakeDataLoader>
      <FakeDataLoader><Kanji270Character/></FakeDataLoader>
      <FakeDataLoader><Kanji271Character/></FakeDataLoader>
      <FakeDataLoader><Kanji272Character/></FakeDataLoader>
      <FakeDataLoader><Kanji273Character/></FakeDataLoader>
      <FakeDataLoader><Kanji274Character/></FakeDataLoader>
      <FakeDataLoader><Kanji275Character/></FakeDataLoader>
      <FakeDataLoader><Kanji276Character/></FakeDataLoader>
      <FakeDataLoader><Kanji277Character/></FakeDataLoader>
      <FakeDataLoader><Kanji278Character/></FakeDataLoader>
      <FakeDataLoader><Kanji279Character/></FakeDataLoader>
      <FakeDataLoader><Kanji280Character/></FakeDataLoader>
      <FakeDataLoader><Kanji281Character/></FakeDataLoader>
      <FakeDataLoader><Kanji282Character/></FakeDataLoader>
      <FakeDataLoader><Kanji283Character/></FakeDataLoader>
      <FakeDataLoader><Kanji284Character/></FakeDataLoader>
      <FakeDataLoader><Kanji285Character/></FakeDataLoader>
      <FakeDataLoader><Kanji286Character/></FakeDataLoader>
      <FakeDataLoader><Kanji287Character/></FakeDataLoader>
      <FakeDataLoader><Kanji288Character/></FakeDataLoader>
      <FakeDataLoader><Kanji289Character/></FakeDataLoader>
      <FakeDataLoader><Kanji290Character/></FakeDataLoader>
      <FakeDataLoader><Kanji291Character/></FakeDataLoader>
      <FakeDataLoader><Kanji292Character/></FakeDataLoader>
      <FakeDataLoader><Kanji293Character/></FakeDataLoader>
      <FakeDataLoader><Kanji294Character/></FakeDataLoader>
      <FakeDataLoader><Kanji295Character/></FakeDataLoader>
      <FakeDataLoader><Kanji296Character/></FakeDataLoader>
      <FakeDataLoader><Kanji297Character/></FakeDataLoader>
      <FakeDataLoader><Kanji298Character/></FakeDataLoader>
      <FakeDataLoader><Kanji299Character/></FakeDataLoader>
      <FakeDataLoader><Kanji300Character/></FakeDataLoader>
      <FakeDataLoader><Kanji301Character/></FakeDataLoader>
      <FakeDataLoader><Kanji302Character/></FakeDataLoader>
      <FakeDataLoader><Kanji303Character/></FakeDataLoader>
      <FakeDataLoader><Kanji304Character/></FakeDataLoader>
      <FakeDataLoader><Kanji305Character/></FakeDataLoader>
      <FakeDataLoader><Kanji306Character/></FakeDataLoader>
      <FakeDataLoader><Kanji307Character/></FakeDataLoader>
      <FakeDataLoader><Kanji308Character/></FakeDataLoader>
      <FakeDataLoader><Kanji309Character/></FakeDataLoader>
      <FakeDataLoader><Kanji310Character/></FakeDataLoader>
      <FakeDataLoader><Kanji311Character/></FakeDataLoader>
      <FakeDataLoader><Kanji312Character/></FakeDataLoader>
      <FakeDataLoader><Kanji313Character/></FakeDataLoader>
      <FakeDataLoader><Kanji314Character/></FakeDataLoader>
      <FakeDataLoader><Kanji315Character/></FakeDataLoader>
      <FakeDataLoader><Kanji316Character/></FakeDataLoader>
      <FakeDataLoader><Kanji317Character/></FakeDataLoader>
      <FakeDataLoader><Kanji318Character/></FakeDataLoader>
      <FakeDataLoader><Kanji319Character/></FakeDataLoader>
      <FakeDataLoader><Kanji320Character/></FakeDataLoader>
      <FakeDataLoader><Kanji321Character/></FakeDataLoader>
      <FakeDataLoader><Kanji322Character/></FakeDataLoader>
      <FakeDataLoader><Kanji323Character/></FakeDataLoader>
      <FakeDataLoader><Kanji324Character/></FakeDataLoader>
      <FakeDataLoader><Kanji325Character/></FakeDataLoader>
      <FakeDataLoader><Kanji326Character/></FakeDataLoader>
      <FakeDataLoader><Kanji327Character/></FakeDataLoader>
      <FakeDataLoader><Kanji328Character/></FakeDataLoader>
      <FakeDataLoader><Kanji329Character/></FakeDataLoader>
      <FakeDataLoader><Kanji330Character/></FakeDataLoader>
      <FakeDataLoader><Kanji331Character/></FakeDataLoader>
      <FakeDataLoader><Kanji332Character/></FakeDataLoader>
      <FakeDataLoader><Kanji333Character/></FakeDataLoader>
      <FakeDataLoader><Kanji334Character/></FakeDataLoader>
      <FakeDataLoader><Kanji335Character/></FakeDataLoader>
      <FakeDataLoader><Kanji336Character/></FakeDataLoader>
      <FakeDataLoader><Kanji337Character/></FakeDataLoader>
      <FakeDataLoader><Kanji338Character/></FakeDataLoader>
      <FakeDataLoader><Kanji339Character/></FakeDataLoader>
      <FakeDataLoader><Kanji340Character/></FakeDataLoader>
      <FakeDataLoader><Kanji341Character/></FakeDataLoader>
      <FakeDataLoader><Kanji342Character/></FakeDataLoader>
      <FakeDataLoader><Kanji343Character/></FakeDataLoader>
      <FakeDataLoader><Kanji344Character/></FakeDataLoader>
      <FakeDataLoader><Kanji345Character/></FakeDataLoader>
      <FakeDataLoader><Kanji346Character/></FakeDataLoader>
      <FakeDataLoader><Kanji347Character/></FakeDataLoader>
      <FakeDataLoader><Kanji348Character/></FakeDataLoader>
      <FakeDataLoader><Kanji349Character/></FakeDataLoader>
      <FakeDataLoader><Kanji350Character/></FakeDataLoader>
      <FakeDataLoader><Kanji351Character/></FakeDataLoader>
      <FakeDataLoader><Kanji352Character/></FakeDataLoader>
      <FakeDataLoader><Kanji353Character/></FakeDataLoader>
      <FakeDataLoader><Kanji354Character/></FakeDataLoader>
      <FakeDataLoader><Kanji355Character/></FakeDataLoader>
      <FakeDataLoader><Kanji356Character/></FakeDataLoader>
      <FakeDataLoader><Kanji357Character/></FakeDataLoader>
      <FakeDataLoader><Kanji358Character/></FakeDataLoader>
      <FakeDataLoader><Kanji359Character/></FakeDataLoader>
      <FakeDataLoader><Kanji360Character/></FakeDataLoader>
      <FakeDataLoader><Kanji361Character/></FakeDataLoader>
      <FakeDataLoader><Kanji362Character/></FakeDataLoader>
      <FakeDataLoader><Kanji363Character/></FakeDataLoader>
      <FakeDataLoader><Kanji364Character/></FakeDataLoader>
      <FakeDataLoader><Kanji365Character/></FakeDataLoader>
      <FakeDataLoader><Kanji366Character/></FakeDataLoader>
      <FakeDataLoader><Kanji367Character/></FakeDataLoader>
      <FakeDataLoader><Kanji368Character/></FakeDataLoader>
      <FakeDataLoader><Kanji369Character/></FakeDataLoader>
      <FakeDataLoader><Kanji370Character/></FakeDataLoader>
      <FakeDataLoader><Kanji371Character/></FakeDataLoader>
      <FakeDataLoader><Kanji372Character/></FakeDataLoader>
      <FakeDataLoader><Kanji373Character/></FakeDataLoader>
      <FakeDataLoader><Kanji374Character/></FakeDataLoader>
      <FakeDataLoader><Kanji375Character/></FakeDataLoader>
      <FakeDataLoader><Kanji376Character/></FakeDataLoader>
      <FakeDataLoader><Kanji377Character/></FakeDataLoader>
      <FakeDataLoader><Kanji378Character/></FakeDataLoader>
      <FakeDataLoader><Kanji379Character/></FakeDataLoader>
      <FakeDataLoader><Kanji380Character/></FakeDataLoader>
      <FakeDataLoader><Kanji381Character/></FakeDataLoader>
      <FakeDataLoader><Kanji382Character/></FakeDataLoader>
      <FakeDataLoader><Kanji383Character/></FakeDataLoader>
      <FakeDataLoader><Kanji384Character/></FakeDataLoader>
      <FakeDataLoader><Kanji385Character/></FakeDataLoader>
      <FakeDataLoader><Kanji386Character/></FakeDataLoader>
      <FakeDataLoader><Kanji387Character/></FakeDataLoader>
      <FakeDataLoader><Kanji388Character/></FakeDataLoader>
      <FakeDataLoader><Kanji389Character/></FakeDataLoader>
      <FakeDataLoader><Kanji390Character/></FakeDataLoader>
      <FakeDataLoader><Kanji391Character/></FakeDataLoader>
      <FakeDataLoader><Kanji392Character/></FakeDataLoader>
      <FakeDataLoader><Kanji393Character/></FakeDataLoader>
      <FakeDataLoader><Kanji394Character/></FakeDataLoader>
      <FakeDataLoader><Kanji395Character/></FakeDataLoader>
      <FakeDataLoader><Kanji396Character/></FakeDataLoader>
      <FakeDataLoader><Kanji397Character/></FakeDataLoader>
      <FakeDataLoader><Kanji398Character/></FakeDataLoader>
      <FakeDataLoader><Kanji399Character/></FakeDataLoader>
      <FakeDataLoader><Kanji400Character/></FakeDataLoader>
      <FakeDataLoader><Kanji401Character/></FakeDataLoader>
      <FakeDataLoader><Kanji402Character/></FakeDataLoader>
      <FakeDataLoader><Kanji403Character/></FakeDataLoader>
      <FakeDataLoader><Kanji404Character/></FakeDataLoader>
      <FakeDataLoader><Kanji405Character/></FakeDataLoader>
      <FakeDataLoader><Kanji406Character/></FakeDataLoader>
      <FakeDataLoader><Kanji407Character/></FakeDataLoader>
      <FakeDataLoader><Kanji408Character/></FakeDataLoader>
      <FakeDataLoader><Kanji409Character/></FakeDataLoader>
      <FakeDataLoader><Kanji410Character/></FakeDataLoader>
      <FakeDataLoader><Kanji411Character/></FakeDataLoader>
      <FakeDataLoader><Kanji412Character/></FakeDataLoader>
      <FakeDataLoader><Kanji413Character/></FakeDataLoader>
      <FakeDataLoader><Kanji414Character/></FakeDataLoader>
      <FakeDataLoader><Kanji415Character/></FakeDataLoader>
      <FakeDataLoader><Kanji416Character/></FakeDataLoader>
      <FakeDataLoader><Kanji417Character/></FakeDataLoader>
      <FakeDataLoader><Kanji418Character/></FakeDataLoader>
      <FakeDataLoader><Kanji419Character/></FakeDataLoader>
      <FakeDataLoader><Kanji420Character/></FakeDataLoader>
      <FakeDataLoader><Kanji421Character/></FakeDataLoader>
      <FakeDataLoader><Kanji422Character/></FakeDataLoader>
      <FakeDataLoader><Kanji423Character/></FakeDataLoader>
      <FakeDataLoader><Kanji424Character/></FakeDataLoader>
      <FakeDataLoader><Kanji425Character/></FakeDataLoader>
      <FakeDataLoader><Kanji426Character/></FakeDataLoader>
      <FakeDataLoader><Kanji427Character/></FakeDataLoader>
      <FakeDataLoader><Kanji428Character/></FakeDataLoader>
      <FakeDataLoader><Kanji429Character/></FakeDataLoader>
      <FakeDataLoader><Kanji430Character/></FakeDataLoader>
      <FakeDataLoader><Kanji431Character/></FakeDataLoader>
      <FakeDataLoader><Kanji432Character/></FakeDataLoader>
      <FakeDataLoader><Kanji433Character/></FakeDataLoader>
      <FakeDataLoader><Kanji434Character/></FakeDataLoader>
      <FakeDataLoader><Kanji435Character/></FakeDataLoader>
      <FakeDataLoader><Kanji436Character/></FakeDataLoader>
      <FakeDataLoader><Kanji437Character/></FakeDataLoader>
      <FakeDataLoader><Kanji438Character/></FakeDataLoader>
      <FakeDataLoader><Kanji439Character/></FakeDataLoader>
      <FakeDataLoader><Kanji440Character/></FakeDataLoader>
      <FakeDataLoader><Kanji441Character/></FakeDataLoader>
      <FakeDataLoader><Kanji442Character/></FakeDataLoader>
      <FakeDataLoader><Kanji443Character/></FakeDataLoader>
      <FakeDataLoader><Kanji444Character/></FakeDataLoader>
      <FakeDataLoader><Kanji445Character/></FakeDataLoader>
      <FakeDataLoader><Kanji446Character/></FakeDataLoader>
      <FakeDataLoader><Kanji447Character/></FakeDataLoader>
      <FakeDataLoader><Kanji448Character/></FakeDataLoader>
      <FakeDataLoader><Kanji449Character/></FakeDataLoader>
      <FakeDataLoader><Kanji450Character/></FakeDataLoader>
      <FakeDataLoader><Kanji451Character/></FakeDataLoader>
      <FakeDataLoader><Kanji452Character/></FakeDataLoader>
      <FakeDataLoader><Kanji453Character/></FakeDataLoader>
      <FakeDataLoader><Kanji454Character/></FakeDataLoader>
      <FakeDataLoader><Kanji455Character/></FakeDataLoader>
      <FakeDataLoader><Kanji456Character/></FakeDataLoader>
      <FakeDataLoader><Kanji457Character/></FakeDataLoader>
      <FakeDataLoader><Kanji458Character/></FakeDataLoader>
      <FakeDataLoader><Kanji459Character/></FakeDataLoader>
      <FakeDataLoader><Kanji460Character/></FakeDataLoader>
      <FakeDataLoader><Kanji461Character/></FakeDataLoader>
      <FakeDataLoader><Kanji462Character/></FakeDataLoader>
      <FakeDataLoader><Kanji463Character/></FakeDataLoader>
      <FakeDataLoader><Kanji464Character/></FakeDataLoader>
      <FakeDataLoader><Kanji465Character/></FakeDataLoader>
      <FakeDataLoader><Kanji466Character/></FakeDataLoader>
      <FakeDataLoader><Kanji467Character/></FakeDataLoader>
      <FakeDataLoader><Kanji468Character/></FakeDataLoader>
      <FakeDataLoader><Kanji469Character/></FakeDataLoader>
      <FakeDataLoader><Kanji470Character/></FakeDataLoader>
      <FakeDataLoader><Kanji471Character/></FakeDataLoader>
      <FakeDataLoader><Kanji472Character/></FakeDataLoader>
      <FakeDataLoader><Kanji473Character/></FakeDataLoader>
      <FakeDataLoader><Kanji474Character/></FakeDataLoader>
      <FakeDataLoader><Kanji475Character/></FakeDataLoader>
      <FakeDataLoader><Kanji476Character/></FakeDataLoader>
      <FakeDataLoader><Kanji477Character/></FakeDataLoader>
      <FakeDataLoader><Kanji478Character/></FakeDataLoader>
      <FakeDataLoader><Kanji479Character/></FakeDataLoader>
      <FakeDataLoader><Kanji480Character/></FakeDataLoader>
      <FakeDataLoader><Kanji481Character/></FakeDataLoader>
      <FakeDataLoader><Kanji482Character/></FakeDataLoader>
      <FakeDataLoader><Kanji483Character/></FakeDataLoader>
      <FakeDataLoader><Kanji484Character/></FakeDataLoader>
      <FakeDataLoader><Kanji485Character/></FakeDataLoader>
      <FakeDataLoader><Kanji486Character/></FakeDataLoader>
      <FakeDataLoader><Kanji487Character/></FakeDataLoader>
      <FakeDataLoader><Kanji488Character/></FakeDataLoader>
      <FakeDataLoader><Kanji489Character/></FakeDataLoader>
      <FakeDataLoader><Kanji490Character/></FakeDataLoader>
      <FakeDataLoader><Kanji491Character/></FakeDataLoader>
      <FakeDataLoader><Kanji492Character/></FakeDataLoader>
      <FakeDataLoader><Kanji493Character/></FakeDataLoader>
      <FakeDataLoader><Kanji494Character/></FakeDataLoader>
      <FakeDataLoader><Kanji495Character/></FakeDataLoader>
      <FakeDataLoader><Kanji496Character/></FakeDataLoader>
      <FakeDataLoader><Kanji497Character/></FakeDataLoader>
      <FakeDataLoader><Kanji498Character/></FakeDataLoader>
      <FakeDataLoader><Kanji499Character/></FakeDataLoader>
      <FakeDataLoader><Kanji500Character/></FakeDataLoader>
      <FakeDataLoader><Kanji501Character/></FakeDataLoader>
      <FakeDataLoader><Kanji502Character/></FakeDataLoader>
      <FakeDataLoader><Kanji503Character/></FakeDataLoader>
      <FakeDataLoader><Kanji504Character/></FakeDataLoader>
      <FakeDataLoader><Kanji505Character/></FakeDataLoader>
      <FakeDataLoader><Kanji506Character/></FakeDataLoader>
      <FakeDataLoader><Kanji507Character/></FakeDataLoader>
      <FakeDataLoader><Kanji508Character/></FakeDataLoader>
      <FakeDataLoader><Kanji509Character/></FakeDataLoader>
      <FakeDataLoader><Kanji510Character/></FakeDataLoader>
      <FakeDataLoader><Kanji511Character/></FakeDataLoader>
      <FakeDataLoader><Kanji512Character/></FakeDataLoader>
      <FakeDataLoader><Kanji513Character/></FakeDataLoader>
      <FakeDataLoader><Kanji514Character/></FakeDataLoader>
      <FakeDataLoader><Kanji515Character/></FakeDataLoader>
      <FakeDataLoader><Kanji516Character/></FakeDataLoader>
      <FakeDataLoader><Kanji517Character/></FakeDataLoader>
      <FakeDataLoader><Kanji518Character/></FakeDataLoader>
      <FakeDataLoader><Kanji519Character/></FakeDataLoader>
      <FakeDataLoader><Kanji520Character/></FakeDataLoader>
      <FakeDataLoader><Kanji521Character/></FakeDataLoader>
      <FakeDataLoader><Kanji522Character/></FakeDataLoader>
      <FakeDataLoader><Kanji523Character/></FakeDataLoader>
      <FakeDataLoader><Kanji524Character/></FakeDataLoader>
      <FakeDataLoader><Kanji525Character/></FakeDataLoader>
      <FakeDataLoader><Kanji526Character/></FakeDataLoader>
      <FakeDataLoader><Kanji527Character/></FakeDataLoader>
      <FakeDataLoader><Kanji528Character/></FakeDataLoader>
      <FakeDataLoader><Kanji529Character/></FakeDataLoader>
      <FakeDataLoader><Kanji530Character/></FakeDataLoader>
      <FakeDataLoader><Kanji531Character/></FakeDataLoader>
      <FakeDataLoader><Kanji532Character/></FakeDataLoader>
      <FakeDataLoader><Kanji533Character/></FakeDataLoader>
      <FakeDataLoader><Kanji534Character/></FakeDataLoader>
      <FakeDataLoader><Kanji535Character/></FakeDataLoader>
      <FakeDataLoader><Kanji536Character/></FakeDataLoader>
      <FakeDataLoader><Kanji537Character/></FakeDataLoader>
      <FakeDataLoader><Kanji538Character/></FakeDataLoader>
      <FakeDataLoader><Kanji539Character/></FakeDataLoader>
      <FakeDataLoader><Kanji540Character/></FakeDataLoader>
      <FakeDataLoader><Kanji541Character/></FakeDataLoader>
      <FakeDataLoader><Kanji542Character/></FakeDataLoader>
      <FakeDataLoader><Kanji543Character/></FakeDataLoader>
      <FakeDataLoader><Kanji544Character/></FakeDataLoader>
      <FakeDataLoader><Kanji545Character/></FakeDataLoader>
      <FakeDataLoader><Kanji546Character/></FakeDataLoader>
      <FakeDataLoader><Kanji547Character/></FakeDataLoader>
      <FakeDataLoader><Kanji548Character/></FakeDataLoader>
      <FakeDataLoader><Kanji549Character/></FakeDataLoader>
      <FakeDataLoader><Kanji550Character/></FakeDataLoader>
      <FakeDataLoader><Kanji551Character/></FakeDataLoader>
      <FakeDataLoader><Kanji552Character/></FakeDataLoader>
      <FakeDataLoader><Kanji553Character/></FakeDataLoader>
      <FakeDataLoader><Kanji554Character/></FakeDataLoader>
      <FakeDataLoader><Kanji555Character/></FakeDataLoader>
      <FakeDataLoader><Kanji556Character/></FakeDataLoader>
      <FakeDataLoader><Kanji557Character/></FakeDataLoader>
      <FakeDataLoader><Kanji558Character/></FakeDataLoader>
      <FakeDataLoader><Kanji559Character/></FakeDataLoader>
      <FakeDataLoader><Kanji560Character/></FakeDataLoader>
      <FakeDataLoader><Kanji561Character/></FakeDataLoader>
      <FakeDataLoader><Kanji562Character/></FakeDataLoader>
      <FakeDataLoader><Kanji563Character/></FakeDataLoader>
      <FakeDataLoader><Kanji564Character/></FakeDataLoader>
      <FakeDataLoader><Kanji565Character/></FakeDataLoader>
      <FakeDataLoader><Kanji566Character/></FakeDataLoader>
      <FakeDataLoader><Kanji567Character/></FakeDataLoader>
      <FakeDataLoader><Kanji568Character/></FakeDataLoader>
      <FakeDataLoader><Kanji569Character/></FakeDataLoader>
      <FakeDataLoader><Kanji570Character/></FakeDataLoader>
      <FakeDataLoader><Kanji571Character/></FakeDataLoader>
      <FakeDataLoader><Kanji572Character/></FakeDataLoader>
      <FakeDataLoader><Kanji573Character/></FakeDataLoader>
      <FakeDataLoader><Kanji574Character/></FakeDataLoader>
      <FakeDataLoader><Kanji575Character/></FakeDataLoader>
      <FakeDataLoader><Kanji576Character/></FakeDataLoader>
      <FakeDataLoader><Kanji577Character/></FakeDataLoader>
      <FakeDataLoader><Kanji578Character/></FakeDataLoader>
      <FakeDataLoader><Kanji579Character/></FakeDataLoader>
      <FakeDataLoader><Kanji580Character/></FakeDataLoader>
      <FakeDataLoader><Kanji581Character/></FakeDataLoader>
      <FakeDataLoader><Kanji582Character/></FakeDataLoader>
      <FakeDataLoader><Kanji583Character/></FakeDataLoader>
      <FakeDataLoader><Kanji584Character/></FakeDataLoader>
      <FakeDataLoader><Kanji585Character/></FakeDataLoader>
      <FakeDataLoader><Kanji586Character/></FakeDataLoader>
      <FakeDataLoader><Kanji587Character/></FakeDataLoader>
      <FakeDataLoader><Kanji588Character/></FakeDataLoader>
      <FakeDataLoader><Kanji589Character/></FakeDataLoader>
      <FakeDataLoader><Kanji590Character/></FakeDataLoader>
      <FakeDataLoader><Kanji591Character/></FakeDataLoader>
      <FakeDataLoader><Kanji592Character/></FakeDataLoader>
      <FakeDataLoader><Kanji593Character/></FakeDataLoader>
      <FakeDataLoader><Kanji594Character/></FakeDataLoader>
      <FakeDataLoader><Kanji595Character/></FakeDataLoader>
      <FakeDataLoader><Kanji596Character/></FakeDataLoader>
      <FakeDataLoader><Kanji597Character/></FakeDataLoader>
      <FakeDataLoader><Kanji598Character/></FakeDataLoader>
      <FakeDataLoader><Kanji599Character/></FakeDataLoader>
      <FakeDataLoader><Kanji600Character/></FakeDataLoader>
      <FakeDataLoader><Kanji601Character/></FakeDataLoader>
      <FakeDataLoader><Kanji602Character/></FakeDataLoader>
      <FakeDataLoader><Kanji603Character/></FakeDataLoader>
      <FakeDataLoader><Kanji604Character/></FakeDataLoader>
      <FakeDataLoader><Kanji605Character/></FakeDataLoader>
      <FakeDataLoader><Kanji606Character/></FakeDataLoader>
      <FakeDataLoader><Kanji607Character/></FakeDataLoader>
      <FakeDataLoader><Kanji608Character/></FakeDataLoader>
      <FakeDataLoader><Kanji609Character/></FakeDataLoader>
      <FakeDataLoader><Kanji610Character/></FakeDataLoader>
      <FakeDataLoader><Kanji611Character/></FakeDataLoader>
      <FakeDataLoader><Kanji612Character/></FakeDataLoader>
      <FakeDataLoader><Kanji613Character/></FakeDataLoader>
      <FakeDataLoader><Kanji614Character/></FakeDataLoader>
      <FakeDataLoader><Kanji615Character/></FakeDataLoader>
      <FakeDataLoader><Kanji616Character/></FakeDataLoader>
      <FakeDataLoader><Kanji617Character/></FakeDataLoader>
      <FakeDataLoader><Kanji618Character/></FakeDataLoader>
      <FakeDataLoader><Kanji619Character/></FakeDataLoader>
      <FakeDataLoader><Kanji620Character/></FakeDataLoader>
      <FakeDataLoader><Kanji621Character/></FakeDataLoader>
      <FakeDataLoader><Kanji622Character/></FakeDataLoader>
      <FakeDataLoader><Kanji623Character/></FakeDataLoader>
      <FakeDataLoader><Kanji624Character/></FakeDataLoader>
      <FakeDataLoader><Kanji625Character/></FakeDataLoader>
      <FakeDataLoader><Kanji626Character/></FakeDataLoader>
      <FakeDataLoader><Kanji627Character/></FakeDataLoader>
      <FakeDataLoader><Kanji628Character/></FakeDataLoader>
      <FakeDataLoader><Kanji629Character/></FakeDataLoader>
      <FakeDataLoader><Kanji630Character/></FakeDataLoader>
      <FakeDataLoader><Kanji631Character/></FakeDataLoader>
      <FakeDataLoader><Kanji632Character/></FakeDataLoader>
      <FakeDataLoader><Kanji633Character/></FakeDataLoader>
      <FakeDataLoader><Kanji634Character/></FakeDataLoader>
      <FakeDataLoader><Kanji635Character/></FakeDataLoader>
      <FakeDataLoader><Kanji636Character/></FakeDataLoader>
      <FakeDataLoader><Kanji637Character/></FakeDataLoader>
      <FakeDataLoader><Kanji638Character/></FakeDataLoader>
      <FakeDataLoader><Kanji639Character/></FakeDataLoader>
      <FakeDataLoader><Kanji640Character/></FakeDataLoader>
      <FakeDataLoader><Kanji641Character/></FakeDataLoader>
      <FakeDataLoader><Kanji642Character/></FakeDataLoader>
      <FakeDataLoader><Kanji643Character/></FakeDataLoader>
      <FakeDataLoader><Kanji644Character/></FakeDataLoader>
      <FakeDataLoader><Kanji645Character/></FakeDataLoader>
      <FakeDataLoader><Kanji646Character/></FakeDataLoader>
      <FakeDataLoader><Kanji647Character/></FakeDataLoader>
      <FakeDataLoader><Kanji648Character/></FakeDataLoader>
      <FakeDataLoader><Kanji649Character/></FakeDataLoader>
      <FakeDataLoader><Kanji650Character/></FakeDataLoader>
      <FakeDataLoader><Kanji651Character/></FakeDataLoader>
      <FakeDataLoader><Kanji652Character/></FakeDataLoader>
      <FakeDataLoader><Kanji653Character/></FakeDataLoader>
      <FakeDataLoader><Kanji654Character/></FakeDataLoader>
      <FakeDataLoader><Kanji655Character/></FakeDataLoader>
      <FakeDataLoader><Kanji656Character/></FakeDataLoader>
      <FakeDataLoader><Kanji657Character/></FakeDataLoader>
      <FakeDataLoader><Kanji658Character/></FakeDataLoader>
      <FakeDataLoader><Kanji659Character/></FakeDataLoader>
      <FakeDataLoader><Kanji660Character/></FakeDataLoader>
      <FakeDataLoader><Kanji661Character/></FakeDataLoader>
      <FakeDataLoader><Kanji662Character/></FakeDataLoader>
      <FakeDataLoader><Kanji663Character/></FakeDataLoader>
      <FakeDataLoader><Kanji664Character/></FakeDataLoader>
      <FakeDataLoader><Kanji665Character/></FakeDataLoader>
      <FakeDataLoader><Kanji666Character/></FakeDataLoader>
      <FakeDataLoader><Kanji667Character/></FakeDataLoader>
      <FakeDataLoader><Kanji668Character/></FakeDataLoader>
      <FakeDataLoader><Kanji669Character/></FakeDataLoader>
      <FakeDataLoader><Kanji670Character/></FakeDataLoader>
      <FakeDataLoader><Kanji671Character/></FakeDataLoader>
      <FakeDataLoader><Kanji672Character/></FakeDataLoader>
      <FakeDataLoader><Kanji673Character/></FakeDataLoader>
      <FakeDataLoader><Kanji674Character/></FakeDataLoader>
      <FakeDataLoader><Kanji675Character/></FakeDataLoader>
      <FakeDataLoader><Kanji676Character/></FakeDataLoader>
      <FakeDataLoader><Kanji677Character/></FakeDataLoader>
      <FakeDataLoader><Kanji678Character/></FakeDataLoader>
      <FakeDataLoader><Kanji679Character/></FakeDataLoader>
      <FakeDataLoader><Kanji680Character/></FakeDataLoader>
      <FakeDataLoader><Kanji681Character/></FakeDataLoader>
      <FakeDataLoader><Kanji682Character/></FakeDataLoader>
      <FakeDataLoader><Kanji683Character/></FakeDataLoader>
      <FakeDataLoader><Kanji684Character/></FakeDataLoader>
      <FakeDataLoader><Kanji685Character/></FakeDataLoader>
      <FakeDataLoader><Kanji686Character/></FakeDataLoader>
      <FakeDataLoader><Kanji687Character/></FakeDataLoader>
      <FakeDataLoader><Kanji688Character/></FakeDataLoader>
      <FakeDataLoader><Kanji689Character/></FakeDataLoader>
      <FakeDataLoader><Kanji690Character/></FakeDataLoader>
      <FakeDataLoader><Kanji691Character/></FakeDataLoader>
      <FakeDataLoader><Kanji692Character/></FakeDataLoader>
      <FakeDataLoader><Kanji693Character/></FakeDataLoader>
      <FakeDataLoader><Kanji694Character/></FakeDataLoader>
      <FakeDataLoader><Kanji695Character/></FakeDataLoader>
      <FakeDataLoader><Kanji696Character/></FakeDataLoader>
      <FakeDataLoader><Kanji697Character/></FakeDataLoader>
      <FakeDataLoader><Kanji698Character/></FakeDataLoader>
      <FakeDataLoader><Kanji699Character/></FakeDataLoader>
      <FakeDataLoader><Kanji700Character/></FakeDataLoader>
      <FakeDataLoader><Kanji701Character/></FakeDataLoader>
      <FakeDataLoader><Kanji702Character/></FakeDataLoader>
      <FakeDataLoader><Kanji703Character/></FakeDataLoader>
      <FakeDataLoader><Kanji704Character/></FakeDataLoader>
      <FakeDataLoader><Kanji705Character/></FakeDataLoader>
      <FakeDataLoader><Kanji706Character/></FakeDataLoader>
      <FakeDataLoader><Kanji707Character/></FakeDataLoader>
      <FakeDataLoader><Kanji708Character/></FakeDataLoader>
      <FakeDataLoader><Kanji709Character/></FakeDataLoader>
      <FakeDataLoader><Kanji710Character/></FakeDataLoader>
      <FakeDataLoader><Kanji711Character/></FakeDataLoader>
      <FakeDataLoader><Kanji712Character/></FakeDataLoader>
      <FakeDataLoader><Kanji713Character/></FakeDataLoader>
      <FakeDataLoader><Kanji714Character/></FakeDataLoader>
      <FakeDataLoader><Kanji715Character/></FakeDataLoader>
      <FakeDataLoader><Kanji716Character/></FakeDataLoader>
      <FakeDataLoader><Kanji717Character/></FakeDataLoader>
      <FakeDataLoader><Kanji718Character/></FakeDataLoader>
      <FakeDataLoader><Kanji719Character/></FakeDataLoader>
      <FakeDataLoader><Kanji720Character/></FakeDataLoader>
      <FakeDataLoader><Kanji721Character/></FakeDataLoader>
      <FakeDataLoader><Kanji722Character/></FakeDataLoader>
      <FakeDataLoader><Kanji723Character/></FakeDataLoader>
      <FakeDataLoader><Kanji724Character/></FakeDataLoader>
      <FakeDataLoader><Kanji725Character/></FakeDataLoader>
      <FakeDataLoader><Kanji726Character/></FakeDataLoader>
      <FakeDataLoader><Kanji727Character/></FakeDataLoader>
      <FakeDataLoader><Kanji728Character/></FakeDataLoader>
      <FakeDataLoader><Kanji729Character/></FakeDataLoader>
      <FakeDataLoader><Kanji730Character/></FakeDataLoader>
      <FakeDataLoader><Kanji731Character/></FakeDataLoader>
      <FakeDataLoader><Kanji732Character/></FakeDataLoader>
      <FakeDataLoader><Kanji733Character/></FakeDataLoader>
      <FakeDataLoader><Kanji734Character/></FakeDataLoader>
      <FakeDataLoader><Kanji735Character/></FakeDataLoader>
      <FakeDataLoader><Kanji736Character/></FakeDataLoader>
      <FakeDataLoader><Kanji737Character/></FakeDataLoader>
      <FakeDataLoader><Kanji738Character/></FakeDataLoader>
      <FakeDataLoader><Kanji739Character/></FakeDataLoader>
      <FakeDataLoader><Kanji740Character/></FakeDataLoader>
      <FakeDataLoader><Kanji741Character/></FakeDataLoader>
      <FakeDataLoader><Kanji742Character/></FakeDataLoader>
      <FakeDataLoader><Kanji743Character/></FakeDataLoader>
      <FakeDataLoader><Kanji744Character/></FakeDataLoader>
      <FakeDataLoader><Kanji745Character/></FakeDataLoader>
      <FakeDataLoader><Kanji746Character/></FakeDataLoader>
      <FakeDataLoader><Kanji747Character/></FakeDataLoader>
      <FakeDataLoader><Kanji748Character/></FakeDataLoader>
      <FakeDataLoader><Kanji749Character/></FakeDataLoader>
      <FakeDataLoader><Kanji750Character/></FakeDataLoader>
      <FakeDataLoader><Kanji751Character/></FakeDataLoader>
      <FakeDataLoader><Kanji752Character/></FakeDataLoader>
      <FakeDataLoader><Kanji753Character/></FakeDataLoader>
      <FakeDataLoader><Kanji754Character/></FakeDataLoader>
      <FakeDataLoader><Kanji755Character/></FakeDataLoader>
      <FakeDataLoader><Kanji756Character/></FakeDataLoader>
      <FakeDataLoader><Kanji757Character/></FakeDataLoader>
      <FakeDataLoader><Kanji758Character/></FakeDataLoader>
      <FakeDataLoader><Kanji759Character/></FakeDataLoader>
      <FakeDataLoader><Kanji760Character/></FakeDataLoader>
      <FakeDataLoader><Kanji761Character/></FakeDataLoader>
      <FakeDataLoader><Kanji762Character/></FakeDataLoader>
      <FakeDataLoader><Kanji763Character/></FakeDataLoader>
      <FakeDataLoader><Kanji764Character/></FakeDataLoader>
      <FakeDataLoader><Kanji765Character/></FakeDataLoader>
      <FakeDataLoader><Kanji766Character/></FakeDataLoader>
      <FakeDataLoader><Kanji767Character/></FakeDataLoader>
      <FakeDataLoader><Kanji768Character/></FakeDataLoader>
      <FakeDataLoader><Kanji769Character/></FakeDataLoader>
      <FakeDataLoader><Kanji770Character/></FakeDataLoader>
      <FakeDataLoader><Kanji771Character/></FakeDataLoader>
      <FakeDataLoader><Kanji772Character/></FakeDataLoader>
      <FakeDataLoader><Kanji773Character/></FakeDataLoader>
      <FakeDataLoader><Kanji774Character/></FakeDataLoader>
      <FakeDataLoader><Kanji775Character/></FakeDataLoader>
      <FakeDataLoader><Kanji776Character/></FakeDataLoader>
      <FakeDataLoader><Kanji777Character/></FakeDataLoader>
      <FakeDataLoader><Kanji778Character/></FakeDataLoader>
      <FakeDataLoader><Kanji779Character/></FakeDataLoader>
      <FakeDataLoader><Kanji780Character/></FakeDataLoader>
      <FakeDataLoader><Kanji781Character/></FakeDataLoader>
      <FakeDataLoader><Kanji782Character/></FakeDataLoader>
      <FakeDataLoader><Kanji783Character/></FakeDataLoader>
      <FakeDataLoader><Kanji784Character/></FakeDataLoader>
      <FakeDataLoader><Kanji785Character/></FakeDataLoader>
      <FakeDataLoader><Kanji786Character/></FakeDataLoader>
      <FakeDataLoader><Kanji787Character/></FakeDataLoader>
      <FakeDataLoader><Kanji788Character/></FakeDataLoader>
      <FakeDataLoader><Kanji789Character/></FakeDataLoader>
      <FakeDataLoader><Kanji790Character/></FakeDataLoader>
      <FakeDataLoader><Kanji791Character/></FakeDataLoader>
      <FakeDataLoader><Kanji792Character/></FakeDataLoader>
      <FakeDataLoader><Kanji793Character/></FakeDataLoader>
      <FakeDataLoader><Kanji794Character/></FakeDataLoader>
      <FakeDataLoader><Kanji795Character/></FakeDataLoader>
      <FakeDataLoader><Kanji796Character/></FakeDataLoader>
      <FakeDataLoader><Kanji797Character/></FakeDataLoader>
      <FakeDataLoader><Kanji798Character/></FakeDataLoader>
      <FakeDataLoader><Kanji799Character/></FakeDataLoader>
      <FakeDataLoader><Kanji800Character/></FakeDataLoader>
      <FakeDataLoader><Kanji801Character/></FakeDataLoader>
      <FakeDataLoader><Kanji802Character/></FakeDataLoader>
      <FakeDataLoader><Kanji803Character/></FakeDataLoader>
      <FakeDataLoader><Kanji804Character/></FakeDataLoader>
      <FakeDataLoader><Kanji805Character/></FakeDataLoader>
      <FakeDataLoader><Kanji806Character/></FakeDataLoader>
      <FakeDataLoader><Kanji807Character/></FakeDataLoader>
      <FakeDataLoader><Kanji808Character/></FakeDataLoader>
      <FakeDataLoader><Kanji809Character/></FakeDataLoader>
      <FakeDataLoader><Kanji810Character/></FakeDataLoader>
      <FakeDataLoader><Kanji811Character/></FakeDataLoader>
      <FakeDataLoader><Kanji812Character/></FakeDataLoader>
      <FakeDataLoader><Kanji813Character/></FakeDataLoader>
      <FakeDataLoader><Kanji814Character/></FakeDataLoader>
      <FakeDataLoader><Kanji815Character/></FakeDataLoader>
      <FakeDataLoader><Kanji816Character/></FakeDataLoader>
      <FakeDataLoader><Kanji817Character/></FakeDataLoader>
      <FakeDataLoader><Kanji818Character/></FakeDataLoader>
      <FakeDataLoader><Kanji819Character/></FakeDataLoader>
      <FakeDataLoader><Kanji820Character/></FakeDataLoader>
      <FakeDataLoader><Kanji821Character/></FakeDataLoader>
      <FakeDataLoader><Kanji822Character/></FakeDataLoader>
      <FakeDataLoader><Kanji823Character/></FakeDataLoader>
      <FakeDataLoader><Kanji824Character/></FakeDataLoader>
      <FakeDataLoader><Kanji825Character/></FakeDataLoader>
      <FakeDataLoader><Kanji826Character/></FakeDataLoader>
      <FakeDataLoader><Kanji827Character/></FakeDataLoader>
      <FakeDataLoader><Kanji828Character/></FakeDataLoader>
      <FakeDataLoader><Kanji829Character/></FakeDataLoader>
      <FakeDataLoader><Kanji830Character/></FakeDataLoader>
      <FakeDataLoader><Kanji831Character/></FakeDataLoader>
      <FakeDataLoader><Kanji832Character/></FakeDataLoader>
      <FakeDataLoader><Kanji833Character/></FakeDataLoader>
      <FakeDataLoader><Kanji834Character/></FakeDataLoader>
      <FakeDataLoader><Kanji835Character/></FakeDataLoader>
      <FakeDataLoader><Kanji836Character/></FakeDataLoader>
      <FakeDataLoader><Kanji837Character/></FakeDataLoader>
      <FakeDataLoader><Kanji838Character/></FakeDataLoader>
      <FakeDataLoader><Kanji839Character/></FakeDataLoader>
      <FakeDataLoader><Kanji840Character/></FakeDataLoader>
      <FakeDataLoader><Kanji841Character/></FakeDataLoader>
      <FakeDataLoader><Kanji842Character/></FakeDataLoader>
      <FakeDataLoader><Kanji843Character/></FakeDataLoader>
      <FakeDataLoader><Kanji844Character/></FakeDataLoader>
      <FakeDataLoader><Kanji845Character/></FakeDataLoader>
      <FakeDataLoader><Kanji846Character/></FakeDataLoader>
      <FakeDataLoader><Kanji847Character/></FakeDataLoader>
      <FakeDataLoader><Kanji848Character/></FakeDataLoader>
      <FakeDataLoader><Kanji849Character/></FakeDataLoader>
      <FakeDataLoader><Kanji850Character/></FakeDataLoader>
      <FakeDataLoader><Kanji851Character/></FakeDataLoader>
      <FakeDataLoader><Kanji852Character/></FakeDataLoader>
      <FakeDataLoader><Kanji853Character/></FakeDataLoader>
      <FakeDataLoader><Kanji854Character/></FakeDataLoader>
      <FakeDataLoader><Kanji855Character/></FakeDataLoader>
      <FakeDataLoader><Kanji856Character/></FakeDataLoader>
      <FakeDataLoader><Kanji857Character/></FakeDataLoader>
      <FakeDataLoader><Kanji858Character/></FakeDataLoader>
      <FakeDataLoader><Kanji859Character/></FakeDataLoader>
      <FakeDataLoader><Kanji860Character/></FakeDataLoader>
      <FakeDataLoader><Kanji861Character/></FakeDataLoader>
      <FakeDataLoader><Kanji862Character/></FakeDataLoader>
      <FakeDataLoader><Kanji863Character/></FakeDataLoader>
      <FakeDataLoader><Kanji864Character/></FakeDataLoader>
      <FakeDataLoader><Kanji865Character/></FakeDataLoader>
      <FakeDataLoader><Kanji866Character/></FakeDataLoader>
      <FakeDataLoader><Kanji867Character/></FakeDataLoader>
      <FakeDataLoader><Kanji868Character/></FakeDataLoader>
      <FakeDataLoader><Kanji869Character/></FakeDataLoader>
      <FakeDataLoader><Kanji870Character/></FakeDataLoader>
      <FakeDataLoader><Kanji871Character/></FakeDataLoader>
      <FakeDataLoader><Kanji872Character/></FakeDataLoader>
      <FakeDataLoader><Kanji873Character/></FakeDataLoader>
      <FakeDataLoader><Kanji874Character/></FakeDataLoader>
      <FakeDataLoader><Kanji875Character/></FakeDataLoader>
      <FakeDataLoader><Kanji876Character/></FakeDataLoader>
      <FakeDataLoader><Kanji877Character/></FakeDataLoader>
      <FakeDataLoader><Kanji878Character/></FakeDataLoader>
      <FakeDataLoader><Kanji879Character/></FakeDataLoader>
      <FakeDataLoader><Kanji880Character/></FakeDataLoader>
      <FakeDataLoader><Kanji881Character/></FakeDataLoader>
      <FakeDataLoader><Kanji882Character/></FakeDataLoader>
      <FakeDataLoader><Kanji883Character/></FakeDataLoader>
      <FakeDataLoader><Kanji884Character/></FakeDataLoader>
      <FakeDataLoader><Kanji885Character/></FakeDataLoader>
      <FakeDataLoader><Kanji886Character/></FakeDataLoader>
      <FakeDataLoader><Kanji887Character/></FakeDataLoader>
      <FakeDataLoader><Kanji888Character/></FakeDataLoader>
      <FakeDataLoader><Kanji889Character/></FakeDataLoader>
      <FakeDataLoader><Kanji890Character/></FakeDataLoader>
      <FakeDataLoader><Kanji891Character/></FakeDataLoader>
      <FakeDataLoader><Kanji892Character/></FakeDataLoader>
      <FakeDataLoader><Kanji893Character/></FakeDataLoader>
      <FakeDataLoader><Kanji894Character/></FakeDataLoader>
      <FakeDataLoader><Kanji895Character/></FakeDataLoader>
      <FakeDataLoader><Kanji896Character/></FakeDataLoader>
      <FakeDataLoader><Kanji897Character/></FakeDataLoader>
      <FakeDataLoader><Kanji898Character/></FakeDataLoader>
      <FakeDataLoader><Kanji899Character/></FakeDataLoader>
      <FakeDataLoader><Kanji900Character/></FakeDataLoader>
      <FakeDataLoader><Kanji901Character/></FakeDataLoader>
      <FakeDataLoader><Kanji902Character/></FakeDataLoader>
      <FakeDataLoader><Kanji903Character/></FakeDataLoader>
      <FakeDataLoader><Kanji904Character/></FakeDataLoader>
      <FakeDataLoader><Kanji905Character/></FakeDataLoader>
      <FakeDataLoader><Kanji906Character/></FakeDataLoader>
      <FakeDataLoader><Kanji907Character/></FakeDataLoader>
      <FakeDataLoader><Kanji908Character/></FakeDataLoader>
      <FakeDataLoader><Kanji909Character/></FakeDataLoader>
      <FakeDataLoader><Kanji910Character/></FakeDataLoader>
      <FakeDataLoader><Kanji911Character/></FakeDataLoader>
      <FakeDataLoader><Kanji912Character/></FakeDataLoader>
      <FakeDataLoader><Kanji913Character/></FakeDataLoader>
      <FakeDataLoader><Kanji914Character/></FakeDataLoader>
      <FakeDataLoader><Kanji915Character/></FakeDataLoader>
      <FakeDataLoader><Kanji916Character/></FakeDataLoader>
      <FakeDataLoader><Kanji917Character/></FakeDataLoader>
      <FakeDataLoader><Kanji918Character/></FakeDataLoader>
      <FakeDataLoader><Kanji919Character/></FakeDataLoader>
      <FakeDataLoader><Kanji920Character/></FakeDataLoader>
      <FakeDataLoader><Kanji921Character/></FakeDataLoader>
      <FakeDataLoader><Kanji922Character/></FakeDataLoader>
      <FakeDataLoader><Kanji923Character/></FakeDataLoader>
      <FakeDataLoader><Kanji924Character/></FakeDataLoader>
      <FakeDataLoader><Kanji925Character/></FakeDataLoader>
      <FakeDataLoader><Kanji926Character/></FakeDataLoader>
      <FakeDataLoader><Kanji927Character/></FakeDataLoader>
      <FakeDataLoader><Kanji928Character/></FakeDataLoader>
      <FakeDataLoader><Kanji929Character/></FakeDataLoader>
      <FakeDataLoader><Kanji930Character/></FakeDataLoader>
      <FakeDataLoader><Kanji931Character/></FakeDataLoader>
      <FakeDataLoader><Kanji932Character/></FakeDataLoader>
      <FakeDataLoader><Kanji933Character/></FakeDataLoader>
      <FakeDataLoader><Kanji934Character/></FakeDataLoader>
      <FakeDataLoader><Kanji935Character/></FakeDataLoader>
      <FakeDataLoader><Kanji936Character/></FakeDataLoader>
      <FakeDataLoader><Kanji937Character/></FakeDataLoader>
      <FakeDataLoader><Kanji938Character/></FakeDataLoader>
      <FakeDataLoader><Kanji939Character/></FakeDataLoader>
      <FakeDataLoader><Kanji940Character/></FakeDataLoader>
      <FakeDataLoader><Kanji941Character/></FakeDataLoader>
      <FakeDataLoader><Kanji942Character/></FakeDataLoader>
      <FakeDataLoader><Kanji943Character/></FakeDataLoader>
      <FakeDataLoader><Kanji944Character/></FakeDataLoader>
      <FakeDataLoader><Kanji945Character/></FakeDataLoader>
      <FakeDataLoader><Kanji946Character/></FakeDataLoader>
      <FakeDataLoader><Kanji947Character/></FakeDataLoader>
      <FakeDataLoader><Kanji948Character/></FakeDataLoader>
      <FakeDataLoader><Kanji949Character/></FakeDataLoader>
      <FakeDataLoader><Kanji950Character/></FakeDataLoader>
      <FakeDataLoader><Kanji951Character/></FakeDataLoader>
      <FakeDataLoader><Kanji952Character/></FakeDataLoader>
      <FakeDataLoader><Kanji953Character/></FakeDataLoader>
      <FakeDataLoader><Kanji954Character/></FakeDataLoader>
      <FakeDataLoader><Kanji955Character/></FakeDataLoader>
      <FakeDataLoader><Kanji956Character/></FakeDataLoader>
      <FakeDataLoader><Kanji957Character/></FakeDataLoader>
      <FakeDataLoader><Kanji958Character/></FakeDataLoader>
      <FakeDataLoader><Kanji959Character/></FakeDataLoader>
      <FakeDataLoader><Kanji960Character/></FakeDataLoader>
      <FakeDataLoader><Kanji961Character/></FakeDataLoader>
      <FakeDataLoader><Kanji962Character/></FakeDataLoader>
      <FakeDataLoader><Kanji963Character/></FakeDataLoader>
      <FakeDataLoader><Kanji964Character/></FakeDataLoader>
      <FakeDataLoader><Kanji965Character/></FakeDataLoader>
      <FakeDataLoader><Kanji966Character/></FakeDataLoader>
      <FakeDataLoader><Kanji967Character/></FakeDataLoader>
      <FakeDataLoader><Kanji968Character/></FakeDataLoader>
      <FakeDataLoader><Kanji969Character/></FakeDataLoader>
      <FakeDataLoader><Kanji970Character/></FakeDataLoader>
      <FakeDataLoader><Kanji971Character/></FakeDataLoader>
      <FakeDataLoader><Kanji972Character/></FakeDataLoader>
      <FakeDataLoader><Kanji973Character/></FakeDataLoader>
      <FakeDataLoader><Kanji974Character/></FakeDataLoader>
      <FakeDataLoader><Kanji975Character/></FakeDataLoader>
      <FakeDataLoader><Kanji976Character/></FakeDataLoader>
      <FakeDataLoader><Kanji977Character/></FakeDataLoader>
      <FakeDataLoader><Kanji978Character/></FakeDataLoader>
      <FakeDataLoader><Kanji979Character/></FakeDataLoader>
      <FakeDataLoader><Kanji980Character/></FakeDataLoader>
      <FakeDataLoader><Kanji981Character/></FakeDataLoader>
      <FakeDataLoader><Kanji982Character/></FakeDataLoader>
      <FakeDataLoader><Kanji983Character/></FakeDataLoader>
      <FakeDataLoader><Kanji984Character/></FakeDataLoader>
      <FakeDataLoader><Kanji985Character/></FakeDataLoader>
      <FakeDataLoader><Kanji986Character/></FakeDataLoader>
      <FakeDataLoader><Kanji987Character/></FakeDataLoader>
      <FakeDataLoader><Kanji988Character/></FakeDataLoader>
      <FakeDataLoader><Kanji989Character/></FakeDataLoader>
      <FakeDataLoader><Kanji990Character/></FakeDataLoader>
      <FakeDataLoader><Kanji991Character/></FakeDataLoader>
      <FakeDataLoader><Kanji992Character/></FakeDataLoader>
      <FakeDataLoader><Kanji993Character/></FakeDataLoader>
      <FakeDataLoader><Kanji994Character/></FakeDataLoader>
      <FakeDataLoader><Kanji995Character/></FakeDataLoader>
      <FakeDataLoader><Kanji996Character/></FakeDataLoader>
      <FakeDataLoader><Kanji997Character/></FakeDataLoader>
      <FakeDataLoader><Kanji998Character/></FakeDataLoader>
      <FakeDataLoader><Kanji999Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1000Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1001Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1002Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1003Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1004Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1005Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1006Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1007Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1008Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1009Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1010Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1011Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1012Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1013Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1014Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1015Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1016Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1017Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1018Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1019Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1020Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1021Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1022Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1023Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1024Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1025Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1026Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1027Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1028Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1029Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1030Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1031Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1032Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1033Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1034Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1035Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1036Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1037Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1038Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1039Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1040Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1041Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1042Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1043Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1044Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1045Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1046Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1047Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1048Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1049Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1050Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1051Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1052Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1053Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1054Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1055Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1056Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1057Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1058Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1059Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1060Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1061Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1062Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1063Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1064Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1065Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1066Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1067Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1068Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1069Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1070Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1071Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1072Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1073Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1074Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1075Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1076Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1077Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1078Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1079Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1080Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1081Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1082Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1083Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1084Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1085Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1086Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1087Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1088Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1089Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1090Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1091Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1092Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1093Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1094Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1095Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1096Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1097Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1098Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1099Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1100Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1101Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1102Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1103Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1104Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1105Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1106Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1107Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1108Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1109Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1110Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1111Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1112Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1113Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1114Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1115Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1116Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1117Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1118Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1119Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1120Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1121Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1122Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1123Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1124Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1125Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1126Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1127Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1128Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1129Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1130Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1131Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1132Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1133Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1134Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1135Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1136Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1137Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1138Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1139Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1140Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1141Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1142Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1143Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1144Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1145Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1146Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1147Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1148Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1149Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1150Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1151Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1152Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1153Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1154Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1155Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1156Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1157Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1158Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1159Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1160Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1161Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1162Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1163Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1164Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1165Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1166Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1167Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1168Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1169Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1170Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1171Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1172Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1173Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1174Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1175Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1176Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1177Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1178Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1179Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1180Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1181Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1182Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1183Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1184Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1185Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1186Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1187Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1188Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1189Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1190Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1191Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1192Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1193Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1194Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1195Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1196Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1197Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1198Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1199Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1200Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1201Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1202Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1203Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1204Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1205Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1206Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1207Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1208Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1209Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1210Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1211Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1212Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1213Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1214Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1215Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1216Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1217Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1218Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1219Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1220Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1221Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1222Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1223Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1224Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1225Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1226Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1227Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1228Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1229Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1230Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1231Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1232Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1233Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1234Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1235Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1236Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1237Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1238Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1239Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1240Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1241Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1242Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1243Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1244Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1245Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1246Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1247Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1248Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1249Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1250Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1251Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1252Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1253Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1254Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1255Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1256Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1257Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1258Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1259Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1260Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1261Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1262Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1263Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1264Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1265Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1266Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1267Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1268Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1269Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1270Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1271Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1272Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1273Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1274Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1275Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1276Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1277Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1278Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1279Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1280Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1281Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1282Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1283Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1284Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1285Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1286Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1287Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1288Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1289Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1290Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1291Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1292Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1293Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1294Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1295Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1296Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1297Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1298Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1299Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1300Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1301Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1302Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1303Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1304Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1305Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1306Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1307Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1308Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1309Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1310Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1311Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1312Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1313Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1314Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1315Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1316Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1317Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1318Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1319Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1320Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1321Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1322Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1323Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1324Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1325Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1326Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1327Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1328Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1329Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1330Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1331Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1332Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1333Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1334Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1335Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1336Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1337Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1338Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1339Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1340Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1341Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1342Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1343Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1344Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1345Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1346Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1347Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1348Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1349Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1350Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1351Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1352Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1353Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1354Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1355Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1356Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1357Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1358Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1359Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1360Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1361Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1362Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1363Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1364Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1365Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1366Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1367Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1368Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1369Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1370Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1371Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1372Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1373Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1374Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1375Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1376Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1377Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1378Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1379Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1380Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1381Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1382Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1383Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1384Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1385Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1386Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1387Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1388Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1389Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1390Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1391Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1392Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1393Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1394Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1395Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1396Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1397Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1398Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1399Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1400Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1401Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1402Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1403Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1404Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1405Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1406Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1407Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1408Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1409Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1410Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1411Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1412Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1413Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1414Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1415Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1416Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1417Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1418Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1419Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1420Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1421Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1422Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1423Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1424Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1425Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1426Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1427Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1428Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1429Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1430Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1431Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1432Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1433Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1434Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1435Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1436Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1437Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1438Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1439Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1440Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1441Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1442Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1443Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1444Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1445Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1446Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1447Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1448Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1449Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1450Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1451Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1452Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1453Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1454Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1455Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1456Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1457Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1458Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1459Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1460Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1461Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1462Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1463Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1464Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1465Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1466Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1467Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1468Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1469Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1470Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1471Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1472Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1473Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1474Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1475Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1476Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1477Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1478Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1479Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1480Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1481Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1482Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1483Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1484Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1485Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1486Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1487Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1488Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1489Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1490Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1491Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1492Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1493Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1494Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1495Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1496Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1497Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1498Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1499Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1500Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1501Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1502Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1503Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1504Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1505Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1506Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1507Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1508Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1509Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1510Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1511Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1512Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1513Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1514Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1515Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1516Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1517Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1518Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1519Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1520Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1521Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1522Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1523Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1524Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1525Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1526Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1527Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1528Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1529Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1530Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1531Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1532Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1533Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1534Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1535Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1536Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1537Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1538Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1539Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1540Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1541Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1542Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1543Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1544Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1545Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1546Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1547Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1548Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1549Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1550Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1551Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1552Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1553Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1554Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1555Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1556Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1557Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1558Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1559Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1560Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1561Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1562Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1563Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1564Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1565Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1566Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1567Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1568Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1569Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1570Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1571Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1572Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1573Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1574Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1575Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1576Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1577Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1578Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1579Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1580Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1581Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1582Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1583Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1584Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1585Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1586Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1587Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1588Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1589Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1590Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1591Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1592Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1593Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1594Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1595Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1596Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1597Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1598Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1599Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1600Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1601Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1602Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1603Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1604Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1605Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1606Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1607Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1608Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1609Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1610Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1611Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1612Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1613Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1614Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1615Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1616Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1617Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1618Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1619Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1620Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1621Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1622Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1623Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1624Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1625Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1626Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1627Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1628Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1629Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1630Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1631Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1632Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1633Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1634Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1635Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1636Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1637Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1638Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1639Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1640Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1641Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1642Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1643Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1644Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1645Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1646Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1647Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1648Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1649Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1650Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1651Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1652Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1653Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1654Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1655Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1656Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1657Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1658Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1659Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1660Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1661Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1662Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1663Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1664Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1665Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1666Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1667Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1668Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1669Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1670Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1671Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1672Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1673Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1674Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1675Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1676Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1677Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1678Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1679Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1680Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1681Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1682Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1683Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1684Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1685Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1686Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1687Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1688Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1689Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1690Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1691Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1692Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1693Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1694Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1695Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1696Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1697Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1698Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1699Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1700Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1701Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1702Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1703Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1704Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1705Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1706Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1707Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1708Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1709Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1710Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1711Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1712Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1713Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1714Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1715Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1716Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1717Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1718Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1719Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1720Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1721Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1722Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1723Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1724Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1725Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1726Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1727Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1728Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1729Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1730Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1731Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1732Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1733Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1734Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1735Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1736Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1737Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1738Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1739Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1740Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1741Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1742Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1743Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1744Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1745Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1746Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1747Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1748Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1749Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1750Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1751Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1752Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1753Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1754Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1755Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1756Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1757Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1758Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1759Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1760Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1761Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1762Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1763Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1764Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1765Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1766Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1767Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1768Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1769Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1770Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1771Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1772Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1773Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1774Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1775Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1776Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1777Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1778Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1779Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1780Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1781Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1782Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1783Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1784Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1785Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1786Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1787Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1788Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1789Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1790Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1791Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1792Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1793Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1794Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1795Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1796Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1797Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1798Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1799Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1800Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1801Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1802Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1803Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1804Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1805Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1806Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1807Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1808Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1809Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1810Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1811Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1812Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1813Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1814Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1815Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1816Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1817Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1818Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1819Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1820Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1821Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1822Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1823Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1824Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1825Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1826Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1827Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1828Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1829Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1830Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1831Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1832Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1833Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1834Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1835Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1836Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1837Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1838Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1839Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1840Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1841Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1842Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1843Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1844Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1845Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1846Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1847Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1848Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1849Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1850Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1851Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1852Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1853Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1854Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1855Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1856Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1857Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1858Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1859Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1860Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1861Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1862Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1863Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1864Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1865Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1866Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1867Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1868Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1869Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1870Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1871Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1872Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1873Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1874Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1875Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1876Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1877Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1878Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1879Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1880Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1881Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1882Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1883Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1884Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1885Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1886Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1887Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1888Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1889Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1890Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1891Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1892Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1893Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1894Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1895Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1896Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1897Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1898Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1899Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1900Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1901Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1902Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1903Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1904Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1905Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1906Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1907Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1908Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1909Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1910Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1911Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1912Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1913Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1914Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1915Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1916Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1917Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1918Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1919Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1920Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1921Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1922Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1923Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1924Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1925Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1926Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1927Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1928Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1929Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1930Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1931Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1932Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1933Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1934Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1935Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1936Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1937Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1938Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1939Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1940Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1941Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1942Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1943Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1944Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1945Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1946Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1947Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1948Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1949Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1950Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1951Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1952Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1953Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1954Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1955Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1956Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1957Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1958Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1959Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1960Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1961Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1962Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1963Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1964Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1965Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1966Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1967Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1968Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1969Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1970Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1971Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1972Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1973Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1974Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1975Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1976Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1977Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1978Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1979Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1980Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1981Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1982Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1983Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1984Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1985Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1986Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1987Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1988Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1989Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1990Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1991Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1992Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1993Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1994Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1995Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1996Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1997Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1998Character/></FakeDataLoader>
      <FakeDataLoader><Kanji1999Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2000Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2001Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2002Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2003Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2004Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2005Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2006Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2007Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2008Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2009Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2010Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2011Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2012Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2013Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2014Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2015Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2016Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2017Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2018Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2019Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2020Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2021Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2022Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2023Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2024Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2025Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2026Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2027Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2028Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2029Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2030Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2031Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2032Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2033Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2034Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2035Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2036Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2037Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2038Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2039Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2040Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2041Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2042Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2043Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2044Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2045Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2046Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2047Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2048Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2049Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2050Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2051Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2052Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2053Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2054Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2055Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2056Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2057Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2058Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2059Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2060Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2061Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2062Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2063Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2064Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2065Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2066Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2067Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2068Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2069Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2070Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2071Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2072Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2073Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2074Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2075Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2076Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2077Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2078Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2079Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2080Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2081Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2082Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2083Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2084Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2085Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2086Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2087Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2088Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2089Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2090Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2091Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2092Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2093Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2094Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2095Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2096Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2097Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2098Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2099Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2100Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2101Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2102Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2103Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2104Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2105Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2106Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2107Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2108Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2109Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2110Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2111Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2112Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2113Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2114Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2115Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2116Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2117Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2118Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2119Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2120Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2121Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2122Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2123Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2124Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2125Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2126Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2127Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2128Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2129Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2130Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2131Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2132Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2133Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2134Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2135Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2136Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2137Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2138Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2139Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2140Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2141Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2142Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2143Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2144Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2145Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2146Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2147Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2148Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2149Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2150Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2151Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2152Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2153Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2154Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2155Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2156Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2157Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2158Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2159Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2160Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2161Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2162Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2163Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2164Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2165Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2166Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2167Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2168Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2169Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2170Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2171Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2172Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2173Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2174Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2175Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2176Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2177Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2178Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2179Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2180Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2181Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2182Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2183Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2184Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2185Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2186Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2187Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2188Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2189Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2190Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2191Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2192Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2193Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2194Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2195Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2196Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2197Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2198Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2199Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2200Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2201Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2202Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2203Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2204Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2205Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2206Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2207Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2208Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2209Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2210Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2211Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2212Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2213Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2214Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2215Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2216Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2217Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2218Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2219Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2220Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2221Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2222Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2223Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2224Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2225Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2226Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2227Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2228Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2229Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2230Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2231Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2232Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2233Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2234Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2235Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2236Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2237Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2238Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2239Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2240Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2241Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2242Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2243Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2244Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2245Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2246Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2247Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2248Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2249Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2250Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2251Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2252Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2253Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2254Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2255Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2256Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2257Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2258Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2259Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2260Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2261Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2262Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2263Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2264Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2265Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2266Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2267Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2268Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2269Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2270Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2271Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2272Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2273Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2274Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2275Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2276Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2277Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2278Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2279Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2280Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2281Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2282Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2283Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2284Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2285Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2286Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2287Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2288Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2289Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2290Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2291Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2292Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2293Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2294Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2295Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2296Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2297Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2298Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2299Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2300Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2301Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2302Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2303Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2304Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2305Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2306Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2307Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2308Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2309Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2310Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2311Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2312Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2313Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2314Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2315Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2316Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2317Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2318Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2319Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2320Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2321Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2322Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2323Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2324Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2325Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2326Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2327Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2328Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2329Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2330Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2331Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2332Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2333Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2334Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2335Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2336Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2337Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2338Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2339Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2340Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2341Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2342Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2343Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2344Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2345Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2346Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2347Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2348Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2349Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2350Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2351Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2352Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2353Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2354Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2355Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2356Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2357Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2358Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2359Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2360Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2361Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2362Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2363Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2364Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2365Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2366Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2367Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2368Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2369Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2370Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2371Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2372Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2373Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2374Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2375Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2376Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2377Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2378Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2379Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2380Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2381Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2382Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2383Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2384Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2385Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2386Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2387Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2388Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2389Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2390Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2391Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2392Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2393Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2394Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2395Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2396Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2397Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2398Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2399Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2400Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2401Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2402Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2403Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2404Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2405Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2406Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2407Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2408Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2409Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2410Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2411Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2412Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2413Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2414Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2415Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2416Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2417Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2418Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2419Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2420Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2421Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2422Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2423Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2424Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2425Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2426Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2427Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2428Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2429Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2430Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2431Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2432Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2433Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2434Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2435Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2436Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2437Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2438Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2439Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2440Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2441Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2442Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2443Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2444Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2445Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2446Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2447Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2448Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2449Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2450Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2451Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2452Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2453Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2454Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2455Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2456Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2457Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2458Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2459Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2460Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2461Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2462Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2463Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2464Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2465Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2466Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2467Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2468Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2469Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2470Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2471Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2472Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2473Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2474Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2475Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2476Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2477Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2478Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2479Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2480Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2481Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2482Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2483Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2484Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2485Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2486Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2487Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2488Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2489Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2490Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2491Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2492Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2493Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2494Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2495Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2496Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2497Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2498Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2499Character/></FakeDataLoader>
      <FakeDataLoader><Kanji2500Character/></FakeDataLoader>
    </Wrapper>
    
        <a href="https://github.com/jantimon/next-yak/">next-yak</a>
    </>;};