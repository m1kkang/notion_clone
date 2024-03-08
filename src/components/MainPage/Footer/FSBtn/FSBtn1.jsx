import React from "react";

const FSBtn1 = ({ children }) => {
  console.log();
  return (
    <>
      <button
        className="border-none cursor-default bg-transparent block leading-8 font-semibold "
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

export default FSBtn1;
