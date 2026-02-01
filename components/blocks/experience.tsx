
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

interface Experience1Props {
    className?: string;
    experience: {
        period: string;
        title: string;
        description: string;
        company: string;
    }[];
    headline?: string;
}

const Experience1 = ({ className, experience, headline = "Experience" }: Experience1Props) => {

    return (
        <section id="experience" className={cn("py-20", className)}>
            <div className="space-y-5 lg:space-y-10">
                <div className="flex w-full items-end justify-between">
                    <h1 className="text-5xl font-semibold tracking-tighter ">
                        {headline}
                    </h1>
                    {/* <Button variant="ghost" size="lg" className="font-semibold">
                        Download CV <Download className="size-4" />
                    </Button> */}
                </div>

                <ul>
                    {experience.map((exp, index) => (
                        <li
                            key={index}
                            className="flex flex-col justify-between border-b-2 py-10 lg:flex-row"
                        >
                            <div className="max-w-lg text-xl font-semibold tracking-tighter lg:w-1/3 whitespace-nowrap text-muted-foreground">

                                <Badge variant={'outline'}>{exp.period}</Badge>
                            </div>
                            <div className="lg:w-1/3">
                                <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
                                    {exp.title}
                                </h2>
                                <p className="text-sm text-muted-foreground">{exp.description}</p>
                            </div>
                            <div className="text-sm font-semibold text-end lg:w-1/4">{exp.company}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export { Experience1 };
