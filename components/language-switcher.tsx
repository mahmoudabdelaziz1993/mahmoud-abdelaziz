// components/language-switcher.tsx
'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import { LanguageCircleIcon } from '@hugeicons/core-free-icons'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher() {
    const pathname = usePathname()
    const router = useRouter()
    const currentLang = pathname.startsWith('/ar') ? 'ar' : 'en'
    const [lang, setLang] = useState(currentLang)

    // Update local state when route changes
    useEffect(() => {
        setLang(currentLang)
    }, [currentLang])

    // Function to get path for a specific language
    const getPathForLanguage = (targetLang: 'en' | 'ar') => {
        // Remove current language prefix if exists
        const pathWithoutLang = pathname.replace(/^\/(ar|en)/, '')
        return `/${targetLang}${pathWithoutLang || '/'}`
    }

    // Handle language change
    const handleLanguageChange = (value: string) => {
        if (value === currentLang) return // Don't navigate if already on this language
        setLang(value)
        router.push(getPathForLanguage(value as 'en' | 'ar'))
    }

    return (
        <DropdownMenu dir={currentLang === 'en' ? 'ltr' : 'rtl'}>
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    variant="outline"
                    aria-label="Switch language"
                >
                    <HugeiconsIcon icon={LanguageCircleIcon} />
                    <span className="sr-only">
                        {currentLang === 'en' ? 'Switch language' : 'تبديل اللغة'}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-40">
                <DropdownMenuLabel>
                    {currentLang === 'en' ? 'Select Language' : 'اختر اللغة'}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={lang}
                    onValueChange={handleLanguageChange}
                >
                    <DropdownMenuRadioItem value="en">
                        English
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="ar">
                        العربية
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}