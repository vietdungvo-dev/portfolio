"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmailRevealProps {
    email: string;
    className?: string;
    iconClassName?: string;
}

export default function EmailReveal({ email, className, iconClassName }: EmailRevealProps) {
    const [revealed, setRevealed] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleReveal = () => {
        setRevealed((prev) => !prev);
        setCopied(false);
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative inline-flex items-center">
            <Button
                variant="outline"
                size="icon"
                onClick={handleReveal}
                className={className}
                aria-label="Show email"
            >
                <Mail className={iconClassName} />
            </Button>

            {/* revealed email popup */}
            {revealed && (
                <div className="absolute left-1/2 top-full z-50 mt-2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-lg border border-white/10 bg-background/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-xl backdrop-blur-md">
                    <span>{email}</span>
                    <button
                        onClick={handleCopy}
                        className="inline-flex h-5 w-5 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/10 hover:text-violet-400"
                        aria-label="Copy email"
                    >
                        {copied ? (
                            <Check className="h-3 w-3 text-emerald-400" />
                        ) : (
                            <Copy className="h-3 w-3" />
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
