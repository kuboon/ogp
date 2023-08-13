/** @jsxImportSource https://esm.sh/react@18.2.0 */
// import { ImageResponse } from "https://deno.land/x/og_edge@0.0.6/mod.ts";
import { ImageResponse, loadGoogleFont } from "./og_edge.ts";

type Args = {
  score: string;
  title: string;
};
const img = Deno.readFileSync("./typistan.png").buffer;
export async function typistanImg({ score, title }: Args) {
  return new ImageResponse(
    <div style={{ display: "flex" }}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1200px"
        height="630px"
        viewBox="0 0 1200 630"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <g opacity="1">
          <path
            d="M0 127.288L19.7889 122.795C39.4333 118.303 79.0111 109.318 118.444 131.78C157.878 154.243 197.456 208.153 236.6 239.601C275.889 271.048 314.889 280.033 354.178 272.546C393.322 265.058 432.9 241.098 472.333 212.646C511.767 184.193 551.344 151.248 590.778 155.74C630.211 160.233 669.789 202.163 709.222 236.606C748.656 271.048 788.233 298.003 827.667 305.491C867.1 312.978 906.678 300.998 945.822 280.033C985.111 259.068 1024.11 229.118 1063.4 221.631C1102.54 214.143 1142.12 229.118 1181.56 212.646C1220.99 196.173 1260.57 148.253 1280.21 124.293L1300 100.333L1300 0L1280.21 0C1260.57 0 1220.99 0 1181.56 0C1142.12 0 1102.54 0 1063.4 0C1024.11 0 985.111 0 945.822 0C906.678 0 867.1 0 827.667 0C788.233 0 748.656 0 709.222 0C669.789 0 630.211 0 590.778 0C551.344 0 511.767 0 472.333 0C432.9 0 393.322 0 354.178 0C314.889 0 275.889 0 236.6 0C197.456 0 157.878 0 118.444 0C79.0111 0 39.4333 0 19.7889 0L0 0L0 127.288Z"
            fill="#f2d4ef"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M0 360.899L19.7889 368.386C39.4333 375.874 79.0111 390.849 118.444 404.326C157.878 417.804 197.456 429.784 236.6 446.256C275.889 462.729 314.889 483.694 354.178 503.161C393.322 522.629 432.9 540.599 472.333 527.121C511.767 513.644 551.344 468.719 590.778 456.739C630.211 444.759 669.789 465.724 709.222 470.216C748.656 474.709 788.233 462.729 827.667 464.226C867.1 465.724 906.678 480.699 945.822 465.724C985.111 450.749 1024.11 405.824 1063.4 398.336C1102.54 390.849 1142.12 420.799 1181.56 431.281C1220.99 441.764 1260.57 432.779 1280.21 428.286L1300 423.794L1300 97.3378L1280.21 121.298C1260.57 145.258 1220.99 193.178 1181.56 209.651C1142.12 226.123 1102.54 211.148 1063.4 218.636C1024.11 226.123 985.111 256.073 945.822 277.038C906.678 298.003 867.1 309.983 827.667 302.496C788.233 295.008 748.656 268.053 709.222 233.611C669.789 199.168 630.211 157.238 590.778 152.745C551.344 148.253 511.767 181.198 472.333 209.651C432.9 238.103 393.322 262.063 354.178 269.551C314.889 277.038 275.889 268.053 236.6 236.606C197.456 205.158 157.878 151.248 118.444 128.785C79.0111 106.323 39.4333 115.308 19.7889 119.8L0 124.293L0 360.899Z"
            fill="#f0ccec"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M0 486.689L19.7889 489.684C39.4333 492.679 79.0111 498.669 118.444 507.654C157.878 516.639 197.456 528.619 236.6 539.101C275.889 549.584 314.889 558.569 354.178 582.529C393.322 606.489 432.9 645.424 472.333 645.424C511.767 645.424 551.344 606.489 590.778 594.509C630.211 582.529 669.789 597.504 709.222 604.992C748.656 612.479 788.233 612.479 827.667 609.484C867.1 606.489 906.678 600.499 945.822 585.524C985.111 570.549 1024.11 546.589 1063.4 549.584C1102.54 552.579 1142.12 582.529 1181.56 587.022C1220.99 591.514 1260.57 570.549 1280.21 560.067L1300 549.584L1300 420.799L1280.21 425.291C1260.57 429.784 1220.99 438.769 1181.56 428.286C1142.12 417.804 1102.54 387.854 1063.4 395.341C1024.11 402.829 985.111 447.754 945.822 462.729C906.678 477.704 867.1 462.729 827.667 461.231C788.233 459.734 748.656 471.714 709.222 467.221C669.789 462.729 630.211 441.764 590.778 453.744C551.344 465.724 511.767 510.649 472.333 524.126C432.9 537.604 393.322 519.634 354.178 500.166C314.889 480.699 275.889 459.734 236.6 443.261C197.456 426.789 157.878 414.809 118.444 401.331C79.0111 387.854 39.4333 372.879 19.7889 365.391L0 357.903L0 486.689Z"
            fill="#edc4e9"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M0 612.479L19.7889 616.972C39.4333 621.464 79.0111 630.449 118.444 628.952C157.878 627.454 197.456 615.474 236.6 625.957C275.889 636.439 314.889 669.384 354.178 690.349C393.322 711.314 432.9 720.3 472.333 708.319C511.767 696.339 551.344 663.394 590.778 654.409C630.211 645.424 669.789 660.399 709.222 676.872C748.656 693.344 788.233 711.314 827.667 718.802C867.1 726.29 906.678 723.295 945.822 711.314C985.111 699.334 1024.11 678.369 1063.4 679.867C1102.54 681.364 1142.12 705.324 1181.56 709.817C1220.99 714.309 1260.57 699.334 1280.21 691.847L1300 684.359L1300 546.589L1280.21 557.072C1260.57 567.554 1220.99 588.519 1181.56 584.027C1142.12 579.534 1102.54 549.584 1063.4 546.589C1024.11 543.594 985.111 567.554 945.822 582.529C906.678 597.504 867.1 603.494 827.667 606.489C788.233 609.484 748.656 609.484 709.222 601.997C669.789 594.509 630.211 579.534 590.778 591.514C551.344 603.494 511.767 642.429 472.333 642.429C432.9 642.429 393.322 603.494 354.178 579.534C314.889 555.574 275.889 546.589 236.6 536.106C197.456 525.624 157.878 513.644 118.444 504.659C79.0111 495.674 39.4333 489.684 19.7889 486.689L0 483.694L0 612.479Z"
            fill="#ebbce5"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M0 801.165L19.7889 802.662C39.4333 804.16 79.0111 807.155 118.444 810.15C157.878 813.145 197.456 816.14 236.6 811.647C275.889 807.155 314.889 795.175 354.178 793.677C393.322 792.18 432.9 801.165 472.333 805.657C511.767 810.15 551.344 810.15 590.778 808.652C630.211 807.155 669.789 804.16 709.222 805.657C748.656 807.155 788.233 813.145 827.667 811.647C867.1 810.15 906.678 801.165 945.822 805.657C985.111 810.15 1024.11 828.12 1063.4 837.105C1102.54 846.09 1142.12 846.09 1181.56 847.587C1220.99 849.085 1260.57 852.08 1280.21 853.577L1300 855.075L1300 681.364L1280.21 688.852C1260.57 696.339 1220.99 711.314 1181.56 706.822C1142.12 702.329 1102.54 678.369 1063.4 676.872C1024.11 675.374 985.111 696.339 945.822 708.319C906.678 720.3 867.1 723.295 827.667 715.807C788.233 708.319 748.656 690.349 709.222 673.877C669.789 657.404 630.211 642.429 590.778 651.414C551.344 660.399 511.767 693.344 472.333 705.324C432.9 717.304 393.322 708.319 354.178 687.354C314.889 666.389 275.889 633.444 236.6 622.962C197.456 612.479 157.878 624.459 118.444 625.957C79.0111 627.454 39.4333 618.469 19.7889 613.977L0 609.484L0 801.165Z"
            fill="#e8b3e2"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M0 900L19.7889 900C39.4333 900 79.0111 900 118.444 900C157.878 900 197.456 900 236.6 900C275.889 900 314.889 900 354.178 900C393.322 900 432.9 900 472.333 900C511.767 900 551.344 900 590.778 900C630.211 900 669.789 900 709.222 900C748.656 900 788.233 900 827.667 900C867.1 900 906.678 900 945.822 900C985.111 900 1024.11 900 1063.4 900C1102.54 900 1142.12 900 1181.56 900C1220.99 900 1260.57 900 1280.21 900L1300 900L1300 852.08L1280.21 850.582C1260.57 849.085 1220.99 846.09 1181.56 844.592C1142.12 843.095 1102.54 843.095 1063.4 834.11C1024.11 825.125 985.111 807.155 945.822 802.662C906.678 798.17 867.1 807.155 827.667 808.652C788.233 810.15 748.656 804.16 709.222 802.662C669.789 801.165 630.211 804.16 590.778 805.657C551.344 807.155 511.767 807.155 472.333 802.662C432.9 798.17 393.322 789.185 354.178 790.682C314.889 792.18 275.889 804.16 236.6 808.652C197.456 813.145 157.878 810.15 118.444 807.155C79.0111 804.16 39.4333 801.165 19.7889 799.667L0 798.17L0 900Z"
            fill="#e6aadf"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
          />
        </g>
      </svg>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "60px",
          justifyContent: "space-around",
          color: "black",
          padding: "50px",
          position: "absolute",
          width: "1200px",
          height: "630px",
        }}
      >
        <div id="score" style={{ display: "flex" }}>
          <span style={{ fontSize: "150px" }}>{score}</span>
          <span>てん</span>
        </div>
        <div lang="ja-JP" id="title">{title}</div>
        <div>たいぴすたん</div>
      </div>
      <img
        src={img as unknown as string}
        width={500}
        height={500}
        style={{
          position: "absolute",
          left: "700",
          top: "160",
        }}
      />
    </div>,
    {
      fonts: [
        {
          name: "sans serif",
          data: await loadGoogleFont("BIZ+UDPGothic", "たいぴすたんて0123456789" + title),
          weight: 700,
          style: "normal",
        },
      ],
      debug: false,
    },
  );
}
