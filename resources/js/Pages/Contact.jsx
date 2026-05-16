import MainLayout from '@/Layouts/MainLayout';

export default function Contact() {
    return (
        <MainLayout title="Contact – Biu-g Holdings LLC">
            <div className="mx-auto max-w-3xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Contact Biu-g Holdings LLC</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        For regulatory coordination, institutional partnerships, capital markets discussions and ecosystem
                        collaboration, use the channels below. Messages are routed to the group office and directed to
                        the appropriate entity or executive.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Group Contact Details</h2>
                    <div className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 md:p-5">
                        <div>
                            <p className="font-semibold text-zinc-900">Email</p>
                            <p className="text-zinc-700">
                                General &amp; Corporate:{' '}
                                <span className="font-medium">support@biu-gholdings.org</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-zinc-900">Phone</p>
                            <p className="text-zinc-700">
                                Group line: <span className="font-medium">+1 (484) 975-3938</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-zinc-900">Jurisdictions</p>
                            <p className="text-zinc-700">
                                United States (Biu-g Holdings LLC) · Portugal (Biu-g SGPS, FGM Capital) · Angola
                                (CubeShackles, FGMS, Mucho Dinero, future subsidiaries)
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Send a Message</h2>
                    <p className="text-sm text-zinc-600">
                        This form is a frontend shell. Your development team can connect it to your preferred backend
                        (Laravel controller, notification pipeline, CRM, etc.).
                    </p>
                    <form className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-zinc-700">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-zinc-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-zinc-700">Topic</label>
                            <select className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900">
                                <option value="">Select one</option>
                                <option value="regulator">Regulator / Public Institution</option>
                                <option value="bank">Bank / Financial Institution</option>
                                <option value="investor">Investor / Capital Partner</option>
                                <option value="partnership">Strategic Partnership</option>
                                <option value="media">Media / Speaking</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-zinc-700">Message</label>
                            <textarea
                                rows={5}
                                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                placeholder="How can we help?"
                            />
                        </div>
                        <div className="pt-2">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-black"
                            >
                                Submit
                            </button>
                            <p className="mt-2 text-[11px] text-zinc-500">
                                Note: This button is not wired to a backend yet. Your technical team can connect it to
                                your preferred submission flow.
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </MainLayout>
    );
}
