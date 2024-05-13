
"use client";    
import React, { type FunctionComponent } from 'react';
import { styled, css } from 'styled-components';

const JapaneseCard = styled.div`
    width: 100px;
    height: 100px;
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


const Kanji1Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '一';
  }
`;

const Kanji2Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丁';
  }
`;

const Kanji3Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丂';
  }
`;

const Kanji4Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '七';
  }
`;

const Kanji5Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丄';
  }
`;

const Kanji6Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丅';
  }
`;

const Kanji7Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丆';
  }
`;

const Kanji8Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '万';
  }
`;

const Kanji9Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丈';
  }
`;

const Kanji10Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '三';
  }
`;

const Kanji11Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '上';
  }
`;

const Kanji12Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '下';
  }
`;

const Kanji13Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丌';
  }
`;

const Kanji14Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '不';
  }
`;

const Kanji15Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '与';
  }
`;

const Kanji16Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丏';
  }
`;

const Kanji17Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丐';
  }
`;

const Kanji18Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丑';
  }
`;

const Kanji19Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丒';
  }
`;

const Kanji20Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '专';
  }
`;

const Kanji21Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '且';
  }
`;

const Kanji22Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丕';
  }
`;

const Kanji23Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '世';
  }
`;

const Kanji24Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丗';
  }
`;

const Kanji25Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丘';
  }
`;

const Kanji26Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丙';
  }
`;

const Kanji27Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '业';
  }
`;

const Kanji28Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丛';
  }
`;

const Kanji29Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '东';
  }
`;

const Kanji30Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丝';
  }
`;

const Kanji31Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丞';
  }
`;

const Kanji32Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丟';
  }
`;

const Kanji33Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丠';
  }
`;

const Kanji34Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '両';
  }
`;

const Kanji35Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丢';
  }
`;

const Kanji36Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丣';
  }
`;

const Kanji37Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '两';
  }
`;

const Kanji38Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '严';
  }
`;

const Kanji39Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '並';
  }
`;

const Kanji40Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丧';
  }
`;

const Kanji41Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丨';
  }
`;

const Kanji42Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丩';
  }
`;

const Kanji43Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '个';
  }
`;

const Kanji44Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丫';
  }
`;

const Kanji45Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丬';
  }
`;

const Kanji46Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '中';
  }
`;

const Kanji47Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丮';
  }
`;

const Kanji48Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丯';
  }
`;

const Kanji49Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丰';
  }
`;

const Kanji50Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丱';
  }
`;

const Kanji51Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '串';
  }
`;

const Kanji52Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丳';
  }
`;

const Kanji53Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '临';
  }
`;

const Kanji54Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丵';
  }
`;

const Kanji55Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丶';
  }
`;

const Kanji56Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丷';
  }
`;

const Kanji57Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丸';
  }
`;

const Kanji58Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丹';
  }
`;

const Kanji59Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '为';
  }
`;

const Kanji60Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '主';
  }
`;

const Kanji61Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丼';
  }
`;

const Kanji62Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丽';
  }
`;

const Kanji63Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '举';
  }
`;

const Kanji64Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '丿';
  }
`;

const Kanji65Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乀';
  }
`;

const Kanji66Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乁';
  }
`;

const Kanji67Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乂';
  }
`;

const Kanji68Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乃';
  }
`;

const Kanji69Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乄';
  }
`;

const Kanji70Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '久';
  }
`;

const Kanji71Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乆';
  }
`;

const Kanji72Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乇';
  }
`;

const Kanji73Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '么';
  }
`;

const Kanji74Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '义';
  }
`;

const Kanji75Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乊';
  }
`;

const Kanji76Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '之';
  }
`;

const Kanji77Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乌';
  }
`;

const Kanji78Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乍';
  }
`;

const Kanji79Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乎';
  }
`;

const Kanji80Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乏';
  }
`;

const Kanji81Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乐';
  }
`;

const Kanji82Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乑';
  }
`;

const Kanji83Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乒';
  }
`;

const Kanji84Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乓';
  }
`;

const Kanji85Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乔';
  }
`;

const Kanji86Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乕';
  }
`;

const Kanji87Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乖';
  }
`;

const Kanji88Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乗';
  }
`;

const Kanji89Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乘';
  }
`;

const Kanji90Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乙';
  }
`;

const Kanji91Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乚';
  }
`;

const Kanji92Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乛';
  }
`;

const Kanji93Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乜';
  }
`;

const Kanji94Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '九';
  }
`;

const Kanji95Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乞';
  }
`;

const Kanji96Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '也';
  }
`;

const Kanji97Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '习';
  }
`;

const Kanji98Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乡';
  }
`;

const Kanji99Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乢';
  }
`;

const Kanji100Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乣';
  }
`;

const Kanji101Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乤';
  }
`;

const Kanji102Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乥';
  }
`;

const Kanji103Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '书';
  }
`;

const Kanji104Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乧';
  }
`;

const Kanji105Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乨';
  }
`;

const Kanji106Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乩';
  }
`;

const Kanji107Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乪';
  }
`;

const Kanji108Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乫';
  }
`;

const Kanji109Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乬';
  }
`;

const Kanji110Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乭';
  }
`;

const Kanji111Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乮';
  }
`;

const Kanji112Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乯';
  }
`;

const Kanji113Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '买';
  }
`;

const Kanji114Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乱';
  }
`;

const Kanji115Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乲';
  }
`;

const Kanji116Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乳';
  }
`;

const Kanji117Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乴';
  }
`;

const Kanji118Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乵';
  }
`;

const Kanji119Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乶';
  }
`;

const Kanji120Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乷';
  }
`;

const Kanji121Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乸';
  }
`;

const Kanji122Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乹';
  }
`;

const Kanji123Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乺';
  }
`;

const Kanji124Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乻';
  }
`;

const Kanji125Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乼';
  }
`;

const Kanji126Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乽';
  }
`;

const Kanji127Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乾';
  }
`;

const Kanji128Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '乿';
  }
`;

const Kanji129Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亀';
  }
`;

const Kanji130Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亁';
  }
`;

const Kanji131Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亂';
  }
`;

const Kanji132Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亃';
  }
`;

const Kanji133Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亄';
  }
`;

const Kanji134Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亅';
  }
`;

const Kanji135Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '了';
  }
`;

const Kanji136Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亇';
  }
`;

const Kanji137Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '予';
  }
`;

const Kanji138Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '争';
  }
`;

const Kanji139Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亊';
  }
`;

const Kanji140Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '事';
  }
`;

const Kanji141Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '二';
  }
`;

const Kanji142Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亍';
  }
`;

const Kanji143Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '于';
  }
`;

const Kanji144Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亏';
  }
`;

const Kanji145Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亐';
  }
`;

const Kanji146Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '云';
  }
`;

const Kanji147Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '互';
  }
`;

const Kanji148Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亓';
  }
`;

const Kanji149Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '五';
  }
`;

const Kanji150Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '井';
  }
`;

const Kanji151Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亖';
  }
`;

const Kanji152Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亗';
  }
`;

const Kanji153Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亘';
  }
`;

const Kanji154Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亙';
  }
`;

const Kanji155Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亚';
  }
`;

const Kanji156Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '些';
  }
`;

const Kanji157Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亜';
  }
`;

const Kanji158Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亝';
  }
`;

const Kanji159Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亞';
  }
`;

const Kanji160Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亟';
  }
`;

const Kanji161Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亠';
  }
`;

const Kanji162Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亡';
  }
`;

const Kanji163Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亢';
  }
`;

const Kanji164Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亣';
  }
`;

const Kanji165Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '交';
  }
`;

const Kanji166Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亥';
  }
`;

const Kanji167Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亦';
  }
`;

const Kanji168Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '产';
  }
`;

const Kanji169Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亨';
  }
`;

const Kanji170Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亩';
  }
`;

const Kanji171Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亪';
  }
`;

const Kanji172Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '享';
  }
`;

const Kanji173Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '京';
  }
`;

const Kanji174Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亭';
  }
`;

const Kanji175Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亮';
  }
`;

const Kanji176Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亯';
  }
`;

const Kanji177Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亰';
  }
`;

const Kanji178Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亱';
  }
`;

const Kanji179Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亲';
  }
`;

const Kanji180Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亳';
  }
`;

const Kanji181Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亴';
  }
`;

const Kanji182Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亵';
  }
`;

const Kanji183Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亶';
  }
`;

const Kanji184Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亷';
  }
`;

const Kanji185Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亸';
  }
`;

const Kanji186Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亹';
  }
`;

const Kanji187Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '人';
  }
`;

const Kanji188Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亻';
  }
`;

const Kanji189Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亼';
  }
`;

const Kanji190Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亽';
  }
`;

const Kanji191Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亾';
  }
`;

const Kanji192Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '亿';
  }
`;

const Kanji193Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '什';
  }
`;

const Kanji194Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仁';
  }
`;

const Kanji195Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仂';
  }
`;

const Kanji196Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仃';
  }
`;

const Kanji197Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仄';
  }
`;

const Kanji198Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仅';
  }
`;

const Kanji199Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仆';
  }
`;

const Kanji200Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仇';
  }
`;

const Kanji201Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仈';
  }
`;

const Kanji202Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仉';
  }
`;

const Kanji203Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '今';
  }
`;

const Kanji204Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '介';
  }
`;

const Kanji205Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仌';
  }
`;

const Kanji206Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仍';
  }
`;

const Kanji207Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '从';
  }
`;

const Kanji208Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仏';
  }
`;

const Kanji209Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仐';
  }
`;

const Kanji210Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仑';
  }
`;

const Kanji211Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仒';
  }
`;

const Kanji212Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仓';
  }
`;

const Kanji213Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仔';
  }
`;

const Kanji214Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仕';
  }
`;

const Kanji215Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '他';
  }
`;

const Kanji216Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仗';
  }
`;

const Kanji217Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '付';
  }
`;

const Kanji218Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仙';
  }
`;

const Kanji219Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仚';
  }
`;

const Kanji220Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仛';
  }
`;

const Kanji221Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仜';
  }
`;

const Kanji222Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仝';
  }
`;

const Kanji223Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仞';
  }
`;

const Kanji224Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仟';
  }
`;

const Kanji225Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仠';
  }
`;

const Kanji226Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仡';
  }
`;

const Kanji227Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仢';
  }
`;

const Kanji228Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '代';
  }
`;

const Kanji229Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '令';
  }
`;

const Kanji230Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '以';
  }
`;

const Kanji231Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仦';
  }
`;

const Kanji232Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仧';
  }
`;

const Kanji233Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仨';
  }
`;

const Kanji234Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仩';
  }
`;

const Kanji235Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仪';
  }
`;

const Kanji236Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仫';
  }
`;

const Kanji237Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '们';
  }
`;

const Kanji238Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仭';
  }
`;

const Kanji239Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仮';
  }
`;

const Kanji240Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仯';
  }
`;

const Kanji241Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仰';
  }
`;

const Kanji242Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仱';
  }
`;

const Kanji243Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仲';
  }
`;

const Kanji244Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仳';
  }
`;

const Kanji245Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仴';
  }
`;

const Kanji246Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仵';
  }
`;

const Kanji247Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '件';
  }
`;

const Kanji248Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '价';
  }
`;

const Kanji249Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仸';
  }
`;

const Kanji250Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仹';
  }
`;

const Kanji251Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仺';
  }
`;

const Kanji252Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '任';
  }
`;

const Kanji253Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仼';
  }
`;

const Kanji254Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '份';
  }
`;

const Kanji255Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仾';
  }
`;

const Kanji256Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '仿';
  }
`;

const Kanji257Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伀';
  }
`;

const Kanji258Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '企';
  }
`;

const Kanji259Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伂';
  }
`;

const Kanji260Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伃';
  }
`;

const Kanji261Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伄';
  }
`;

const Kanji262Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伅';
  }
`;

const Kanji263Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伆';
  }
`;

const Kanji264Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伇';
  }
`;

const Kanji265Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伈';
  }
`;

const Kanji266Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伉';
  }
`;

const Kanji267Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伊';
  }
`;

const Kanji268Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伋';
  }
`;

const Kanji269Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伌';
  }
`;

const Kanji270Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伍';
  }
`;

const Kanji271Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伎';
  }
`;

const Kanji272Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伏';
  }
`;

const Kanji273Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伐';
  }
`;

const Kanji274Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '休';
  }
`;

const Kanji275Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伒';
  }
`;

const Kanji276Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伓';
  }
`;

const Kanji277Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伔';
  }
`;

const Kanji278Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伕';
  }
`;

const Kanji279Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伖';
  }
`;

const Kanji280Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '众';
  }
`;

const Kanji281Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '优';
  }
`;

const Kanji282Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伙';
  }
`;

const Kanji283Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '会';
  }
`;

const Kanji284Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伛';
  }
`;

const Kanji285Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伜';
  }
`;

const Kanji286Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伝';
  }
`;

const Kanji287Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伞';
  }
`;

const Kanji288Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伟';
  }
`;

const Kanji289Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '传';
  }
`;

const Kanji290Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伡';
  }
`;

const Kanji291Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伢';
  }
`;

const Kanji292Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伣';
  }
`;

const Kanji293Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伤';
  }
`;

const Kanji294Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伥';
  }
`;

const Kanji295Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伦';
  }
`;

const Kanji296Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伧';
  }
`;

const Kanji297Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伨';
  }
`;

const Kanji298Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伩';
  }
`;

const Kanji299Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伪';
  }
`;

const Kanji300Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伫';
  }
`;

const Kanji301Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伬';
  }
`;

const Kanji302Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伭';
  }
`;

const Kanji303Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伮';
  }
`;

const Kanji304Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伯';
  }
`;

const Kanji305Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '估';
  }
`;

const Kanji306Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伱';
  }
`;

const Kanji307Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伲';
  }
`;

const Kanji308Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伳';
  }
`;

const Kanji309Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伴';
  }
`;

const Kanji310Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伵';
  }
`;

const Kanji311Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伶';
  }
`;

const Kanji312Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伷';
  }
`;

const Kanji313Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伸';
  }
`;

const Kanji314Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伹';
  }
`;

const Kanji315Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伺';
  }
`;

const Kanji316Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伻';
  }
`;

const Kanji317Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '似';
  }
`;

const Kanji318Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伽';
  }
`;

const Kanji319Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伾';
  }
`;

const Kanji320Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '伿';
  }
`;

const Kanji321Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佀';
  }
`;

const Kanji322Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佁';
  }
`;

const Kanji323Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佂';
  }
`;

const Kanji324Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佃';
  }
`;

const Kanji325Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佄';
  }
`;

const Kanji326Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佅';
  }
`;

const Kanji327Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '但';
  }
`;

const Kanji328Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佇';
  }
`;

const Kanji329Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佈';
  }
`;

const Kanji330Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佉';
  }
`;

const Kanji331Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佊';
  }
`;

const Kanji332Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佋';
  }
`;

const Kanji333Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佌';
  }
`;

const Kanji334Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '位';
  }
`;

const Kanji335Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '低';
  }
`;

const Kanji336Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '住';
  }
`;

const Kanji337Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佐';
  }
`;

const Kanji338Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佑';
  }
`;

const Kanji339Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佒';
  }
`;

const Kanji340Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '体';
  }
`;

const Kanji341Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佔';
  }
`;

const Kanji342Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '何';
  }
`;

const Kanji343Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佖';
  }
`;

const Kanji344Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佗';
  }
`;

const Kanji345Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佘';
  }
`;

const Kanji346Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '余';
  }
`;

const Kanji347Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佚';
  }
`;

const Kanji348Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佛';
  }
`;

const Kanji349Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '作';
  }
`;

const Kanji350Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佝';
  }
`;

const Kanji351Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佞';
  }
`;

const Kanji352Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佟';
  }
`;

const Kanji353Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '你';
  }
`;

const Kanji354Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佡';
  }
`;

const Kanji355Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佢';
  }
`;

const Kanji356Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佣';
  }
`;

const Kanji357Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佤';
  }
`;

const Kanji358Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佥';
  }
`;

const Kanji359Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佦';
  }
`;

const Kanji360Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佧';
  }
`;

const Kanji361Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佨';
  }
`;

const Kanji362Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佩';
  }
`;

const Kanji363Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佪';
  }
`;

const Kanji364Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佫';
  }
`;

const Kanji365Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佬';
  }
`;

const Kanji366Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佭';
  }
`;

const Kanji367Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佮';
  }
`;

const Kanji368Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佯';
  }
`;

const Kanji369Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佰';
  }
`;

const Kanji370Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佱';
  }
`;

const Kanji371Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佲';
  }
`;

const Kanji372Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佳';
  }
`;

const Kanji373Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佴';
  }
`;

const Kanji374Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '併';
  }
`;

const Kanji375Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佶';
  }
`;

const Kanji376Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佷';
  }
`;

const Kanji377Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佸';
  }
`;

const Kanji378Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佹';
  }
`;

const Kanji379Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佺';
  }
`;

const Kanji380Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佻';
  }
`;

const Kanji381Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佼';
  }
`;

const Kanji382Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佽';
  }
`;

const Kanji383Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '佾';
  }
`;

const Kanji384Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '使';
  }
`;

const Kanji385Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侀';
  }
`;

const Kanji386Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侁';
  }
`;

const Kanji387Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侂';
  }
`;

const Kanji388Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侃';
  }
`;

const Kanji389Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侄';
  }
`;

const Kanji390Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侅';
  }
`;

const Kanji391Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '來';
  }
`;

const Kanji392Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侇';
  }
`;

const Kanji393Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侈';
  }
`;

const Kanji394Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侉';
  }
`;

const Kanji395Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侊';
  }
`;

const Kanji396Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '例';
  }
`;

const Kanji397Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侌';
  }
`;

const Kanji398Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侍';
  }
`;

const Kanji399Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侎';
  }
`;

const Kanji400Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侏';
  }
`;

const Kanji401Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侐';
  }
`;

const Kanji402Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侑';
  }
`;

const Kanji403Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侒';
  }
`;

const Kanji404Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侓';
  }
`;

const Kanji405Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侔';
  }
`;

const Kanji406Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侕';
  }
`;

const Kanji407Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侖';
  }
`;

const Kanji408Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侗';
  }
`;

const Kanji409Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侘';
  }
`;

const Kanji410Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侙';
  }
`;

const Kanji411Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侚';
  }
`;

const Kanji412Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '供';
  }
`;

const Kanji413Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侜';
  }
`;

const Kanji414Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '依';
  }
`;

const Kanji415Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侞';
  }
`;

const Kanji416Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侟';
  }
`;

const Kanji417Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侠';
  }
`;

const Kanji418Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '価';
  }
`;

const Kanji419Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侢';
  }
`;

const Kanji420Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侣';
  }
`;

const Kanji421Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侤';
  }
`;

const Kanji422Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侥';
  }
`;

const Kanji423Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侦';
  }
`;

const Kanji424Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侧';
  }
`;

const Kanji425Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侨';
  }
`;

const Kanji426Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侩';
  }
`;

const Kanji427Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侪';
  }
`;

const Kanji428Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侫';
  }
`;

const Kanji429Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侬';
  }
`;

const Kanji430Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侭';
  }
`;

const Kanji431Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侮';
  }
`;

const Kanji432Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侯';
  }
`;

const Kanji433Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侰';
  }
`;

const Kanji434Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侱';
  }
`;

const Kanji435Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侲';
  }
`;

const Kanji436Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侳';
  }
`;

const Kanji437Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侴';
  }
`;

const Kanji438Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侵';
  }
`;

const Kanji439Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侶';
  }
`;

const Kanji440Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侷';
  }
`;

const Kanji441Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侸';
  }
`;

const Kanji442Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侹';
  }
`;

const Kanji443Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侺';
  }
`;

const Kanji444Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侻';
  }
`;

const Kanji445Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侼';
  }
`;

const Kanji446Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侽';
  }
`;

const Kanji447Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '侾';
  }
`;

const Kanji448Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '便';
  }
`;

const Kanji449Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俀';
  }
`;

const Kanji450Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俁';
  }
`;

const Kanji451Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '係';
  }
`;

const Kanji452Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '促';
  }
`;

const Kanji453Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俄';
  }
`;

const Kanji454Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俅';
  }
`;

const Kanji455Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俆';
  }
`;

const Kanji456Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俇';
  }
`;

const Kanji457Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俈';
  }
`;

const Kanji458Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俉';
  }
`;

const Kanji459Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俊';
  }
`;

const Kanji460Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俋';
  }
`;

const Kanji461Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俌';
  }
`;

const Kanji462Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俍';
  }
`;

const Kanji463Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俎';
  }
`;

const Kanji464Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俏';
  }
`;

const Kanji465Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俐';
  }
`;

const Kanji466Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俑';
  }
`;

const Kanji467Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俒';
  }
`;

const Kanji468Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俓';
  }
`;

const Kanji469Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俔';
  }
`;

const Kanji470Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俕';
  }
`;

const Kanji471Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俖';
  }
`;

const Kanji472Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俗';
  }
`;

const Kanji473Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俘';
  }
`;

const Kanji474Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俙';
  }
`;

const Kanji475Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俚';
  }
`;

const Kanji476Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俛';
  }
`;

const Kanji477Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俜';
  }
`;

const Kanji478Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '保';
  }
`;

const Kanji479Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俞';
  }
`;

const Kanji480Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俟';
  }
`;

const Kanji481Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俠';
  }
`;

const Kanji482Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '信';
  }
`;

const Kanji483Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俢';
  }
`;

const Kanji484Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俣';
  }
`;

const Kanji485Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俤';
  }
`;

const Kanji486Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俥';
  }
`;

const Kanji487Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俦';
  }
`;

const Kanji488Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俧';
  }
`;

const Kanji489Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俨';
  }
`;

const Kanji490Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俩';
  }
`;

const Kanji491Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俪';
  }
`;

const Kanji492Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俫';
  }
`;

const Kanji493Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俬';
  }
`;

const Kanji494Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俭';
  }
`;

const Kanji495Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '修';
  }
`;

const Kanji496Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俯';
  }
`;

const Kanji497Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俰';
  }
`;

const Kanji498Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俱';
  }
`;

const Kanji499Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俲';
  }
`;

const Kanji500Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俳';
  }
`;

const Kanji501Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俴';
  }
`;

const Kanji502Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俵';
  }
`;

const Kanji503Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俶';
  }
`;

const Kanji504Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俷';
  }
`;

const Kanji505Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俸';
  }
`;

const Kanji506Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俹';
  }
`;

const Kanji507Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俺';
  }
`;

const Kanji508Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俻';
  }
`;

const Kanji509Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俼';
  }
`;

const Kanji510Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俽';
  }
`;

const Kanji511Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俾';
  }
`;

const Kanji512Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '俿';
  }
`;

const Kanji513Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倀';
  }
`;

const Kanji514Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倁';
  }
`;

const Kanji515Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倂';
  }
`;

const Kanji516Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倃';
  }
`;

const Kanji517Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倄';
  }
`;

const Kanji518Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倅';
  }
`;

const Kanji519Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倆';
  }
`;

const Kanji520Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倇';
  }
`;

const Kanji521Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倈';
  }
`;

const Kanji522Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倉';
  }
`;

const Kanji523Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倊';
  }
`;

const Kanji524Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '個';
  }
`;

const Kanji525Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倌';
  }
`;

const Kanji526Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倍';
  }
`;

const Kanji527Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倎';
  }
`;

const Kanji528Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倏';
  }
`;

const Kanji529Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倐';
  }
`;

const Kanji530Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '們';
  }
`;

const Kanji531Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倒';
  }
`;

const Kanji532Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倓';
  }
`;

const Kanji533Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倔';
  }
`;

const Kanji534Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倕';
  }
`;

const Kanji535Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倖';
  }
`;

const Kanji536Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倗';
  }
`;

const Kanji537Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倘';
  }
`;

const Kanji538Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '候';
  }
`;

const Kanji539Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倚';
  }
`;

