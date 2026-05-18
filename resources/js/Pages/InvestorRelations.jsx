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
                            The group is organized around Biu-g Holdings LLC (United States) as the global parent,
                            with participation vehicles and operating companies in Portugal and Angola. Core technology
                            and national infrastructure activities are conducted through affiliated operating entities
                            in the CubeShackles ecosystem.
                        </p>
                        <p className="text-xs text-zinc-500">
                            Detailed financial, legal, and transaction information is shared with qualified institutions
                            through appropriate private channels and is not published on this website.
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
                                <li>General information about the group’s mission and jurisdictional footprint.</li>
                                <li>Institutional introductions and governance overview requests.</li>
                                <li>Regulatory alignment and corporate structure questions at a high level.</li>
                                <li>Media and partnership inquiries routed to the appropriate team.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Investor Inquiry</h2>
                    <p className="text-sm text-zinc-600">
                        Use the form below to submit a structured inquiry. A member of our team will respond through
                        the appropriate channel.
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
                                placeholder="Example: institutional partnership, corporate overview, governance inquiry, etc."
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
                                This form does not constitute an offer of securities. Nothing on this site is investment
                                advice or a solicitation to invest.
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </MainLayout>
    );
}
