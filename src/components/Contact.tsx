import { useState } from 'react';

// Replace this with your Astro API endpoint URL
const API_ENDPOINT = '/api/send-lead';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const BOOK_URL = 'https://calendar.app.google/RUTjw3N7Afe95Tkk8';

  return (
    <section id="contact" className="py-28 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-500 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-3 mb-4 tracking-tight">
            Let's Build Something <span className="text-blue-900 dark:text-blue-400">Remarkable</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Ready to stop leaving growth on the table? Tell us about your project and we'll craft a custom strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              {[
                { label: 'Email', value: 'Click Here', href: 'mailto:info@micromanagedmedia.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { label: 'Phone', value: '+1 (251) 765-0333', href: 'tel:+12517650333', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                { label: 'Office', value: 'Foley, AL 36535', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 mb-5 last:mb-0">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{c.label}</div>
                    {'href' in c ? (
                      <a href={(c as any).href} className="text-white text-sm font-medium hover:text-white/80 transition-colors">{c.value}</a>
                    ) : (
                      <div className="text-white text-sm font-medium">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-cyan-400 rounded-2xl p-6 hover:bg-cyan-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-base">Book a Time to Talk</div>
                <div className="text-white/75 text-sm mt-0.5">Pick a slot on Bob's calendar — free, no obligation.</div>
              </div>
            </a>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">⚡ Response Time</div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">We respond to all inquiries within <strong className="text-gray-900 dark:text-white">24 business hours</strong>. For urgent matters, call us directly.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-gray-50 dark:bg-gray-800/30 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Received!</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs">Thanks for reaching out. Our team will be in touch with you within 24 hours.</p>
                <button
                  className="mt-8 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold px-6 py-2.5 rounded-full hover:border-gray-400 transition-colors"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && <div className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">{error}</div>}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Jane Smith" value={form.name} onChange={(e) => update('name', e.target.value)} className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="jane@company.com" value={form.email} onChange={(e) => update('email', e.target.value)} className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                    <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Company</label>
                    <input type="text" placeholder="Your Company Inc." value={form.company} onChange={(e) => update('company', e.target.value)} className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Service Interested In</label>
                  <select value={form.service} onChange={(e) => update('service', e.target.value)} className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400">
                    <option value="">Select a service</option>
                    <option>Answer My Calls 24/7</option>
                    <option>Get More Leads with Google Ads</option>
                    <option>Track Every Call &amp; Lead</option>
                    <option>Capture Leads with AI Chatbot</option>
                    <option>Build My Contractor Website</option>
                    <option>Improve My Google Maps Presence</option>
                    <option>Get More 5-Star Reviews</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Tell Us About Your Project <span className="text-red-500">*</span></label>
                  <textarea placeholder="Share your goals, current challenges, and what success looks like for you..." rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 resize-none" />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-60 text-white font-semibold rounded-xl h-12 flex items-center justify-center gap-2 transition-colors">
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
