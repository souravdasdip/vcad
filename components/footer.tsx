import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-8 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        <Image
          src="/logo.svg"
          alt="Victoria College of Arts and Design"
          width={500}
          height={400}
          className="h-10 w-auto"
        />
        <div className="flex justify-end items-center gap-8">
          <nav className="flex items-center gap-8 max-lg:hidden">
            <a
              href="#"
              className="text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              Policies
            </a>
            <a
              href="#"
              className="text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              Contact us
            </a>
            <a
              href="#"
              className="text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              Meet the Team
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
