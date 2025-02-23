"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@components/ui/button";

export default function HomePage() {
  useEffect(() => {
    document.title = "ShaefferFacts - Home";
  }, []);

  return (
    <div className="min-h-screen bg-red-600 text-white p-6 text-center">
      <motion.h1
        className="text-6xl font-bold drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to ShaefferFacts!
      </motion.h1>

      <motion.p
        className="mt-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        The coolest website for awesome facts about the things you love!
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {["Computer Science", "Geology", "Guns", "Helicopters", "Planes", "About Me"].map((topic, index) => (
          <motion.div
            key={topic}
            className="bg-white text-red-600 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">{topic}</h2>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Button className="bg-white text-red-600 text-xl font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-200">
          Explore Mor!
        </Button>
      </motion.div>
    </div>
  );
}
