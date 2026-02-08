/**
 * ChefAI Marketing Page - Constants
 */

// Site Configuration
export const SITE_CONFIG = {
  name: "ChefAI",
  title: "ChefAI - Your Intelligent Culinary Assistant",
  description:
    "Transform your cooking experience with AI-powered recipe management, voice control, and personalized meal suggestions.",
  url: "https://chefai.app",
  ogImage: "https://chefai.app/og-image.jpg",
  links: {
    twitter: "https://twitter.com/chefai",
    github: "https://github.com/chefai",
    email: "mailto:hello@chefai.app",
  },
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Future", href: "#future" },
];

// Social Links
export const SOCIAL_LINKS = [
  { name: "GitHub", url: "#", icon: "github" },
  { name: "Twitter", url: "#", icon: "twitter" },
  { name: "Email", url: "mailto:hello@chefai.app", icon: "mail" },
];

// Stats
export const STATS = [
  { number: "1000+", label: "Recipes" },
  { number: "50K+", label: "Active Users" },
  { number: "4.9", label: "App Rating" },
  { number: "24/7", label: "AI Support" },
];

// Animation Durations (in seconds)
export const ANIMATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  verySlow: 2.0,
};

// Breakpoints (should match Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Colors (should match Tailwind config)
export const COLORS = {
  primary: "#FF6B35",
  secondary: "#4ECDC4",
  dark: "#1A1A1D",
  light: "#F7F7F7",
};
