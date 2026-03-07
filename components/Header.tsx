'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import imagotype from '@/public/images/ui/imagotype_300x300.png';
import logo_text from '@/public/images/ui/logo_text_650x164.png';
// import logotype from '@/public/images/ui/logotype_250x250.png';
import { Mail, Phone, Award, ExternalLink } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    return (
        <>
            {/* Top header */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute top-0 left-0 z-50 w-full bg-primary flex items-center py-1 sm:justify-center sm:gap-8 sm:px-2 lg:px-16 xl:px-30 lg:justify-between"
            >
                {/* Award link */}
                <Link href={`${awardLink}`} className="hidden sm:flex itmes-center gap-2 text-white text-sm group hover:cursor-pointer">
                    <Award className="w-5 text-white pb-0.5 transition-all group-hover:text-secondary" />
                    The Wedding Industry Awards
                    <ExternalLink className="w-4 text-white/50 pb-0.5 transition-all hidden group-hover:block" />
                </Link>
                <div className="flex items-center gap-8">
                    {/* Email link */}
                    <Link href={`mailto:${contactEmail}`} className="hidden sm:flex itmes-center gap-2 text-white text-sm group hover:cursor-pointer">
                        <Mail className="w-5 text-white pb-0.5 transition-all group-hover:text-secondary" />
                        hola@rodriguez-events.com
                    </Link>
                    {/* Phone link */}
                    <Link href={`tel:${contactPhone}`} className="hidden sm:flex itmes-center gap-2 text-white text-sm group hover:cursor-pointer">
                        <Phone className="w-4.5 text-white pb-0.5 transition-all group-hover:text-secondary" />
                        07495313711
                    </Link>
                </div>
            </motion.div>

            {/* Main header */}
            <motion.header className={`w-full bg-cream flex flex-row justify-between items-center px-4 top-1 py-4 z-50 transition-all ease-in-out duration-300 border border-transparent border-b-secondary-light sm:top-8 md:h-24 md:py-12 md:px-8 lg:px-16 xl:px-30 ${isScrolled ? "fixed top-0! backdrop-blur-md bg-background/10 shadow-md shadow-black/5" : "absolute top-0"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
            >
                {/* Mobile Menu component */}
                <MobileMenu />

                {/* Imagotype */}
                <Link href="/">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15, duration: 1.05, ease: "easeOut" }}
                        className="hidden relative items-center gap-4 md:flex lg:w-20 xl:w-68"
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
                            className="w-40 md:hidden xl:block"
                        />
                    </motion.div>
                </Link>

                <nav className="hidden md:flex justify-end items-center font-semibold tracking-wide w-fit whitespace-nowrap xl:gap-8">
                    {/* Menú de navegación */}
                    <div className="md:flex md:justify-between md:items-center md:w-fit md:gap-4 2xl:gap-8">
                        <NavLinks />
                    </div>
                </nav>

                {/* Contact us button */}
                <Link href="/contact" onClick={toggleMenu} className={`hidden relative w-fit min-w-fit py-3 px-6 border-2 border-primary bg-primary text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium rounded-xs hover:bg-white hover:text-primary lg:block ${isActive('/contact') ? 'active-button' : ''}`}>
                    request a quote
                </Link>
            </motion.header>
        </>
    )
}