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
                    'Empresa global de tecnologia e propriedade intelectual do ecossistema CubeShackles. Responsável por investigação de protocolos, arquitetura de software, gestão de marca e futuros quadros de licenciamento.',
            },
            {
                name: 'CubeShackles, S.A. (Angola)',
                type: 'Operadora Nacional',
                status: 'Planeado / Em Estruturação',
                description:
                    'Sociedade operacional focada em Angola, destinada a localizar a infraestrutura CubeShackles para casos de uso nacionais, alinhamento regulatório e futuras parcerias institucionais, sujeitas às aprovações aplicáveis.',
            },
            {
                name: 'National Data Platform, Lda. (Angola)',
                type: 'Plataforma de Dados',
                status: 'Planeado',
                description:
                    'Entidade planead para dados económicos e sociais — inflação, desemprego, mercados informais, índices de preços e métricas de acesso.',
            },
            {
                name: 'Kulifikila Credit Bureau, Lda. (Angola)',
                type: 'Infraestrutura de Crédito',
                status: 'Planeado',
                description:
                    'Infraestrutura de crédito planead para sectores formal e informal, com scoring multi-camada em AOA.',
            },
            {
                name: 'Plataforma Nacional de Transporte de Angola',
                type: 'Mobilidade & Transporte',
                status: 'Planeado',
                description:
                    'Aplicação nacional de transporte planead (motoristas e passageiros), com rails de pagamento e fiscais em desenvolvimento no grupo.',
            },
            {
                name: 'PraçaNgola, Lda. (Angola)',
                type: 'Infraestrutura de E-commerce',
                status: 'Planeado',
                description:
                    'Infraestrutura nacional de e-commerce e logística planead na estrutura do grupo CubeShackles.',
            },
            {
                name: 'Terminal BualaBuitu',
                type: 'Plataforma / Produto',
                status: 'Em Desenvolvimento',
                description:
                    'Terminal de inteligência de mercado financeiro desenvolvido como produto de plataforma no grupo CubeShackles.',
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
                    'Entidade de trading e capital do grupo na estrutura de holdings Biu-g.',
            },
            {
                name: 'Grupo FGMS & Associados, Lda. (Angola)',
                type: 'Plataforma Financeira Integrada',
                status: 'Ativo',
                description:
                    'Plataforma financeira integrada para Angola na estrutura do grupo Biu-g.',
            },
            {
                name: 'Biu-g Investment Management, Lda. (Angola)',
                type: 'Gestão de Ativos',
                status: 'Planeado',
                description:
                    'Veículo de gestão de ativos denominado em AOA planead, sujeito à regulamentação local aplicável.',
            },
            {
                name: '1975 Nzila, Lda. (Angola)',
                type: 'VC / PE & Experiências',
                status: 'Planeado',
                description:
                    'Veículo de investimento e experiência de marca planead no ecossistema Biu-g Holdings.',
            },
            {
                name: 'FGMS & Co.',
                type: 'Operações Imobiliárias',
                status: 'Planeado',
                description:
                    'Braço operacional imobiliário planead para Angola e Portugal na estrutura do grupo.',
            },
            {
                name: 'FGM & Co.',
                type: 'SPV de Estruturação',
                status: 'Planeado',
                description:
                    'Veículo planead de estruturação financeira e coinvestimento para operações do grupo.',
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
                    'Subsidiária tecnológica focada em inovação e desenvolvimento de talento nacional no grupo.',
            },
            {
                name: 'Mucho Dinero Produção, Lda. (Angola)',
                type: 'Media & Produção',
                status: 'Ativo',
                description:
                    'Empresa de media e produção para marcas do grupo e iniciativas de comunicação nacional.',
            },
        ],
    },
    {
        title: 'Fiduciário & Educação',
        items: [
            {
                name: 'Fundo Fiduciário Estratégico (Angola)',
                type: 'Veículo Fiduciário',
                status: 'Planeado',
                description:
                    'Estrutura fiduciária interna planead para continuidade e alinhamento no grupo Biu-g.',
            },
            {
                name: 'Sango Trust',
                type: 'Veículo de Trust',
                status: 'Planeado',
                description:
                    'Veículo planead de riqueza de longo prazo e sucessão na estrutura multi-jurisdicional.',
            },
            {
                name: 'BIU.G Academy (Sem fins lucrativos)',
                type: 'Educação & Capacitação',
                status: 'Em Estruturação',
                description:
                    'Espinha dorsal educacional do ecossistema para literacia financeira e formação técnica.',
            },
        ],
    },
];

export default function SubsidiariesPt() {
    return (
        <MainLayout title="Subsidiárias & Portefólio – Biu-g Holdings LLC">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Portefólio</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Subsidiárias &amp; Empresas do Portefólio</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        A Biu-g Holdings LLC opera um portefólio multi-entidade em tecnologia, finanças, dados, mobilidade,
                        e-commerce, media e educação. As entidades listadas são controladas pelo grupo ou veículos internos
                        planeados.
                    </p>
                    <p className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 text-xs leading-relaxed text-zinc-600">
                        As referências a entidades planeadas podem evoluir consoante condições legais e regulatórias. Esta
                        página não implica endosso, propriedade, investimento, parceria ou aprovação por qualquer terceiro ou
                        instituição pública.
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
