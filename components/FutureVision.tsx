"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Mic, Sparkles, ChefHat, Camera, Zap } from "lucide-react";

export default function FutureVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const futureFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Recipe Analysis",
      description:
        "Our advanced AI analyzes your available ingredients and suggests creative, Michelin-star quality recipes tailored to what you have.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Mic,
      title: "Full Voice Control",
      description:
        "Cook hands-free with complete voice command support. Navigate recipes, set timers, and control the app without touching your screen.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Camera,
      title: "Smart Ingredient Recognition",
      description:
        "Take a photo of your fridge and let AI identify ingredients. Instantly get recipe suggestions based on what you actually have.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: ChefHat,
      title: "Michelin-Level Recipes",
      description:
        "Transform simple ingredients into restaurant-quality dishes. Our AI creates haute cuisine recipes even from basics like cucumber and salt.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Personalized Meal Plans",
      description:
        "AI learns your preferences, dietary restrictions, and cooking style to create custom meal plans that fit your lifestyle perfectly.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Real-time Cooking Assistant",
      description:
        "Get live guidance as you cook. AI monitors your progress and provides tips, adjustments, and answers to your questions in real-time.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      id="future"
      ref={ref}
      className="py-24 bg-gradient-to-b from-light to-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full px-6 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold">Coming Soon</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            The Future of
            <span className="text-gradient"> Smart Cooking</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re building the next generation of culinary AI that will revolutionize
            how you cook and create in the kitchen
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {futureFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-gradient transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                  {/* Coming Soon Badge */}
                  <div className="mt-6 inline-flex items-center text-sm text-primary font-semibold">
                    <Sparkles className="w-4 h-4 mr-2" />
                    In Development
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 text-center border border-primary/20">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-6xl mb-6"
            >
              🌟
            </motion.div>
            <h3 className="text-3xl font-bold text-dark mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Imagine having a Michelin-star chef in your pocket. ChefAI will analyze what
              you have in your fridge—even if it&apos;s just a cucumber and salt—and guide
              you through creating a restaurant-quality dish with detailed, professional
              techniques. Combined with voice control, you&apos;ll cook hands-free while
              receiving real-time AI guidance, making every meal an extraordinary culinary
              experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
