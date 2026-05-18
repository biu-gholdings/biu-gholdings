import MainLayout from '@/Layouts/MainLayout';

export default function Contact() {
    return (
        <MainLayout title="Contact – Biu-g Holdings LLC">
            <div className="mx-auto max-w-3xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Contact Biu-g Holdings LLC</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        For regulatory coordination, institutional partnerships, and corporate inquiries across the
                        United States, Portugal, and Angola, contact the group office using the channel below.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Corporate &amp; Institutional Contact</h2>
                    <article className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 md:p-6">
                        <p className="text-sm leading-relaxed text-zinc-600">
                            Regulators, banks, institutional partners, media, and corporate stakeholders may contact
                            Biu-g Holdings LLC by email. Please include your organization, jurisdiction, and subject of
                            inquiry.
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
                        <div className="border-t border-zinc-100 pt-4 text-sm text-zinc-700">
                            <p className="font-semibold text-zinc-900">Phone</p>
                            <p className="text-zinc-700">
                                Group line: <span className="font-medium">+1 (484) 975-3938</span>
                            </p>
                        </div>
                        <div className="text-sm text-zinc-700">
                            <p className="font-semibold text-zinc-900">Jurisdictions</p>
                            <p className="text-zinc-700">
                                United States (Biu-g Holdings LLC) · Portugal (Biu-g SGPS, FGM Capital) · Angola
                                (CubeShackles, FGMS, Mucho Dinero, and affiliated platforms)
                            </p>
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
