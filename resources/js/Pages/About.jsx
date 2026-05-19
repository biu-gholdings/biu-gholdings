import MainLayout from '@/Layouts/MainLayout';

export default function About() {
    return (
        <MainLayout title="About – Biu-g Holdings LLC">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        About Biu-g Holdings
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                        Building Africa’s Institutional Infrastructure for the Next 50 Years
                    </h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Biu-g Holdings LLC is a global holdings platform created to architect the next generation of
                        financial, technological and institutional infrastructure for Angola and Africa. We operate
                        across jurisdictions — United States, Portugal and Angola — with one mandate: build systems
                        that outlive market cycles and political cycles.
                    </p>
                </header>

                <section className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Mission</h2>
                        <p className="text-xs text-zinc-600">
                            To design, own and operate sovereign-grade platforms that turn African economies into
                            investable, transparent and interoperable systems — starting with Angola.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Vision</h2>
                        <p className="text-xs text-zinc-600">
                            A continent where citizens, institutions and governments transact on modern rails, backed by
                            robust data, liquidity and compliance — without losing sovereignty.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Mandate</h2>
                        <p className="text-xs text-zinc-600">
                            To build long-duration platforms in finance, infrastructure, data and education that
                            compound over decades, not quarters, while remaining fully aligned with regulators and
                            national priorities.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">Our Operating Pillars</h2>
                    <p className="text-sm text-zinc-600">
                        Biu-g Holdings operates through a set of focused pillars that together form a vertically integrated
                        ecosystem:
                    </p>
                    <div className="space-y-3">
                        <div className="rounded-lg border border-zinc-200 bg-white p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                1. Financial &amp; Capital Markets Infrastructure
                            </h3>
                            <p className="mt-1 text-xs text-zinc-600">
                                Through CubeShackles, Biu-g Investment Management and the FGMS group, we design robust
                                AOA-native rails, credit infrastructure, and institutional vehicles built for Angola’s
                                capital markets and regulators.
                            </p>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                2. Real Economy &amp; National Platforms
                            </h3>
                            <p className="mt-1 text-xs text-zinc-600">
                                PraçaNgola, the National Transit Platform, and other operating companies focus on
                                logistics, commerce and mobility — using modern rails to solve real, daily problems for
                                citizens and businesses.
                            </p>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                3. Data, Intelligence &amp; Market Transparency
                            </h3>
                            <p className="mt-1 text-xs text-zinc-600">
                                The National Data Platform and BualaBuitu Terminal are designed to give Angola sovereign
                                control over its economic data, analytics and decision intelligence — from informal
                                markets to listed assets.
                            </p>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                4. Education, Talent &amp; Fiduciary Stewardship
                            </h3>
                            <p className="mt-1 text-xs text-zinc-600">
                                BIU.G Academy and the fiduciary structures behind the group are built to protect
                                workers, align executives and train the next generation of African builders and
                                institutional leaders.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        Governance, Compliance &amp; Alignment
                    </h2>
                    <p className="text-sm text-zinc-600">
                        We design every structure with regulators and institutions in mind. Our entities are distributed
                        across Delaware, Portugal and Angola to ensure:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                        <li>Clear legal and tax residency for each operating company.</li>
                        <li>Clear participation vehicles within the Biu-g group structure.</li>
                        <li>
                            Compliance pathways with central banks, capital markets regulators and tax agencies.
                        </li>
                        <li>Long-term alignment between foreign capital, national interests and citizen outcomes.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        Time Horizon &amp; Strategic Discipline
                    </h2>
                    <p className="text-sm text-zinc-600">
                        Biu-g Holdings does not optimize for short-term hype. Our roadmap is measured in decades — 15-year,
                        29-year and 50-year arcs — where each entity, fund and platform compounds into a stronger
                        national and continental infrastructure stack.
                    </p>
                    <p className="text-sm text-zinc-600">
                        Discipline before scale. Responsibility before adoption. Transparency before technology.
                    </p>
                </section>
            </div>
        </MainLayout>
    );
}
