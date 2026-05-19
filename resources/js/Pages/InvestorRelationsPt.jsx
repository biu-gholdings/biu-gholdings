import InvestorInquiryForm from '@/Components/InvestorInquiryForm';
import MainLayout from '@/Layouts/MainLayout';

export default function InvestorRelationsPt() {
    return (
        <MainLayout title="Relações com Investidores – Biu-g Holdings LLC">
            <div className="mx-auto max-w-4xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Relações com Investidores
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                        Relações com Investidores &amp; Parcerias Institucionais
                    </h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        A Biu-g Holdings LLC está estruturada para capital de longa duração e parcerias institucionais nos
                        Estados Unidos, Portugal e Angola. Esta página disponibiliza apenas contexto corporativo de alto
                        nível.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Visão Geral da Estrutura de Capital</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 md:p-5">
                        <p>
                            O grupo é organizado em torno da Biu-g Holdings LLC (Estados Unidos) como entidade-mãe global,
                            com veículos de participação e empresas operacionais em Portugal e Angola. As atividades core
                            de tecnologia e infraestrutura nacional são conduzidas através de entidades afiliadas do
                            ecossistema CubeShackles.
                        </p>
                        <p className="text-xs text-zinc-500">
                            Informação financeira, jurídica e transacional detalhada é partilhada com instituições
                            qualificadas através de canais privados apropriados e não é publicada neste website.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Submeter Pedido de Investidor</h2>
                    <InvestorInquiryForm locale="pt" />
                </section>
            </div>
        </MainLayout>
    );
}
