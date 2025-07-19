// src/app/(main)/layout.js
import { TrainingProvider } from "@/context/TrainingProvider";

export default function MainLayout({ children }) {
  return <TrainingProvider>{children}</TrainingProvider>;
}
