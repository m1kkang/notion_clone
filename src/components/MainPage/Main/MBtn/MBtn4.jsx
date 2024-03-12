import React, { useState } from "react";

const MBtn4 = ({ children }) => {
  return (
    <div className="flex flex-col">
      <img
        alt=""
        loading="eager"
        decoding="async"
        data-nimg="1"
        className="next-image rounded-2xl w-[955.19px] h-auto pt-7 justify-center items-center"
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/building-blocks/list.png"
        data-airgap-id="75"
      />
      <div className="flex flex-row justify-center pt-5">
        <button className="border border-neutral-300 rounded-lg py-[3.2px] px-[9.6px] text-sm mr-2 focus:border-primary hover:bg-primary-light hover:border-primary-light">
          보드
        </button>
        <button className="border border-neutral-300 rounded-lg py-[3.2px] px-[9.6px] text-sm mr-2 focus:border-primary hover:bg-primary-light hover:border-primary-light">
          표
        </button>
        <button className="border border-neutral-300 rounded-lg py-[3.2px] px-[9.6px] text-sm mr-2 focus:border-primary hover:bg-primary-light hover:border-primary-light">
          타임라인
        </button>
        <button className="border border-neutral-300 rounded-lg py-[3.2px] px-[9.6px] text-sm mr-2 focus:border-primary hover:bg-primary-light hover:border-primary-light">
          캘린더
        </button>
        <button className="border border-neutral-300 rounded-lg py-[3.2px] px-[9.6px] text-sm mr-2 focus:border-primary hover:bg-primary-light hover:border-primary-light">
          갤러리
        </button>
        <button className="border border-neutral-300 rounded-lg py-[3.2px] px-[9.6px] text-sm focus:border-primary hover:bg-primary-light hover:border-primary-light">
          리스트
        </button>
      </div>
    </div>
  );
};

export default MBtn4;
