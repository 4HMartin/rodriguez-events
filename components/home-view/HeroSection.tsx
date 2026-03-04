import Image from "next/image";
import Link from "next/link";
import heroImage01 from "@/public/images/ui/hero/IMG_wedding.jpg";

export default function HeroSection(){

    return (
        <section className="min-h-screen w-full grid grid-cols-2 pt-32.5 relative overflow-x-hidden">
            {/* Text content - left side */}
            <article className="flex flex-col justify-center py-[6vw] pr-[5vw] pl-[7vw]">
                {/* Tag */}
                <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-8 before:w-10 before:h-px before:bg-secondary">
                    Family-Run · Est. Shropshire
                </span>
                {/* H1 title */}
                <h1 className="text-7xl font-bold leading-tight text-charcoal mb-6">
                    Exquisite Flavours,
                    <em className="italic text-primary block">Unforgettable</em>
                    Moments
                </h1>
                {/* Hero sub */}
                <p className="text-lg font-serif font-light leading-relaxed text-charcoal-light max-w-105 mb-12">
                    A family-run catering company bringing the warmth of Spanish, South American & Mediterranean cuisine to your most cherished celebrations.
                </p>
                {/* CTAs */}
                <div className="flex items-center gap-4">
                    <Link href={"/contact"} className="w-fit min-w-fit py-3 px-6 border-2 border-primary bg-primary text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium rounded-xs hover:bg-white hover:text-primary lg:block">
                        Book Your Event
                    </Link>
                    <Link href={"/gallery"} className="w-fit min-w-fit py-3 px-6 border-2 border-charcoal bg-transparent text-charcoal transition-all duration-300 text-sm uppercase tracking-wider font-medium rounded-xs hover:bg-primary/5 hover:border-primary hover:text-primary lg:block">
                        View our work
                    </Link>
                </div>
            </article>

            {/* Image section - right side */}
            <article className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image 
                        src={heroImage01}
                        alt="hero_section_image"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Overlay */}
                <div className="hero-img-overlay"></div>
            </article>
        </section>
    )
}