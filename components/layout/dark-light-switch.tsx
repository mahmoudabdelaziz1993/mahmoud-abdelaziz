// components/layout/dark-light-switch.tsx
"use client";

import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const DarkModeSwitch = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    // Fix: Use requestAnimationFrame to avoid synchronous setState
    useEffect(() => {
        const frameId = requestAnimationFrame(() => {
            setIsMounted(true);
        });

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, []);

    // Don't render any theme-dependent content until mounted
    if (!isMounted) {
        return (
            <Button
                variant="outline"
                size="icon"
                disabled
                className="w-10 h-10"
                aria-label="Loading theme"
            >
                <div className="h-4 w-4 rounded-full bg-muted animate-ping" />
            </Button>
        );
    }

    const isDark = resolvedTheme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {!isDark ? (
                        <motion.div
                            key="sun"
                            className="absolute flex items-center justify-center"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 10
                                }
                            }}
                            exit={{
                                y: -10,
                                opacity: 0,
                                transition: { duration: 0.15 }
                            }}
                            whileHover={{
                                rotate: 15
                            }}
                        >
                            <Sun />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            className="absolute flex items-center justify-center"
                            initial={{
                                y: 10, opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 10
                                }
                            }}
                            exit={{
                                y: 10,
                                opacity: 0,
                                transition: { duration: 0.15 }
                            }}
                            whileHover={{
                                rotate: -15
                            }}
                        >
                            <Moon />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Button>
    );
};