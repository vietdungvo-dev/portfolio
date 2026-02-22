import { Github, Linkedin, Heart } from "lucide-react";
import EmailReveal from "@/components/view/EmailReveal";
import cvData from "@/constants/data";

const iconMap = {
    github: Github,
    linkedin: Linkedin,
} as const;

export default function FooterView() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 px-6 py-6">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                    {cvData.profile.links.map(({ label, href, icon }) => {
                        if (icon === "mail") {
                            return (
                                <EmailReveal
                                    key={label}
                                    email={href.replace("mailto:", "")}
                                    className="h-7 w-7 rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                                    iconClassName="h-3.5 w-3.5"
                                />
                            );
                        }
                        const Icon = iconMap[icon];
                        return (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                            >
                                <Icon className="h-3.5 w-3.5" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
