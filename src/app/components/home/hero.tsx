import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-start relative mb-24 home-hero">
      <div className="absolute inset-0 w-full h-full justify-center -z-10 pointer-events-none hidden xl:flex">
        <svg
          width="1920"
          height="1080"
          viewBox="-100 200 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1868_4046"
            maskUnits="userSpaceOnUse"
            x="723"
            y="53"
            width="131"
            height="131"
          >
            <path
              d="M853.181 94.4003L764.4 53L723 141.781L811.781 183.181L853.181 94.4003Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1868_4046)">
            <g opacity="0.24">
              <path
                d="M809.136 89.6684L809.574 105.726C809.617 107.952 811.173 110.795 813.016 112.059L823.902 119.523C830.862 124.299 830.084 130.602 822.128 133.467L808.676 138.363C806.397 139.192 804.15 141.791 803.63 144.162L800.96 156.743C798.841 166.697 792.447 167.95 786.685 159.543L778.677 147.838C777.231 145.723 773.939 144.188 771.353 144.422L757.239 145.812C747.132 146.819 743.962 141.061 750.208 133.075L758.131 122.944C759.611 121.023 760.158 117.63 759.329 115.352L754.433 101.899C751.55 93.9798 755.842 89.316 763.975 91.5773L776.69 95.1199C778.805 95.7013 781.984 95.0666 783.716 93.6681L796.299 83.6826C803.145 78.2732 808.917 80.9642 809.136 89.6684Z"
                strokeWidth="5.94688"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <g opacity="0.24">
            <path
              d="M1278.52 203.603L1291.45 190.659M1298.25 127.302L1298.55 143.494C1298.59 145.715 1297.19 148.662 1295.39 149.987L1284.79 158.019C1278 163.145 1279.11 169.425 1287.23 171.989L1301.03 176.304C1303.34 177.03 1305.77 179.55 1306.37 181.9L1309.65 194.46C1312.27 204.372 1318.76 205.354 1324.14 196.639L1331.66 184.464C1333.03 182.242 1336.27 180.576 1338.83 180.704L1353.11 181.431C1363.32 181.943 1366.22 176.048 1359.56 168.272L1351.1 158.446C1349.52 156.609 1348.79 153.191 1349.52 150.884L1353.84 137.086C1356.36 128.968 1351.83 124.482 1343.75 127.131L1331.14 131.275C1329.01 131.959 1325.8 131.488 1324.01 130.165L1310.85 120.681C1303.76 115.554 1298.08 118.544 1298.25 127.302Z"
              strokeWidth="3.96458"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g opacity="0.24">
            <path
              d="M1627.74 374.801L1630.53 362.665C1631.17 359.816 1630.04 355.837 1627.98 353.773L1615.8 341.589C1608.62 334.416 1610.93 327.144 1620.96 325.474L1636.62 322.871C1639.23 322.428 1642.38 320.119 1643.56 317.711L1652.2 300.418C1656.86 291.034 1664.53 291.034 1669.25 300.418L1677.89 317.711C1678.44 318.841 1679.47 319.923 1680.6 320.856M1700.54 325.474C1710.57 327.144 1712.93 334.416 1705.7 341.589L1693.52 353.773C1691.46 355.837 1690.33 359.816 1690.97 362.665L1694.45 377.749C1697.2 389.687 1690.86 394.306 1680.3 388.066L1665.61 379.37C1662.97 377.798 1658.59 377.798 1655.89 379.37L1641.2 388.066M1709.88 292.999L1611.62 391.259"
              strokeWidth="5.94688"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g opacity="0.24">
            <path
              d="M1433.43 596.449H1404.72M1419.08 663.437H1404.72M1409.51 629.943H1404.72M1468.79 597.454L1475.54 610.947C1476.45 612.813 1478.89 614.584 1480.94 614.966L1493.15 616.976C1500.94 618.268 1502.76 623.914 1497.16 629.561L1487.64 639.082C1486.06 640.661 1485.15 643.772 1485.68 646.02L1488.41 657.791C1490.56 667.073 1485.59 670.71 1477.4 665.829L1465.97 659.035C1463.91 657.791 1460.47 657.791 1458.41 659.035L1446.97 665.829C1438.79 670.662 1433.81 667.073 1435.97 657.791L1438.69 646.02C1439.22 643.819 1438.31 640.709 1436.73 639.082L1427.21 629.561C1421.61 623.963 1423.43 618.316 1431.23 616.976L1443.43 614.966C1445.49 614.632 1447.93 612.813 1448.84 610.947L1455.58 597.454C1459.17 590.133 1465.11 590.133 1468.79 597.454Z"
              strokeWidth="5.94688"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g opacity="0.24">
            <path
              d="M1249.82 420.216L1237.91 408.307M1231.66 350.019L1231.39 364.915C1231.35 366.96 1232.64 369.672 1234.3 370.89L1244.04 378.279C1250.29 382.996 1249.27 388.773 1241.8 391.131L1229.11 395.101C1226.98 395.769 1224.74 398.088 1224.19 400.25L1221.17 411.805C1218.77 420.923 1212.8 421.828 1207.84 413.81L1200.93 402.608C1199.67 400.564 1196.68 399.032 1194.32 399.149L1181.19 399.817C1171.8 400.289 1169.13 394.865 1175.26 387.712L1183.04 378.672C1184.5 376.982 1185.16 373.837 1184.5 371.715L1180.53 359.02C1178.21 351.552 1182.37 347.425 1189.8 349.862L1201.4 353.675C1203.36 354.303 1206.31 353.871 1207.96 352.652L1220.07 343.927C1226.59 339.21 1231.82 341.962 1231.66 350.019Z"
              strokeWidth="3.96458"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      <div
        className="
    mt-44
  "
      >
        <h6 className="text-[2rem] text-[#848484] text-left leading-[0.85] font-bold ml-[0.35rem] mb-2">
          HI, I'M
        </h6>
        <h5 className="text-[7.5rem] leading-[0.85] font-bold text-left">
          Ethan Dith
        </h5>
        <h4 className="text-[3.5rem] text-accent font-bold leading-[0.85] ml-1 mt-2.5">
          Product Designer
        </h4>
      </div>

      {/* Subheader */}
      <div className="mt-10 w-full lg:w-7/15">
        <h6 className="text-[1.5rem] italic text-left">
          Focused on building meaningful experiences that make a
          difference
        </h6>
      </div>

      {/* Socials */}
      <div className="mt-8 flex items-center gap-10">
        <a
          href="https://www.linkedin.com/in/ethandith"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black rounded-2xl p-2 hover:bg-gray-800 transition-colors shadow-lg shadow-black/20 home-icons"
        >
          <Image
            src="/images/linkedin.svg"
            alt="Linkedin"
            title="Linkedin"
            className="invert"
            width={50}
            height={50}
          />
        </a>
        <a
          href="mailto:ethandith@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black rounded-2xl p-2 hover:bg-gray-800 transition-colors shadow-lg shadow-black/20 home-icons"
        >
          <Image
            src="/images/mail.svg"
            alt="Email"
            title="Email"
            className="invert"
            width={50}
            height={50}
          />
        </a>
      </div>

      {/* <div className="mt-56 relative w-full h-10 flex justify-center items-center">
        <a
          href="#work"
          aria-label="Read more about my work below"
          className="block w-[30px] h-[30px] border-r-[7px] border-b-[7px] border-[#252525] rotate-45 text-center absolute right-0 left-0 m-0 mx-auto"
        />
      </div> */}
    </section>
  );
}
