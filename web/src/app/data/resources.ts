export const resources = [
  {
    slug: "the-anxious-wallet",
    title: "The Anxious Wallet",
    subtitle: "A guided money clarity system for calmer financial decisions.",
    category: "Financial Clarity System",
    description:
      "A structured digital workbook designed to help you untangle money stress, reflect on spending patterns, and build a calmer relationship with everyday financial decisions.",
    price: "£7",
    coverImage: "/resources/the-anxious-wallet-cover.png",
    previewImage: "/resources/the-anxious-wallet-preview.png",
    bestFor: [
      "Money anxiety",
      "Spending reflection",
      "Financial self-awareness",
      "Calmer planning",
    ],
  },
  {
    slug: "the-peaceful-mind",
    title: "The Peaceful Mind",
    subtitle: "A digital reflection journal for mental calm and emotional clarity.",
    category: "Reflection Journal System",
    description:
      "A gentle guided system for reducing mental noise, reflecting on emotional patterns, and creating a calmer inner routine through digital journaling.",
    price: "£7",
    coverImage: "/resources/the-peaceful-mind-cover.png",
    previewImage: "/resources/the-peaceful-mind-preview.png",
    bestFor: [
      "Mental clarity",
      "Emotional reflection",
      "Daily calm",
      "Thought organisation",
    ],
  },
  {
    slug: "focusanchor-journal",
    title: "FocusAnchor Journal",
    subtitle: "A guided productivity system for anchoring focus and daily direction.",
    category: "Guided Productivity System",
    description:
      "A practical digital journal designed to help you reduce scattered attention, choose a clear focus, and create a simple structure for your day.",
    price: "£7",
    coverImage: "/resources/focusanchor-journal-cover.png",
    previewImage: "/resources/focusanchor-journal-preview.png",
    bestFor: [
      "Focus planning",
      "Daily structure",
      "Task overwhelm",
      "Productivity clarity",
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}