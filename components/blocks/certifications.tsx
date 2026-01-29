import { cn } from "@/lib/utils";

export default function Certifications({
    // experience,
    className,
    headline
}: {
    className?: string,
    headline?: string,

}) {
    return (
        <section className={cn("py-32", className)}>
            <div className="container space-y-10 lg:space-y-20">
                <div className="flex w-full items-end justify-between">
                    <h1 className="text-5xl font-semibold tracking-tighter ">
                        {headline}
                    </h1>
                    {/* <Button variant="ghost" size="lg" className="font-semibold">
                    Download CV <Download className="size-4" />
                </Button> */}
                </div>

                {/* <ul>
                    {experience.map((exp, index) => (
                        <li
                            key={index}
                            className="flex flex-col justify-between border-b py-10 md:flex-row"
                        >
                            <div className="max-w-lg text-xl font-semibold tracking-tighter lg:w-1/3">
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
                </ul> */}
            </div>
        </section>
    )
}