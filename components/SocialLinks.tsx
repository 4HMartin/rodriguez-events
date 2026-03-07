"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function SocialLinks() {

    const instagramLink = process.env.NEXT_PUBLIC_INSTAGRAM_LINK;
    const facebookLink = process.env.NEXT_PUBLIC_FACEBOOK_LINK;
    const tiktokLink = process.env.NEXT_PUBLIC_TIKTOK_LINK;

    return (
        <motion.div className="hidden fixed top-1/2 left-4 -translate-y-1/2 lg:flex flex-col gap-3 justify-center md:justify-start xl:left-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
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
        </motion.div>
    )
}