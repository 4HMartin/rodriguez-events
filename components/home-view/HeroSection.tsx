"use client"
import Image from "next/image";
import Link from "next/link";
import heroImage01 from "@/public/images/ui/hero/IMG_wedding.webp";
import { motion } from "framer-motion";

export default function HeroSection(){

    return (
        <section className="min-h-screen w-full grid grid-cols-2 pt-32.5 relative overflow-x-hidden">
            {/* Text content - left side */}
            <article className="flex flex-col justify-center py-[6vw] pr-[5vw] pl-[7vw]">
                {/* Tag */}
                <motion.span
                    className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-8 before:w-10 before:h-px before:bg-secondary"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    Family-Run · Est. Shropshire
                </motion.span>

                {/* H1 title */}
                <motion.h1 
                    className="text-7xl font-bold leading-tight text-charcoal mb-6"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                >
                    Exquisite Flavours,
                    <em className="italic text-primary block">Unforgettable</em>
                    Moments
                </motion.h1>

                {/* Hero sub */}
                <motion.p 
                    className="text-lg font-serif font-light leading-relaxed text-charcoal-light max-w-105 mb-12"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.05, ease: "easeOut" }}
                >
                    A family-run catering company bringing the warmth of Spanish, South American & Mediterranean cuisine to your most cherished celebrations.
                </motion.p>

                {/* CTAs */}
                <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Link href={"/contact"} className="w-fit min-w-fit py-3 px-6 border-2 border-primary bg-primary text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium rounded-xs hover:bg-white hover:text-primary lg:block">
                        Book Your Event
                    </Link>
                    <Link href={"/gallery"} className="w-fit min-w-fit py-3 px-6 border-2 border-charcoal bg-transparent text-charcoal transition-all duration-300 text-sm uppercase tracking-wider font-medium rounded-xs hover:bg-primary/5 hover:border-primary hover:text-primary lg:block">
                        View our work
                    </Link>
                </motion.div>
            </article>

            {/* Image section - right side */}
            <article className="relative overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.15, opacity: 0, x: 20, y: 20 }}
                    animate={{ scale: 1.05, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                >
                    <Image 
                        src={heroImage01}
                        alt="hero_section_image"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                {/* Overlay - CSS custom class for radial-gradients */}
                <div className="hero-img-overlay"></div>
            </article>
        </section>
    )
}