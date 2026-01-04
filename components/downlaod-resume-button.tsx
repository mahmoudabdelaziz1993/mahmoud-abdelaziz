import { Button } from "@/components/ui/button"
import { Download01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { ButtonGroup } from "@/components/ui/button-group"
import { heroContent } from '@/data/heroContent'
export function DownloadResume() {
    return (
        <ButtonGroup dir="ltr">
            <Button asChild>
                <Link
                    href={heroContent.resumeButton.link}
                    download={heroContent.resumeButton.DownloadName.ar}
                    target="_blank" // Optional: opens in new tab (some browsers require this for download)
                    rel="noopener noreferrer"
                    aria-label="Download Mahmoud Abdelaziz's resume as PDF"
                >
                    {heroContent.resumeButton.label.ar}

                    <HugeiconsIcon icon={heroContent.resumeButton.icon} />
                </Link>
            </Button>
        </ButtonGroup>
    )
}