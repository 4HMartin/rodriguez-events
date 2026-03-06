"use client"
import { BadgeCheck, BookOpenText, MapPinned, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustBanner(){
    return (
        <motion.section
            className="py-10 px-[7vw] bg-primary flex items-center justify-around wrap gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Fully Insured */}
            <motion.div
                className='flex items-center gap-3.5 text-cream'
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
                <BadgeCheck className='w-10 h-10 text-secondary shrink-0'/>
                <div>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        Fully Insured
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Licensed & Certified
                    </span>
                </div>
            </motion.div>

            <motion.div
                className='w-px h-10 bg-secondary'
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            />

            {/* Family-Run */}
            <motion.div
                className='flex items-center gap-3.5 text-cream'
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            >
                <Users className='w-10 h-10 text-secondary shrink-0'/>
                <div>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        Family-Run
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Personal service
                    </span>
                </div>
            </motion.div>

            <motion.div
                className='w-px h-10 bg-secondary'
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
            />

            {/* Bespoke Menus */}
            <motion.div
                className='flex items-center gap-3.5 text-cream'
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
                <BookOpenText className='w-10 h-10 text-secondary shrink-0'/>
                <div>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        Bespoke Menus
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Tailored to you
                    </span>
                </div>
            </motion.div>

            <motion.div
                className='w-px h-10 bg-secondary'
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            />

            {/* West Midlands & Beyond */}
            <motion.div
                className='flex items-center gap-3.5 text-cream'
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            >
                <MapPinned className='w-10 h-10 text-secondary shrink-0'/>
                <div>
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