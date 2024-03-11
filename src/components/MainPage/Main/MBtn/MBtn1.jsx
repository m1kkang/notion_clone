import React, { useState } from "react";
import M1Image from "../../../../img/M1.png";
import M2Image from "../../../../img/M2.png";
import M3Image from "../../../../img/M3.png";
import M4Image from "../../../../img/M4.png";
import M5Image from "../../../../img/M5.png";

const MBtn1 = ({ children }) => {
  const [hoveredButton, setHoveredButton] = useState(1);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);

  const handleMouseEnter1 = () => {
    setHovered1(true);
    setHoveredButton(1);
  };

  const handleMouseLeave1 = () => {
    setHovered1(false);
    setHoveredButton(1);
  };

  const handleMouseEnter2 = () => {
    setHovered2(true);
    setHoveredButton(2);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
    setHoveredButton(1);
  };

  const handleMouseEnter3 = () => {
    setHovered3(true);
    setHoveredButton(3);
  };

  const handleMouseLeave3 = () => {
    setHovered3(false);
    setHoveredButton(1);
  };

  const handleMouseEnter4 = () => {
    setHovered4(true);
    setHoveredButton(4);
  };

  const handleMouseLeave4 = () => {
    setHovered4(false);
    setHoveredButton(1);
  };

  const handleMouseEnter5 = () => {
    setHovered5(true);
    setHoveredButton(5);
  };

  const handleMouseLeave5 = () => {
    setHovered5(false);
    setHoveredButton(1);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row">
        {/* 버튼1 */}
        <button
          className={
            "w-[200px] h-[160px] bg-neutral-100 rounded-xl flex flex-col justify-start p-4 hover:bg-white hover:border-2 border-neutral-100 relative mr-4 " +
            (hovered1 ? "hover:bg-white hover:border-2 border-neutral-100" : "")
          }
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <svg
            className="sparkles w-[30px] h-[30px] block bg-fuchsia-100 p-1 rounded-md fill-purple-500"
            viewBox="0 0 24 23"
            style={{
              flexShrink: 0,
            }}
          >
            <g>
              <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z"></path>
              <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z"></path>
            </g>
          </svg>

          <h1 className="text-xl font-bold pb-1">AI</h1>
          <h1 className="text-sm">
            무엇이든 물어보세요.
            <br />
            Notion이 대답해 드려요.
          </h1>
          <button
            className={`text-sm pt-1 text-purple-700 font-semibold ${
              hovered1 ? "visible" : "hidden"
            }`}
          >
            자세히 알아보기 ⭢
          </button>
        </button>
        {/* 버튼2 */}
        <button
          className={
            "w-[200px] h-[160px] bg-neutral-100 rounded-xl flex flex-col justify-start p-4 hover:bg-white hover:border-2 border-neutral-100 relative mr-4 " +
            (hovered2 ? "hover:bg-white hover:border-2 border-neutral-100" : "")
          }
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <svg
            className="doc w-[30px] h-[30px] block bg-amber-100 p-1 rounded-md fill-amber-500"
            viewBox="0 0 49 49"
            style={{
              flexShrink: 0,
            }}
          >
            <path
              d="m40.22 14.512-12.33-9.99c-.72-.6-1.65-.93-2.61-.93H11.36c-2.28 0-4.11 1.83-4.11 4.11v33.78c0 2.28 1.86 4.11 4.11 4.11h26.28c2.28 0 4.11-1.83 4.11-4.11v-23.76c0-1.23-.57-2.43-1.53-3.21Zm-13.11-6.81 10.38 9.06c.42.36.18 1.05-.39 1.05h-8.88c-.6 0-1.11-.48-1.11-1.11v-9Zm8.85 33.75H13.01c-.69 0-1.26-.57-1.26-1.29v-31.2c0-.69.57-1.26 1.26-1.26h10.35v10.14c0 2.07 1.68 3.75 3.75 3.75h10.11v18.6c0 .69-.57 1.26-1.26 1.26Z"
              fill="amber-500"
            />
            <path
              d="M17.75 27.232h13.5M17.75 34.402h13.5"
              stroke="#ffab00"
              strokeWidth="1.824"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="text-xl font-bold pb-1">문서</h1>
          <h1 className="text-sm">
            심플하고 파워풀한 차
            <br />
            세대 메모와 문서
          </h1>
          <button
            className={`text-sm pt-1 text-amber-900 font-semibold ${
              hovered2 ? "visible" : "hidden"
            }`}
          >
            자세히 알아보기 ⭢
          </button>
        </button>
        {/* 버튼3 */}
        <button
          className={
            "w-[200px] h-[160px] bg-neutral-100 rounded-xl flex flex-col justify-start p-4 hover:bg-white hover:border-2 border-neutral-100 relative mr-4 " +
            (hovered3 ? "hover:bg-white hover:border-2 border-neutral-100" : "")
          }
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <svg
            className="bookOpen w-[30px] h-[30px] block bg-red-100 p-1 rounded-md fill-red-600"
            viewBox="0 0 48 48"
            style={{
              flexShrink: 0,
            }}
          >
            <g>
              <path d="M21 40.86H6.09c-1.08 0-1.98-.9-1.98-1.98V20.22c0-1.17.6-1.83 1.74-1.83h.9v-3.36H4.89c-2.49 0-4.5 2.01-4.5 4.5v20.25c0 2.49 2.01 4.5 4.5 4.5H21v-3.42ZM43.14 15h-1.86v3.36h.99c1.08 0 1.62.63 1.62 1.62v18.93c0 1.08-.87 1.98-1.98 1.98H27v3.36h16.14c2.49 0 4.5-2.01 4.5-4.5V19.5c0-2.49-2.01-4.5-4.5-4.5Z"></path>
              <path d="M39.39 4.5c-5.19.69-11.4 2.73-15.36 5.16-3.99-2.43-10.2-4.47-15.36-5.16v30.75c4.26.51 8.67 1.5 13.14 3.24l2.25.99 2.25-.99c4.47-1.74 8.88-2.76 13.14-3.24V4.5h-.06ZM13.14 31.89V9.69c3.21.57 6.93 2.01 8.64 3.39v21.24c-2.49-1.02-5.97-1.95-8.64-2.43Zm21.75 0c-2.64.48-6.15 1.41-8.64 2.43V13.08c1.68-1.41 5.43-2.82 8.64-3.39v22.2Z"></path>
            </g>
          </svg>

          <h1 className="text-xl font-bold pb-1">위키</h1>
          <h1 className="text-sm">
            지식을 한 곳에 모으고더
            <br />
            이상 찾아 헤매지 마세요.
          </h1>
          <button
            className={`text-sm pt-1 text-red-600 font-semibold ${
              hovered3 ? "visible" : "hidden"
            }`}
          >
            자세히 알아보기 ⭢
          </button>
        </button>
        {/* 버튼4 */}
        <button
          className={
            "w-[200px] h-[160px] bg-neutral-100 rounded-xl flex flex-col justify-start p-4 hover:bg-white hover:border-2 border-neutral-100 relative mr-4 " +
            (hovered4 ? "hover:bg-white hover:border-2 border-neutral-100" : "")
          }
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        >
          <svg
            className="sparkles w-[30px] h-[30px] block bg-sky-100 p-1 rounded-md fill-sky-600"
            viewBox="0 0 49 49"
            style={{
              flexShrink: 0,
            }}
          >
            <g>
              <path d="m48.2037 9.1569-6.1556 6.2475-.0306-.0613c-3.0319 3.0932-5.2982 3.7975-9.7082 3.3382l-3.1543 3.185c1.1025 2.0212.8268 4.6244-.8575 6.3394-2.0519 2.1131-5.4513 2.1131-7.5644.0612s-2.1438-5.4512-.0613-7.5644c1.6844-1.715 4.2569-2.0212 6.3088-.9494l3.1544-3.185c-.5207-4.41.1225-6.6762 3.1543-9.76933l6.1557-6.2475 1.715 7.04375zm-14.5467 12.7706h.8269v.0612c1.1331 0 2.1438-.1225 3.0931-.3369.2144.9494.3369 1.8988.3369 2.9094 0 7.4113-6.0025 13.4138-13.4137 13.4138-7.4113 0-13.4138-6.0025-13.4138-13.4138 0-7.4112 6.0025-13.4137 13.4138-13.4137.9187 0 1.8375.0918 2.695.2756-.245 1.1944-.3369 2.4806-.245 3.92-.7963-.2144-1.5925-.3675-2.45-.3675-5.2675 0-9.555 4.2875-9.555 9.555s4.2875 9.555 9.555 9.555 9.555-4.2875 9.555-9.555c0-.9188-.1532-1.7763-.3982-2.6031zm8.483-2.5419c.7044-.5206 1.3781-1.1331 2.0825-1.8375l1.5925-1.6231c1.0413 2.6644 1.6538 5.5431 1.6538 8.575 0 12.6787-10.2901 22.9688-22.9688 22.9688-12.6788 0-22.96875-10.2901-22.96875-22.9688 0-12.6788 10.28995-22.96875 22.96875-22.96875 2.8787 0 5.635.55125 8.1769 1.53125l-1.5619 1.5925c-.7044.70438-1.2863 1.40875-1.8069 2.11313-1.5312-.39813-3.1544-.64313-4.8081-.64313-10.1369 0-18.375 8.2381-18.375 18.375s8.2381 18.375 18.375 18.375 18.375-8.2381 18.375-18.375c0-1.7763-.2756-3.4913-.735-5.1144z"></path>
            </g>
          </svg>

          <h1 className="text-xl font-bold pb-1">AI</h1>
          <h1 className="text-sm">
            복잡한 프로젝트를 깔
            <br />
            끔하게 관리하세요.
          </h1>
          <button
            className={`text-sm pt-1 text-sky-600 font-semibold ${
              hovered4 ? "visible" : "hidden"
            }`}
          >
            자세히 알아보기 ⭢
          </button>
        </button>
        {/* 버튼5 */}
        <button
          className={
            "w-[200px] h-[160px] bg-neutral-100 rounded-xl flex flex-col justify-start p-4 hover:bg-white hover:border-2 border-neutral-100 relative mr-4 " +
            (hovered5 ? "hover:bg-white hover:border-2 border-neutral-100" : "")
          }
          onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}
        >
          <svg
            className="sparkles w-[30px] h-[30px] block bg-red-100 p-1 rounded-md"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.3284 4H10.6674C6.98444 4 4 6.98444 4 10.6674V37.3326C4 41.0156 6.98444 44 10.6674 44H37.3326C41.0154 44 44 41.0156 44 37.3326V10.6674C44 6.98444 41.0154 4 37.3326 4H37.3284ZM36.2784 39.864H11.7215C9.73606 39.864 8.12742 38.2554 8.12742 36.27V14.9684H39.8726V36.2742C39.8726 38.2596 38.2638 39.8682 36.2784 39.8682V39.864Z"
              fill="#FFA300"
            ></path>
            <g class="NotionCalendarIcon_dates__QiFn_" fill="#FFA300">
              <g class="">
                <path d="M19.1302 24.3266C19.1302 22.8208 18.2734 21.8342 16.9232 21.8342C15.6251 21.8342 15.1837 22.7688 15.1837 24.2488V24.5084C15.0279 24.5344 14.8981 24.5604 14.7423 24.5604C13.8076 24.5604 13.1325 23.7814 13.1325 22.4572C13.1325 20.4321 15.0019 18.6406 18.559 18.6406C21.7266 18.6406 23.7517 20.2504 23.7517 22.8728C23.7517 24.846 22.0641 26.1442 20.4024 26.4816C23.5181 26.8192 24.8162 28.5848 24.8162 30.7398C24.8162 34.4266 22.0381 36.348 17.7541 36.348H17.6502C14.4307 36.348 12.1719 35.0238 12.1719 32.9726C12.1719 31.8042 13.0547 30.8696 14.3788 30.8696C14.4826 30.8696 14.5865 30.8956 14.6904 30.8956C14.95 32.9986 16.404 33.8554 17.8579 33.8554C19.26 33.8554 20.2466 32.9986 20.2466 31.7004V31.6486C20.2466 29.6234 18.507 29.4156 15.8847 29.156L15.4693 26.7154C17.9099 26.4298 19.1302 25.7288 19.1302 24.3266Z"></path>
                <path d="M29.0308 33.6478V21.5486C26.4344 22.1198 25.8632 20.9774 26.1488 19.8349C27.7068 19.5753 31.757 18.6406 33.289 18.1992V33.7516L36.119 34.3228C36.119 35.3354 35.5218 35.9326 34.4574 35.9326C33.5746 35.9326 31.5234 35.8806 30.5368 35.8806C29.005 35.8806 26.2008 35.9326 26.2008 35.9326C26.123 35.7248 26.097 35.5172 26.097 35.3354C26.097 34.842 26.3046 34.3488 26.9798 34.167L29.0308 33.6478Z"></path>
              </g>
            </g>
          </svg>

          <h1 className="text-xl font-bold pb-1">캘린더</h1>
          <h1 className="text-sm">
            시간과 프로젝트
            <br />를 함께 관리하세요.
          </h1>
          <button
            className={`text-sm pt-1 text-amber-500 font-semibold ${
              hovered5 ? "visible" : "hidden"
            }`}
          >
            Learn more ⭢
          </button>
        </button>
      </div>
      {/* 조건부 렌더링 */}
      {hoveredButton === 1 && (
        <img
          src={M1Image}
          alt="M1 Image"
          className="w-[1100px] h-[700px] block p-1"
        />
      )}
      {hoveredButton === 2 && (
        <img
          src={M2Image}
          alt="M2 Image"
          className="w-[1100px] h-[700px] block p-1"
        />
      )}
      {hoveredButton === 3 && (
        <img
          src={M3Image}
          alt="M3 Image"
          className="w-[1100px] h-[700px] block p-1"
        />
      )}
      {hoveredButton === 4 && (
        <img
          src={M4Image}
          alt="M4 Image"
          className="w-[1100px] h-[700px] block p-1"
        />
      )}
      {hoveredButton === 5 && (
        <img
          src={M5Image}
          alt="M5 Image"
          className="w-[1100px] h-[700px] block p-1"
        />
      )}
    </div>
  );
};

export default MBtn1;
