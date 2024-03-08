export default function FooterSpace5() {
  return (
    <li className="flex w-[100%] justify-start px-[250px]">
      <div className="w-[25%]"></div>
      <div className="flex flex-col justify-start w-auto">
        <button className="hover:underline text-sm cursor-pointer ">
          개인정보 판매나 공유를 원하지 않으시면 클릭해주세요.
        </button>
        <div className="text-neutral-500 cursor-default text-sm justify-start">
          © 2024 Notion Labs, Inc.
        </div>
      </div>
    </li>
  );
}
