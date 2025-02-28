'use client'
import React from "react";
import Image from "next/image";
import { headphone_banner,headphone_photo } from "@/public";
import { motion } from "framer-motion";

const Animation = () => {
  const variants = {
    hidden: { x: 0, y: 70, opacity: 0.25 },
    visible: { x: 0, y: -10, opacity: 1, transition: { delay: 0.05 } },
  };

  return (
    <div className="w-full md:h-[350px] flex relative">
      <div className="h-full md:max-w-[1024px] max-w-[600px] m-auto flex justify-center items-center relative px-3 md:px-0">
        <div className="object-cover">
          <Image
            src={headphone_banner}
            alt="Banner"
            width={500}
            height={100} 
          />
        </div>
        <div className="absolute md:mt-[100px] mt-[215px]">
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <Image
              src={headphone_photo}
              alt="Headphone"
              width={250}
              height={100}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
