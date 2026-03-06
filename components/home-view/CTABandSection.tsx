"use client"
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABandSection(){

    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;

    return (
        <section className="py-24 px-[7vw] bg-linear-to-l from-[#1a1a2e] to-charcoal flex items-center justify-between gap-12 flex-wrap">

            {/* Text content */}
            <article>

                {/* Tag */}
                <motion.span
                    className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-8 before:w-10 before:h-px before:bg-secondary"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Get in Touch
                </motion.span>

                {/* Title */}
                <motion.h2
                    className="text-5xl font-bold leading-tight text-white mb-6 max-w-130"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                >
                    Ready to Create Something <em className="italic text-secondary">Extraordinary?</em>
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-lg font-sans font-light leading-relaxed text-cream-warm max-w-160 mb-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
                >
                    Tell us about your event and we'll craft a bespoke proposal — at no obligation. Serving Shropshire, Staffordshire, North Wales and the West Midlands.
                </motion.p>

            </article>

            {/* CTAs */}
            <motion.article
                className="flex flex-col gap-4 shrink-0"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            >
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Link
                        href={`mailto:${contactEmail}`}
                        className="bg-secondary text-charcoal py-4 px-10 rounded-xs text-sm font-bold tracking-widest uppercase text-decoration-none transition-all duration-300 text-center border-2 border-secondary hover:bg-secondary-light hover:border-secondary-light block"
                    >
                        Request a Quote
                    </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Link
                        href={`tel:${contactPhone}`}
                        className="bg-transparent text-white py-4 px-10 rounded-xs text-sm font-bold tracking-widest uppercase text-decoration-none transition-all duration-300 text-center border-2 border-slate-500 hover:bg-white/10 hover:border-white block"
                    >
                        Book a Call
                    </Link>
                </motion.div>
            </motion.article>

        </section>
    );
}