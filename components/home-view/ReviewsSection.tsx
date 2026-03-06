"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Quote } from 'lucide-react';
import Link from 'next/link';

export default function ReviewsSection(){

    const [isPaused, setIsPaused] = useState(false);

    const reviews = [
        {
            stars: 5,
            text: "We used this catering service for my brother's 30th birthday, and honestly, it was perfect from start to finish. The spread was incredible and beautifully presented, generous portions, and such a great variety that there was genuinely something for everyone.\nEverything tasted fresh and homemade, from the sandwiches and wraps to the pastries and hot bites. Guests kept going back for seconds (and thirds!), and we had so many compliments about how good the food was. It made hosting completely stress-free because I knew the food was taken care of and would impress and it absolutely did.\nFor a small gathering, this was exactly what we needed, high quality, delicious, and thoughtfully prepared. I wouldn't hesitate to use them again and would 100% recommend them for birthdays, celebrations, or any get-together where you want amazing food without the hassle. We loved it! 🥂",
            initial: "B",
            name: "Bethany Anniemae",
            event: "Chef at Home",
            link: "https://share.google/wWhhmgZ8JCelaNneq"
        },
        {
            stars: 5,
            text: "Rodriguez Events did our wedding food for us. They were fantastic during the planning stage and they organised a menu tasting which they hosted as a little dinner party for us and the best man. The food on the day was amazing - we had canapés and tapas - all of our guests said how amazing the food was. Thank you all so much - an amazing team and we're so glad we came across you xx",
            initial: "J",
            name: "Jodie Pryce",
            event: "Wedding",
            link: "https://share.google/zPW9vkkSkjVVl38Kf"
        },
        {
            stars: 5,
            text: "If I could leave more than five stars, I would! I cannot recommend Rodriguez Events highly enough.\n From the very initial outreach, through to confirming the menu, payment, and of course the incredible food and presentation from the talented chefs themselves, it was such a smooth process from start to finish.\n We hired Rodriguez Events for our cowgirl-themed hen weekend, and they made the perfect bespoke menu to match! The food was delicious, thoroughly enjoyed by every single hen, and really fit our theme so well.\n A huge thank you to Emma, Heber and Sue for all of their hard work in bringing our vision to life and making the hen party such a special evening for us all!",
            initial: "S",
            name: "Stacey Hampton",
            event: "Chef at Home",
            link: "https://share.google/CGmWaVMKgYxs2R6fe"
        },
        {
            stars: 5,
            text: "Rodriguez Events are fantastic events caterers if you are looking for something a bit different and a bit special. I first used Emma and Heber for a surprise 30th birthday party for my partner a few years ago and just last week they catered our wedding. From Buffets to sit down three course meals, Emma and Heber can do it all. They curated a unique menu just for our wedding and the food was excellent and much more interesting than your standard wedding food. They are also a joy to work with and you feel like you are left with lifelong friends rather than just caterers. I would highly recommend Rodriguez Events.",
            initial: "F",
            name: "Francesca Gough",
            event: "Wedding",
            link: "https://share.google/NcdPoqPgr6MaBkZcZ"
        },
        {
            stars: 5,
            text: "I booked Emma recently to cater food accompanying a rather special wine tasting evening. Wow! Faultless food and superb service. From start to finish everything was so friendly and professional (a hard balance but these guys have it spot on). Will 100% use again and would reccomend without hesitation",
            initial: "D",
            name: "Darren Driscoll",
            event: "Corporate",
            link: "https://share.google/q7hOUusBIf2NCcuyN"
        },
        {
            stars: 5,
            text: "Wow! We found this company after much googling and thank goodness we did! Emma & Heber catered for my daughter's hen weekend, 20 ladies who needed sustenance! Communication was excellent as we compiled each evening's menu - Emma's suggestions were spot on and all allergies and preferences were considered and catered for. We had a nacho based supper and a Greek banquet - the food was delicious and plentiful and Emma was so obliging and helpful. The meals each evening were very much part of the hen experience and thoroughly enjoyed by all. We will certainly be using them again. Highly recommended.",
            initial: "S",
            name: "Sue Anderson",
            event: "Chef at Home · Mediterranean",
            link: "https://share.google/6g2QrIC2xRpYG3GQj"
        },
        {
            stars: 5,
            text: "Emma crafted an amazing Greek-style sharing menu and canapes for a 60th birthday evening for 13 of my closest friends and family at a property we'd rented for the weekend. Emma took the time to call us some weeks before the event to talk about our likes and dislikes and how to accomodate a guest with a dairy intolerance. The care and attention to craft a meal to our tastes felt so personal. On the evening Emma arrived bang on time, introduced herself and her son who served us canapes and described each canape to us all in detail. The selection was absolutely mouth wateringly tasty!! We then sat at the table whilst Emma toiled away in the kitchen without fuss. So organised and we hardly knew she was there. The food just kept coming and coming. It was delicious!! Even dishes we wouldnt ordinarily order like the greek style butterbeans were sensational. All the guests were blown away by the food. Emma and Alphie cleared the plates, washed the dishes and even left the kitchen sparkling!! All that was left was for us finish off the trio of delicious desserts. IF YOU ARE LOOKING FOR A PERSONAL CHEF TO CATER FOR YOUR PARTY. SERIOUSLY!! LOOK NO FURTHER. ( To Emma & Alphie, thank you, thank you, thank you. You made our evening magical) Am sure we will see you again. All the very best to you all. X",
            initial: "P",
            name: "Paul Gibson",
            event: "Chef at Home · Mediterranean",
            link: "https://share.google/5zwJLdpog21YwatqJ"
        },
        {
            stars: 5,
            text: "I have used Rodriguez twice in the last 3 months and I have been extremely happy with the service I had. Emma and her husband couldn't be more helpful to accommodate all dietary needs and all the food was delicious. Nothing was too much trouble, whatever time you wanted the food served they were happy to help. I would definitely use them again.",
            initial: "H",
            name: "Hayley Leason",
            event: "Chef at Home",
            link: "https://share.google/5xpsFWLRw6WLrN8RT"
        },
        {
            stars: 5,
            text: "I asked Rodriguez events to prepare a Spanish tapas buffet menu, including paella for about 20 people to be hosted in my home. From the first contact everything was professional and concise. On the day of the party Emma and Heber arrived at the arranged time and delivered the best Spanish style food we have had outside of Spain, the produce was first class. I highly recommend their Company and hope to have an excuse to ask them to cook for us again",
            initial: "A",
            name: "Avril Broad",
            event: "Chef at Home",
            link: "https://share.google/olA0jRPytSIfdOvMU"
        },
        {
            stars: 5,
            text: "Emma catered our wedding, providing a delicious tapas meal with the added challenge of being completely dairy free -churros & chocolate sauce included! She is extremely talented, dedicated and professional. You would not be disappointed in selecting her for any catered event!",
            initial: "T",
            name: "Tom Fugill",
            event: "Wedding",
            link: "https://share.google/Ol2IZaj2ZHCd51KWd"
        },
        {
            stars: 5,
            text: "Got intouch with Emma about ordering some food for my mums birthday. She was very helpful and created a menu for me that was absolutely fantastic.\n The food was delicious, very generous portions and very good value for money. Made my mums birthday very special, thank you 😄",
            initial: "C",
            name: "Cherry Malhi",
            event: "Chef at Home",
            link: "https://share.google/om4PPLBY27o9YAqc1"
        },
        {
            stars: 5,
            text: "Emma & Heber provided the catering for our recent Shifnal cricket club tapas evening, and the food and service offered was exceptional and the product incredibly tasty.\n We probably haven't been the easiest to deal with having some forty two people choosing from their varied menu, but the evening went much better than expected and we will definitely be having another and will be using Rodriguez once again for sure.\n Thank you for your time, patience, and producing fantastic food which helped the evening flow wonderfully.\n Oh, and Heber's sangria truly was magnificent. I shall prepare it that way myself here onwards.",
            initial: "I",
            name: "Ian Vasey",
            event: "Corporate",
            link: "https://share.google/14RZC5v00QP8pE7aR"
        },
        {
            stars: 5,
            text: "Emma and Heber provided a great service for our wedding day - they even travelled over 3 hours away to cater for us bringing their own cutlery etc. They talked through the menu with us before hand to make sure we were happy with everything and were good with timings. Food was incredibly tasty and they're both super lovely people who we couldn't recommend more.",
            initial: "G",
            name: "Grant Smillie",
            event: "Wedding",
            link: "https://share.google/4r43bVZTSTh5Xawta"
        },
        {
            stars: 5,
            text: "Absolutely outstanding service! The food was out of this world and nothing was too much! Such lovely people and amazing at what they do. I've definitely found my caterers for all my future events! Couldn't recommend enough! 👌",
            initial: "L",
            name: "Lauren Bottley",
            event: "Corporate",
            link: "https://share.google/RjyZBRf7KxwAFPzHP"
        },
        {
            stars: 5,
            text: "Wow wow wow. Have had the food from here a few times and cannot recommend them highly enough. Really smooth process from selecting menus through to delivery. Always prompt delivery and fantastic food. Thanks again for a fab little spread x",
            initial: "S",
            name: "Sally Blake",
            event: "Chef at Home",
            link: "https://share.google/9OZ5tipoTgimbLsUK"
        },
        {
            stars: 5,
            text: "Was lucky enough to sample these Saturday. Great food and nicer people. Thanks again for the lift",
            initial: "R",
            name: "Ryan O'Sullivan",
            event: "Chef at Home",
            link: "https://share.google/LsrtUa6tfJcbW8XH7"
        },
    ];

    return (
        <section className="py-24 px-[7vw] bg-cream-warm overflow-hidden">

            {/*  Header  */}
            <article className="mb-14">

                {/* Tag */}
                <motion.span
                    className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-widest uppercase text-secondary mb-8 before:w-10 before:h-px before:bg-secondary"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Client Reviews
                </motion.span>

                {/* Title */}
                <motion.h2
                    className="text-5xl font-bold leading-tight text-charcoal mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                >
                    What Our <em className="italic text-primary">Clients Say</em>
                </motion.h2>

                {/* Divider */}
                <motion.div
                    className="w-15 h-0.5 bg-linear-to-r from-secondary to-secondary-light my-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
                />

                {/* Aggregate score */}
                <motion.div
                    className="flex items-center gap-6 mb-10 flex-wrap"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                    <motion.div
                        className="font-serif text-6xl font-bold text-primary leading-normal"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                    >
                        5.0
                    </motion.div>
                    <div>
                        <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <motion.span
                                    key={i}
                                    className="text-secondary text-lg"
                                    initial={{ opacity: 0, y: -8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.3, delay: 0.4 + i * 0.07, ease: "easeOut" }}
                                >
                                    ★
                                </motion.span>
                            ))}
                        </div>
                        <p className="text-sm text-charcoal-light">Based on verified reviews</p>
                    </div>
                </motion.div>

            </article>

            {/*  Track wrap  */}
            <motion.article
                className="overflow-x-hidden relative
                    before:absolute before:top-0 before:bottom-0 before:w-20 before:z-20 before:pointer-events-none before:left-0 before:bg-linear-to-r before:from-cream-warm before:to-transparent
                    after:absolute after:top-0 after:bottom-0 after:w-20 after:z-20 after:pointer-events-none after:right-0 after:bg-linear-to-l after:from-cream-warm after:to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                {/* Track */}
                <motion.div
                    className="flex gap-6 w-max"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    animate={{ x: isPaused ? undefined : [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...reviews, ...reviews].map((review, index) => (
                        <Link
                            key={index}
                            href={review.link}
                            target="_blank"
                            className="bg-cream shrink-0 w-85 p-8 border-t-[3px] border-t-secondary relative rounded-xs transition-all duration-300 group hover:shadow-sm hover:-translate-y-2"
                        >
                            <div>
                                {[...Array(review.stars)].map((_, i) => (
                                    <span key={i} className="text-secondary text-lg">★</span>
                                ))}
                            </div>
                            <Quote className="w-6 h-6 text-secondary-pale absolute top-2 right-2 group-hover:hidden"/>
                            <ExternalLink className="hidden w-6 h-6 text-secondary-light absolute top-2 right-2 group-hover:block"/>
                            <p className="max-h-52 font-serif text-lg leading-relaxed italic text-charcoal mb-6 overflow-hidden wrap-break-word">
                                {review.text}
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-serif text-lg text-white font-semibold shrink-0">
                                    {review.initial}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-charcoal">{review.name}</div>
                                    <div className="text-xs text-charcoal-light tracking-wider">{review.event}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </motion.article>

        </section>
    );
}