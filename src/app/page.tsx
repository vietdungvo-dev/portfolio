import HeroView from "@/components/view/HeroView";
import SkillsView from "@/components/view/SkillsView";
import ProjectsView from "@/components/view/ProjectsView";
import CertificatesView from "@/components/view/CertificatesView";
import EducationView from "@/components/view/EducationView";
import FooterView from "@/components/view/FooterView";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl">
      <HeroView />
      <Separator className="mx-6 opacity-5" />
      <SkillsView />
      <Separator className="mx-6 opacity-5" />
      <ProjectsView />
      <Separator className="mx-6 opacity-5" />
      <CertificatesView />
      <Separator className="mx-6 opacity-5" />
      <EducationView />
      <FooterView />
    </main>
  );
}
