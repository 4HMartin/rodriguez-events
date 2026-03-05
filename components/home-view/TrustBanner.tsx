import { BadgeCheck, BookOpenText, MapPinned, Users } from 'lucide-react';

export default function TrustBanner(){
    return (
        <section className="py-10 px-[7vw] bg-primary flex items-center justify-around wrap gap-8">
            {/* Fully Insured - Licensed and certified */}
            <div className='flex items-center gap-3.5 text-cream'>
                <BadgeCheck className='w-10 h-10 text-secondary shrink-0'/>
                <div>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        Fully Insured
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Licensed & Certified
                    </span>
                </div>
            </div>
            <div className='w-px h-10 bg-secondary'></div>

            {/* Family Run - Personal Service */}
            <div className='flex items-center gap-3.5 text-cream'>
                <Users className='w-10 h-10 text-secondary shrink-0'/>
                <div>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        Family-Run
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Personal service
                    </span>
                </div>
            </div>
            <div className='w-px h-10 bg-secondary'></div>

            {/* Bespoke Menus - Tailored to you */}
            <div className='flex items-center gap-3.5 text-cream'>
                <BookOpenText className='w-10 h-10 text-secondary shrink-0'/>
                <div>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        Bespoke Menus
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Tailored to you
                    </span>
                </div>
            </div>
            <div className='w-px h-10 bg-secondary'></div>

            {/* West Midlands & Beyond - Shropshire */}
            <div className='flex items-center gap-3.5 text-cream'>
                <MapPinned className='w-10 h-10 text-secondary shrink-0'/>
                <div>
                    <strong className='block font-serif text-lg text-white tracking-wide'>
                        West Midlands & Beyond
                    </strong>
                    <span className='text-xs font-medium tracking-widest uppercase text-secondary-pale'>
                        Shropshire · Staffs · N. Wales
                    </span>
                </div>
            </div>
        </section>
    )
}