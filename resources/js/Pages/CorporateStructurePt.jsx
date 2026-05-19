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
                        A Biu-g Holdings LLC opera através de uma estrutura multi-camada nos Estados Unidos, Portugal e
                        Angola. Esta página descreve entidades controladas pelo grupo e veículos planeados apenas para
                        transparência pública.
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        O grupo está organizado em clusters estratégicos em tecnologia, finanças, infraestrutura, dados,
                        educação e veículos fiduciários.
                    </p>
                    <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 text-xs leading-relaxed text-zinc-600 md:p-5">
                        <p>
                            As referências a entidades planeadas, plataformas e estruturas operacionais são fornecidas
                            para transparência e podem evoluir consoante condições legais, regulatórias e comerciais. Esta
                            página não implica endosso, propriedade, investimento, parceria ou aprovação por qualquer
                            terceiro ou instituição pública.
                        </p>
                    </div>
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
                            Empresa global de tecnologia e propriedade intelectual do ecossistema CubeShackles. Responsável
                            por investigação de protocolos, arquitetura de software, gestão de marca e futuros quadros de
                            licenciamento.
                        </p>
                    </div>

                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">CubeShackles, S.A. (Angola)</h3>
                        <p className="text-sm text-zinc-600">
                            Sociedade operacional focada em Angola, destinada a localizar a infraestrutura CubeShackles para
                            casos de uso nacionais, alinhamento regulatório e futuras parcerias institucionais, sujeitas às
                            aprovações aplicáveis.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">National Data Platform</h3>
                            <p className="text-xs font-medium text-zinc-500">Plataforma dentro da CubeShackles, S.A.</p>
                            <p className="text-[11px] text-zinc-500">Produto (Spin-out Opcional)</p>
                            <p className="text-sm text-zinc-600">
                                Plataforma de dados económicos e sociais — inflação, desemprego, mercados informais, índices
                                de preços e métricas de acesso.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Kulifikila</h3>
                            <p className="text-xs font-medium text-zinc-500">Plataforma dentro da CubeShackles, S.A.</p>
                            <p className="text-[11px] text-zinc-500">Produto (Spin-out Opcional)</p>
                            <p className="text-sm text-zinc-600">
                                Plataforma de inteligência de crédito para sectores formal e informal, com scoring
                                multi-camada em AOA e inteligência de risco.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Angola National Transit Platform</h3>
                            <p className="text-xs font-medium text-zinc-500">Plataforma dentro da CubeShackles, S.A.</p>
                            <p className="text-[11px] text-zinc-500">Produto (Spin-out Opcional)</p>
                            <p className="text-sm text-zinc-600">
                                Aplicação nacional de mobilidade para motoristas e passageiros, com rails de pagamento e
                                fiscais integrados.
                            </p>
                        </div>
                        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">PraçaNgola</h3>
                            <p className="text-xs font-medium text-zinc-500">Plataforma dentro da CubeShackles, S.A.</p>
                            <p className="text-[11px] text-zinc-500">Produto (Spin-out Opcional)</p>
                            <p className="text-sm text-zinc-600">
                                Plataforma nacional de e-commerce e logística para Angola e escala regional.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">BualaBuitu Terminal</h3>
                        <p className="text-xs font-medium text-zinc-500">Plataforma dentro da CubeShackles, S.A.</p>
                        <p className="text-[11px] text-zinc-500">Produto (Spin-out Opcional)</p>
                        <p className="text-sm text-zinc-600">
                            Terminal de inteligência de mercado financeiro para dados em tempo real, análises e
                            infraestrutura de mercado.
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
                                O capital é detido através de veículos de participação Biu-g em Portugal e Angola.
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
                        <h3 className="text-lg font-semibold text-zinc-900">Fundo Fiduciário Estratégico (Angola) — Planeado</h3>
                        <p className="text-sm text-zinc-600">
                            Estrutura fiduciária interna planead para continuidade, alinhamento de stakeholders e interesses
                            denominados em AOA em nome da Biu-g Holdings no grupo.
                        </p>
                        <p className="text-sm text-zinc-600">
                            A representação é exercida através da{' '}
                            <span className="font-medium">Sociedade de Participações BIU-G, Lda. (Angola)</span>.
                        </p>
                    </div>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">Sango Trust</h3>
                        <p className="text-sm text-zinc-600">
                            Estrutura fiduciária privada de gestão patrimonial de longo prazo, que apoia governance
                            intergeracional, planeamento sucessório e preservação estratégica de capital no ecossistema
                            Biu-g Holdings.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">7. Educação &amp; Capacitação Nacional</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-zinc-900">BIU.G Academy</h3>
                        <p className="text-sm text-zinc-600">
                            A BIU.G Academy é uma iniciativa ativa de educação e capacitação, focada em tecnologia,
                            literacia financeira, infraestrutura digital e desenvolvimento de talento nativo em IA em Angola
                            e África.
                        </p>
                        <p className="text-sm text-zinc-600">
                            A iniciativa apoia o desenvolvimento de longo prazo do ecossistema através de investigação,
                            formação, educação técnica e programas de aprendizagem liderados pela comunidade, alinhados com a
                            missão mais ampla da Biu-g Holdings.
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
                            Carteira Nacional de Angola (sistema nacional planead na estrutura do grupo CubeShackles)
                        </li>
                        <li>BualaBuitu Terminal (plataforma dentro da CubeShackles, S.A.)</li>
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
                                    National Data Platform, Kulifikila, PraçaNgola, Angola National Transit Platform,
                                    BualaBuitu Terminal (plataformas dentro da CubeShackles, S.A.); 1975 Nzila, FGMS
                                    &amp; Co, FGM &amp; Co (planeados)
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                            <h3 className="mb-2 text-sm font-semibold text-zinc-900">3. Trust &amp; Educação</h3>
                            <ul className="list-inside list-disc space-y-1 text-xs text-zinc-600">
                                <li>Fundo Fiduciário Estratégico (Angola)</li>
                                <li>Sango Trust</li>
                                <li>BIU.G Academy</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
