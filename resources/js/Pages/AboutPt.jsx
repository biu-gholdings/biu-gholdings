import MainLayout from '@/Layouts/MainLayout';
import { linkAcademyInText } from '@/lib/publicLinks';

export default function AboutPt() {
    return (
        <MainLayout title="Sobre – Biu-g Holdings">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Sobre a Biu-g Holdings</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                        A Construção da Infraestrutura Institucional de África para os Próximos 50 Anos
                    </h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        A Biu-g Holdings é uma plataforma global de holdings criada para arquitetar a próxima geração
                        de infraestrutura financeira, tecnológica e institucional para Angola e África. Operamos entre os
                        Estados Unidos, Portugal e Angola com um único mandato: construir sistemas que sobrevivem a ciclos
                        de mercado e ciclos políticos.
                    </p>
                </header>

                <section className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Missão</h2>
                        <p className="text-xs text-zinc-600">
                            Desenhar, deter e operar plataformas de nível institucional que tornem as economias africanas
                            investíveis, transparentes e interoperáveis — começando por Angola.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Visão</h2>
                        <p className="text-xs text-zinc-600">
                            Um continente onde cidadãos, instituições e governos transacionam em rails modernos,
                            suportados por dados robustos, liquidez e conformidade — sem perder soberania.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <h2 className="text-sm font-semibold text-zinc-900">Mandato</h2>
                        <p className="text-xs text-zinc-600">
                            Construir plataformas de longa duração em finanças, infraestrutura, dados e educação que se
                            compõem ao longo de décadas, e não trimestres, mantendo alinhamento total com reguladores e
                            prioridades nacionais.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">Os Nossos Pilares Operacionais</h2>
                    <p className="text-sm text-zinc-600">
                        A Biu-g Holdings atua através de pilares focados que, em conjunto, formam um ecossistema
                        verticalmente integrado:
                    </p>
                    <div className="space-y-3">
                        <div className="rounded-lg border border-zinc-200 bg-white p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                1. Infraestrutura Financeira &amp; Mercados de Capitais
                            </h3>
                            <p className="mt-1 text-xs text-zinc-600">
                                Através da CubeShackles, da Biu-g Investment Management e do grupo FGMS, desenhamos rails
                                robustos nativos em AOA, infraestrutura de crédito e veículos
                                institucionais orientados para os mercados de capitais e reguladores angolanos.
                            </p>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                2. Economia Real &amp; Plataformas Nacionais
                            </h3>
                            <p className="mt-1 text-xs text-zinc-600">
                                A PraçaNgola, a Plataforma Nacional de Transporte e outras empresas operacionais focam-se
                                em logística, comércio e mobilidade — usando rails modernos para resolver problemas reais
                                do dia a dia de cidadãos e empresas.
                            </p>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                3. Dados, Inteligência &amp; Transparência de Mercado
                            </h3>
                            <p className="mt-1 text-xs text-zinc-600">
                                A National Data Platform e o Terminal BualaBuitu são desenhados para dar a Angola controlo
                                soberano sobre os seus dados económicos, análises e inteligência de decisão — desde
                                mercados informais até ativos listados.
                            </p>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                4. Educação, Talento &amp; Stewardship Fiduciário
                            </h3>
                            <p className="mt-1 text-xs text-zinc-600">
                                {linkAcademyInText(
                                    'A BIU.G Academy e as estruturas fiduciárias do grupo existem para proteger trabalhadores, alinhar executivos e formar a próxima geração de builders e líderes institucionais africanos.',
                                )}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        Governance, Compliance &amp; Alinhamento
                    </h2>
                    <p className="text-sm text-zinc-600">
                        Cada estrutura é desenhada com reguladores e instituições em mente. As nossas entidades
                        distribuem-se entre Delaware, Portugal e Angola para garantir:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                        <li>Residência legal e fiscal clara para cada empresa operacional.</li>
                        <li>Veículos de participação claros na estrutura do grupo Biu-g.</li>
                        <li>
                            Caminhos de conformidade com bancos centrais, reguladores de mercados de capitais e
                            autoridades tributárias.
                        </li>
                        <li>Alinhamento de longo prazo entre capital estrangeiro, interesses nacionais e resultados para os cidadãos.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        Horizonte Temporal &amp; Disciplina Estratégica
                    </h2>
                    <p className="text-sm text-zinc-600">
                        A Biu-g Holdings não otimiza para hype de curto prazo. O nosso mapa estratégico mede-se em décadas
                        — arcos de 15, 29 e 50 anos — em que cada entidade, fundo e plataforma se compõem numa
                        infraestrutura nacional e continental mais forte.
                    </p>
                    <p className="text-sm text-zinc-600">
                        Disciplina antes da escala. Responsabilidade antes da adoção. Transparência antes da tecnologia.
                    </p>
                </section>
            </div>
        </MainLayout>
    );
}
