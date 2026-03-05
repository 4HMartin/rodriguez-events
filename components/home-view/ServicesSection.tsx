import { Building2, ChefHat, Heart } from "lucide-react";
import Link from "next/link";

export default function ServicesSection(){
    return (
        <section className="py-10 px-[7vw] bg-cream-warm">
            {/* Services header */}
            <article className="flex justify-between items-end mb-16 flex-wrap gap-8">
                <div className="max-w-120">
                    {/* Tag */}
                    <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-8 before:w-10 before:h-px before:bg-secondary">
                        Our Services
                    </span>
                    <h2 className="text-5xl font-bold leading-tight text-charcoal mb-6">
                        Crafted for <em className="italic text-primary">Every Occasion</em>
                    </h2>
                    <div className="w-15 h-0.5 bg-linear-to-r from-secondary to-secondary-light my-6"></div>
                    <p className="text-lg font-serif font-light leading-relaxed text-charcoal-light max-w-105 mb-12">
                        From intimate private dinners to grand wedding receptions, we bring passion, precision, and vibrant flavour to every event we touch.
                    </p>
                </div>
            </article>

            {/* Services Grid */}
            <article className="grid grid-cols-3 gap-0.5">
                {/* Weddings card */}
                <div className="relative overflow-hidden bg-white py-12 px-10 rounded-xs transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-primary before:to-secondary before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 hover:cursor-pointer hover:-translate-y-1.5 hover:before:scale-x-100 group">
                    <span className="font-serif text-6xl font-bold text-neutral-gray leading-none transition-all duration-300 mb-4 absolute top-6 right-8 group-hover:text-primary">
                        01
                    </span>
                    <div className="w-12 h-12 mb-6 bg-cream-warm rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-primary"/>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
                        Wedding Catering
                    </h3>
                    <p className="text-sm font-sans leading-relaxed text-charcoal-light mb-6">
                        Your wedding day deserves perfection. We create bespoke menus that reflect your story — from romantic tapas receptions to lavish three-course celebrations with authentic Spanish and Mediterranean flair.
                    </p>
                    <Link href={'/weddings'} className="text-xs font-semibold tracking-widest uppercase text-primary inline-flex items-center gap-2 transition-gap duration-200 hover:gap-3.5 after:content-['→']">
                        Explore Weddings
                    </Link>
                </div>

                {/* Private chef at home card */}
                <div className="relative overflow-hidden bg-white py-12 px-10 rounded-xs transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-primary before:to-secondary before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 hover:cursor-pointer hover:-translate-y-1.5 hover:before:scale-x-100 group">
                    <span className="font-serif text-6xl font-bold text-neutral-gray leading-none transition-all duration-300 mb-4 absolute top-6 right-8 group-hover:text-primary">
                        02
                    </span>
                    <div className="w-12 h-12 mb-6 bg-cream-warm rounded-full flex items-center justify-center">
                        <ChefHat className="w-6 h-6 text-primary"/>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
                        Private Chef at Home
                    </h3>
                    <p className="text-sm font-sans leading-relaxed text-charcoal-light mb-6">
                        Transform your home into a fine dining experience. Our private chef service brings restaurant-quality South American and Mediterranean cuisine directly to your table for intimate gatherings and celebrations.
                    </p>
                    <Link href={'/weddings'} className="text-xs font-semibold tracking-widest uppercase text-primary inline-flex items-center gap-2 transition-gap duration-200 hover:gap-3.5 after:content-['→']">
                        Book a Chef
                    </Link>
                </div>

                {/* Corporate Events card */}
                <div className="relative overflow-hidden bg-white py-12 px-10 rounded-xs transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-primary before:to-secondary before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 hover:cursor-pointer hover:-translate-y-1.5 hover:before:scale-x-100 group">
                    <span className="font-serif text-6xl font-bold text-neutral-gray leading-none transition-all duration-300 mb-4 absolute top-6 right-8 group-hover:text-primary">
                        03
                    </span>
                    <div className="w-12 h-12 mb-6 bg-cream-warm rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary"/>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
                        Corporate Events
                    </h3>
                    <p className="text-sm font-sans leading-relaxed text-charcoal-light mb-6">
                        Impress clients and energise teams with memorable corporate catering. Buffet lunches, plated dinners, cocktail receptions — delivered with professional precision and unforgettable flavour.
                    </p>
                    <Link href={'/weddings'} className="text-xs font-semibold tracking-widest uppercase text-primary inline-flex items-center gap-2 transition-gap duration-200 hover:gap-3.5 after:content-['→']">
                        Corporate Options
                    </Link>
                </div>
            </article>
        </section>
    )
}