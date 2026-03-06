"use client"
import { Building2, ChefHat, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function ServicesSection(){
    return (
        <section className="py-24 px-[7vw] bg-cream-warm">

            {/* Services header */}
            <article className="flex justify-between items-end mb-16 flex-wrap gap-8">
                <div className="max-w-120">

                    {/* Tag */}
                    <motion.span
                        className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-8 before:w-10 before:h-px before:bg-secondary"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        Our Services
                    </motion.span>

                    {/* H2 */}
                    <motion.h2
                        className="text-5xl font-bold leading-tight text-charcoal mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                    >
                        Crafted for <em className="italic text-primary">Every Occasion</em>
                    </motion.h2>

                    {/* Divider */}
                    <motion.div
                        className="w-15 h-0.5 bg-linear-to-r from-secondary to-secondary-light my-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        style={{ originX: 0 }}
                        transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
                    />

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg font-serif font-light leading-relaxed text-charcoal-light max-w-105 mb-12"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
                    >
                        From intimate private dinners to grand wedding receptions, we bring passion, precision, and vibrant flavour to every event we touch.
                    </motion.p>

                </div>
            </article>

            {/* Services Grid */}
            <article className="grid grid-cols-3 gap-0.5">

                {/* Weddings card */}
                <motion.div
                    className="relative overflow-hidden bg-white py-12 px-10 rounded-xs transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-primary before:to-secondary before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 hover:cursor-pointer hover:-translate-y-1.5 hover:before:scale-x-100 group"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                    <span className="font-serif text-6xl font-bold text-neutral-gray leading-none transition-all duration-300 mb-4 absolute top-6 right-8 group-hover:text-primary">
                        01
                    </span>
                    <div className="w-12 h-12 mb-6 bg-cream-warm rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-primary"/>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
                        Wedding Catering
                    </h3>
                    <p className="text-sm font-sans leading-relaxed text-charcoal-light mb-6">
                        Your wedding day deserves perfection. We create bespoke menus that reflect your story — from romantic tapas receptions to lavish three-course celebrations with authentic Spanish and Mediterranean flair.
                    </p>
                    <Link href={'/weddings'} className="text-xs font-semibold tracking-widest uppercase text-primary inline-flex items-center gap-2 transition-gap duration-200 hover:gap-3.5 after:content-['→']">
                        Explore Weddings
                    </Link>
                </motion.div>

                {/* Private chef at home card */}
                <motion.div
                    className="relative overflow-hidden bg-white py-12 px-10 rounded-xs transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-primary before:to-secondary before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 hover:cursor-pointer hover:-translate-y-1.5 hover:before:scale-x-100 group"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
                >
                    <span className="font-serif text-6xl font-bold text-neutral-gray leading-none transition-all duration-300 mb-4 absolute top-6 right-8 group-hover:text-primary">
                        02
                    </span>
                    <div className="w-12 h-12 mb-6 bg-cream-warm rounded-full flex items-center justify-center">
                        <ChefHat className="w-6 h-6 text-primary"/>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
                        Private Chef at Home
                    </h3>
                    <p className="text-sm font-sans leading-relaxed text-charcoal-light mb-6">
                        Transform your home into a fine dining experience. Our private chef service brings restaurant-quality South American and Mediterranean cuisine directly to your table for intimate gatherings and celebrations.
                    </p>
                    <Link href={'/chef-at-home'} className="text-xs font-semibold tracking-widest uppercase text-primary inline-flex items-center gap-2 transition-gap duration-200 hover:gap-3.5 after:content-['→']">
                        Book a Chef
                    </Link>
                </motion.div>

                {/* Corporate Events card */}
                <motion.div
                    className="relative overflow-hidden bg-white py-12 px-10 rounded-xs transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-primary before:to-secondary before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 hover:cursor-pointer hover:-translate-y-1.5 hover:before:scale-x-100 group"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.34, ease: "easeOut" }}
                >
                    <span className="font-serif text-6xl font-bold text-neutral-gray leading-none transition-all duration-300 mb-4 absolute top-6 right-8 group-hover:text-primary">
                        03
                    </span>
                    <div className="w-12 h-12 mb-6 bg-cream-warm rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary"/>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
                        Corporate Events
                    </h3>
                    <p className="text-sm font-sans leading-relaxed text-charcoal-light mb-6">
                        Impress clients and energise teams with memorable corporate catering. Buffet lunches, plated dinners, cocktail receptions — delivered with professional precision and unforgettable flavour.
                    </p>
                    <Link href={'/corporate'} className="text-xs font-semibold tracking-widest uppercase text-primary inline-flex items-center gap-2 transition-gap duration-200 hover:gap-3.5 after:content-['→']">
                        Corporate Options
                    </Link>
                </motion.div>

            </article>
        </section>
    );
}