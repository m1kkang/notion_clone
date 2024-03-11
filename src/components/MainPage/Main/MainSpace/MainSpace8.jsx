export default function MainSpace7() {
  return (
    <div className="flex flex-col items-center pt-10">
      <div className="flex flex-col items-center">
        <h1
          className="
        text-5xl font-extrabold pt-8 pb-4"
        >
          무료로 시작하기
        </h1>
        <h1 className="text-sm w-[710px] pb-6">
          요금을 지불하고 팀원을 추가하기 전에 무료로 충분히 사용해 보세요.
        </h1>
      </div>
      <div className="flex flew-row justify-center pb-5">
        <button className="bg-black text-white flex items-center rounded-md h-[36px] text-[15px] font-extrabold  mr-[15px] px-3 py-3.5 hover:bg-neutral-800">
          무료로 Notion 사용하기
        </button>
        <button className="text-[#5a85d1] hover:underline">
          영업팀 문의하기 ⭢
        </button>
      </div>
      {/* 그림1 */}
      <img
        alt=""
        loading="eager"
        decoding="async"
        data-nimg="1"
        className="next-image"
        style={{
          color: "transparent",
          objectFit: "cover",
          objectPosition: "top left",
          width: "670px",
          height: "330px",
          display: "block",
        }}
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png"
        data-airgap-id="109"
      />
    </div>
  );
}
