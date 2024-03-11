export default function MainSpace3() {
  return (
    <div className="flex flex-col items-center bg-green-100 py-10">
      <div className="flex flex-row items-center">
        <img
          alt=""
          loading="lazy"
          className="next-image"
          style={{
            color: "transparent",
            objectFit: "cover",
            objectPosition: "top left",
            width: "221px",
            height: "150px",
            display: "block",
          }}
          src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekI.png"
          data-airgap-id="54"
        />
        <h1
          className="
        text-4xl font-extrabold pt-8 pb-4"
        >
          강력한 빌딩 블록
        </h1>
      </div>
      <div className="w-[1020.79px] h-[848.53px] bg-neutral-100 rounded-2xl">
        <h1>원하는 방식으로 보기 표시, 필터링, 정렬</h1>
        <h1>
          나에게 할당된 작업 또는 긴급으로 표시된 작업만 확인해 보세요. 어떤{" "}
          <br />
          프로젝트라도 나에게 맞는 방법으로 보기를 조정할 수 있어요.
        </h1>
      </div>
    </div>
  );
}
