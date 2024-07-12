import React from "react";
import { Tilt } from "react-tilt"; 
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <h1>👋 Welcome to my Portfolio!</h1>
      <p>I'm Kalyan Chaitanya Bondada, a driven and passionate software engineer on a constant quest to improve and deliver impactful results.</p>  


<p>🎓 Pursued Masters Degree in Computer and Information Science at UNIVERSITY OF NORTH TEXAS. </p>
💻 Experienced Java developer with over 5 years of hands-on experience in software development. 
🛠️I am specialized in crafting robust applications using Java technologies like Spring Boot, Rest APIs, Spring MVC, JPA, and Servlets Frameworks. 
🖥️ My expertise also extends to developing Microservices, where I've demonstrated proficiency in designing and implementing scalable solutions.
      </motion.p>
     
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(About, "about");