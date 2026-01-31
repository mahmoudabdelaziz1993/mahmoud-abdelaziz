import LanguageSwitcher from "../language-switcher";
import { HugeiconsIcon } from "@hugeicons/react";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import { NavBarContent } from "@/data/navbarContent";
import Link from "next/link";
import { DarkModeSwitch } from "../layout/dark-light-switch";

export const Header = ({ lang }: { lang: "ar" | "en" }) => {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 bg-background/80 ] backdrop-blur-sm ">
            <div className="container lg:mx-auto max-w-5xl  px-4 py-3 flex justify-between items-center flex-wrap ">
                {/* Logo section text  */}
                <div className="flex-1">
                    <h2 className="font-bold   tracking-tighter">
                        {NavBarContent.Logo.label[lang]}
                    </h2>
                </div>


                <ButtonGroup aria-label="Social links & Controls"  >
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
                    <ButtonGroup aria-label="Theme switcher" className="flex">
                        <DarkModeSwitch />
                    </ButtonGroup>
                    <ButtonGroup aria-label="Language switcher" className="flex">
                        <LanguageSwitcher />
                    </ButtonGroup>
                </ButtonGroup>
            </div>
        </header>
    );
};