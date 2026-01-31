
import Certifications from "@/components/blocks/certifications";
import { Experience1 } from "@/components/blocks/experience";
import { Header } from "@/components/blocks/Header";
import { HeroSection } from "@/components/blocks/hero";
import { CertificationsSectionContent } from "@/data/certificationsContent";
import { ExperienceSectionContent } from "@/data/ExperienceSectionContent";


export default function EnPage() {
    const lang = "en";

    return (
        <>
            {/* Header */}
            <Header
                lang={lang}
            />
            {/* Hero */}
            <HeroSection
                lang={lang}
            />
            {/* experience */}
            <Experience1 headline={ExperienceSectionContent.headline[lang]} experience={ExperienceSectionContent.experiences.map(item => ({
                period: item.period[lang],
                title: item.title[lang],
                company: item.company[lang],
                description: item.description[lang],
            }))} />
            {/* certifications  */}
            <Certifications headline={CertificationsSectionContent.headline[lang]}
                certifications={CertificationsSectionContent.certifications.map(item => ({
                    title: item.title[lang],
                    link: item.url,
                    image: item.image,
                    date: item.date[lang],
                    institution: item.institution[lang]


                }))}
            />




        </>
    );
}
