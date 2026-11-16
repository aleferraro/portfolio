"use client";

import { MotionConfig } from "framer-motion";

// Rispetta l'impostazione "riduci movimento" del sistema operativo:
// le animazioni di spostamento vengono disattivate, le dissolvenze restano.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
