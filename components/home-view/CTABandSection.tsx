"use client"
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABandSection(){

    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;

    return (
        <section className="py-16 px-6 bg-linear-to-l from-[#1a1a2e] to-charcoal flex flex-col items-start gap-10 sm:py-20 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:py-24 lg:px-[7vw]">

            {/* Text content */}
            <article className="w-full md:w-auto">

                {/* Tag */}
                <motion.span
                    className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-6 before:w-10 before:h-px before:bg-secondary sm:mb-8"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Get in Touch
                </motion.span>

                {/* Title */}
                <motion.h2
                    className="text-3xl font-bold leading-tight text-white mb-6 sm:text-4xl lg:text-5xl lg:max-w-130"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                >
                    Ready to Create Something <em className="italic text-secondary">Extraordinary?</em>
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-base font-sans font-light leading-relaxed text-cream-warm mb-10 sm:text-lg sm:mb-12 lg:max-w-160"
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
                className="flex flex-col gap-4 shrink-0 w-full sm:flex-row md:flex-col md:w-auto"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            >
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:flex-1 md:w-auto">
                    <Link
                        href={`mailto:${contactEmail}`}
                        className="bg-secondary text-charcoal py-4 px-10 rounded-xs text-sm font-bold tracking-widest uppercase text-decoration-none transition-all duration-300 text-center border-2 border-secondary hover:bg-secondary-light hover:border-secondary-light block w-full"
                    >
                        Request a Quote
                    </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:flex-1 md:w-auto">
                    <Link
                        href={`tel:${contactPhone}`}
                        className="bg-transparent text-white py-4 px-10 rounded-xs text-sm font-bold tracking-widest uppercase text-decoration-none transition-all duration-300 text-center border-2 border-slate-500 hover:bg-white/10 hover:border-white block w-full"
                    >
                        Book a Call
                    </Link>
                </motion.div>
            </motion.article>

        </section>
    );
}