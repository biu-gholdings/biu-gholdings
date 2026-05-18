import MainLayout from '@/Layouts/MainLayout';

export default function CorporateStructurePt() {
    return (
        <MainLayout title="Estrutura Corporativa – Biu-g Holdings LLC">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Biu-g Holdings LLC
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Estrutura Corporativa</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        A Biu-g Holdings LLC opera através de uma estrutura soberana e multi-camada que abrange os
                        Estados Unidos, Portugal e Angola. Esta arquitetura garante clareza regulatória, eficiência de
                        capital transfronteiriça, proteção de propriedade intelectual e alinhamento de longo prazo com
                        instituições nacionais e mercados africanos.
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        O Grupo está organizado em oito clusters estratégicos, cada um com um mandato específico em
                        tecnologia, finanças, infraestrutura, dados, educação e veículos fiduciários.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">1. Controladora de Topo – Estados Unidos</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Biu-g Holdings LLC (EUA)</h3>
                        <p className="text-sm text-zinc-600">
                            Entidade-mãe global. Detém toda a propriedade intelectual, marcas e participações globais —
                            diretamente e através das estruturas SGPS/participações. Funciona como o guarda-chuva de
                            capital para todas as operações internacionais e baseadas em Angola.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">2. Veículos de Participações e Holdings</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Biu-g SGPS, Lda. (Portugal)</h3>
                            <p className="text-sm text-zinc-600">
                                Holding SGPS portuguesa. Atua como veículo de participação europeia e estrutura de
                                diversificação.
                            </p>
                            <p className="text-sm text-zinc-600">
                                <span className="font-medium">Papel acionista:</span> detém participação direta na{' '}
                                <span className="font-medium">CubeShackles, Inc. (EUA)</span> e exposição indireta à{' '}
                                <span className="font-medium">CubeShackles, S.A. (Angola)</span>.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Biu-g SGPS, Lda. (Angola)</h3>
                            <p className="text-sm text-zinc-600">
                                SGPS angolana que garante controlo nativo em Kwanza (AOA) e alinhamento com reguladores e
                                instituições nacionais.
                            </p>
                            <p className="text-sm text-zinc-600">
                                <span className="font-medium">Papel acionista:</span> participação em estruturas de
                                holding europeias e interesses diretos em empresas operacionais angolanas.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        3. Grupo CubeShackles — Tecnologia Core &amp; Infraestrutura Nacional
                    </h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">CubeShackles, Inc. (Delaware C-Corp, EUA)</h3>
                        <p className="text-sm text-zinc-600">
                            Empresa global de tecnologia e propriedade intelectual. Detém o motor SmartShackles, o protocolo
                            DAG, o ecossistema de developers e o licenciamento global.
                        </p>
                        <p className="text-sm text-zinc-600">
                            O capital está distribuído entre fundadores, parceiros institucionais e capital de longo
                            prazo alinhado com o mandato tecnológico do grupo.
                        </p>
                    </div>

                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">CubeShackles, S.A. (Angola)</h3>
                        <p className="text-sm text-zinc-600">
                            Sociedade anónima angolana que opera o ecossistema CubeShackles no território nacional.
                        </p>
                        <p className="text-sm text-zinc-600">
                            A estrutura acionista inclui a entidade-mãe tecnológica global, parceiros estratégicos
                            nacionais, investidores institucionais e mecanismos de participação de colaboradores.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">
                                National Data Platform (Plataforma dentro da CubeShackles, S.A.)
                            </h3>
                            <p className="text-sm text-zinc-600">
                                Plataforma de dados económicos e sociais de nível soberano — inflação, desemprego, mercados
                                informais e índices de preços — operada dentro da CubeShackles, S.A.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">
                                Kulifikila Credit Bureau (Plataforma dentro da CubeShackles, S.A.)
                            </h3>
                            <p className="text-sm text-zinc-600">
                                Infraestrutura de crédito para sectores formal e informal, com scoring multi-camada em AOA,
                                operada dentro da CubeShackles, S.A.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">
                                Plataforma Nacional de Transporte de Angola (Plataforma dentro da CubeShackles, S.A.)
                            </h3>
                            <p className="text-sm text-zinc-600">
                                Aplicação nacional de mobilidade (motoristas e passageiros), integrada com e-Kwanza, stable
                                AOA e Token Nacional, operada dentro da CubeShackles, S.A.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">
                                PraçaNgola (Plataforma dentro da CubeShackles, S.A.)
                            </h3>
                            <p className="text-sm text-zinc-600">
                                Infraestrutura nacional de e-commerce operada dentro da CubeShackles, S.A., com pagamentos
                                na stack CubeShackles (e-Kwanza, stable AOA, Token Nacional).
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Plataforma BualaBuitu</h3>
                        <p className="text-sm text-zinc-600">
                            Terminal financeiro de Angola, equivalente a um “Bloomberg local”. Neste momento é um produto
                            dentro da CubeShackles, S.A., com possibilidade futura de spin-off para entidade jurídica
                            própria.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">4. Grupo FGM / FGMS — Investimento &amp; Finanças</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">FGM Capital, Lda. (Portugal)</h3>
                            <p className="text-sm text-zinc-600">
                                Entidade original de trading e capital. Suporta a estratégia de mercados financeiros e
                                operações iniciais do grupo.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Grupo FGMS &amp; Associados, Lda. (Angola)</h3>
                            <p className="text-sm text-zinc-600">
                                Plataforma financeira integrada para Angola, com mandatos institucionais multi-estratégia e
                                capacidade para operações de escala nacional.
                            </p>
                            <p className="text-sm text-zinc-600">
                                O capital é detido através de veículos de participação em Portugal e Angola, colaboradores,
                                parceiros locais e co-investidores institucionais.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Biu-g Investment Management, Lda. (Angola)</h3>
                            <p className="text-sm text-zinc-600">
                                Veículo de gestão de ativos denominado em AOA, focado na economia angolana e na gestão de
                                risco institucional, sob a regulamentação local aplicável.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">1975 Nzila, Lda. (Angola) — Planeada</h3>
                            <p className="text-sm text-zinc-600">
                                Veículo local de VC/PE e braço de hospitalidade/experiência de marca, ligado economicamente
                                ao cluster FGMS e Biu-g Investment Management.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">FGMS &amp; Co. — Planeada</h3>
                            <p className="text-sm text-zinc-600">
                                Veículo focado em operações imobiliárias em Angola e Portugal, alinhado com o grupo FGMS e as
                                holdings.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">FGM &amp; Co. — Planeada</h3>
                            <p className="text-sm text-zinc-600">
                                SPV para coinvestimento, advisory e estruturação financeira em operações estratégicas.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">5. Grupo Mucho Dinero — Media &amp; Talento Tecnológico</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Mucho Dinero Tecnologia, Lda. (Angola)</h3>
                            <p className="text-sm text-zinc-600">
                                Inovação e desenvolvimento nacional de talento. Suporta CubeShackles, Carteira Nacional,
                                PraçaNgola e sistemas de transporte nacionais.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Mucho Dinero Produção, Lda. (Angola)</h3>
                            <p className="text-sm text-zinc-600">
                                Media, campanhas e produção publicitária para todas as marcas do ecossistema e iniciativas
                                de comunicação à escala nacional.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">6. Trusts &amp; Veículos Fiduciários</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Fundo Fiduciário Estratégico (Angola)</h3>
                        <p className="text-sm text-zinc-600">
                            Fundo fiduciário de nível soberano criado para proteger subsidiárias angolanas, executivos e
                            colaboradores, e deter interesses denominados em AOA em nome da Biu-g Holdings.
                        </p>
                        <p className="text-sm text-zinc-600">
                            A representação é exercida através da{' '}
                            <span className="font-medium">Sociedade de Participações BIU-G, Lda. (Angola)</span>.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Sango Trust — Planeado</h3>
                        <p className="text-sm text-zinc-600">
                            Veículo de riqueza de longo prazo, proteção patrimonial e sucessória, alinhado com a estrutura
                            multi-jurisdicional da Biu-g Holdings.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">7. Educação &amp; Capacitação Nacional</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">BIU.G Academy — Sem Fins Lucrativos</h3>
                        <p className="text-sm text-zinc-600">
                            Espinha dorsal educacional do ecossistema. Apoia CubeShackles, Carteira Nacional, Anglocoin e
                            literacia financeira em todo o país.
                        </p>
                        <p className="text-sm text-zinc-600">
                            Posicionada estrategicamente sob <span className="font-medium">CubeShackles Global</span>, com
                            controlo de marca e missão alinhados com a Biu-g Holdings LLC.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
                        8. Produtos Adicionais &amp; Futuras Entidades Jurídicas
                    </h2>
                    <p className="text-sm text-zinc-600">
                        As plataformas abaixo operam hoje como produtos ou iniciativas internas e podem ser convertidas em
                        SPVs à medida que o ecossistema escala:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                        <li>Biu-g Care (seguros)</li>
                        <li>CubeBank (banco digital)</li>
                        <li>CubePay (gateway de pagamentos)</li>
                        <li>CubeDex / CubeBourse (camada DEX e bolsa)</li>
                        <li>CubeCloud / CubeQuantum (computação e infraestrutura)</li>
                        <li>
                            Carteira Nacional de Angola (sistema nacional regulado sob CubeShackles, S.A. e parceiros
                            bancários)
                        </li>
                        <li>Terminal BualaBuitu (produto dentro da CubeShackles, S.A.)</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">Vista Agregada — Como o Grupo Se Organiza</h2>
                    <p className="text-sm text-zinc-600">
                        A alto nível, a Biu-g Holdings LLC exerce controlo e direção estratégica através de três pilares:
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="mb-2 text-sm font-semibold text-zinc-900">1. Holdings (SPVs &amp; SGPS)</h3>
                            <ul className="list-inside list-disc space-y-1 text-xs text-zinc-600">
                                <li>Biu-g Holdings LLC (EUA)</li>
                                <li>Biu-g SGPS (Portugal &amp; Angola)</li>
                                <li>Sociedade de Participações BIU-G (Portugal &amp; Angola)</li>
                            </ul>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="mb-2 text-sm font-semibold text-zinc-900">2. Plataformas Operacionais</h3>
                            <ul className="list-inside list-disc space-y-1 text-xs text-zinc-600">
                                <li>CubeShackles, Inc. (EUA)</li>
                                <li>CubeShackles, S.A. (Angola)</li>
                                <li>FGM Capital, Lda. (Portugal)</li>
                                <li>Grupo FGMS &amp; Associados, Lda. (Angola)</li>
                                <li>Biu-g Investment Management, Lda. (Angola)</li>
                                <li>Mucho Dinero Tecnologia &amp; Produção (Angola)</li>
                                <li>
                                    National Data Platform, Kulifikila, PraçaNgola, Plataforma Nacional de Transporte
                                    (plataformas dentro da CubeShackles, S.A.); 1975 Nzila, FGMS &amp; Co, FGM &amp; Co
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="mb-2 text-sm font-semibold text-zinc-900">3. Trust &amp; Sem Fins Lucrativos</h3>
                            <ul className="list-inside list-disc space-y-1 text-xs text-zinc-600">
                                <li>Fundo Fiduciário Estratégico (Angola)</li>
                                <li>Sango Trust (planeado)</li>
                                <li>BIU.G Academy (sob CubeShackles Global)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
