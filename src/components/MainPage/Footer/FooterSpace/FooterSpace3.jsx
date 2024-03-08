import React from "react";
import FSBtn1 from "../FSBtn/FSBtn1";
import FSBtn2 from "../FSBtn/FSBtn2";

export default function FooterSpace3() {
  return (
    <li className=" flex flex-col  justify-start w-[25%]">
      <div>
        <FSBtn1>다운로드</FSBtn1>
        <FSBtn2>iOS & Android</FSBtn2>
        <FSBtn2>Mac & Windows</FSBtn2>
        <FSBtn2>캘린더</FSBtn2>
        <FSBtn2>Web Clipper</FSBtn2>
      </div>
      <div className="h-7"></div>
      <div>
        <FSBtn1>만들기</FSBtn1>
        <FSBtn2>API 통합</FSBtn2>
        <FSBtn2>템플릿</FSBtn2>
        <FSBtn2>API 문서</FSBtn2>
        <FSBtn2>가이드와 튜토리얼</FSBtn2>
        <FSBtn2>컨설턴트 고용</FSBtn2>
        <FSBtn2>파트너 되기</FSBtn2>
        <FSBtn2>파트너 되기</FSBtn2>
      </div>
      <div className="h-7"></div>
      <div>
        <FSBtn1>학습하기</FSBtn1>
        <FSBtn2>고객 스토리</FSBtn2>
        <FSBtn2>템플릿</FSBtn2>
        <FSBtn2>도움말 센터</FSBtn2>
        <FSBtn2>웨비나</FSBtn2>
        <FSBtn2>블로그</FSBtn2>
        <FSBtn2>커뮤니티</FSBtn2>
      </div>
    </li>
  );
}
