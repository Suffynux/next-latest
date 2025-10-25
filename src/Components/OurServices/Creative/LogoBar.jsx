import Slider from "react-infinite-logo-slider";

const LogoBar = () => {
  return (
    <div
      style={{
        backgroundColor: "#0f1a2e",
        padding: "24px 16px",
        overflow: "hidden",
        textAlign: "center",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Header Text */}
      <p
        style={{
        //   fontSize: "13px",
        //   fontWeight: "500",
          marginBottom: "16px",
          color: "#ffffff",
          letterSpacing: "0.4px",
          opacity: 0.9,
        }}
    className="md:text-xl text-sm"
      >
        Trusted by 1000+ brands
      </p>

      {/* Infinite Logo Slider */}
      <Slider
        width="160px"
        duration={50}
        pauseOnHover={true}
        blurBorders={true}
        blurBorderColor="#0f1a2e"
        style={{
          margin: "0 auto",
          maxWidth: "100%",
        }}
      >
        {/* Shopify */}
        <Slider.Slide>
          <img
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6cl5dkoqtKOcROZ82P6uvsOwsvuHzldWxw&s"

            alt="Shopify"
            loading="lazy"
            style={{
              width: "70px",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0.85) invert(0.85)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1) invert(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(0.85) invert(0.85)";
            }}
          />
        </Slider.Slide>

        {/* Nike */}
        <Slider.Slide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6cl5dkoqtKOcROZ82P6uvsOwsvuHzldWxw&s"
            alt="Nike"
            loading="lazy"
            style={{
              width: "70px",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0.85) invert(0.85)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1) invert(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(0.85) invert(0.85)";
            }}
          />
        </Slider.Slide>

        {/* Apple */}
        <Slider.Slide>
          <img
            src="https://logo.clearbit.com/apple.com"
            alt="Apple"
            loading="lazy"
            style={{
              width: "70px",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0.85) invert(0.85)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1) invert(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(0.85) invert(0.85)";
            }}
          />
        </Slider.Slide>

        {/* Airbnb */}
        <Slider.Slide>
          <img
            src="https://logo.clearbit.com/airbnb.com"
            alt="Airbnb"
            loading="lazy"
            style={{
              width: "70px",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0.85) invert(0.85)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1) invert(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(0.85) invert(0.85)";
            }}
          />
        </Slider.Slide>

        {/* Stripe */}
        <Slider.Slide>
          <img
            src="https://logo.clearbit.com/stripe.com"
            alt="Stripe"
            loading="lazy"
            style={{
              width: "70px",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0.85) invert(0.85)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1) invert(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(0.85) invert(0.85)";
            }}
          />
        </Slider.Slide>

        {/* Tesla */}
        <Slider.Slide>
          <img
            src="https://logo.clearbit.com/tesla.com"
            alt="Tesla"
            loading="lazy"
            style={{
              width: "70px",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0.85) invert(0.85)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1) invert(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(0.85) invert(0.85)";
            }}
          />
        </Slider.Slide>

        {/* Netflix */}
        <Slider.Slide>
          <img
            src="https://logo.clearbit.com/netflix.com"
            alt="Netflix"
            loading="lazy"
            style={{
              width: "70px",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0.85) invert(0.85)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1) invert(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(0.85) invert(0.85)";
            }}
          />
        </Slider.Slide>

        {/* Spotify */}
        <Slider.Slide>
          <img
            src="https://logo.clearbit.com/spotify.com"
            alt="Spotify"
            loading="lazy"
            style={{
              width: "70px",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0.85) invert(0.85)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1) invert(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(0.85) invert(0.85)";
            }}
          />
        </Slider.Slide>

        {/* Figma */}
        <Slider.Slide>
          <img
            src="https://logo.clearbit.com/figma.com"
            alt="Figma"
            loading="lazy"
            style={{
              width: "70px",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0.85) invert(0.85)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1) invert(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(0.85) invert(0.85)";
            }}
          />
        </Slider.Slide>

        {/* Slack */}
        <Slider.Slide>
          <img
            src="https://logo.clearbit.com/slack.com"
            alt="Slack"
            loading="lazy"
            style={{
              width: "70px",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0.85) invert(0.85)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1) invert(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(0.85) invert(0.85)";
            }}
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default LogoBar;
