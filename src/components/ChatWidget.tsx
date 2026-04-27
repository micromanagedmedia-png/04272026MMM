// ChatWidget.tsx — AI chat bubble powered by streaming endpoint
// Usage in .astro files: <ChatWidget client:only="react" />
//
// IMPORTANT: In Astro you must call your own API endpoint.
// Replace the chat() and sendChatLead() calls with fetch() calls
// to your Astro API routes:
//   POST /api/chat        → streams AI response chunks
//   POST /api/chat-lead   → saves lead + conversation
//
// The interface below matches the existing Zite streaming chat endpoint.

/** @jsxImportSource react */
import React, { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  streaming?: boolean;
}

interface ContactInfo {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
}

const WELCOME: Message = {
  id: 'welcome',
  role: 'assistant',
  content: "Hi there! 😊 This is Gracie — how may I make your day better?",
};

const GRACIE_PHOTO =
  'https://images.fillout.com/orgid-30300/flowpublicid-f4gvodhkuc/widgetid-default/fXK95xCvfhsFdWXX5YbtMn/pasted-image-1775600057529.jpg';

const QUICK_PROMPTS = [
  'Answer My Calls 24/7',
  'Get More Leads with Google Ads',
  'Track Every Call & Lead',
  'Capture Leads with AI Chatbot',
  'Build My Contractor Website',
  'Improve My Google Maps Presence',
  'Get More 5-Star Reviews',
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.8s' }}
        />
      ))}
    </div>
  );
}

function UserMsg({ content }: { content: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] bg-blue-900 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm leading-relaxed">
        {content}
      </div>
    </div>
  );
}

