import { Button } from "../ui/button";

export function NavigationTabs() {
  const tabs = [
    "COURSES",
    "CAMPUSES",
    "PARTNER INSTRUCTIONS",
    "STUDENT TESTIMONIALS",
    "STORIES",
  ];

  return (
    <section className="py-16 mt-16 max-lg:hidden">
      <div className="max-w-7xl mx-auto px-6 grid place-items-center">
        <nav className="flex items-center justify-center space-x-2 border border-accent/50 max-w-max p-4">
          {tabs.map((tab, index) => (
            <Button
              variant={"ghost"}
              key={tab}
              className={`text-sm font-extralight ${
                index === 0 ? "font-bold" : ""
              }`}
            >
              {tab}
            </Button>
          ))}
        </nav>
      </div>
    </section>
  );
}
