import { cn } from "@/lib/utils"

/**
 * A strongly typed component for a section layout.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The CSS class name for the component.
 * @param {string} [props.sectionId] - The HTML id for the section.
 * @param {string} [props.sectionTitle] - The title of the section.
 * @param {React.ReactNode} [props.children] - The children of the section.
 * @returns {React.ReactElement} - The rendered component.
 */
const SectionLayout = ({
    className,
    sectionId,
    sectionTitle,
    children,
}: {
    className?: string;
    sectionId: string;
    sectionTitle: string;
    children?: React.ReactNode;
}): React.ReactElement => {
    return (
        <section id={sectionId} className={cn("py-20 min-h-screen flex flex-col", className)} >
            <div className="space-y-5 lg:space-y-10 flex-1 flex flex-col" >
                <div className="flex w-full items-end justify-between ">
                    <h1 className="text-5xl font-semibold tracking-tighter capitalize ">
                        {sectionTitle}
                    </h1>
                </div>
                {children}
            </div>
        </section>
    )
}

export default SectionLayout