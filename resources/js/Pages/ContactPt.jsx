import MainLayout from '@/Layouts/MainLayout';

export default function ContactPt() {
    return (
        <MainLayout title="Contacto – Biu-g Holdings LLC">
            <div className="mx-auto max-w-3xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contacto</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Contactar a Biu-g Holdings LLC</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Para coordenação regulatória, parcerias institucionais, temas de mercados de capitais e colaboração
                        no ecossistema, utilize os canais abaixo. As mensagens são encaminhadas para o escritório do
                        grupo e direcionadas à entidade ou executivo adequado.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Detalhes de Contacto do Grupo</h2>
                    <div className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 md:p-5">
                        <div>
                            <p className="font-semibold text-zinc-900">Email</p>
                            <p className="text-zinc-700">
                                Geral &amp; Corporativo: <span className="font-medium">support@biu-gholdings.org</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-zinc-900">Telefone</p>
                            <p className="text-zinc-700">
                                Linha do grupo: <span className="font-medium">+1 (484) 975-3938</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-zinc-900">Jurisdições</p>
                            <p className="text-zinc-700">
                                Estados Unidos (Biu-g Holdings LLC) · Portugal (Biu-g SGPS, FGM Capital) · Angola
                                (CubeShackles, FGMS, Mucho Dinero, futuras subsidiárias)
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Enviar Mensagem</h2>
                    <p className="text-sm text-zinc-600">
                        Envie um pedido geral. A nossa equipa responderá pelo canal adequado.
                    </p>
                    <form className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 md:p-5">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-zinc-700">Nome Completo</label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    placeholder="O seu nome"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-zinc-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    placeholder="voce@exemplo.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-zinc-700">Assunto</label>
                            <select className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900">
                                <option value="">Selecione</option>
                                <option value="regulator">Regulador / Instituição Pública</option>
                                <option value="bank">Banco / Instituição Financeira</option>
                                <option value="investor">Investidor / Parceiro de Capital</option>
                                <option value="partnership">Parceria Estratégica</option>
                                <option value="media">Media / Palestras</option>
                                <option value="other">Outro</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-zinc-700">Mensagem</label>
                            <textarea
                                rows={5}
                                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                placeholder="Como podemos ajudar?"
                            />
                        </div>
                        <div className="pt-2">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-black"
                            >
                                Submeter
                            </button>
                            <p className="mt-2 text-[11px] text-zinc-500">
                                Para pedidos gerais, envie email para{' '}
                                <a href="mailto:support@biu-gholdings.org" className="underline">
                                    support@biu-gholdings.org
                                </a>
                                .
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </MainLayout>
    );
}
