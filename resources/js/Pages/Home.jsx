import MainLayout from '@/Layouts/MainLayout';

export default function Home() {
    return (
        <MainLayout title="Biu-g Holdings LLC – Corporate Home">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <section className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Biu-g Holdings LLC
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                        Engineering Africa’s Modern Corporate Infrastructure
                    </h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Biu-g Holdings LLC is a global holdings platform focused on building durable financial,
                        technological and institutional infrastructure for Angola and Africa.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">National Infrastructure</h2>
                        <p className="text-xs text-zinc-600">
                            CubeShackles, planned national wallet systems, and AOA-native financial rails under group
                            development.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Regulatory Discipline</h2>
                        <p className="text-xs text-zinc-600">
                            Structured for jurisdictional clarity, regulatory alignment, and long-term institutional
                            discipline.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Multi-Vertical Ecosystem</h2>
                        <p className="text-xs text-zinc-600">
                            From data and transit to capital markets and education, the group operates a full vertical
                            stack for Angola and beyond.
                        </p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
