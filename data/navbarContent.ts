import { GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { label } from "motion/react-client";

export const NavBarContent = {
    Logo: {
        label: {
            ar: "محمود عبد العزيز",
            en: "Mahmoud Abdelaziz"
        }
    },
    SocialLinks: [
        {
            icon: Linkedin02Icon,
            label: {
                ar: "لينكد ان",
                en: "Linkedin"
            },
            url: "https://linkedin.com"
        },
        {
            icon: GithubIcon,
            label: {
                ar: "جيت هاب",
                en: "Github"
            },
            url: "https://github.com"
        }
    ]
}