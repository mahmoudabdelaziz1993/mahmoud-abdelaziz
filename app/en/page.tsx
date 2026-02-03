
import Certifications from "@/components/blocks/certifications";
import { Experience1 } from "@/components/blocks/experience";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/Header";
import { HeroSection } from "@/components/blocks/hero";
import CurvedLoop from "@/components/CurvedLoop";
import SectionLayout from "@/components/layout/section-layout";
import { CertificationsSectionContent } from "@/data/certificationsContent";
import { ExperienceSectionContent } from "@/data/ExperienceSectionContent";
import { SkilsContent } from "@/data/skils";


export default function EnPage() {
    const lang = "en";

    return (
        <>
            {/* Header */}
            <Header lang={lang} />
            {/* Hero */}
            <HeroSection lang={lang} />
            {/* Skils */}
            <SectionLayout sectionId={SkilsContent.key} sectionTitle={SkilsContent.headline[lang]} className=" overflow-clip">
                <div className="flex-1 grid place-items-center pt-10">
                    <div className="grid  w-full">
                        <CurvedLoop marqueeText={SkilsContent.list.slice(0, Math.ceil(SkilsContent.list.length / 2)).join(" ✦ ")} curveAmount={-300} direction="right" />
                        <CurvedLoop marqueeText={SkilsContent.list.slice(Math.ceil(SkilsContent.list.length / 2)).join(" ✦ ")} curveAmount={300} direction="left" />
                    </div>
                </div>
            </SectionLayout>
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
