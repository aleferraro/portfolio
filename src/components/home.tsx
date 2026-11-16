import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import MotionProvider from "@/components/motion-provider";
import { getDictionary, type Locale } from "@/i18n";

export default function Home({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <MotionProvider>
      <Navbar locale={locale} links={dict.nav} a11y={dict.a11y} />
      <main id="main-content">
        <Hero t={dict.hero} scrollDownLabel={dict.a11y.scrollDown} />
        <About t={dict.about} />
        <Experience t={dict.experience} />
        <Projects t={dict.projects} />
        <Skills t={dict.skills} />
        <Education t={dict.education} />
        <Contact t={dict.contact} />
      </main>
      <Footer t={dict.footer} />
    </MotionProvider>
  );
}
