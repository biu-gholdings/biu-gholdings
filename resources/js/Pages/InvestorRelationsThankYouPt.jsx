import { SiteLink } from '@/lib/site';
import MainLayout from '@/Layouts/MainLayout';

export default function InvestorRelationsThankYouPt() {
    return (
        <MainLayout title="Pedido Recebido – Biu-g Holdings LLC">
            <div className="mx-auto max-w-2xl space-y-8 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Relações com Investidores
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Pedido de Investidor Recebido</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Obrigado. O seu pedido foi recebido pela Biu-g Holdings LLC. A equipa irá analisar a submissão e
                        responder através do canal institucional adequado, caso exista alinhamento.
                    </p>
                </header>
                <SiteLink
                    routeName="investor.relations.pt"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 sm:w-auto"
                >
                    Voltar às Relações com Investidores
                </SiteLink>
            </div>
        </MainLayout>
    );
}
