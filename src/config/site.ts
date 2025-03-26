export const siteConfig = {
  name: "Haikoo",
  description: "Gen-AI art frame for pet parents",
  
  // Meta information
  company: {
    name: "Haikoo",
    support: {
      email: "support@haikoo.com"
    }
  },

  // Navigation
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "How It Works",
      href: "/#how-it-works",
    },
    {
      title: "Gallery",
      href: "/#gallery",
    },
  ],

  // Hero Section
  hero: {
    title: "Haikoo, gen-AI art frame for pet parents.",
    description: "This isn't just an app. Haikoo is a wall-mounted digital photo frame that uses Gen-AI to create a new portrait of your pet daily and streams it straight to your home.",
    ctaButton: {
      text: "Join the Waitlist",
      href: "/#join"
    }
  },

  // How It Works Steps
  howItWorks: {
    title: "How It Works",
    description: "Transform your pet photos into daily works of art in four simple steps",
    steps: [
      {
        title: "Reserve Your Haikoo Frame",
        description: "Join the waitlist to be first in line for our upcoming launch. Limited early units available.",
      },
      {
        title: "Upload Your Pet's Photo to the Haikoo App",
        description: "Upload your favorite photos — that's all the AI needs to get started.",
      },
      {
        title: "Our AI Creates a New Portrait Every Day",
        description: "Our Gen-AI transforms your pet into a unique work of art daily — no repeats, always fresh.",
      },
      {
        title: "Streams straight to your Haikoo frame",
        description: "Your Haikoo frame auto-syncs and surprises with you a new artwork every day.",
      }
    ]
  },

  // Gallery Section
  gallery: {
    title: "Gallery",
    description: "See how our AI transforms pet photos into beautiful artwork",
    filters: [
      "All",
      "Watercolor",
      "Pop Art",
      "Oil Painting",
      "Modern",
      "Classic"
    ]
  },

  // Waitlist Form
  waitlistForm: {
    title: "Join the Waitlist",
    description: "Be among the first to experience Haikoo",
    successMessage: "Thanks for joining! We'll be in touch soon.",
    fields: {
      email: {
        label: "Email Address",
        placeholder: "Enter your email"
      },
      petName: {
        label: "Pet's Name (Optional)",
        placeholder: "What's your pet's name?"
      },
      petType: {
        label: "Type of Pet (Optional)",
        placeholder: "Dog, Cat, Bird, etc."
      },
      betaTester: {
        label: "I'd love to be a beta tester",
      }
    }
  },

  // Social Links
  social: {
    twitter: "https://twitter.com/petframeai",
    instagram: "https://instagram.com/petframeai",
    facebook: "https://facebook.com/petframeai"
  },

  // Feature Flags
  features: {
    enableDarkMode: false,
    enableInstagramFeed: false,
    enableTestimonials: true
  }
} as const

export type SiteConfig = typeof siteConfig
