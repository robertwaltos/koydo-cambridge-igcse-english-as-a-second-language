// Auto-generated content manifest for Cambridge Igcse English As A Second Language
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  questionTarget: number;
  activityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "cambridge-igcse-english-as-a-second-language",
  examName: "Cambridge Igcse English As A Second Language",
  totalQuestions: 2700,
  category: "language_cert",
  topics: [
  {
    id: "reading-comprehension",
    domain: "reading-comprehension",
    title: "Reading Comprehension",
    icon: "📖",
    color: "#059669",
    questionTarget: 700,
    activityTypes: ["multiple_choice", "reading_passage"],
  },
  {
    id: "grammar-usage",
    domain: "grammar-usage",
    title: "Grammar & Usage",
    icon: "📝",
    color: "#7C3AED",
    questionTarget: 600,
    activityTypes: ["multiple_choice", "cloze_deletion"],
  },
  {
    id: "writing",
    domain: "writing",
    title: "Essay Writing",
    icon: "✍️",
    color: "#059669",
    questionTarget: 500,
    activityTypes: ["essay", "rubric_assessment"],
  },
  {
    id: "vocabulary",
    domain: "vocabulary",
    title: "Vocabulary in Context",
    icon: "🔤",
    color: "#D97706",
    questionTarget: 500,
    activityTypes: ["multiple_choice", "flashcard_deck"],
  },
  {
    id: "rhetoric",
    domain: "rhetoric",
    title: "Rhetoric & Style",
    icon: "🎭",
    color: "#DC2626",
    questionTarget: 400,
    activityTypes: ["multiple_choice", "reading_passage"],
  }
  ],
};
