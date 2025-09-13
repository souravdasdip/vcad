import Image from "next/image";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="text-primary-foreground py-6 px-6 sticky top-0 left-0 bg-primary z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Victoria College of Arts and Design"
            width={500}
            height={400}
            className="h-10 w-auto"
          />
        </div>

        <button className="text-primary-foreground">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