function BotMsg({ content, streaming }: { content: string; streaming?: boolean }) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="w-7 h-7 rounded-full bg-cyan-100 border border-cyan-200 flex items-center justify-center shrink-0 mt-0.5">
        <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"/>
        </svg>
      </div>
      <div className="max-w-[85%] bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm leading-relaxed text-gray-900 dark:text-gray-100">
        {content ? (
          <span className="whitespace-pre-wrap">{content}</span>
        ) : null}
        {streaming && !content && <TypingDots />}
        {streaming && content && (
          <span className="inline-block w-0.5 h-3.5 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
}

function ContactForm({ onSubmit, onSkip }: { onSubmit: (info: ContactInfo) => void; onSkip: () => void }) {
  const [info, setInfo] = useState<ContactInfo>({});
  const upd = (k: keyof ContactInfo, v: string) => setInfo((p) => ({ ...p, [k]: v }));

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm p-4 text-sm space-y-3 max-w-[85%]">
      <p className="font-semibold text-gray-900 dark:text-white">Would you like to leave your contact info so Bob can reach out?</p>
      <div className="space-y-2">
        {(['name', 'email', 'phone', 'company'] as const).map((field) => (
          <input
            key={field}
            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
            placeholder={field === 'name' ? 'Your name' : field === 'email' ? 'Email address' : field === 'phone' ? 'Phone (optional)' : 'Company name (optional)'}
            value={info[field] ?? ''}
            onChange={(e) => upd(field, e.target.value)}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 text-sm outline-none focus:border-cyan-400"
          />
        ))}
      </div>
      <div className="flex gap-2 pt-1">
        <button
          onClick={() => onSubmit(info)}
          disabled={!info.name && !info.email}
          className="flex-1 rounded-lg bg-cyan-400 text-gray-900 py-2 text-xs font-semibold hover:bg-cyan-300 disabled:opacity-40 transition-colors"
        >
          Submit
        </button>
        <button
          onClick={onSkip}
          className="px-4 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 text-xs hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Fill out form instead
        </button>
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [pulsed, setPulsed] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactCollected, setContactCollected] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({});
  const leadSentRef = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { const t = setTimeout(() => setPulsed(true), 3000); return () => clearTimeout(t); }, []);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, showContactForm]);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 300); }, [open]);

  useEffect(() => {
    const count = messages.filter((m) => m.role === 'user').length;
    if (count >= 3 && !contactCollected && !showContactForm && !loading) setShowContactForm(true);
  }, [messages, contactCollected, showContactForm, loading]);

  const fireLead = useCallback((contact: ContactInfo, msgs: Message[]) => {
    if (leadSentRef.current) return;
    leadSentRef.current = true;
    console.log("Saving lead locally until Airtable is wired:", contact);
  }, []);

  useEffect(() => {
    const hasConvo = messages.some((m) => m.role === 'user');
    if (!open && hasConvo && contactCollected) fireLead(contactInfo, messages);
  }, [open, messages, contactCollected, contactInfo, fireLead]);

  const handleContactSubmit = (info: ContactInfo) => {
    setContactInfo(info);
    setContactCollected(true);
    setShowContactForm(false);
    fireLead(info, messages);
    setMessages((prev) => [...prev, {
      id: Date.now().toString(),
      role: 'assistant',
      content: `Thanks${info.name ? `, ${info.name}` : ''}! 🎉 Bob will reach out to you${info.email ? ` at ${info.email}` : ''}${info.phone ? ` or ${info.phone}` : ''} soon. Keep asking me questions!`,
    }]);
  };

  const handleContactSkip = () => {
    setContactCollected(true);
    setShowContactForm(false);
    setMessages((prev) => [...prev, {
      id: Date.now().toString(),
      role: 'assistant',
      content: "No problem! You can fill out the contact form at any time. Keep asking me questions — I'm happy to help!",
    }]);
  };

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
    const assistantId = (Date.now() + 1).toString();
    
    const newMessages = [...messages, userMsg];
    setMessages((prev) => [...prev, userMsg, { id: assistantId, role: 'assistant', content: '', streaming: true }]);
    setInput('');
    setLoading(true);
    
    try {
      const historyToMap = newMessages.filter(m => m.id !== 'welcome' && m.content && m.content.trim());
      
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historyToMap }),
      });
      
      if (!res.ok) {
        throw new Error('Chat API error');
      }
      
      const reader = res.body?.getReader();
      if (!reader) throw new Error('No stream returned');
      
      const decoder = new TextDecoder();
      let accumulated = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;
        setMessages((prev) => prev.map((m) => m.id === assistantId ? { ...m, content: accumulated } : m));
      }
      
      setMessages((prev) => prev.map((m) => m.id === assistantId ? { ...m, streaming: false } : m));
    } catch(err: any) {
      console.error(err);
      setMessages((prev) => prev.map((m) =>
        m.id === assistantId ? { ...m, content: 'Sorry, something went wrong. Please try again.', streaming: false } : m
      ));
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
          style={{ maxHeight: '560px', height: '560px' }}
          role="dialog"
          aria-label="MicroManaged Media AI Assistant"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-blue-900 border-b border-white/10 shrink-0">
            <img src={GRACIE_PHOTO} alt="Gracie" className="w-9 h-9 rounded-full object-cover shrink-0 border-2 border-white/20" />
            <div className="flex-1 min-w-0">
              <div className="font-bold text-white text-sm leading-tight">This is Gracie™</div>
              <div className="text-white/50 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
                AI Receptionist
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-white dark:bg-gray-950">
            {messages.map((msg) =>
              msg.role === 'user'
                ? <UserMsg key={msg.id} content={msg.content} />
                : <BotMsg key={msg.id} content={msg.content} streaming={msg.streaming} />
            )}
            {showContactForm && <ContactForm onSubmit={handleContactSubmit} onSkip={handleContactSkip} />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompts */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5 bg-white dark:bg-gray-950 shrink-0">
              {QUICK_PROMPTS.map((s) => (
                <button
                  key={s}
                  onClick={() => { setInput(s); setTimeout(() => inputRef.current?.focus(), 0); }}
                  className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-cyan-400/50 hover:text-cyan-500 text-gray-500 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shrink-0">
            {contactCollected && contactInfo.name && (
              <div className="flex items-center gap-1.5 mb-2 text-xs text-gray-400">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <span>Chatting as <strong className="text-gray-700 dark:text-gray-200">{contactInfo.name}</strong></span>
              </div>
            )}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl px-3 py-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                disabled={loading}
                className="flex-1 bg-transparent text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 outline-none disabled:opacity-60"
                aria-label="Chat message input"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="w-7 h-7 rounded-full bg-cyan-400 flex items-center justify-center shrink-0 hover:bg-cyan-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg className="w-3.5 h-3.5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating bubble */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {!open && pulsed && messages.length === 1 && (
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 shadow-lg text-xs text-gray-700 dark:text-gray-200 font-medium whitespace-nowrap">
            Ask me anything 💬
          </div>
        )}

        <div className="relative">
          <button
            onClick={() => { setOpen((o) => !o); setPulsed(false); }}
            aria-label="Open MicroManaged Media AI chat assistant"
            className="relative w-16 h-16 rounded-full shadow-lg active:scale-95 transition-all duration-150 overflow-hidden border-2 border-cyan-400"
          >
            {pulsed && !open && (
              <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-30 animate-ping" />
            )}
            {open ? (
              <span className="absolute inset-0 flex items-center justify-center bg-blue-900">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </span>
            ) : (
              <span className="absolute inset-0">
                <img src={GRACIE_PHOTO} alt="Chat with Gracie" className="w-full h-full object-cover" />
              </span>
            )}
          </button>
          {!open && (
            <span className="absolute -top-1 -right-1 z-20 pointer-events-none">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
              <span className="relative block w-5 h-5 rounded-full bg-green-400 border-[3px] border-white shadow-lg" />
            </span>
          )}
        </div>
      </div>
    </>
  );
}
