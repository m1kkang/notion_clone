import React from "react";

const FSBtn2 = ({ children }) => {
  console.log();
  return (
    <>
      <button
        className="border-none cursor-pointer bg-transparent block leading-8 text-neutral-600 font-light hover:text-sky-500 hover:underline"
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

export default FSBtn2;
