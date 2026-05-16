import MainLayout from '@/Layouts/MainLayout';

export default function HomePt() {
    return (
        <MainLayout title="Biu-g Holdings LLC – Página Inicial">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <section className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Biu-g Holdings LLC
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                        A Engenharia da Nova Infraestrutura Corporativa de África
                    </h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        A Biu-g Holdings LLC é uma plataforma global de holdings focada em construir infraestrutura
                        financeira, tecnológica e institucional de nível soberano para Angola e África.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Infraestrutura de Nível Soberano</h2>
                        <p className="text-xs text-zinc-600">
                            CubeShackles, Carteira Nacional e rails financeiros nativos em AOA, desenhados para
                            reguladores, instituições e cidadãos.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Alinhamento Institucional</h2>
                        <p className="text-xs text-zinc-600">
                            Construído em parceria com bancos, operadoras de telecomunicações, reguladores e capital de
                            longo prazo.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Ecossistema Multi-Vertical</h2>
                        <p className="text-xs text-zinc-600">
                            De dados e transporte a mercados de capitais e educação, o grupo opera uma stack vertical
                            completa para Angola e além.
                        </p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
