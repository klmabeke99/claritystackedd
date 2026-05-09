export const apps = {
  multistream: {
    name: "MultiStream Command",
    slug: "multistream",
    tagline: "Take command of multiple income streams.",
    description:
      "Track income, expenses, invoices, overdue payments, reviews, and reports across multiple streams.",
    icon: "▦",
    accent: "violet",
    preview: "/previews/multistream.png",
    appLink: "https://freelance-command-center-opal.vercel.app/",
  features: [
  "Income tracking",
  "Expense tracking",
  "Invoice management",
  "Overdue payment radar",
  "Client reviews",
  "Quarterly reports",
],
workflow: [
  "Track income streams",
  "Monitor invoices and expenses",
  "Review reports and overdue payments",
],
benefits: [
  "See all income clearly",
  "Reduce financial chaos",
  "Make better business decisions",
],
  },

  prepperPantry: {
    name: "Prepper Pantry",
    slug: "prepper-pantry",
    tagline: "Know what you have before you need it.",
    description:
      "Manage pantry inventory, expiry dates, meal planning, restock lists, preservation, audit mode, and food readiness.",
    icon: "🛒",
    accent: "green",
    preview: "/previews/prepper-pantry.png",
    appLink: "https://prepper-pantry-command.vercel.app/",
    features: [
      "Inventory management",
      "Expiry tracking",
      "Meal planning",
      "Restock lists",
      "Preservation planning",
      "Pantry readiness reports",
    ],

    workflow: [
  "Add pantry inventory",
  "Track expiry dates and storage",
  "Plan meals and restocks",
],
benefits: [
  "Reduce food waste",
  "Know what is available instantly",
  "Stay prepared and organised",
],

  },

  calmframe: {
    name: "CalmFrame",
    slug: "calmframe",
    tagline: "Turn mental noise into calmer next steps.",
    description:
      "Reduce mental noise, reflect clearly, reset focus, track patterns, and create calmer daily routines.",
    icon: "⚡",
    accent: "orange",
    preview: "/previews/calmframe.png",
    appLink: "https://calmframe.vercel.app/",
    features: [
      "Reflection tools",
      "Anxiety check-ins",
      "Thought reframing",
      "Calm reset routines",
      "Pattern tracking",
      "Daily clarity dashboard",
    ],

    workflow: [
  "Reflect on thoughts and emotions",
  "Track patterns and triggers",
  "Build calmer daily routines",
],
benefits: [
  "Reduce mental overwhelm",
  "Create calmer routines",
  "Improve emotional clarity",
],

    
  },

  decisionHelper: {
    name: "Decision Helper",
    slug: "decision-helper",
    tagline: "Stop spinning. Start choosing clearly.",
    description:
      "Turn overthinking into structured choices using clear decision frameworks, saved decisions, AI guidance, and practical next steps.",
    icon: "◇",
    accent: "blue",
    preview: "/previews/decision-helper.png",
    appLink: "https://decision-helper-app-brown.vercel.app/",
    features: [
      "Decision frameworks",
      "Overthinking support",
      "Saved decisions",
      "Pros and cons clarity",
      "AI-powered guidance",
      "Next-step planning",
    ],

    workflow: [
  "Break down difficult decisions",
  "Compare structured options",
  "Choose clear next steps",
],
benefits: [
  "Reduce overthinking",
  "Make clearer decisions",
  "Feel more confident choosing",
],
  },

  lifeAdmin: {
    name: "Life Admin OS",
    slug: "life-admin",
    tagline: "Keep everyday admin from becoming everyday stress.",
    description:
      "Organise bills, subscriptions, tasks, reminders, reports, and everyday admin routines in one calm operating system.",
    icon: "□",
    accent: "pink",
    preview: "/previews/life-admin.png",
    appLink: "https://life-admin-os-zeta.vercel.app/",
    features: [
      "Bills tracking",
      "Subscription management",
      "Task organisation",
      "Reminder planning",
      "Reports dashboard",
      "Admin clarity system",
    ],

    workflow: [
  "Track bills and subscriptions",
  "Manage tasks and reminders",
  "Review admin reports",
],
benefits: [
  "Reduce admin stress",
  "Stay organised daily",
  "Keep life systems manageable",
],
  },

  adhdWork: {
    name: "ADHD Work",
    slug: "adhd-work",
    tagline: "A calmer command system for focus, energy, and workdays.",
    description:
      "Plan workdays, unpack tasks, prepare meetings, choose work modes, track energy, and recover focus with supportive work systems.",
    icon: "◎",
    accent: "cyan",
    preview: "/previews/adhd-work.png",
    appLink: "https://adhd-work-app.vercel.app/",
    features: [
      "Workday planning",
      "Task unpacking",
      "Meeting preparation",
      "Work modes",
      "Energy tracking",
      "Recovery support",
    ],

    workflow: [
  "Plan focused workdays",
  "Unpack overwhelming tasks",
  "Recover focus and energy",
],
benefits: [
  "Reduce work overwhelm",
  "Improve focus support",
  "Create calmer productivity systems",
],
  },
} as const;

export type AppKey = keyof typeof apps;