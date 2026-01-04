import { Experience1 } from "@/components/blocks/experience";
import { Hero01 } from "@/components/blocks/hero01";
import { ExperienceSectionContent } from "@/data/ExperienceSectionContent";

export default function EnPage() {

    return (
        <>
            <div className="flex-1 min-h-screen grid items-center">
                <section aria-label="hero" id="hero" className="flex sm:items-center min-h-screen pt-16 w-full px-4">
                    <Hero01
                        lang="en"
                    />
                </section>
                <section aria-label="experience" id="experience" className="flex items-center min-h-screen pt-16 w-full px-4">
                    <Experience1 headline={ExperienceSectionContent.headline["en"]} experience={ExperienceSectionContent.experiences.map(item => ({
                        period: item.period["en"],
                        title: item.title["en"],
                        company: item.company["en"],
                        description: item.description["en"],
                    }))} />
                </section>
            </div>


        </>
    );
}
