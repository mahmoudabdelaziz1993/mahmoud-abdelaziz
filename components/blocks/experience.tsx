import { Badge } from "@/components/ui/badge";

interface Experience1Props {
    className?: string;
    experience: {
        period: string;
        title: string;
        description: string;
        company: string;
    }[];

}

const Experience1 = ({ experience }: Experience1Props) => {

    return (

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
    );
};

export { Experience1 };
