"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, BookMarked, ChefHat, Check } from "lucide-react";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const steps = [
    {
      icon: Search,
      title: "Discover Recipes",
      description:
        "Browse through hundreds of recipes or search for specific dishes. Filter by cuisine, difficulty, or cooking time.",
      image: "🔍",
    },
    {
      icon: BookMarked,
      title: "Save & Organize",
      description:
        "Add your favorite recipes to collections. Create custom categories and keep everything organized.",
      image: "📚",
    },
    {
      icon: ChefHat,
      title: "Start Cooking",
      description:
        "Enter cooking mode for step-by-step guidance. Use voice commands to navigate hands-free while you cook.",
      image: "👨‍🍳",
    },
    {
      icon: Check,
      title: "Enjoy & Share",
      description:
        "Rate your cooking experience and share your creations. Help others discover amazing recipes.",
      image: "⭐",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-light relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and transform your cooking experience
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16 mb-20 last:mb-0`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 ${
                      isEven ? "" : "md:float-right"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className={isEven ? "" : "md:text-right"}>
                    <div className="text-6xl font-bold text-primary/20 mb-2">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Visual */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 flex items-center justify-center"
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center shadow-xl border border-primary/20">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-8xl"
                    >
                      {step.image}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Connector Line (not for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: 120 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      className="w-1 bg-gradient-to-b from-primary to-secondary"
                      style={{
                        marginTop: index % 2 === 0 ? "300px" : "0px",
                      }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
