import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
//import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github2, linkedIn } from "../assets";
import Swal from "sweetalert2";
//service_gi6e5sg
//template_gc7kg7p
//zMDCDEleYOIT2JeqY
 const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    console.log("email",form.email)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_gi6e5sg","template_gc7kg7p",{
        from_name: form.name,
        to_name: "Kalyan Chaitanya",
        from_email: form.email,
        to_email:"bkalyanchaitanya@gmail.com",
        message: form.message
      },"zMDCDEleYOIT2JeqY").then(()=>{
        setLoading(false);
        Swal.fire(
          'Thank You!',
          'I will get back to you soon via Email!',
          'success'
        )
        setForm({
          name: "",
          email: "",
          message: "",
        })
      },(error)=>{
        console.log(form);
        setLoading(false);
        console.log(error);
        Swal.fire('Try Again in sometime please!')
      })
  };
  return (
      <>
     <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Any ideas lets Colab..!!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
         <motion.div style={{display:"flex",justifyContent:"left",alignItems:"left",marginTop:"30px"}}>
         <a href="https://www.linkedin.com/in/kalyankc1997"><img src={linkedIn} alt=""  height={'50px'} width={'70px'} /></a>
        <a href="https://github.com/kcbondada"><img src={github2} alt=""  height={'50px'} width={'60px'} style={{marginLeft:"4px"}}/></a>
      </motion.div> 
      </motion.div>
      <div className="flex-[0.25] bg-gray-100 p-4 rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.5175540685727!2d-97.16640742430101!3d33.22674206086744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca094c9ab621%3A0xa35e47471b5dea23!2s3330%20Eastpark%20Blvd%2C%20Denton%2C%20TX%2076201!5e0!3m2!1sen!2sus!4v1722278705637!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
   
      
 
       
      </>
  )
}

export default SectionWrapper(Contact, "contact");