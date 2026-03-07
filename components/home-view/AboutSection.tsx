"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "@/public/images/ui/about/about-image-02.webp";
import logotype from "@/public/images/ui/logotype.webp";
import TWIAAward from "@/public/images/ui/about/TWIA_Award_2025.webp";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function AboutSection(){

    const awardLink = process.env.NEXT_PUBLIC_AWARD_LINK || "";

    return (
        <section className="grid grid-cols-1 bg-primary md:grid-cols-2 md:max-h-150">

            {/*  Image — left side  */}
            <article className="relative overflow-hidden h-72 sm:h-96 md:h-auto md:max-h-150 after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:from-60% after:to-primary md:after:bg-linear-to-r md:after:from-75% md:after:from-transparent md:after:to-primary">

                {/* TWIA Award badge */}
                <motion.div
                    initial={{ opacity: 0, x: -20, y: -10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="absolute top-4 left-4 z-10 sm:top-6 sm:left-6 md:top-[56%] xl:top-4"
                >
                    <Link
                        href={`${awardLink}`}
                        target="_blank"
                        className="block p-2 w-28 rounded-lg bg-cream border-2 border-b-pink-700 shadow-xl group sm:w-38"
                    >
                        <ExternalLink className="absolute top-2 right-2 w-4 h-4 transition-all group-hover:text-pink-700 sm:w-5 sm:h-5"/>
                        <Image
                            src={TWIAAward}
                            alt="The wedding industry awards - 2025 - Rodriguez Events"
                            className="object-cover w-full h-full transition-all group-hover:scale-105"
                        />
                    </Link>
                </motion.div>

                {/* About image */}
                <motion.div
                    className="w-full h-full"
                    initial={{ scale: 1.08, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                >
                    <Image
                        src={aboutImage}
                        alt="A family passion for culinary excellence"
                        className="object-cover object-center md:object-[50%_100%] w-full h-full opacity-95"
                    />
                </motion.div>

            </article>

            {/*  Content — right side  */}
            <article className="relative px-6 py-12 sm:px-10 sm:py-16 md:py-20 md:pr-[6vw] md:pl-[4vw]">
                <div className="flex flex-col items-start md:flex-row md:items-center md:gap-0">
                    <div>

                        {/* Tag */}
                        <motion.span
                            className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-6 before:w-10 before:h-px before:bg-secondary sm:mb-8"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            Our Story
                        </motion.span>

                        {/* Title */}
                        <motion.h2
                            className="text-3xl font-bold leading-tight text-white mb-6 sm:text-4xl lg:text-5xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                        >
                            A Family Passion for <em className="italic text-secondary">Culinary Excellence</em>
                        </motion.h2>

                        {/* Divider */}
                        <motion.div
                            className="w-15 h-0.5 bg-linear-to-r from-secondary to-secondary-light my-6"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            style={{ originX: 0 }}
                            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
                        />

                        {/* Description */}
                        <motion.p
                            className="text-base font-serif font-light leading-relaxed text-cream-warm mb-10 sm:text-lg sm:mb-12 lg:max-w-105"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
                        >
                            Rodriguez Events is a catering business run by husband-and-wife team Emma and Heber, who leverage over 30 years of high-end hospitality experience—including Michelin-starred backgrounds.
                        </motion.p>
                    </div>

                    {/* Logotype */}
                    <motion.div
                        className="overflow-hidden w-48 shrink-0 self-center sm:self-start md:max-w-80 md:w-auto md:hidden 2xl:block 2xl:w-[35%] 2xl:self-center"
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
                    >
                        <Image
                            src={logotype}
                            alt="Rodriguez Events Catering & Cocktails"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </div>

                {/* Cuisine tags */}
                <motion.div
                    className="relative flex flex-wrap gap-2 mt-6 text-secondary sm:absolute sm:w-85 sm:right-12 sm:bottom-26 sm:gap-2.5 sm:mt-8 md:relative md:w-95 md:bottom-12 md:right-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                    {["Spanish", "South American", "Mediterranean", "Dietary Inclusive"].map((tag, i) => (
                        <motion.span
                            key={tag}
                            className="py-1.5 px-4 border border-secondary rounded-2xl text-xs font-medium tracking-wider uppercase sm:px-5"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.35, delay: 0.45 + i * 0.08, ease: "easeOut" }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>

            </article>
        </section>
    );
}