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
    name: "Sarah Chen",
    role: "Head of Data Science at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    text: "Ilya's guidance transformed our data team. His expertise in implementing Data Mesh principles was invaluable."
  },
  {
    name: "Michael Rodriguez",
    role: "CTO at HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    text: "Working with Ilya was a game-changer. His deep understanding of data engineering and team dynamics helped us scale efficiently."
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