import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import cvData from "@/constants/data";

export default function CertificatesView() {
    return (
        <section id="certificates" className="px-6 py-8">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-6 text-center text-xl font-bold tracking-tight sm:text-2xl">
                    <span className="mr-2 text-amber-400">🏅</span>
                    Certificates
                </h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cvData.certificates.map((cert) => (
                        <div
                            key={cert.name}
                            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-amber-500/25 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-amber-500/5"
                        >
                            {/* top accent */}
                            <div className="h-0.5 w-full bg-gradient-to-r from-amber-500 to-orange-500 opacity-40 transition-opacity group-hover:opacity-100" />

                            <div className="p-4">
                                {/* header */}
                                <div className="mb-3 flex items-start gap-3">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/15 to-orange-500/15">
                                        <Award className="h-4 w-4 text-amber-400" />
                                    </span>

                                    <div className="min-w-0">
                                        {cert.url ? (
                                            <a
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-sm font-bold leading-snug text-foreground transition-colors hover:text-amber-400"
                                            >
                                                {cert.name}
                                                <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                                            </a>
                                        ) : (
                                            <p className="text-sm font-bold leading-snug text-foreground">
                                                {cert.name}
                                            </p>
                                        )}
                                        <p className="mt-0.5 text-xs text-muted-foreground">{cert.issuer}</p>
                                    </div>
                                </div>

                                {/* certificate image thumbnail */}
                                {cert.image && (
                                    <div className="overflow-hidden rounded-lg border border-white/5">
                                        <Image
                                            src={cert.image}
                                            alt={`${cert.name} certificate`}
                                            width={400}
                                            height={280}
                                            className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
