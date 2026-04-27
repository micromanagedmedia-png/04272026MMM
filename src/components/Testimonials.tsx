import { useState } from 'react';

const reviewsRaw = [
  { name: 'Seal HVAC', time: 1774870620, text: 'Needed an overhaul on my website and marketing and found Bob. Talked to many SEO companies and all you get is a salesman and good luck on the rest. Bob is the one that gets his hands dirty and when I have questions or need anything, he calls and we chat for awhile. As an old school business owner, I appreciate his business philosophy and work ethic. My site looks way better and online presence has improved', rating: 5, ago: 'a week ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjXEBkn6GWDZLIs7hbLlYGw2BE16Nd_JzFbrS_1YTSPafhLbcOw=s1920-c-rp-mo-ba3-br100' },
  { name: 'Saul Mendez', time: 1774536684, text: 'Working with Bob Rutledge has been a great experience. He built my website exactly how I envisioned it—clean, professional, and easy for customers to navigate. He was responsive, knowledgeable, and made the whole process simple. If you\'re looking to upgrade your online presence and actually get results, I highly recommend Bob', rating: 5, ago: 'a week ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjVWf5QZe68k8kYBCLJC3uZ2eiN0LyfyKFeRLHhZdKXB50odFuc=s1920-c-rp-mo-br100' },
  { name: 'Aaron Perkins', time: 1773799125, text: 'Very knowledgeable and informative. Took time to walk me through all the tech talk I know nothing about.', rating: 5, ago: '2 weeks ago', photo: 'https://lh3.googleusercontent.com/a/ACg8ocJ3Ds_EhcFVy0SA4LZlaFvO17yc0y8psNRI7VPNjzgYEh7ScQ=s1920-c-rp-mo-br100' },
  { name: 'Lee Akins', time: 1769113684, text: 'Bob - Knows his Business and most Importantly How to get Results.. Consummate Expert!', rating: 5, ago: '2 months ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjWwmCH9NoX92Ip19N_KV3u65D2dk_StcpArgJXrrO5-k2zWljsZQQ=s1920-c-rp-mo-br100' },
  { name: 'L M (Nuggets)', time: 1763669999, text: "Bob wasn't able to take my business on as he already had a client in the same industry which I appreciate. He spent quite a lot of time talking to me and even called me back to decline business. I really appreciated him doing that when it really had no benefit to him.", rating: 5, ago: '4 months ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjW7O9pNjZJ7fmtJl5on2hhnxNJmL6wExf0DdiHPy-0o8nXG8T0T=s1920-c-rp-mo-ba4-br100' },
  { name: 'Johnnie Frost', time: 1753741964, text: 'It sure helping bob', rating: 5, ago: '8 months ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjUz8QLiI2yvJ5a0WCQSion23NFflgerJcJp7H6GpDmksYzugDE=s1920-c-rp-mo-br100' },
  { name: 'Pop-A-Lock of Greensboro', time: 1735235450, text: 'Always super helpful\nAlways super friendly!\nAnd ALWAYS answer phone 👍👍👍', rating: 5, ago: 'a year ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjX9QECes9-FTXFaTFtbu4G2-BZX-u5GvlESsdye74TXbdFaiIc=s1920-c-rp-mo-br100' },
  { name: 'Steve Bruner', time: 1721935203, text: 'BOB IS THE BEST I KNOW AND I KNOW A LOT IN THIS BIZ', rating: 5, ago: 'a year ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjUGWNmpeBJVzH17qojHvAkzsKazZk-GZiXFNWTgukhcTJbaWGcN=s1920-c-rp-mo-br100' },
  { name: 'David Sheller', time: 1719527575, text: 'He does excellent work, and he has a very quick turnaround. I also understand he\'s priced reasonably. He is very responsive and quick to help when you need something additional. Great work and he stands behind it.', rating: 5, ago: 'a year ago', photo: 'https://lh3.googleusercontent.com/a/ACg8ocJOlhV5hUANEUC8UO7x8ZpvX_Y9rZ6kZRjY7lmeP3114h1ViA=s1920-c-rp-mo-br100' },
  { name: 'kyle wolff', time: 1711579612, text: "MicroManaged Media is the way to go for all your marketing needs. I highly recommend booking a call with Bob to grow your company and online presence. His time and knowledge is worth every penny and won't be a waste of your time. Bob has transformed my business and mindset of how to be successful. Do your business a favor and get Bob on your team!", rating: 5, ago: '2 years ago', photo: 'https://lh3.googleusercontent.com/a/ACg8ocLAfEJML9Ql9PslnG6Edv2Tj1laA0XJoGej0PR4NPXwHBpFSg=s1920-c-rp-mo-br100' },
  { name: 'Kevin Wielgus (The Floor Guy)', time: 1679700579, text: 'Bob knows his stuff. I especially appreciate his ability and willingness to explain what he is doing to get results.', rating: 5, ago: '3 years ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjUFVz9OfD1-LHhc6QrCI7bDYcJCZyDw2cYJeWYboooLiOM76vftPw=s1920-c-rp-mo-ba3-br100' },
  { name: 'Joshua Lancello', time: 1638991377, text: 'Found them off a 3 min YouTube video about a Google business page set up. I messaged him he said call me in 15 mins. Amazing guy really knows his stuff, had an hour long call and answered every question I had. I will definitely be working with him in future!', rating: 5, ago: '4 years ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjX_OU3uGyYvDySJCStB-mxUDjxvpEwQTM8ljQJwulGQpNpu5ByfbA=s1920-c-rp-mo-ba3-br100' },
  { name: 'Roofing Plus', time: 1619023936, text: 'Bob is extremely professional, personal, and quick thinking.', rating: 5, ago: '4 years ago', photo: 'https://lh3.googleusercontent.com/a/ACg8ocLPjqGOtsJXsU8R-io1sxdkyPUvTEIpSuObtgiw8fNC_Fs_kg=s1920-c-rp-mo-br100' },
  { name: 'Pop-A-Lock', time: 1572049893, text: 'Bob Rutledge has been a great deal of help. Our locksmith business is a nationwide franchise. Our old SEO company disappeared on us. The website was down and we couldn\'t get any response from the agency. We were without a web presence for weeks.\n\nBob postponed less pressing marketing projects for his existing clientele and put us at the top. The website was back up in a day and the finished rework of the site within a couple of weeks. All of this at a phenomenal price.\n\nWe see first hand what Bob means when he says, "Hire an Expert, Not an Agency". Small business success is personal with him.', rating: 5, ago: '6 years ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjVCEs6T2n7970i0rUDvsEc25kMA-j5G01fmueCFsQQca_2cqgHy=s1920-c-rp-mo-ba2-br100' },
  { name: 'Premier Gutters LLC Pensacola FL', time: 1583428805, text: 'Bob has taken the time to explain things in depth to help in a tremendous way. Awesome job! Highly recommend his service!', rating: 5, ago: '6 years ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjVBc7v-a_pSUXtzhZfOfNBIs1v5CEfNPIMY9K2H8TMPosAQXQ=s1920-c-rp-mo-br100' },
  { name: 'Arvind Verma', time: 1585854544, text: 'I have worked with Bob on several WordPress projects. His performance is excellent. Bob is always looking for a better way to do old tasks. Always looking for ways to save money but increase the performance. I look forward to working with him in the near future', rating: 5, ago: '6 years ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjUHqgv1iDo_ugChypX1ybFKRf_Kf2gE3FskPUz9bqrCzpSDO6bM=s1920-c-rp-mo-br100' },
  { name: 'Franklin Eaton', time: 1553706221, text: 'Bob created a wonderful website for my law practice. He has also produced several videos to market the areas of law I practice. Additionally, Bob does a great job managing my online presence. I highly recommend Bob Rutledge for your digital presence.', rating: 5, ago: '7 years ago', photo: 'https://lh3.googleusercontent.com/a/ACg8ocL4DN4AejPEcGPCXgsWjDfioXgIXqXTOqU7OejWVw4_6bn6qw=s1920-c-rp-mo-br100' },
  { name: 'Dr. Kimberly McMurtrey', time: 1524746509, text: "I can't say enough about the professional detail and design that Micro Managed Media has put into our website. Bob provides great insight and has great marketing knowledge that has increased our foot traffic in the door tremendously. He is always responsive and anytime I have a question about something he's always there. Tri Cities Health has used numerous web designers in the past and Micro Managed Media tops them all. Do not hesitate to use this company if you are wanting to get your business out there.", rating: 5, ago: '7 years ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjVoOOUJqlzL7-M1Ysb44gpOS5nWbeGA7lZszh_3iYdZRcfHeDdR=s1920-c-rp-mo-br100' },
  { name: 'makersmark 13', time: 1508344050, text: 'Excellent Customer Service!! Extremely focused on getting results and absolute pleasure to deal with 5 Stars!!', rating: 5, ago: '8 years ago', photo: 'https://lh3.googleusercontent.com/a-/ALV-UjWA4t5BJNCNwD9lF3DmHubqum_08brgpIo4tvb6sKz1pSF7LOep=s1920-c-rp-mo-br100' },
];

