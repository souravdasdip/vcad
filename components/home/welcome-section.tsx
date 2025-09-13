import { Button } from "@/components/ui/button";
import Image from "next/image";

export function WelcomeSection() {
  return (
    <section className="text-primary-foreground px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        <div className="">
          <h1 className="text-6xl lg:text-9xl font-extrabold leading-none tracking-tight mb-8">
            WELCOME
            <br />
            TO VCAD
          </h1>

          <p className="text-lg leading-relaxed w-full opacity-90 mb-6">
            Our team at Victoria College of Arts and Design is passionate about
            creating innovative projects and generating new ideas. We work with
            a variety of experts and esteemed companies using a collaborative
            approach. Located in London's Design District, we have valuable
            connections within our industry. Search our latest courses.
          </p>

          <Button size={"lg"}>Apply Now</Button>
        </div>

        <div className="relative">
          <div className="relative w-full max-w-7xl ml-auto">
            <Image
              src="/images/home/hero-collage.png"
              alt="VCAD Programs Collage showing Fashion, Photography, Graphic Design, Business, Media, Management, and Marketing programs"
              width={800}
              height={800}
              className="w-full h-auto lg:-mt-8"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
