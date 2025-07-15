export interface SetupFormInput {
  gender: string;
  age: number;
  height: number;
  weight: number;
  goal: string;
  experience: string;
  trainingDays: string[];
  healthNotes: string;
  preferences?: string[];
  sessionDuration?: number;
  planDurationWeeks?: number;
}