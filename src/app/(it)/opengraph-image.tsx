import { renderOgImage } from "@/lib/og-image";

export const alt = "Alessandro Ferraro — Senior Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage("it");
}
