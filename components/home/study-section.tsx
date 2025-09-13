import { Button } from "@/components/ui/button";
import Image from "next/image";

export function StudySection() {
  return (
    <section className="bg-primary text-primary-foreground py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="order-2 lg:order-1">
          <Image
            src="/images/home/vogue-design-books-stacked.png"
            alt="Design Books and Typography - Vogue Collection"
            width={800}
            height={800}
            priority
            className="w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            WHAT WILL YOU
            <br />
            STUDY?
          </h2>

          <p className="text-lg leading-relaxed opacity-90 max-w-lg">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and cultural industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size={"lg"}>View Courses</Button>
            <Button variant="outline" size={"lg"}>
              Download Prospectus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
