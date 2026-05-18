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
                        Investor Relations &amp; Institutional Partnerships
                    </h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Biu-g Holdings LLC is structured for long-duration capital and institutional partnerships across
                        the United States, Portugal, and Angola. This page provides high-level corporate context only.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Capital Structure Overview</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 md:p-5">
                        <p>
                            The group is organized around Biu-g Holdings LLC (United States) as the global parent, with
                            participation vehicles and operating companies in Portugal and Angola. Core technology and
                            national infrastructure activities are conducted through affiliated entities in the CubeShackles
                            ecosystem.
                        </p>
                        <p className="text-xs text-zinc-500">
                            Detailed financial, legal, and transaction information is shared with qualified institutions
                            through appropriate private channels and is not published on this website.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">
                        Investor &amp; Institutional Contact
                    </h2>
                    <article className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 md:p-6">
                        <p className="text-sm leading-relaxed text-zinc-600">
                            Institutional investors, banks, strategic partners, regulators, and sovereign entities may
                            contact Biu-g Holdings LLC through the address below. Please include your institution,
                            jurisdiction, and area of interest.
                        </p>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Email</p>
                            <a
                                href="mailto:support@biu-gholdings.org"
                                className="mt-1 inline-block text-sm font-medium text-zinc-900 underline"
                            >
                                support@biu-gholdings.org
                            </a>
                        </div>
                        <p className="border-t border-zinc-100 pt-4 text-[11px] leading-relaxed text-zinc-500">
                            This website does not constitute an offer to sell, solicitation to buy, or recommendation
                            regarding any securities, tokens, funds, or investment products.
                        </p>
                    </article>
                </section>
            </div>
        </MainLayout>
    );
}
