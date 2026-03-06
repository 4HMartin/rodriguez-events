import Link from "next/link";

export default function CTABandSection(){

    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;

    return (
        <section className="py-24 px-[7vw] bg-linear-to-l from-[#1a1a2e] to-charcoal flex items-center justify-between gap-12 flex-wrap">
            <article>
                {/* Tag */}
                <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-8 before:w-10 before:h-px before:bg-secondary">
                    Get in Touch
                </span>
                {/* Title */}
                <h2 className="text-5xl font-bold leading-tight text-white mb-6 max-w-130">
                    Ready to Create Something <em className="italic text-secondary">Extraordinary?</em>
                </h2>
                {/* Description */}
                <p className="text-lg font-sans font-light leading-relaxed text-cream-warm max-w-160 mb-12">
                    Tell us about your event and we'll craft a bespoke proposal — at no obligation. Serving Shropshire, Staffordshire, North Wales and the West Midlands.
                </p>
            </article>
            <article className="flex flex-col gap-4 shrink-0">
                <Link href={`mailto:${contactEmail}`} className="bg-secondary text-charcoal py-4 px-10 rounded-xs text-sm font-bold tracking-widest uppercase text-decoration-none transition-all duration-300 text-center border-2 border-secondary hover:bg-secondary-light hover:border-secondary-light">
                    Request a Quote
                </Link>
                <Link href={`tel:${contactPhone}`} className="bg-transparent text-white py-4 px-10 rounded-xs text-sm font-bold tracking-widest uppercase text-decoration-none transition-all duration300 text-center border-2 border-slate-500 hover:bg-white/10 hover:border-white">
                    Book a Call
                </Link>
            </article>
        </section>
    )
}