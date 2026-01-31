import { Download } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

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
                            className="flex flex-col justify-between border-b py-10 lg:flex-row"
                        >
                            <div className="max-w-lg text-xl font-semibold tracking-tighter lg:w-1/3 whitespace-nowrap text-muted-foreground">
                                {exp.period}
                            </div>
                            <div className="lg:w-1/3">
                                <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
                                    {exp.title}
                                </h2>
                                <p className="text-foreground/50">{exp.description}</p>
                            </div>
                            <div className="text-right lg:w-1/4">{exp.company}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export { Experience1 };
