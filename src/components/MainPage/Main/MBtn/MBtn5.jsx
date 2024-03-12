import React, { useState } from "react";

const MBtn5 = ({ children }) => {
  const [focusedButton, setFocusedButton] = useState(1);

  const handleFocus = (buttonNumber) => {
    setFocusedButton(buttonNumber);
  };

  const handleBlur = () => {
    if (focusedButton === 0) {
      setFocusedButton(1);
    }
  };

  const getImageUrl = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        return "https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/persona-carousel/screenshots/engineering.png";
      case 2:
        return "https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/persona-carousel/screenshots/design.png";
      case 3:
        return "https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/persona-carousel/screenshots/product.png";
      case 4:
        return "https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/persona-carousel/screenshots/marketing.png";
      case 5:
        return "https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/persona-carousel/screenshots/operations.png";
      case 6:
        return "https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/persona-carousel/screenshots/hr.png";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row pb-5">
        {[1, 2, 3, 4, 5, 6].map((buttonNumber) => (
          <button
            key={buttonNumber}
            className={
              "flex flex-col justify-center items-center w-[157.34px] h-[124.6px] bg-neutral-100 rounded-xl p-4 focus:bg-white focus:border-2 border-neutral-100 relative mr-4 " +
              (focusedButton === 1
                ? "focus:bg-white focus:border-2 border-neutral-100"
                : "")
            }
            onFocus={() => handleFocus(buttonNumber)}
            onBlur={handleBlur}
          >
            <img
              alt=""
              loading="eager"
              decoding="async"
              data-nimg="1"
              className="next-image w-[70px] h-auto"
              src={`https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/${
                buttonNumber === 1
                  ? "engineering-v2"
                  : buttonNumber === 2
                  ? "design-v2"
                  : buttonNumber === 3
                  ? "product"
                  : buttonNumber === 4
                  ? "marketing"
                  : buttonNumber === 5
                  ? "operations"
                  : "hr-v2"
              }.png`}
              data-airgap-id="80"
            />
            <h1 className="text-base pb-1">
              {buttonNumber === 1
                ? "엔지니어링"
                : buttonNumber === 2
                ? "디자인"
                : buttonNumber === 3
                ? "프로덕트"
                : buttonNumber === 4
                ? "마케팅"
                : buttonNumber === 5
                ? "운영"
                : "HR"}
            </h1>
          </button>
        ))}
      </div>
      {/* 이미지 표시 */}
      <img
        alt=""
        loading="eager"
        decoding="async"
        data-nimg="1"
        className="next-image w-[1022.4px] h-[639px] rounded-xl"
        src={getImageUrl(focusedButton)}
        data-airgap-id="80"
      />
    </div>
  );
};

export default MBtn5;
