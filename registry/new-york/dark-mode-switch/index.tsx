// components/ui/dark-mode-switch/index.tsx
"use client";

import { motion, AnimatePresence, Transition } from "motion/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// ... SVG Icons remain the same ...

// Custom ButtonProps interface based on shadcn Button
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
}

export interface DarkModeProps extends Omit<CustomButtonProps, "onClick" | "children"> {
    /**
     * Animation type for the toggle
     * @default "spring"
     */
    animationType?: "spring" | "fade" | "flip";

    /**
     * Custom sun icon component
     */
    SunIconComponent?: React.ComponentType<{ className?: string }>;

    /**
     * Custom moon icon component
     */
    MoonIconComponent?: React.ComponentType<{ className?: string }>;

    /**
     * Show loading state when theme is resolving
     * @default true
     */
    showLoadingState?: boolean;

    /**
     * Custom loading component
     */
    LoadingComponent?: React.ComponentType;

    /**
     * Callback when theme changes
     */
    onThemeChange?: (theme: "light" | "dark") => void;
}

// SVG Icons (inlined for zero dependencies)
const MoonIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("lucide lucide-moon", className)}
        {...props}
    >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);

const SunIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("lucide lucide-sun", className)}
        {...props}
    >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
    </svg>
);

// spring: default
// fade: fade out the sun icon and fade in the moon icon
// flip: flip the sun and moon icons
// ...
const DarkModeSwitch = ({
    animationType = "spring",
    SunIconComponent = SunIcon,
    MoonIconComponent = MoonIcon,
    showLoadingState = true,
    LoadingComponent,
    onThemeChange,
    className,
    variant = "outline",
    size = "icon",
    ...buttonProps
}: DarkModeProps) => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => {
            setMounted(true);
        });
    }, []);

    const toggleTheme = () => {
        if (!mounted) return;

        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        onThemeChange?.(newTheme);
    };

    if (!mounted && showLoadingState) {
        if (LoadingComponent) {
            return <LoadingComponent />;
        }

        return (
            <Button
                variant={variant}
                size={size}
                disabled
                className={cn("relative overflow-hidden", className)}
                aria-label="Loading theme"
                {...buttonProps}
            >
                <div className="h-4 w-4 rounded-full bg-muted animate-pulse" />
            </Button>
        );
    }

    const isDark = resolvedTheme === "dark";

    // Animation configurations
    const animations = {
        spring: {
            initial: {
                y: isDark ? 10 : -10,
                opacity: 0,
                scale: 0.8
            },
            animate: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 15
                } as Transition
            },
            exit: {
                y: isDark ? -10 : 10,
                opacity: 0,
                scale: 0.8,
                transition: {
                    duration: 0.15
                } as Transition
            },
            whileHover: {
                rotate: isDark ? -15 : 15
            }
        },
        fade: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: {
                    duration: 0.2
                } as Transition
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 0.15
                } as Transition
            },
            whileHover: undefined // No hover effect for fade

        },
        flip: {
            initial: {
                rotateX: -90,
                opacity: 0
            },
            animate: {
                rotateX: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                } as Transition
            },
            exit: {
                rotateX: 90,
                opacity: 0,
                transition: {
                    duration: 0.2
                } as Transition
            },
            whileHover: undefined // No hover effect for flip

        }
    };

    const animation = animations[animationType];

    return (
        <Button
            variant={variant}
            size={size}
            onClick={toggleTheme}
            className={cn("relative overflow-hidden", className)}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
            {...buttonProps}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {!isDark ? (
                        <motion.div
                            key="sun"
                            className="absolute flex items-center justify-center"
                            initial={animation.initial}
                            animate={animation.animate}
                            exit={animation.exit}
                            whileHover={animation.whileHover}
                        >
                            <SunIconComponent className="h-[1.2rem] w-[1.2rem]" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            className="absolute flex items-center justify-center"
                            initial={animation.initial}
                            animate={animation.animate}
                            exit={animation.exit}
                            whileHover={animation.whileHover}
                        >
                            <MoonIconComponent className="h-[1.2rem] w-[1.2rem]" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Button>
    );
};

export default DarkModeSwitch;