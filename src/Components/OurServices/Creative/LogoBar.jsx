import Slider from "react-infinite-logo-slider";

import Image1 from "../../../assets/companiesLogo/1.svg";
import Image2 from "../../../assets/companiesLogo/2.svg";
import Image3 from "../../../assets/companiesLogo/3.svg";
import Image4 from "../../../assets/companiesLogo/4.svg";
import Image5 from "../../../assets/companiesLogo/5.svg";
import Image6 from "../../../assets/companiesLogo/6.svg";
import Image7 from "../../../assets/companiesLogo/7.svg";
import Image8 from "../../../assets/companiesLogo/8.svg";
import Image9 from "../../../assets/companiesLogo/9.svg";
import Image10 from "../../../assets/companiesLogo/10.svg";
import Image11 from "../../../assets/companiesLogo/11.svg";
import Image12 from "../../../assets/companiesLogo/12.svg";

const LogoBar = () => {
  const logos = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
  ];

  return (
    <div
      style={{
        position: "relative",
        zIndex: 10,
        background: "#fff",
        color: "#000",
        padding: "20px",
        overflow: "hidden",
        textAlign: "center",

        borderTop: "1px solid rgba(15, 35, 54, 0.18)",
        borderBottom: "1px solid rgba(15, 35, 54, 0.12)",
        boxShadow: "0 18px 35px -22px rgba(12, 29, 55, 0.45)",
      }}
    >
      {/* Header Text */}
      <p
        className="md:text-lg text-sm mb-4"
        style={{
          color: "#122b51",
          fontWeight: 500,
          letterSpacing: "0.4px",
        }}
      >
        Trusted by 100+ brands
      </p>

      {/* Infinite Logo Slider */}
      <Slider
        width="140px"
        duration={50}
        pauseOnHover={true}
        blurBorders={false}
        style={{
          margin: "0 auto",
          maxWidth: "100%",
        }}
      >
        {logos.map((logo, index) => (
          <Slider.Slide key={index}>
            <img
              src={logo}
              alt={`Company ${index + 1}`}
              loading="lazy"
              style={{
                width: "150px",
                height: "auto",
                maxHeight: "50px",
                objectFit: "contain",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default LogoBar;
