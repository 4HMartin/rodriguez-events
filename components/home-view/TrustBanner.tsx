"use client"
import { BadgeCheck, BookOpenText, MapPinned, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustBanner(){
    return (
        <motion.section
            className="py-10 px-[7vw] bg-primary flex flex-wrap items-center justify-center gap-6 sm:justify-around sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Fully Insured */}
            <motion.div
                className="flex flex-col items-center text-cream w-full justify-center sm:w-auto sm:flex-row sm:justify-start sm:gap-3.5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
                <BadgeCheck className='w-6 h-6 sm:w-10 sm:h-10 text-secondary shrink-0'/>
                <div className='flex flex-col items-center sm:items-start'>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        Fully Insured
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Licensed & Certified
                    </span>
                </div>
            </motion.div>

            <motion.div
                className="hidden sm:block w-px h-10 bg-secondary"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            />

            {/* Family-Run */}
            <motion.div
                className="flex flex-col items-center text-cream w-full justify-center sm:w-auto sm:flex-row sm:justify-start sm:gap-3.5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            >
                <Users className='w-6 h-6 sm:w-10 sm:h-10 text-secondary shrink-0'/>
                <div className='flex flex-col items-center sm:items-start'>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        Family-Run
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Personal service
                    </span>
                </div>
            </motion.div>

            <motion.div
                className="hidden sm:block w-px h-10 bg-secondary"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
            />

            {/* Bespoke Menus */}
            <motion.div
                className="flex flex-col items-center text-cream w-full justify-center sm:w-auto sm:flex-row sm:justify-start sm:gap-3.5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
                <BookOpenText className='w-6 h-6 sm:w-10 sm:h-10 text-secondary shrink-0'/>
                <div className='flex flex-col items-center sm:items-start'>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        Bespoke Menus
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Tailored to you
                    </span>
                </div>
            </motion.div>

            <motion.div
                className="hidden sm:block w-px h-10 bg-secondary"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            />

            {/* West Midlands & Beyond */}
            <motion.div
                className="flex flex-col items-center text-cream w-full justify-center sm:w-auto sm:flex-row sm:justify-start sm:gap-3.5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            >
                <MapPinned className='w-6 h-6 sm:w-10 sm:h-10 text-secondary shrink-0'/>
                <div className='flex flex-col items-center sm:items-start'>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        West Midlands & Beyond
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Shropshire · Staffs · N. Wales
                    </span>
                </div>
            </motion.div>

        </motion.section>
    );
}