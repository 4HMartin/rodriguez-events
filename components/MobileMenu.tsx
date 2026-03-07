"use client"
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { Award, Mail, MenuIcon, Phone } from "lucide-react";
import Image from "next/image";
import imagotype from "@/public/images/ui/imagotype_300x300.png";
import logoText from "@/public/images/ui/logo_text_650x164.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const instagramLink = process.env.NEXT_PUBLIC_INSTAGRAM_LINK;
    const facebookLink = process.env.NEXT_PUBLIC_FACEBOOK_LINK;
    const tiktokLink = process.env.NEXT_PUBLIC_TIKTOK_LINK;

    const pathname = usePathname();
    const isActive = (href: string) => {
        return pathname === href;
    }

    const NavLinks = () => (
        <>
            <Link href="/weddings" className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/weddings') ? 'active' : ''}`}>
                weddings
            </Link>
            <Link href="/chef-at-home" className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/chef-at-home') ? 'active' : ''}`}>
                chef at home
            </Link>
            <Link href="/corporate" className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/corporate') ? 'active' : ''}`}>
                corporate
            </Link>
            <Link href="/gallery" className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/gallery') ? 'active' : ''}`}>
                gallery
            </Link>
            <Link href="/about" className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/about') ? 'active' : ''}`}>
                about
            </Link>
            <Link href="/partners" className={`text-charcoal relative uppercase tracking-widest text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-secondary after:scale-x-0 after:origin-left after:transition-all hover:text-secondary hover:after:scale-x-100 ${isActive('/partners') ? 'active' : ''}`}>
                partners
            </Link>
        </>
    );

    return (
        !isDesktop &&
        <div>
            <Drawer direction="right">
                <DrawerTrigger>
                    <MenuIcon />
                </DrawerTrigger>
                <DrawerContent>
                    {/* <DrawerTitle className="sr-only">Mobile Navigation Menu</DrawerTitle> */}
                    <DrawerHeader>
                        <DrawerTitle className="flex items-center justify-center gap-2 mt-4 mb-10">
                            <Image src={imagotype} alt="Rodriguez Events Ltd."
                                width={250} height={250}
                                className="object-cover w-14 h-14"
                            />
                            <Image src={logoText} alt="Rodriguez Events Ltd."
                                className="object-cover w-38"
                            />
                        </DrawerTitle>
                        {/* Links */}
                        <div className="flex flex-col justify-center items-center gap-6">
                            <NavLinks />
                        </div>
                        <div className="flex flex-col w-full items-center mt-16 gap-4">
                            {/* Award link */}
                            <Link href={"https://directory.the-wedding-industry-awards.co.uk/united-kingdom/oswestry/wedding-caterer/rodriguez-events-ltd"} className="flex items-center justify-center gap-2 text-charcoal text-sm font-light group hover:cursor-pointer">
                                <Award className="w-4 text-charcoal pb-0.5 transition-all group-hover:text-secondary" />
                                The Wedding Industry Awards
                            </Link>
                            {/* Email link */}
                            <Link href={"mailto:hola@rodriguez-events.com"} className="flex itmes-center gap-2 text-charcoal text-sm  font-light group hover:cursor-pointer">
                                <Mail className="w-4 text-charcoal pb-0.5 transition-all group-hover:text-secondary" />
                                hola@rodriguez-events.com
                            </Link>
                            {/* Phone link */}
                            <Link href={"tel:07495313711"} className="flex itmes-center gap-2 text-charcoal text-sm font-light group hover:cursor-pointer">
                                <Phone className="w-3.5 text-charcoal pb-0.5 transition-all group-hover:text-secondary" />
                                07495313711
                            </Link>
                        </div>
                    </DrawerHeader>
                    <DrawerFooter className="w-full flex items-center mb-4">
                        {/* Social links */}
                        <div className="flex gap-3">
                            {/* Instagram */}
                            <Link href={`${instagramLink}`} className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center transition-all duration-300 text-decoration-none group hover:border-secondary hover:bg-secondary/10 hover:text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </Link>
                            {/* Facebook */}
                            <Link href={`${facebookLink}`} className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center transition-all duration-300 text-decoration-none group hover:border-secondary hover:bg-secondary/10 hover:text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link>
                            {/* TikTok */}
                            <Link href={`${tiktokLink}`} className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center transition-all duration-300 text-decoration-none group hover:border-secondary hover:bg-secondary/10 hover:text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9b9b9b" viewBox="0 0 16 16">
                                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                                </svg>
                            </Link>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}