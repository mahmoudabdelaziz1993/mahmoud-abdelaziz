import Certifications from "@/components/blocks/certifications";
import { Experience1 } from "@/components/blocks/experience";
import { Hero01 } from "@/components/blocks/hero01";
import { CertificationsSectionContent } from "@/data/certificationsContent";
import { ExperienceSectionContent } from "@/data/ExperienceSectionContent";

export default function ArPage() {
    const lang = "ar";
    return (
        <>
            <div className="flex-1 min-h-screen grid items-center">
                <section aria-label="hero" id="hero" className="flex sm:items-center min-h-screen pt-16 w-full px-4">
                    <Hero01
                        lang={lang}
                    />
                </section>
                <section aria-label="experience" id="experience" className="flex items-center min-h-screen pt-16 w-full px-4">
                    <Experience1 headline={ExperienceSectionContent.headline[lang]} experience={ExperienceSectionContent.experiences.map(item => ({
                        period: item.period[lang],
                        title: item.title[lang],
                        company: item.company[lang],
                        description: item.description[lang],
                    }))} />
                </section>
                {/* certifications */}
                <section aria-label="certifications" id="certifications" className="flex items-center min-h-screen pt-16 w-full px-4">
                    <Certifications headline={CertificationsSectionContent.headline[lang]}
                        certifications={CertificationsSectionContent.certifications.map(item => ({
                            title: item.title[lang],
                            link: item.url,
                            image: item.image,
                            date: item.date[lang],
                            institution: item.institution[lang]
                        }))}
                    />
                </section>
            </div>


        </>
    );
}
