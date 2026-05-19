import MainLayout from '@/Layouts/MainLayout';

export default function CorporateStructure() {
    return (
        <MainLayout title="Corporate Structure – Biu-g Holdings">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Biu-g Holdings
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Corporate Structure</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Biu-g Holdings operates through a multi-layer structure spanning the United States, Portugal,
                        and Angola. This page describes group-controlled entities and planned vehicles for public
                        transparency only.
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        The group is organized into strategic clusters across technology, finance, infrastructure, data,
                        education, and fiduciary vehicles.
                    </p>
                    <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 text-xs leading-relaxed text-zinc-600 md:p-5">
                        <p>
                            References to planned entities, platforms, and operating structures are provided for
                            transparency and may evolve as legal, regulatory, and commercial conditions change. This page
                            does not imply endorsement, ownership, investment, partnership, or approval by any third party
                            or public institution.
                        </p>
                    </div>
                </header>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">1. Top-Level U.S. Parent</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Biu-g Holdings LLC (USA)</h3>
                        <p className="text-sm text-zinc-600">
                            Global parent entity. Holds all intellectual property, brand rights, and global ownership
                            stakes — directly and through SGPS/participações structures. Serves as the capital umbrella
                            for all international and Angola-based operations.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        2. Holdings &amp; Participation Vehicles
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Biu-g SGPS, Lda. (Portugal)</h3>
                            <p className="text-sm text-zinc-600">
                                Portuguese SGPS holding. Functions as the European equity vehicle and diversification
                                structure.
                            </p>
                            <p className="text-sm text-zinc-600">
                                <span className="font-medium">Equity role:</span> holds direct equity in{' '}
                                <span className="font-medium">CubeShackles, Inc. (USA)</span> and provides indirect exposure
                                to <span className="font-medium">CubeShackles, S.A. (Angola)</span>.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Biu-g SGPS, Lda. (Angola)</h3>
                            <p className="text-sm text-zinc-600">
                                Angolan SGPS providing AOA-native control and alignment with Angolan regulators and
                                institutions.
                            </p>
                            <p className="text-sm text-zinc-600">
                                <span className="font-medium">Equity role:</span> participation in European holding
                                structures and direct interests in key Angola operating companies.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        3. CubeShackles Group — Core Technology &amp; National Infrastructure
                    </h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">CubeShackles, Inc. (Delaware C-Corp, USA)</h3>
                        <p className="text-sm text-zinc-600">
                            Global technology and intellectual property company for the CubeShackles ecosystem.
                            Responsible for protocol research, software architecture, brand stewardship, and future
                            licensing frameworks.
                        </p>
                    </div>

                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">CubeShackles, S.A. (Angola)</h3>
                        <p className="text-sm text-zinc-600">
                            Angola-focused operating company intended to localize CubeShackles infrastructure for national
                            use cases, regulatory alignment, and future institutional partnerships, subject to applicable
                            approvals.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">National Data Platform</h3>
                            <p className="text-xs font-medium text-zinc-500">Platform inside CubeShackles, S.A.</p>
                            <p className="text-[11px] text-zinc-500">Product (Spin-out Optional)</p>
                            <p className="text-sm text-zinc-600">
                                Economic and social data platform — inflation, unemployment, informal markets, local price
                                indices, and access metrics.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Kulifikila</h3>
                            <p className="text-xs font-medium text-zinc-500">Platform inside CubeShackles, S.A.</p>
                            <p className="text-[11px] text-zinc-500">Product (Spin-out Optional)</p>
                            <p className="text-sm text-zinc-600">
                                Credit intelligence platform for formal and informal sectors, with multi-layer AOA credit
                                scoring and risk intelligence.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Angola National Transit Platform</h3>
                            <p className="text-xs font-medium text-zinc-500">Platform inside CubeShackles, S.A.</p>
                            <p className="text-[11px] text-zinc-500">Product (Spin-out Optional)</p>
                            <p className="text-sm text-zinc-600">
                                National mobility application for drivers and riders, with integrated payment and tax rails.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">PraçaNgola</h3>
                            <p className="text-xs font-medium text-zinc-500">Platform inside CubeShackles, S.A.</p>
                            <p className="text-[11px] text-zinc-500">Product (Spin-out Optional)</p>
                            <p className="text-sm text-zinc-600">
                                National e-commerce and logistics platform for Angola and regional scale.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">BualaBuitu Terminal</h3>
                        <p className="text-xs font-medium text-zinc-500">Platform inside CubeShackles, S.A.</p>
                        <p className="text-[11px] text-zinc-500">Product (Spin-out Optional)</p>
                        <p className="text-sm text-zinc-600">
                            Financial market intelligence terminal for real-time data, analytics, and market infrastructure.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        4. FGM / FGMS Group — Investment &amp; Financial Cluster
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">FGM Capital, Lda. (Angola)</h3>
                            <p className="text-[11px] text-zinc-500">Planned / In Formation</p>
                            <p className="text-sm text-zinc-600">
                                Trading and capital markets entity focused on proprietary strategies, capital formation,
                                treasury operations and long-term financial structuring activities across Angola and African
                                markets.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Grupo FGMS &amp; Associados, Lda. (Angola)</h3>
                            <p className="text-[11px] text-zinc-500">Planned / In Formation</p>
                            <p className="text-sm text-zinc-600">
                                Integrated financial platform designed to support multi-strategy capital operations,
                                investment structuring, treasury coordination and long-term institutional development across
                                Angola.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Biu-g Investment Management, Lda. (Angola)</h3>
                            <p className="text-[11px] text-zinc-500">Planned / In Formation</p>
                            <p className="text-sm text-zinc-600">
                                AOA-focused asset management platform designed to operate dedicated investment vehicles
                                across public markets, strategic sectors and long-term national capital development
                                initiatives.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">1975 Nzila, Lda. (Angola) — Planned</h3>
                            <p className="text-sm text-zinc-600">
                                Local VC/PE and hospitality / brand experience arm, economically linked to the FGMS and
                                Biu-g Investment Management cluster.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">FGMS &amp; Co. — Planned</h3>
                            <p className="text-sm text-zinc-600">
                                Real estate operations arm for Angola and Portugal, aligned with FGMS &amp; Associados and
                                the holdings platform.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">FGM &amp; Co. — Planned</h3>
                            <p className="text-sm text-zinc-600">
                                Co-investment, advisory, and financial structuring SPV leveraged for strategic
                                transactions.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">5. Trusts &amp; Fiduciary Vehicles</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Fundo Fiduciário Estratégico (Angola) — Planned</h3>
                        <p className="text-sm text-zinc-600">
                            Planned internal fiduciary structure to support continuity, stakeholder alignment, and
                            AOA-denominated interests on behalf of Biu-g Holdings within the group.
                        </p>
                        <p className="text-sm text-zinc-600">
                            Representation is exercised through{' '}
                            <span className="font-medium">Sociedade de Participações BIU-G, Lda. (Angola)</span>.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Sango Trust</h3>
                        <p className="text-sm text-zinc-600">
                            Private fiduciary and long-term asset stewardship structure supporting intergenerational
                            governance, succession planning, and strategic capital preservation within the Biu-g Holdings
                            ecosystem.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        6. Education &amp; National Capacity Building
                    </h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">BIU.G Academy</h3>
                        <p className="text-sm text-zinc-600">
                            BIU.G Academy is an active educational and capacity-building initiative focused on technology,
                            financial literacy, digital infrastructure, and AI-native workforce development across Angola and
                            Africa.
                        </p>
                        <p className="text-sm text-zinc-600">
                            The initiative supports long-term ecosystem development through research, training, technical
                            education, and community-led learning programs aligned with the broader Biu-g Holdings mission.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        7. Additional Products &amp; Future Legal Entities
                    </h2>
                    <p className="text-sm text-zinc-600">
                        The following platforms are part of the group portfolio and may be organized as standalone
                        legal entities as the ecosystem scales:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                        <li>Biu-g Care (insurance vertical)</li>
                        <li>CubeBank (digital bank concept)</li>
                        <li>CubePay (payments gateway)</li>
                        <li>CubeDex / CubeBourse (DEX and exchange layer)</li>
                        <li>CubeCloud / CubeQuantum (Africa-first compute and infrastructure stack)</li>
                        <li>
                            Angola National Wallet (planned national wallet system within the CubeShackles group structure)
                        </li>
                        <li>BualaBuitu Terminal (platform inside CubeShackles, S.A.)</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">Roll-Up View — How the Group Actually Looks</h2>
                    <p className="text-sm text-zinc-600">
                        At a high level, Biu-g Holdings exercises control and strategic direction through three major
                        pillars:
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="mb-2 text-sm font-semibold text-zinc-900">1. Holdings Shells (SPVs &amp; SGPS)</h3>
                            <ul className="list-inside list-disc space-y-1 text-xs text-zinc-600">
                                <li>Biu-g Holdings LLC (USA)</li>
                                <li>Biu-g SGPS (Portugal &amp; Angola)</li>
                                <li>Sociedade de Participações BIU-G (Portugal &amp; Angola)</li>
                            </ul>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="mb-2 text-sm font-semibold text-zinc-900">2. Operating Platforms</h3>
                            <ul className="list-inside list-disc space-y-1 text-xs text-zinc-600">
                                <li>CubeShackles, Inc. (USA)</li>
                                <li>CubeShackles, S.A. (Angola)</li>
                                <li>FGM Capital, Lda. (Angola)</li>
                                <li>Grupo FGMS &amp; Associados, Lda. (Angola)</li>
                                <li>Biu-g Investment Management, Lda. (Angola)</li>
                                <li>
                                    National Data Platform, Kulifikila, PraçaNgola, Angola National Transit Platform,
                                    BualaBuitu Terminal (platforms inside CubeShackles, S.A.); 1975 Nzila, FGMS &amp; Co,
                                    FGM &amp; Co (planned)
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="mb-2 text-sm font-semibold text-zinc-900">3. Trust &amp; Education</h3>
                            <ul className="list-inside list-disc space-y-1 text-xs text-zinc-600">
                                <li>Fundo Fiduciário Estratégico (Angola)</li>
                                <li>Sango Trust</li>
                                <li>BIU.G Academy</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
