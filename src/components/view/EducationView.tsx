import { GraduationCap } from "lucide-react";
import cvData from "@/constants/data";

export default function EducationView() {
    const { school, degree, specialization } = cvData.education;

    return (
        <section id="education" className="px-6 py-8">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-6 text-center text-xl font-bold tracking-tight sm:text-2xl">
                    <span className="mr-2 text-fuchsia-400">🎓</span>
                    Education
                </h2>

                <div className="mx-auto max-w-lg">
                    <div className="group flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-fuchsia-500/25 hover:bg-white/[0.06]">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/15 to-pink-500/15 shadow-inner">
                            <GraduationCap className="h-6 w-6 text-fuchsia-400" />
                        </span>

                        <div>
                            <h3 className="text-base font-bold">{school}</h3>
                            <p className="text-sm text-muted-foreground">{degree}</p>
                            <p className="text-xs text-fuchsia-400/80">{specialization}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
