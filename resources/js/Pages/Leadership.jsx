import MainLayout from '@/Layouts/MainLayout';

const executives = [
    {
        name: 'Fábio Guilherme Massanga',
        role: 'Founder, Executive Chairman & Chief Sovereign Architect',
        location: 'Cabinda, Angola / United States',
        bio: 'Founder of Biu-g Holdings LLC and architect of the CubeShackles ecosystem. Leads the group’s long-duration strategy across Angola, Portugal and the United States, with a focus on sovereign-grade financial infrastructure, national platforms and institutional partnerships.',
    },
    {
        name: 'José Quembi',
        role: 'Chief Technology Officer (CTO)',
        location: 'Lubango, Angola',
        bio: 'Leads technical architecture and implementation of CubeShackles, the Angola National Wallet, BualaBuitu Terminal and the broader developer ecosystem, with a strong focus on offline-first, AOA-native infrastructure.',
    },
];

export default function Leadership() {
    return (
        <MainLayout title="Leadership – Biu-g Holdings LLC">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Leadership</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Leadership &amp; Governance</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Biu-g Holdings LLC is led by operators who combine on-the-ground execution in Angola with a
                        global view of capital markets, technology and regulatory alignment. The group’s leadership is
                        structured to balance sovereign priorities, institutional discipline and long-term shareholder
                        value.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">Executive Leadership</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {executives.map((exec) => (
                            <article
                                key={exec.name}
                                className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-4 md:p-5"
                            >
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-zinc-900">{exec.name}</h3>
                                    <p className="text-xs font-medium text-zinc-700">{exec.role}</p>
                                    {exec.location && (
                                        <p className="text-[11px] text-zinc-500">{exec.location}</p>
                                    )}
                                </div>
                                <p className="mt-3 text-xs leading-relaxed text-zinc-600">{exec.bio}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">Governance Philosophy</h2>
                    <p className="text-sm text-zinc-600">
                        Governance at Biu-g Holdings is designed around clear lines of accountability, jurisdictional
                        rigor and multi-decade continuity. As the group onboards independent directors, institutional
                        partners and strategic advisors, governance will formalize into:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                        <li>A holdings-level board at Biu-g Holdings LLC (USA).</li>
                        <li>Jurisdiction-specific boards for Portugal and Angola entities.</li>
                        <li>Specialized committees across risk, audit, technology and compensation.</li>
                        <li>Formal channels for regulator and institutional partner engagement.</li>
                    </ul>
                    <p className="text-sm text-zinc-600">
                        The objective is straightforward: ensure every core platform — CubeShackles, FGMS, PraçaNgola,
                        National Data Platform, BIU.G Academy — operates with the same level of discipline expected from
                        global institutions, while remaining anchored in Angola’s realities.
                    </p>
                </section>
            </div>
        </MainLayout>
    );
}
