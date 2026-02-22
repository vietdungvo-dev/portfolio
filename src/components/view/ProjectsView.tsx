import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, ArrowUpRight } from "lucide-react";
import cvData from "@/constants/data";

const accentColors = [
    "from-violet-500 to-indigo-500",
    "from-cyan-500 to-sky-500",
    "from-fuchsia-500 to-pink-500",
] as const;

export default function ProjectsView() {
    return (
        <section id="projects" className="px-6 py-8">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-6 text-center text-xl font-bold tracking-tight sm:text-2xl">
                    <span className="mr-2 text-cyan-400">🚀</span>
                    Featured Projects
                </h2>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {cvData.projects.map((project, idx) => {
                        const accent = accentColors[idx % accentColors.length];
                        return (
                            <Card
                                key={project.title}
                                className="group relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-violet-500/5"
                            >
                                <div className={`h-1 w-full bg-gradient-to-r ${accent} opacity-50 transition-opacity group-hover:opacity-100`} />

                                <CardHeader className="p-5 pb-3">
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-white shadow`}>
                                            <Layers className="h-4 w-4" />
                                        </span>
                                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                                    </div>
                                    <CardTitle className="text-base font-bold leading-snug">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="text-xs font-medium text-violet-400">
                                        {project.role}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex flex-1 flex-col gap-4 p-5 pt-0">
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {project.achievement}
                                    </p>

                                    <div className="mt-auto flex flex-wrap gap-1.5">
                                        {project.tech.map((t) => (
                                            <Badge
                                                key={t}
                                                variant="outline"
                                                className="rounded-full border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-violet-500/30 hover:text-foreground"
                                            >
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