const Kanji540Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倛';
  }
`;

const Kanji541Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倜';
  }
`;

const Kanji542Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倝';
  }
`;

const Kanji543Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倞';
  }
`;

const Kanji544Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '借';
  }
`;

const Kanji545Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倠';
  }
`;

const Kanji546Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倡';
  }
`;

const Kanji547Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倢';
  }
`;

const Kanji548Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倣';
  }
`;

const Kanji549Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '値';
  }
`;

const Kanji550Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倥';
  }
`;

const Kanji551Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倦';
  }
`;

const Kanji552Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倧';
  }
`;

const Kanji553Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倨';
  }
`;

const Kanji554Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倩';
  }
`;

const Kanji555Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倪';
  }
`;

const Kanji556Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倫';
  }
`;

const Kanji557Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倬';
  }
`;

const Kanji558Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倭';
  }
`;

const Kanji559Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倮';
  }
`;

const Kanji560Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倯';
  }
`;

const Kanji561Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倰';
  }
`;

const Kanji562Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倱';
  }
`;

const Kanji563Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倲';
  }
`;

const Kanji564Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倳';
  }
`;

const Kanji565Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倴';
  }
`;

const Kanji566Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倵';
  }
`;

const Kanji567Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倶';
  }
`;

const Kanji568Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倷';
  }
`;

const Kanji569Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倸';
  }
`;

const Kanji570Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倹';
  }
`;

const Kanji571Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '债';
  }
`;

const Kanji572Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倻';
  }
`;

const Kanji573Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '值';
  }
`;

const Kanji574Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倽';
  }
`;

const Kanji575Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倾';
  }
`;

const Kanji576Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '倿';
  }
`;

const Kanji577Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偀';
  }
`;

const Kanji578Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偁';
  }
`;

const Kanji579Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偂';
  }
`;

const Kanji580Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偃';
  }
`;

const Kanji581Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偄';
  }
`;

const Kanji582Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偅';
  }
`;

const Kanji583Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偆';
  }
`;

const Kanji584Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '假';
  }
`;

const Kanji585Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偈';
  }
`;

const Kanji586Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偉';
  }
`;

const Kanji587Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偊';
  }
`;

const Kanji588Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偋';
  }
`;

const Kanji589Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偌';
  }
`;

const Kanji590Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偍';
  }
`;

const Kanji591Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偎';
  }
`;

const Kanji592Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偏';
  }
`;

const Kanji593Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偐';
  }
`;

const Kanji594Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偑';
  }
`;

const Kanji595Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偒';
  }
`;

const Kanji596Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偓';
  }
`;

const Kanji597Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偔';
  }
`;

const Kanji598Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偕';
  }
`;

const Kanji599Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偖';
  }
`;

const Kanji600Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偗';
  }
`;

const Kanji601Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偘';
  }
`;

const Kanji602Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偙';
  }
`;

const Kanji603Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '做';
  }
`;

const Kanji604Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偛';
  }
`;

const Kanji605Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '停';
  }
`;

const Kanji606Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偝';
  }
`;

const Kanji607Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偞';
  }
`;

const Kanji608Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偟';
  }
`;

const Kanji609Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偠';
  }
`;

const Kanji610Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偡';
  }
`;

const Kanji611Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偢';
  }
`;

const Kanji612Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偣';
  }
`;

const Kanji613Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偤';
  }
`;

const Kanji614Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '健';
  }
`;

const Kanji615Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偦';
  }
`;

const Kanji616Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偧';
  }
`;

const Kanji617Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偨';
  }
`;

const Kanji618Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偩';
  }
`;

const Kanji619Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偪';
  }
`;

const Kanji620Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偫';
  }
`;

const Kanji621Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偬';
  }
`;

const Kanji622Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偭';
  }
`;

const Kanji623Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偮';
  }
`;

const Kanji624Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偯';
  }
`;

const Kanji625Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偰';
  }
`;

const Kanji626Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偱';
  }
`;

const Kanji627Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偲';
  }
`;

const Kanji628Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偳';
  }
`;

const Kanji629Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '側';
  }
`;

const Kanji630Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偵';
  }
`;

const Kanji631Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偶';
  }
`;

const Kanji632Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偷';
  }
`;

const Kanji633Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偸';
  }
`;

const Kanji634Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偹';
  }
`;

const Kanji635Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偺';
  }
`;

const Kanji636Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偻';
  }
`;

const Kanji637Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偼';
  }
`;

const Kanji638Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偽';
  }
`;

const Kanji639Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偾';
  }
`;

const Kanji640Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '偿';
  }
`;

const Kanji641Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傀';
  }
`;

const Kanji642Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傁';
  }
`;

const Kanji643Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傂';
  }
`;

const Kanji644Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傃';
  }
`;

const Kanji645Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傄';
  }
`;

const Kanji646Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傅';
  }
`;

const Kanji647Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傆';
  }
`;

const Kanji648Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傇';
  }
`;

const Kanji649Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傈';
  }
`;

const Kanji650Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傉';
  }
`;

const Kanji651Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傊';
  }
`;

const Kanji652Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傋';
  }
`;

const Kanji653Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傌';
  }
`;

const Kanji654Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傍';
  }
`;

const Kanji655Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傎';
  }
`;

const Kanji656Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傏';
  }
`;

const Kanji657Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傐';
  }
`;

const Kanji658Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傑';
  }
`;

const Kanji659Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傒';
  }
`;

const Kanji660Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傓';
  }
`;

const Kanji661Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傔';
  }
`;

const Kanji662Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傕';
  }
`;

const Kanji663Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傖';
  }
`;

const Kanji664Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傗';
  }
`;

const Kanji665Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傘';
  }
`;

const Kanji666Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '備';
  }
`;

const Kanji667Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傚';
  }
`;

const Kanji668Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傛';
  }
`;

const Kanji669Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傜';
  }
`;

const Kanji670Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傝';
  }
`;

const Kanji671Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傞';
  }
`;

const Kanji672Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傟';
  }
`;

const Kanji673Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傠';
  }
`;

const Kanji674Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傡';
  }
`;

const Kanji675Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傢';
  }
`;

const Kanji676Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傣';
  }
`;

const Kanji677Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傤';
  }
`;

const Kanji678Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傥';
  }
`;

const Kanji679Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傦';
  }
`;

const Kanji680Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傧';
  }
`;

const Kanji681Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '储';
  }
`;

const Kanji682Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傩';
  }
`;

const Kanji683Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傪';
  }
`;

const Kanji684Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傫';
  }
`;

const Kanji685Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '催';
  }
`;

const Kanji686Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傭';
  }
`;

const Kanji687Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傮';
  }
`;

const Kanji688Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傯';
  }
`;

const Kanji689Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傰';
  }
`;

const Kanji690Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傱';
  }
`;

const Kanji691Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傲';
  }
`;

const Kanji692Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傳';
  }
`;

const Kanji693Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傴';
  }
`;

const Kanji694Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '債';
  }
`;

const Kanji695Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傶';
  }
`;

const Kanji696Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傷';
  }
`;

const Kanji697Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傸';
  }
`;

const Kanji698Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傹';
  }
`;

const Kanji699Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傺';
  }
`;

const Kanji700Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傻';
  }
`;

const Kanji701Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傼';
  }
`;

const Kanji702Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傽';
  }
`;

const Kanji703Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傾';
  }
`;

const Kanji704Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '傿';
  }
`;

const Kanji705Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僀';
  }
`;

const Kanji706Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僁';
  }
`;

const Kanji707Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僂';
  }
`;

const Kanji708Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僃';
  }
`;

const Kanji709Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僄';
  }
`;

const Kanji710Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僅';
  }
`;

const Kanji711Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僆';
  }
`;

const Kanji712Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僇';
  }
`;

const Kanji713Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僈';
  }
`;

const Kanji714Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僉';
  }
`;

const Kanji715Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僊';
  }
`;

const Kanji716Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僋';
  }
`;

const Kanji717Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僌';
  }
`;

const Kanji718Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '働';
  }
`;

const Kanji719Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僎';
  }
`;

const Kanji720Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '像';
  }
`;

const Kanji721Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僐';
  }
`;

const Kanji722Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僑';
  }
`;

const Kanji723Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僒';
  }
`;

const Kanji724Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僓';
  }
`;

const Kanji725Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僔';
  }
`;

const Kanji726Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僕';
  }
`;

const Kanji727Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僖';
  }
`;

const Kanji728Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僗';
  }
`;

const Kanji729Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僘';
  }
`;

const Kanji730Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僙';
  }
`;

const Kanji731Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僚';
  }
`;

const Kanji732Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僛';
  }
`;

const Kanji733Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僜';
  }
`;

const Kanji734Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僝';
  }
`;

const Kanji735Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僞';
  }
`;

const Kanji736Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僟';
  }
`;

const Kanji737Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僠';
  }
`;

const Kanji738Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僡';
  }
`;

const Kanji739Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僢';
  }
`;

const Kanji740Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僣';
  }
`;

const Kanji741Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僤';
  }
`;

const Kanji742Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僥';
  }
`;

const Kanji743Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僦';
  }
`;

const Kanji744Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僧';
  }
`;

const Kanji745Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僨';
  }
`;

const Kanji746Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僩';
  }
`;

const Kanji747Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僪';
  }
`;

const Kanji748Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僫';
  }
`;

const Kanji749Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僬';
  }
`;

const Kanji750Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僭';
  }
`;

const Kanji751Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僮';
  }
`;

const Kanji752Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僯';
  }
`;

const Kanji753Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僰';
  }
`;

const Kanji754Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僱';
  }
`;

const Kanji755Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僲';
  }
`;

const Kanji756Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僳';
  }
`;

const Kanji757Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僴';
  }
`;

const Kanji758Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僵';
  }
`;

const Kanji759Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僶';
  }
`;

const Kanji760Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僷';
  }
`;

const Kanji761Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僸';
  }
`;

const Kanji762Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '價';
  }
`;

const Kanji763Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僺';
  }
`;

const Kanji764Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僻';
  }
`;

const Kanji765Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僼';
  }
`;

const Kanji766Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僽';
  }
`;

const Kanji767Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僾';
  }
`;

const Kanji768Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '僿';
  }
`;

const Kanji769Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儀';
  }
`;

const Kanji770Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儁';
  }
`;

const Kanji771Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儂';
  }
`;

const Kanji772Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儃';
  }
`;

const Kanji773Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '億';
  }
`;

const Kanji774Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儅';
  }
`;

const Kanji775Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儆';
  }
`;

const Kanji776Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儇';
  }
`;

const Kanji777Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儈';
  }
`;

const Kanji778Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儉';
  }
`;

const Kanji779Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儊';
  }
`;

const Kanji780Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儋';
  }
`;

const Kanji781Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儌';
  }
`;

const Kanji782Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儍';
  }
`;

const Kanji783Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儎';
  }
`;

const Kanji784Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儏';
  }
`;

const Kanji785Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儐';
  }
`;

const Kanji786Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儑';
  }
`;

const Kanji787Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儒';
  }
`;

const Kanji788Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儓';
  }
`;

const Kanji789Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儔';
  }
`;

const Kanji790Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儕';
  }
`;

const Kanji791Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儖';
  }
`;

const Kanji792Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儗';
  }
`;

const Kanji793Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儘';
  }
`;

const Kanji794Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儙';
  }
`;

const Kanji795Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儚';
  }
`;

const Kanji796Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儛';
  }
`;

const Kanji797Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儜';
  }
`;

const Kanji798Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儝';
  }
`;

const Kanji799Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儞';
  }
`;

const Kanji800Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '償';
  }
`;

const Kanji801Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儠';
  }
`;

const Kanji802Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儡';
  }
`;

const Kanji803Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儢';
  }
`;

const Kanji804Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儣';
  }
`;

const Kanji805Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儤';
  }
`;

const Kanji806Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儥';
  }
`;

const Kanji807Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儦';
  }
`;

const Kanji808Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儧';
  }
`;

const Kanji809Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儨';
  }
`;

const Kanji810Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儩';
  }
`;

const Kanji811Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '優';
  }
`;

const Kanji812Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儫';
  }
`;

const Kanji813Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儬';
  }
`;

const Kanji814Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儭';
  }
`;

const Kanji815Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儮';
  }
`;

const Kanji816Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儯';
  }
`;

const Kanji817Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儰';
  }
`;

const Kanji818Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儱';
  }
`;

const Kanji819Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儲';
  }
`;

const Kanji820Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儳';
  }
`;

const Kanji821Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儴';
  }
`;

const Kanji822Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儵';
  }
`;

const Kanji823Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儶';
  }
`;

const Kanji824Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儷';
  }
`;

const Kanji825Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儸';
  }
`;

const Kanji826Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儹';
  }
`;

const Kanji827Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儺';
  }
`;

const Kanji828Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儻';
  }
`;

const Kanji829Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儼';
  }
`;

const Kanji830Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儽';
  }
`;

const Kanji831Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儾';
  }
`;

const Kanji832Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '儿';
  }
`;

const Kanji833Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兀';
  }
`;

const Kanji834Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '允';
  }
`;

const Kanji835Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兂';
  }
`;

const Kanji836Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '元';
  }
`;

const Kanji837Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兄';
  }
`;

const Kanji838Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '充';
  }
`;

const Kanji839Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兆';
  }
`;

const Kanji840Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兇';
  }
`;

const Kanji841Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '先';
  }
`;

const Kanji842Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '光';
  }
`;

const Kanji843Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兊';
  }
`;

const Kanji844Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '克';
  }
`;

const Kanji845Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兌';
  }
`;

const Kanji846Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '免';
  }
`;

const Kanji847Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兎';
  }
`;

const Kanji848Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兏';
  }
`;

const Kanji849Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '児';
  }
`;

const Kanji850Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兑';
  }
`;

const Kanji851Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兒';
  }
`;

const Kanji852Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兓';
  }
`;

const Kanji853Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兔';
  }
`;

const Kanji854Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兕';
  }
`;

const Kanji855Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兖';
  }
`;

const Kanji856Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兗';
  }
`;

const Kanji857Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兘';
  }
`;

const Kanji858Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兙';
  }
`;

const Kanji859Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '党';
  }
`;

const Kanji860Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兛';
  }
`;

const Kanji861Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兜';
  }
`;

const Kanji862Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兝';
  }
`;

const Kanji863Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兞';
  }
`;

const Kanji864Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兟';
  }
`;

const Kanji865Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兠';
  }
`;

const Kanji866Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兡';
  }
`;

const Kanji867Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兢';
  }
`;

const Kanji868Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兣';
  }
`;

const Kanji869Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兤';
  }
`;

const Kanji870Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '入';
  }
`;

const Kanji871Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兦';
  }
`;

const Kanji872Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '內';
  }
`;

const Kanji873Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '全';
  }
`;

const Kanji874Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兩';
  }
`;

const Kanji875Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兪';
  }
`;

const Kanji876Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '八';
  }
`;

const Kanji877Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '公';
  }
`;

const Kanji878Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '六';
  }
`;

const Kanji879Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兮';
  }
`;

const Kanji880Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兯';
  }
`;

const Kanji881Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兰';
  }
`;

const Kanji882Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '共';
  }
`;

const Kanji883Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兲';
  }
`;

const Kanji884Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '关';
  }
`;

const Kanji885Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兴';
  }
`;

const Kanji886Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兵';
  }
`;

const Kanji887Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '其';
  }
`;

const Kanji888Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '具';
  }
`;

const Kanji889Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '典';
  }
`;

const Kanji890Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兹';
  }
`;

const Kanji891Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兺';
  }
`;

const Kanji892Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '养';
  }
`;

const Kanji893Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兼';
  }
`;

const Kanji894Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兽';
  }
`;

const Kanji895Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兾';
  }
`;

const Kanji896Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '兿';
  }
`;

const Kanji897Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冀';
  }
`;

const Kanji898Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冁';
  }
`;

const Kanji899Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冂';
  }
`;

const Kanji900Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冃';
  }
`;

const Kanji901Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冄';
  }
`;

const Kanji902Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '内';
  }
`;

const Kanji903Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '円';
  }
`;

const Kanji904Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冇';
  }
`;

const Kanji905Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冈';
  }
`;

const Kanji906Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冉';
  }
`;

const Kanji907Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冊';
  }
`;

const Kanji908Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冋';
  }
`;

const Kanji909Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '册';
  }
`;

const Kanji910Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '再';
  }
`;

const Kanji911Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冎';
  }
`;

const Kanji912Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冏';
  }
`;

const Kanji913Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冐';
  }
`;

const Kanji914Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冑';
  }
`;

const Kanji915Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冒';
  }
`;

const Kanji916Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冓';
  }
`;

const Kanji917Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冔';
  }
`;

const Kanji918Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冕';
  }
`;

const Kanji919Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冖';
  }
`;

const Kanji920Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冗';
  }
`;

const Kanji921Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冘';
  }
`;

const Kanji922Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '写';
  }
`;

const Kanji923Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冚';
  }
`;

const Kanji924Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '军';
  }
`;

const Kanji925Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '农';
  }
`;

const Kanji926Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冝';
  }
`;

const Kanji927Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冞';
  }
`;

const Kanji928Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冟';
  }
`;

const Kanji929Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冠';
  }
`;

const Kanji930Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冡';
  }
`;

const Kanji931Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冢';
  }
`;

const Kanji932Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冣';
  }
`;

const Kanji933Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冤';
  }
`;

const Kanji934Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冥';
  }
`;

const Kanji935Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冦';
  }
`;

const Kanji936Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冧';
  }
`;

const Kanji937Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冨';
  }
`;

const Kanji938Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冩';
  }
`;

const Kanji939Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冪';
  }
`;

const Kanji940Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冫';
  }
`;

const Kanji941Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冬';
  }
`;

const Kanji942Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冭';
  }
`;

const Kanji943Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冮';
  }
`;

const Kanji944Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冯';
  }
`;

const Kanji945Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冰';
  }
`;

const Kanji946Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冱';
  }
`;

const Kanji947Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冲';
  }
`;

const Kanji948Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '决';
  }
`;

const Kanji949Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冴';
  }
`;

const Kanji950Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '况';
  }
`;

const Kanji951Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冶';
  }
`;

const Kanji952Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冷';
  }
`;

const Kanji953Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冸';
  }
`;

const Kanji954Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冹';
  }
`;

const Kanji955Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冺';
  }
`;

const Kanji956Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冻';
  }
`;

const Kanji957Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冼';
  }
`;

const Kanji958Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冽';
  }
`;

const Kanji959Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冾';
  }
`;

const Kanji960Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '冿';
  }
`;

const Kanji961Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '净';
  }
`;

const Kanji962Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凁';
  }
`;

const Kanji963Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凂';
  }
`;

const Kanji964Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凃';
  }
`;

const Kanji965Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凄';
  }
`;

const Kanji966Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凅';
  }
`;

const Kanji967Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '准';
  }
`;

const Kanji968Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凇';
  }
`;

const Kanji969Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凈';
  }
`;

const Kanji970Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凉';
  }
`;

const Kanji971Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凊';
  }
`;

const Kanji972Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凋';
  }
`;

const Kanji973Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凌';
  }
`;

const Kanji974Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凍';
  }
`;

const Kanji975Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凎';
  }
`;

const Kanji976Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '减';
  }
`;

const Kanji977Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凐';
  }
`;

const Kanji978Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凑';
  }
`;

const Kanji979Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凒';
  }
`;

const Kanji980Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凓';
  }
`;

const Kanji981Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凔';
  }
`;

const Kanji982Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凕';
  }
`;

const Kanji983Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凖';
  }
`;

const Kanji984Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凗';
  }
`;

const Kanji985Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凘';
  }
`;

const Kanji986Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凙';
  }
`;

const Kanji987Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凚';
  }
`;

const Kanji988Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凛';
  }
`;

const Kanji989Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凜';
  }
`;

const Kanji990Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凝';
  }
`;

const Kanji991Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凞';
  }
`;

const Kanji992Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凟';
  }
`;

const Kanji993Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '几';
  }
`;

const Kanji994Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凡';
  }
`;

const Kanji995Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凢';
  }
`;

const Kanji996Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凣';
  }
`;

const Kanji997Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凤';
  }
`;

const Kanji998Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凥';
  }
`;

const Kanji999Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '処';
  }
`;

const Kanji1000Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凧';
  }
`;

const Kanji1001Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凨';
  }
`;

const Kanji1002Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凩';
  }
`;

const Kanji1003Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凪';
  }
`;

const Kanji1004Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凫';
  }
`;

const Kanji1005Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凬';
  }
`;

const Kanji1006Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凭';
  }
`;

const Kanji1007Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凮';
  }
`;

const Kanji1008Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凯';
  }
`;

const Kanji1009Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凰';
  }
`;

const Kanji1010Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凱';
  }
`;

const Kanji1011Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凲';
  }
`;

const Kanji1012Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凳';
  }
`;

const Kanji1013Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凴';
  }
`;

const Kanji1014Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凵';
  }
`;

const Kanji1015Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凶';
  }
`;

const Kanji1016Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凷';
  }
`;

const Kanji1017Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凸';
  }
`;

const Kanji1018Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凹';
  }
`;

const Kanji1019Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '出';
  }
`;

const Kanji1020Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '击';
  }
`;

const Kanji1021Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凼';
  }
`;

const Kanji1022Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '函';
  }
`;

const Kanji1023Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凾';
  }
`;

const Kanji1024Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '凿';
  }
`;

const Kanji1025Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刀';
  }
`;

const Kanji1026Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刁';
  }
`;

const Kanji1027Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刂';
  }
`;

const Kanji1028Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刃';
  }
`;

const Kanji1029Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刄';
  }
`;

const Kanji1030Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刅';
  }
`;

const Kanji1031Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '分';
  }
`;

const Kanji1032Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '切';
  }
`;

const Kanji1033Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刈';
  }
`;

const Kanji1034Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刉';
  }
`;

const Kanji1035Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刊';
  }
`;

const Kanji1036Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刋';
  }
`;

const Kanji1037Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刌';
  }
`;

const Kanji1038Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刍';
  }
`;

const Kanji1039Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刎';
  }
`;

const Kanji1040Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刏';
  }
`;

const Kanji1041Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刐';
  }
`;

const Kanji1042Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刑';
  }
`;

const Kanji1043Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '划';
  }
`;

const Kanji1044Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刓';
  }
`;

const Kanji1045Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刔';
  }
`;

const Kanji1046Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刕';
  }
`;

const Kanji1047Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刖';
  }
`;

const Kanji1048Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '列';
  }
`;

const Kanji1049Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刘';
  }
`;

const Kanji1050Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '则';
  }
`;

const Kanji1051Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刚';
  }
`;

const Kanji1052Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '创';
  }
`;

const Kanji1053Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刜';
  }
`;

const Kanji1054Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '初';
  }
`;

const Kanji1055Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刞';
  }
`;

const Kanji1056Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刟';
  }
`;

const Kanji1057Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '删';
  }
`;

const Kanji1058Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刡';
  }
`;

const Kanji1059Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刢';
  }
`;

const Kanji1060Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刣';
  }
`;

const Kanji1061Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '判';
  }
`;

const Kanji1062Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '別';
  }
`;

const Kanji1063Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刦';
  }
`;

const Kanji1064Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刧';
  }
`;

const Kanji1065Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刨';
  }
`;

const Kanji1066Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '利';
  }
`;

const Kanji1067Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刪';
  }
`;

const Kanji1068Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '别';
  }
`;

const Kanji1069Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刬';
  }
`;

const Kanji1070Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刭';
  }
`;

const Kanji1071Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刮';
  }
`;

const Kanji1072Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刯';
  }
`;

const Kanji1073Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '到';
  }
`;

const Kanji1074Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刱';
  }
`;

const Kanji1075Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刲';
  }
`;

const Kanji1076Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刳';
  }
`;

const Kanji1077Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刴';
  }
`;

const Kanji1078Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刵';
  }
`;

const Kanji1079Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '制';
  }
`;

