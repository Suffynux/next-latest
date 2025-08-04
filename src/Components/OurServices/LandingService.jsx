import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const keyServices = [
  {
    image: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
    title: "Global Field Services",
    description:
      "Rapid engineer dispatch, on-site troubleshooting, and hardware support delivered at your location",
  },
  {
    image: "https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg",
    title: "IT Managed Services",
    description:
      "End-to-end support, including remote helpdesk, IT asset management, and proactive monitoring",
  },
  {
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    title: "Technical Recruitment",
    description:
      "Skilled IT professionals, sourced and screened by expert recruiters, ready for permanent or contract roles",
  },
  {
    image: "https://images.pexels.com/photos/6147020/pexels-photo-6147020.jpeg",
    title: "Creative & Digital Support",
    description:
      "UI/UX, branding, websites, and content tailored to tech firms and MSPs",
  },
];

const LandingService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [keyCardVisibility, setKeyCardVisibility] = useState(
    keyServices.map(() => false)
  );
  const sectionRef = useRef(null);
  const keyCardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const keyCardObservers = keyCardRefs.current.map((cardRef, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setKeyCardVisibility((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
          }
        },
        { threshold: 0.1 }
      );

      if (cardRef) {
        observer.observe(cardRef);
      }

      return observer;
    });

    return () => {
      keyCardObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-[#003A75] mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          Key Services 
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyServices.map((service, index) => (
            <motion.div
              key={index}
              ref={(el) => (keyCardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 50 }}
              animate={
                keyCardVisibility[index]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <Card className="w-full h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader color="blue-gray" className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 text-[#003A75]"
                  >
                    {service.title}
                  </Typography>
                  <Typography className="text-sm text-gray-700">
                    {service.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button variant="text" className="text-blue-600 hover:underline">
                    <Link to={"/services"}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingService;
