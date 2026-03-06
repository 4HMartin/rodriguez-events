"use client"
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import imageWedding from "@/public/images/ui/portfolio-grid/wedding.webp";
import imageSpanishTapas from "@/public/images/ui/portfolio-grid/spanish-tapas.webp";
import imagePaella from "@/public/images/ui/portfolio-grid/paella.webp";
import iamgeMediterranean from "@/public/images/ui/portfolio-grid/mediterranean.webp";
import imageCorporate from "@/public/images/ui/portfolio-grid/corporate.webp";
import imageSouthAmerican from "@/public/images/ui/portfolio-grid/south-american.webp";
import imagePrivateDining from "@/public/images/ui/portfolio-grid/private-dining.webp";

export default function PortfolioSection(){
    return (
        <section className="py-24 px-[7vw] bg-cream">

            {/* Gallery header */}
            <article className="flex justify-between items-end mb-16 flex-wrap gap-8">
                <div className="w-fit">

                    {/* Tag */}
                    <motion.span
                        className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-8 before:w-10 before:h-px before:bg-secondary"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        Our Portfolio
                    </motion.span>

                    {/* H2 */}
                    <motion.h2
                        className="text-5xl font-bold leading-tight text-charcoal mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                    >
                        A Taste of Our <em className="italic text-primary">Excellence</em>
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

                </div>
            </article>

            {/* Grid */}
            <article className="grid grid-cols-12 grid-rows-[repeat(3,220px)] gap-2 mb-16">

                {/* 01 - Wedding Reception — large, entra desde la izquierda */}
                <motion.div
                    className="col-start-1 col-end-6 row-start-1 row-end-3 overflow-hidden relative cursor-pointer rounded-xs group"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
                >
                    <Image src={imageWedding} alt="wedding-reception"
                        className="object-cover w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Wedding Reception</span>
                    </div>
                </motion.div>

                {/* 02 - Spanish Tapas */}
                <motion.div
                    className="col-start-6 col-end-10 row-start-1 row-end-2 overflow-hidden relative cursor-pointer rounded-xs group"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
                >
                    <Image src={imageSpanishTapas} alt="spanish-tapas"
                        className="object-cover w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Spanish Tapas</span>
                    </div>
                </motion.div>

                {/* 03 - Paella */}
                <motion.div
                    className="col-start-10 col-end-13 row-start-1 row-end-2 overflow-hidden relative cursor-pointer rounded-xs group"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
                >
                    <Image src={imagePaella} alt="paella"
                        className="object-cover object-bottom w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Paella</span>
                    </div>
                </motion.div>

                {/* 04 - Mediterranean */}
                <motion.div
                    className="col-start-6 col-end-8 row-start-2 row-end-3 overflow-hidden relative cursor-pointer rounded-xs group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
                >
                    <Image src={iamgeMediterranean} alt="mediterranean"
                        className="object-cover object-[50%_62%] w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Mediterranean</span>
                    </div>
                </motion.div>

                {/* 05 - Corporate Event — large, entra desde la derecha */}
                <motion.div
                    className="col-start-8 col-end-13 row-start-2 row-end-4 overflow-hidden relative cursor-pointer rounded-xs group"
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
                >
                    <Image src={imageCorporate} alt="Corporate Event"
                        className="object-cover w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Corporate Event</span>
                    </div>
                </motion.div>

                {/* 06 - South American */}
                <motion.div
                    className="col-start-1 col-end-5 row-start-3 row-end-4 overflow-hidden relative cursor-pointer rounded-xs group"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                >
                    <Image src={imageSouthAmerican} alt="South American"
                        className="object-cover object-center w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">South American</span>
                    </div>
                </motion.div>

                {/* 07 - Private Dining */}
                <motion.div
                    className="col-start-5 col-end-8 row-start-3 row-end-4 overflow-hidden relative cursor-pointer rounded-xs group"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
                >
                    <Image src={imagePrivateDining} alt="Private Dining"
                        className="object-cover w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Private Dining</span>
                    </div>
                </motion.div>

            </article>

            {/* View full gallery CTA */}
            <motion.div
                className="w-full flex items-center justify-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Link href={'/gallery'} className="w-fit min-w-fit py-3 px-6 border-2 border-primary bg-primary text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium rounded-xs hover:bg-white hover:text-primary block">
                        View Full Gallery
                    </Link>
                </motion.div>
            </motion.div>

        </section>
    );
}