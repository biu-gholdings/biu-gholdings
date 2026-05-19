import InvestorInquiryForm from '@/Components/InvestorInquiryForm';
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
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Submit an Investor Inquiry</h2>
                    <InvestorInquiryForm locale="en" />
                </section>
            </div>
        </MainLayout>
    );
}
