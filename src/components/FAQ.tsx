import { useState, useEffect } from 'react';

interface FAQItem {
  question: string;
  answerHtml: string;
  schemaText: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does Google Ads management for contractors actually work — and why can't I just run it myself?",
    schemaText: "Google Ads for contractors puts your business in front of homeowners actively searching for your services. The auction system rewards relevance as much as budget — a well-structured campaign with strong negative keywords, high-quality landing pages, and proper bidding will outperform a higher-spending competitor. The STAB Framework (Spend, Targeting, Ads, Bidding) is the sequence used to optimize accounts. Running ads yourself means spending hours weekly reviewing search terms, adjusting bids, testing ad copy, and staying current with platform changes — unsustainable for a contractor running a business. Professional management produces campaigns that compound results over time.",
    answerHtml: `<p><a href="/get-more-leads" class="text-cyan-500 font-semibold hover:underline">Google Ads for contractors</a> is one of the most effective ways to put your business in front of homeowners who are actively searching for your services right now — not people who might need you someday, but people who are typing "HVAC repair near me" or "emergency plumber" into Google at this exact moment.</p>
<p>The way it works: you bid to appear at the top of Google's search results when someone in your service area searches relevant keywords. You only pay when someone actually clicks your ad. But the reality of running a profitable campaign is far more nuanced than that simple description suggests — and that's precisely why so many contractors lose money running their own ads.</p>
<p>Google's auction system rewards relevance as much as it rewards budget. A contractor with a $2,000/month budget and a well-structured campaign — tightly themed ad groups, strong negative keyword lists, high-quality landing pages, and properly configured bidding strategies — will regularly outperform a competitor spending $8,000/month on a poorly managed account.</p>
<p>The <a href="/get-more-leads" class="text-cyan-500 font-semibold hover:underline">STAB Framework</a> — Spend, Targeting, Ads, and Bidding — is the sequence we use to optimize every client account. The order matters. Most advertisers jump straight to adjusting bids when their cost per lead is too high. But bidding is the last lever you should touch, not the first.</p>
<p>Running your own ads also means spending hours each week reviewing search term reports, identifying new negative keywords, testing ad copy variations, adjusting geographic bid modifiers, monitoring impression share, troubleshooting quality score drops, and staying current with Google's constant platform changes. For a contractor who's already managing crews, handling customer calls, and running a business — that time investment is genuinely unsustainable.</p>
<p>What we provide is a system: structured campaigns, obsessive keyword hygiene, landing pages built to convert, and an ongoing optimization process that improves results over time rather than degrading. <a href="/#contact" class="text-cyan-500 font-semibold hover:underline">Let's look at your account.</a></p>`,
  },
  {
    question: "What is call tracking, and why does every contractor need it before spending another dollar on advertising?",
    schemaText: "Call tracking assigns unique phone numbers to different marketing sources so every inbound call can be traced back to the exact source that generated it. Without it you're flying blind. You can see total call volume by source, which campaigns generate calls vs just clicks, your missed call rate (typically 15-30% for most contractors), call duration, and call recordings. The first 30 days of tracking data almost always changes how a contractor thinks about their marketing. Pairing call tracking with an AI answering service closes the loop completely.",
    answerHtml: `<p><a href="/track-calls-leads" class="text-cyan-500 font-semibold hover:underline">Call tracking</a> is the practice of assigning unique phone numbers to different marketing sources — your Google Ads campaigns, your Google Business Profile, your website, your Bing ads — so that every inbound call can be traced back to the exact source that generated it. Without it, you're flying completely blind. You know your phone rang. You have no idea why.</p>
<p>Here's why that matters: most contractors are spending money on multiple marketing channels simultaneously. When the phone rings, you answer it. But without tracking, you have no way of knowing whether that call came from your $3,000/month Google Ads spend or from a free organic listing.</p>
<p>Call tracking solves this by giving you a complete picture of your lead flow. You see total call volume by source. You see which campaigns are generating calls and which are generating clicks but no calls. You see your missed call rate, which for most contractors is 15–30% of inbound calls during business hours. You see call duration and can listen to recordings.</p>
<p>The first 30 days of call tracking data almost always changes how a contractor thinks about their marketing. One roofing contractor we worked with discovered he was missing 23% of his inbound calls during business hours — nearly 1 in 4 calls going unanswered while his team was in the field.</p>
<p>Pairing <a href="/track-calls-leads" class="text-cyan-500 font-semibold hover:underline">call tracking</a> with our <a href="/answer-my-calls" class="text-cyan-500 font-semibold hover:underline">AI answering service</a> closes the loop completely: you know exactly where every call came from, and you ensure that every call gets a professional, helpful response. <a href="/track-calls-leads" class="text-cyan-500 font-semibold hover:underline">Get tracking in place</a> before you touch anything else.</p>`,
  },
  {
    question: "How does an AI answering service work, and will my customers know they're talking to a machine?",
    schemaText: "Modern AI answering systems use conversational AI to handle inbound calls your team can't answer. The AI answers in your company name, identifies the caller's need, collects key lead details (name, phone, address, problem description, urgency), and either transfers emergency calls live or logs the lead for follow-up. A structured summary is delivered to your team within minutes. Most callers complete the intake conversation without asking if it's AI. The alternative — voicemail — sees fewer than 20% of messages returned. AI answering ensures no call is lost.",
    answerHtml: `<p>Modern <a href="/answer-my-calls" class="text-cyan-500 font-semibold hover:underline">AI answering systems for contractors</a> are built on conversational AI platforms and they bear almost no resemblance to the robotic, menu-driven phone trees of a decade ago. The voice is natural. The conversation flows. The AI asks follow-up questions based on what the caller says and adapts to the direction of the conversation.</p>
<p>Here's what actually happens when a call comes in that your team can't answer: the AI picks up in your company's name, greets the caller professionally, and begins a natural intake conversation. It identifies the caller type, collects the key information your team needs: name, callback number, property address, the nature of the problem, how urgent it is. For emergency situations it can perform a live warm transfer to an on-call technician.</p>
<p>Within minutes of the call ending, a structured lead summary is delivered to your team via text or email, and the full interaction is logged to your CRM automatically. No transcription errors, no partial messages.</p>
<p>Will callers know it's AI? Some will. Some won't. In our deployments, the majority of callers complete the intake conversation without asking. What matters most to homeowners with an urgent service need isn't whether they're talking to a human or an AI — it's whether they're being heard and whether someone will call them back.</p>
<p>The alternative — voicemail — is dramatically worse by every measurable metric. Fewer than 20% of voicemails left for businesses are ever returned. When callers hit voicemail on an urgent service call, most hang up and call the next contractor on Google. <a href="/answer-my-calls" class="text-cyan-500 font-semibold hover:underline">See how it works in practice.</a></p>`,
  },
  {
    question: "What separates a contractor website that generates leads from one that just exists on the internet?",
    schemaText: "The difference is architecture — structural decisions about information hierarchy, page structure, internal linking, technical foundations, and conversion pathways. A converting site loads fast on mobile (under 3 seconds), answers three questions immediately: do you do this work, do you serve my area, how do I call you. It has dedicated pages for each core service (not one 'Services' page), location-specific pages for each city served, trust signals (reviews, photos, credentials) on every page near the call to action, and a clickable phone number everywhere.",
    answerHtml: `<p>The difference between a <a href="/contractor-website" class="text-cyan-500 font-semibold hover:underline">contractor website that generates consistent leads</a> and one that sits quietly is almost never about aesthetics. It's about architecture — the underlying structural decisions that determine whether a visitor can find what they need, trust what they see, and take action before they click away to a competitor.</p>
<p>The first thing a high-performing contractor website gets right is speed. More than 60% of local service searches happen on mobile devices. A site that takes more than three seconds to load loses roughly half its visitors before they ever see your content.</p>
<p>The second thing is information hierarchy. A homeowner landing on your site at 11 PM with a leaking roof needs to know three things within ten seconds: Do you do the work I need? Do you serve my area? How do I reach you right now? A converting website answers all three immediately — above the fold, on every page, with a phone number that's clickable.</p>
<p>The third is service page structure. One of the most common and costly mistakes contractors make is having a single "Services" page that tries to rank for every keyword simultaneously. What works is dedicated pages for each core service — each written for a specific customer searching for a specific thing, each with its own headline, trust signals, and call to action.</p>
<p>Trust architecture matters just as much as structure. Reviews belong on every service page near the call to action. Real photos convert better than stock photography. Specific claims build more trust than general ones.</p>
<p><a href="/contractor-website" class="text-cyan-500 font-semibold hover:underline">We build contractor websites</a> from the structure up, with lead generation as the primary goal. <a href="/#contact" class="text-cyan-500 font-semibold hover:underline">Let's look at what's holding it back.</a></p>`,
  },
  {
    question: "How does Google Maps optimization work, and why do some contractors dominate the three-pack while others are invisible?",
    schemaText: "Google uses three factors for local rankings: relevance (how well your Google Business Profile matches the search), distance (proximity to the searcher), and prominence (how well-known and trusted your business is online). Prominence is driven by review quantity, review rating, review recency, review response rate, website authority, and NAP consistency across all directories. Contractors with 80+ reviews consistently outperform those with 20 reviews even if closer to the searcher. Building a system that consistently generates reviews is the single highest-leverage thing most contractors can do for Maps visibility.",
    answerHtml: `<p>The Google Maps three-pack — the three local business listings that appear at the top of search results — is one of the most valuable pieces of digital real estate that exists for local service contractors. Ranking there is often more valuable than a page-one organic ranking because it appears above it.</p>
<p>Google uses three primary factors to determine who appears in the three-pack: <strong>relevance</strong>, <strong>distance</strong>, and <strong>prominence</strong>.</p>
<p>Relevance is about how well your <a href="/google-maps" class="text-cyan-500 font-semibold hover:underline">Google Business Profile</a> matches what the searcher is looking for. Your primary category should be as specific as possible. Your services list should include every type of work you do.</p>
<p>Distance is straightforward: Google uses the searcher's location to determine proximity. The closer a business is to the searcher, the better it ranks, all else being equal.</p>
<p>Prominence is the most complex factor — and the one most contractors underinvest in. The key signals are review quantity, review rating, review recency, review response rate, website authority, and the consistency of your NAP data across every place it appears online. A business with 80 reviews has a structural advantage over a business with 20 reviews, even if the 20-review business is closer.</p>
<p>If you're not ranking in the three-pack, the gap is almost always in one or more of these areas: an incomplete profile, insufficient review volume, inconsistent NAP data across directories, or a website that's too weak to support your local authority signals. <a href="/google-maps" class="text-cyan-500 font-semibold hover:underline">See how we approach Google Maps optimization</a> for contractors.</p>`,
  },
  {
    question: "What is an AI chatbot for contractors, and how is it different from the AI answering service?",
    schemaText: "The AI answering service handles inbound phone calls. The AI chatbot handles inbound website visitors who have questions but aren't ready to call. Without a chatbot, visitors who don't find their answer leave silently — no missed call notification, no record. The chatbot engages visitors, answers common questions about services, service area, pricing, and availability, and captures lead information from people who would never fill out a contact form. This is especially valuable for after-hours traffic — evenings and weekends when homeowners browse but offices are closed.",
    answerHtml: `<p>The <a href="/answer-my-calls" class="text-cyan-500 font-semibold hover:underline">AI answering service</a> handles inbound phone calls — the customers who pick up their phone and dial your number. The <a href="/ai-chatbot" class="text-cyan-500 font-semibold hover:underline">AI chatbot</a> handles inbound website visitors — the customers who land on your website and have questions but aren't ready to call. They're complementary tools that cover different points in the customer journey.</p>
<p>The reality of contractor website traffic is that a significant portion of visitors won't call. Some aren't ready. Some prefer typing to talking. Without a chatbot, those visitors read what they can find, don't get their question answered, and leave. The lead is lost silently — no missed call notification, no voicemail, no record.</p>
<p>An AI chatbot changes that dynamic. When a visitor lands on your website, the chatbot is available to engage immediately — answering questions about your services, your service area, your pricing range, your availability, and your process. It handles the most common pre-sale questions without any involvement from your team.</p>
<p>More importantly, the chatbot captures lead information from visitors who would never fill out a contact form. When someone is engaged in a conversation and asks about availability, the chatbot can naturally transition to collecting their name, phone number, and service need.</p>
<p>For after-hours traffic — evenings and weekends, which are peak browsing times for homeowners — a chatbot is particularly valuable. A homeowner whose HVAC stopped working at 9 PM on a Saturday is on Google and on websites right now. <a href="/#contact" class="text-cyan-500 font-semibold hover:underline">Let's set it up for your business.</a></p>`,
  },
  {
    question: "How do I get more 5-star Google reviews, and why does review volume matter so much for contractors?",
    schemaText: "Review volume is often the deciding factor between ranking in the Google Maps three-pack and being invisible. A business with 90 reviews at 4.7 stars converts more than a business with 12 reviews at 5.0 stars — volume signals legitimacy. The system that works: a script for technicians to ask at job close, an automated text follow-up sent within the hour with a direct review link, and responses to every review within 48 hours. The best time to ask is immediately after the job when satisfaction is highest. Direct text links that open the review form in one tap remove friction and dramatically increase completion rates.",
    answerHtml: `<p><a href="/5-star-reviews" class="text-cyan-500 font-semibold hover:underline">Google reviews</a> are the most underused growth lever most contractors have available to them right now — and the gap between the contractors who systematically generate them and those who don't is often the entire difference between ranking in the Maps three-pack and being invisible.</p>
<p>Here's why review volume matters so much: when a homeowner is choosing between three contractors in the Maps pack, they're reading the reviews. A business with 90 reviews and a 4.7-star rating will convert more clicks than a business with 12 reviews and a 5.0-star rating. The 90-review business feels established. Volume signals legitimacy in a way that a perfect score does not.</p>
<p>The contractors who consistently dominate their local Maps results treat review generation as a standard operating procedure: a specific script for technicians to deliver at job close, an automated text follow-up sent within the hour with a direct review link, and a protocol for responding to every review within 48 hours.</p>
<p>The timing of the ask matters more than most contractors realize. The best moment to request a review is when the customer expresses satisfaction — right when the job is done, before the technician leaves, while the experience is still fresh.</p>
<p>Reducing friction in the review process is equally important. A direct link that opens the Google review form in one tap removes that friction almost entirely. The text should be short, personal-sounding, and come from the technician's name or the owner's name.</p>
<p>Our <a href="/5-star-reviews" class="text-cyan-500 font-semibold hover:underline">review generation system</a> automates the consistent parts — the timing, the follow-up, the tracking — while keeping the messages feeling personal. <a href="/#contact" class="text-cyan-500 font-semibold hover:underline">Let's build that system for your business.</a></p>`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.schemaText },
      })),
    };
    const id = 'faq-page-schema';
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('script');
      el.setAttribute('type', 'application/ld+json');
      el.setAttribute('id', id);
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/30" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-3">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-5 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Everything contractors ask us before getting started — answered in full detail, without the marketing fluff.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border bg-white dark:bg-gray-900 overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-cyan-400/40 shadow-md' : 'border-gray-200 dark:border-gray-700 hover:border-cyan-400/20'
                }`}
              >
                <button
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base md:text-lg leading-snug transition-colors ${isOpen ? 'text-cyan-500' : 'text-gray-900 dark:text-white group-hover:text-cyan-500'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-cyan-400 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 group-hover:bg-cyan-50'}`}>
                    {isOpen
                      ? <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/></svg>
                      : <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                    }
                  </span>
                </button>

                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="px-6 pb-7 pt-1 border-t border-gray-100 dark:border-gray-700">
                    <div
                      className="prose prose-sm max-w-none text-gray-500 dark:text-gray-400 text-[15px] space-y-4 [&_p]:leading-relaxed [&_a]:text-cyan-500 [&_a]:font-semibold [&_a:hover]:underline"
                      dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center p-8 rounded-2xl bg-gray-900 dark:bg-gray-800 text-white">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Every contractor's situation is different. Let's talk through yours — no pitch, just a straight conversation about what's working and what isn't.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
