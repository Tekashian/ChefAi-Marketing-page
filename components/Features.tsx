"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Heart,
  Search,
  Timer,
  Utensils,
  Star,
  Smartphone,
  ChefHat,
} from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const features = [
    {
      icon: BookOpen,
      title: "Recipe Management",
      description:
        "Organize your favorite recipes in one place. Add, edit, and browse through your culinary collection effortlessly.",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Search,
      title: "Smart Search & Filter",
      description:
        "Find recipes instantly with powerful filters by tags, cooking time, difficulty level, and ratings.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Favorites Collection",
      description:
        "Save your beloved recipes with one tap. Access them anytime, even offline with local storage.",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: Utensils,
      title: "Cooking Mode",
      description:
        "Step-by-step guided cooking with large buttons, voice commands, and hands-free navigation for a seamless experience.",
      color: "from-purple-400 to-indigo-500",
    },
    {
      icon: Timer,
      title: "Time Management",
      description:
        "See preparation and cooking times at a glance. Plan your meals efficiently with detailed time breakdowns.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Star,
      title: "Rating System",
      description:
        "Rate recipes and see community ratings. Discover the most loved dishes in your collection.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description:
        "Fully responsive design optimized for mobile devices. Install as PWA for app-like experience.",
      color: "from-teal-400 to-cyan-500",
    },
    {
      icon: ChefHat,
      title: "Easy Recipe Creation",
      description:
        "Create and share your own recipes with a simple, intuitive form. Add ingredients, steps, and photos with ease.",
      color: "from-red-400 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Powerful Features for
            <span className="text-gradient"> Home Chefs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to organize, discover, and master your cooking journey
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "1000+", label: "Recipes" },
            { number: "50K+", label: "Active Users" },
            { number: "4.9", label: "App Rating" },
            { number: "24/7", label: "AI Support" },
          ].map((stat, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
