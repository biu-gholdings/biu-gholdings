import MainLayout from '@/Layouts/MainLayout';

const clusters = [
    {
        title: 'Grupo CubeShackles – Tecnologia Core & Infraestrutura',
        items: [
            {
                name: 'CubeShackles, Inc. (Delaware C-Corp, EUA)',
                type: 'Tecnologia / Propriedade Intelectual',
                status: 'Ativo',
                description:
                    'Empresa global de tecnologia e propriedade intelectual do ecossistema CubeShackles. Detém o motor SmartShackles, o protocolo DAG, a stack de developers e o modelo de licenciamento, além de participação na CubeShackles, S.A. (Angola).',
            },
            {
                name: 'CubeShackles, S.A. (Angola)',
                type: 'Operadora Nacional',
                status: 'Ativo',
                description:
                    'Sociedade anónima angolana responsável pela operação dos rails CubeShackles em Angola. Faz interface com reguladores, bancos, operadoras de telecomunicações e instituições para correr infraestrutura financeira nativa em AOA.',
            },
            {
                name: 'National Data Platform (Plataforma dentro da CubeShackles, S.A.)',
                type: 'Plataforma de Dados',
                status: 'Em Desenvolvimento',
                description:
                    'Plataforma de dados económicos e sociais de nível soberano — inflação, desemprego, mercados informais, índices de preços e métricas de acesso — operada dentro da CubeShackles, S.A.',
            },
            {
                name: 'Kulifikila Credit Bureau (Plataforma dentro da CubeShackles, S.A.)',
                type: 'Infraestrutura de Crédito',
                status: 'Em Desenvolvimento',
                description:
                    'Infraestrutura de crédito para sectores formal e informal, com scoring multi-camada em AOA para bancos, fintechs e governo.',
            },
            {
                name: 'Plataforma Nacional de Transporte de Angola (Plataforma dentro da CubeShackles, S.A.)',
                type: 'Mobilidade & Transporte',
                status: 'Em Desenvolvimento',
                description:
                    'Aplicação nacional de transporte (motoristas e passageiros), integrada com e-Kwanza, stable AOA e Token Nacional para pagamentos e impostos.',
            },
            {
                name: 'PraçaNgola (Plataforma dentro da CubeShackles, S.A.)',
                type: 'Infraestrutura de E-commerce',
                status: 'Em Desenvolvimento',
                description:
                    'Plataforma nacional de e-commerce e logística operada dentro da CubeShackles, S.A., suportada pelos rails de pagamentos CubeShackles.',
            },
            {
                name: 'Terminal BualaBuitu (Plataforma dentro da CubeShackles, S.A.)',
                type: 'Plataforma de Inteligência de Mercado',
                status: 'Produto (Spin-off Opcional)',
                description:
                    'Terminal financeiro de Angola, equivalente a um Bloomberg local, com dados em tempo real, análises e infraestrutura de mercado. Neste momento, está estruturado como produto da CubeShackles, S.A., com possibilidade de spin-off futuro.',
            },
        ],
    },
    {
        title: 'Cluster FGM / FGMS & Investimento',
        items: [
            {
                name: 'FGM Capital, Lda. (Portugal)',
                type: 'Trading & Capital',
                status: 'Ativo',
                description:
                    'Entidade original de trading e capital do grupo. Suporta exposição a mercados de capitais, trading proprietário e estruturação inicial de operações.',
            },
            {
                name: 'Grupo FGMS & Associados, Lda. (Angola)',
                type: 'Plataforma Financeira Integrada',
                status: 'Ativo',
                description:
                    'Plataforma financeira integrada para Angola, com mandatos institucionais multi-estratégia e capacidade para operações de escala nacional.',
            },
            {
                name: 'Biu-g Investment Management, Lda. (Angola)',
                type: 'Gestão de Ativos',
                status: 'Planeado / Em Estruturação',
                description:
                    'Veículo de gestão de ativos denominado em AOA, focado na economia angolana e na gestão de risco institucional, sob a regulamentação local aplicável.',
            },
            {
                name: '1975 Nzila, Lda. (Angola)',
                type: 'VC / PE & Experiências',
                status: 'Planeado',
                description:
                    'Veículo local de VC/PE e braço de hospitalidade/experiência de marca, focado em participações estratégicas, projetos de economia real e experiências ligadas ao ecossistema Biu-g.',
            },
            {
                name: 'FGMS & Co.',
                type: 'Operações Imobiliárias',
                status: 'Planeado',
                description:
                    'Braço operacional imobiliário para Angola e Portugal, alinhado com o Grupo FGMS & Associados e a estrutura de holdings.',
            },
            {
                name: 'FGM & Co.',
                type: 'SPV de Advisory & Co-investimento',
                status: 'Planeado',
                description:
                    'Veículo de estruturação financeira e co-investimento utilizado para operações específicas e sindicações estratégicas com parceiros institucionais.',
            },
        ],
    },
    {
        title: 'Grupo Mucho Dinero – Media & Talento Tecnológico',
        items: [
            {
                name: 'Mucho Dinero Tecnologia, Lda. (Angola)',
                type: 'Tecnologia & Inovação',
                status: 'Ativo',
                description:
                    'Subsidiária tecnológica focada em inovação e desenvolvimento de talento nacional. Suporta CubeShackles, Angola National Wallet, PraçaNgola e plataformas de transporte.',
            },
            {
                name: 'Mucho Dinero Produção, Lda. (Angola)',
                type: 'Media & Produção',
                status: 'Ativo',
                description:
                    'Empresa de media e produção responsável por campanhas, conteúdos e comunicação nacional para CubeShackles, Angola National Wallet, PraçaNgola e outras marcas do ecossistema.',
            },
        ],
    },
    {
        title: 'Educação & Impacto',
        items: [
            {
                name: 'BIU.G Academy (Entidade Sem Fins Lucrativos)',
                type: 'Educação & Capacitação',
                status: 'Em Estruturação',
                description:
                    'Backbone educacional do ecossistema. Entrega programas de literacia financeira, formação técnica e onboarding para CubeShackles, Anglocoin, Angola National Wallet e sistemas associados.',
            },
        ],
    },
];

export default function SubsidiariesPt() {
    return (
        <MainLayout title="Subsidiárias & Portfólio – Biu-g Holdings LLC">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Portfólio</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Subsidiárias &amp; Empresas do Grupo</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        A Biu-g Holdings LLC opera um portfólio multi-entidade e multi-jurisdição em tecnologia, finanças,
                        dados, mobilidade, e-commerce, media e educação. Cada subsidiária é estruturada para alinhar-se
                        com reguladores, proteger stakeholders locais e compor valor de longo prazo para o grupo.
                    </p>
                </header>

                {clusters.map((cluster) => (
                    <section key={cluster.title} className="space-y-4">
                        <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">{cluster.title}</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {cluster.items.map((item) => (
                                <article
                                    key={item.name}
                                    className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-4 md:p-5"
                                >
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-semibold text-zinc-900">{item.name}</h3>
                                        <p className="text-[11px] font-medium text-zinc-700">{item.type}</p>
                                        <p className="text-[11px] text-zinc-500">
                                            Estado: <span className="font-medium">{item.status}</span>
                                        </p>
                                    </div>
                                    <p className="mt-3 text-xs leading-relaxed text-zinc-600">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </MainLayout>
    );
}
