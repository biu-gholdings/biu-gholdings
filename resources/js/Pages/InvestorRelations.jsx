import MainLayout from '@/Layouts/MainLayout';

export default function InvestorRelations() {
    return (
        <MainLayout title="Investor Relations – Biu-g Holdings LLC">
            <div className="mx-auto max-w-4xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Investor Relations
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                        Investor Relations &amp; Capital Partnerships
                    </h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Biu-g Holdings LLC and the CubeShackles ecosystem are built for long-duration capital and
                        institutional partnerships. This page centralizes communication for current and prospective
                        investors across our entities in the United States, Portugal and Angola.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Capital Structure Overview</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 md:p-5">
                        <p>
                            The group is organized around Biu-g Holdings LLC (USA) as the global parent, with
                            participation vehicles and operating companies in Portugal and Angola. CubeShackles, Inc.
                            (Delaware C-Corp) and CubeShackles, S.A. (Angola) represent the core technology and national
                            infrastructure stack, with future IPO pathways on NASDAQ and BODIVA.
                        </p>
                        <p className="text-xs text-zinc-500">
                            Detailed cap tables, term sheets and offering documents are provided directly to qualified
                            investors and institutions upon request and are not fully disclosed on this public website.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Investor Contact Channels</h2>
                    <div className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 md:p-5">
                        <div>
                            <p className="font-semibold text-zinc-900">Primary IR Email</p>
                            <p className="text-zinc-700">
                                Investor Relations: <span className="font-medium">support@biu-gholdings.org</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-zinc-900">Typical Requests</p>
                            <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                                <li>Access to the latest investor deck and dual-IPO materials for CubeShackles.</li>
                                <li>Information on pre-seed, seed and later-stage rounds.</li>
                                <li>Details on Angola-specific vehicles (FGMS, Biu-g Investment Management, etc.).</li>
                                <li>Clarifications on governance, voting structures and regulatory alignment.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Investor Inquiry</h2>
                    <p className="text-sm text-zinc-600">
                        Use the form below to submit a structured investor inquiry. Your team can connect this to a
                        private backend route, CRM or secure data room workflow.
                    </p>
                    <form className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-zinc-700">Name / Institution</label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    placeholder="Fund name or institution"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-zinc-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    placeholder="ir@institution.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-zinc-700">Investor Type</label>
                            <select className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900">
                                <option value="">Select one</option>
                                <option value="vc">Venture Capital</option>
                                <option value="pe">Private Equity</option>
                                <option value="institutional">Institutional / Pension / Sovereign</option>
                                <option value="family_office">Family Office</option>
                                <option value="angel">Angel / Individual</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-zinc-700">Areas of Interest</label>
                            <textarea
                                rows={4}
                                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                placeholder="Example: CubeShackles pre-seed, FGMS Angola funds, National Data Platform, BualaBuitu Terminal, etc."
                            />
                        </div>
                        <div className="pt-2">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-black"
                            >
                                Submit IR Request
                            </button>
                            <p className="mt-2 text-[11px] text-zinc-500">
                                Note: This is a frontend-only form. Your team can implement secure routing, authentication
                                and data room access as required.
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </MainLayout>
    );
}
