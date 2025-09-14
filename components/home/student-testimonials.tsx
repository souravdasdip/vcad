import Image from "next/image";

export function StudentTestimonials() {
  return (
    <section className="bg-color1 text-white py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-28">
          STUDENT
          <br />
          TESTIMONIALS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white min-h-[450px] relative p-6 rounded-lg transform rotate-4 hover:rotate-0 transition-transform"
              style={{ border: "3px solid hsla(300, 81%, 49%, 1)" }}
            >
              {/* Image with overlay */}
              <div className="absolute top-0 left-0 right-0 bottom-0 rounded-lg overflow-hidden">
                <Image
                  src={`/images/home/student-testimonial-card-${i}.jpg`}
                  alt={`Student testimonial ${i}`}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "hsla(230, 89%, 21%, 0.8)" }}
                ></div>
              </div>

              {/* Content on top of overlay */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
                <p className="text-xl lg:text-2xl font-bold mb-6">
                  "LOREM IPSUM
                  <br />
                  LOREM IPSUM"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
