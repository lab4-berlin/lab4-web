import React from "react";

export function BlogPost1() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <img 
          src="/images/data-pipeline-logo.png" 
          alt="Data PipeLINE Logo" 
          className="w-36"
        />
        <div>
          <h2 className="text-5xl font-bold text-[#127ff0]">Blog</h2>
          <p className="text-xl text-[#127ff0]">Smoking Pipes and Talking about Data and Engineering</p>
        </div>
      </div>

      <div className="grid gap-12">
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#127ff0] mb-4">Episode #0: "Data Mesh: Is the Hype Over?"</h3>
          <p className="text-lg mb-6">
            Everyone was talking about Data Mesh a few years ago, now, not so much. Was it just hype, or is there something deeper to learn?
          </p>
          <div className="aspect-video w-full mb-6">
            <iframe 
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/Q6I9rFyZAp4"
              title="Data PipeLINE - Episode #0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-[#127ff0] mb-2">Short TLDR version:</h4>
              <p className="text-lg">
                Data Mesh promised to fix bottlenecks in centralised data teams by decentralising ownership, 
                treating data as a product, enabling self-serve infrastructure, and maintaining federated 
                governance. While the idea is sound, many implementations failed because companies focused 
                too much on technology and ignored the social aspects: people, communication, and 
                organizational change. Data Mesh is 70% about how teams work together and only 30% about 
                tools. Without addressing collaboration and business understanding, simply moving data 
                people to product teams won't magically solve problems.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#127ff0] mb-2">Full transcript:</h4>
              <div className="text-base space-y-4 text-gray-700">
                <p>
                  Hello, my name is Ilya. I do data engineering and I like smoking pipes. So I thought, why don't you combine those two things in one and make a blog about data engineering where I can share my thoughts and smoke.  And today in my first ever episode I would like to talk about data mesh the idea which was quite popular for many years I would say but recently somehow I don't hear about data mesh so often as it used to be let's say five years ago every single job description in data area was mentioning data mesh and every company seemed to be sure they needed it.
                </p>
                <p>
                  The idea totally makes sense as centralized data teams became a bottleneck in many companies. It was somehow natural to think about decentralizing and the idea which was I think first raised in 2019 is based on four principles. So first it's about domain oriented ownership where if you produce data you own it. So the ownership of the data moves to domain teams. While in an old setup there was a centralized big data team which kind of took care of it. The second principle is "data as a product". So you start treating data as any other product. You assure its quality, it's usability, it's accessibility. It's not something on top. It's actually part of your product. The third basic principle was self-serve data infrastructure, so in order to enable your teams to build their own data products, you need to give them a platform. And last but not least, federated computational governance. So you still need data governance, but you don't want your governance to become a bottleneck.
                </p>
                <p>
                  Sounds great. I remember I spoke to a company which had three people in their data team, an engineer and two data analysts and they told me they're building data mesh. I was like… wow, interesting.  How are you guys planning to decentralize three people? So I guess even though the idea is good, it's not a silver bullet and the problem is as always implementation.
                </p>
                <p>
                  Somehow it's similar to moving from a monolith system in a backend to microservices: you decentralize, you distribute but then you get quite some complexity in connecting those services with each other. Another analogy which comes to my mind is I think similar changes happened to quality assurance and DevOps teams a bit earlier. At some point centralized quality assurance teams were resolved in most of the companies and quality engineers moved to domain teams. Same has happened to DevOps, so maybe it's just data people's turn.
                </p>
                <p>
                  It all sounds great, but in real life I saw attempts to implement data mesh failing in multiple companies and I would say mostly the reason was that people focus too much on technology and leave the social component behind.
                </p>
                <p>
                  In my opinion, data mesh is 70% people and communication and the way people work and just 30% tools and technologies. So if you want to move your data people and embed them into product teams, you need to change the way those teams work. It's not like implementing or rolling out another database or another ETL framework. It's so much more. What also happened that I believe is a cargo cult: people thought big guys are doing data mesh - we will do the same and without understanding the principle without actually doing the hard parts of it they just focused on the most simple: let's move data analysts to product teams and call it data mesh. I'm afraid it's not working like
                </p>
                <p>
                  Summarizing I would say the idea of decentralizing your data team is great.  I really believe that putting your data people close to the domain and helping them understand the business problems is crucial and probably the only way to avoid the data team becoming a bottleneck. But at the same time don't forget you are dealing with people and don't forget it won't solve all your problems.So if you have communication issues, they won't magically disappear if you call your new setup data mesh.
                </p>
                <p>
                  Thanks a lot for joining me today. I'm very interested in your ideas and experiences around data mesh so please reach out and share any feedback and hopefully see you in the next episodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function BlogPost2() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <img 
          src="/images/data-pipeline-logo.png" 
          alt="Data PipeLINE Logo" 
          className="w-36"
        />
        <div>
          <h2 className="text-5xl font-bold text-[#127ff0]">Blog</h2>
          <p className="text-xl text-[#127ff0]">Smoking Pipes and Talking about Data and Engineering</p>
        </div>
      </div>

      <div className="grid gap-12">
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#127ff0] mb-4">Talk at Thoughtworks, March 2025: "Data Mesh Beyond the Hype: Why People Matter More Than Tech"</h3>
          <p className="text-lg mb-6">
            Data Mesh failures are not about tech, they are about people. This talk shows why communication, ownership, and trust matter more than tools. We explore lessons from Agile, DevOps, and hiring, and why culture must come first.
          </p>
          <div className="aspect-video w-full mb-6">
            <iframe 
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/iRQas-59MMU"
              title="Data Mesh Beyond the Hype: Why People Matter More Than Tech"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-[#127ff0] mb-2">Short TLDR version:</h4>
              <p className="text-lg">
                “Can we do Data Mesh here?” - That is the question many companies ask, and too often, they expect a technical answer. But as I argue in my talk, the success of Data Mesh lies far beyond the tech stack. It is a socio-technical approach, and the people part is too often overlooked.
                Starting with Newton, Feynman, and even Napoleon, I build the case that communication, ownership, and trust are far more critical than how many data tools or cloud resources you have. Data Mesh promises autonomy, decentralization, and agility, but these ideals fall flat without cultural readiness.
                I discuss the four core principles of Data Mesh—domain ownership, data as a product, self-serve platforms, and federated governance—and then zoom in on the real obstacles: siloed teams, weak feedback loops, lack of cross-functional skills, and blind cargo-culting of “what big tech does.”
                Drawing parallels to DevOps, Agile, and Quality Assurance, I show how those movements evolved not just by adopting new tools but by shifting mindsets. The same is required for Data Mesh. It is not enough to break up a monolith—you have to empower people to own what they build and understand how it connects to business value.
                I also touch on hiring for Data Mesh: why “soft skills are more crucial than hard skills”, why “weak yes = no”, and why generalists thrive in modern data setups. We wrap up with takeaways on autonomy, governance as a service (not a bottleneck), and servant leadership as the foundation for resilient, effective teams.
                If you care about real transformation, not just buzzwords, this talk is for you.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#127ff0] mb-2">Full transcript:</h4>
              <div className="text-base space-y-4 text-gray-700">
                <p>
                Thanks a lot for the intro and for the opportunity. I will talk about Data Mesh, but primarily about people. The title is “Data Mesh beyond the hype”. In a lot of cases it actually fails because of people, not because of tech, and I think that's something we should try to fix together.
                </p>
                <p>
                Today I am standing on the shoulders of the giants, people much smarter than me, who were talking about similar things for centuries. Newton: madness of men is not predictable.
                </p>
                <p>
                Richard Feynman: There is reality and then you have PR presentations and marketing materials and so on. And sometimes the laws of nature and physics kind of win. Maybe you should see the facts.
                </p>
                <p>
                Last but not least Napoleon apparently used to say that 75% of the battle's success depends on people and communication between them, and only 25% are things like how many guns you have, how much manpower.
                </p>
                <p>
                Now let’s talk about Data Mesh. I will briefly elaborate on what it is about and why the social component is so important.
                </p>
                <p>
                Zhamak, who used to work at a company you probably know, introduced the term in 2019. Data Mesh is built upon four basic principles. First, domain ownership, where teams own their data. Second, “data as a product” — you treat data with the same quality criteria as products. Third, you need a self-serve data platform so teams can build and own their data products. And fourth, federated computational governance — freedom, but also rules, especially important in regulated industries like banking or e-health.
                </p>
                <p>
                Data Mesh is not just about tech. It is a socio-technical approach. It is not an architecture or a tool, but something deeper in the organizational setup. And it will likely fail if you focus only on technology.
                </p>
                <p>
                Now a few anecdotes from client interviews. Companies often ask about doing Data Mesh but focus only on tech stacks, not on people or communication. They treat it like an engineering upgrade, not an organizational change.
                </p>
                <p>
                Two more examples from the past. I once interviewed for a director position in a scale-up. Great technical talk, but I was rejected because I was "not passionate enough about Data Mesh." Another time, a startup with a 3-person data team asked how to decentralize. I gently challenged them: what business problem are you solving? Again, I was rejected for being "too traditional." I am happy I didn't end up in either company.
                </p>
                <p>
                Why does this happen? Cargo cult thinking. Companies copy big players without understanding the principles. You have to start with a real problem, not a fashionable solution.
                </p>
                <p>
                Now let's talk about decentralization. Lessons from DevOps, QA, and microservices architecture show us decentralization increases complexity. Monoliths are not always bad. Microservices shift complexity to communication layers. Same with Data Mesh — decentralization is not a silver bullet.
                </p>
                <p>
                Agile development showed us the same. The mindset shift took time. Misunderstanding and cargo cult behaviors were common. True Agile is not just standups and retrospectives — it is about principles.
                </p>
                <p>
                QA teams used to be centralized. Developers threw work over the wall. Now QA is part of the team. Everyone tests. The same needs to happen with data.
                </p>
                <p>
                DevOps broke silos. Platform teams now enable others. But if you don't govern it right, you get chaos. Data Mesh has similar challenges.
                </p>
                <p>
                Splitting a bad monolith won't solve root problems. If you have poor communication or a weak data culture, Data Mesh will not fix it. Beautiful dashboards won’t save you if no one uses data for decisions.
                </p>
                <p>
                What can we do? Focus on autonomy, hiring, and governance. Teams need trust. They should own their data products end-to-end. Software engineers should understand data. Data people should improve their engineering skills. Teams should organize themselves and be business-aware.
                </p>
                <p>
                We also need to stop certain behaviors. No more data engineers waiting for perfect tickets. No more analysts avoiding technical skills. No more ML engineers blaming bad data without clear quality criteria.
                </p>
                <p>
                Decentralization still needs governance. Like the University of Washington paved paths where students naturally walked, governance should formalize good practices. Ownership, data contracts, observability, and data catalogs are crucial.
                </p>
                <p>
                Servant leadership is essential. Leaders should support, not control. The inverted pyramid idea: employees deliver value, managers support them. Good teams outperform traditional structures, even in harder economic times.
                </p>
                <p>
                Finally, hiring for Data Mesh. “Weak yes” is a no. Hiring mistakes are costly. Soft skills matter more than tech skills. Generalists are increasingly valuable. Interviewing is a skill — remember you hire for real work, not just for interview performance.
                </p>
                <p>
                Final takeaway: Start with people, not tech. Solve real problems. Data Mesh is not microservices for data. It is not a silver bullet. Teams must take ownership and give honest feedback. People first. Thanks a lot for your attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}