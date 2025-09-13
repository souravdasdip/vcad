import { NavigationTabs } from "@/components/home/navigation-tabs";
import { StudySection } from "@/components/home/study-section";
import { WelcomeSection } from "@/components/home/welcome-section";

export default function HomePage() {
  return (
    <main>
      <WelcomeSection />
      <NavigationTabs />
      <StudySection />
    </main>
  );
}
