import FooterSpace1 from "./FooterSpace/FooterSpace1";
import FooterSpace2 from "./FooterSpace/FooterSpace2";
import FooterSpace3 from "./FooterSpace/FooterSpace3";
import FooterSpace4 from "./FooterSpace/FooterSpace4";
import FooterSpace5 from "./FooterSpace/FooterSpace5";

export default function Footer() {
  return (
    <div
      className="flex flex-col"
      style={{
        borderTop: "1px solid lightgray",
      }}
    >
      <ul className="flex flex-wrap flex-row py-[50px] px-[250px] justify-center ">
        <FooterSpace1 />
        <FooterSpace2 />
        <FooterSpace3 />
        <FooterSpace4 />
      </ul>
      <FooterSpace5 />
    </div>
  );
}
