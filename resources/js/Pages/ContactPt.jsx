import MainLayout from '@/Layouts/MainLayout';

export default function ContactPt() {
    return (
        <MainLayout title="Contacto – Biu-g Holdings LLC">
            <div className="mx-auto max-w-3xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contacto</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Contactar a Biu-g Holdings LLC</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Para coordenação regulatória, parcerias institucionais e pedidos corporativos nos Estados Unidos,
                        Portugal e Angola, contacte o escritório do grupo através do canal abaixo.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Contacto Corporativo &amp; Institucional</h2>
                    <article className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 md:p-6">
                        <p className="text-sm leading-relaxed text-zinc-600">
                            Reguladores, bancos, parceiros institucionais, media e stakeholders corporativos podem
                            contactar a Biu-g Holdings LLC por email. Inclua a sua organização, jurisdição e assunto do
                            pedido.
                        </p>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Email</p>
                            <a
                                href="mailto:support@biu-gholdings.org"
                                className="mt-1 inline-block text-sm font-medium text-zinc-900 underline"
                            >
                                support@biu-gholdings.org
                            </a>
                        </div>
                        <div className="border-t border-zinc-100 pt-4 text-sm text-zinc-700">
                            <p className="font-semibold text-zinc-900">Telefone</p>
                            <p className="text-zinc-700">
                                Linha do grupo: <span className="font-medium">+1 (484) 975-3938</span>
                            </p>
                        </div>
                        <div className="text-sm text-zinc-700">
                            <p className="font-semibold text-zinc-900">Jurisdições</p>
                            <p className="text-zinc-700">
                                Estados Unidos (Biu-g Holdings LLC) · Portugal (Biu-g SGPS, FGM Capital) · Angola
                                (CubeShackles, FGMS, Mucho Dinero e plataformas afiliadas)
                            </p>
                        </div>
                        <p className="border-t border-zinc-100 pt-4 text-[11px] leading-relaxed text-zinc-500">
                            Este website não constitui uma oferta de venda, solicitação de compra ou recomendação
                            relativamente a quaisquer valores mobiliários, tokens, fundos ou produtos de investimento.
                        </p>
                    </article>
                </section>
            </div>
        </MainLayout>
    );
}
