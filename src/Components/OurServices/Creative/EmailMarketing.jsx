import React, { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import { Button, Container, Grid } from "@mui/material";
import styles from "./EmailMarketing.module.css";
import LogoBar from "./LogoBar";
import EmailMarketingServices from "./EmailMarketingServices";
import ResultsCarousel from "./ResultsCarousel";
import EmailMarketingComparison from "./EmailMarketingComparison";
import EmailMarketingTestimonials from "./EmailMarketingTestimonials";
import EmailMarketingFAQ from "./EmailMarketingFAQ";

import Image1 from "../../../assets/HeroImages/1.jpg";
import Image2 from "../../../assets/HeroImages/2.jpg";
import Image3 from "../../../assets/HeroImages/3.jpg";
import Image4 from "../../../assets/HeroImages/4.jpg";
import Image5 from "../../../assets/HeroImages/5.jpg";
import Image6 from "../../../assets/HeroImages/6.jpg";
import Image7 from "../../../assets/HeroImages/7.jpg";
import Image8 from "../../../assets/HeroImages/8.jpg";

const heroSlides = [
  { src: Image1, alt: "Email marketing style board 1" },
  { src: Image2, alt: "Email marketing style board 2" },
  { src: Image3, alt: "Email marketing style board 3" },
  { src: Image4, alt: "Email marketing style board 4" },
  { src: Image5, alt: "Email marketing style board 5" },
  { src: Image6, alt: "Email marketing style board 6" },
  { src: Image7, alt: "Email marketing style board 7" },
  { src: Image8, alt: "Email marketing style board 8" },
];
const BlurImage = ({ src, alt, className, loading = "lazy" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${styles.blurLoad} ${isLoaded ? styles.imageLoaded : ""}`}
      onLoad={() => setIsLoaded(true)}
      loading={loading}
    />
  );
};

const EmailMarketing = () => {
    const handleWhatsAppClick = () => {
    const phoneNumber = "+923097972767";
    const message = "Hi! I'm interested in learning more about your email marketing services.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const columnClassNames = [styles.colA, styles.colB, styles.colC];
  const columnSources = [
    heroSlides.slice(0, 4),
    heroSlides.slice(4, 8),
    heroSlides.slice(2, 6),
  ];
  const duplicatedColumns = columnSources.map((column) => [...column, ...column]);

  return (
    <MainLayout>
      <div className={styles.emailSection}>
        <Container>
          {/* Main grid - left column contains the heading/content. Right column contains decorative carousel */}
          <Grid
            container
            spacing={4}
            className="relative w-full md:h-screen mt-[20px] md:mt-0"
          >
            <Grid item xs={12} md={7} className={styles.emailContent}>
              <div>
                <div className={styles.theSmall}>The</div>
                <h1 className={styles.heading}>Email Marketing Experts</h1>
                <p className={styles.paragraph}>
         Our team of experts provides comprehensive email marketing and SMS services tailored to your eCommerce brand.


                </p>
                <p className={styles.paragraph}>
      
We use our proven strategies with a track record of success to deliver result-driven email marketing to level-up your business quickly and effectively.
    
                </p>
                <h2 className="pt-2">
                  <strong>Ready to get started?</strong>
                </h2>
                <Button className={styles.ctaButton} variant="contained"
                onClick={handleWhatsAppClick}>
                  Get Your Free Consultation
                </Button>
              </div>
            </Grid>

            {/* Right column: animated decorative carousel (desktop only) */}
            <Grid item xs={12} md={5} className={styles.ImageSection}>
              <div className={styles.carousel} aria-hidden="true">
                {duplicatedColumns.map((column, columnIndex) => {
                  const columnClassName = columnClassNames[columnIndex % columnClassNames.length];
                  return (
                    <div
                      key={columnClassName}
                      className={`${styles.carouselColumn} ${columnClassName}`}
                    >
                      <div className={styles.carouselColumnInner}>
                        {column.map((slide, slideIndex) => (
                          <div className={styles.carouselCard} key={`${columnIndex}-${slideIndex}`}>
                            <BlurImage
                              src={slide.src}
                              className={styles.carouselImg}
                              alt={slide.alt}
                              loading={columnIndex === 0 && slideIndex < 2 ? "eager" : "lazy"}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* <Test/> */}
      <LogoBar />
      <ResultsCarousel />
      <EmailMarketingServices />
      <EmailMarketingComparison />
      <EmailMarketingTestimonials />
        <EmailMarketingFAQ />
    </MainLayout>
  );
};

export default EmailMarketing;
