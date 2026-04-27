export interface Trade {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  heroDescription: string;
  painPoints: { title: string; desc: string }[];
  services: { name: string; desc: string }[];
  stats: { value: string; label: string }[];
  keywords: string[];
  ctaHeading: string;
  seoBody: { heading: string; body: string }[];
}

export const trades: Trade[] = [
  {
    slug: 'hvac',
    name: 'HVAC Companies',
    shortName: 'HVAC',
    tagline: 'When the AC dies or the heat goes out, we make sure they call you. Emergency-intent PPC and lead generation for HVAC contractors.',
    heroDescription: 'The HVAC industry runs on seasonality and urgency. You don\'t want clicks; you want phone calls from homeowners with immediate needs. We structure HVAC campaigns to capture high-intent searches ("emergency ac repair", "furnace replacement setup") while ruthlessly excluding price shoppers. Between your PPC, an optimized Google Business Profile, and Missed Call Text Back acting as a safety net, you stop losing emergency jobs to the competition.',
    painPoints: [
      { title: 'Wasted spend on low-intent keywords', desc: 'Too many agencies bid on "HVAC" globally, wasting your budget on people looking for DIY repair tips instead of actual service.' },
      { title: 'Missed calls during field hours', desc: 'In peak season, when your techs are slammed, you miss calls. Without an AI system to engage them, those callers dial the next name on Google.' },
      { title: 'Seasonal revenue gaps', desc: 'Getting leads is easy in July and January. We build strategies (like maintenance plan promotions) to keep your schedule full during the shoulder seasons.' },
      { title: 'Drowning in lead vendors', desc: 'Stop sharing leads with three other contractors on HomeAdvisor or Angi. We generate exclusive leads meant only for your business.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Tight, geo-fenced campaigns targeting emergency repairs and high-ticket replacements with zero budget waste.' },
      { name: 'Call Tracking', desc: 'Know exactly which keywords and ads are generating the $15k install jobs vs. the $99 service calls.' },
      { name: 'Google Maps', desc: 'Dominate the local 3-pack so you appear first when a homeowner searches "ac repair near me" in a panic.' },
      { name: 'AI Automation', desc: 'Deploy Missed Call Text Back and an AI answering service so a missed phone call never equals a missed job.' },
    ],
    stats: [
      { value: '40%', label: 'Lower Cost Per Lead' },
      { value: '25+', label: 'Years Experience' },
      { value: '24/7', label: 'Lead Capture' },
      { value: '100%', label: 'Exclusive Leads' },
    ],
    keywords: ['HVAC marketing', 'PPC for HVAC', 'HVAC lead generation', 'AC repair advertising', 'HVAC SEO'],
    ctaHeading: 'Dominate Your Local HVAC Market',
    seoBody: [
      { heading: 'Why HVAC Marketing Fails Most Contractors', body: 'Most general marketing agencies fail HVAC contractors because they don\'t understand the buying timeline. When an AC unit breaks in August, the homeowner isn\'t researching; they are clicking the first phone number they see. Your ads need to reflect that urgency. If your landing page doesn\'t load in under 2 seconds, or if the phone number isn\'t instantly clickable, the lead is gone.' },
      { heading: 'The Shift to High-Ticket Installs', body: 'Service calls pay the bills, but installs build the business. We optimize your Bidding and Targeting (the "T" and "B" in our STAB Framework) to actively pursue replacement searches ("new ac unit quote", "hvac installation estimates") while suppressing low-tier maintenance searches if your schedule is too full.' },
    ],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing Companies',
    shortName: 'Plumbing',
    tagline: 'Emergency calls routed directly to your crew. Cut your cost per lead and dominate local plumbing searches.',
    heroDescription: 'Plumbing is the ultimate real-time response industry. The longer a customer with a water leak has to wait, the more likely they are to call someone else. We build plumbing lead generation systems focused entirely on speed and visibility. By combining hyper-targeted Google Ads, Local Services Ads (LSA) optimization, and instant AI follow-ups, we ensure that when a pipe bursts, your phone is the one that rings.',
    painPoints: [
      { title: 'The race to the phone', desc: 'If they leave a voicemail, they\'re already calling the next plumber. If you don\'t answer instantly, you lose the job.' },
      { title: 'Wasted clicks on parts & DIY', desc: 'Paying for clicks on "how to fix a running toilet" or "plumbing supply store near me" drains your budget fast.' },
      { title: 'Poor Google Maps ranking', desc: 'Plumbing searches are hyper-local. If you aren\'t in the top 3 Map results, you are missing 60% of the market.' },
      { title: 'No tracking on emergency calls', desc: 'You know the phone rings, but you have no idea which ad or keyword actually generated the high-value commercial repipe.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Targeting high-urgency keywords (emergency, leak, burst pipe) and filtering out DIY searchers to protect your budget.' },
      { name: 'Call Tracking', desc: 'We trace every inbound emergency call to the exact source so you know where you ROI originates.' },
      { name: 'Website Design', desc: 'Fast-loading, mobile-optimized sites built for frantic homeowners who need to click-to-call instantly.' },
      { name: 'AI Automation', desc: 'No more lost emergency jobs tracking down technicians. Chatbots and auto-texting engage the lead instantly.' },
    ],
    stats: [
      { value: '3x', label: 'More Connected Calls' },
      { value: '100%', label: 'Search Visibility' },
      { value: '0', label: 'Wasted DIY Clicks' },
      { value: '24/7', label: 'Lead Intake' },
    ],
    keywords: ['Plumber SEO', 'Plumbing PPC', 'Marketing for plumbers', 'Plumbing leads', 'Local Services Ads plumbers'],
    ctaHeading: 'Stop Losing Emergency Plumbing Calls',
    seoBody: [
      { heading: 'The Speed of Plumbing Leads', body: 'In plumbing marketing, speed to lead isn\'t a metric; it\'s the only metric. We structure campaigns to favor mobile devices and prioritize click-to-call extensions heavily. Furthermore, we implement backend systems like Missed Call Text Back that instantly engage a prospect if your dispatcher is tied up on another line with an emergency.' },
      { heading: 'Targeting High-Value Services', body: 'While drain cleaning keeps the vans moving, services like water heater replacement, sewer line repair, and commercial plumbing drive serious revenue. We separate these campaigns entirely, applying different budget allocations and bidding strategies to ensure you are highly competitive for the jobs that actually matter to your bottom line.' },
    ],
  },
  {
    slug: 'roofing',
    name: 'Roofing Companies',
    shortName: 'Roofing',
    tagline: 'High-ticket roof replacement and repair leads. Be the first contractor they see when the storm clears.',
    heroDescription: 'The roofing business is cutthroat. Average lead costs are sky-high, and if you aren\'t positioned correctly, you\'ll burn through thousands of dollars on low-quality "roof repair" clicks. We build high-converting roofing campaigns focused on high-ticket replacements and storm damage. We deploy specific localized landing pages with heavy trust signals to convert highly skeptical homeowners.',
    painPoints: [
      { title: 'Exorbitant Cost-Per-Click', desc: 'Roofing keywords are expensive. If your landing page doesn\'t convert those clicks into calls at a high rate, you bleed cash.' },
      { title: 'Storm Chaser Competition', desc: 'When severe weather hits, out-of-town companies flood the market, driving bid prices up and drowning out local SEO.' },
      { title: 'Trust and Credibility', desc: 'Homeowners are extremely cautious about hiring a roofer. If your reviews and website look weak, they bounce.' },
      { title: 'Long Sales Cycles', desc: 'A roof replacement isn\'t an impulse buy. You need systems to nurture and follow up with a lead over several weeks.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Granular, hyper-local campaigns prioritizing full roof replacements and immediate repair inquiries over vague informational searches.' },
      { name: 'Website Design', desc: 'Landing pages packed with local trust signals, before/after galleries, and simplified intake forms.' },
      { name: 'CRM Integration', desc: 'We pipe leads directly into Airtable or your custom CRM so your sales team can track follow-ups and inspections seamlessly.' },
      { name: 'Reviews & Reputation', desc: 'Automated review generation to build the massive social proof required to win a $20,000 roofing contract.' },
    ],
    stats: [
      { value: '3x', label: 'Higher Conversion Rate' },
      { value: 'Geo', label: 'Targeted Campaigns' },
      { value: '100%', label: 'Lead Exclusivity' },
      { value: 'A+', label: 'Trust Signals' },
    ],
    keywords: ['Roofing leads', 'Roofing marketing', 'Roofing PPC', 'Marketing for roofers', 'Roofing SEO'],
    ctaHeading: 'Scale Your Roofing Business Today',
    seoBody: [
      { heading: 'Beating the Storm Chasers', body: 'Local roofing companies have a distinct advantage: permanence. We leverage this in your digital marketing by leaning heavily into your Google Business Profile, localized schema markup, and long-standing review history to outrank temporary operators when severe weather creates sudden demand spikes.' },
      { heading: 'The Economics of Roofing PPC', body: 'When a single click costs $40, conversion rate optimization isn\'t optional. We never send paid traffic to a generic homepage. Every dollar is routed to a specialized landing page (e.g., Metal Roofing, Hail Damage, Asphalt Replacement) designed to do exactly one thing: get the homeowner to schedule an inspection.' },
    ],
  },
  {
    slug: 'electricians',
    name: 'Electrical Contractors',
    shortName: 'Electrical',
    tagline: 'Connect with homeowners and commercial property managers who need a trusted electrician right now.',
    heroDescription: 'From emergency panel upgrades to massive commercial build-outs, electrical work spans a massive spectrum. Your marketing needs to reflect the type of jobs your crews are best equipped to handle. We build segmented campaigns that separate emergency residential calls from long-cycle commercial bidding, ensuring your marketing dollars align with your operational capacity.',
    painPoints: [
      { title: 'Unqualified service calls', desc: 'Wasting ad spend on low-value calls like swapping a single lightbulb when you need panel upgrades.' },
      { title: 'B2B commercial visibility', desc: 'General contractors and property managers use different search habits than homeowners; typical ads miss them.' },
      { title: 'Off-hours emergencies', desc: 'Electrical emergencies often happen at 9 PM. If your phone rings to voicemail, you lose the high-margin job.' },
      { title: 'Weak local SEO', desc: 'Ranking below the massive franchised electrical companies in the Maps 3-pack.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Precision campaigns tiered by job value—capturing emergency calls while bidding separately for EV chargers and panel swaps.' },
      { name: 'Bing PPC', desc: 'Tap into the often-ignored Bing network, which has an older, affluent demographic highly likely to own homes.' },
      { name: 'Call Tracking', desc: 'Separate phone numbers for commercial vs residential campaigns to directly measure ROI on both.' },
      { name: 'AI Automation', desc: 'After-hours AI chatbots and missed call text back ensure overnight emergencies are instantly triaged.' },
    ],
    stats: [
      { value: '24/7', label: 'Response Capability' },
      { value: 'B2B', label: 'Commercial Routing' },
      { value: '100%', label: 'Trackable Data' },
      { value: 'Top 3', label: 'Maps Visibility' },
    ],
    keywords: ['Electrician leads', 'Electrician marketing', 'PPC for electricians', 'Electrical contractor SEO'],
    ctaHeading: 'Wire Your Business For Growth',
    seoBody: [
      { heading: 'Targeting High-Ticket Electrical Jobs', body: 'Changing an outlet won\'t scale your business. We focus your Google Ads budget heavily on search clusters related to EV charger installations, full electrical panel upgrades, whole-home rewiring, and commercial electrical contracts. We actively use negative keywords to block searches for DIY instructions and minor handyman work.' },
      { heading: 'The Power of the Local Maps Pack', body: 'When someone smells burning plastic near an outlet, they search "emergency electrician" and click the map. We optimize your Google Business Profile with constant review generation, updated service menus, and hyper-local optimization to ensure you own that digital real estate in your service radius.' },
    ],
  },

  {
    slug: 'fence-contractors',
    name: 'Fence Contractors',
    shortName: 'Fencing',
    tagline: 'Stop competing on price with handymen. Put your business in front of customers ready to buy a new fence.',
    heroDescription: 'Fencing is a highly visual, trust-based purchase with a longer consideration cycle than most home services. Homeowners want to see your previous work, understand the materials, and trust your crew before they sign a contract. MicroManaged Media builds digital systems for fence contractors that prioritize lead quality, highlighting your premium installations (like vinyl, aluminum, and custom wood) while filtering out low-budget repair requests.',
    painPoints: [
      { title: 'Lead quality issues', desc: 'Getting flooded with inquiries for $200 gate repairs when you want $8,000 full privacy fence installs.' },
      { title: 'Failure to convert traffic', desc: 'Your website traffic is decent, but your gallery is buried and there is no clear call to action, so users leave.' },
      { title: 'Slow follow-up', desc: 'In fencing, the first contractor to provide a quote often wins. If leads sit for 24 hours, they go cold.' },
      { title: 'Lack of visual proof', desc: 'Homeowners need to see the product. Generic stock photos on your site destroy trust instantly.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Highly targeted campaigns focused on high-intent keywords like "vinyl fence installation" rather than vague "fence repair".' },
      { name: 'Website Design', desc: 'Visual-first landing pages featuring project galleries, clear trust signals, and easy assessment forms.' },
      { name: 'CRM Integration', desc: 'We route leads instantly to your sales team with automated text notifications to guarantee speed-to-lead.' },
      { name: 'Call Tracking', desc: 'Full conversational analytics so you know exactly which campaigns are yielding high-ticket privacy fences.' },
    ],
    stats: [
      { value: '5x', label: 'Faster Follow-up' },
      { value: 'High', label: 'Ticket Targeting' },
      { value: 'Local', label: 'Radius Domination' },
      { value: '25+', label: 'Years Experience' },
    ],
    keywords: ['Fence leads', 'Fence company marketing', 'PPC for fence contractors', 'Fencing SEO', 'Fence installation leads'],
    ctaHeading: 'Build a Better Fence Business',
    seoBody: [
      { heading: 'The Visual Nature of Fencing Leads', body: 'Unlike an HVAC repair which is hidden in an attic, a fence alters the curb appeal of a home. Marketing for fence contractors requires a highly visual strategy. Our landing pages emphasize high-resolution galleries of your actual work, customer testimonials, and clear financing options, drastically increasing the conversion rate from click to consultation.' },
      { heading: 'Speed-to-Quote Automation', body: 'Fencing leads often request quotes from 3 to 4 contractors simultaneously. We implement automated lead capture and instant engagement (like Missed Call Text Back) so your company is always the first one to establish contact, setting the anchor point for the sale.' },
    ],
  },
  {
    slug: 'remodeling',
    name: 'Remodeling & Renovations',
    shortName: 'Remodeling',
    tagline: 'High-ticket kitchen, bath, and whole-home remodel leads for contractors who want serious projects, not handyman tasks.',
    heroDescription: 'A $50k kitchen remodel requires an entirely different marketing strategy than a $300 leaky faucet. Remodeling is a relationship purchase based heavily on trust, portfolio, and reputation. We help remodelers acquire high-value projects by building digital funnels that aggressively filter out tire-kickers and low-budget tire-kickers through precise long-tail keyword bidding and authoritative website design.',
    painPoints: [
      { title: 'Sifting through bad leads', desc: 'Wasting hours doing complex estimates for people who completely have unrealistic budgets ($5k for a full kitchen).' },
      { title: 'Showcasing the work', desc: 'A Facebook page isn\'t enough. If your web presence doesn\'t convey high-end quality, you won\'t get high-end bids.' },
      { title: 'The long sales cycle', desc: 'Remodels take months to decide on. Without a nurture sequence or retargeting, leads forget you exist.' },
      { title: 'Reliance on referrals', desc: 'Word of mouth is great until the well runs dry. You need a predictable, scalable lead engine.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Bidding specifically on high-value terms like "kitchen remodel contractor" and excluding "cheap" or "DIY".' },
      { name: 'Website Design', desc: 'We build stunning, portfolio-focused landing pages that justify your premium pricing and build immediate trust.' },
      { name: 'CRM Integration', desc: 'Organize your pipeline so you can nurture long-cycle leads over a 3-6 month period without them falling through the cracks.' },
      { name: 'Reviews & Reputation', desc: 'You cannot sell a $50k job with a 3.5-star rating. We fully automate your 5-star review generation.' },
    ],
    stats: [
      { value: 'Premium', label: 'Lead Quality' },
      { value: 'High', label: 'Portfolio Visibility' },
      { value: '100%', label: 'Custom Systems' },
      { value: 'Long', label: 'Cycle Nurturing' },
    ],
    keywords: ['Remodeling leads', 'Kitchen remodel marketing', 'PPC for remodelers', 'Contractor marketing'],
    ctaHeading: 'Attract High-Ticket Remodels',
    seoBody: [
      { heading: 'Filtering Leads Automatically', body: 'The biggest hidden cost in a remodeling business is the time spent writing proposals for homeowners who have zero realistic budget. We weave budget qualifying questions and specific copy into your landing pages to weed out the tire-kickers before they ever ring your phone, saving your estimator hours every week.' },
      { heading: 'Trust is the Only Currency', body: 'In home renovations, homeowners are making a massive financial and emotional investment. Your digital footprint must be spotless. By optimizing your Google Business Profile and placing your best reviews directly next to the contact forms on your landing pages, we manufacture the trust required to get the appointment.' },
    ],
  },
  {
    slug: 'general-contractors',
    name: 'General Contractors',
    shortName: 'GC',
    tagline: 'Build a predictable pipeline of commercial and high-end residential jobs without relying solely on the bid board.',
    heroDescription: 'For General Contractors, taking whatever comes through the door is a recipe for low margins. You need specific types of projects—whether that’s commercial build-outs, custom homes, or major structural renovations. Our marketing systems for GCs focus entirely on intent and scale, pairing razor-sharp PPC campaigns with professional, authoritative web assets that command respect and weed out the noise.',
    painPoints: [
      { title: 'Relying on bid boards', desc: 'Competing solely on price in a race to the bottom against desperate competitors destroys profitability.' },
      { title: 'Wrong mix of work', desc: 'Taking on too many small jobs that tie up your PMs and subs, leaving no room for the million-dollar contracts.' },
      { title: 'Poor digital authority', desc: 'When architects or developers look you up, your website looks like it hasn’t been updated since 2012.' },
      { title: 'Inconsistent lead flow', desc: 'Feast or famine cycles. You are either way too busy or stressing about where the next project is coming from.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Creating discrete funnels for commercial vs. residential, ensuring your ad budget specifically targets the sectors you want to grow.' },
      { name: 'Website Design', desc: 'Developing a corporate-grade digital presence that highlights past projects, safety records, and capabilities.' },
      { name: 'Call Tracking', desc: 'Intercepting and analyzing every call so you know exactly which channels are producing the B2B vs. B2C leads.' },
      { name: 'CRM Integration', desc: 'Centralizing your lead intake so your estimating team can track complex deals spanning several months.' },
    ],
    stats: [
      { value: 'B2B', label: 'Commercial Targeting' },
      { value: 'Authority', label: 'Brand Positioning' },
      { value: 'Data', label: 'Driven Bidding' },
      { value: 'Scale', label: 'Predictable Flow' },
    ],
    keywords: ['General contractor marketing', 'GC leads', 'Commercial construction PPC', 'Construction marketing'],
    ctaHeading: 'Control Your Project Pipeline',
    seoBody: [
      { heading: 'Segmenting Commercial vs. Residential', body: 'A generic marketing approach fails General Contractors because commercial and residential clients buy differently. We separate your campaigns completely. We build B2B funnels focused on tenant improvements and build-outs, while maintaining separate, highly-vetted B2C funnels targeting custom home builds or major renovations.' },
      { heading: 'Projecting Size and Capability', body: 'If a project manager is vetting your firm for a $2M build-out, your digital presence is your first interview. We ensure your website load speeds are perfect, your design is modern, and your Google Business presence projects total authority and stability.' },
    ],
  },
  {
    slug: 'landscaping',
    name: 'Landscaping & Hardscaping',
    shortName: 'Landscaping',
    tagline: 'Filter out the $40 lawn mows. Lock in the high-ticket hardscaping, patio, and commercial maintenance contracts.',
    heroDescription: 'Landscaping businesses scale through high-ticket hardscape installations and recurring commercial contracts, but most generic advertising generates low-value requests for basic lawn care. We architect campaigns that specifically target "hardscaping," "paver patios," "outdoor kitchens," and "commercial landscaping," actively suppressing cheap residential mowing leads to maximize your profit per labor hour.',
    painPoints: [
      { title: 'Low-value inquiries', desc: 'Getting 50 calls a week for $40/month grass cutting when you are trying to sell $25k outdoor kitchens.' },
      { title: 'Extreme seasonality', desc: 'Relying entirely on the spring rush, leaving trucks sitting empty in late summer or winter.' },
      { title: 'Visuals not selling', desc: 'Hardscaping is a luxury purchase, but your digital presence fails to show the high-end nature of your work.' },
      { title: 'Failing to route leads', desc: 'When leads come in, you are out on a tractor. You take a day to respond, and the prospect has moved on.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Laser-targeted on high-ticket keyword clusters (hardscaping, retaining walls) and explicitly blocking "lawn mowing".' },
      { name: 'Website Design', desc: 'Gallery-focused landing pages that showcase your best patios, lighting, and outdoor living spaces.' },
      { name: 'AI Automation', desc: 'Implement AI chat and text-back so prospects can get basic quotes and answers even while you are out in the dirt.' },
      { name: 'Reviews & Reputation', desc: 'Automatically capturing the 5-star reaction immediately after a beautiful backyard transformation is completed.' },
    ],
    stats: [
      { value: 'High', label: 'Ticket Hardscaping' },
      { value: '100%', label: 'Visual Focus' },
      { value: 'Fast', label: 'Lead Capture' },
      { value: 'B2B', label: 'Commercial Routing' },
    ],
    keywords: ['Landscaping leads', 'Hardscaping marketing', 'PPC for landscapers', 'Outdoor living contractor marketing'],
    ctaHeading: 'Grow Your High-Ticket Sales',
    seoBody: [
      { heading: 'The Keyword Strategy for Hardscaping', body: 'The difference between a basic landscaping company and a highly profitable hardscaping firm lies in the keywords they target. We aggressively bid on "paver patio installation," "custom outdoor kitchen," and "retaining wall contractors," utilizing robust negative keyword lists to prevent your ads from showing to teenagers looking for summer mowing jobs.' },
      { heading: 'Selling the Dream', body: 'Homeowners aren\'t buying bricks and dirt; they are buying summer nights around a fire pit. Your marketing has to reflect that. We ensure your landing pages are highly visual and optimized to process high-end inquiries securely, making the prospect trust your vision instantly.' },
    ],
  },
  {
    slug: 'concrete-masonry',
    name: 'Concrete & Masonry',
    shortName: 'Masonry',
    tagline: 'Drive consistent leads for driveways, stamped concrete, foundations, and commercial flatwork.',
    heroDescription: 'From decorative stamped concrete patios to massive commercial foundations, your industry demands heavy machinery, skilled labor, and solid margins. However, most concrete marketing strategies miss the mark by generating small, unprofitable repair jobs. MicroManaged Media zeroes in on high-volume pours and premium decorative work, ensuring your expensive crews stay deployed on jobs that actually make money.',
    painPoints: [
      { title: 'Small, unprofitable jobs', desc: 'Wasting time quoting a 10 sq ft sidewalk crack when you need to be pouring full driveways and foundations.' },
      { title: 'Weather delays destroying momentum', desc: 'When it rains for a week, you need an instant surge of leads on the first sunny day to make up for lost time.' },
      { title: 'Low trust in contractors', desc: 'Concrete is permanent. Homeowners are terrified of bad pours and fly-by-night operators.' },
      { title: 'No commercial penetration', desc: 'Struggling to get in front of the actual developers and facility managers who order high-volume flatwork.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Dynamic search campaigns that we can throttle up and down based on your weather window and crew availability.' },
      { name: 'Bing PPC', desc: 'Capturing an older, homeowner demographic highly likely to need large driveway replacements and retaining walls.' },
      { name: 'Call Tracking', desc: 'Categorizing your leads by service (stamped, flatwork, commercial) to see exactly where your ROI lies.' },
      { name: 'CRM Integration', desc: 'Keeping track of commercial bids vs residential estimates in one clean, automated dashboard.' },
    ],
    stats: [
      { value: 'Agile', label: 'Weather-Responsive Ads' },
      { value: 'High', label: 'Volume Pours' },
      { value: 'Solid', label: 'Brand Trust' },
      { value: '100%', label: 'Tracked ROI' },
    ],
    keywords: ['Concrete contractor marketing', 'Masonry leads', 'PPC for concrete companies', 'Stamped concrete marketing'],
    ctaHeading: 'Pour a Solid Marketing Foundation',
    seoBody: [
      { heading: 'Controlling the Traffic Flow', body: 'Concrete work is uniquely dependent on weather and crew scheduling. A static marketing plan doesn\'t work. Our PPC management allows us to quickly throttle your ad spend up when you need to fill unbooked days, and pause it locally if you are booked out for a month, preventing you from paying for leads you can\'t actually service.' },
      { heading: 'Highlighting Permanence and Quality', body: 'Because concrete mistakes are incredibly costly to fix, homeowners are highly risk-averse. We embed your insurance credentials, longevity in the market, warranties, and flawless review history right into the ads and landing pages to disarm their anxiety and win the bid.' },
    ],
  },
  {
    slug: 'painting',
    name: 'Painting Contractors',
    shortName: 'Painting',
    tagline: 'Fill your schedule with high-margin exterior repaints, full interior jobs, and commercial contracts.',
    heroDescription: 'The barrier to entry in painting is low, which means you are constantly competing against "a guy with a truck." To win the profitable, high-ticket jobs—like full house exteriors, cabinet refinishing, and commercial buildings—you must present a premium, highly professional image. We build marketing systems that elevate your brand above the cheap labor, targeting homeowners who value quality, speed, and reliability over the lowest possible price.',
    painPoints: [
      { title: 'The race to the bottom', desc: 'Getting stuck quoting against cheap, uninsured painters, destroying your profit margins.' },
      { title: 'Small jobs eating time', desc: 'Being inundated with calls for "touch-ups" and single doors instead of whole-home projects.' },
      { title: 'Weak off-season', desc: 'Relying too heavily on summer exterior jobs and scrambling for interior work when the weather turns.' },
      { title: 'Following up too slowly', desc: 'If they fill out a form and you don\'t call them within 15 minutes, they\'ve already booked someone else.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Seasonal tiering: heavy exterior bidding in the spring/summer, pivoting aggressively to interior and cabinet work in the winter.' },
      { name: 'Website Design', desc: 'Premium, clean, highly visual sites that make you look like a top-tier firm they can trust inside their home.' },
      { name: 'Google Maps', desc: 'Building massive review volume so your business looks unassailable compared to the fly-by-night competitors.' },
      { name: 'AI Automation', desc: 'Instantly engaging every inquiry so they don\'t move down the list of Google results while you are on a ladder.' },
    ],
    stats: [
      { value: 'Premium', label: 'Client Targeting' },
      { value: 'All', label: 'Season Stability' },
      { value: '5-Star', label: 'Reputation Growth' },
      { value: 'Fast', label: 'Lead Engagement' },
    ],
    keywords: ['Painting leads', 'Painter marketing', 'PPC for painters', 'Commercial painting SEO'],
    ctaHeading: 'Stop Competing With Chuck in a Truck',
    seoBody: [
      { heading: 'Beating Cheap Competition', body: 'If someone searches for "cheap painter," we intentionally do not want your ad to show. We utilize aggressive negative keyword lists and high-end ad copy to intentionally disqualify bargain hunters. Your marketing should attract homeowners looking for "professional exterior painting" or "expert cabinet refinishers."' },
      { heading: 'Conquering Seasonality', body: 'A painting business can\'t survive if revenue drops to zero in November. We build dual-strategy campaigns that automatically phase out exterior keywords in the fall and aggressively ramp up interior, commercial, and specialty painting (like epoxy floors or cabinets) to ensure your crews stay employed year-round.' },
    ],
  },
  {
    slug: 'pest-control',
    name: 'Pest Control Companies',
    shortName: 'Pest Control',
    tagline: 'Capture panic searches instantly and build a massive book of recurring maintenance contracts.',
    heroDescription: 'Pest control is a business defined by two extremes: the frantic 2 AM "I found a rat" emergency, and the highly lucrative, long-term recurring maintenance contract. MicroManaged Media engineers campaigns to capture both. We utilize hyper-aggressive mobile bidding to intercept emergency pests searches, while developing structured funnels that upsell frantic callers into profitable yearly service agreements.',
    painPoints: [
      { title: 'Missed panic calls', desc: 'When someone sees a roach or a bedbug, they want a solution right now. If it goes to voicemail, the lead is dead.' },
      { title: 'Lack of recurring revenue', desc: 'Doing one-off sprays and failing to convert the customer into a lucrative monthly or quarterly plan.' },
      { title: 'Wasted clicks on DIY', desc: 'Paying Google for clicks on "how to get rid of ants with baking soda"—money completely wasted.' },
      { title: 'Franchise dominance', desc: 'Struggling to be seen next to massive national brands like Terminix or Orkin on the search results.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Ultra-targeted campaigns that bid heavily on high-urgency keywords (termites, bed bugs, emergency extermintor) on mobile devices.' },
      { name: 'Call Tracking', desc: 'We monitor exactly which campaigns produce the one-time hits vs. the valuable recurring contracts.' },
      { name: 'AI Automation', desc: 'Deploying This is Gracie™ or Missed Call Text Back so a panicked homeowner receives an immediate, calming response 24/7.' },
      { name: 'Reviews & Reputation', desc: 'Automated follow-ups to turn a relieved homeowner into a 5-star review, strengthening your local map pack ranking.' },
    ],
    stats: [
      { value: 'Mobile', label: 'First Strategy' },
      { value: '24/7', label: 'Emergency Capture' },
      { value: 'High', label: 'Recurring Conversion' },
      { value: 'Zero', label: 'DIY Traffic' },
    ],
    keywords: ['Pest control leads', 'Exterminator marketing', 'PPC for pest control', 'Pest control SEO'],
    ctaHeading: 'Dominate Local Pest Control Search',
    seoBody: [
      { heading: 'The Psychology of the Panic Search', body: 'The vast majority of pest control searches happen on a smartphone while the homeowner is stressed. They won\'t read a long webpage; they just need a clickable phone number and assurance you can be there fast. Our landing pages are stripped of clutter, heavily featuring click-to-call buttons and immediate availability signals to ensure the highest possible conversion rate.' },
      { heading: 'Outsmarting the National Brands', body: 'You don\'t beat the massive national chains by outspending them; you beat them by being hyper-local and highly rated. We aggressively optimize your Google Business Profile and emphasize your local ties in your ad copy. Homeowners often prefer a trusted local business over a faceless corporation, provided the local business looks professional and responsive.' },
    ],
  },
  {
    slug: 'garage-doors',
    name: 'Garage Door Services',
    shortName: 'Garage Doors',
    tagline: 'Lock down emergency repair calls and high-ticket full door replacements in your service area.',
    heroDescription: 'When a car is trapped in a garage because of a snapped spring, the homeowner is calling the first reliable name they see. The garage door industry requires pinpoint digital marketing: capturing high-urgency repair clicks on mobile devices instantly, while maintaining separate, visually driven campaigns to sell premium hardware replacements to homeowners looking to increase curb appeal.',
    painPoints: [
      { title: 'High cost per click', desc: 'Because repair margins are tight and competition is fierce, a poorly managed Google Ads account will drain your profit.' },
      { title: 'Losing emergency calls', desc: 'If your dispatcher misses the call, the customer immediately dials the next competitor on the list.' },
      { title: 'Repair vs Replacement', desc: 'Spending too much budget on $150 spring repairs and missing out on the $3,000 full door installations.' },
      { title: 'Scammer stigma', desc: 'The industry is notorious for bait-and-switch operators. If your web presence lacks trust, homeowners are wary.' },
    ],
    services: [
      { name: 'Google PPC', desc: 'Split campaigns: aggressive mobile bidding for "broken spring right now", and display/search campaigns for "new custom garage doors".' },
      { name: 'Website Design', desc: 'Fast, secure landing pages boasting massive trust signals, upfront transparency, and click-to-call efficiency.' },
      { name: 'AI Automation', desc: 'Automated text-backs for missed calls to ensure the frantic customer knows help is on the way.' },
      { name: 'Google Maps', desc: 'Dominating local packs via structured, frequent, real customer reviews to outshine the scam operators.' },
    ],
    stats: [
      { value: 'Urgency', label: 'Driven Routing' },
      { value: 'Split', label: 'Repair/Install Focus' },
      { value: 'Maximum', label: 'Brand Trust' },
      { value: 'Hyper', label: 'Local Targeting' },
    ],
    keywords: ['Garage door leads', 'Garage door marketing', 'PPC for garage doors', 'Garage door SEO'],
    ctaHeading: 'Open the Door to Better Leads',
    seoBody: [
      { heading: 'Balancing Operations via PPC', body: 'The beauty of a well-run digital campaign is control. If your crews are bogged down with simple repairs, we can throttle back those keywords and push your budget heavily into full door installations and opener upgrades. We adapt your digital strategy to fit whatever your operational bottlenecks require.' },
      { heading: 'Manufacturing Trust Instantly', body: 'Due to industry bad actors, a polished digital presence is your biggest weapon. We ensure your ads use ad extensions (like localized addresses and team photos) and that your landing pages prominently feature real reviews, your physical location, and warranties, proving to the customer you are the safe, reliable choice.' },
    ],
  },
];

export const tradesBySlug = Object.fromEntries(trades.map((t) => [t.slug, t]));
