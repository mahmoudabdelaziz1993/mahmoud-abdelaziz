import LanguageSwitcher from "../language-switcher";
import { HugeiconsIcon } from "@hugeicons/react";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import { NavBarContent } from "@/data/navbarContent";
import Link from "next/link";
import { DarkModeSwitch } from "../layout/dark-light-switch";
import Image from "next/image";

export const Header = ({ lang }: { lang: "ar" | "en" }) => {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b-2 bg-background/80 ] backdrop-blur-sm ">
            <div className="container lg:mx-auto max-w-5xl  px-4 py-3 flex justify-between items-center flex-wrap ">
                {/* Logo section text  */}
                <div className="flex-1">
                    <Link href={`/${lang}`} >
                        <div className="flex items-center">
                            <div className="size-10 grid place-items-center">
                                <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    fill="currentColor"
                                    viewBox="0 0 640 480" enableBackground="new 0 0 640 480" xmlSpace="preserve">
                                    <g>
                                        <path d="M309.1,21.01v328.55c-0.14,0.01-0.27,0.01-0.41,0.01
		c-21.85,0-41.95-7.47-57.9-20c-21.82-17.16-35.84-43.8-35.85-73.72h-0.01V114.77h0.01v-0.03c0-29.65,13.77-56.1,35.27-73.28
		C266.25,28.66,286.58,21,308.69,21C308.83,21,308.96,21,309.1,21.01z"/>
                                        <path d="M426.05,21.01v328.55c-0.14,0.01-0.27,0.01-0.41,0.01
		c-22.12,0-42.45-7.66-58.47-20.47c-1.71-1.36-3.36-2.78-4.96-4.26c-18.63-17.12-30.3-41.69-30.31-68.99h-0.01V114.77h0.01v-0.03
		c0-29.65,13.77-56.1,35.27-73.28C383.2,28.66,403.52,21,425.64,21C425.78,21,425.91,21,426.05,21.01z"/>
                                        <path d="M543,114.77v245.96h-0.41
		c-0.02,51.76-41.98,93.72-93.74,93.72h-0.01V21h0.01c51.77,0,93.74,41.97,93.74,93.74v0.03H543z"/>
                                        <path d="M192.15,21.01v329.48c-0.14,0.01-0.27,0.01-0.41,0.01
		c-51.77,0-93.74-41.97-93.74-93.74c0-0.3,0-0.6,0.01-0.9h-0.02V114.77H98v-0.03C98,62.97,139.97,21,191.74,21
		C191.88,21,192.01,21,192.15,21.01z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="grid">
                                <h2 className="font-bold text-sm leading-tight   tracking-tighter">
                                    {NavBarContent.Logo.title[lang]}
                                </h2>
                                <p className="text-xs font-extralight leading-tight text-muted-foreground">{NavBarContent.Logo.subTitle[lang]}</p>
                            </div>
                        </div>
                    </Link>
                </div>


                <ButtonGroup aria-label="Social links" dir="ltr">
                    {NavBarContent.SocialLinks.map(({ icon, label, url }, index) => (
                        <Button key={index + label[lang]}
                            variant={"outline"}
                            size={"icon"}
                            asChild
                        >
                            <Link target='_blank' href={url} rel="noopener noreferrer">
                                <HugeiconsIcon icon={icon} />
                            </Link>
                        </Button>

                    ))}
                </ButtonGroup>

            </div>
        </header>
    );
};