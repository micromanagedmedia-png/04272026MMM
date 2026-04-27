const fs = require('fs');
const path = require('path');

const filesToCreate = {
  "src/components/ClientBar.astro": `---
const logos = [
  {
    name: 'R.S. Andrews',
    src: 'https://images.fillout.com/orgid-30300/flowpublicid-f4gvodhkuc/widgetid-default/sunKo2ei6JJKs9kNfFtp7Y/pasted-image-1775595367367.jpg',
  },
  {
    name: 'Anchor Air LLC',
    src: 'https://images.fillout.com/orgid-30300/flowpublicid-f4gvodhkuc/widgetid-default/dHEMQ8UreY78R5f2PbXgGR/pasted-image-1775595833560.jpg',
  },
  {
    name: 'Seal HVAC',
    src: 'https://images.fillout.com/orgid-30300/flowpublicid-f4gvodhkuc/widgetid-default/cekydfjBpwdkqtEcHyvBGv/pasted-image-1775593260319.png',
  },
  {
    name: 'Suncoast Blinds & Shutters',
    src: 'https://images.fillout.com/orgid-30300/flowpublicid-f4gvodhkuc/widgetid-default/bf7umvNj1UvgsBn6r1BhXj/pasted-image-1775594544677.jpeg',
  },
];

// Duplicate 6x for seamless infinite scroll
const repeated = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
---

<section class="py-12 bg-gray-100 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-700 overflow-hidden">
  <div class="container mx-auto px-6 mb-8 text-center">
    <p class="text-gray-400 text-sm uppercase tracking-widest font-medium">
      Trusted by local service businesses
    </p>
  </div>

  <!-- Marquee wrapper -->
  <div class="relative">
    <!-- Bottom layer: grayscale -->
    <div class="flex gap-16 animate-marquee whitespace-nowrap items-center">
      {repeated.map((logo, i) => (
        <div class="inline-flex items-center justify-center shrink-0 grayscale opacity-40 transition-all duration-300">
          <img src={logo.src} alt={logo.name} class="h-12 max-w-[160px] object-contain" loading="lazy" />
        </div>
      ))}
    </div>

    <!-- Top layer: full color, masked to center spotlight -->
    <div
      class="absolute inset-0 overflow-hidden"
      style="mask-image: linear-gradient(to right, transparent 0%, transparent 25%, black 38%, black 62%, transparent 75%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 25%, black 38%, black 62%, transparent 75%, transparent 100%);"
    >
      <div class="flex gap-16 animate-marquee whitespace-nowrap items-center">
        {repeated.map((logo, i) => (
          <div class="inline-flex items-center justify-center shrink-0">
            <img src={logo.src} alt={logo.name} class="h-12 max-w-[160px] object-contain" loading="lazy" />
          </div>
        ))}
      </div>
    </div>

    <!-- Edge fades -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent"></div>
  </div>
</section>`,
  "src/components/Services.astro": `---
const services = [
  {
    title: 'PPC Advertising for Contractors',
    desc: 'Manually optimized Google Ads campaigns built for contractors. Tight keyword control, buyer-intent targeting, and geo-precision that fills your schedule with profitable jobs.',
    tag: 'Featured',
    href: '/get-more-leads',
    icon: 'trending-up',
  },
  {
    title: 'Lead Generation & Tracking',
    desc: "Know exactly which ads, keywords, and channels are producing calls and leads. Our LeadTable™ system gives you full visibility so you can cut waste and double down on what works.",
    tag: 'Featured',
    href: '/track-calls-leads',
    icon: 'bar-chart',
  },
  {
    title: 'AI Answering Service for Contractors',
    desc: 'A custom AI receptionist that answers every inbound call — day, night, weekends. Greets callers professionally, captures lead details, screens spam, and warm-transfers hot leads to your team.',
    tag: 'Featured',
    href: '/answer-my-calls',
    icon: 'phone',
  },
  {
    title: 'AI Integration for Contractors',
    desc: 'A smart chatbot that engages website visitors after hours, answers questions, and captures name, phone, service, and details — so no lead ever slips through the cracks.',
    tag: 'Featured',
    href: '/ai-chatbot',
    icon: 'bot',
  },
  {
    title: 'Build My Contractor Website',
    desc: 'High-converting contractor websites built mobile-first and designed specifically for PPC traffic. Fast-loading, clear calls to action, built to turn visitors into booked jobs.',
    tag: null,
    href: '/contractor-website',
    icon: 'globe',
  },
  {
    title: 'Improve My Google Maps Presence',
    desc: 'Get your business showing up higher in Google Maps results. We optimize your Google Business Profile so local searchers find you first — before your competitors.',
    tag: null,
    href: '/google-maps',
    icon: 'map-pin',
  },
  {
    title: 'Get More 5-Star Reviews',
    desc: 'A proven system to consistently generate 5-star Google reviews from happy customers — building credibility, improving local rankings, and winning more jobs automatically.',
    tag: null,
    href: '/5-star-reviews',
    icon: 'star',
  },
];

// SVG paths keyed by icon name
const icons: Record<string, string> = {
  'trending-up': 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
  'bar-chart': 'M18 20V10M12 20V4M6 20v-6',
  'phone': 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z',
  'bot': 'M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2zM2 10h20v10a2 2 0 01-2 2H4a2 2 0 01-2-2V10zM7 14v2M12 14v2M17 14v2',
  'globe': 'M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0c-2.76 3.63-4 7.27-4 10s1.24 6.37 4 10m0-20c2.76 3.63 4 7.27 4 10s-1.24 6.37-4 10M2.05 12H22',
  'map-pin': 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z',
  'star': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
};
---

<section id="services" class="py-28 bg-gray-50 dark:bg-gray-900/30">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <span class="text-cyan-500 text-sm font-semibold uppercase tracking-widest">What We Build</span>
      <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-3 mb-4 tracking-tight">
        A Complete <span class="text-blue-900 dark:text-blue-400">Lead Generation System</span>
      </h2>
      <p class="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
        Every service is engineered around a single outcome: your phone ringing with qualified, ready-to-book contractors.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <a
          href={s.href}
          class="group bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-700 hover:border-cyan-400/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col h-full"
        >
          {s.tag && (
            <span class="absolute top-4 right-4 bg-cyan-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
              {s.tag}
            </span>
          )}
          <div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-5 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20 transition-colors">
            <svg class="w-6 h-6 text-blue-900 dark:text-blue-400 group-hover:text-cyan-500 transition-colors" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d={icons[s.icon]} />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{s.desc}</p>
          <div class="mt-5 flex items-center gap-1 text-cyan-500 text-sm font-semibold">
            Learn more <span class="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>`,
  "src/components/Process.astro": `---
const steps = [
  {
    number: '01',
    title: 'Audit & Strategy',
    desc: "Bob personally reviews your current ads, website, and call handling. Every assumption is tested, every budget dollar accounted for before we touch anything.",
    // Search icon path
    iconPath: 'M11 17a6 6 0 100-12 6 6 0 000 12zm7 0l4 4',
  },
  {
    number: '02',
    title: 'Build the System',
    desc: "We set up your PPC campaigns, landing pages, LeadTable™ call tracking, and Airtable CRM — a complete lead generation stack built around your trade and service area.",
    iconPath: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
  },
  {
    number: '03',
    title: 'Launch & Capture',
    desc: "Campaigns go live with manual bidding controls in place. Gracie™ answers calls 24/7, qualifies leads, and logs every inquiry automatically — so nothing gets missed.",
    iconPath: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z',
  },
  {
    number: '04',
    title: 'Optimize for Booked Jobs',
    desc: "We review your calls, cost per lead, and booked job rate weekly. If calls aren't converting to revenue, we find the gap and fix it — fast.",
    iconPath: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z',
  },
];
---

<section id="process" class="py-28 bg-white dark:bg-gray-950">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <span class="text-cyan-500 text-sm font-semibold uppercase tracking-widest">How It Works</span>
      <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-3 mb-4 tracking-tight">
        From Zero to <span class="text-blue-900 dark:text-blue-400">Ringing Phone</span>
      </h2>
      <p class="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
        A proven four-step process that builds your lead generation system from the ground up — with no wasted time and no wasted spend.
      </p>
    </div>

    <div class="relative">
      <!-- Connecting line (desktop only) -->
      <div class="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div class="relative flex flex-col items-center text-center group">
            <!-- Icon circle -->
            <div class="relative mb-6 w-28 h-28 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 group-hover:border-cyan-400/50 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/10 transition-all duration-300 shadow-sm">
              <svg class="w-8 h-8 text-blue-900 dark:text-blue-400 group-hover:text-cyan-500 transition-colors" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d={step.iconPath} />
              </svg>
              <span class="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-900 dark:bg-blue-600 text-white text-xs font-black flex items-center justify-center shadow">
                {parseInt(step.number)}
              </span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>`,
  "src/components/About.astro": `---
const pillars = [
  'Manual campaign optimization — no "smart bidding" shortcuts',
  'Results measured in calls, booked jobs, and revenue',
  'Lean, effective systems built for small teams',
  'Geographic targeting down to zip code and service area',
  '25+ years of hands-on paid search experience',
  'Contracts you can cancel — no lock-in, ever',
];
---

<section id="about" class="py-28 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="container mx-auto px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-center">

      <!-- Visual side -->
      <div class="relative">
        <div class="relative rounded-3xl overflow-hidden aspect-[4/3] bg-blue-900 shadow-2xl">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-900 to-cyan-600/80"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white p-10">
              <div class="text-6xl font-black mb-3 tracking-tight">Bob<br/>Rutledge</div>
              <div class="text-white/60 text-sm uppercase tracking-widest font-medium">Founder · Micromanaged Media, Inc.</div>
              <div class="mt-6 flex justify-center gap-3 flex-wrap">
                {['PPC Strategist', 'Systems Builder', '25+ Years'].map((tag) => (
                  <span class="bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <!-- Floating credential card -->
          <div class="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <div class="text-white font-semibold text-sm">
                <a href="https://ads.google.com/intl/en_us/home/tools/partner-badge/" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-200 transition-colors underline underline-offset-2 decoration-white/30">Google Ads Partner</a>
                <span class="text-white/50 mx-1">&amp;</span>
                <a href="https://about.ads.microsoft.com/en-us/solutions/microsoft-advertising-partners" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-200 transition-colors underline underline-offset-2 decoration-white/30">Microsoft Advertising Partner</a>
              </div>
              <div class="text-white/50 text-xs mt-0.5">Verified expertise — Google Ads since its first year</div>
            </div>
          </div>
        </div>

        <!-- Accent badge -->
        <div class="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400 rounded-2xl flex items-center justify-center shadow-xl rotate-6">
          <div class="text-center -rotate-6">
            <div class="text-white font-black text-xl">25+</div>
            <div class="text-white/80 text-xs leading-tight">Years<br/>Expert</div>
          </div>
        </div>
      </div>

      <!-- Content side -->
      <div>
        <span class="text-cyan-500 text-sm font-semibold uppercase tracking-widest">About the Founder</span>
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-3 mb-5 tracking-tight leading-tight">
          Built by a Contractor<br />Marketing <span class="text-blue-900 dark:text-blue-400">Specialist</span>
        </h2>
        <p class="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-4">
          Bob Rutledge founded Micromanaged Media, Inc. after 25+ years of hands-on paid advertising experience — starting long before Google Ads became mainstream. He built his expertise managing campaigns the hard way: manually, methodically, and obsessively focused on one thing — the phone ringing.
        </p>
        <p class="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          Today, MicroManaged Media is not a general marketing agency. It's a lead generation system builder exclusively for local service contractors — HVAC, plumbing, roofing, electrical, fencing, and home renovation businesses who need more calls, more booked jobs, and more revenue.
        </p>
        <p class="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
          Bob's philosophy is simple: contractors don't need marketing theory. They need a phone that rings with qualified buyers — and a system that captures every call that comes in, day or night. That's what we build.
        </p>

        <div class="grid sm:grid-cols-2 gap-3 mb-10">
          {pillars.map((p) => (
            <div class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-gray-700 dark:text-gray-300">{p}</span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          class="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
        >
          Work With Bob →
        </a>
      </div>
    </div>
  </div>
</section>`,
  "src/components/CTABanner.astro": `---
const BOOK_URL = 'https://calendar.app.google/RUTjw3N7Afe95Tkk8';
---

<section class="py-20 bg-[#0a1628] overflow-hidden relative">
  <div
    class="absolute inset-0 opacity-5"
    style="background-image: radial-gradient(ellipse at 20% 50%, hsl(196 94% 40%) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, hsl(196 94% 40%) 0%, transparent 60%);"
  ></div>
  <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
  <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="max-w-3xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
        <svg class="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        Free Lead Gen Audit — No Obligation
      </div>

      <h2 class="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
        If Calls Are Being Missed,<br /><span class="text-cyan-400">They Get Captured.</span>
      </h2>
      <p class="text-white/70 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
        Book a free strategy call with Bob Rutledge. He'll review your current campaigns, your website, and your call handling — and show you exactly where leads are leaking out of your pipeline.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-bold px-10 py-4 rounded-full text-base shadow-lg transition-colors"
        >
          Book a Time to Talk
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
        <a
          href="tel:+12517650333"
          class="inline-flex items-center justify-center gap-2 text-white border border-white/30 hover:bg-white/10 rounded-full px-10 py-4 text-base font-semibold transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          +1 (251) 765-0333
        </a>
      </div>

      <div class="flex flex-wrap justify-center gap-6 mt-10 text-white/40 text-xs uppercase tracking-widest">
        <span>✓ No long-term contracts</span>
        <span>✓ 25+ years PPC experience</span>
        <span>✓ Built exclusively for contractors</span>
      </div>
    </div>
  </div>
</section>`,
  "src/components/FeaturedVideo.astro": `---
const VIDEO_SLUG = 'stab-framework-google-ads-optimization';
const YOUTUBE_ID = 'AYS75avOWdQ';
---

<section class="py-24 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-200 dark:border-gray-700">
  <div class="container mx-auto px-6">

    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
      <div>
        <span class="text-cyan-500 text-sm font-semibold uppercase tracking-widest block mb-3">Latest Video</span>
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
          Watch &amp; <span class="text-blue-900 dark:text-blue-400">Learn</span>
        </h2>
      </div>
      <a
        href="/videos"
        class="inline-flex items-center gap-2 text-cyan-500 font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
      >
        View all videos
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <!-- Featured card -->
    <a
      href={\`/videos/\${VIDEO_SLUG}\`}
      class="group grid md:grid-cols-2 gap-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-cyan-400/40 hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300"
    >
      <!-- Thumbnail -->
      <div class="relative aspect-video md:aspect-auto overflow-hidden bg-gray-900">
        <img
          src={\`https://img.youtube.com/vi/\${YOUTUBE_ID}/maxresdefault.jpg\`}
          alt="The S T A B Framework for Google Ads Optimization"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <!-- Play overlay -->
        <div class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
          <div class="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-white fill-white ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <!-- YouTube badge -->
        <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          <svg class="w-3.5 h-3.5 text-red-500 fill-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          YouTube
        </div>
        <!-- Duration badge -->
        <div class="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded">
          37:34
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col justify-center p-8 md:p-10">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 w-fit mb-5">
          Google Ads
        </span>
        <h3 class="text-2xl md:text-3xl font-black text-gray-900 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors tracking-tight leading-tight mb-4">
          The S T A B Framework for Google Ads Optimization
        </h3>
        <p class="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
          Are you paying Google just to lose money? The secret to scaling isn't in the AI — it's in the STAB Framework: Spend, Targeting, Auto/Ads, and Bidding. Learn the exact sequence to stop the bleeding and manufacture profit.
        </p>
        <span class="inline-flex items-center gap-2 text-cyan-500 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
          Watch Now
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </a>

  </div>
</section>`,
  "src/components/BlogPreview.astro": `---
import { blogPosts } from '../data/blogPosts';

const categoryColors: Record<string, string> = {
  'Lead Generation': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
  'Call Tracking': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
  'Google Maps': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
  'Reviews': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
  'AI & Automation': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
};

const featured = blogPosts.slice(0, 3);
---

<section class="py-24 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-700">
  <div class="container mx-auto px-6">

    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
      <div>
        <span class="text-cyan-500 text-sm font-semibold uppercase tracking-widest block mb-3">Contractor Marketing Insights</span>
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
          Latest from the <span class="text-blue-900 dark:text-blue-400">Blog</span>
        </h2>
      </div>
      <a
        href="/blog"
        class="inline-flex items-center gap-2 text-cyan-500 font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
      >
        View all posts
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-6">
      {featured.map((post) => {
        const colorClass = categoryColors[post.category] ?? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300';
        return (
          <a
            href={\`/blog/\${post.slug}\`}
            class="group flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-cyan-400/40 hover:shadow-lg rounded-2xl p-7 transition-all duration-300"
          >
            <!-- Category + read time -->
            <div class="flex items-center justify-between mb-5">
              <span class={\`text-xs font-bold px-3 py-1 rounded-full \${colorClass}\`}>
                {post.category}
              </span>
              <span class="flex items-center gap-1 text-gray-400 text-xs">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {post.readTime}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-lg font-black text-gray-900 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors tracking-tight leading-snug mb-3 flex-1">
              {post.title}
            </h3>

            <!-- Excerpt -->
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
              {post.excerpt}
            </p>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
              <span class="text-gray-400 text-xs">{post.date}</span>
              <span class="flex items-center gap-1 text-cyan-500 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                Read
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </a>
        );
      })}
    </div>

    <!-- Bottom CTA -->
    <div class="text-center mt-10">
      <a
        href="/blog"
        class="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full transition-colors"
      >
        See All Articles
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>`
};

for (const [filename, content] of Object.entries(filesToCreate)) {
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(filename, content);
  console.log('Created:', filename);
}
