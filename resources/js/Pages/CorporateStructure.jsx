import MainLayout from '@/Layouts/MainLayout';

export default function CorporateStructure() {
    return (
        <MainLayout title="Corporate Structure – Biu-g Holdings LLC">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Biu-g Holdings LLC
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Corporate Structure</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Biu-g Holdings LLC operates through a sovereign-grade, multi-layer structure spanning the United
                        States, Portugal, and Angola. This architecture provides regulatory clarity, cross-border capital
                        efficiency, IP protection, and long-term alignment with national institutions and African
                        markets.
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        The Group is organized into eight strategic clusters, each with a distinct mandate across
                        technology, finance, infrastructure, data, education, and fiduciary vehicles.
                    </p>
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
                                <span className="font-medium">Equity role:</span> owns{' '}
                                <span className="font-medium">29% of Biu-g SGPS (Portugal)</span> and holds direct shares
                                in <span className="font-medium">CubeShackles, S.A. (Angola)</span>.
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
                            Global technology and IP company. Owns the SmartShackles engine, DAG protocol, developer
                            ecosystem, and global licensing.
                        </p>
                        <p className="text-sm font-medium text-zinc-700">Ownership structure</p>
                        <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                            <li>Founders &amp; retained — 47.10%</li>
                            <li>Biu-g SGPS (Portugal) — 8.00%</li>
                            <li>Pre-seed investors — 14.90%</li>
                            <li>Future NASDAQ IPO investors — 20.00%</li>
                            <li>Strategic investors — Vanguard, ARK, Circle, Coinbase, etc.</li>
                            <li>Holds 25% of CubeShackles, S.A. (Angola).</li>
                        </ul>
                    </div>

                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">CubeShackles, S.A. (Angola)</h3>
                        <p className="text-sm text-zinc-600">National operating company for the CubeShackles ecosystem.</p>
                        <p className="text-sm font-medium text-zinc-700">Key shareholders</p>
                        <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                            <li>CubeShackles, Inc. — 25.00%</li>
                            <li>Unitel, Movicel, Africell</li>
                            <li>Banco Nacional de Angola (BNA) — 2.00%</li>
                            <li>Opaia, Angola Capital Partners (FIPA), Angola Telecom</li>
                            <li>BFA Asset Management – Kimbo Fund — 0.75%</li>
                            <li>Ministério das Finanças (MinFin) — 2.00%</li>
                            <li>Ministério dos Transportes (MinTrans) — 2.00%</li>
                            <li>Biu-g SGPS (Angola) — 6.15%</li>
                            <li>Employees &amp; vested options — 12.00%</li>
                            <li>BODIVA IPO Reserve — 25.00%</li>
                            <li>Strategic Reserve — 5.00%</li>
                        </ul>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">National Data Platform, Lda. (Angola) — Planned</h3>
                            <p className="text-sm text-zinc-600">
                                Wholly owned by CubeShackles, S.A. Holds sovereign-grade economic and social data,
                                including inflation, unemployment, informal markets, and pricing indices.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Kulifikila Credit Bureau, Lda. (Angola) — Planned</h3>
                            <p className="text-sm text-zinc-600">
                                Africa-first credit bureau for both formal and informal sectors, operating multi-layer AOA
                                credit scoring rails.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">
                                Angola National Transit Platform (Lda., name TBD) — Planned
                            </h3>
                            <p className="text-sm text-zinc-600">
                                Runs the national transit application for drivers and riders, integrated with e-Kwanza,
                                stable AOA, and National Token tax rails.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">PraçaNgola, Lda. (Angola) — Planned</h3>
                            <p className="text-sm text-zinc-600">
                                Angolan national e-commerce infrastructure. Payments run through CubeShackles rails
                                (e-Kwanza, stable AOA, National Token).
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">BualaBuitu Platform</h3>
                        <p className="text-sm text-zinc-600">
                            Angola’s Bloomberg-equivalent financial terminal. Currently structured as a product within
                            CubeShackles, S.A., with optional future spin-out as a dedicated legal entity.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        4. FGM / FGMS Group — Investment &amp; Financial Cluster
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">FGM Capital, Lda. (Portugal)</h3>
                            <p className="text-sm text-zinc-600">
                                Original trading and capital entity for the group. Supports core capital markets strategy
                                and early-stage operations.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Grupo FGMS &amp; Associados, Lda. (Angola)</h3>
                            <p className="text-sm text-zinc-600">
                                Integrated financial powerhouse — the equivalent of a combined KKR, Point72 and TopStep
                                for Angola.
                            </p>
                            <p className="text-sm font-medium text-zinc-700">Ownership</p>
                            <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                                <li>Sociedade de Participações BIU-G, Lda. (Portugal) — 25%</li>
                                <li>Sociedade de Participações BIU-G, Lda. (Angola) — 29%</li>
                                <li>Remaining equity allocated across employees, local partners, and other investors.</li>
                            </ul>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Biu-g Investment Management, Lda. (Angola)</h3>
                            <p className="text-sm text-zinc-600">ARK Invest–style asset manager operating exclusively in Angola.</p>
                            <p className="text-sm text-zinc-600">
                                Mandate: 15 AOA-denominated funds, each capitalized with 100M AOA and investing only in
                                Angolan assets.
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
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        5. Mucho Dinero Group — Media &amp; Technology Talent
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Mucho Dinero Tecnologia, Lda. (Angola)</h3>
                            <p className="text-sm text-zinc-600">
                                Innovation and national talent-development arm. Supports CubeShackles, the Angola National
                                Wallet, PraçaNgola, and national transit systems.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Mucho Dinero Produção, Lda. (Angola)</h3>
                            <p className="text-sm text-zinc-600">
                                Media, campaigns, and advertising production entity for all ecosystem brands and
                                national-scale communication initiatives.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">6. Trusts &amp; Fiduciary Vehicles</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Fundo Fiduciário Estratégico (Angola)</h3>
                        <p className="text-sm text-zinc-600">
                            Sovereign-grade fiduciary fund established to protect all Angolan subsidiaries, shield
                            executives and workers, and hold AOA-denominated interests on behalf of Biu-g Holdings.
                        </p>
                        <p className="text-sm text-zinc-600">
                            Representation is exercised through{' '}
                            <span className="font-medium">Sociedade de Participações BIU-G, Lda. (Angola)</span>.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Sango Trust — Planned</h3>
                        <p className="text-sm text-zinc-600">
                            Long-term wealth, asset protection, and succession vehicle aligned with the multi-jurisdictional
                            structure of Biu-g Holdings.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        7. Education &amp; National Capacity Building
                    </h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">BIU.G Academy — Non-Profit</h3>
                        <p className="text-sm text-zinc-600">
                            Educational backbone of the ecosystem. Supports CubeShackles, the Angola National Wallet,
                            Anglocoin, and financial literacy initiatives nationwide.
                        </p>
                        <p className="text-sm text-zinc-600">
                            Strategically positioned under <span className="font-medium">CubeShackles Global</span>, while
                            brand control and mission alignment remain with Biu-g Holdings LLC.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        8. Additional Products &amp; Future Legal Entities
                    </h2>
                    <p className="text-sm text-zinc-600">
                        The following platforms currently operate as products or internal initiatives and can be converted
                        into standalone legal entities as the ecosystem scales:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                        <li>Biu-g Care (insurance vertical)</li>
                        <li>CubeBank (digital bank concept)</li>
                        <li>CubePay (payments gateway)</li>
                        <li>CubeDex / CubeBourse (DEX and exchange layer)</li>
                        <li>CubeCloud / CubeQuantum (Africa-first compute and infrastructure stack)</li>
                        <li>
                            Angola National Wallet (regulated national wallet system under CubeShackles, S.A. and national
                            banking partners)
                        </li>
                        <li>BualaBuitu Terminal Angola (financial terminal product within CubeShackles, S.A.)</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">Roll-Up View — How the Group Actually Looks</h2>
                    <p className="text-sm text-zinc-600">
                        At a high level, Biu-g Holdings LLC exercises control and strategic direction through three major
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
                                <li>FGM Capital, Lda. (Portugal)</li>
                                <li>Grupo FGMS &amp; Associados, Lda. (Angola)</li>
                                <li>Biu-g Investment Management, Lda. (Angola)</li>
                                <li>Mucho Dinero Tecnologia &amp; Mucho Dinero Produção, Lda. (Angola)</li>
                                <li>National Data Platform, Kulifikila, PraçaNgola, 1975 Nzila, FGMS &amp; Co, FGM &amp; Co (planned)</li>
                            </ul>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="mb-2 text-sm font-semibold text-zinc-900">3. Trust &amp; Non-Profit</h3>
                            <ul className="list-inside list-disc space-y-1 text-xs text-zinc-600">
                                <li>Fundo Fiduciário Estratégico (Angola)</li>
                                <li>Sango Trust (planned)</li>
                                <li>BIU.G Academy (non-profit under CubeShackles Global)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
