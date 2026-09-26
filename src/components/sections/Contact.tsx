'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: 'Software Development',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 text-navy-DEFAULT border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Ambient Gold Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info with High-Contrast Dark Text */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 font-mono text-xs font-bold uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>GET IN TOUCH</span>
              </div>

              {/* Bold Dark Heading - 100% Readable */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-navy-DEFAULT mb-6">
                Let&apos;s Build Something Meaningful.
              </h2>

              {/* High-Contrast Description Copy */}
              <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed mb-10">
                Have a business challenge, technology requirement or product idea? Let&apos;s discuss how we can turn it into a scalable digital solution.
              </p>
            </div>

            {/* Official Contact Metadata Cards with Dark Contrast Text */}
            <div className="space-y-6 border-t border-slate-200/80 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-navy-DEFAULT text-gold-light border border-navy-border flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-gold-DEFAULT" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider font-bold">Email Inquiry</div>
                  <a href="mailto:contact@anvitech.in" className="text-sm font-bold text-navy-DEFAULT hover:text-gold-dark transition-colors">
                    contact@anvitech.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-navy-DEFAULT text-gold-light border border-navy-border flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-gold-DEFAULT" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider font-bold">Phone / WhatsApp</div>
                  <a href="tel:+918000000000" className="text-sm font-bold text-navy-DEFAULT hover:text-gold-dark transition-colors">
                    +91 (080) 4567 8900
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-navy-DEFAULT text-gold-light border border-navy-border flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 text-gold-DEFAULT" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider font-bold">Registered Corporate Office</div>
                  <div className="text-sm font-bold text-navy-DEFAULT leading-relaxed">
                    ANVITECH INDIA PRIVATE LIMITED <br />
                    <span className="font-medium text-slate-700">
                      Technology Tower, Financial District, <br />
                      Bengaluru, Karnataka — 560001, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-navy-DEFAULT text-gold-light border border-navy-border flex items-center justify-center shrink-0 shadow-md">
                  <Linkedin className="w-5 h-5 text-gold-DEFAULT" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider font-bold">Corporate LinkedIn</div>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gold-dark hover:underline">
                    linkedin.com/company/anvitech-india
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Quality Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800 text-white rounded-2xl p-8 sm:p-10 border border-slate-700 shadow-2xl relative">
              
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-gradient rounded-t-2xl" />

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-gradient text-navy-DEFAULT flex items-center justify-center shadow-gold-glow">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">Inquiry Received</h3>
                  <p className="text-slate-300 text-sm max-w-md">
                    Thank you for reaching out to <strong className="text-white">ANVITECH INDIA PRIVATE LIMITED</strong>. An enterprise solution architect will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 text-xs font-mono font-bold text-gold-light border border-gold-DEFAULT/40 rounded-md hover:bg-gold-subtle"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white placeholder:text-slate-500 text-sm rounded-lg p-3 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Enterprise Global Tech"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white placeholder:text-slate-500 text-sm rounded-lg p-3 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white placeholder:text-slate-500 text-sm rounded-lg p-3 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white placeholder:text-slate-500 text-sm rounded-lg p-3 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white text-sm rounded-lg p-3 outline-none transition-colors"
                    >
                      <option value="Software Development">Software Development</option>
                      <option value="Mobile Application Development">Mobile Application Development</option>
                      <option value="AI & Automation">AI & Automation</option>
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Data & Analytics">Data & Analytics</option>
                      <option value="UI/UX Engineering">UI/UX Engineering</option>
                      <option value="IT Consulting">IT Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      Project Details & Timeline *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your objectives, key challenges, or scope requirements..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white placeholder:text-slate-500 text-sm rounded-lg p-3 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-gold-gradient text-navy-DEFAULT font-extrabold text-sm sm:text-base rounded-lg shadow-gold-glow hover:brightness-110 active:scale-98 transition-all duration-200 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <Send className="w-4 h-4 text-navy-DEFAULT stroke-[2.5]" />
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-slate-400 text-center font-mono">
                    CONFIDENTIALITY GUARANTEED // NDA EXECUTABLE UPON REQUEST
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
