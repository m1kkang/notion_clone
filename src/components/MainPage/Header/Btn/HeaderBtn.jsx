import React from "react";

const HeaderBtn = ({ children }) => {
  console.log();
  return (
    <>
      <button
        className="border-none cursor-pointer bg-transparent block leading-8 hover:bg-gray-50 rounded-md "
        style={{
          content: "",
          padding: "0 10px",
        }}
      >
        {children}
      </button>
    </>
  );
};

export default HeaderBtn;
