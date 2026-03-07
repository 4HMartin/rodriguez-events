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
        <section className="py-16 px-6 bg-cream sm:py-20 sm:px-10 lg:py-24 lg:px-[7vw]">

            {/* Gallery header */}
            <article className="flex justify-between items-end mb-10 flex-wrap gap-8 sm:mb-16">
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
                        className="text-3xl font-bold leading-tight text-charcoal mb-6 sm:text-4xl lg:text-5xl"
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

            {/* Grid — mobile: 2 cols simple, md: 4 cols, lg: 12 cols masonry */}
            <article className="grid grid-cols-2 gap-2 mb-10 sm:mb-16 md:grid-cols-4 lg:grid-cols-12 lg:grid-rows-[repeat(3,220px)]">

                {/* 01 - Wedding Reception */}
                <motion.div
                    className="col-span-2 h-52 overflow-hidden relative cursor-pointer rounded-xs group md:col-span-2 md:row-span-2 md:h-full lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-3"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
                >
                    <Image src={imageWedding} alt="wedding-reception" className="object-cover w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Wedding Reception</span>
                    </div>
                </motion.div>

                {/* 02 - Spanish Tapas */}
                <motion.div
                    className="col-span-1 h-40 overflow-hidden relative cursor-pointer rounded-xs group md:col-span-2 md:h-52 lg:col-start-6 lg:col-end-10 lg:row-start-1 lg:row-end-2 lg:h-full"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
                >
                    <Image src={imageSpanishTapas} alt="spanish-tapas" className="object-cover w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Spanish Tapas</span>
                    </div>
                </motion.div>

                {/* 03 - Paella */}
                <motion.div
                    className="col-span-1 h-40 overflow-hidden relative cursor-pointer rounded-xs group md:col-span-2 md:h-52 lg:col-start-10 lg:col-end-13 lg:row-start-1 lg:row-end-2 lg:h-full"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
                >
                    <Image src={imagePaella} alt="paella" className="object-cover object-bottom w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Paella</span>
                    </div>
                </motion.div>

                {/* 04 - Mediterranean */}
                <motion.div
                    className="col-span-1 h-40 overflow-hidden relative cursor-pointer rounded-xs group md:col-span-1 md:h-52 lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
                >
                    <Image src={iamgeMediterranean} alt="mediterranean" className="object-cover object-[50%_62%] w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Mediterranean</span>
                    </div>
                </motion.div>

                {/* 05 - Corporate Event */}
                <motion.div
                    className="col-span-1 h-40 overflow-hidden relative cursor-pointer rounded-xs group md:col-span-3 md:row-span-2 md:h-full lg:col-start-8 lg:col-end-13 lg:row-start-2 lg:row-end-4 lg:h-full"
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
                >
                    <Image src={imageCorporate} alt="Corporate Event" className="object-cover w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">Corporate Event</span>
                    </div>
                </motion.div>

                {/* 06 - South American */}
                <motion.div
                    className="col-span-1 h-40 overflow-hidden relative cursor-pointer rounded-xs group md:col-span-2 md:h-52 lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:row-end-4 lg:h-full"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                >
                    <Image src={imageSouthAmerican} alt="South American" className="object-cover object-center w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent to-60% opacity-0 transition-opacity duration-500 flex items-end p-5 group-hover:opacity-100">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white">South American</span>
                    </div>
                </motion.div>

                {/* 07 - Private Dining */}
                <motion.div
                    className="col-span-1 h-40 overflow-hidden relative cursor-pointer rounded-xs group md:col-span-2 md:h-52 lg:col-start-5 lg:col-end-8 lg:row-start-3 lg:row-end-4 lg:h-full"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
                >
                    <Image src={imagePrivateDining} alt="Private Dining" className="object-cover w-full h-full transition-all duration-300 ease-in-out brightness-95 group-hover:brightness-100 group-hover:scale-105" />
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