import Image from "next/image";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="text-primary-foreground py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/vcad-logo-white.png"
            alt="Victoria College of Arts and Design"
            width={120}
            height={40}
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
