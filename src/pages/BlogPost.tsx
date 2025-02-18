export function BlogPost() {
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
