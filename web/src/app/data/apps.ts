export const apps = {
  multistream: {
    name: "MultiStream Command",
    slug: "multistream",
    tagline: "AI-assisted clarity for every income stream.",
    description:
      "MultiStream Command helps freelancers, creators, and independent earners track income, expenses, invoices, overdue payments, reviews, and reports with an AI-assisted command system built for financial clarity.",
    icon: "▦",
    accent: "violet",
    preview: "/previews/multistream.png",
    appLink: "https://freelance-command-center-opal.vercel.app/",
    features: [
      "AI income insights",
      "Income stream tracking",
      "Expense monitoring",
      "Invoice management",
      "Overdue payment radar",
      "Quarterly business reports",
    ],
    workflow: [
      "Add income streams, invoices, and expenses",
      "Let the AI agent identify overdue risks and financial patterns",
      "Review reports and take clearer business action",
    ],
    benefits: [
      "Understand what you are really earning",
      "Stop losing track of late payments",
      "Make better decisions across multiple income sources",
    ],
  },

  prepperPantry: {
    name: "Prepper Pantry",
    slug: "prepper-pantry",
    tagline: "AI-assisted food readiness for your home.",
    description:
      "Prepper Pantry helps you manage inventory, expiry dates, meal planning, restock lists, preservation, audits, and food readiness with AI-assisted pantry intelligence.",
    icon: "🛒",
    accent: "green",
    preview: "/previews/prepper-pantry.png",
    appLink: "https://prepper-pantry-command.vercel.app/",
    features: [
      "AI pantry insights",
      "Inventory management",
      "Expiry tracking",
      "Meal planning support",
      "Restock suggestions",
      "Pantry readiness reports",
    ],
    workflow: [
      "Add food items, quantities, storage areas, and expiry dates",
      "Let the AI agent detect risks, gaps, and meal opportunities",
      "Use readiness reports to reduce waste and stay prepared",
    ],
    benefits: [
      "Know what food you already have",
      "Reduce waste from forgotten expiry dates",
      "Plan meals and restocks with more confidence",
    ],
  },

  calmframe: {
    name: "CalmFrame",
    slug: "calmframe",
    tagline: "AI-assisted calm for noisy thoughts.",
    description:
      "CalmFrame helps turn mental noise into calmer next steps with reflection tools, check-ins, thought reframing, pattern tracking, and AI-assisted emotional clarity.",
    icon: "⚡",
    accent: "orange",
    preview: "/previews/calmframe.png",
    appLink: "https://calmframe.vercel.app/",
    features: [
      "AI calm insights",
      "Reflection tools",
      "Anxiety check-ins",
      "Thought reframing",
      "Pattern tracking",
      "Daily clarity dashboard",
    ],
    workflow: [
      "Check in with your current thoughts and emotional state",
      "Let the AI agent surface patterns and gentle next steps",
      "Build calmer routines through repeated reflection",
    ],
    benefits: [
      "Reduce emotional overwhelm",
      "Understand patterns behind stress",
      "Create calmer daily routines without complicated tools",
    ],
  },

  decisionHelper: {
    name: "Decision Helper",
    slug: "decision-helper",
    tagline: "AI-assisted support for clearer choices.",
    description:
      "Decision Helper turns overthinking into structured choices with practical frameworks, saved decisions, trade-off clarity, AI-assisted guidance, and next-step planning.",
    icon: "◇",
    accent: "blue",
    preview: "/previews/decision-helper.png",
    appLink: "https://decision-helper-app-brown.vercel.app/",
    features: [
      "AI decision guidance",
      "Decision frameworks",
      "Overthinking support",
      "Saved decisions",
      "Trade-off clarity",
      "Next-step planning",
    ],
    workflow: [
      "Describe the decision you are stuck on",
      "Let the AI agent organise options, risks, and trade-offs",
      "Choose a practical next step instead of staying frozen",
    ],
    benefits: [
      "Reduce decision paralysis",
      "Compare options more clearly",
      "Move forward with more confidence",
    ],
  },

  lifeAdmin: {
    name: "Life Admin OS",
    slug: "life-admin",
    tagline: "AI-assisted control for everyday admin.",
    description:
      "Life Admin OS helps organise bills, subscriptions, tasks, reminders, reports, and everyday routines with AI-assisted admin guidance built to reduce life clutter.",
    icon: "□",
    accent: "pink",
    preview: "/previews/life-admin.png",
    appLink: "https://life-admin-os-zeta.vercel.app/",
    features: [
      "AI admin insights",
      "Bills tracking",
      "Subscription management",
      "Task organisation",
      "Reminder planning",
      "Reports dashboard",
    ],
    workflow: [
      "Add bills, subscriptions, tasks, and reminders",
      "Let the AI agent highlight what needs attention",
      "Use reports and routines to stay ahead of everyday admin",
    ],
    benefits: [
      "Reduce admin stress",
      "Stop forgetting small but important tasks",
      "Keep bills, subscriptions, and routines easier to manage",
    ],
  },

  adhdWork: {
    name: "ADHD Work",
    slug: "adhd-work",
    tagline: "AI-assisted work support for focus and energy.",
    description:
      "ADHD Work helps plan workdays, unpack tasks, prepare meetings, choose work modes, track energy, and recover focus with AI-assisted support designed for realistic productivity.",
    icon: "◎",
    accent: "cyan",
    preview: "/previews/adhd-work.png",
    appLink: "https://adhd-work-app.vercel.app/",
    features: [
      "AI workday command",
      "Task unpacking",
      "Meeting preparation",
      "Work modes",
      "Energy tracking",
      "Focus recovery support",
    ],
    workflow: [
      "Plan your workday around focus, energy, and task load",
      "Let the AI agent unpack overwhelming tasks into clearer steps",
      "Use recovery and work modes to keep moving without burnout",
    ],
    benefits: [
      "Reduce workday overwhelm",
      "Break stuck tasks into manageable action",
      "Support focus without forcing unrealistic productivity",
    ],
  },
} as const;

export type AppKey = keyof typeof apps;