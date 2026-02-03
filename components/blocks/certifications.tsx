import { cn } from "@/lib/utils";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

/**
 * A component to display a list of certifications.
 *
 * @param {string} [className] - The CSS class name for the component.
 * @param {string} [headline] - The headline to display above the list of certifications.
 * @param {object[]} certifications - An array of certification objects.
 * @param {string} certifications.title - The title of the certification.
 * @param {string} certifications.link - The link to the certification.
 * @param {string} certifications.image - The URL of the image of the certification.
 * @param {string} certifications.date - The date of the certification.
 * @param {string} certifications.institution - The institution that issued the certification.
 * @returns {React.ReactElement} - The rendered component.
 */
export default function Certifications({

    certifications,
}: {

    certifications: {
        title: string;
        link: string;
        image: string;
        date: string;
        institution: string;
    }[]

}) {




    return (
        <ul>
            {certifications.map((certification, index) => (
                <li
                    key={index}
                    className="flex flex-col justify-between border-b-2 py-10 md:flex-row"
                >
                    <div className="max-w-lg text-xl font-semibold tracking-tighter lg:w-1/3 text-muted-foreground whitespace-nowrap">
                        <Badge variant={'outline'}> {certification.date}</Badge>
                    </div>
                    <div className="lg:w-1/3">
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Link href={certification.link} target="_blank" className="mb-4 text-2xl font-semibold tracking-tighter">
                                    {certification.title}
                                </Link>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <Image
                                    src={`${process.env.NODE_ENV === 'production' ? '/mahmoud-abdelaziz' : ''}${certification.image}`}
                                    alt={certification.title}
                                    width={500}
                                    height={500}
                                />
                            </HoverCardContent>
                        </HoverCard>

                    </div>
                    <div className="text-sm font-semibold text-end lg:w-1/3">{certification.institution}</div>
                </li>
            ))}
        </ul>

    )
}