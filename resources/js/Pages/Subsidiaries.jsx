import MainLayout from '@/Layouts/MainLayout';

const clusters = [
    {
        title: 'CubeShackles Group – Core Technology & Infrastructure',
        items: [
            {
                name: 'CubeShackles, Inc. (Delaware C-Corp, USA)',
                type: 'Technology / IP Company',
                status: 'Active',
                description:
                    'Global technology and intellectual property company for the CubeShackles ecosystem. Responsible for protocol research, software architecture, brand stewardship, and future licensing frameworks.',
            },
            {
                name: 'CubeShackles, S.A. (Angola)',
                type: 'Operating Company',
                status: 'Planned / In Formation',
                description:
                    'Angola-focused operating company intended to localize CubeShackles infrastructure for national use cases, regulatory alignment, and future institutional partnerships, subject to applicable approvals.',
            },
            {
                name: 'National Data Platform, Lda. (Angola)',
                type: 'Data Platform',
                status: 'Planned',
                description:
                    'Planned entity for economic and social data — inflation, unemployment, informal markets, local price indices and access metrics.',
            },
            {
                name: 'Kulifikila Credit Bureau, Lda. (Angola)',
                type: 'Credit Infrastructure',
                status: 'Planned',
                description:
                    'Planned credit infrastructure for formal and informal sectors, with multi-layer AOA credit scoring and risk intelligence.',
            },
            {
                name: 'Angola National Transit Platform',
                type: 'Mobility / Transit',
                status: 'Planned',
                description:
                    'Planned national transit application for drivers and riders, with group payment and tax rails under development.',
            },
            {
                name: 'PraçaNgola, Lda. (Angola)',
                type: 'E-commerce Infrastructure',
                status: 'Planned',
                description:
                    'Planned national e-commerce and logistics infrastructure within the CubeShackles group structure.',
            },
            {
                name: 'BualaBuitu Terminal',
                type: 'Platform / Product',
                status: 'In Development',
                description:
                    'Financial market intelligence terminal developed as a platform product within the CubeShackles group.',
            },
        ],
    },
    {
        title: 'FGM / FGMS & Investment Cluster',
        items: [
            {
                name: 'FGM Capital, Lda. (Portugal)',
                type: 'Trading & Capital',
                status: 'Active',
                description:
                    'Trading and capital entity of the group within the Biu-g holdings structure.',
            },
            {
                name: 'Grupo FGMS & Associados, Lda. (Angola)',
                type: 'Integrated Financial Platform',
                status: 'Active',
                description:
                    'Integrated financial platform for Angola within the Biu-g group structure.',
            },
            {
                name: 'Biu-g Investment Management, Lda. (Angola)',
                type: 'Asset Management',
                status: 'Planned',
                description:
                    'Planned AOA-denominated asset management vehicle, subject to applicable local regulation.',
            },
            {
                name: '1975 Nzila, Lda. (Angola)',
                type: 'VC / PE & Experiences',
                status: 'Planned',
                description:
                    'Planned local investment and brand experience vehicle within the Biu-g Holdings ecosystem.',
            },
            {
                name: 'FGMS & Co.',
                type: 'Real Estate Operations',
                status: 'Planned',
                description:
                    'Planned real estate operating arm for Angola and Portugal within the group structure.',
            },
            {
                name: 'FGM & Co.',
                type: 'Advisory & Structuring SPV',
                status: 'Planned',
                description:
                    'Planned financial structuring and co-investment vehicle for group transactions.',
            },
        ],
    },
    {
        title: 'Mucho Dinero Group – Media & Technology Talent',
        items: [
            {
                name: 'Mucho Dinero Tecnologia, Lda. (Angola)',
                type: 'Technology & Innovation',
                status: 'Active',
                description:
                    'Technology subsidiary focused on innovation and national talent development within the group.',
            },
            {
                name: 'Mucho Dinero Produção, Lda. (Angola)',
                type: 'Media & Production',
                status: 'Active',
                description:
                    'Media and production company for group brands and national communication initiatives.',
            },
        ],
    },
    {
        title: 'Fiduciary & Education',
        items: [
            {
                name: 'Fundo Fiduciário Estratégico (Angola)',
                type: 'Fiduciary Vehicle',
                status: 'Planned',
                description:
                    'Planned internal fiduciary structure supporting continuity and alignment within the Biu-g group.',
            },
            {
                name: 'Sango Trust',
                type: 'Trust Vehicle',
                status: 'Planned',
                description:
                    'Planned long-term wealth and succession vehicle within the multi-jurisdictional structure.',
            },
            {
                name: 'BIU.G Academy (Non-profit)',
                type: 'Education / Capacity Building',
                status: 'In Formation',
                description:
                    'Educational backbone of the ecosystem for financial literacy and technical training.',
            },
        ],
    },
];

export default function Subsidiaries() {
    return (
        <MainLayout title="Subsidiaries & Portfolio – Biu-g Holdings LLC">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Portfolio</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Subsidiaries &amp; Portfolio Companies</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Biu-g Holdings LLC operates a multi-entity portfolio across technology, finance, data, mobility,
                        e-commerce, media and education. Listed entities are group-controlled or planned internal vehicles.
                    </p>
                    <p className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 text-xs leading-relaxed text-zinc-600">
                        References to planned entities may evolve as legal and regulatory conditions change. This page does
                        not imply endorsement, ownership, investment, partnership, or approval by any third party or public
                        institution.
                    </p>
                </header>

                {clusters.map((cluster) => (
                    <section key={cluster.title} className="space-y-4">
                        <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">{cluster.title}</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {cluster.items.map((item) => (
                                <article
                                    key={item.name}
                                    className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-4 md:p-5"
                                >
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-semibold text-zinc-900">{item.name}</h3>
                                        <p className="text-[11px] font-medium text-zinc-700">{item.type}</p>
                                        <p className="text-[11px] text-zinc-500">
                                            Status: <span className="font-medium">{item.status}</span>
                                        </p>
                                    </div>
                                    <p className="mt-3 text-xs leading-relaxed text-zinc-600">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </MainLayout>
    );
}
