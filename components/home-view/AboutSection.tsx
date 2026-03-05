import Image from "next/image";
import aboutImage from "@/public/images/ui/about/about-image-02.webp";
import logotype from "@/public/images/ui/logotype.webp";
import TWIAAward from "@/public/images/ui/about/TWIA_Award_2025.webp";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function AboutSection(){
    return (
        <section className="grid grid-cols-2 bg-primary max-h-150">
            {/* Image */}
            <article className="relative overflow-hidden max-h-150 after:absolute after:inset-0 after:bg-linear-to-r after:from-75% after:from-transparent after:to-primary">
                {/* TWIA Award badge link */}
                <Link 
                    href={"https://directory.the-wedding-industry-awards.co.uk/united-kingdom/oswestry/wedding-caterer/rodriguez-events-ltd"}
                    target="_blank"
                    className="absolute top-6 left-6 z-10 p-2 w-38 rounded-lg bg-cream border-2 border-b-pink-700 shadow-xl group"
                >
                    <ExternalLink className="absolute top-2 right-2 w-5 h-5 transition-all group-hover:text-pink-700"/>
                    <Image
                        src={TWIAAward}
                        alt="The wedding industry awards - 2025 - Rodriguez Events"
                        className="object-cover w-full h-full transition-all group-hover:scale-105"
                    />
                </Link>
                <Image
                    src={aboutImage}
                    alt="A family passion for culinary excellence"
                    className="object-cover object-[50%_100%] w-full h-full opacity-95"
                />
            </article>

            {/* Content */}
            <article className="py-20 pr-[6vw] pl-[4vw]">
                <div className="flex items-center">
                    <div>
                        {/* Tag */}
                        <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-8 before:w-10 before:h-px before:bg-secondary">
                            Our Story
                        </span>
                        {/* Title */}
                        <h2 className="text-5xl font-bold leading-tight text-white mb-6">
                            A Family Passion for <em className="italic text-secondary">Culinary Excellence</em>
                        </h2>
                        {/* Separator */}
                        <div className="w-15 h-0.5 bg-linear-to-r from-secondary to-secondary-light my-6"></div>
                        {/* Description */}
                        <p className="text-lg font-serif font-light leading-relaxed text-cream-warm max-w-105 mb-12">
                            A family-run catering company bringing the warmth of Spanish, South American & Mediterranean cuisine to your most cherished celebrations.
                        </p>
                    </div>
                    <div className="overflow-hidden max-w-80">
                        <Image
                            src={logotype}
                            alt="Rodriguez Events Catering & Cocktails"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 mt-8 text-secondary">
                    <span className="py-1.5 px-5 border border-secondary rounded-2xl text-xs font-medium tracking-wider uppercase">
                        Spanish
                    </span>
                    <span className="py-1.5 px-5 border border-secondary rounded-2xl text-xs font-medium tracking-wider uppercase">
                        South American
                    </span>
                    <span className="py-1.5 px-5 border border-secondary rounded-2xl text-xs font-medium tracking-wider uppercase">
                        Mediterranean
                    </span>
                    <span className="py-1.5 px-5 border border-secondary rounded-2xl text-xs font-medium tracking-wider uppercase">
                        Dietary Inclusive
                    </span>
                </div>
            </article>
        </section>
    )
}