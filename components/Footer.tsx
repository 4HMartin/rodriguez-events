import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Heart, MapPin } from "lucide-react";
import logotype from "@/public/images/ui/logotype.webp";

export default function Footer(){

    const instagramLink = process.env.NEXT_PUBLIC_INSTAGRAM_LINK;
    const facebookLink = process.env.NEXT_PUBLIC_FACEBOOK_LINK;
    const tiktokLink = process.env.NEXT_PUBLIC_TIKTOK_LINK;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal pt-14 pb-8 px-6 text-cream sm:px-10 sm:pt-16 lg:pt-20 lg:px-[7vw]">

            {/* Grid */}
            <section className="grid grid-cols-2 gap-x-8 gap-y-10 mb-12 sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-6 lg:gap-x-6 lg:mb-16 xl:gap-y-6">

                {/* Logotype */}
                <div className="col-span-2 flex justify-center sm:col-span-1 sm:justify-start lg:col-span-2 lg:row-start-1 rounded-full overflow-hidden xl:max-w-fit">
                    <Image src={logotype} width={300} height={300} alt="Rodriguez Events Limited" quality={100} className="object-cover w-full"/>
                </div>

                {/* Brand */}
                <article className="col-span-2 sm:col-span-2 lg:col-span-1 lg:row-start-1">
                    <p className="leading-relaxed max-w-full text-center mb-6 text-charcoal-pale sm:max-w-70 md:text-start">
                        A family-run catering company bringing the warmth of Spanish, South American & Mediterranean cuisine to your most cherished celebrations.
                    </p>
                    {/* Social links */}
                    <div className="flex gap-3 justify-center md:justify-start">
                        {/* Instagram */}
                        <Link href={`${instagramLink}`} className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center transition-all duration-300 text-decoration-none group hover:border-secondary hover:bg-secondary/10 hover:text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </Link>
                        {/* Facebook */}
                        <Link href={`${facebookLink}`} className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center transition-all duration-300 text-decoration-none group hover:border-secondary hover:bg-secondary/10 hover:text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </Link>
                        {/* TikTok */}
                        <Link href={`${tiktokLink}`} className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center transition-all duration-300 text-decoration-none group hover:border-secondary hover:bg-secondary/10 hover:text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9b9b9b" viewBox="0 0 16 16">
                                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                            </svg>
                        </Link>
                    </div>
                </article>

                {/* Services column */}
                <article className="col-span-1 lg:row-start-1 lg:col-start-5">
                    <h4 className="font-sans! text-xs font-semibold tracking-widest uppercase text-white/90 mb-6">
                        Services
                    </h4>
                    <ul className="list-none flex flex-col gap-3">
                        <li>
                            <Link href={'/wedding'} className="text-sm text-charcoal-pale transition-all duration-200 hover:text-secondary">
                                Wedding Catering
                            </Link>
                        </li>
                        <li>
                            <Link href={'/chef-at-home'} className="text-sm text-charcoal-pale transition-all duration-200 hover:text-secondary">
                                Chef at Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/corporate'} className="text-sm text-charcoal-pale transition-all duration-200 hover:text-secondary">
                                Corporate Events
                            </Link>
                        </li>
                        <li>
                            <Link href={'/gallery'} className="text-sm text-charcoal-pale transition-all duration-200 hover:text-secondary">
                                Photo Gallery
                            </Link>
                        </li>
                    </ul>
                </article>

                {/* Company column */}
                <article className="col-span-1 lg:row-start-1 lg:col-start-6">
                    <h4 className="font-sans! text-xs font-semibold tracking-widest uppercase text-white/90 mb-6">
                        Company
                    </h4>
                    <ul className="list-none flex flex-col gap-3">
                        <li>
                            <Link href={'/about'} className="text-sm text-charcoal-pale transition-all duration-200 hover:text-secondary">
                                Our Story
                            </Link>
                        </li>
                        <li>
                            <Link href={'/partners'} className="text-sm text-charcoal-pale transition-all duration-200 hover:text-secondary">
                                Recommended Suppliers
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'} className="text-sm text-charcoal-pale transition-all duration-200 hover:text-secondary">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href={'/privacy-policy'} className="text-sm text-charcoal-pale transition-all duration-200 hover:text-secondary">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </article>

                {/* Location */}
                <div className="col-span-2 flex items-start gap-2 sm:col-span-3 lg:row-start-2 lg:col-start-5 lg:col-span-2">
                    <MapPin className="w-5 h-5 text-white/90 shrink-0 mt-0.5 lg:w-6 lg:h-6"/>
                    <span className="text-sm text-charcoal-pale">
                        Covering Shropshire, Staffordshire, North Wales and the West Midlands.
                    </span>
                </div>

            </section>

            {/* Footer Bottom */}
            <section className="pt-8 border border-transparent border-t-charcoal-light flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center sm:flex-wrap sm:gap-4">
                <p className="font-sans text-charcoal-pale text-sm sm:text-base">
                    © {currentYear} Rodriguez Events Ltd.  —{'  '}
                    <Link href={'/privacy-policy'} className="text-secondary">
                        Privacy Policy
                    </Link>
                </p>
                <Link href={'https://4hmartin.com/'} target="_blank" className="font-sans text-charcoal-pale text-sm group flex items-center gap-2 sm:text-base">
                    Crafted with <Heart className="w-3.5 h-3.5 text-charcoal-pale"/> by <span className="text-secondary">Heber Martin Rodríguez</span>
                    <ExternalLink className="w-3 h-3 text-white transition-all duration-300 group-hover:text-emerald-500"/>
                </Link>
            </section>

        </footer>
    );
}