const Kanji1080Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刷';
  }
`;

const Kanji1081Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '券';
  }
`;

const Kanji1082Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刹';
  }
`;

const Kanji1083Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刺';
  }
`;

const Kanji1084Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刻';
  }
`;

const Kanji1085Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刼';
  }
`;

const Kanji1086Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刽';
  }
`;

const Kanji1087Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刾';
  }
`;

const Kanji1088Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '刿';
  }
`;

const Kanji1089Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剀';
  }
`;

const Kanji1090Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剁';
  }
`;

const Kanji1091Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剂';
  }
`;

const Kanji1092Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剃';
  }
`;

const Kanji1093Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剄';
  }
`;

const Kanji1094Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剅';
  }
`;

const Kanji1095Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剆';
  }
`;

const Kanji1096Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '則';
  }
`;

const Kanji1097Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剈';
  }
`;

const Kanji1098Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剉';
  }
`;

const Kanji1099Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '削';
  }
`;

const Kanji1100Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剋';
  }
`;

const Kanji1101Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剌';
  }
`;

const Kanji1102Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '前';
  }
`;

const Kanji1103Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剎';
  }
`;

const Kanji1104Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剏';
  }
`;

const Kanji1105Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剐';
  }
`;

const Kanji1106Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剑';
  }
`;

const Kanji1107Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剒';
  }
`;

const Kanji1108Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剓';
  }
`;

const Kanji1109Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剔';
  }
`;

const Kanji1110Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剕';
  }
`;

const Kanji1111Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剖';
  }
`;

const Kanji1112Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剗';
  }
`;

const Kanji1113Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剘';
  }
`;

const Kanji1114Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剙';
  }
`;

const Kanji1115Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剚';
  }
`;

const Kanji1116Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剛';
  }
`;

const Kanji1117Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剜';
  }
`;

const Kanji1118Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剝';
  }
`;

const Kanji1119Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剞';
  }
`;

const Kanji1120Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剟';
  }
`;

const Kanji1121Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剠';
  }
`;

const Kanji1122Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剡';
  }
`;

const Kanji1123Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剢';
  }
`;

const Kanji1124Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剣';
  }
`;

const Kanji1125Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剤';
  }
`;

const Kanji1126Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剥';
  }
`;

const Kanji1127Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剦';
  }
`;

const Kanji1128Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剧';
  }
`;

const Kanji1129Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剨';
  }
`;

const Kanji1130Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剩';
  }
`;

const Kanji1131Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剪';
  }
`;

const Kanji1132Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剫';
  }
`;

const Kanji1133Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剬';
  }
`;

const Kanji1134Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剭';
  }
`;

const Kanji1135Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剮';
  }
`;

const Kanji1136Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '副';
  }
`;

const Kanji1137Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剰';
  }
`;

const Kanji1138Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剱';
  }
`;

const Kanji1139Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '割';
  }
`;

const Kanji1140Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剳';
  }
`;

const Kanji1141Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剴';
  }
`;

const Kanji1142Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '創';
  }
`;

const Kanji1143Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剶';
  }
`;

const Kanji1144Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剷';
  }
`;

const Kanji1145Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剸';
  }
`;

const Kanji1146Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剹';
  }
`;

const Kanji1147Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剺';
  }
`;

const Kanji1148Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剻';
  }
`;

const Kanji1149Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剼';
  }
`;

const Kanji1150Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剽';
  }
`;

const Kanji1151Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剾';
  }
`;

const Kanji1152Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '剿';
  }
`;

const Kanji1153Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劀';
  }
`;

const Kanji1154Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劁';
  }
`;

const Kanji1155Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劂';
  }
`;

const Kanji1156Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劃';
  }
`;

const Kanji1157Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劄';
  }
`;

const Kanji1158Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劅';
  }
`;

const Kanji1159Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劆';
  }
`;

const Kanji1160Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劇';
  }
`;

const Kanji1161Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劈';
  }
`;

const Kanji1162Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劉';
  }
`;

const Kanji1163Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劊';
  }
`;

const Kanji1164Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劋';
  }
`;

const Kanji1165Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劌';
  }
`;

const Kanji1166Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劍';
  }
`;

const Kanji1167Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劎';
  }
`;

const Kanji1168Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劏';
  }
`;

const Kanji1169Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劐';
  }
`;

const Kanji1170Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劑';
  }
`;

const Kanji1171Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劒';
  }
`;

const Kanji1172Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劓';
  }
`;

const Kanji1173Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劔';
  }
`;

const Kanji1174Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劕';
  }
`;

const Kanji1175Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劖';
  }
`;

const Kanji1176Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劗';
  }
`;

const Kanji1177Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劘';
  }
`;

const Kanji1178Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劙';
  }
`;

const Kanji1179Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劚';
  }
`;

const Kanji1180Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '力';
  }
`;

const Kanji1181Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劜';
  }
`;

const Kanji1182Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劝';
  }
`;

const Kanji1183Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '办';
  }
`;

const Kanji1184Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '功';
  }
`;

const Kanji1185Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '加';
  }
`;

const Kanji1186Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '务';
  }
`;

const Kanji1187Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劢';
  }
`;

const Kanji1188Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劣';
  }
`;

const Kanji1189Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劤';
  }
`;

const Kanji1190Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劥';
  }
`;

const Kanji1191Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劦';
  }
`;

const Kanji1192Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劧';
  }
`;

const Kanji1193Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '动';
  }
`;

const Kanji1194Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '助';
  }
`;

const Kanji1195Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '努';
  }
`;

const Kanji1196Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劫';
  }
`;

const Kanji1197Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劬';
  }
`;

const Kanji1198Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劭';
  }
`;

const Kanji1199Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劮';
  }
`;

const Kanji1200Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劯';
  }
`;

const Kanji1201Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劰';
  }
`;

const Kanji1202Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '励';
  }
`;

const Kanji1203Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劲';
  }
`;

const Kanji1204Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劳';
  }
`;

const Kanji1205Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '労';
  }
`;

const Kanji1206Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劵';
  }
`;

const Kanji1207Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劶';
  }
`;

const Kanji1208Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劷';
  }
`;

const Kanji1209Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劸';
  }
`;

const Kanji1210Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '効';
  }
`;

const Kanji1211Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劺';
  }
`;

const Kanji1212Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劻';
  }
`;

const Kanji1213Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劼';
  }
`;

const Kanji1214Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劽';
  }
`;

const Kanji1215Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '劾';
  }
`;

const Kanji1216Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '势';
  }
`;

const Kanji1217Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勀';
  }
`;

const Kanji1218Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勁';
  }
`;

const Kanji1219Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勂';
  }
`;

const Kanji1220Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勃';
  }
`;

const Kanji1221Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勄';
  }
`;

const Kanji1222Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勅';
  }
`;

const Kanji1223Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勆';
  }
`;

const Kanji1224Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勇';
  }
`;

const Kanji1225Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勈';
  }
`;

const Kanji1226Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勉';
  }
`;

const Kanji1227Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勊';
  }
`;

const Kanji1228Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勋';
  }
`;

const Kanji1229Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勌';
  }
`;

const Kanji1230Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勍';
  }
`;

const Kanji1231Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勎';
  }
`;

const Kanji1232Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勏';
  }
`;

const Kanji1233Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勐';
  }
`;

const Kanji1234Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勑';
  }
`;

const Kanji1235Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勒';
  }
`;

const Kanji1236Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勓';
  }
`;

const Kanji1237Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勔';
  }
`;

const Kanji1238Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '動';
  }
`;

const Kanji1239Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勖';
  }
`;

const Kanji1240Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勗';
  }
`;

const Kanji1241Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勘';
  }
`;

const Kanji1242Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '務';
  }
`;

const Kanji1243Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勚';
  }
`;

const Kanji1244Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勛';
  }
`;

const Kanji1245Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勜';
  }
`;

const Kanji1246Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勝';
  }
`;

const Kanji1247Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勞';
  }
`;

const Kanji1248Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '募';
  }
`;

const Kanji1249Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勠';
  }
`;

const Kanji1250Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勡';
  }
`;

const Kanji1251Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勢';
  }
`;

const Kanji1252Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勣';
  }
`;

const Kanji1253Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勤';
  }
`;

const Kanji1254Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勥';
  }
`;

const Kanji1255Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勦';
  }
`;

const Kanji1256Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勧';
  }
`;

const Kanji1257Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勨';
  }
`;

const Kanji1258Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勩';
  }
`;

const Kanji1259Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勪';
  }
`;

const Kanji1260Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勫';
  }
`;

const Kanji1261Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勬';
  }
`;

const Kanji1262Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勭';
  }
`;

const Kanji1263Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勮';
  }
`;

const Kanji1264Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勯';
  }
`;

const Kanji1265Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勰';
  }
`;

const Kanji1266Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勱';
  }
`;

const Kanji1267Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勲';
  }
`;

const Kanji1268Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勳';
  }
`;

const Kanji1269Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勴';
  }
`;

const Kanji1270Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勵';
  }
`;

const Kanji1271Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勶';
  }
`;

const Kanji1272Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勷';
  }
`;

const Kanji1273Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勸';
  }
`;

const Kanji1274Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勹';
  }
`;

const Kanji1275Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勺';
  }
`;

const Kanji1276Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勻';
  }
`;

const Kanji1277Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勼';
  }
`;

const Kanji1278Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勽';
  }
`;

const Kanji1279Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勾';
  }
`;

const Kanji1280Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '勿';
  }
`;

const Kanji1281Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匀';
  }
`;

const Kanji1282Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匁';
  }
`;

const Kanji1283Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匂';
  }
`;

const Kanji1284Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匃';
  }
`;

const Kanji1285Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匄';
  }
`;

const Kanji1286Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '包';
  }
`;

const Kanji1287Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匆';
  }
`;

const Kanji1288Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匇';
  }
`;

const Kanji1289Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匈';
  }
`;

const Kanji1290Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匉';
  }
`;

const Kanji1291Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匊';
  }
`;

const Kanji1292Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匋';
  }
`;

const Kanji1293Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匌';
  }
`;

const Kanji1294Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匍';
  }
`;

const Kanji1295Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匎';
  }
`;

const Kanji1296Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匏';
  }
`;

const Kanji1297Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匐';
  }
`;

const Kanji1298Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匑';
  }
`;

const Kanji1299Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匒';
  }
`;

const Kanji1300Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匓';
  }
`;

const Kanji1301Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匔';
  }
`;

const Kanji1302Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匕';
  }
`;

const Kanji1303Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '化';
  }
`;

const Kanji1304Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '北';
  }
`;

const Kanji1305Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匘';
  }
`;

const Kanji1306Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匙';
  }
`;

const Kanji1307Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匚';
  }
`;

const Kanji1308Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匛';
  }
`;

const Kanji1309Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匜';
  }
`;

const Kanji1310Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匝';
  }
`;

const Kanji1311Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匞';
  }
`;

const Kanji1312Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匟';
  }
`;

const Kanji1313Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匠';
  }
`;

const Kanji1314Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匡';
  }
`;

const Kanji1315Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匢';
  }
`;

const Kanji1316Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匣';
  }
`;

const Kanji1317Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匤';
  }
`;

const Kanji1318Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匥';
  }
`;

const Kanji1319Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匦';
  }
`;

const Kanji1320Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匧';
  }
`;

const Kanji1321Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匨';
  }
`;

const Kanji1322Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匩';
  }
`;

const Kanji1323Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匪';
  }
`;

const Kanji1324Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匫';
  }
`;

const Kanji1325Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匬';
  }
`;

const Kanji1326Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匭';
  }
`;

const Kanji1327Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匮';
  }
`;

const Kanji1328Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匯';
  }
`;

const Kanji1329Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匰';
  }
`;

const Kanji1330Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匱';
  }
`;

const Kanji1331Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匲';
  }
`;

const Kanji1332Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匳';
  }
`;

const Kanji1333Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匴';
  }
`;

const Kanji1334Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匵';
  }
`;

const Kanji1335Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匶';
  }
`;

const Kanji1336Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匷';
  }
`;

const Kanji1337Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匸';
  }
`;

const Kanji1338Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匹';
  }
`;

const Kanji1339Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '区';
  }
`;

const Kanji1340Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '医';
  }
`;

const Kanji1341Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匼';
  }
`;

const Kanji1342Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匽';
  }
`;

const Kanji1343Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匾';
  }
`;

const Kanji1344Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '匿';
  }
`;

const Kanji1345Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '區';
  }
`;

const Kanji1346Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '十';
  }
`;

const Kanji1347Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卂';
  }
`;

const Kanji1348Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '千';
  }
`;

const Kanji1349Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卄';
  }
`;

const Kanji1350Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卅';
  }
`;

const Kanji1351Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卆';
  }
`;

const Kanji1352Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '升';
  }
`;

const Kanji1353Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '午';
  }
`;

const Kanji1354Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卉';
  }
`;

const Kanji1355Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '半';
  }
`;

const Kanji1356Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卋';
  }
`;

const Kanji1357Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卌';
  }
`;

const Kanji1358Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卍';
  }
`;

const Kanji1359Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '华';
  }
`;

const Kanji1360Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '协';
  }
`;

const Kanji1361Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卐';
  }
`;

const Kanji1362Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卑';
  }
`;

const Kanji1363Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卒';
  }
`;

const Kanji1364Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卓';
  }
`;

const Kanji1365Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '協';
  }
`;

const Kanji1366Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '单';
  }
`;

const Kanji1367Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卖';
  }
`;

const Kanji1368Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '南';
  }
`;

const Kanji1369Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '単';
  }
`;

const Kanji1370Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卙';
  }
`;

const Kanji1371Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '博';
  }
`;

const Kanji1372Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卛';
  }
`;

const Kanji1373Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卜';
  }
`;

const Kanji1374Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卝';
  }
`;

const Kanji1375Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卞';
  }
`;

const Kanji1376Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卟';
  }
`;

const Kanji1377Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '占';
  }
`;

const Kanji1378Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卡';
  }
`;

const Kanji1379Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卢';
  }
`;

const Kanji1380Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卣';
  }
`;

const Kanji1381Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卤';
  }
`;

const Kanji1382Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卥';
  }
`;

const Kanji1383Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卦';
  }
`;

const Kanji1384Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卧';
  }
`;

const Kanji1385Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卨';
  }
`;

const Kanji1386Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卩';
  }
`;

const Kanji1387Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卪';
  }
`;

const Kanji1388Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卫';
  }
`;

const Kanji1389Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卬';
  }
`;

const Kanji1390Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卭';
  }
`;

const Kanji1391Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卮';
  }
`;

const Kanji1392Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卯';
  }
`;

const Kanji1393Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '印';
  }
`;

const Kanji1394Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '危';
  }
`;

const Kanji1395Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卲';
  }
`;

const Kanji1396Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '即';
  }
`;

const Kanji1397Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '却';
  }
`;

const Kanji1398Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卵';
  }
`;

const Kanji1399Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卶';
  }
`;

const Kanji1400Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卷';
  }
`;

const Kanji1401Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卸';
  }
`;

const Kanji1402Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卹';
  }
`;

const Kanji1403Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卺';
  }
`;

const Kanji1404Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卻';
  }
`;

const Kanji1405Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卼';
  }
`;

const Kanji1406Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卽';
  }
`;

const Kanji1407Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卾';
  }
`;

const Kanji1408Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '卿';
  }
`;

const Kanji1409Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厀';
  }
`;

const Kanji1410Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厁';
  }
`;

const Kanji1411Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厂';
  }
`;

const Kanji1412Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厃';
  }
`;

const Kanji1413Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厄';
  }
`;

const Kanji1414Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厅';
  }
`;

const Kanji1415Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '历';
  }
`;

const Kanji1416Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厇';
  }
`;

const Kanji1417Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厈';
  }
`;

const Kanji1418Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厉';
  }
`;

const Kanji1419Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厊';
  }
`;

const Kanji1420Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '压';
  }
`;

const Kanji1421Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厌';
  }
`;

const Kanji1422Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厍';
  }
`;

const Kanji1423Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厎';
  }
`;

const Kanji1424Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厏';
  }
`;

const Kanji1425Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厐';
  }
`;

const Kanji1426Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厑';
  }
`;

const Kanji1427Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厒';
  }
`;

const Kanji1428Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厓';
  }
`;

const Kanji1429Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厔';
  }
`;

const Kanji1430Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厕';
  }
`;

const Kanji1431Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厖';
  }
`;

const Kanji1432Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厗';
  }
`;

const Kanji1433Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厘';
  }
`;

const Kanji1434Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厙';
  }
`;

const Kanji1435Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厚';
  }
`;

const Kanji1436Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厛';
  }
`;

const Kanji1437Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厜';
  }
`;

const Kanji1438Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厝';
  }
`;

const Kanji1439Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厞';
  }
`;

const Kanji1440Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '原';
  }
`;

const Kanji1441Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厠';
  }
`;

const Kanji1442Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厡';
  }
`;

const Kanji1443Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厢';
  }
`;

const Kanji1444Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厣';
  }
`;

const Kanji1445Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厤';
  }
`;

const Kanji1446Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厥';
  }
`;

const Kanji1447Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厦';
  }
`;

const Kanji1448Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厧';
  }
`;

const Kanji1449Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厨';
  }
`;

const Kanji1450Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厩';
  }
`;

const Kanji1451Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厪';
  }
`;

const Kanji1452Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厫';
  }
`;

const Kanji1453Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厬';
  }
`;

const Kanji1454Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厭';
  }
`;

const Kanji1455Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厮';
  }
`;

const Kanji1456Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厯';
  }
`;

const Kanji1457Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厰';
  }
`;

const Kanji1458Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厱';
  }
`;

const Kanji1459Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厲';
  }
`;

const Kanji1460Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厳';
  }
`;

const Kanji1461Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厴';
  }
`;

const Kanji1462Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厵';
  }
`;

const Kanji1463Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厶';
  }
`;

const Kanji1464Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厷';
  }
`;

const Kanji1465Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厸';
  }
`;

const Kanji1466Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厹';
  }
`;

const Kanji1467Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厺';
  }
`;

const Kanji1468Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '去';
  }
`;

const Kanji1469Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厼';
  }
`;

const Kanji1470Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厽';
  }
`;

const Kanji1471Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '厾';
  }
`;

const Kanji1472Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '县';
  }
`;

const Kanji1473Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叀';
  }
`;

const Kanji1474Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叁';
  }
`;

const Kanji1475Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '参';
  }
`;

const Kanji1476Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '參';
  }
`;

const Kanji1477Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叄';
  }
`;

const Kanji1478Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叅';
  }
`;

const Kanji1479Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叆';
  }
`;

const Kanji1480Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叇';
  }
`;

const Kanji1481Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '又';
  }
`;

const Kanji1482Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叉';
  }
`;

const Kanji1483Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '及';
  }
`;

const Kanji1484Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '友';
  }
`;

const Kanji1485Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '双';
  }
`;

const Kanji1486Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '反';
  }
`;

const Kanji1487Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '収';
  }
`;

const Kanji1488Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叏';
  }
`;

const Kanji1489Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叐';
  }
`;

const Kanji1490Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '发';
  }
`;

const Kanji1491Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叒';
  }
`;

const Kanji1492Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叓';
  }
`;

const Kanji1493Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叔';
  }
`;

const Kanji1494Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叕';
  }
`;

const Kanji1495Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '取';
  }
`;

const Kanji1496Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '受';
  }
`;

const Kanji1497Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '变';
  }
`;

const Kanji1498Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叙';
  }
`;

const Kanji1499Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叚';
  }
`;

const Kanji1500Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叛';
  }
`;

const Kanji1501Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叜';
  }
`;

const Kanji1502Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叝';
  }
`;

const Kanji1503Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叞';
  }
`;

const Kanji1504Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叟';
  }
`;

const Kanji1505Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叠';
  }
`;

const Kanji1506Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叡';
  }
`;

const Kanji1507Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叢';
  }
`;

const Kanji1508Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '口';
  }
`;

const Kanji1509Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '古';
  }
`;

const Kanji1510Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '句';
  }
`;

const Kanji1511Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '另';
  }
`;

const Kanji1512Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叧';
  }
`;

const Kanji1513Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叨';
  }
`;

const Kanji1514Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叩';
  }
`;

const Kanji1515Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '只';
  }
`;

const Kanji1516Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叫';
  }
`;

const Kanji1517Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '召';
  }
`;

const Kanji1518Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叭';
  }
`;

const Kanji1519Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叮';
  }
`;

const Kanji1520Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '可';
  }
`;

const Kanji1521Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '台';
  }
`;

const Kanji1522Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叱';
  }
`;

const Kanji1523Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '史';
  }
`;

const Kanji1524Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '右';
  }
`;

const Kanji1525Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叴';
  }
`;

const Kanji1526Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叵';
  }
`;

const Kanji1527Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叶';
  }
`;

const Kanji1528Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '号';
  }
`;

const Kanji1529Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '司';
  }
`;

const Kanji1530Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叹';
  }
`;

const Kanji1531Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叺';
  }
`;

const Kanji1532Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叻';
  }
`;

const Kanji1533Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叼';
  }
`;

const Kanji1534Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叽';
  }
`;

const Kanji1535Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叾';
  }
`;

const Kanji1536Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '叿';
  }
`;

const Kanji1537Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吀';
  }
`;

const Kanji1538Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吁';
  }
`;

const Kanji1539Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吂';
  }
`;

const Kanji1540Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吃';
  }
`;

const Kanji1541Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '各';
  }
`;

const Kanji1542Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吅';
  }
`;

const Kanji1543Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吆';
  }
`;

const Kanji1544Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吇';
  }
`;

const Kanji1545Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '合';
  }
`;

const Kanji1546Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吉';
  }
`;

const Kanji1547Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吊';
  }
`;

const Kanji1548Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吋';
  }
`;

const Kanji1549Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '同';
  }
`;

const Kanji1550Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '名';
  }
`;

const Kanji1551Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '后';
  }
`;

const Kanji1552Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吏';
  }
`;

const Kanji1553Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吐';
  }
`;

const Kanji1554Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '向';
  }
`;

const Kanji1555Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吒';
  }
`;

const Kanji1556Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吓';
  }
`;

const Kanji1557Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吔';
  }
`;

const Kanji1558Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吕';
  }
`;

const Kanji1559Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吖';
  }
`;

const Kanji1560Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吗';
  }
`;

const Kanji1561Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吘';
  }
`;

const Kanji1562Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吙';
  }
`;

const Kanji1563Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吚';
  }
`;

const Kanji1564Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '君';
  }
`;

const Kanji1565Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吜';
  }
`;

const Kanji1566Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吝';
  }
`;

const Kanji1567Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吞';
  }
`;

const Kanji1568Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吟';
  }
`;

const Kanji1569Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吠';
  }
`;

const Kanji1570Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吡';
  }
`;

const Kanji1571Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吢';
  }
`;

const Kanji1572Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吣';
  }
`;

const Kanji1573Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吤';
  }
`;

const Kanji1574Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吥';
  }
`;

const Kanji1575Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '否';
  }
`;

const Kanji1576Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吧';
  }
`;

const Kanji1577Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吨';
  }
`;

const Kanji1578Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吩';
  }
`;

const Kanji1579Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吪';
  }
`;

const Kanji1580Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '含';
  }
`;

const Kanji1581Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '听';
  }
`;

const Kanji1582Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吭';
  }
`;

const Kanji1583Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吮';
  }
`;

const Kanji1584Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '启';
  }
`;

const Kanji1585Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吰';
  }
`;

const Kanji1586Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吱';
  }
`;

const Kanji1587Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吲';
  }
`;

const Kanji1588Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吳';
  }
`;

const Kanji1589Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吴';
  }
`;

const Kanji1590Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吵';
  }
`;

const Kanji1591Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吶';
  }
`;

const Kanji1592Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吷';
  }
