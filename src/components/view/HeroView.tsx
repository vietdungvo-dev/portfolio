import Image from "next/image";
import { Github, Linkedin, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailReveal from "@/components/view/EmailReveal";
import cvData from "@/constants/data";

const iconMap = {
    github: Github,
    linkedin: Linkedin,
} as const;

export default function HeroView() {
    const { name, role, tagline, summary, avatar, links } = cvData.profile;

    return (
        <section id="hero" className="relative px-6 pt-16 pb-10">
            {/* decorative blobs */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-[280px] w-[280px] rounded-full bg-gradient-to-tl from-cyan-500/15 to-transparent blur-3xl" />

            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
                {/* avatar */}
                <div className="group relative">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 opacity-50 blur-lg transition-all duration-500 group-hover:opacity-80" />
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                        <Image src={avatar} alt={`${name}'s avatar`} fill priority className="object-cover" />
                    </div>
                    <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
                        <Sparkles className="h-3 w-3 text-amber-400" />
                        Open to work
                    </span>
                </div>

                {/* name & role */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        <span className="bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            {name}
                        </span>
                    </h1>
                    <p className="text-base font-semibold text-muted-foreground">{role}</p>
                </div>

                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground/80 italic">
                    &ldquo;{tagline}&rdquo;
                </p>

                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground/60">
                    {summary}
                </p>

                {/* actions */}
                <div className="flex items-center gap-3">
                    <Button
                        size="lg"
                        asChild
                        className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-xl hover:shadow-violet-500/25 hover:brightness-110"
                    >
                        <a href="/cv/Vo-Viet-Dung-CV.pdf" download>
                            <Download className="h-4 w-4" />
                            Download CV
                        </a>
                    </Button>

                    {links.map(({ label, href, icon }) => {
                        if (icon === "mail") {
                            return (
                                <EmailReveal
                                    key={label}
                                    email={href.replace("mailto:", "")}
                                    className="h-10 w-10 rounded-full border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-violet-500/40 hover:bg-violet-500/10"
                                    iconClassName="h-5 w-5"
                                />
                            );
                        }
                        const Icon = iconMap[icon];
                        return (
                            <Button
                                key={label}
                                variant="outline"
                                size="icon"
                                asChild
                                className="h-10 w-10 rounded-full border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-violet-500/40 hover:bg-violet-500/10"
                            >
                                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                    <Icon className="h-5 w-5" />
                                </a>
                            </Button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
