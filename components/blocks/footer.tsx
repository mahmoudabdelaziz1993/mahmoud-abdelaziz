import LanguageSwitcher from "../language-switcher";
import { ButtonGroup } from "../ui/button-group";
import { NavBarContent } from "@/data/navbarContent";
// import Link from "next/link";
import { DarkModeSwitch } from "../layout/dark-light-switch";

export const Footer = ({ lang }: { lang: "ar" | "en" }) => {
    return (
        <footer className="fixed bottom-0 right-0 left-0 z-50 bg-background/80 border-t-2 backdrop-blur-sm ">
            <div className="container lg:mx-auto max-w-5xl  px-4 py-3 flex justify-between items-center flex-wrap ">
                {/* Logo section text  */}
                <div className="flex-1">
                    <h2 className="tracking-tighter text-sm">
                        {lang === "en" && "© 2025 Mahmoud Abdelaziz. All rights reserved"}
                        {lang === "ar" && "© ٢٠٢٥ محمود عبد العزيز. جميع الحقوق محفوظة."}
                    </h2>
                </div>


                <ButtonGroup aria-label="Social links & Controls"  >

                    <ButtonGroup aria-label="Theme switcher" className="flex">
                        <DarkModeSwitch />
                    </ButtonGroup>
                    <ButtonGroup aria-label="Language switcher" className="flex">
                        <LanguageSwitcher />
                    </ButtonGroup>
                </ButtonGroup>
            </div>
        </footer>
    );
};