`;

const Kanji1593Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吸';
  }
`;

const Kanji1594Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吹';
  }
`;

const Kanji1595Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吺';
  }
`;

const Kanji1596Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吻';
  }
`;

const Kanji1597Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吼';
  }
`;

const Kanji1598Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吽';
  }
`;

const Kanji1599Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吾';
  }
`;

const Kanji1600Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '吿';
  }
`;

const Kanji1601Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呀';
  }
`;

const Kanji1602Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呁';
  }
`;

const Kanji1603Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呂';
  }
`;

const Kanji1604Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呃';
  }
`;

const Kanji1605Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呄';
  }
`;

const Kanji1606Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呅';
  }
`;

const Kanji1607Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呆';
  }
`;

const Kanji1608Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呇';
  }
`;

const Kanji1609Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呈';
  }
`;

const Kanji1610Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呉';
  }
`;

const Kanji1611Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '告';
  }
`;

const Kanji1612Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呋';
  }
`;

const Kanji1613Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呌';
  }
`;

const Kanji1614Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呍';
  }
`;

const Kanji1615Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呎';
  }
`;

const Kanji1616Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呏';
  }
`;

const Kanji1617Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呐';
  }
`;

const Kanji1618Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呑';
  }
`;

const Kanji1619Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呒';
  }
`;

const Kanji1620Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呓';
  }
`;

const Kanji1621Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呔';
  }
`;

const Kanji1622Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呕';
  }
`;

const Kanji1623Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呖';
  }
`;

const Kanji1624Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呗';
  }
`;

const Kanji1625Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '员';
  }
`;

const Kanji1626Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呙';
  }
`;

const Kanji1627Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呚';
  }
`;

const Kanji1628Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呛';
  }
`;

const Kanji1629Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呜';
  }
`;

const Kanji1630Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呝';
  }
`;

const Kanji1631Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呞';
  }
`;

const Kanji1632Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呟';
  }
`;

const Kanji1633Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呠';
  }
`;

const Kanji1634Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呡';
  }
`;

const Kanji1635Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呢';
  }
`;

const Kanji1636Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呣';
  }
`;

const Kanji1637Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呤';
  }
`;

const Kanji1638Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呥';
  }
`;

const Kanji1639Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呦';
  }
`;

const Kanji1640Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呧';
  }
`;

const Kanji1641Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '周';
  }
`;

const Kanji1642Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呩';
  }
`;

const Kanji1643Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呪';
  }
`;

const Kanji1644Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呫';
  }
`;

const Kanji1645Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呬';
  }
`;

const Kanji1646Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呭';
  }
`;

const Kanji1647Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呮';
  }
`;

const Kanji1648Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呯';
  }
`;

const Kanji1649Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呰';
  }
`;

const Kanji1650Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呱';
  }
`;

const Kanji1651Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呲';
  }
`;

const Kanji1652Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '味';
  }
`;

const Kanji1653Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呴';
  }
`;

const Kanji1654Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呵';
  }
`;

const Kanji1655Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呶';
  }
`;

const Kanji1656Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呷';
  }
`;

const Kanji1657Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呸';
  }
`;

const Kanji1658Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呹';
  }
`;

const Kanji1659Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呺';
  }
`;

const Kanji1660Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呻';
  }
`;

const Kanji1661Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呼';
  }
`;

const Kanji1662Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '命';
  }
`;

const Kanji1663Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呾';
  }
`;

const Kanji1664Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '呿';
  }
`;

const Kanji1665Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咀';
  }
`;

const Kanji1666Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咁';
  }
`;

const Kanji1667Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咂';
  }
`;

const Kanji1668Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咃';
  }
`;

const Kanji1669Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咄';
  }
`;

const Kanji1670Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咅';
  }
`;

const Kanji1671Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咆';
  }
`;

const Kanji1672Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咇';
  }
`;

const Kanji1673Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咈';
  }
`;

const Kanji1674Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咉';
  }
`;

const Kanji1675Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咊';
  }
`;

const Kanji1676Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咋';
  }
`;

const Kanji1677Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '和';
  }
`;

const Kanji1678Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咍';
  }
`;

const Kanji1679Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咎';
  }
`;

const Kanji1680Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咏';
  }
`;

const Kanji1681Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咐';
  }
`;

const Kanji1682Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咑';
  }
`;

const Kanji1683Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咒';
  }
`;

const Kanji1684Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咓';
  }
`;

const Kanji1685Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咔';
  }
`;

const Kanji1686Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咕';
  }
`;

const Kanji1687Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咖';
  }
`;

const Kanji1688Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咗';
  }
`;

const Kanji1689Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咘';
  }
`;

const Kanji1690Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咙';
  }
`;

const Kanji1691Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咚';
  }
`;

const Kanji1692Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咛';
  }
`;

const Kanji1693Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咜';
  }
`;

const Kanji1694Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咝';
  }
`;

const Kanji1695Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咞';
  }
`;

const Kanji1696Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咟';
  }
`;

const Kanji1697Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咠';
  }
`;

const Kanji1698Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咡';
  }
`;

const Kanji1699Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咢';
  }
`;

const Kanji1700Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咣';
  }
`;

const Kanji1701Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咤';
  }
`;

const Kanji1702Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咥';
  }
`;

const Kanji1703Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咦';
  }
`;

const Kanji1704Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咧';
  }
`;

const Kanji1705Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咨';
  }
`;

const Kanji1706Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咩';
  }
`;

const Kanji1707Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咪';
  }
`;

const Kanji1708Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咫';
  }
`;

const Kanji1709Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咬';
  }
`;

const Kanji1710Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咭';
  }
`;

const Kanji1711Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咮';
  }
`;

const Kanji1712Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咯';
  }
`;

const Kanji1713Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咰';
  }
`;

const Kanji1714Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咱';
  }
`;

const Kanji1715Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咲';
  }
`;

const Kanji1716Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咳';
  }
`;

const Kanji1717Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咴';
  }
`;

const Kanji1718Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咵';
  }
`;

const Kanji1719Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咶';
  }
`;

const Kanji1720Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咷';
  }
`;

const Kanji1721Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咸';
  }
`;

const Kanji1722Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咹';
  }
`;

const Kanji1723Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咺';
  }
`;

const Kanji1724Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咻';
  }
`;

const Kanji1725Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咼';
  }
`;

const Kanji1726Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咽';
  }
`;

const Kanji1727Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咾';
  }
`;

const Kanji1728Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '咿';
  }
`;

const Kanji1729Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哀';
  }
`;

const Kanji1730Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '品';
  }
`;

const Kanji1731Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哂';
  }
`;

const Kanji1732Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哃';
  }
`;

const Kanji1733Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哄';
  }
`;

const Kanji1734Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哅';
  }
`;

const Kanji1735Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哆';
  }
`;

const Kanji1736Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哇';
  }
`;

const Kanji1737Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哈';
  }
`;

const Kanji1738Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哉';
  }
`;

const Kanji1739Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哊';
  }
`;

const Kanji1740Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哋';
  }
`;

const Kanji1741Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哌';
  }
`;

const Kanji1742Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '响';
  }
`;

const Kanji1743Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哎';
  }
`;

const Kanji1744Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哏';
  }
`;

const Kanji1745Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哐';
  }
`;

const Kanji1746Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哑';
  }
`;

const Kanji1747Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哒';
  }
`;

const Kanji1748Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哓';
  }
`;

const Kanji1749Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哔';
  }
`;

const Kanji1750Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哕';
  }
`;

const Kanji1751Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哖';
  }
`;

const Kanji1752Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哗';
  }
`;

const Kanji1753Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哘';
  }
`;

const Kanji1754Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哙';
  }
`;

const Kanji1755Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哚';
  }
`;

const Kanji1756Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哛';
  }
`;

const Kanji1757Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哜';
  }
`;

const Kanji1758Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哝';
  }
`;

const Kanji1759Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哞';
  }
`;

const Kanji1760Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哟';
  }
`;

const Kanji1761Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哠';
  }
`;

const Kanji1762Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '員';
  }
`;

const Kanji1763Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哢';
  }
`;

const Kanji1764Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哣';
  }
`;

const Kanji1765Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哤';
  }
`;

const Kanji1766Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哥';
  }
`;

const Kanji1767Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哦';
  }
`;

const Kanji1768Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哧';
  }
`;

const Kanji1769Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哨';
  }
`;

const Kanji1770Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哩';
  }
`;

const Kanji1771Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哪';
  }
`;

const Kanji1772Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哫';
  }
`;

const Kanji1773Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哬';
  }
`;

const Kanji1774Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哭';
  }
`;

const Kanji1775Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哮';
  }
`;

const Kanji1776Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哯';
  }
`;

const Kanji1777Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哰';
  }
`;

const Kanji1778Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哱';
  }
`;

const Kanji1779Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哲';
  }
`;

const Kanji1780Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哳';
  }
`;

const Kanji1781Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哴';
  }
`;

const Kanji1782Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哵';
  }
`;

const Kanji1783Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哶';
  }
`;

const Kanji1784Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哷';
  }
`;

const Kanji1785Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哸';
  }
`;

const Kanji1786Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哹';
  }
`;

const Kanji1787Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哺';
  }
`;

const Kanji1788Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哻';
  }
`;

const Kanji1789Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哼';
  }
`;

const Kanji1790Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哽';
  }
`;

const Kanji1791Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哾';
  }
`;

const Kanji1792Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '哿';
  }
`;

const Kanji1793Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唀';
  }
`;

const Kanji1794Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唁';
  }
`;

const Kanji1795Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唂';
  }
`;

const Kanji1796Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唃';
  }
`;

const Kanji1797Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唄';
  }
`;

const Kanji1798Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唅';
  }
`;

const Kanji1799Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唆';
  }
`;

const Kanji1800Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唇';
  }
`;

const Kanji1801Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唈';
  }
`;

const Kanji1802Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唉';
  }
`;

const Kanji1803Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唊';
  }
`;

const Kanji1804Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唋';
  }
`;

const Kanji1805Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唌';
  }
`;

const Kanji1806Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唍';
  }
`;

const Kanji1807Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唎';
  }
`;

const Kanji1808Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唏';
  }
`;

const Kanji1809Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唐';
  }
`;

const Kanji1810Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唑';
  }
`;

const Kanji1811Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唒';
  }
`;

const Kanji1812Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唓';
  }
`;

const Kanji1813Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唔';
  }
`;

const Kanji1814Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唕';
  }
`;

const Kanji1815Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唖';
  }
`;

const Kanji1816Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唗';
  }
`;

const Kanji1817Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唘';
  }
`;

const Kanji1818Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唙';
  }
`;

const Kanji1819Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唚';
  }
`;

const Kanji1820Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唛';
  }
`;

const Kanji1821Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唜';
  }
`;

const Kanji1822Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唝';
  }
`;

const Kanji1823Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唞';
  }
`;

const Kanji1824Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唟';
  }
`;

const Kanji1825Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唠';
  }
`;

const Kanji1826Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唡';
  }
`;

const Kanji1827Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唢';
  }
`;

const Kanji1828Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唣';
  }
`;

const Kanji1829Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唤';
  }
`;

const Kanji1830Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唥';
  }
`;

const Kanji1831Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唦';
  }
`;

const Kanji1832Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唧';
  }
`;

const Kanji1833Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唨';
  }
`;

const Kanji1834Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唩';
  }
`;

const Kanji1835Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唪';
  }
`;

const Kanji1836Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唫';
  }
`;

const Kanji1837Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唬';
  }
`;

const Kanji1838Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唭';
  }
`;

const Kanji1839Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '售';
  }
`;

const Kanji1840Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唯';
  }
`;

const Kanji1841Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唰';
  }
`;

const Kanji1842Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唱';
  }
`;

const Kanji1843Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唲';
  }
`;

const Kanji1844Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唳';
  }
`;

const Kanji1845Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唴';
  }
`;

const Kanji1846Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唵';
  }
`;

const Kanji1847Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唶';
  }
`;

const Kanji1848Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唷';
  }
`;

const Kanji1849Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唸';
  }
`;

const Kanji1850Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唹';
  }
`;

const Kanji1851Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唺';
  }
`;

const Kanji1852Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唻';
  }
`;

const Kanji1853Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唼';
  }
`;

const Kanji1854Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唽';
  }
`;

const Kanji1855Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唾';
  }
`;

const Kanji1856Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '唿';
  }
`;

const Kanji1857Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啀';
  }
`;

const Kanji1858Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啁';
  }
`;

const Kanji1859Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啂';
  }
`;

const Kanji1860Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啃';
  }
`;

const Kanji1861Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啄';
  }
`;

const Kanji1862Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啅';
  }
`;

const Kanji1863Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '商';
  }
`;

const Kanji1864Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啇';
  }
`;

const Kanji1865Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啈';
  }
`;

const Kanji1866Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啉';
  }
`;

const Kanji1867Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啊';
  }
`;

const Kanji1868Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啋';
  }
`;

const Kanji1869Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啌';
  }
`;

const Kanji1870Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啍';
  }
`;

const Kanji1871Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啎';
  }
`;

const Kanji1872Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '問';
  }
`;

const Kanji1873Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啐';
  }
`;

const Kanji1874Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啑';
  }
`;

const Kanji1875Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啒';
  }
`;

const Kanji1876Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啓';
  }
`;

const Kanji1877Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啔';
  }
`;

const Kanji1878Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啕';
  }
`;

const Kanji1879Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啖';
  }
`;

const Kanji1880Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啗';
  }
`;

const Kanji1881Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啘';
  }
`;

const Kanji1882Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啙';
  }
`;

const Kanji1883Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啚';
  }
`;

const Kanji1884Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啛';
  }
`;

const Kanji1885Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啜';
  }
`;

const Kanji1886Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啝';
  }
`;

const Kanji1887Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啞';
  }
`;

const Kanji1888Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啟';
  }
`;

const Kanji1889Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啠';
  }
`;

const Kanji1890Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啡';
  }
`;

const Kanji1891Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啢';
  }
`;

const Kanji1892Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啣';
  }
`;

const Kanji1893Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啤';
  }
`;

const Kanji1894Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啥';
  }
`;

const Kanji1895Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啦';
  }
`;

const Kanji1896Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啧';
  }
`;

const Kanji1897Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啨';
  }
`;

const Kanji1898Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啩';
  }
`;

const Kanji1899Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啪';
  }
`;

const Kanji1900Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啫';
  }
`;

const Kanji1901Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啬';
  }
`;

const Kanji1902Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啭';
  }
`;

const Kanji1903Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啮';
  }
`;

const Kanji1904Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啯';
  }
`;

const Kanji1905Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啰';
  }
`;

const Kanji1906Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啱';
  }
`;

const Kanji1907Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啲';
  }
`;

const Kanji1908Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啳';
  }
`;

const Kanji1909Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啴';
  }
`;

const Kanji1910Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啵';
  }
`;

const Kanji1911Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啶';
  }
`;

const Kanji1912Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啷';
  }
`;

const Kanji1913Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啸';
  }
`;

const Kanji1914Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啹';
  }
`;

const Kanji1915Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啺';
  }
`;

const Kanji1916Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啻';
  }
`;

const Kanji1917Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啼';
  }
`;

const Kanji1918Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啽';
  }
`;

const Kanji1919Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啾';
  }
`;

const Kanji1920Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '啿';
  }
`;

const Kanji1921Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喀';
  }
`;

const Kanji1922Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喁';
  }
`;

const Kanji1923Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喂';
  }
`;

const Kanji1924Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喃';
  }
`;

const Kanji1925Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '善';
  }
`;

const Kanji1926Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喅';
  }
`;

const Kanji1927Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喆';
  }
`;

const Kanji1928Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喇';
  }
`;

const Kanji1929Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喈';
  }
`;

const Kanji1930Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喉';
  }
`;

const Kanji1931Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喊';
  }
`;

const Kanji1932Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喋';
  }
`;

const Kanji1933Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喌';
  }
`;

const Kanji1934Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喍';
  }
`;

const Kanji1935Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喎';
  }
`;

const Kanji1936Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喏';
  }
`;

const Kanji1937Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喐';
  }
`;

const Kanji1938Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喑';
  }
`;

const Kanji1939Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喒';
  }
`;

const Kanji1940Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喓';
  }
`;

const Kanji1941Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喔';
  }
`;

const Kanji1942Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喕';
  }
`;

const Kanji1943Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喖';
  }
`;

const Kanji1944Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喗';
  }
`;

const Kanji1945Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喘';
  }
`;

const Kanji1946Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喙';
  }
`;

const Kanji1947Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喚';
  }
`;

const Kanji1948Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喛';
  }
`;

const Kanji1949Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喜';
  }
`;

const Kanji1950Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喝';
  }
`;

const Kanji1951Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喞';
  }
`;

const Kanji1952Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喟';
  }
`;

const Kanji1953Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喠';
  }
`;

const Kanji1954Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喡';
  }
`;

const Kanji1955Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喢';
  }
`;

const Kanji1956Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喣';
  }
`;

const Kanji1957Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喤';
  }
`;

const Kanji1958Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喥';
  }
`;

const Kanji1959Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喦';
  }
`;

const Kanji1960Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喧';
  }
`;

const Kanji1961Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喨';
  }
`;

const Kanji1962Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喩';
  }
`;

const Kanji1963Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喪';
  }
`;

const Kanji1964Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喫';
  }
`;

const Kanji1965Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喬';
  }
`;

const Kanji1966Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喭';
  }
`;

const Kanji1967Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '單';
  }
`;

const Kanji1968Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喯';
  }
`;

const Kanji1969Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喰';
  }
`;

const Kanji1970Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喱';
  }
`;

const Kanji1971Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喲';
  }
`;

const Kanji1972Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喳';
  }
`;

const Kanji1973Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喴';
  }
`;

const Kanji1974Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喵';
  }
`;

const Kanji1975Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '営';
  }
`;

const Kanji1976Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喷';
  }
`;

const Kanji1977Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喸';
  }
`;

const Kanji1978Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喹';
  }
`;

const Kanji1979Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喺';
  }
`;

const Kanji1980Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喻';
  }
`;

const Kanji1981Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喼';
  }
`;

const Kanji1982Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喽';
  }
`;

const Kanji1983Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喾';
  }
`;

const Kanji1984Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '喿';
  }
`;

const Kanji1985Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗀';
  }
`;

const Kanji1986Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗁';
  }
`;

const Kanji1987Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗂';
  }
`;

const Kanji1988Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗃';
  }
`;

const Kanji1989Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗄';
  }
`;

const Kanji1990Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗅';
  }
`;

const Kanji1991Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗆';
  }
`;

const Kanji1992Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗇';
  }
`;

const Kanji1993Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗈';
  }
`;

const Kanji1994Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗉';
  }
`;

const Kanji1995Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗊';
  }
`;

const Kanji1996Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗋';
  }
`;

const Kanji1997Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗌';
  }
`;

const Kanji1998Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗍';
  }
`;

const Kanji1999Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗎';
  }
`;

const Kanji2000Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗏';
  }
`;

const Kanji2001Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗐';
  }
`;

const Kanji2002Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗑';
  }
`;

const Kanji2003Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗒';
  }
`;

const Kanji2004Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗓';
  }
`;

const Kanji2005Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗔';
  }
`;

const Kanji2006Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗕';
  }
`;

const Kanji2007Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗖';
  }
`;

const Kanji2008Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗗';
  }
`;

const Kanji2009Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗘';
  }
`;

const Kanji2010Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗙';
  }
`;

const Kanji2011Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗚';
  }
`;

const Kanji2012Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗛';
  }
`;

const Kanji2013Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗜';
  }
`;

const Kanji2014Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗝';
  }
`;

const Kanji2015Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗞';
  }
`;

const Kanji2016Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗟';
  }
`;

const Kanji2017Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗠';
  }
`;

const Kanji2018Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗡';
  }
`;

const Kanji2019Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗢';
  }
`;

const Kanji2020Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗣';
  }
`;

const Kanji2021Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗤';
  }
`;

const Kanji2022Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗥';
  }
`;

const Kanji2023Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗦';
  }
`;

const Kanji2024Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗧';
  }
`;

const Kanji2025Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗨';
  }
`;

const Kanji2026Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗩';
  }
`;

const Kanji2027Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗪';
  }
`;

const Kanji2028Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗫';
  }
`;

const Kanji2029Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗬';
  }
`;

const Kanji2030Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗭';
  }
`;

const Kanji2031Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗮';
  }
`;

const Kanji2032Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗯';
  }
`;

const Kanji2033Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗰';
  }
`;

const Kanji2034Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗱';
  }
`;

const Kanji2035Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗲';
  }
`;

const Kanji2036Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗳';
  }
`;

const Kanji2037Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗴';
  }
`;

const Kanji2038Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗵';
  }
`;

const Kanji2039Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗶';
  }
`;

const Kanji2040Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗷';
  }
`;

const Kanji2041Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗸';
  }
`;

const Kanji2042Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗹';
  }
`;

const Kanji2043Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗺';
  }
`;

const Kanji2044Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗻';
  }
`;

const Kanji2045Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗼';
  }
`;

const Kanji2046Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗽';
  }
`;

const Kanji2047Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗾';
  }
`;

const Kanji2048Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嗿';
  }
`;

const Kanji2049Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘀';
  }
`;

const Kanji2050Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘁';
  }
`;

const Kanji2051Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘂';
  }
`;

const Kanji2052Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘃';
  }
`;

const Kanji2053Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘄';
  }
`;

const Kanji2054Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘅';
  }
`;

const Kanji2055Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘆';
  }
`;

const Kanji2056Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘇';
  }
`;

const Kanji2057Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘈';
  }
`;

const Kanji2058Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘉';
  }
`;

const Kanji2059Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘊';
  }
`;

const Kanji2060Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘋';
  }
`;

const Kanji2061Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘌';
  }
`;

const Kanji2062Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘍';
  }
`;

const Kanji2063Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘎';
  }
`;

const Kanji2064Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘏';
  }
`;

const Kanji2065Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘐';
  }
`;

const Kanji2066Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘑';
  }
`;

const Kanji2067Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘒';
  }
`;

const Kanji2068Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘓';
  }
`;

const Kanji2069Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘔';
  }
`;

const Kanji2070Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘕';
  }
`;

const Kanji2071Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘖';
  }
`;

const Kanji2072Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘗';
  }
`;

const Kanji2073Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘘';
  }
`;

const Kanji2074Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘙';
  }
`;

const Kanji2075Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘚';
  }
`;

const Kanji2076Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘛';
  }
`;

const Kanji2077Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘜';
  }
`;

const Kanji2078Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘝';
  }
`;

const Kanji2079Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘞';
  }
`;

const Kanji2080Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘟';
  }
`;

const Kanji2081Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘠';
  }
`;

const Kanji2082Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘡';
  }
`;

const Kanji2083Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘢';
  }
`;

const Kanji2084Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘣';
  }
`;

const Kanji2085Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘤';
  }
`;

const Kanji2086Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘥';
  }
`;

const Kanji2087Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘦';
  }
`;

const Kanji2088Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘧';
  }
`;

const Kanji2089Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘨';
  }
`;

const Kanji2090Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘩';
  }
`;

const Kanji2091Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘪';
  }
`;

const Kanji2092Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘫';
  }
`;

const Kanji2093Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘬';
  }
`;

const Kanji2094Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘭';
  }
`;

const Kanji2095Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘮';
  }
`;

const Kanji2096Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘯';
  }
`;

const Kanji2097Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘰';
  }
`;

const Kanji2098Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘱';
  }
`;

const Kanji2099Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘲';
  }
`;

const Kanji2100Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘳';
  }
`;

const Kanji2101Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘴';
  }
`;

const Kanji2102Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘵';
  }
`;

const Kanji2103Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘶';
  }
`;

const Kanji2104Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘷';
  }
`;

const Kanji2105Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘸';
  }
`;

const Kanji2106Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘹';
  }
`;

const Kanji2107Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘺';
  }
`;

const Kanji2108Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘻';
  }
`;

const Kanji2109Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘼';
  }
`;

const Kanji2110Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘽';
  }
`;

const Kanji2111Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘾';
  }
`;

const Kanji2112Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嘿';
  }
`;

const Kanji2113Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噀';
  }
`;

