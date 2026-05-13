export type ResourceCategory =
  | "Mental Wellness System"
  | "Focus & Productivity System"
  | "Emotional Intelligence System"
  | "Career & Growth System"
  | "Freelance System"
  | "Family & Lifestyle System";

export type ResourceFormat =
  | "Interactive Workbook"
  | "Digital Reflection Journal"
  | "Guided Planner"
  | "Productivity System"
  | "Companion Guide"
  | "Tracker System";

export type Resource = {
  slug: string;

  title: string;

  shortTitle: string;

  subtitle: string;

  category: ResourceCategory;

  format: ResourceFormat;

  description: string;

  price: string;

  coverImage: string;

 previewImage: string; // homepage landscape mockup image

  pages?: string;

  featured?: boolean;

  compatibleApps: string[];

  bestFor: string[];

  stripePriceId?: string;

  downloadFilePath?: string;
};