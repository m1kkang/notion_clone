export default function MainSpace3() {
  return (
    <div className="flex flex-col py-10 items-center">
      <div className="flex items-center">
        <h1 className="text-4xl font-extrabold pt-8 pb-4">
          여러 툴을 통합하고 <br />
          비용을 절감하세요
        </h1>
        <div className="ml-4">
          <img
            alt=""
            loading="lazy"
            className="next-image"
            style={{
              color: "transparent",
              objectFit: "cover",
              objectPosition: "top left",
              width: "217px",
              height: "183px",
              display: "block",
            }}
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/pages/home/giant-pencil-illustration.png"
            data-airgap-id="54"
          />
        </div>
      </div>
      <div className="ml-4">
        <img
          alt=""
          loading="lazy"
          className="next-image"
          style={{
            color: "transparent",
            objectFit: "cover",
            objectPosition: "top left",
            width: "568px",
            height: "78px",
            display: "block",
          }}
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-before-notion-V2.png"
          data-airgap-id="62"
        />
        {/* <img
          alt=""
          loading="lazy"
          className="next-image"
          style={{
            color: "transparent",
            objectFit: "cover",
            objectPosition: "top left",
            width: "613px",
            height: "50px",
            display: "block",
          }}
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-strikethrough-V2.png"
          data-airgap-id="63"
        /> */}
      </div>
      <h1 className="text-2xl">
        "Notion 하나로 10개 이상의 기존 툴을 대체할 수 있었
        <br />
        어요."
      </h1>
      <div className="flex flex-row">
        <img
          alt=""
          loading="lazy"
          className="next-image mr-3"
          style={{
            color: "transparent",
            objectFit: "cover",
            objectPosition: "top left",
            width: "125px",
            height: "35px",
            display: "block",
          }}
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=128/front-static/shared/logos/color/metalab.png"
          data-airgap-id="66"
        />
        <div className="flex flex-col justify-start w-auto">
          <h1 className="text-sm font-semibold text-start">Justin Watt</h1>
          <h1 className="text-sm">MetaLab 운영 및 마케팅팀 이사</h1>
        </div>
      </div>
    </div>
  );
}