const Kanji2114Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噁';
  }
`;

const Kanji2115Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噂';
  }
`;

const Kanji2116Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噃';
  }
`;

const Kanji2117Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噄';
  }
`;

const Kanji2118Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噅';
  }
`;

const Kanji2119Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噆';
  }
`;

const Kanji2120Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噇';
  }
`;

const Kanji2121Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噈';
  }
`;

const Kanji2122Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噉';
  }
`;

const Kanji2123Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噊';
  }
`;

const Kanji2124Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噋';
  }
`;

const Kanji2125Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噌';
  }
`;

const Kanji2126Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噍';
  }
`;

const Kanji2127Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噎';
  }
`;

const Kanji2128Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噏';
  }
`;

const Kanji2129Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噐';
  }
`;

const Kanji2130Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噑';
  }
`;

const Kanji2131Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噒';
  }
`;

const Kanji2132Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噓';
  }
`;

const Kanji2133Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噔';
  }
`;

const Kanji2134Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噕';
  }
`;

const Kanji2135Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噖';
  }
`;

const Kanji2136Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噗';
  }
`;

const Kanji2137Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噘';
  }
`;

const Kanji2138Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噙';
  }
`;

const Kanji2139Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噚';
  }
`;

const Kanji2140Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噛';
  }
`;

const Kanji2141Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噜';
  }
`;

const Kanji2142Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噝';
  }
`;

const Kanji2143Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噞';
  }
`;

const Kanji2144Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噟';
  }
`;

const Kanji2145Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噠';
  }
`;

const Kanji2146Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噡';
  }
`;

const Kanji2147Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噢';
  }
`;

const Kanji2148Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噣';
  }
`;

const Kanji2149Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噤';
  }
`;

const Kanji2150Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噥';
  }
`;

const Kanji2151Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噦';
  }
`;

const Kanji2152Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噧';
  }
`;

const Kanji2153Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '器';
  }
`;

const Kanji2154Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噩';
  }
`;

const Kanji2155Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噪';
  }
`;

const Kanji2156Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噫';
  }
`;

const Kanji2157Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噬';
  }
`;

const Kanji2158Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噭';
  }
`;

const Kanji2159Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噮';
  }
`;

const Kanji2160Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噯';
  }
`;

const Kanji2161Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噰';
  }
`;

const Kanji2162Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噱';
  }
`;

const Kanji2163Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噲';
  }
`;

const Kanji2164Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噳';
  }
`;

const Kanji2165Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噴';
  }
`;

const Kanji2166Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噵';
  }
`;

const Kanji2167Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噶';
  }
`;

const Kanji2168Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噷';
  }
`;

const Kanji2169Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噸';
  }
`;

const Kanji2170Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噹';
  }
`;

const Kanji2171Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噺';
  }
`;

const Kanji2172Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噻';
  }
`;

const Kanji2173Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噼';
  }
`;

const Kanji2174Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噽';
  }
`;

const Kanji2175Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噾';
  }
`;

const Kanji2176Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '噿';
  }
`;

const Kanji2177Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚀';
  }
`;

const Kanji2178Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚁';
  }
`;

const Kanji2179Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚂';
  }
`;

const Kanji2180Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚃';
  }
`;

const Kanji2181Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚄';
  }
`;

const Kanji2182Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚅';
  }
`;

const Kanji2183Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚆';
  }
`;

const Kanji2184Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚇';
  }
`;

const Kanji2185Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚈';
  }
`;

const Kanji2186Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚉';
  }
`;

const Kanji2187Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚊';
  }
`;

const Kanji2188Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚋';
  }
`;

const Kanji2189Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚌';
  }
`;

const Kanji2190Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚍';
  }
`;

const Kanji2191Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚎';
  }
`;

const Kanji2192Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚏';
  }
`;

const Kanji2193Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚐';
  }
`;

const Kanji2194Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚑';
  }
`;

const Kanji2195Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚒';
  }
`;

const Kanji2196Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚓';
  }
`;

const Kanji2197Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚔';
  }
`;

const Kanji2198Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚕';
  }
`;

const Kanji2199Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚖';
  }
`;

const Kanji2200Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚗';
  }
`;

const Kanji2201Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚘';
  }
`;

const Kanji2202Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚙';
  }
`;

const Kanji2203Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚚';
  }
`;

const Kanji2204Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚛';
  }
`;

const Kanji2205Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚜';
  }
`;

const Kanji2206Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚝';
  }
`;

const Kanji2207Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚞';
  }
`;

const Kanji2208Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚟';
  }
`;

const Kanji2209Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚠';
  }
`;

const Kanji2210Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚡';
  }
`;

const Kanji2211Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚢';
  }
`;

const Kanji2212Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚣';
  }
`;

const Kanji2213Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚤';
  }
`;

const Kanji2214Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚥';
  }
`;

const Kanji2215Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚦';
  }
`;

const Kanji2216Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚧';
  }
`;

const Kanji2217Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚨';
  }
`;

const Kanji2218Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚩';
  }
`;

const Kanji2219Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚪';
  }
`;

const Kanji2220Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚫';
  }
`;

const Kanji2221Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚬';
  }
`;

const Kanji2222Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚭';
  }
`;

const Kanji2223Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚮';
  }
`;

const Kanji2224Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚯';
  }
`;

const Kanji2225Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚰';
  }
`;

const Kanji2226Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚱';
  }
`;

const Kanji2227Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚲';
  }
`;

const Kanji2228Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚳';
  }
`;

const Kanji2229Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚴';
  }
`;

const Kanji2230Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚵';
  }
`;

const Kanji2231Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚶';
  }
`;

const Kanji2232Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚷';
  }
`;

const Kanji2233Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚸';
  }
`;

const Kanji2234Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚹';
  }
`;

const Kanji2235Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚺';
  }
`;

const Kanji2236Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚻';
  }
`;

const Kanji2237Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚼';
  }
`;

const Kanji2238Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚽';
  }
`;

const Kanji2239Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚾';
  }
`;

const Kanji2240Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '嚿';
  }
`;

const Kanji2241Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囀';
  }
`;

const Kanji2242Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囁';
  }
`;

const Kanji2243Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囂';
  }
`;

const Kanji2244Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囃';
  }
`;

const Kanji2245Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囄';
  }
`;

const Kanji2246Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囅';
  }
`;

const Kanji2247Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囆';
  }
`;

const Kanji2248Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囇';
  }
`;

const Kanji2249Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囈';
  }
`;

const Kanji2250Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囉';
  }
`;

const Kanji2251Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囊';
  }
`;

const Kanji2252Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囋';
  }
`;

const Kanji2253Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囌';
  }
`;

const Kanji2254Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囍';
  }
`;

const Kanji2255Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囎';
  }
`;

const Kanji2256Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囏';
  }
`;

const Kanji2257Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囐';
  }
`;

const Kanji2258Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囑';
  }
`;

const Kanji2259Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囒';
  }
`;

const Kanji2260Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囓';
  }
`;

const Kanji2261Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囔';
  }
`;

const Kanji2262Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囕';
  }
`;

const Kanji2263Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囖';
  }
`;

const Kanji2264Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囗';
  }
`;

const Kanji2265Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囘';
  }
`;

const Kanji2266Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囙';
  }
`;

const Kanji2267Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囚';
  }
`;

const Kanji2268Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '四';
  }
`;

const Kanji2269Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囜';
  }
`;

const Kanji2270Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囝';
  }
`;

const Kanji2271Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '回';
  }
`;

const Kanji2272Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囟';
  }
`;

const Kanji2273Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '因';
  }
`;

const Kanji2274Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囡';
  }
`;

const Kanji2275Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '团';
  }
`;

const Kanji2276Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '団';
  }
`;

const Kanji2277Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囤';
  }
`;

const Kanji2278Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囥';
  }
`;

const Kanji2279Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囦';
  }
`;

const Kanji2280Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囧';
  }
`;

const Kanji2281Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囨';
  }
`;

const Kanji2282Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囩';
  }
`;

const Kanji2283Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囪';
  }
`;

const Kanji2284Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囫';
  }
`;

const Kanji2285Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囬';
  }
`;

const Kanji2286Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '园';
  }
`;

const Kanji2287Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囮';
  }
`;

const Kanji2288Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囯';
  }
`;

const Kanji2289Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '困';
  }
`;

const Kanji2290Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囱';
  }
`;

const Kanji2291Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囲';
  }
`;

const Kanji2292Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '図';
  }
`;

const Kanji2293Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '围';
  }
`;

const Kanji2294Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囵';
  }
`;

const Kanji2295Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囶';
  }
`;

const Kanji2296Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囷';
  }
`;

const Kanji2297Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囸';
  }
`;

const Kanji2298Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囹';
  }
`;

const Kanji2299Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '固';
  }
`;

const Kanji2300Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囻';
  }
`;

const Kanji2301Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囼';
  }
`;

const Kanji2302Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '国';
  }
`;

const Kanji2303Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '图';
  }
`;

const Kanji2304Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '囿';
  }
`;

const Kanji2305Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圀';
  }
`;

const Kanji2306Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圁';
  }
`;

const Kanji2307Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圂';
  }
`;

const Kanji2308Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圃';
  }
`;

const Kanji2309Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圄';
  }
`;

const Kanji2310Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圅';
  }
`;

const Kanji2311Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圆';
  }
`;

const Kanji2312Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圇';
  }
`;

const Kanji2313Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圈';
  }
`;

const Kanji2314Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圉';
  }
`;

const Kanji2315Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圊';
  }
`;

const Kanji2316Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '國';
  }
`;

const Kanji2317Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圌';
  }
`;

const Kanji2318Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圍';
  }
`;

const Kanji2319Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圎';
  }
`;

const Kanji2320Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圏';
  }
`;

const Kanji2321Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圐';
  }
`;

const Kanji2322Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圑';
  }
`;

const Kanji2323Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '園';
  }
`;

const Kanji2324Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圓';
  }
`;

const Kanji2325Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圔';
  }
`;

const Kanji2326Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圕';
  }
`;

const Kanji2327Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圖';
  }
`;

const Kanji2328Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圗';
  }
`;

const Kanji2329Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '團';
  }
`;

const Kanji2330Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圙';
  }
`;

const Kanji2331Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圚';
  }
`;

const Kanji2332Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圛';
  }
`;

const Kanji2333Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圜';
  }
`;

const Kanji2334Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圝';
  }
`;

const Kanji2335Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圞';
  }
`;

const Kanji2336Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '土';
  }
`;

const Kanji2337Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圠';
  }
`;

const Kanji2338Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圡';
  }
`;

const Kanji2339Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圢';
  }
`;

const Kanji2340Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圣';
  }
`;

const Kanji2341Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圤';
  }
`;

const Kanji2342Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圥';
  }
`;

const Kanji2343Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圦';
  }
`;

const Kanji2344Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圧';
  }
`;

const Kanji2345Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '在';
  }
`;

const Kanji2346Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圩';
  }
`;

const Kanji2347Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圪';
  }
`;

const Kanji2348Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圫';
  }
`;

const Kanji2349Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圬';
  }
`;

const Kanji2350Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圭';
  }
`;

const Kanji2351Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圮';
  }
`;

const Kanji2352Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圯';
  }
`;

const Kanji2353Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '地';
  }
`;

const Kanji2354Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圱';
  }
`;

const Kanji2355Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圲';
  }
`;

const Kanji2356Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圳';
  }
`;

const Kanji2357Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圴';
  }
`;

const Kanji2358Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圵';
  }
`;

const Kanji2359Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圶';
  }
`;

const Kanji2360Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圷';
  }
`;

const Kanji2361Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圸';
  }
`;

const Kanji2362Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圹';
  }
`;

const Kanji2363Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '场';
  }
`;

const Kanji2364Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圻';
  }
`;

const Kanji2365Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圼';
  }
`;

const Kanji2366Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圽';
  }
`;

const Kanji2367Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圾';
  }
`;

const Kanji2368Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '圿';
  }
`;

const Kanji2369Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '址';
  }
`;

const Kanji2370Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坁';
  }
`;

const Kanji2371Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坂';
  }
`;

const Kanji2372Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坃';
  }
`;

const Kanji2373Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坄';
  }
`;

const Kanji2374Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坅';
  }
`;

const Kanji2375Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坆';
  }
`;

const Kanji2376Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '均';
  }
`;

const Kanji2377Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坈';
  }
`;

const Kanji2378Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坉';
  }
`;

const Kanji2379Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坊';
  }
`;

const Kanji2380Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坋';
  }
`;

const Kanji2381Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坌';
  }
`;

const Kanji2382Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坍';
  }
`;

const Kanji2383Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坎';
  }
`;

const Kanji2384Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坏';
  }
`;

const Kanji2385Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坐';
  }
`;

const Kanji2386Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坑';
  }
`;

const Kanji2387Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坒';
  }
`;

const Kanji2388Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坓';
  }
`;

const Kanji2389Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坔';
  }
`;

const Kanji2390Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坕';
  }
`;

const Kanji2391Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坖';
  }
`;

const Kanji2392Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '块';
  }
`;

const Kanji2393Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坘';
  }
`;

const Kanji2394Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坙';
  }
`;

const Kanji2395Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坚';
  }
`;

const Kanji2396Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坛';
  }
`;

const Kanji2397Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坜';
  }
`;

const Kanji2398Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坝';
  }
`;

const Kanji2399Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坞';
  }
`;

const Kanji2400Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坟';
  }
`;

const Kanji2401Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坠';
  }
`;

const Kanji2402Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坡';
  }
`;

const Kanji2403Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坢';
  }
`;

const Kanji2404Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坣';
  }
`;

const Kanji2405Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坤';
  }
`;

const Kanji2406Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坥';
  }
`;

const Kanji2407Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坦';
  }
`;

const Kanji2408Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坧';
  }
`;

const Kanji2409Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坨';
  }
`;

const Kanji2410Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坩';
  }
`;

const Kanji2411Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坪';
  }
`;

const Kanji2412Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坫';
  }
`;

const Kanji2413Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坬';
  }
`;

const Kanji2414Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坭';
  }
`;

const Kanji2415Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坮';
  }
`;

const Kanji2416Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坯';
  }
`;

const Kanji2417Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坰';
  }
`;

const Kanji2418Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坱';
  }
`;

const Kanji2419Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坲';
  }
`;

const Kanji2420Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坳';
  }
`;

const Kanji2421Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坴';
  }
`;

const Kanji2422Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坵';
  }
`;

const Kanji2423Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坶';
  }
`;

const Kanji2424Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坷';
  }
`;

const Kanji2425Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坸';
  }
`;

const Kanji2426Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坹';
  }
`;

const Kanji2427Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坺';
  }
`;

const Kanji2428Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坻';
  }
`;

const Kanji2429Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坼';
  }
`;

const Kanji2430Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坽';
  }
`;

const Kanji2431Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坾';
  }
`;

const Kanji2432Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '坿';
  }
`;

const Kanji2433Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垀';
  }
`;

const Kanji2434Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垁';
  }
`;

const Kanji2435Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垂';
  }
`;

const Kanji2436Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垃';
  }
`;

const Kanji2437Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垄';
  }
`;

const Kanji2438Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垅';
  }
`;

const Kanji2439Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垆';
  }
`;

const Kanji2440Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垇';
  }
`;

const Kanji2441Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垈';
  }
`;

const Kanji2442Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垉';
  }
`;

const Kanji2443Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垊';
  }
`;

const Kanji2444Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '型';
  }
`;

const Kanji2445Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垌';
  }
`;

const Kanji2446Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垍';
  }
`;

const Kanji2447Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垎';
  }
`;

const Kanji2448Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垏';
  }
`;

const Kanji2449Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垐';
  }
`;

const Kanji2450Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垑';
  }
`;

const Kanji2451Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垒';
  }
`;

const Kanji2452Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垓';
  }
`;

const Kanji2453Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垔';
  }
`;

const Kanji2454Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垕';
  }
`;

const Kanji2455Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垖';
  }
`;

const Kanji2456Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垗';
  }
`;

const Kanji2457Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垘';
  }
`;

const Kanji2458Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垙';
  }
`;

const Kanji2459Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垚';
  }
`;

const Kanji2460Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垛';
  }
`;

const Kanji2461Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垜';
  }
`;

const Kanji2462Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垝';
  }
`;

const Kanji2463Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垞';
  }
`;

const Kanji2464Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垟';
  }
`;

const Kanji2465Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垠';
  }
`;

const Kanji2466Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垡';
  }
`;

const Kanji2467Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垢';
  }
`;

const Kanji2468Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垣';
  }
`;

const Kanji2469Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垤';
  }
`;

const Kanji2470Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垥';
  }
`;

const Kanji2471Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垦';
  }
`;

const Kanji2472Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垧';
  }
`;

const Kanji2473Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垨';
  }
`;

const Kanji2474Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垩';
  }
`;

const Kanji2475Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垪';
  }
`;

const Kanji2476Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垫';
  }
`;

const Kanji2477Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垬';
  }
`;

const Kanji2478Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垭';
  }
`;

const Kanji2479Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垮';
  }
`;

const Kanji2480Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垯';
  }
`;

const Kanji2481Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垰';
  }
`;

const Kanji2482Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垱';
  }
`;

const Kanji2483Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垲';
  }
`;

const Kanji2484Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垳';
  }
`;

const Kanji2485Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垴';
  }
`;

const Kanji2486Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垵';
  }
`;

const Kanji2487Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垶';
  }
`;

const Kanji2488Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垷';
  }
`;

const Kanji2489Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垸';
  }
`;

const Kanji2490Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垹';
  }
`;

const Kanji2491Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垺';
  }
`;

const Kanji2492Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垻';
  }
`;

const Kanji2493Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垼';
  }
`;

const Kanji2494Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垽';
  }
`;

const Kanji2495Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垾';
  }
`;

const Kanji2496Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '垿';
  }
`;

const Kanji2497Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '埀';
  }
`;

const Kanji2498Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '埁';
  }
`;

const Kanji2499Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '埂';
  }
`;

const Kanji2500Character = styled(JapaneseCard)`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '埃';
  }
`;


const Wrapper = styled.div`
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
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
`;


const BaseButton = styled.button`
  ${baseButtonStyles}
`;

const RerenderButton = styled.button<{ $count: number }>`
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

const RerenderButtonMedia = styled.button<{ $count: number }>`
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

const RenderButtonDynamic = styled.button<{ $count: number }>`
  ${baseButtonStyles}
  transform: rotate(${({ $count }) => $count}deg);
`;

const RenderButtonDynamicMedia = styled.button<{ $count: number }>`
  ${baseButtonStyles}
  @media (min-width: 1px) {
    transform: rotate(${({ $count }) => $count}deg);
  }
`;

const LibHeader = styled.h1`
  text-align: center;
  font-size: 2em;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  min-width: 100%;
`;

