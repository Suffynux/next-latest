import React from "react";
import MainLayout from "../../Layout/MainLayout";
import img1 from "../../../assets/Images/Emailmarketing/image1.jpg";
import img3 from "../../../assets/Images/Emailmarketing/image4.png";
import img4 from "../../../assets/Images/Emailmarketing/image5.png";
import img2 from "../../../assets/Images/Emailmarketing/image3.png";
import { Button, Container, Grid } from "@mui/material";
import styles from "./EmailMarketing.module.css";
import LogoBar from "./LogoBar";
import EmailMarketingServices from "./EmailMarketingServices";
import ResultsCarousel from "./ResultsCarousel";
import EmailMarketingComparison from "./EmailMarketingComparison";
import EmailMarketingTestimonials from "./EmailMarketingTestimonials";

const EmailMarketing = () => {
    const handleWhatsAppClick = () => {
    const phoneNumber = "+923097972767";
    const message = "Hi! I'm interested in learning more about your email marketing services.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
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
            <Grid item xs={12} md={8} className={styles.emailContent}>
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
            <Grid item xs={12} md={4} className={styles.ImageSection}>
              <div className={styles.carousel} aria-hidden="true">
                <div className={`${styles.carouselColumn} ${styles.colA}`}>
                  <div className={styles.carouselColumnInner}>
                    <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img3} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img3} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                  </div>
                </div>

                <div className={`${styles.carouselColumn} ${styles.colB}`}>
                  <div className={styles.carouselColumnInner}>
                    <div className={styles.carouselCard}>
                      <img src={img2} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img4} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className={styles.carouselCard}>
                      <img src={img2} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img4} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                  </div>
                </div>

                <div className={`${styles.carouselColumn} ${styles.colC}`}>
                  <div className={styles.carouselColumnInner}>
                    <div className={styles.carouselCard}>
                      <img src={img3} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                     <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                     <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className={styles.carouselCard}>
                      <img src={img3} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                    <div className={styles.carouselCard}>
                      <img src={img1} className={styles.carouselImg} alt="" />
                    </div>
                  </div>
                </div>
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
    </MainLayout>
  );
};

export default EmailMarketing;
