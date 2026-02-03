import Certifications from "@/components/blocks/certifications";
import { Experience1 } from "@/components/blocks/experience";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/Header";
import { HeroSection } from "@/components/blocks/hero";
import SectionLayout from "@/components/layout/section-layout";
import { CertificationsSectionContent } from "@/data/certificationsContent";
import { ExperienceSectionContent } from "@/data/ExperienceSectionContent";

export default function ArPage() {
    const lang = "ar";
    return (
        <>
            {/* Header */}
            <Header lang={lang} />
            {/* Hero */}
            <HeroSection lang={lang} />
            {/* experience */}
            <SectionLayout sectionId={ExperienceSectionContent.key} sectionTitle={ExperienceSectionContent.headline[lang]}>
                <Experience1 experience={ExperienceSectionContent.experiences.map(item => ({
                    period: item.period[lang],
                    title: item.title[lang],
                    company: item.company[lang],
                    description: item.description[lang],
                }))} />
            </SectionLayout>
            {/* certifications  */}
            <SectionLayout sectionId={CertificationsSectionContent.key} sectionTitle={CertificationsSectionContent.headline[lang]}>
                <Certifications
                    certifications={CertificationsSectionContent.certifications.map(item => ({
                        title: item.title[lang],
                        link: item.url,
                        image: item.image,
                        date: item.date[lang],
                        institution: item.institution[lang]


                    }))}
                />
            </SectionLayout>
            {/* Footer */}
            <Footer lang={lang} />
        </>
    );
}
