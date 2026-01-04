// data/heroContent.ts (or wherever you keep it)

import { Appointment02Icon, Download01Icon } from "@hugeicons/core-free-icons";

export type Lang = "en" | "ar";

export const heroContent = {
    headline: {
        en: "React & Next.js Expert: Building Fast, Clean, User-First Web Experiences",
        ar: "خبير React وNext.js: أبني تجارب ويب سريعة، نظيفة، ومركزة على المستخدم"
    },
    paragraph: {
        en: "With over 5 years of professional experience, I craft performant, pixel-perfect front-end apps using React, Next.js, and modern tooling. Clean code, seamless UX, and blazing-fast performance are my promise. Let's bring your project to the next level.",
        ar: "بخبرة مهنية تزيد عن 5 سنوات، أصمم تطبيقات واجهة أمامية عالية الأداء ودقيقة التصميم باستخدام React وNext.js وأحدث الأدوات. كود نظيف، تجربة مستخدم سلسة، وأداء فائق السرعة — هذا وعدي. دعنا نرتقي بمشروعك إلى المستوى التالي."
    },
    resumeButton: {
        label: {
            en: "Download Resume",
            ar: "تنزيل السيرة الذاتية"
        },
        icon: Download01Icon,               // Just the icon component
        link: "/Resume.pdf",  // Put your PDF in /public folder
        Download: true,
        DownloadName: {
            en: "Mahmoud Abdelaziz Resume",
            ar: "سيرة مهنية محمود عبد العزيز"
        }
    },
    callButton: {
        label: {
            en: "Book a Call",
            ar: "احجز مكالمة"
        },
        icon: Appointment02Icon,
        link: "https://cal.com/your-username"  // Replace with your Calendly/Cal.com link
    }
    , figure: {
        url: "/images/me-waving.png",
        alt: {
            en: "Mahmoud Abdelaziz waving",
            ar: "محمود عبد العزيز بيسلم"
        }
    }
};