import React from "react";
import FSBtn1 from "../FSBtn/FSBtn1";
import FSBtn2 from "../FSBtn/FSBtn2";

export default function FooterSpace4() {
  return (
    <li className=" flex flex-col justify-start w-[25%]">
      <div>
        <FSBtn1>시작하기</FSBtn1>
        <FSBtn2>Confluence에서 옮겨오기</FSBtn2>
        <FSBtn2>Asana에서 전환</FSBtn2>
        <FSBtn2>Evernote에서 옮겨오기</FSBtn2>
        <FSBtn2>Monday와 비교</FSBtn2>
        <FSBtn2>Clickup과 비교</FSBtn2>
        <FSBtn2>Jira와 비교</FSBtn2>
      </div>
      <div className="h-7"></div>
      <div>
        <FSBtn1>자료</FSBtn1>
        <FSBtn2>요금제</FSBtn2>
        <FSBtn2>Notion 소개</FSBtn2>
        <FSBtn2>채용</FSBtn2>
        <FSBtn2>미디어 키트</FSBtn2>
        <FSBtn2>Notion에 이메일 보내기</FSBtn2>
        <FSBtn2>보안</FSBtn2>
        <FSBtn2>쿠키 설정</FSBtn2>
        <FSBtn2>이용약관 및 개인정보 보호정책</FSBtn2>
        <FSBtn2>
          캘리포니아 개인정보 보호정책 <br />
          (California Privacy Notice)
        </FSBtn2>
        <FSBtn2>서비스 상태</FSBtn2>
      </div>
    </li>
  );
}
