"use client"
import Image from "next/image";
import Link from "next/link";
import heroImage01 from "@/public/images/ui/hero/IMG_wedding.webp";
import { motion } from "framer-motion";

export default function HeroSection(){
    return (
        <section className="md:min-h-screen w-full relative overflow-x-hidden grid grid-cols-1 pt-20 sm:pt-24 md:grid-cols-2 md:pt-28 lg:pt-32">
            {/* Text content */}
            <article className="flex flex-col justify-start px-6 py-12 sm:px-10 sm:py-20 md:py-[6vw] md:pr-[4vw] md:pl-[6vw] lg:pl-[7vw] lg:pr-[5vw]">
                {/* Tag */}
                <motion.span
                    className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-secondary mb-6
                        before:w-8 before:h-px before:bg-secondary sm:text-sm sm:mb-8 sm:before:w-10"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    Family-Run · Est. Shropshire
                </motion.span>

                {/* H1 */}
                <motion.h1
                    className="text-4xl font-bold leading-tight text-charcoal mb-5 sm:text-5xl sm:mb-6 md:text-6xl xl:text-7xl"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                >
                    Exquisite Flavours,
                    <em className="italic text-primary block">Unforgettable</em>
                    Moments
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-base font-serif font-light leading-relaxed text-charcoal-light mb-10 sm:text-lg sm:max-w-lg sm:mb-12 md:max-w-xl"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.05, ease: "easeOut" }}
                >
                    A family-run catering company bringing the warmth of Spanish, South American & Mediterranean cuisine to your most cherished celebrations.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col gap-3 xs:flex-row xs:items-center xs:gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            href="/contact"
                            className="block text-center py-3 px-6 border-2 border-primary bg-primary text-white
                                transition-all duration-300 text-sm uppercase tracking-wider font-medium rounded-xs
                                hover:bg-white hover:text-primary sm:w-fit sm:min-w-fit"
                        >
                            Book Your Event
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            href="/gallery"
                            className="block text-center py-3 px-6 border-2 border-charcoal bg-transparent text-charcoal
                                transition-all duration-300 text-sm uppercase tracking-wider font-medium rounded-xs
                                hover:bg-primary/5 hover:border-primary hover:text-primary sm:w-fit sm:min-w-fit"
                        >
                            View our work
                        </Link>
                    </motion.div>
                </motion.div>
            </article>

            {/* Image oculta en móvil, visible desde md */}
            <article className="
                hidden
                md:block md:relative md:overflow-hidden
            ">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.15, opacity: 0, x: 20, y: 20 }}
                    animate={{ scale: 1.05, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                >
                    <Image
                        src={heroImage01}
                        alt="Wedding catering by Rodriguez Events"
                        className="w-full h-full object-cover"
                        priority
                    />
                </motion.div>
                {/* Overlay - CSS custom class for radial-gradients */}
                <div className="hero-img-overlay" />
            </article>
        </section>
    );
}