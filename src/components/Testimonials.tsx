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
    role: "Entrepreneur and investor who has shaped Germany's digital landscape with over 70 startups, including nebenan.de, eDarling, and MyVideo",
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
    name: "Rita Krioukov",
    role: "Co-founder and longtime CEO of Kunstschuleberlin, a leading Berlin art school with 20+ years of history, offering diverse courses to hundreds of students daily",
    image: "/images/testimonials_rk.jpeg",
    text: "Ilya has been a game-changer for Kunstschuleberlin. He helped us become a data-driven organization by building a solid foundation for our data platform and getting our team organized around it. Thanks to his guidance, we now use data in a way that truly supports our work. Even after setting things up, he continues to support us, making sure we stay on track. His expertise and hands-on approach made a huge difference!"
  },
  {
    name: "David Rodriguez",
    role: "Former CEO of Delivery Hero Germany and CFO of Lieferando, data-driven leader who has led major digital transformations at multiple top companies.",
    image: "/images/testimonials_dr.jpeg",
    text: "Ilya was dealing with billing and data warehouse at a high professional level. He is a great developer and very pragmatic personality. I liked his accuracy and data driven approach. He is stress resistant and very focussed on result and performance. It was a pleasure working with Ilya and can highly recommend him."
  },
  {
    name: "Peter Bannister",
    role: "A leader in digital health and AI-driven innovation, Honorary Professor at University of Birmingham, former CTO at Median Technologies, VP of Life Sciences at Ada Health, CSO at UGenome Biotech",
    image: "/images/testimonials_pb.jpeg",
    text: "I quickly came to rely on Ilya as a valued teammate who is able to consistently blend high technical acumen with a collaborative, empathetic, and supportive leadership approach that in itself is a rare commodity."
  },
  {
    name: "Valentine Gogichashvili ",
    role: "Renowned data leader, built Zalando’s first database team, laying the foundation for a data infrastructure that now serves millions of customers.",
    image: "/images/testimonials_vg.jpeg",
    text: "Ilya is an exceptional engineer and I was happy to work with him at Zalando. He is a very supportive team player and greatly helped maintaining PostgreSQL based ETL processes as well as the communication with the Business Intelligence and Analytics departments. His previous experiences with databases, data processing and fundamental computer science research helped to largely improve the quality of Data Science at Zalando."
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

      <div className="relative bg-gray-50 rounded-xl px-16 py-8">
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