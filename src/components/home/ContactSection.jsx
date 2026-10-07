import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MotionText from "@/components/MotionText";
import MagneticButton from "@/components/MagneticButton";
import { Stagger, StaggerItem } from "@/components/Reveal";
import ClientExperienceEntry from "@/components/ClientExperienceEntry";
import { CLIENT_EXPERIENCES } from "@/lib/clientExperiences";

const INTERESTS = [
  "Corporate Structuring",
  "Company Incorporation",
  "International Licensing",
  "Banking & Financial Infrastructure",
  "Trusts & Foundations",
  "Investment Migration",
  "International Expansion",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", country: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" data-theme="light" className="relative bg-parchment text-obsidian py-40 lg:py-56 overflow-hidden">
      <div className="coord-grid-light absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left — headline + contact */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-terracotta mb-8 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-terracotta/60" />
              10 — Contact
            </motion.div>
            <MotionText
              text="Your next move starts with a conversation."
              as="h2"
              className="font-serif text-[2.8rem] sm:text-6xl lg:text-[4.5rem] leading-[1.02] text-obsidian text-balance"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 font-sans text-lg lg:text-xl text-obsidian/65 leading-relaxed max-w-md font-light"
            >
              Tell us what you're building, where you're going and what you need to navigate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 pt-10 border-t border-obsidian/12"
            >
              <p className="eyebrow text-terracotta mb-5">Cerix Global Consulting</p>
              <p className="font-sans text-sm text-obsidian/70 leading-relaxed">
                Bengaluru, India
              </p>
              <a href="mailto:info@cerixglobal.com" className="mt-3 inline-block font-serif text-3xl text-obsidian hover:text-olive-deep transition-colors duration-300">
                info@cerixglobal.com
              </a>
            </motion.div>
            <ul className="mt-10 border border-forest/15">
              <ClientExperienceEntry entry={CLIENT_EXPERIENCES[1]} compact />
            </ul>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-12"
              >
                <div className="w-14 h-14 border border-terracotta flex items-center justify-center mb-8">
                  <ArrowRight size={22} strokeWidth={1.5} className="text-terracotta" />
                </div>
                <h3 className="font-serif text-4xl text-obsidian mb-4">Thank you.</h3>
                <p className="font-sans text-base text-obsidian/60 max-w-sm leading-relaxed">
                  Your enquiry has been received. A member of our advisory team will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <Stagger interval={0.08} className="space-y-8">
                <form onSubmit={submit}>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <StaggerItem><Field label="Name" value={form.name} onChange={update("name")} required /></StaggerItem>
                    <StaggerItem><Field label="Company" value={form.company} onChange={update("company")} /></StaggerItem>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8 mt-8">
                    <StaggerItem><Field label="Email" type="email" value={form.email} onChange={update("email")} required /></StaggerItem>
                    <StaggerItem><Field label="Phone" value={form.phone} onChange={update("phone")} /></StaggerItem>
                  </div>
                  <div className="mt-8">
                    <StaggerItem>
                      <Field label="Country / Region" value={form.country} onChange={update("country")} />
                    </StaggerItem>
                  </div>
                  <div className="mt-8">
                    <StaggerItem>
                      <label className="eyebrow text-obsidian/55 mb-3 block">Area of Interest</label>
                      <select
                        value={form.interest}
                        onChange={update("interest")}
                        className="w-full bg-transparent border-b border-obsidian/20 py-3.5 font-sans text-base text-obsidian focus:border-terracotta outline-none transition-colors duration-300 [&>option]:bg-ivory"
                      >
                        <option value="">Select an area of interest</option>
                        {INTERESTS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </StaggerItem>
                  </div>
                  <div className="mt-8">
                    <StaggerItem>
                      <label className="eyebrow text-obsidian/55 mb-3 block">Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={update("message")}
                        required
                        className="w-full bg-transparent border-b border-obsidian/20 py-3.5 font-sans text-base text-obsidian focus:border-terracotta outline-none transition-colors duration-300 resize-none"
                      />
                    </StaggerItem>
                  </div>
                  <StaggerItem className="pt-4">
                    <MagneticButton strength={0.2}>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 bg-terracotta text-ivory px-10 py-5 font-sans text-sm tracking-[0.14em] uppercase font-medium rounded-full hover:bg-olive-deep transition-colors duration-300"
                      >
                        Start a Conversation
                        <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                      </button>
                    </MagneticButton>
                  </StaggerItem>
                </form>
              </Stagger>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="eyebrow text-obsidian/55 mb-3 block">
        {label}{required && <span className="text-terracotta ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent border-b border-obsidian/20 py-3.5 font-sans text-base text-obsidian focus:border-terracotta outline-none transition-colors duration-300"
      />
    </div>
  );
}