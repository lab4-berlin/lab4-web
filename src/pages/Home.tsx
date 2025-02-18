import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#127ff0] mb-6">Building Data Teams and Platforms</h2>
        <p className="text-lg mb-4">
          Over <span className="font-semibold">15 years of experience</span> leading and scaling high-performing data teams in 
          startups and scaleups across healthcare, automotive, and e-commerce industries.
        </p>
        <p className="text-lg mb-4">
          Expert in designing and implementing <span className="font-semibold">robust data platforms</span>, driving data-driven 
          decision-making, and fostering a culture of innovation. Proficient in cloud architecture 
          (AWS, GCP), Data Governance, ETL, and advanced analytics. Proven track record of 
          successfully leading initiatives like Data Mesh and building strong, collaborative team 
          environments. A <span className="font-semibold">servant leader</span> who is passionate about mentoring and 
          empowering team members.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#127ff0] mb-6">Data Expert</h2>
        <p className="text-lg mb-4">
          I have 10+ years of experience as a database developer, data engineer, and head of data engineering. After that, I spent many 
          years managing cross-functional data teams, responsible for data engineering (platform), data analytics and insights (including 
          BI/BA), and Data Science, a.k.a. ML/AI.
        </p>
        <p className="text-lg mb-4">
          I can help you with any data-related project, on the technical, people, process or product sides.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#127ff0] mb-6">Interim Data Leader</h2>
        <p className="text-lg mb-4">
          With my vast managerial experience in the data area, covering multiple domains and industries and different company sizes, I 
          can join your company or project as a freelancer for 3, 6 or 9 months and help shape your data team and platform.
        </p>
        <p className="text-lg mb-4">
          My job is to make myself obsolete after the contract period: either by building an autonomous, cross-functional, end-to-end 
          responsible agile team or by helping you to hire a data manager (team lead data, head of data, director data, etc) who will take 
          over.
        </p>
        <p className="text-lg mb-4">
          With my skills and knowledge, I can kick-start your data team or help you bring the existing one to the next level.
        </p>
        <button className="bg-[#127ff0] text-white px-6 py-2 rounded hover:bg-[#ff5500] transition-colors">
          Book a free appointment
        </button>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-[#127ff0] mb-6">Contacts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Telephone:</h3>
              <p className="text-gray-600">available upon request</p>
            </div>
            <div>
              <h3 className="font-semibold">Postal address:</h3>
              <p className="text-gray-600">
                Lab IV<br />
                Postfach 40747<br />
                10064 Berlin
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#127ff0] mb-6">Consultation</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Consultation - Voucher</h3>
            <p className="text-3xl font-bold mb-4 text-[#127ff0]">€10</p>
            <button className="w-full bg-[#127ff0] text-white px-6 py-2 rounded hover:bg-[#ff5500] transition-colors">
              Buy
            </button>
            <p className="text-sm text-gray-600 mt-4">Supported payment methods:</p>
            <div className="flex gap-2 mt-2">
              <span className="text-gray-600">PayPal</span>
              <span className="text-gray-600">Visa</span>
              <span className="text-gray-600">Mastercard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <img 
            src="/images/data-pipeline-logo.png" 
            alt="Data PipeLINE Logo" 
            className="w-48"
          />
          <div>
            <h2 className="text-5xl font-bold text-[#ff5500]">Blog</h2>
            <p className="text-xl text-[#127ff0]">Smoking Pipes and Talking about Data and Engineering</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-[9/16] w-full">
            <iframe 
              className="w-full h-full rounded-lg shadow-lg"
              src="https://youtube.com/shorts/XgKOCvp1j_s"
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
                  Everyone was talking about Data Mesh a few years ago, now, not so much. Was it just hype, or is there something deeper to learn?
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}