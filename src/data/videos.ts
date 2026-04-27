export interface Video {
  slug: string;
  /** YouTube video ID */
  youtubeId: string;
  title: string;
  /** Short description for cards / meta */
  description: string;
  /** Full description shown on the watch page */
  longDescription: string;
  category: string;
  /** ISO 8601 date string for VideoObject schema (e.g. "2025-03-10") */
  uploadDate: string;
  /** ISO 8601 duration for VideoObject schema (e.g. "PT5M30S" = 5 min 30 sec) */
  duration: string;
  /** Human-readable duration for display (e.g. "5:30") */
  durationDisplay: string;
  tags: string[];
  /**
   * Optional scheduled publish date/time (ISO 8601, e.g. "2025-08-01T09:00:00").
   * If set, the video is hidden until this date/time has passed.
   */
  publishDate?: string;
}

/** Returns true if the video should be visible right now */
export function isVideoLive(v: Video): boolean {
  if (v.publishDate) return new Date() >= new Date(v.publishDate);
  return true;
}

export const videos: Video[] = [
  {
    slug: "stab-framework-google-ads-optimization",
    youtubeId: "AYS75avOWdQ",
    title: "The S T A B Framework for Google Ads Optimization",
    description:
      "Are you paying Google just to lose money? The secret to scaling isn't in the AI — it's in the STAB Framework: Spend, Targeting, Auto/Ads, and Bidding. Learn the exact sequence to stop the bleeding and manufacture profit.",
    longDescription: `Are you paying Google just to lose money? Most advertisers treat Google Ads like a "black box," but the secret to scaling isn't in the AI — it's in the STAB Framework.

In this deep dive, Bob Rutledge breaks down the exact sequence you need to follow to stop the bleeding and manufacture profit: Spend, Targeting, Auto/Ads, and Bidding. We move past the "lumping" mistakes that kill most accounts and look at the actual math of how to win the auction without being the highest bidder.

**The STAB Framework Sequence:**
• S – Spend & Segmentation: Stop lumping products. Isolate your winners.
• T – Targeting: Keywords vs. Search Terms. Building a defensive perimeter.
• A – Ads & Landing Pages: The bridge and the destination.
• B – Bidding: The accelerator pedal. Only touch this once the foundation is solid.

**Chapter Timestamps:**
0:00 | Stop Bleeding Cash: The Google Ads Reality Check
1:01 | The STAB Framework: A Sequential Order of Operations
2:52 | Pillar 1 (S): Spending & The Dangers of "Lumping"
7:16 | The Quick-Win Math: Manufacturing Profit
9:22 | Pillar 2 (T): Targeting & Contextual Protection
11:26 | Negative Keywords & Competitor Traps
13:32 | Mastering PMAX: Audience Signals & The Bloodhound Analogy
15:16 | The Trap of Over-Excluding
16:42 | Observation Audiences: Data-Driven Surveillance
17:50 | Pillar 3 (A): Ads, Landing Pages, & The Bridge to Conversion
21:12 | Killing Your Darlings: Creative Darwinism
22:23 | The Secret Math of Ad Rank & Quality Score
25:08 | The Mystery Solved: High Clicks, Zero Sales
26:39 | Pillar 4 (B): Bidding & The Accelerator Pedal
28:45 | Scaling with Target ROAS: The Efficiency Trap
31:34 | The Golden Rule: Stop Overtinkering
32:54 | Practical Implementation: The Optimization Checklist
36:34 | Conclusion: Human Strategy in the Age of AI`,
    category: "Google Ads",
    uploadDate: "2025-07-22",
    duration: "PT37M34S",
    durationDisplay: "37:34",
    tags: [
      "google ads",
      "ppc optimization",
      "stab framework",
      "google ads strategy",
      "bidding strategy",
      "quality score",
      "pmax",
      "ad rank",
      "roas",
      "contractor marketing",
    ],
  },
  {
    slug: "use-ai-to-verify-indexing-in-search-engines",
    youtubeId: "D6hOeoG8cmE",
    title: "Use AI to Verify Indexing in Search Engines",
    description:
      "Tired of paying for expensive SEO software just to check if Google knows your website exists? Learn how to use Google Gemini — for free — to audit your site's indexing status, verify metadata, and confirm your schema is working.",
    longDescription: `Are you tired of paying for "crazy expensive" SEO software just to see if Google actually knows your website exists? In this video, we break down how AI is changing the web development game — not by making it cheaper, but by making it possible to deliver way more content at scale.

We dive into a quick, free "hack" using Google Gemini to audit your site's indexing status, verify your metadata, and ensure your schema is working correctly. Whether you're building local landing pages or managing a blog, this method gives you instant peace of mind without the monthly subscription fee.

Topics covered:
• The AI Content Shift: Why AI isn't lowering website prices, but increasing the value and volume of what you can provide
• Indexing 101: A refresher on using Sitemaps (XML) and Google Search Console to get your pages noticed
• The Gemini Shortcut: How to use simple prompts to check if a page is "index-allowed" and see what snippets Google is pulling
• Search Console & Bing: Why you shouldn't ignore the 20% of traffic coming from Bing and how to verify your site across platforms

Key Takeaways:
• "I don't sell websites cheaper now because of AI — I give my clients a lot more website."
• Prompting Tip: Sometimes keeping your prompts "wide open" is better. Just ask, "Is indexing allowed? [URL]" and let the AI tell you what it sees.
• The Checklist: Submit your sitemap.xml to Google Search Console, submit individual pages for faster indexing, and verify your site on Bing Webmaster Tools to capture that extra 20% of search traffic.

If you're struggling to get your local business to show up in search results, start here. You might just find that your site isn't "bad" — it's just not indexed!`,
    category: "AI & Automation",
    uploadDate: "2025-07-01",
    duration: "PT8M30S",
    durationDisplay: "8:30",
    tags: [
      "seo",
      "google indexing",
      "ai seo",
      "google gemini",
      "search console",
      "bing webmaster",
      "local seo",
      "contractor marketing",
      "website indexing",
    ],
  },
  {
    slug: "beat-your-competitors-on-google-video-indexing",
    youtubeId: "kjXPaHsvDWw",
    title: "Beat Your Competitors on Google: The Secret to Video Indexing for Small Business",
    description:
      "Are you struggling to get your website's videos showing up in Google Search? Learn the technical SEO strategy most small businesses overlook — Google Video Watch Pages — and how AI can help you build them fast.",
    longDescription: `Are you struggling to get your website's videos showing up in Google Search results? In this video, I'm diving deep into a specific technical SEO strategy that most small businesses overlook: Google Video Watch Pages.

Most of us just embed a YouTube video into a blog post and hope for the best. But Google has specific rules for how they prioritize video indexing. I'll show you how I used a new AI-powered website builder called Zite to automatically create dedicated "Watch Pages" that meet Google's strict requirements for rich search results.

In this video, you'll learn:
• The difference between a support element video and a "Watch Page."
• Why Google prefers dedicated pages where the video is the primary focus.
• How to use AI to generate schema markup, metadata, and video sitemaps.
• A real-time look at building a fully optimized video page from scratch.

Stop letting your competitors outrank you just because they have a bigger budget. With AI and the right indexing strategy, your small business can take the lead!

Tool Mentioned: Zite (AI Website Builder)

Chapters:
0:00 The struggle with Google Video Indexing
0:45 Introducing Zite: Using AI for SEO
1:18 What is a Google "Watch Page"? (The Rules)
2:11 Why embeds in blog posts aren't enough
2:40 Essential elements: Schema, Metadata, and Sitemaps
3:50 Running the AI prompt to build a template
5:15 Reviewing the AI-generated video grid & sample pages
6:20 Generating a Video Sitemap
7:00 Creating a dedicated Watch Page for a live YouTube link
7:43 Final Results: Chapters, Tags, and Key Takeaways
8:40 How small businesses can beat the "big guys" with AI

SEO Tip: Make sure to include the link to your new "Videos" section in your website's footer to help Google find these new Watch Pages even faster!`,
    category: "SEO & Video Marketing",
    uploadDate: "2025-07-15",
    duration: "PT8M40S",
    durationDisplay: "8:40",
    tags: [
      "video indexing",
      "seo",
      "google search",
      "video watch pages",
      "schema markup",
      "video sitemap",
      "small business seo",
      "ai seo",
      "technical seo",
    ],
    publishDate: "2025-04-16T12:00:00",
  },
];

export const publishedVideos = videos.filter(isVideoLive);

export function getVideo(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug && isVideoLive(v));
}

export function getRelatedVideos(currentSlug: string, count = 3): Video[] {
  return publishedVideos.filter((v) => v.slug !== currentSlug).slice(0, count);
}
