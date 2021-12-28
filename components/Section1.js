import Btn2 from "./Btn2";
import LayerRelative from "./layers/LayerRelative";

function Section1() {
  return (
    <section
      sx={{
        borderBottom: ({ colors }) => `1px solid ${colors.primary}`,
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "64px",
      }}
    >
      {/* <LayerRelative zi={-1}> */}
      <div dangerouslySetInnerHTML={{ __html: "<!-- first quarter -->" }}></div>
      {/* </LayerRelative> */}
      {/* <LayerRelative zi={30}> */}
      <div
        sx={{
          bg: "base",
          gridColumn: "span 3",
          borderTop: ({ colors }) => `1px solid ${colors.primary}`,

          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <div sx={{ overflow: "hidden", height: 700 }}>
          <video src="/media/5S REEL 2020.mp4"></video>
        </div>
        <div sx={{ pl: 5 }}>
          <p sx={{ variant: "text.body1" }}>
            5S IS A CREATIVE STUDIO BORN AND BRED IN MONTREAL. OUR APPROACH
            INFUSES STRATEGIC INSIGHT INTO STORYTELLING FOR BRANDS AND AGENCIES
            SEEKING TO STAND OUT.
          </p>
          <Btn2>LEARN MORE</Btn2>
        </div>
      </div>
      {/* </LayerRelative> */}
    </section>
  );
}

export default Section1;