const reviews = [...reviewsRaw].sort((a, b) => b.time - a.time);
const INITIAL_COUNT = 6;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? reviews : reviews.slice(0, INITIAL_COUNT);

  return (
    <section id="testimonials" className="py-28 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-500 text-sm font-semibold uppercase tracking-widest">Google Reviews</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-3 mb-4 tracking-tight">
            Real Clients. <span className="text-blue-900 dark:text-blue-400">Real Results.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mb-6">
            Don't take our word for it — here's what business owners say about working with Bob.
          </p>
          <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2.5 shadow-sm">
            <GoogleIcon />
            <Stars count={5} />
            <span className="text-gray-900 dark:text-white font-bold text-sm">5.0</span>
            <span className="text-gray-400 text-sm">· {reviews.length} Google reviews</span>
          </div>
        </div>

        <div className="relative">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {visible.map((r, i) => (
              <div
                key={r.name + i}
                className="break-inside-avoid bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-cyan-400/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <Stars count={r.rating} />
                  <div className="flex items-center gap-1 text-gray-400">
                    <GoogleIcon />
                    <span className="text-xs">Google</span>
                  </div>
                </div>
                {r.text && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 whitespace-pre-line">
                    <svg className="w-4 h-4 text-cyan-300 inline mr-1 -mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    {r.text}
                  </p>
                )}
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="w-9 h-9 rounded-full object-cover shrink-0 bg-gray-100"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-gray-900 dark:text-white truncate">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.ago}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade overlay when collapsed */}
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 dark:from-gray-900/60 to-transparent pointer-events-none rounded-b-2xl" />
          )}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:border-gray-400 text-gray-700 dark:text-gray-200 font-semibold px-8 py-3 rounded-full transition-colors"
          >
            {expanded ? 'Show Less' : `Show All ${reviews.length} Reviews`}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
