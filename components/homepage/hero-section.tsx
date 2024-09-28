import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { Button } from "../ui/button";
import { TITLE_TAILWIND_CLASS } from '@/utils/constants';
import Marquee from "react-fast-marquee";

export default function HeroSection() {
    const buttonItems = [
        { text: 'Picasso', image: 'https://d7hftxdivxxvm.cloudfront.net/?height=666&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FpBLM6-XXPrq11O6vHiwYBw%2Flarger.jpg&width=540' },
        { text: 'Kaws', image: 'https://d7hftxdivxxvm.cloudfront.net/?height=722&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F5ccoB2lc59mACy1VX6IpwA%2Flarger.jpg&width=498' },
        { text: 'Manjeet bawa', image: 'https://d7hftxdivxxvm.cloudfront.net/?height=514&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FagP8jVuVyPHGYXzDbLl4fA%2Flarger.jpg&width=700' },
        { text: 'Takashi Murakami', image: 'https://d7hftxdivxxvm.cloudfront.net/?height=600&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2Fz0R0eDV-0l2_tyloZm4KrA%2Flarger.jpg&width=600' },
        { text: 'Jean-Michel Basquiat', image: 'https://d7hftxdivxxvm.cloudfront.net/?height=650&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FGL5XqH6FGQFOeuDhJbYCGg%2Flarger.jpg&width=554' },
        { text: 'S. H. Raza', image: 'https://d7hftxdivxxvm.cloudfront.net/?height=600&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F5TYHLfLRrjn_TqVu092u2w%2Flarger.jpg&width=600' },
    ];
    return (
        <section className='flex flex-col items-center whitespace-pre-wrap justify-center leading-6 mt-[3rem]' aria-label="Nextjs Starter Kit Hero">
            <h1 className={`${TITLE_TAILWIND_CLASS} scroll-m-20 font-semibold tracking-tight text-center max-w-[1120px] bg-gradient-to-b dark:text-white`}>
                AI-Powered Insights for the Art World
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 text-center mt-2 dark:text-gray-400">
                Transform raw data into actionable intelligence for artists, galleries, and collectors.
            </p>
            <div className="flex justify-center items-center gap-3">
                <Link href="/dashboard" className="mt-5">
                    <Button className="animate-buttonheartbeat rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white">
                        Get Started
                    </Button>
                </Link>
            </div>

            <div className="relative w-full max-w-2xl mt-12">
                <div className="rounded-md border-2 border-input p-2 shadow-sm transition duration-100 focus-within:border-primary focus:border-2">
                    <form className="space-y-2">
                        <div className="space-y-2">
                            <textarea 
                                className="flex min-h-[60px] w-full resize-none rounded-md border-none bg-transparent p-1 text-lg placeholder:text-muted-foreground focus:outline-none"
                                placeholder="Search the Artist?"
                                maxLength={15000}
                                name="search"
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button 
                                type="submit" 
                                className="h-10 w-10 bg-primary text-primary-foreground p-0"
                            >
                            <ArrowRight className="h-10 w-10 p-2 text-white" />
                            </Button>
                        </div>
                    </form>
                </div>
                {/* Horizontal marquee with buttons */}
            <div className="w-full max-w-sm sm:max-w-2xl mt-8 overflow-hidden">
                <Marquee>
                    <div className="flex">
                        {[...buttonItems, ...buttonItems].map((item, index) => (
                            <div key={index} className="flex-shrink-0 mx-2">
                                <button className="items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 flex justify-start space-x-2 truncate px-3 py-5 max-w-[120px] sm:max-w-none" type="button">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-muted overflow-hidden">
                                        <img src={item.image} alt={item.text} className="w-full h-full object-cover" />
                                    </span>
                                    <span className="truncate">{item.text}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
            </div>
            
            
        </section>
    )
}
