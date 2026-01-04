
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { ButtonGroup } from "../ui/button-group";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { heroContent, Lang } from "@/data/heroContent";



const Hero01 = ({ lang }: { lang: Lang }) => {
    return (
        <div className="container mx-auto sm:mx-0 grid justify-center sm:items-end max-h-screen gap-0 sm:grid-cols-2  sm:gap-20 ">
            <div className=" flex flex-col items-center text-center  lg:max-w-3xl sm:items-start  sm:ltr:text-left sm:rtl:text-right ">
                <h1 className="my-6 sm:text-5xl text-4xl  font-bold text-pretty ltr:tracking-tight  ">
                    {heroContent.headline[lang]}
                </h1>
                <p className="mb-8 text-foreground/50">
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
                                variant={'outline'}
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
            <div className="flex w-full aspect-square  mx-auto sm:mx-0 relative  sm:ring-0 order-first sm:order-last ">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${heroContent.figure.url}`}
                    alt={heroContent.figure.alt[lang]}
                    fill
                    className="dark:invert-0"
                />
            </div>
        </div>

    );
};

export { Hero01 };
