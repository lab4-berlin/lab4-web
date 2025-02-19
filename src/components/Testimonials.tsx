import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Christian Vollmann",
    role: "Entrepreneur and investor who has shaped Germany’s digital landscape with over 70 startups, including nebenan.de, eDarling, and MyVideo",
    image: "/images/testimonials_cv.jpeg",
    text: "Ilya is an excellent programmer, a hard worker, a dedicated and loyal employee and a great team worker. It is a pleasure to work with him."
  },
  {
    name: "Michael Schrezenmaier",
    role: "Former Co-CEO of Pipedrive and CEO Europe at SumUp, now Partner at Incharge Capital Partners.",
    image: "/images/testimonials_ms.jpeg",
    text: "I had the pleasure to work with Ilya on a variety of topics. He combined a keen thinking and can-do attitude which I highly valued. We were sad to see him leave but I wish him all the best and beyond doubt he will succeed."
  },
  {
    name: "Emma Thompson",
    role: "VP of Engineering at DataFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    text: "Ilya's approach to data team leadership is exceptional. He helped us build a strong, autonomous team in just 6 months."
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-[#127ff0] mb-8">What People Say</h2>

      <div className="relative bg-gray-50 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="flex-1">
            <blockquote className="text-lg italic mb-4">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <div>
              <p className="font-bold text-[#127ff0]">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-[#127ff0]" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-[#127ff0]" />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#127ff0]' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}