import { NavigationTabs } from "@/components/home/navigation-tabs";
import { StudentTestimonials } from "@/components/home/student-testimonials";
import { StudySection } from "@/components/home/study-section";
import { WelcomeSection } from "@/components/home/welcome-section";

export default function HomePage() {
  return (
    <main>
      <WelcomeSection />
      <NavigationTabs />
      <StudySection />
      <StudentTestimonials />
    </main>
  );
}
