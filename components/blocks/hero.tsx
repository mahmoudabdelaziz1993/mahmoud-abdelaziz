
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ButtonGroup } from "../ui/button-group";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { heroContent, Lang } from "@/data/heroContent";
import { cn } from "@/lib/utils";
const HeroSection = ({ lang, className }: { lang: Lang, className?: string }) => {
    return (
        <section aria-label="hero" id="hero" className={cn("grid  place-items-center h-screen w-full", className)}>
            {/* container */}
            <div className="container mx-auto sm:mx-0 flex flex-col  justify-center sm:items-center items-end  gap-0 lg:flex-row  lg:gap-20 ">
                {/* content  */}
                <div className=" flex lg:w-1/2 flex-col items-center text-center  lg:max-w-3xl lg:items-start  lg:ltr:text-left lg:rtl:text-right ">
                    <h1 className="sm:my-6 my-3  sm:text-5xl text-3xl  font-bold text-pretty ltr:tracking-tight  ">
                        {heroContent.headline[lang]}
                    </h1>
                    <p className="sm:mb-8  mb-4 text-sm text-muted-foreground">
                        {heroContent.paragraph[lang]}
                    </p>
                    <div className="">
                        <ButtonGroup>
                            <ButtonGroup dir="ltr">
                                <Button asChild>
                                    <Link
                                        href={heroContent.resumeButton.link}
                                        download={heroContent.resumeButton.DownloadName[lang]}
                                        target="_blank" // Optional: opens in new tab (some browsers require this for download)
                                        rel="noopener noreferrer"
                                        aria-label="Download Mahmoud Abdelaziz's resume as PDF"
                                    >
                                        {heroContent.resumeButton.label[lang]}

                                        <HugeiconsIcon icon={heroContent.resumeButton.icon} />
                                    </Link>
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button
                                    variant={'secondary'}
                                    aria-labelledby={heroContent.callButton.label[lang]}
                                    asChild
                                >
                                    <Link href={heroContent.callButton.link}>
                                        <HugeiconsIcon icon={heroContent.callButton.icon} />

                                        {heroContent.callButton.label[lang]}
                                    </Link>
                                </Button>
                            </ButtonGroup>
                        </ButtonGroup>
                    </div>
                </div>
                {/* figure */}
                <div className="flex sm:w-1/2 w-64 aspect-square  mx-auto lg:mx-0 relative  sm:ring-0 order-first lg:order-last ">
                    <Image
                        src={`${process.env.NODE_ENV === 'production' ? '/mahmoud-abdelaziz' : ''}${heroContent.figure.url}`}
                        alt={heroContent.figure.alt[lang]}
                        fill
                        className="dark:invert-0"
                    />
                </div>
            </div>
        </section>
    );
};
export { HeroSection };