export const KanjiLetterComponentStyled: FunctionComponent = () => {

  const [count0, setCount0] = React.useState(0);
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count4, setCount4] = React.useState(0);
  const [count5, setCount5] = React.useState(0);

  return (
    <>
    <LibHeader onClick={() => document.location.href = "/yak"  }>styled-components</LibHeader>
    <Wrapper 
      className={`count5-${count5}`}
      style={{ 
      // @ts-ignore
      "--count0": count0 
    }}>

      <ButtonWrapper>
        <BaseButton title="updates css variable on wrapper" onClick={() => {
          performance.mark("BaseButtonClick - styled-components");
          setCount0(count0 + 1)
        }}>{count0}</BaseButton>

        <RerenderButton title="changes color" onClick={() => {
          performance.mark("RerenderButtonClick - styled-components");
          setCount1(count1 + 1)
        }} $count={count1}>{count1}</RerenderButton>

        <RerenderButtonMedia title="changes color in @media" onClick={() => {
          performance.mark("RerenderButtonMediaClick - styled-components");
          setCount2(count2 + 1)
        }} $count={count2}>{count2}</RerenderButtonMedia>

        <RenderButtonDynamic title="changes dynamic" onClick={() => {
          performance.mark("RenderButtonDynamicClick - styled-components");
          setCount3(count3 + 1)
        }} $count={count3}>{count3}</RenderButtonDynamic>

        <RenderButtonDynamicMedia title="changes dynamic in @media" onClick={() => {
          performance.mark("RenderButtonDynamicMediaClick - styled-components");
          setCount4(count4 + 1)
        }} $count={count4}>{count4}</RenderButtonDynamicMedia>

        <BaseButton title="add className to wrapper" onClick={() => {
          performance.mark("BaseButtonAddClassClick - styled-components");
          setCount5(count5 + 1)
        }}>{count5}</BaseButton>
      </ButtonWrapper>

      <Kanji1Character />
      <Kanji2Character />
      <Kanji3Character />
      <Kanji4Character />
      <Kanji5Character />
      <Kanji6Character />
      <Kanji7Character />
      <Kanji8Character />
      <Kanji9Character />
      <Kanji10Character />
      <Kanji11Character />
      <Kanji12Character />
      <Kanji13Character />
      <Kanji14Character />
      <Kanji15Character />
      <Kanji16Character />
      <Kanji17Character />
      <Kanji18Character />
      <Kanji19Character />
      <Kanji20Character />
      <Kanji21Character />
      <Kanji22Character />
      <Kanji23Character />
      <Kanji24Character />
      <Kanji25Character />
      <Kanji26Character />
      <Kanji27Character />
      <Kanji28Character />
      <Kanji29Character />
      <Kanji30Character />
      <Kanji31Character />
      <Kanji32Character />
      <Kanji33Character />
      <Kanji34Character />
      <Kanji35Character />
      <Kanji36Character />
      <Kanji37Character />
      <Kanji38Character />
      <Kanji39Character />
      <Kanji40Character />
      <Kanji41Character />
      <Kanji42Character />
      <Kanji43Character />
      <Kanji44Character />
      <Kanji45Character />
      <Kanji46Character />
      <Kanji47Character />
      <Kanji48Character />
      <Kanji49Character />
      <Kanji50Character />
      <Kanji51Character />
      <Kanji52Character />
      <Kanji53Character />
      <Kanji54Character />
      <Kanji55Character />
      <Kanji56Character />
      <Kanji57Character />
      <Kanji58Character />
      <Kanji59Character />
      <Kanji60Character />
      <Kanji61Character />
      <Kanji62Character />
      <Kanji63Character />
      <Kanji64Character />
      <Kanji65Character />
      <Kanji66Character />
      <Kanji67Character />
      <Kanji68Character />
      <Kanji69Character />
      <Kanji70Character />
      <Kanji71Character />
      <Kanji72Character />
      <Kanji73Character />
      <Kanji74Character />
      <Kanji75Character />
      <Kanji76Character />
      <Kanji77Character />
      <Kanji78Character />
      <Kanji79Character />
      <Kanji80Character />
      <Kanji81Character />
      <Kanji82Character />
      <Kanji83Character />
      <Kanji84Character />
      <Kanji85Character />
      <Kanji86Character />
      <Kanji87Character />
      <Kanji88Character />
      <Kanji89Character />
      <Kanji90Character />
      <Kanji91Character />
      <Kanji92Character />
      <Kanji93Character />
      <Kanji94Character />
      <Kanji95Character />
      <Kanji96Character />
      <Kanji97Character />
      <Kanji98Character />
      <Kanji99Character />
      <Kanji100Character />
      <Kanji101Character />
      <Kanji102Character />
      <Kanji103Character />
      <Kanji104Character />
      <Kanji105Character />
      <Kanji106Character />
      <Kanji107Character />
      <Kanji108Character />
      <Kanji109Character />
      <Kanji110Character />
      <Kanji111Character />
      <Kanji112Character />
      <Kanji113Character />
      <Kanji114Character />
      <Kanji115Character />
      <Kanji116Character />
      <Kanji117Character />
      <Kanji118Character />
      <Kanji119Character />
      <Kanji120Character />
      <Kanji121Character />
      <Kanji122Character />
      <Kanji123Character />
      <Kanji124Character />
      <Kanji125Character />
      <Kanji126Character />
      <Kanji127Character />
      <Kanji128Character />
      <Kanji129Character />
      <Kanji130Character />
      <Kanji131Character />
      <Kanji132Character />
      <Kanji133Character />
      <Kanji134Character />
      <Kanji135Character />
      <Kanji136Character />
      <Kanji137Character />
      <Kanji138Character />
      <Kanji139Character />
      <Kanji140Character />
      <Kanji141Character />
      <Kanji142Character />
      <Kanji143Character />
      <Kanji144Character />
      <Kanji145Character />
      <Kanji146Character />
      <Kanji147Character />
      <Kanji148Character />
      <Kanji149Character />
      <Kanji150Character />
      <Kanji151Character />
      <Kanji152Character />
      <Kanji153Character />
      <Kanji154Character />
      <Kanji155Character />
      <Kanji156Character />
      <Kanji157Character />
      <Kanji158Character />
      <Kanji159Character />
      <Kanji160Character />
      <Kanji161Character />
      <Kanji162Character />
      <Kanji163Character />
      <Kanji164Character />
      <Kanji165Character />
      <Kanji166Character />
      <Kanji167Character />
      <Kanji168Character />
      <Kanji169Character />
      <Kanji170Character />
      <Kanji171Character />
      <Kanji172Character />
      <Kanji173Character />
      <Kanji174Character />
      <Kanji175Character />
      <Kanji176Character />
      <Kanji177Character />
      <Kanji178Character />
      <Kanji179Character />
      <Kanji180Character />
      <Kanji181Character />
      <Kanji182Character />
      <Kanji183Character />
      <Kanji184Character />
      <Kanji185Character />
      <Kanji186Character />
      <Kanji187Character />
      <Kanji188Character />
      <Kanji189Character />
      <Kanji190Character />
      <Kanji191Character />
      <Kanji192Character />
      <Kanji193Character />
      <Kanji194Character />
      <Kanji195Character />
      <Kanji196Character />
      <Kanji197Character />
      <Kanji198Character />
      <Kanji199Character />
      <Kanji200Character />
      <Kanji201Character />
      <Kanji202Character />
      <Kanji203Character />
      <Kanji204Character />
      <Kanji205Character />
      <Kanji206Character />
      <Kanji207Character />
      <Kanji208Character />
      <Kanji209Character />
      <Kanji210Character />
      <Kanji211Character />
      <Kanji212Character />
      <Kanji213Character />
      <Kanji214Character />
      <Kanji215Character />
      <Kanji216Character />
      <Kanji217Character />
      <Kanji218Character />
      <Kanji219Character />
      <Kanji220Character />
      <Kanji221Character />
      <Kanji222Character />
      <Kanji223Character />
      <Kanji224Character />
      <Kanji225Character />
      <Kanji226Character />
      <Kanji227Character />
      <Kanji228Character />
      <Kanji229Character />
      <Kanji230Character />
      <Kanji231Character />
      <Kanji232Character />
      <Kanji233Character />
      <Kanji234Character />
      <Kanji235Character />
      <Kanji236Character />
      <Kanji237Character />
      <Kanji238Character />
      <Kanji239Character />
      <Kanji240Character />
      <Kanji241Character />
      <Kanji242Character />
      <Kanji243Character />
      <Kanji244Character />
      <Kanji245Character />
      <Kanji246Character />
      <Kanji247Character />
      <Kanji248Character />
      <Kanji249Character />
      <Kanji250Character />
      <Kanji251Character />
      <Kanji252Character />
      <Kanji253Character />
      <Kanji254Character />
      <Kanji255Character />
      <Kanji256Character />
      <Kanji257Character />
      <Kanji258Character />
      <Kanji259Character />
      <Kanji260Character />
      <Kanji261Character />
      <Kanji262Character />
      <Kanji263Character />
      <Kanji264Character />
      <Kanji265Character />
      <Kanji266Character />
      <Kanji267Character />
      <Kanji268Character />
      <Kanji269Character />
      <Kanji270Character />
      <Kanji271Character />
      <Kanji272Character />
      <Kanji273Character />
      <Kanji274Character />
      <Kanji275Character />
      <Kanji276Character />
      <Kanji277Character />
      <Kanji278Character />
      <Kanji279Character />
      <Kanji280Character />
      <Kanji281Character />
      <Kanji282Character />
      <Kanji283Character />
      <Kanji284Character />
      <Kanji285Character />
      <Kanji286Character />
      <Kanji287Character />
      <Kanji288Character />
      <Kanji289Character />
      <Kanji290Character />
      <Kanji291Character />
      <Kanji292Character />
      <Kanji293Character />
      <Kanji294Character />
      <Kanji295Character />
      <Kanji296Character />
      <Kanji297Character />
      <Kanji298Character />
      <Kanji299Character />
      <Kanji300Character />
      <Kanji301Character />
      <Kanji302Character />
      <Kanji303Character />
      <Kanji304Character />
      <Kanji305Character />
      <Kanji306Character />
      <Kanji307Character />
      <Kanji308Character />
      <Kanji309Character />
      <Kanji310Character />
      <Kanji311Character />
      <Kanji312Character />
      <Kanji313Character />
      <Kanji314Character />
      <Kanji315Character />
      <Kanji316Character />
      <Kanji317Character />
      <Kanji318Character />
      <Kanji319Character />
      <Kanji320Character />
      <Kanji321Character />
      <Kanji322Character />
      <Kanji323Character />
      <Kanji324Character />
      <Kanji325Character />
      <Kanji326Character />
      <Kanji327Character />
      <Kanji328Character />
      <Kanji329Character />
      <Kanji330Character />
      <Kanji331Character />
      <Kanji332Character />
      <Kanji333Character />
      <Kanji334Character />
      <Kanji335Character />
      <Kanji336Character />
      <Kanji337Character />
      <Kanji338Character />
      <Kanji339Character />
      <Kanji340Character />
      <Kanji341Character />
      <Kanji342Character />
      <Kanji343Character />
      <Kanji344Character />
      <Kanji345Character />
      <Kanji346Character />
      <Kanji347Character />
      <Kanji348Character />
      <Kanji349Character />
      <Kanji350Character />
      <Kanji351Character />
      <Kanji352Character />
      <Kanji353Character />
      <Kanji354Character />
      <Kanji355Character />
      <Kanji356Character />
      <Kanji357Character />
      <Kanji358Character />
      <Kanji359Character />
      <Kanji360Character />
      <Kanji361Character />
      <Kanji362Character />
      <Kanji363Character />
      <Kanji364Character />
      <Kanji365Character />
      <Kanji366Character />
      <Kanji367Character />
      <Kanji368Character />
      <Kanji369Character />
      <Kanji370Character />
      <Kanji371Character />
      <Kanji372Character />
      <Kanji373Character />
      <Kanji374Character />
      <Kanji375Character />
      <Kanji376Character />
      <Kanji377Character />
      <Kanji378Character />
      <Kanji379Character />
      <Kanji380Character />
      <Kanji381Character />
      <Kanji382Character />
      <Kanji383Character />
      <Kanji384Character />
      <Kanji385Character />
      <Kanji386Character />
      <Kanji387Character />
      <Kanji388Character />
      <Kanji389Character />
      <Kanji390Character />
      <Kanji391Character />
      <Kanji392Character />
      <Kanji393Character />
      <Kanji394Character />
      <Kanji395Character />
      <Kanji396Character />
      <Kanji397Character />
      <Kanji398Character />
      <Kanji399Character />
      <Kanji400Character />
      <Kanji401Character />
      <Kanji402Character />
      <Kanji403Character />
      <Kanji404Character />
      <Kanji405Character />
      <Kanji406Character />
      <Kanji407Character />
      <Kanji408Character />
      <Kanji409Character />
      <Kanji410Character />
      <Kanji411Character />
      <Kanji412Character />
      <Kanji413Character />
      <Kanji414Character />
      <Kanji415Character />
      <Kanji416Character />
      <Kanji417Character />
      <Kanji418Character />
      <Kanji419Character />
      <Kanji420Character />
      <Kanji421Character />
      <Kanji422Character />
      <Kanji423Character />
      <Kanji424Character />
      <Kanji425Character />
      <Kanji426Character />
      <Kanji427Character />
      <Kanji428Character />
      <Kanji429Character />
      <Kanji430Character />
      <Kanji431Character />
      <Kanji432Character />
      <Kanji433Character />
      <Kanji434Character />
      <Kanji435Character />
      <Kanji436Character />
      <Kanji437Character />
      <Kanji438Character />
      <Kanji439Character />
      <Kanji440Character />
      <Kanji441Character />
      <Kanji442Character />
      <Kanji443Character />
      <Kanji444Character />
      <Kanji445Character />
      <Kanji446Character />
      <Kanji447Character />
      <Kanji448Character />
      <Kanji449Character />
      <Kanji450Character />
      <Kanji451Character />
      <Kanji452Character />
      <Kanji453Character />
      <Kanji454Character />
      <Kanji455Character />
      <Kanji456Character />
      <Kanji457Character />
      <Kanji458Character />
      <Kanji459Character />
      <Kanji460Character />
      <Kanji461Character />
      <Kanji462Character />
      <Kanji463Character />
      <Kanji464Character />
      <Kanji465Character />
      <Kanji466Character />
      <Kanji467Character />
      <Kanji468Character />
      <Kanji469Character />
      <Kanji470Character />
      <Kanji471Character />
      <Kanji472Character />
      <Kanji473Character />
      <Kanji474Character />
      <Kanji475Character />
      <Kanji476Character />
      <Kanji477Character />
      <Kanji478Character />
      <Kanji479Character />
      <Kanji480Character />
      <Kanji481Character />
      <Kanji482Character />
      <Kanji483Character />
      <Kanji484Character />
      <Kanji485Character />
      <Kanji486Character />
      <Kanji487Character />
      <Kanji488Character />
      <Kanji489Character />
      <Kanji490Character />
      <Kanji491Character />
      <Kanji492Character />
      <Kanji493Character />
      <Kanji494Character />
      <Kanji495Character />
      <Kanji496Character />
      <Kanji497Character />
      <Kanji498Character />
      <Kanji499Character />
      <Kanji500Character />
      <Kanji501Character />
      <Kanji502Character />
      <Kanji503Character />
      <Kanji504Character />
      <Kanji505Character />
      <Kanji506Character />
      <Kanji507Character />
      <Kanji508Character />
      <Kanji509Character />
      <Kanji510Character />
      <Kanji511Character />
      <Kanji512Character />
      <Kanji513Character />
      <Kanji514Character />
      <Kanji515Character />
      <Kanji516Character />
      <Kanji517Character />
      <Kanji518Character />
      <Kanji519Character />
      <Kanji520Character />
      <Kanji521Character />
      <Kanji522Character />
      <Kanji523Character />
      <Kanji524Character />
      <Kanji525Character />
      <Kanji526Character />
      <Kanji527Character />
      <Kanji528Character />
      <Kanji529Character />
      <Kanji530Character />
      <Kanji531Character />
      <Kanji532Character />
      <Kanji533Character />
      <Kanji534Character />
      <Kanji535Character />
      <Kanji536Character />
      <Kanji537Character />
      <Kanji538Character />
      <Kanji539Character />
      <Kanji540Character />
      <Kanji541Character />
      <Kanji542Character />
      <Kanji543Character />
      <Kanji544Character />
      <Kanji545Character />
      <Kanji546Character />
      <Kanji547Character />
      <Kanji548Character />
      <Kanji549Character />
      <Kanji550Character />
      <Kanji551Character />
      <Kanji552Character />
      <Kanji553Character />
      <Kanji554Character />
      <Kanji555Character />
      <Kanji556Character />
      <Kanji557Character />
      <Kanji558Character />
      <Kanji559Character />
      <Kanji560Character />
      <Kanji561Character />
      <Kanji562Character />
      <Kanji563Character />
      <Kanji564Character />
      <Kanji565Character />
      <Kanji566Character />
      <Kanji567Character />
      <Kanji568Character />
      <Kanji569Character />
      <Kanji570Character />
      <Kanji571Character />
      <Kanji572Character />
      <Kanji573Character />
      <Kanji574Character />
      <Kanji575Character />
      <Kanji576Character />
      <Kanji577Character />
      <Kanji578Character />
      <Kanji579Character />
      <Kanji580Character />
      <Kanji581Character />
      <Kanji582Character />
      <Kanji583Character />
      <Kanji584Character />
      <Kanji585Character />
      <Kanji586Character />
      <Kanji587Character />
      <Kanji588Character />
      <Kanji589Character />
      <Kanji590Character />
      <Kanji591Character />
      <Kanji592Character />
      <Kanji593Character />
      <Kanji594Character />
      <Kanji595Character />
      <Kanji596Character />
      <Kanji597Character />
      <Kanji598Character />
      <Kanji599Character />
      <Kanji600Character />
      <Kanji601Character />
      <Kanji602Character />
      <Kanji603Character />
      <Kanji604Character />
      <Kanji605Character />
      <Kanji606Character />
      <Kanji607Character />
      <Kanji608Character />
      <Kanji609Character />
      <Kanji610Character />
      <Kanji611Character />
      <Kanji612Character />
      <Kanji613Character />
      <Kanji614Character />
      <Kanji615Character />
      <Kanji616Character />
      <Kanji617Character />
      <Kanji618Character />
      <Kanji619Character />
      <Kanji620Character />
      <Kanji621Character />
      <Kanji622Character />
      <Kanji623Character />
      <Kanji624Character />
      <Kanji625Character />
      <Kanji626Character />
      <Kanji627Character />
      <Kanji628Character />
      <Kanji629Character />
      <Kanji630Character />
      <Kanji631Character />
      <Kanji632Character />
      <Kanji633Character />
      <Kanji634Character />
      <Kanji635Character />
      <Kanji636Character />
      <Kanji637Character />
      <Kanji638Character />
      <Kanji639Character />
      <Kanji640Character />
      <Kanji641Character />
      <Kanji642Character />
      <Kanji643Character />
      <Kanji644Character />
      <Kanji645Character />
      <Kanji646Character />
      <Kanji647Character />
      <Kanji648Character />
      <Kanji649Character />
      <Kanji650Character />
      <Kanji651Character />
      <Kanji652Character />
      <Kanji653Character />
      <Kanji654Character />
      <Kanji655Character />
      <Kanji656Character />
      <Kanji657Character />
      <Kanji658Character />
      <Kanji659Character />
      <Kanji660Character />
      <Kanji661Character />
      <Kanji662Character />
      <Kanji663Character />
      <Kanji664Character />
      <Kanji665Character />
      <Kanji666Character />
      <Kanji667Character />
      <Kanji668Character />
      <Kanji669Character />
      <Kanji670Character />
      <Kanji671Character />
      <Kanji672Character />
      <Kanji673Character />
      <Kanji674Character />
      <Kanji675Character />
      <Kanji676Character />
      <Kanji677Character />
      <Kanji678Character />
      <Kanji679Character />
      <Kanji680Character />
      <Kanji681Character />
      <Kanji682Character />
      <Kanji683Character />
      <Kanji684Character />
      <Kanji685Character />
      <Kanji686Character />
      <Kanji687Character />
      <Kanji688Character />
      <Kanji689Character />
      <Kanji690Character />
      <Kanji691Character />
      <Kanji692Character />
      <Kanji693Character />
      <Kanji694Character />
      <Kanji695Character />
      <Kanji696Character />
      <Kanji697Character />
      <Kanji698Character />
      <Kanji699Character />
      <Kanji700Character />
      <Kanji701Character />
      <Kanji702Character />
      <Kanji703Character />
      <Kanji704Character />
      <Kanji705Character />
      <Kanji706Character />
      <Kanji707Character />
      <Kanji708Character />
      <Kanji709Character />
      <Kanji710Character />
      <Kanji711Character />
      <Kanji712Character />
      <Kanji713Character />
      <Kanji714Character />
      <Kanji715Character />
      <Kanji716Character />
      <Kanji717Character />
      <Kanji718Character />
      <Kanji719Character />
      <Kanji720Character />
      <Kanji721Character />
      <Kanji722Character />
      <Kanji723Character />
      <Kanji724Character />
      <Kanji725Character />
      <Kanji726Character />
      <Kanji727Character />
      <Kanji728Character />
      <Kanji729Character />
      <Kanji730Character />
      <Kanji731Character />
      <Kanji732Character />
      <Kanji733Character />
      <Kanji734Character />
      <Kanji735Character />
      <Kanji736Character />
      <Kanji737Character />
      <Kanji738Character />
      <Kanji739Character />
      <Kanji740Character />
      <Kanji741Character />
      <Kanji742Character />
      <Kanji743Character />
      <Kanji744Character />
      <Kanji745Character />
      <Kanji746Character />
      <Kanji747Character />
      <Kanji748Character />
      <Kanji749Character />
      <Kanji750Character />
      <Kanji751Character />
      <Kanji752Character />
      <Kanji753Character />
      <Kanji754Character />
      <Kanji755Character />
      <Kanji756Character />
      <Kanji757Character />
      <Kanji758Character />
      <Kanji759Character />
      <Kanji760Character />
      <Kanji761Character />
      <Kanji762Character />
      <Kanji763Character />
      <Kanji764Character />
      <Kanji765Character />
      <Kanji766Character />
      <Kanji767Character />
      <Kanji768Character />
      <Kanji769Character />
      <Kanji770Character />
      <Kanji771Character />
      <Kanji772Character />
      <Kanji773Character />
      <Kanji774Character />
      <Kanji775Character />
      <Kanji776Character />
      <Kanji777Character />
      <Kanji778Character />
      <Kanji779Character />
      <Kanji780Character />
      <Kanji781Character />
      <Kanji782Character />
      <Kanji783Character />
      <Kanji784Character />
      <Kanji785Character />
      <Kanji786Character />
      <Kanji787Character />
      <Kanji788Character />
      <Kanji789Character />
      <Kanji790Character />
      <Kanji791Character />
      <Kanji792Character />
      <Kanji793Character />
      <Kanji794Character />
      <Kanji795Character />
      <Kanji796Character />
      <Kanji797Character />
      <Kanji798Character />
      <Kanji799Character />
      <Kanji800Character />
      <Kanji801Character />
      <Kanji802Character />
      <Kanji803Character />
      <Kanji804Character />
      <Kanji805Character />
      <Kanji806Character />
      <Kanji807Character />
      <Kanji808Character />
      <Kanji809Character />
      <Kanji810Character />
      <Kanji811Character />
      <Kanji812Character />
      <Kanji813Character />
      <Kanji814Character />
      <Kanji815Character />
      <Kanji816Character />
      <Kanji817Character />
      <Kanji818Character />
      <Kanji819Character />
      <Kanji820Character />
      <Kanji821Character />
      <Kanji822Character />
      <Kanji823Character />
      <Kanji824Character />
      <Kanji825Character />
      <Kanji826Character />
      <Kanji827Character />
      <Kanji828Character />
      <Kanji829Character />
      <Kanji830Character />
      <Kanji831Character />
      <Kanji832Character />
      <Kanji833Character />
      <Kanji834Character />
      <Kanji835Character />
      <Kanji836Character />
      <Kanji837Character />
      <Kanji838Character />
      <Kanji839Character />
      <Kanji840Character />
      <Kanji841Character />
      <Kanji842Character />
      <Kanji843Character />
      <Kanji844Character />
      <Kanji845Character />
      <Kanji846Character />
      <Kanji847Character />
      <Kanji848Character />
      <Kanji849Character />
      <Kanji850Character />
      <Kanji851Character />
      <Kanji852Character />
      <Kanji853Character />
      <Kanji854Character />
      <Kanji855Character />
      <Kanji856Character />
      <Kanji857Character />
      <Kanji858Character />
      <Kanji859Character />
      <Kanji860Character />
      <Kanji861Character />
      <Kanji862Character />
      <Kanji863Character />
      <Kanji864Character />
      <Kanji865Character />
      <Kanji866Character />
      <Kanji867Character />
      <Kanji868Character />
      <Kanji869Character />
      <Kanji870Character />
      <Kanji871Character />
      <Kanji872Character />
      <Kanji873Character />
      <Kanji874Character />
      <Kanji875Character />
      <Kanji876Character />
      <Kanji877Character />
      <Kanji878Character />
      <Kanji879Character />
      <Kanji880Character />
      <Kanji881Character />
      <Kanji882Character />
      <Kanji883Character />
      <Kanji884Character />
      <Kanji885Character />
      <Kanji886Character />
      <Kanji887Character />
      <Kanji888Character />
      <Kanji889Character />
      <Kanji890Character />
      <Kanji891Character />
      <Kanji892Character />
      <Kanji893Character />
      <Kanji894Character />
      <Kanji895Character />
      <Kanji896Character />
      <Kanji897Character />
      <Kanji898Character />
      <Kanji899Character />
      <Kanji900Character />
      <Kanji901Character />
      <Kanji902Character />
      <Kanji903Character />
      <Kanji904Character />
      <Kanji905Character />
      <Kanji906Character />
      <Kanji907Character />
      <Kanji908Character />
      <Kanji909Character />
      <Kanji910Character />
      <Kanji911Character />
      <Kanji912Character />
      <Kanji913Character />
      <Kanji914Character />
      <Kanji915Character />
      <Kanji916Character />
      <Kanji917Character />
      <Kanji918Character />
      <Kanji919Character />
      <Kanji920Character />
      <Kanji921Character />
      <Kanji922Character />
      <Kanji923Character />
      <Kanji924Character />
      <Kanji925Character />
      <Kanji926Character />
      <Kanji927Character />
      <Kanji928Character />
      <Kanji929Character />
      <Kanji930Character />
      <Kanji931Character />
      <Kanji932Character />
      <Kanji933Character />
      <Kanji934Character />
      <Kanji935Character />
      <Kanji936Character />
      <Kanji937Character />
      <Kanji938Character />
      <Kanji939Character />
      <Kanji940Character />
      <Kanji941Character />
      <Kanji942Character />
      <Kanji943Character />
      <Kanji944Character />
      <Kanji945Character />
      <Kanji946Character />
      <Kanji947Character />
      <Kanji948Character />
      <Kanji949Character />
      <Kanji950Character />
      <Kanji951Character />
      <Kanji952Character />
      <Kanji953Character />
      <Kanji954Character />
      <Kanji955Character />
      <Kanji956Character />
      <Kanji957Character />
      <Kanji958Character />
      <Kanji959Character />
      <Kanji960Character />
      <Kanji961Character />
      <Kanji962Character />
      <Kanji963Character />
      <Kanji964Character />
      <Kanji965Character />
      <Kanji966Character />
      <Kanji967Character />
      <Kanji968Character />
      <Kanji969Character />
      <Kanji970Character />
      <Kanji971Character />
      <Kanji972Character />
      <Kanji973Character />
      <Kanji974Character />
      <Kanji975Character />
      <Kanji976Character />
      <Kanji977Character />
      <Kanji978Character />
      <Kanji979Character />
      <Kanji980Character />
      <Kanji981Character />
      <Kanji982Character />
      <Kanji983Character />
      <Kanji984Character />
      <Kanji985Character />
      <Kanji986Character />
      <Kanji987Character />
      <Kanji988Character />
      <Kanji989Character />
      <Kanji990Character />
      <Kanji991Character />
      <Kanji992Character />
      <Kanji993Character />
      <Kanji994Character />
      <Kanji995Character />
      <Kanji996Character />
      <Kanji997Character />
      <Kanji998Character />
      <Kanji999Character />
      <Kanji1000Character />
      <Kanji1001Character />
      <Kanji1002Character />
      <Kanji1003Character />
      <Kanji1004Character />
      <Kanji1005Character />
      <Kanji1006Character />
      <Kanji1007Character />
      <Kanji1008Character />
      <Kanji1009Character />
      <Kanji1010Character />
      <Kanji1011Character />
      <Kanji1012Character />
      <Kanji1013Character />
      <Kanji1014Character />
      <Kanji1015Character />
      <Kanji1016Character />
      <Kanji1017Character />
      <Kanji1018Character />
      <Kanji1019Character />
      <Kanji1020Character />
      <Kanji1021Character />
      <Kanji1022Character />
      <Kanji1023Character />
      <Kanji1024Character />
      <Kanji1025Character />
      <Kanji1026Character />
      <Kanji1027Character />
      <Kanji1028Character />
      <Kanji1029Character />
      <Kanji1030Character />
      <Kanji1031Character />
      <Kanji1032Character />
      <Kanji1033Character />
      <Kanji1034Character />
      <Kanji1035Character />
      <Kanji1036Character />
      <Kanji1037Character />
      <Kanji1038Character />
      <Kanji1039Character />
      <Kanji1040Character />
      <Kanji1041Character />
      <Kanji1042Character />
      <Kanji1043Character />
      <Kanji1044Character />
      <Kanji1045Character />
      <Kanji1046Character />
      <Kanji1047Character />
      <Kanji1048Character />
      <Kanji1049Character />
      <Kanji1050Character />
      <Kanji1051Character />
      <Kanji1052Character />
      <Kanji1053Character />
      <Kanji1054Character />
      <Kanji1055Character />
      <Kanji1056Character />
      <Kanji1057Character />
      <Kanji1058Character />
      <Kanji1059Character />
      <Kanji1060Character />
      <Kanji1061Character />
      <Kanji1062Character />
      <Kanji1063Character />
      <Kanji1064Character />
      <Kanji1065Character />
      <Kanji1066Character />
      <Kanji1067Character />
      <Kanji1068Character />
      <Kanji1069Character />
      <Kanji1070Character />
      <Kanji1071Character />
      <Kanji1072Character />
      <Kanji1073Character />
      <Kanji1074Character />
      <Kanji1075Character />
      <Kanji1076Character />
      <Kanji1077Character />
      <Kanji1078Character />
      <Kanji1079Character />
      <Kanji1080Character />
      <Kanji1081Character />
      <Kanji1082Character />
      <Kanji1083Character />
      <Kanji1084Character />
      <Kanji1085Character />
      <Kanji1086Character />
      <Kanji1087Character />
      <Kanji1088Character />
      <Kanji1089Character />
      <Kanji1090Character />
      <Kanji1091Character />
      <Kanji1092Character />
      <Kanji1093Character />
      <Kanji1094Character />
      <Kanji1095Character />
      <Kanji1096Character />
      <Kanji1097Character />
      <Kanji1098Character />
      <Kanji1099Character />
      <Kanji1100Character />
      <Kanji1101Character />
      <Kanji1102Character />
      <Kanji1103Character />
      <Kanji1104Character />
      <Kanji1105Character />
      <Kanji1106Character />
      <Kanji1107Character />
      <Kanji1108Character />
      <Kanji1109Character />
      <Kanji1110Character />
      <Kanji1111Character />
      <Kanji1112Character />
      <Kanji1113Character />
      <Kanji1114Character />
      <Kanji1115Character />
      <Kanji1116Character />
      <Kanji1117Character />
      <Kanji1118Character />
      <Kanji1119Character />
      <Kanji1120Character />
      <Kanji1121Character />
      <Kanji1122Character />
      <Kanji1123Character />
      <Kanji1124Character />
      <Kanji1125Character />
      <Kanji1126Character />
      <Kanji1127Character />
      <Kanji1128Character />
      <Kanji1129Character />
      <Kanji1130Character />
      <Kanji1131Character />
      <Kanji1132Character />
      <Kanji1133Character />
      <Kanji1134Character />
      <Kanji1135Character />
      <Kanji1136Character />
      <Kanji1137Character />
      <Kanji1138Character />
      <Kanji1139Character />
      <Kanji1140Character />
      <Kanji1141Character />
      <Kanji1142Character />
      <Kanji1143Character />
      <Kanji1144Character />
      <Kanji1145Character />
      <Kanji1146Character />
      <Kanji1147Character />
      <Kanji1148Character />
      <Kanji1149Character />
      <Kanji1150Character />
      <Kanji1151Character />
      <Kanji1152Character />
      <Kanji1153Character />
      <Kanji1154Character />
      <Kanji1155Character />
      <Kanji1156Character />
      <Kanji1157Character />
      <Kanji1158Character />
      <Kanji1159Character />
      <Kanji1160Character />
      <Kanji1161Character />
      <Kanji1162Character />
      <Kanji1163Character />
      <Kanji1164Character />
      <Kanji1165Character />
      <Kanji1166Character />
      <Kanji1167Character />
      <Kanji1168Character />
      <Kanji1169Character />
      <Kanji1170Character />
      <Kanji1171Character />
      <Kanji1172Character />
      <Kanji1173Character />
      <Kanji1174Character />
      <Kanji1175Character />
      <Kanji1176Character />
      <Kanji1177Character />
      <Kanji1178Character />
      <Kanji1179Character />
      <Kanji1180Character />
      <Kanji1181Character />
      <Kanji1182Character />
      <Kanji1183Character />
      <Kanji1184Character />
      <Kanji1185Character />
      <Kanji1186Character />
      <Kanji1187Character />
      <Kanji1188Character />
      <Kanji1189Character />
      <Kanji1190Character />
      <Kanji1191Character />
      <Kanji1192Character />
      <Kanji1193Character />
      <Kanji1194Character />
      <Kanji1195Character />
      <Kanji1196Character />
      <Kanji1197Character />
      <Kanji1198Character />
      <Kanji1199Character />
      <Kanji1200Character />
      <Kanji1201Character />
      <Kanji1202Character />
      <Kanji1203Character />
      <Kanji1204Character />
      <Kanji1205Character />
      <Kanji1206Character />
      <Kanji1207Character />
      <Kanji1208Character />
      <Kanji1209Character />
      <Kanji1210Character />
      <Kanji1211Character />
      <Kanji1212Character />
      <Kanji1213Character />
      <Kanji1214Character />
      <Kanji1215Character />
      <Kanji1216Character />
      <Kanji1217Character />
      <Kanji1218Character />
      <Kanji1219Character />
      <Kanji1220Character />
      <Kanji1221Character />
      <Kanji1222Character />
      <Kanji1223Character />
      <Kanji1224Character />
      <Kanji1225Character />
      <Kanji1226Character />
      <Kanji1227Character />
      <Kanji1228Character />
      <Kanji1229Character />
      <Kanji1230Character />
      <Kanji1231Character />
      <Kanji1232Character />
      <Kanji1233Character />
      <Kanji1234Character />
      <Kanji1235Character />
      <Kanji1236Character />
      <Kanji1237Character />
      <Kanji1238Character />
      <Kanji1239Character />
      <Kanji1240Character />
      <Kanji1241Character />
      <Kanji1242Character />
      <Kanji1243Character />
      <Kanji1244Character />
      <Kanji1245Character />
      <Kanji1246Character />
      <Kanji1247Character />
      <Kanji1248Character />
      <Kanji1249Character />
      <Kanji1250Character />
      <Kanji1251Character />
      <Kanji1252Character />
      <Kanji1253Character />
      <Kanji1254Character />
      <Kanji1255Character />
      <Kanji1256Character />
      <Kanji1257Character />
      <Kanji1258Character />
      <Kanji1259Character />
      <Kanji1260Character />
      <Kanji1261Character />
      <Kanji1262Character />
      <Kanji1263Character />
      <Kanji1264Character />
      <Kanji1265Character />
      <Kanji1266Character />
      <Kanji1267Character />
      <Kanji1268Character />
      <Kanji1269Character />
      <Kanji1270Character />
      <Kanji1271Character />
      <Kanji1272Character />
      <Kanji1273Character />
      <Kanji1274Character />
      <Kanji1275Character />
      <Kanji1276Character />
      <Kanji1277Character />
      <Kanji1278Character />
      <Kanji1279Character />
      <Kanji1280Character />
      <Kanji1281Character />
      <Kanji1282Character />
      <Kanji1283Character />
      <Kanji1284Character />
      <Kanji1285Character />
      <Kanji1286Character />
      <Kanji1287Character />
      <Kanji1288Character />
      <Kanji1289Character />
      <Kanji1290Character />
      <Kanji1291Character />
      <Kanji1292Character />
      <Kanji1293Character />
      <Kanji1294Character />
      <Kanji1295Character />
      <Kanji1296Character />
      <Kanji1297Character />
      <Kanji1298Character />
      <Kanji1299Character />
      <Kanji1300Character />
      <Kanji1301Character />
      <Kanji1302Character />
      <Kanji1303Character />
      <Kanji1304Character />
      <Kanji1305Character />
      <Kanji1306Character />
      <Kanji1307Character />
      <Kanji1308Character />
      <Kanji1309Character />
      <Kanji1310Character />
      <Kanji1311Character />
      <Kanji1312Character />
      <Kanji1313Character />
      <Kanji1314Character />
      <Kanji1315Character />
      <Kanji1316Character />
      <Kanji1317Character />
      <Kanji1318Character />
      <Kanji1319Character />
      <Kanji1320Character />
      <Kanji1321Character />
      <Kanji1322Character />
      <Kanji1323Character />
      <Kanji1324Character />
      <Kanji1325Character />
      <Kanji1326Character />
      <Kanji1327Character />
      <Kanji1328Character />
      <Kanji1329Character />
      <Kanji1330Character />
      <Kanji1331Character />
      <Kanji1332Character />
      <Kanji1333Character />
      <Kanji1334Character />
      <Kanji1335Character />
      <Kanji1336Character />
      <Kanji1337Character />
      <Kanji1338Character />
      <Kanji1339Character />
      <Kanji1340Character />
      <Kanji1341Character />
      <Kanji1342Character />
      <Kanji1343Character />
      <Kanji1344Character />
      <Kanji1345Character />
      <Kanji1346Character />
      <Kanji1347Character />
      <Kanji1348Character />
      <Kanji1349Character />
      <Kanji1350Character />
      <Kanji1351Character />
      <Kanji1352Character />
      <Kanji1353Character />
      <Kanji1354Character />
      <Kanji1355Character />
      <Kanji1356Character />
      <Kanji1357Character />
      <Kanji1358Character />
      <Kanji1359Character />
      <Kanji1360Character />
      <Kanji1361Character />
      <Kanji1362Character />
      <Kanji1363Character />
      <Kanji1364Character />
      <Kanji1365Character />
      <Kanji1366Character />
      <Kanji1367Character />
      <Kanji1368Character />
      <Kanji1369Character />
      <Kanji1370Character />
      <Kanji1371Character />
      <Kanji1372Character />
      <Kanji1373Character />
      <Kanji1374Character />
      <Kanji1375Character />
      <Kanji1376Character />
      <Kanji1377Character />
      <Kanji1378Character />
      <Kanji1379Character />
      <Kanji1380Character />
      <Kanji1381Character />
      <Kanji1382Character />
      <Kanji1383Character />
      <Kanji1384Character />
      <Kanji1385Character />
      <Kanji1386Character />
      <Kanji1387Character />
      <Kanji1388Character />
      <Kanji1389Character />
      <Kanji1390Character />
      <Kanji1391Character />
      <Kanji1392Character />
      <Kanji1393Character />
      <Kanji1394Character />
      <Kanji1395Character />
      <Kanji1396Character />
      <Kanji1397Character />
      <Kanji1398Character />
      <Kanji1399Character />
      <Kanji1400Character />
      <Kanji1401Character />
      <Kanji1402Character />
      <Kanji1403Character />
      <Kanji1404Character />
      <Kanji1405Character />
      <Kanji1406Character />
      <Kanji1407Character />
      <Kanji1408Character />
      <Kanji1409Character />
      <Kanji1410Character />
      <Kanji1411Character />
      <Kanji1412Character />
      <Kanji1413Character />
      <Kanji1414Character />
      <Kanji1415Character />
      <Kanji1416Character />
      <Kanji1417Character />
      <Kanji1418Character />
      <Kanji1419Character />
      <Kanji1420Character />
      <Kanji1421Character />
      <Kanji1422Character />
      <Kanji1423Character />
      <Kanji1424Character />
      <Kanji1425Character />
      <Kanji1426Character />
      <Kanji1427Character />
      <Kanji1428Character />
      <Kanji1429Character />
      <Kanji1430Character />
      <Kanji1431Character />
      <Kanji1432Character />
      <Kanji1433Character />
      <Kanji1434Character />
      <Kanji1435Character />
      <Kanji1436Character />
      <Kanji1437Character />
      <Kanji1438Character />
      <Kanji1439Character />
      <Kanji1440Character />
      <Kanji1441Character />
      <Kanji1442Character />
      <Kanji1443Character />
      <Kanji1444Character />
      <Kanji1445Character />
      <Kanji1446Character />
      <Kanji1447Character />
      <Kanji1448Character />
      <Kanji1449Character />
      <Kanji1450Character />
      <Kanji1451Character />
      <Kanji1452Character />
      <Kanji1453Character />
      <Kanji1454Character />
      <Kanji1455Character />
      <Kanji1456Character />
      <Kanji1457Character />
      <Kanji1458Character />
      <Kanji1459Character />
      <Kanji1460Character />
      <Kanji1461Character />
      <Kanji1462Character />
      <Kanji1463Character />
      <Kanji1464Character />
      <Kanji1465Character />
      <Kanji1466Character />
      <Kanji1467Character />
      <Kanji1468Character />
      <Kanji1469Character />
      <Kanji1470Character />
      <Kanji1471Character />
      <Kanji1472Character />
      <Kanji1473Character />
      <Kanji1474Character />
      <Kanji1475Character />
      <Kanji1476Character />
      <Kanji1477Character />
      <Kanji1478Character />
      <Kanji1479Character />
      <Kanji1480Character />
      <Kanji1481Character />
      <Kanji1482Character />
      <Kanji1483Character />
      <Kanji1484Character />
      <Kanji1485Character />
      <Kanji1486Character />
      <Kanji1487Character />
      <Kanji1488Character />
      <Kanji1489Character />
      <Kanji1490Character />
      <Kanji1491Character />
      <Kanji1492Character />
      <Kanji1493Character />
      <Kanji1494Character />
      <Kanji1495Character />
      <Kanji1496Character />
      <Kanji1497Character />
      <Kanji1498Character />
      <Kanji1499Character />
      <Kanji1500Character />
      <Kanji1501Character />
      <Kanji1502Character />
      <Kanji1503Character />
      <Kanji1504Character />
      <Kanji1505Character />
      <Kanji1506Character />
      <Kanji1507Character />
      <Kanji1508Character />
      <Kanji1509Character />
      <Kanji1510Character />
      <Kanji1511Character />
      <Kanji1512Character />
      <Kanji1513Character />
      <Kanji1514Character />
      <Kanji1515Character />
      <Kanji1516Character />
      <Kanji1517Character />
      <Kanji1518Character />
      <Kanji1519Character />
      <Kanji1520Character />
      <Kanji1521Character />
      <Kanji1522Character />
      <Kanji1523Character />
      <Kanji1524Character />
      <Kanji1525Character />
      <Kanji1526Character />
      <Kanji1527Character />
      <Kanji1528Character />
      <Kanji1529Character />
      <Kanji1530Character />
      <Kanji1531Character />
      <Kanji1532Character />
      <Kanji1533Character />
      <Kanji1534Character />
      <Kanji1535Character />
      <Kanji1536Character />
      <Kanji1537Character />
      <Kanji1538Character />
      <Kanji1539Character />
      <Kanji1540Character />
      <Kanji1541Character />
      <Kanji1542Character />
      <Kanji1543Character />
      <Kanji1544Character />
      <Kanji1545Character />
      <Kanji1546Character />
      <Kanji1547Character />
      <Kanji1548Character />
      <Kanji1549Character />
      <Kanji1550Character />
      <Kanji1551Character />
      <Kanji1552Character />
      <Kanji1553Character />
      <Kanji1554Character />
      <Kanji1555Character />
      <Kanji1556Character />
      <Kanji1557Character />
      <Kanji1558Character />
      <Kanji1559Character />
      <Kanji1560Character />
      <Kanji1561Character />
      <Kanji1562Character />
      <Kanji1563Character />
      <Kanji1564Character />
      <Kanji1565Character />
      <Kanji1566Character />
      <Kanji1567Character />
      <Kanji1568Character />
      <Kanji1569Character />
      <Kanji1570Character />
      <Kanji1571Character />
      <Kanji1572Character />
      <Kanji1573Character />
      <Kanji1574Character />
      <Kanji1575Character />
      <Kanji1576Character />
      <Kanji1577Character />
      <Kanji1578Character />
      <Kanji1579Character />
      <Kanji1580Character />
      <Kanji1581Character />
      <Kanji1582Character />
      <Kanji1583Character />
      <Kanji1584Character />
      <Kanji1585Character />
      <Kanji1586Character />
      <Kanji1587Character />
      <Kanji1588Character />
      <Kanji1589Character />
      <Kanji1590Character />
      <Kanji1591Character />
      <Kanji1592Character />
      <Kanji1593Character />
      <Kanji1594Character />
      <Kanji1595Character />
      <Kanji1596Character />
      <Kanji1597Character />
      <Kanji1598Character />
      <Kanji1599Character />
      <Kanji1600Character />
      <Kanji1601Character />
      <Kanji1602Character />
      <Kanji1603Character />
      <Kanji1604Character />
      <Kanji1605Character />
      <Kanji1606Character />
      <Kanji1607Character />
      <Kanji1608Character />
      <Kanji1609Character />
      <Kanji1610Character />
      <Kanji1611Character />
      <Kanji1612Character />
      <Kanji1613Character />
      <Kanji1614Character />
      <Kanji1615Character />
      <Kanji1616Character />
      <Kanji1617Character />
      <Kanji1618Character />
      <Kanji1619Character />
      <Kanji1620Character />
      <Kanji1621Character />
      <Kanji1622Character />
      <Kanji1623Character />
      <Kanji1624Character />
      <Kanji1625Character />
      <Kanji1626Character />
      <Kanji1627Character />
      <Kanji1628Character />
      <Kanji1629Character />
      <Kanji1630Character />
      <Kanji1631Character />
      <Kanji1632Character />
      <Kanji1633Character />
      <Kanji1634Character />
      <Kanji1635Character />
      <Kanji1636Character />
      <Kanji1637Character />
      <Kanji1638Character />
      <Kanji1639Character />
      <Kanji1640Character />
      <Kanji1641Character />
      <Kanji1642Character />
      <Kanji1643Character />
      <Kanji1644Character />
      <Kanji1645Character />
      <Kanji1646Character />
      <Kanji1647Character />
      <Kanji1648Character />
      <Kanji1649Character />
      <Kanji1650Character />
      <Kanji1651Character />
      <Kanji1652Character />
      <Kanji1653Character />
      <Kanji1654Character />
      <Kanji1655Character />
      <Kanji1656Character />
      <Kanji1657Character />
      <Kanji1658Character />
      <Kanji1659Character />
      <Kanji1660Character />
      <Kanji1661Character />
      <Kanji1662Character />
      <Kanji1663Character />
      <Kanji1664Character />
      <Kanji1665Character />
      <Kanji1666Character />
      <Kanji1667Character />
      <Kanji1668Character />
      <Kanji1669Character />
      <Kanji1670Character />
      <Kanji1671Character />
      <Kanji1672Character />
      <Kanji1673Character />
      <Kanji1674Character />
      <Kanji1675Character />
      <Kanji1676Character />
      <Kanji1677Character />
      <Kanji1678Character />
      <Kanji1679Character />
      <Kanji1680Character />
      <Kanji1681Character />
      <Kanji1682Character />
      <Kanji1683Character />
      <Kanji1684Character />
      <Kanji1685Character />
      <Kanji1686Character />
      <Kanji1687Character />
      <Kanji1688Character />
      <Kanji1689Character />
      <Kanji1690Character />
      <Kanji1691Character />
      <Kanji1692Character />
      <Kanji1693Character />
      <Kanji1694Character />
      <Kanji1695Character />
      <Kanji1696Character />
      <Kanji1697Character />
      <Kanji1698Character />
      <Kanji1699Character />
      <Kanji1700Character />
      <Kanji1701Character />
      <Kanji1702Character />
      <Kanji1703Character />
      <Kanji1704Character />
      <Kanji1705Character />
      <Kanji1706Character />
      <Kanji1707Character />
      <Kanji1708Character />
      <Kanji1709Character />
      <Kanji1710Character />
      <Kanji1711Character />
      <Kanji1712Character />
      <Kanji1713Character />
      <Kanji1714Character />
      <Kanji1715Character />
      <Kanji1716Character />
      <Kanji1717Character />
      <Kanji1718Character />
      <Kanji1719Character />
      <Kanji1720Character />
      <Kanji1721Character />
      <Kanji1722Character />
      <Kanji1723Character />
      <Kanji1724Character />
      <Kanji1725Character />
      <Kanji1726Character />
      <Kanji1727Character />
      <Kanji1728Character />
      <Kanji1729Character />
      <Kanji1730Character />
      <Kanji1731Character />
      <Kanji1732Character />
      <Kanji1733Character />
      <Kanji1734Character />
      <Kanji1735Character />
      <Kanji1736Character />
      <Kanji1737Character />
      <Kanji1738Character />
      <Kanji1739Character />
      <Kanji1740Character />
      <Kanji1741Character />
      <Kanji1742Character />
      <Kanji1743Character />
      <Kanji1744Character />
      <Kanji1745Character />
      <Kanji1746Character />
      <Kanji1747Character />
      <Kanji1748Character />
      <Kanji1749Character />
      <Kanji1750Character />
      <Kanji1751Character />
      <Kanji1752Character />
      <Kanji1753Character />
      <Kanji1754Character />
      <Kanji1755Character />
      <Kanji1756Character />
      <Kanji1757Character />
      <Kanji1758Character />
      <Kanji1759Character />
      <Kanji1760Character />
      <Kanji1761Character />
      <Kanji1762Character />
      <Kanji1763Character />
      <Kanji1764Character />
      <Kanji1765Character />
      <Kanji1766Character />
      <Kanji1767Character />
      <Kanji1768Character />
      <Kanji1769Character />
      <Kanji1770Character />
      <Kanji1771Character />
      <Kanji1772Character />
      <Kanji1773Character />
      <Kanji1774Character />
      <Kanji1775Character />
      <Kanji1776Character />
      <Kanji1777Character />
      <Kanji1778Character />
      <Kanji1779Character />
      <Kanji1780Character />
      <Kanji1781Character />
      <Kanji1782Character />
      <Kanji1783Character />
      <Kanji1784Character />
      <Kanji1785Character />
      <Kanji1786Character />
      <Kanji1787Character />
      <Kanji1788Character />
      <Kanji1789Character />
      <Kanji1790Character />
      <Kanji1791Character />
      <Kanji1792Character />
      <Kanji1793Character />
      <Kanji1794Character />
      <Kanji1795Character />
      <Kanji1796Character />
      <Kanji1797Character />
      <Kanji1798Character />
      <Kanji1799Character />
      <Kanji1800Character />
      <Kanji1801Character />
      <Kanji1802Character />
      <Kanji1803Character />
      <Kanji1804Character />
      <Kanji1805Character />
      <Kanji1806Character />
      <Kanji1807Character />
      <Kanji1808Character />
      <Kanji1809Character />
      <Kanji1810Character />
      <Kanji1811Character />
      <Kanji1812Character />
      <Kanji1813Character />
      <Kanji1814Character />
      <Kanji1815Character />
      <Kanji1816Character />
      <Kanji1817Character />
      <Kanji1818Character />
      <Kanji1819Character />
      <Kanji1820Character />
      <Kanji1821Character />
      <Kanji1822Character />
      <Kanji1823Character />
      <Kanji1824Character />
      <Kanji1825Character />
      <Kanji1826Character />
      <Kanji1827Character />
      <Kanji1828Character />
      <Kanji1829Character />
      <Kanji1830Character />
      <Kanji1831Character />
      <Kanji1832Character />
      <Kanji1833Character />
      <Kanji1834Character />
      <Kanji1835Character />
      <Kanji1836Character />
      <Kanji1837Character />
      <Kanji1838Character />
      <Kanji1839Character />
      <Kanji1840Character />
      <Kanji1841Character />
      <Kanji1842Character />
      <Kanji1843Character />
      <Kanji1844Character />
      <Kanji1845Character />
      <Kanji1846Character />
      <Kanji1847Character />
      <Kanji1848Character />
      <Kanji1849Character />
      <Kanji1850Character />
      <Kanji1851Character />
      <Kanji1852Character />
      <Kanji1853Character />
      <Kanji1854Character />
      <Kanji1855Character />
      <Kanji1856Character />
      <Kanji1857Character />
      <Kanji1858Character />
      <Kanji1859Character />
      <Kanji1860Character />
      <Kanji1861Character />
      <Kanji1862Character />
      <Kanji1863Character />
      <Kanji1864Character />
      <Kanji1865Character />
      <Kanji1866Character />
      <Kanji1867Character />
      <Kanji1868Character />
      <Kanji1869Character />
      <Kanji1870Character />
      <Kanji1871Character />
      <Kanji1872Character />
      <Kanji1873Character />
      <Kanji1874Character />
      <Kanji1875Character />
      <Kanji1876Character />
      <Kanji1877Character />
      <Kanji1878Character />
      <Kanji1879Character />
      <Kanji1880Character />
      <Kanji1881Character />
      <Kanji1882Character />
      <Kanji1883Character />
      <Kanji1884Character />
      <Kanji1885Character />
      <Kanji1886Character />
      <Kanji1887Character />
      <Kanji1888Character />
      <Kanji1889Character />
      <Kanji1890Character />
      <Kanji1891Character />
      <Kanji1892Character />
      <Kanji1893Character />
      <Kanji1894Character />
      <Kanji1895Character />
      <Kanji1896Character />
      <Kanji1897Character />
      <Kanji1898Character />
      <Kanji1899Character />
      <Kanji1900Character />
      <Kanji1901Character />
      <Kanji1902Character />
      <Kanji1903Character />
      <Kanji1904Character />
      <Kanji1905Character />
      <Kanji1906Character />
      <Kanji1907Character />
      <Kanji1908Character />
      <Kanji1909Character />
      <Kanji1910Character />
      <Kanji1911Character />
      <Kanji1912Character />
      <Kanji1913Character />
      <Kanji1914Character />
      <Kanji1915Character />
      <Kanji1916Character />
      <Kanji1917Character />
      <Kanji1918Character />
      <Kanji1919Character />
      <Kanji1920Character />
      <Kanji1921Character />
      <Kanji1922Character />
      <Kanji1923Character />
      <Kanji1924Character />
      <Kanji1925Character />
      <Kanji1926Character />
      <Kanji1927Character />
      <Kanji1928Character />
      <Kanji1929Character />
      <Kanji1930Character />
      <Kanji1931Character />
      <Kanji1932Character />
      <Kanji1933Character />
      <Kanji1934Character />
      <Kanji1935Character />
      <Kanji1936Character />
      <Kanji1937Character />
      <Kanji1938Character />
      <Kanji1939Character />
      <Kanji1940Character />
      <Kanji1941Character />
      <Kanji1942Character />
      <Kanji1943Character />
      <Kanji1944Character />
      <Kanji1945Character />
      <Kanji1946Character />
      <Kanji1947Character />
      <Kanji1948Character />
      <Kanji1949Character />
      <Kanji1950Character />
      <Kanji1951Character />
      <Kanji1952Character />
      <Kanji1953Character />
      <Kanji1954Character />
      <Kanji1955Character />
      <Kanji1956Character />
      <Kanji1957Character />
      <Kanji1958Character />
      <Kanji1959Character />
      <Kanji1960Character />
      <Kanji1961Character />
      <Kanji1962Character />
      <Kanji1963Character />
      <Kanji1964Character />
      <Kanji1965Character />
      <Kanji1966Character />
      <Kanji1967Character />
      <Kanji1968Character />
      <Kanji1969Character />
      <Kanji1970Character />
      <Kanji1971Character />
      <Kanji1972Character />
      <Kanji1973Character />
      <Kanji1974Character />
      <Kanji1975Character />
      <Kanji1976Character />
      <Kanji1977Character />
      <Kanji1978Character />
      <Kanji1979Character />
      <Kanji1980Character />
      <Kanji1981Character />
      <Kanji1982Character />
      <Kanji1983Character />
      <Kanji1984Character />
      <Kanji1985Character />
      <Kanji1986Character />
      <Kanji1987Character />
      <Kanji1988Character />
      <Kanji1989Character />
      <Kanji1990Character />
      <Kanji1991Character />
      <Kanji1992Character />
      <Kanji1993Character />
      <Kanji1994Character />
      <Kanji1995Character />
      <Kanji1996Character />
      <Kanji1997Character />
      <Kanji1998Character />
      <Kanji1999Character />
      <Kanji2000Character />
      <Kanji2001Character />
      <Kanji2002Character />
      <Kanji2003Character />
      <Kanji2004Character />
      <Kanji2005Character />
      <Kanji2006Character />
      <Kanji2007Character />
      <Kanji2008Character />
      <Kanji2009Character />
      <Kanji2010Character />
      <Kanji2011Character />
      <Kanji2012Character />
      <Kanji2013Character />
      <Kanji2014Character />
      <Kanji2015Character />
      <Kanji2016Character />
      <Kanji2017Character />
      <Kanji2018Character />
      <Kanji2019Character />
      <Kanji2020Character />
      <Kanji2021Character />
      <Kanji2022Character />
      <Kanji2023Character />
      <Kanji2024Character />
      <Kanji2025Character />
      <Kanji2026Character />
      <Kanji2027Character />
      <Kanji2028Character />
      <Kanji2029Character />
      <Kanji2030Character />
      <Kanji2031Character />
      <Kanji2032Character />
      <Kanji2033Character />
      <Kanji2034Character />
      <Kanji2035Character />
      <Kanji2036Character />
      <Kanji2037Character />
      <Kanji2038Character />
      <Kanji2039Character />
      <Kanji2040Character />
      <Kanji2041Character />
      <Kanji2042Character />
      <Kanji2043Character />
      <Kanji2044Character />
      <Kanji2045Character />
      <Kanji2046Character />
      <Kanji2047Character />
      <Kanji2048Character />
      <Kanji2049Character />
      <Kanji2050Character />
      <Kanji2051Character />
      <Kanji2052Character />
      <Kanji2053Character />
      <Kanji2054Character />
      <Kanji2055Character />
      <Kanji2056Character />
      <Kanji2057Character />
      <Kanji2058Character />
      <Kanji2059Character />
      <Kanji2060Character />
      <Kanji2061Character />
      <Kanji2062Character />
      <Kanji2063Character />
      <Kanji2064Character />
      <Kanji2065Character />
      <Kanji2066Character />
      <Kanji2067Character />
      <Kanji2068Character />
      <Kanji2069Character />
      <Kanji2070Character />
      <Kanji2071Character />
      <Kanji2072Character />
      <Kanji2073Character />
      <Kanji2074Character />
      <Kanji2075Character />
      <Kanji2076Character />
      <Kanji2077Character />
      <Kanji2078Character />
      <Kanji2079Character />
      <Kanji2080Character />
      <Kanji2081Character />
      <Kanji2082Character />
      <Kanji2083Character />
      <Kanji2084Character />
      <Kanji2085Character />
      <Kanji2086Character />
      <Kanji2087Character />
      <Kanji2088Character />
      <Kanji2089Character />
      <Kanji2090Character />
      <Kanji2091Character />
      <Kanji2092Character />
      <Kanji2093Character />
      <Kanji2094Character />
      <Kanji2095Character />
      <Kanji2096Character />
      <Kanji2097Character />
      <Kanji2098Character />
      <Kanji2099Character />
      <Kanji2100Character />
      <Kanji2101Character />
      <Kanji2102Character />
      <Kanji2103Character />
      <Kanji2104Character />
      <Kanji2105Character />
      <Kanji2106Character />
      <Kanji2107Character />
      <Kanji2108Character />
      <Kanji2109Character />
      <Kanji2110Character />
      <Kanji2111Character />
      <Kanji2112Character />
      <Kanji2113Character />
      <Kanji2114Character />
      <Kanji2115Character />
      <Kanji2116Character />
      <Kanji2117Character />
      <Kanji2118Character />
      <Kanji2119Character />
      <Kanji2120Character />
      <Kanji2121Character />
      <Kanji2122Character />
      <Kanji2123Character />
      <Kanji2124Character />
      <Kanji2125Character />
      <Kanji2126Character />
      <Kanji2127Character />
      <Kanji2128Character />
      <Kanji2129Character />
      <Kanji2130Character />
      <Kanji2131Character />
      <Kanji2132Character />
      <Kanji2133Character />
      <Kanji2134Character />
      <Kanji2135Character />
      <Kanji2136Character />
      <Kanji2137Character />
      <Kanji2138Character />
      <Kanji2139Character />
      <Kanji2140Character />
      <Kanji2141Character />
      <Kanji2142Character />
      <Kanji2143Character />
      <Kanji2144Character />
      <Kanji2145Character />
      <Kanji2146Character />
      <Kanji2147Character />
      <Kanji2148Character />
      <Kanji2149Character />
      <Kanji2150Character />
      <Kanji2151Character />
      <Kanji2152Character />
      <Kanji2153Character />
      <Kanji2154Character />
      <Kanji2155Character />
      <Kanji2156Character />
      <Kanji2157Character />
      <Kanji2158Character />
      <Kanji2159Character />
      <Kanji2160Character />
      <Kanji2161Character />
      <Kanji2162Character />
      <Kanji2163Character />
      <Kanji2164Character />
      <Kanji2165Character />
      <Kanji2166Character />
      <Kanji2167Character />
      <Kanji2168Character />
      <Kanji2169Character />
      <Kanji2170Character />
      <Kanji2171Character />
      <Kanji2172Character />
      <Kanji2173Character />
      <Kanji2174Character />
      <Kanji2175Character />
      <Kanji2176Character />
      <Kanji2177Character />
      <Kanji2178Character />
      <Kanji2179Character />
      <Kanji2180Character />
      <Kanji2181Character />
      <Kanji2182Character />
      <Kanji2183Character />
      <Kanji2184Character />
      <Kanji2185Character />
      <Kanji2186Character />
      <Kanji2187Character />
      <Kanji2188Character />
      <Kanji2189Character />
      <Kanji2190Character />
      <Kanji2191Character />
      <Kanji2192Character />
      <Kanji2193Character />
      <Kanji2194Character />
      <Kanji2195Character />
      <Kanji2196Character />
      <Kanji2197Character />
      <Kanji2198Character />
      <Kanji2199Character />
      <Kanji2200Character />
      <Kanji2201Character />
      <Kanji2202Character />
      <Kanji2203Character />
      <Kanji2204Character />
      <Kanji2205Character />
      <Kanji2206Character />
      <Kanji2207Character />
      <Kanji2208Character />
      <Kanji2209Character />
      <Kanji2210Character />
      <Kanji2211Character />
      <Kanji2212Character />
      <Kanji2213Character />
      <Kanji2214Character />
      <Kanji2215Character />
      <Kanji2216Character />
      <Kanji2217Character />
      <Kanji2218Character />
      <Kanji2219Character />
      <Kanji2220Character />
      <Kanji2221Character />
      <Kanji2222Character />
      <Kanji2223Character />
      <Kanji2224Character />
      <Kanji2225Character />
      <Kanji2226Character />
      <Kanji2227Character />
      <Kanji2228Character />
      <Kanji2229Character />
      <Kanji2230Character />
      <Kanji2231Character />
      <Kanji2232Character />
      <Kanji2233Character />
      <Kanji2234Character />
      <Kanji2235Character />
      <Kanji2236Character />
      <Kanji2237Character />
      <Kanji2238Character />
      <Kanji2239Character />
      <Kanji2240Character />
      <Kanji2241Character />
      <Kanji2242Character />
      <Kanji2243Character />
      <Kanji2244Character />
      <Kanji2245Character />
      <Kanji2246Character />
      <Kanji2247Character />
      <Kanji2248Character />
      <Kanji2249Character />
      <Kanji2250Character />
      <Kanji2251Character />
      <Kanji2252Character />
      <Kanji2253Character />
      <Kanji2254Character />
      <Kanji2255Character />
      <Kanji2256Character />
      <Kanji2257Character />
      <Kanji2258Character />
      <Kanji2259Character />
      <Kanji2260Character />
      <Kanji2261Character />
      <Kanji2262Character />
      <Kanji2263Character />
      <Kanji2264Character />
      <Kanji2265Character />
      <Kanji2266Character />
      <Kanji2267Character />
      <Kanji2268Character />
      <Kanji2269Character />
      <Kanji2270Character />
      <Kanji2271Character />
      <Kanji2272Character />
      <Kanji2273Character />
      <Kanji2274Character />
      <Kanji2275Character />
      <Kanji2276Character />
      <Kanji2277Character />
      <Kanji2278Character />
      <Kanji2279Character />
      <Kanji2280Character />
      <Kanji2281Character />
      <Kanji2282Character />
      <Kanji2283Character />
      <Kanji2284Character />
      <Kanji2285Character />
      <Kanji2286Character />
      <Kanji2287Character />
      <Kanji2288Character />
      <Kanji2289Character />
      <Kanji2290Character />
      <Kanji2291Character />
      <Kanji2292Character />
      <Kanji2293Character />
      <Kanji2294Character />
      <Kanji2295Character />
      <Kanji2296Character />
      <Kanji2297Character />
      <Kanji2298Character />
      <Kanji2299Character />
      <Kanji2300Character />
      <Kanji2301Character />
      <Kanji2302Character />
      <Kanji2303Character />
      <Kanji2304Character />
      <Kanji2305Character />
      <Kanji2306Character />
      <Kanji2307Character />
      <Kanji2308Character />
      <Kanji2309Character />
      <Kanji2310Character />
      <Kanji2311Character />
      <Kanji2312Character />
      <Kanji2313Character />
      <Kanji2314Character />
      <Kanji2315Character />
      <Kanji2316Character />
      <Kanji2317Character />
      <Kanji2318Character />
      <Kanji2319Character />
      <Kanji2320Character />
      <Kanji2321Character />
      <Kanji2322Character />
      <Kanji2323Character />
      <Kanji2324Character />
      <Kanji2325Character />
      <Kanji2326Character />
      <Kanji2327Character />
      <Kanji2328Character />
      <Kanji2329Character />
      <Kanji2330Character />
      <Kanji2331Character />
      <Kanji2332Character />
      <Kanji2333Character />
      <Kanji2334Character />
      <Kanji2335Character />
      <Kanji2336Character />
      <Kanji2337Character />
      <Kanji2338Character />
      <Kanji2339Character />
      <Kanji2340Character />
      <Kanji2341Character />
      <Kanji2342Character />
      <Kanji2343Character />
      <Kanji2344Character />
      <Kanji2345Character />
      <Kanji2346Character />
      <Kanji2347Character />
      <Kanji2348Character />
      <Kanji2349Character />
      <Kanji2350Character />
      <Kanji2351Character />
      <Kanji2352Character />
      <Kanji2353Character />
      <Kanji2354Character />
      <Kanji2355Character />
      <Kanji2356Character />
      <Kanji2357Character />
      <Kanji2358Character />
      <Kanji2359Character />
      <Kanji2360Character />
      <Kanji2361Character />
      <Kanji2362Character />
      <Kanji2363Character />
      <Kanji2364Character />
      <Kanji2365Character />
      <Kanji2366Character />
      <Kanji2367Character />
      <Kanji2368Character />
      <Kanji2369Character />
      <Kanji2370Character />
      <Kanji2371Character />
      <Kanji2372Character />
      <Kanji2373Character />
      <Kanji2374Character />
      <Kanji2375Character />
      <Kanji2376Character />
      <Kanji2377Character />
      <Kanji2378Character />
      <Kanji2379Character />
      <Kanji2380Character />
      <Kanji2381Character />
      <Kanji2382Character />
      <Kanji2383Character />
      <Kanji2384Character />
      <Kanji2385Character />
      <Kanji2386Character />
      <Kanji2387Character />
      <Kanji2388Character />
      <Kanji2389Character />
      <Kanji2390Character />
      <Kanji2391Character />
      <Kanji2392Character />
      <Kanji2393Character />
      <Kanji2394Character />
      <Kanji2395Character />
      <Kanji2396Character />
      <Kanji2397Character />
      <Kanji2398Character />
      <Kanji2399Character />
      <Kanji2400Character />
      <Kanji2401Character />
      <Kanji2402Character />
      <Kanji2403Character />
      <Kanji2404Character />
      <Kanji2405Character />
      <Kanji2406Character />
      <Kanji2407Character />
      <Kanji2408Character />
      <Kanji2409Character />
      <Kanji2410Character />
      <Kanji2411Character />
      <Kanji2412Character />
      <Kanji2413Character />
      <Kanji2414Character />
      <Kanji2415Character />
      <Kanji2416Character />
      <Kanji2417Character />
      <Kanji2418Character />
      <Kanji2419Character />
      <Kanji2420Character />
      <Kanji2421Character />
      <Kanji2422Character />
      <Kanji2423Character />
      <Kanji2424Character />
      <Kanji2425Character />
      <Kanji2426Character />
      <Kanji2427Character />
      <Kanji2428Character />
      <Kanji2429Character />
      <Kanji2430Character />
      <Kanji2431Character />
      <Kanji2432Character />
      <Kanji2433Character />
      <Kanji2434Character />
      <Kanji2435Character />
      <Kanji2436Character />
      <Kanji2437Character />
      <Kanji2438Character />
      <Kanji2439Character />
      <Kanji2440Character />
      <Kanji2441Character />
      <Kanji2442Character />
      <Kanji2443Character />
      <Kanji2444Character />
      <Kanji2445Character />
      <Kanji2446Character />
      <Kanji2447Character />
      <Kanji2448Character />
      <Kanji2449Character />
      <Kanji2450Character />
      <Kanji2451Character />
      <Kanji2452Character />
      <Kanji2453Character />
      <Kanji2454Character />
      <Kanji2455Character />
      <Kanji2456Character />
      <Kanji2457Character />
      <Kanji2458Character />
      <Kanji2459Character />
      <Kanji2460Character />
      <Kanji2461Character />
      <Kanji2462Character />
      <Kanji2463Character />
      <Kanji2464Character />
      <Kanji2465Character />
      <Kanji2466Character />
      <Kanji2467Character />
      <Kanji2468Character />
      <Kanji2469Character />
      <Kanji2470Character />
      <Kanji2471Character />
      <Kanji2472Character />
      <Kanji2473Character />
      <Kanji2474Character />
      <Kanji2475Character />
      <Kanji2476Character />
      <Kanji2477Character />
      <Kanji2478Character />
      <Kanji2479Character />
      <Kanji2480Character />
      <Kanji2481Character />
      <Kanji2482Character />
      <Kanji2483Character />
      <Kanji2484Character />
      <Kanji2485Character />
      <Kanji2486Character />
      <Kanji2487Character />
      <Kanji2488Character />
      <Kanji2489Character />
      <Kanji2490Character />
      <Kanji2491Character />
      <Kanji2492Character />
      <Kanji2493Character />
      <Kanji2494Character />
      <Kanji2495Character />
      <Kanji2496Character />
      <Kanji2497Character />
      <Kanji2498Character />
      <Kanji2499Character />
      <Kanji2500Character />
    </Wrapper>
    
        <a href="https://github.com/jantimon/next-yak/">next-yak</a>
    </>
  );
};
