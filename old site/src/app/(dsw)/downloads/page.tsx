import { ProjectsDownloads } from "@/app/components/downloads/projects";
import Footer from "@/app/components/ui/footer";

export default function Download() {
  return (
    <div className="min-h-screen w-full bg-[--background]">
      <ProjectsDownloads />
      <Footer />
    </div>
  );
}
