'use client';
// components
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// local images
import imagotype from '@/public/images/ui/imagotype_300x300.png';
import logo_text from '@/public/images/ui/logo_text_650x164.png';
// import logotype from '@/public/images/ui/logotype_250x250.png';
// icons
import { LucideX, Menu, Mail, Phone, Award, ExternalLink } from "lucide-react";

export default function Header(){

    const pathname = usePathname();
    const isActive = (href: string) => {
        return pathname === href;
    }
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    interface NavLinkProps {
        toggleMenu?: () => void
    }

    const awardLink = process.env.NEXT_PUBLIC_AWARD_LINK || "";
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
    const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";

    useEffect(()=>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    const NavLinks = ({ toggleMenu }: NavLinkProps) => (
        <>
            <Link href="/weddings" onClick={toggleMenu} className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/weddings') ? 'active' : ''}`}>
                weddings
            </Link>
            <Link href="/chef-at-home" onClick={toggleMenu} className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/chef-at-home') ? 'active' : ''}`}>
                chef at home
            </Link>
            <Link href="/corporate" onClick={toggleMenu} className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/corporate') ? 'active' : ''}`}>
                corporate
            </Link>
            <Link href="/gallery" onClick={toggleMenu} className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/gallery') ? 'active' : ''}`}>
                gallery
            </Link>
            <Link href="/about" onClick={toggleMenu} className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/about') ? 'active' : ''}`}>
                about
            </Link>
            <Link href="/partners" onClick={toggleMenu} className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/partners') ? 'active' : ''}`}>
                partners
            </Link>
        </>
    );

    return(
        <>
        {/* Top header */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden absolute top-0 left-0 z-50 w-full bg-primary sm:flex items-center py-1 sm:justify-center sm:gap-8 sm:px-2 lg:px-16 xl:px-30 lg:justify-between"
        >
            {/* Award link */}
            <Link href={`${awardLink}`} className="flex itmes-center gap-2 text-white text-sm group hover:cursor-pointer">
                <Award className="w-5 text-white pb-0.5 transition-all group-hover:text-secondary"/>
                The Wedding Industry Awards
                <ExternalLink className="w-4 text-white/50 pb-0.5 transition-all hidden group-hover:block"/>
            </Link>
            <div className="flex items-center gap-8">
                {/* Email link */}
                <Link href={`mailto:${contactEmail}`} className="flex itmes-center gap-2 text-white text-sm group hover:cursor-pointer">
                    <Mail className="w-5 text-white pb-0.5 transition-all group-hover:text-secondary"/>
                    hola@rodriguez-events.com
                </Link>
                {/* Phone link */}
                <Link href={`tel:${contactPhone}`} className="flex itmes-center gap-2 text-white text-sm group hover:cursor-pointer">
                    <Phone className="w-4.5 text-white pb-0.5 transition-all group-hover:text-secondary"/>
                    07495313711
                </Link>
            </div>
        </motion.div>

        {/* Main header */}
        <motion.header className={`w-full flex flex-row justify-between items-center px-4 top-0 bg-[--background] py-4 z-50 transition-all ease-in-out duration-300 border border-b-secondary-light sm:top-8 md:h-20 md:py-12 md:px-8 lg:px-16 xl:px-30 ${isScrolled ? "fixed top-0! backdrop-blur-md bg-background/10 shadow-md shadow-black/5" : "absolute top-0"} ${isScrolled && isOpen ? "h-[60vh]!" : "h-auto"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
            >
                {/* Imagotype */}
                <Link href="/">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                        className="relative w-68 flex items-center gap-4 lg:w-20 xl:w-68"
                    >
                        {/* <Image
                            src={logotype}
                            alt="Rodriguez Events Logotype"
                            className="w-18 h-18 rounded-full"
                        /> */}
                        <Image
                            src={imagotype}
                            alt="Rodriguez Events Imagotype"
                            className="w-18 h-18"
                        />
                        <Image
                            src={logo_text}
                            alt="Rodriguez Events Catering & Cocktails"
                            className="w-40 lg:hidden xl:block"
                        />
                    </motion.div>
                </Link>

                <nav className="flex justify-end items-center font-semibold tracking-wide w-fit whitespace-nowrap xl:gap-8">
                    {/* Botón del menú hamburguesa */}
                    <button className="lg:hidden" onClick={toggleMenu}>
                        {isOpen ? <LucideX className="w-8 h-8 text-charcoal "/> : <Menu className="w-8 h-8 text-charcoal "/>}
                    </button>

                    {/* Menú de navegación */}
                    <div className="hidden lg:flex lg:justify-between lg:items-center lg:w-fit lg:gap-4 2xl:gap-8">
                        <NavLinks />
                    </div>

                    {/* Menú hamburguesa desplegable */}
                    {isOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                            className={`fixed top-0 right-0 h-full w-64 bg-cream-warm shadow-lg flex flex-col items-start gap-4 p-6 lg:hidden z-100`}
                        >
                            <button className="self-end mb-4 md:mr-8" onClick={toggleMenu}>
                                <LucideX className={`w-8 h-8`} />
                            </button>
                            <NavLinks toggleMenu={toggleMenu} />

                            <div className="flex flex-col w-full items-start mt-16 gap-4">
                                {/* Award link */}
                                <Link href={"https://directory.the-wedding-industry-awards.co.uk/united-kingdom/oswestry/wedding-caterer/rodriguez-events-ltd"} className="flex items-center justify-center gap-2 text-charcoal text-sm font-light group hover:cursor-pointer">
                                    <Award className="w-4 text-charcoal pb-0.5 transition-all group-hover:text-secondary"/>
                                    The Wedding Industry Awards
                                </Link>
                                
                                {/* Email link */}
                                <Link href={"mailto:hola@rodriguez-events.com"} className="flex itmes-center gap-2 text-charcoal text-sm  font-light group hover:cursor-pointer">
                                    <Mail className="w-4 text-charcoal pb-0.5 transition-all group-hover:text-secondary"/>
                                    hola@rodriguez-events.com
                                </Link>
                                
                                {/* Phone link */}
                                <Link href={"tel:07495313711"} className="flex itmes-center gap-2 text-charcoal text-sm font-light group hover:cursor-pointer">
                                    <Phone className="w-4 text-charcoal pb-0.5 transition-all group-hover:text-secondary"/>
                                    07495313711
                                </Link>
                                
                            </div>
                        </motion.div>
                    )}
                </nav>

                {/* Contact us button */}
                <Link href="/contact" onClick={toggleMenu} className={`hidden relative w-fit min-w-fit py-3 px-6 border-2 border-primary bg-primary text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium rounded-xs hover:bg-white hover:text-primary lg:block ${isActive('/contact') ? 'active-button' : ''}`}>
                    request a quote
                </Link>
        </motion.header>
        </>
    )
}