import { Badge } from "@/components/ui/badge";
import cvData from "@/constants/data";

export default function SkillsView() {
    return (
        <section id="skills" className="px-6 py-8">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-6 text-center text-xl font-bold tracking-tight sm:text-2xl">
                    <span className="mr-2 text-violet-400">⚡</span>
                    Skills &amp; Technologies
                </h2>

                <div className="grid gap-5 sm:grid-cols-2">
                    {cvData.skills.map(({ category, icon, skills }) => (
                        <div
                            key={category}
                            className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/25 hover:bg-white/[0.06]"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/15 to-indigo-500/15 text-lg">
                                    {icon}
                                </span>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                    {category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm transition-colors hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-300"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
