import MBtn1 from "../MBtn/MBtn1";

export default function MainSpace1() {
  return (
    <div className="flex flex-col items-center pb-10">
      <div className="flex flex-col items-center">
        <h1
          className="
        text-6xl font-extrabold pt-8 pb-4"
        >
          어떤 일이든 AI로 커넥트하세요.
        </h1>
        <h1 className="text-2xl w-[710px] pb-6">
          하나의 워크스페이스에서 문서를 작성하고, 지식을 정리하고, 프로젝트를
          관리 하세요.
        </h1>
      </div>
      <div className="flex flew-row justify-center pb-5">
        <button className="bg-black text-white flex items-center rounded-md h-[36px] text-[15px] font-extrabold  mr-[15px] px-3 py-3.5 hover:bg-neutral-800">
          Notion 무료로 사용하기 ⭢
        </button>
        <button className="text-[#5a85d1] hover:underline">
          영업팀 문의 ⭢
        </button>
      </div>
      {/* 그림1 */}
      <img
        id="4qPZTqxXRCDQiimE4c9xXc"
        alt=""
        fetchpriority="high"
        loading="eager"
        width="2048"
        height="749"
        decoding="async"
        data-nimg="1"
        class="next-image SuperHero_asset__4QinG w-[640px] h-[243.06px] mx-auto"
        src="https://images.ctfassets.net/spoqsaf9291f/4qPZTqxXRCDQiimE4c9xXc/eb57558f50ee6fac68dc04e3b5099c8a/home-hero.png"
        data-airgap-id="49"
      ></img>
      <MBtn1 />
    </div>
  );
}
