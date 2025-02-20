import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#127ff0] mb-6">Who am I</h2>
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <img
            src="/images/iv_profile.jpeg"
            alt="Ilya Vladimirskiy"
            className="w-48 h-48 object-cover rounded-lg shadow-lg float-left mr-6 mb-4 sm:float-none sm:mr-0 sm:mb-0"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">Ilya Vladimirskiy</h3>
            <p className="text-lg text-gray-600 mb-4">Berlin, Germany</p>
            <p className="text-lg">
              Experienced data leader with 15+ years in engineering, analytics, and AI, building scalable platforms at Ada Health, CARFAX, and Zalando. Expert in cloud (AWS, GCP), agile, and bridging business and tech. Now offering fractional data leadership in data management, architecture, and analytics as a freelancer.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#127ff0] mb-6">What I Do</h2>
        <ul className="text-lg mb-4 list-disc pl-6 space-y-2">
          <li>Interim & Fractional Data Leadership – Help as a full-time interim leader (3-9 months) or a part-time fractional data leader.</li>
          <li>Build & Level Up Data Teams – Set up new teams from scratch or help existing ones work better and smarter.</li>
          <li>Create Scalable Data Platforms – Design systems that make data useful, reliable, and easy to access.</li>
          <li>Hands-On & Strategic Support – Support with everything from tech to team structure, processes, and strategy.</li>
          <li>Make Myself Replaceable – Build a strong, self-sufficient team or help you find the right long-term leader.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#127ff0] mb-6">Why Work With Me?</h2>
        <ul className="text-lg mb-4 list-disc pl-6 space-y-2">
          <li>15+ years of experience growing and leading data teams in startups & scaleups (healthcare, automotive, e-commerce).</li>
          <li>10+ years of hands-on work in data engineering, database development, and leadership.</li>
          <li>Deep Tech & Cloud Know-How – Skilled in AWS, GCP, Data Governance, ETL, and analytics.</li>
          <li>Proven Track Record – Led Data Mesh and other big data initiatives, making teams and platforms stronger.</li>
          <li>People First – I love mentoring, coaching, and helping teams do their best work.</li>
        </ul>
      </section>

      <Testimonials />

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-[#127ff0] mb-6">Contacts</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <button
                className="w-full bg-[#127ff0] text-white px-6 py-2 rounded hover:bg-[#ff5500] transition-colors mb-6"
                onClick={() => window.location.href = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0IGtjX_crgMVurFiau0dAyjRfbtacZr82oJiROaObcP4kmif4QfyVABrgcbP1AGs1i4Ya8iIWi"}
            >
              Book a free appointment
            </button>
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">Telephone</h3>
                <p className="text-gray-600">available upon request</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Postal address</h3>
                <p className="text-gray-600">
                  Lab IV<br/>
                  Postfach 40747<br/>
                  10064 Berlin
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#127ff0] mb-6">Consultation</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <button
                className="w-full bg-[#127ff0] text-white px-6 py-2 rounded hover:bg-[#ff5500] transition-colors mb-6"
                onClick={() => window.location.href = "https://buy.stripe.com/cN29BPfSHaD76oE146"}>
              Buy Voucher
            </button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <img
              src="/images/data-pipeline-logo.png"
              alt="Data PipeLINE Logo"
              className="w-48"
          />
          <div>
            <h2 className="text-5xl font-bold text-[#127ff0]">Blog</h2>
            <p className="text-xl text-[#127ff0]">Smoking Pipes and Talking about Data and Engineering</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* YouTube frame is now 50% smaller */}
          <div className="aspect-[9/16] w-3/4 mx-auto">
            <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/XgKOCvp1j_s"
                title="Data PipeLINE Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-[#127ff0] mb-4">Episodes:</h3>
            <div className="space-y-4">
              <Link
                  to="/blog/data-mesh-hype"
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-bold text-[#127ff0]">Episode #0: "Data Mesh: Is the Hype Over?"</h4>
                <p className="text-gray-600 mt-2">
                  Everyone was talking about Data Mesh a few years ago, now, not so much. Was it just hype, or is there
                  something deeper to learn?
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}