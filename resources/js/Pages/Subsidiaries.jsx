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
                    'Global technology and IP company for the CubeShackles ecosystem. Owns the SmartShackles engine, DAG protocol, developer stack and licensing model, and holds equity in CubeShackles, S.A. (Angola).',
            },
            {
                name: 'CubeShackles, S.A. (Angola)',
                type: 'Operating Company',
                status: 'Active',
                description:
                    'National operating company for the CubeShackles rails in Angola. Interfaces with regulators, banks, telecom operators and institutions to run AOA-native financial infrastructure.',
            },
            {
                name: 'National Data Platform, Lda. (Angola)',
                type: 'Data Platform',
                status: 'Planned',
                description:
                    'Wholly-owned subsidiary of CubeShackles, S.A. focused on sovereign-grade economic and social data: inflation, unemployment, informal markets, local price indices and access metrics.',
            },
            {
                name: 'Kulifikila – Credit Bureau, Lda. (Angola)',
                type: 'Credit Infrastructure',
                status: 'Planned',
                description:
                    'Africa-first credit bureau focused on both formal and informal sectors, operating multi-layer AOA credit scoring and risk intelligence for banks, fintechs and government.',
            },
            {
                name: 'Angola National Transit Platform Company (Lda., name TBD)',
                type: 'Mobility / Transit',
                status: 'Planned',
                description:
                    'Operating company for the National Transit App (drivers and riders), integrated with e-Kwanza, stable AOA and National Token for transport payments and tax rails.',
            },
            {
                name: 'PraçaNgola, Lda. (Angola)',
                type: 'E-commerce Infrastructure',
                status: 'Planned',
                description:
                    'Legal vehicle for PraçaNgola — a national e-commerce and logistics platform targeting “Angola’s Amazon equivalent”, powered by CubeShackles payments and tax rails.',
            },
            {
                name: 'BualaBuitu Terminal (Platform inside CubeShackles, S.A.)',
                type: 'Market Intelligence Platform',
                status: 'Product (Spin-out Optional)',
                description:
                    'Angola’s Bloomberg-style financial terminal for real-time data, analytics and market infrastructure. Today structured as a product under CubeShackles, S.A., with optional future spin-out.',
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
                    'Original trading and capital entity of the group. Supports proprietary trading, capital markets exposure and early-stage structuring activities.',
            },
            {
                name: 'Grupo FGMS & Associados, Lda. (Angola)',
                type: 'Integrated Financial Platform',
                status: 'Active',
                description:
                    'Integrated financial platform modeled as a combined KKR + Point72 + TopStep equivalent for Angola, holding multi-strategy, multi-vehicle capabilities for national deals.',
            },
            {
                name: 'Biu-g Investment Management, Lda. (Angola)',
                type: 'Asset Management',
                status: 'Planned / In Formation',
                description:
                    'AOA-only asset manager inspired by ARK Invest. Designed to operate 15 dedicated funds, each capitalized with 100M AOA, investing exclusively in Angolan assets.',
            },
            {
                name: '1975 Nzila, Lda. (Angola)',
                type: 'VC / PE & Experiences',
                status: 'Planned',
                description:
                    'Local VC/PE and hospitality / experience arm, focused on strategic equity, real economy projects and branded experiences linked to the Biu-g Holdings ecosystem.',
            },
            {
                name: 'FGMS & Co.',
                type: 'Real Estate Operations',
                status: 'Planned',
                description:
                    'Real estate operating arm for Angola and Portugal, aligned with FGMS & Associados and the broader holdings structure.',
            },
            {
                name: 'FGM & Co.',
                type: 'Advisory & Co-Investment SPV',
                status: 'Planned',
                description:
                    'Financial structuring and co-investment vehicle used for bespoke transactions and strategic syndications alongside institutional partners.',
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
                    'Technology subsidiary focused on innovation and national talent development. Supports CubeShackles, Angola National Wallet, PraçaNgola and transit platforms.',
            },
            {
                name: 'Mucho Dinero Produção, Lda. (Angola)',
                type: 'Media & Production',
                status: 'Active',
                description:
                    'Media and production company responsible for campaigns, content and national communication for CubeShackles, Angola National Wallet, PraçaNgola and related brands.',
            },
        ],
    },
    {
        title: 'Education & Non-Profit',
        items: [
            {
                name: 'BIU.G Academy (Non-profit)',
                type: 'Education / Capacity Building',
                status: 'In Formation',
                description:
                    'Educational backbone of the ecosystem. Delivers financial literacy, technical training and onboarding for CubeShackles, Anglocoin, Angola National Wallet and related systems.',
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
                        Biu-g Holdings LLC operates a multi-entity, multi-jurisdictional portfolio across technology,
                        finance, data, mobility, e-commerce, media and education. Each subsidiary is structured to align
                        with regulators, protect local stakeholders and compound long-term value for the group.
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
