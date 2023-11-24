"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center gap-2 md:gap-3 pt-16 text-center"
    >
      <motion.h3
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        // transition={{ delay: 0.5 }}
        className="font-semibold text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl"
      >
        WELCOME TO,
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        // transition={{ delay: 0.5 }}
        className="text-4xl font-semibold text-gray-700 dark:text-gray-200 md:text-6xl"
      >
        <span className="text-blue-500">Astronesia</span> Elementary School
      </motion.h1>
      <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300 md:text-3xl">
        <TypeAnimation
          sequence={[
            "Better Future For Your Kids.",
            1000,
            "Explore Innovative Curriculum.",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </h3>
      <h5 className="mt-2 w-fit rounded-md bg-gray-200 px-4 py-1 text-sm font-medium dark:bg-gray-600 dark:text-white md:text-base">
        Let the child be the director, and the actor in his own play
      </h5>
      <p className="md:w-1/2 md:mt-0 mt-2 font-medium text-gray-500 dark:text-gray-400 md:text-base">
        We just don't give our students only lecture but real life experimental
        filed experience throughout the journey!
      </p>
      <div className="flex flex-col justify-center items-center gap-4 mt-4">
        <button className="rounded-full bg-blue-500 px-4 py-2 text-sm text-white transition active:scale-75 hover:bg-blue-600">
          <Link href={"#about"}>Get Started</Link>
        </button>
        <button className="animate-bounce">
          <Link href={"#about"}>
            <FaArrowDown className="text-gray-700 transition hover:text-blue-500 active:scale-75 dark:text-gray-400 hover:dark:text-blue-500" />
          </Link>
        </button>
      </div>
    </section>
  );
}
