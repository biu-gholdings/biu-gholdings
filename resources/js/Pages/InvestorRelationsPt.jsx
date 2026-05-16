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
                        Relações com Investidores &amp; Parcerias de Capital
                    </h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        A Biu-g Holdings LLC e o ecossistema CubeShackles são desenhados para capital de longa duração e
                        parcerias institucionais. Esta página centraliza a comunicação com investidores atuais e
                        potenciais nas nossas entidades nos Estados Unidos, Portugal e Angola.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Visão Geral da Estrutura de Capital</h2>
                    <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 md:p-5">
                        <p>
                            O grupo é organizado em torno da Biu-g Holdings LLC (EUA) como entidade-mãe global, com
                            veículos de participações e empresas operacionais em Portugal e Angola. A CubeShackles, Inc.
                            (Delaware C-Corp) e a CubeShackles, S.A. (Angola) representam a camada core de tecnologia e
                            infraestrutura nacional, com futuros caminhos de IPO na NASDAQ e na BODIVA.
                        </p>
                        <p className="text-xs text-zinc-500">
                            Cap tables detalhadas, term sheets e documentos de oferta são disponibilizados diretamente a
                            investidores qualificados e instituições mediante pedido e não são divulgados integralmente
                            neste website público.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Canais de Contacto para Investidores</h2>
                    <div className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 md:p-5">
                        <div>
                            <p className="font-semibold text-zinc-900">Email IR Principal</p>
                            <p className="text-zinc-700">
                                Relações com Investidores:{' '}
                                <span className="font-medium">support@biu-gholdings.org</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-zinc-900">Pedidos Típicos</p>
                            <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                                <li>Acesso à apresentação mais recente e materiais de dual-IPO da CubeShackles.</li>
                                <li>Informação sobre rondas pre-seed, seed e fases posteriores.</li>
                                <li>Detalhes sobre veículos específicos de Angola (FGMS, Biu-g Investment Management, etc.).</li>
                                <li>Esclarecimentos sobre governance, estruturas de voto e alinhamento regulatório.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Pedido de Informação para Investidores</h2>
                    <p className="text-sm text-zinc-600">
                        Utilize o formulário abaixo para enviar um pedido estruturado de informação. A sua equipa pode
                        ligá-lo a uma rota backend privada, CRM ou fluxo de acesso a data room.
                    </p>
                    <form className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-zinc-700">Nome / Instituição</label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    placeholder="Nome do fundo ou instituição"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-zinc-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    placeholder="ir@instituicao.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-zinc-700">Tipo de Investidor</label>
                            <select className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900">
                                <option value="">Selecione</option>
                                <option value="vc">Venture Capital</option>
                                <option value="pe">Private Equity</option>
                                <option value="institutional">Institucional / Pensão / Soberano</option>
                                <option value="family_office">Family Office</option>
                                <option value="angel">Angel / Individual</option>
                                <option value="other">Outro</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-zinc-700">Áreas de Interesse</label>
                            <textarea
                                rows={4}
                                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                placeholder="Ex.: pre-seed CubeShackles, fundos FGMS em Angola, National Data Platform, Terminal BualaBuitu, etc."
                            />
                        </div>
                        <div className="pt-2">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-black"
                            >
                                Enviar Pedido IR
                            </button>
                            <p className="mt-2 text-[11px] text-zinc-500">
                                Nota: Este formulário é apenas frontend. A sua equipa pode implementar routing seguro,
                                autenticação e acesso a data room conforme necessário.
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </MainLayout>
    );
}
