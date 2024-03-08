import React from "react";
import FSBtn1 from "../FSBtn/FSBtn1";
import FSBtn2 from "../FSBtn/FSBtn2";

export default function FooterSpace2() {
  return (
    <li className=" flex flex-col  justify-start w-[25%]">
      <div>
        <FSBtn1>프로덕트</FSBtn1>
        <FSBtn2>AI</FSBtn2>
        <FSBtn2>문서</FSBtn2>
        <FSBtn2>위키</FSBtn2>
        <FSBtn2>프로젝트</FSBtn2>
        <FSBtn2>캘린더</FSBtn2>
        <FSBtn2>새로운 기능</FSBtn2>
      </div>
      <div className="h-7"></div>
      <div>
        <FSBtn1>솔루션</FSBtn1>
        <FSBtn2>회사</FSBtn2>
        <FSBtn2>팀</FSBtn2>
        <FSBtn2>개인</FSBtn2>
        <FSBtn2>원격 근무</FSBtn2>
        <FSBtn2>스타트업</FSBtn2>
        <FSBtn2>교육</FSBtn2>
        <FSBtn2>비영리단체</FSBtn2>
        <FSBtn2>엔지니어링</FSBtn2>
        <FSBtn2>프로덕트</FSBtn2>
        <FSBtn2>디자인</FSBtn2>
        <FSBtn2>매니저</FSBtn2>
      </div>
    </li>
  );
}
