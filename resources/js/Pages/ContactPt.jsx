import ContactInquiryForm from '@/Components/ContactInquiryForm';
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
                    <ContactInquiryForm locale="pt" />
                </section>

                <section className="rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 md:p-5">
                    <p className="font-semibold text-zinc-900">Jurisdições</p>
                    <p className="mt-2 text-zinc-700">
                        Estados Unidos (Biu-g Holdings LLC) · Portugal (Biu-g SGPS) · Angola (CubeShackles, FGM Capital,
                        FGMS, BIU.G Academy e futuras subsidiárias)
                    </p>
                </section>
            </div>
        </MainLayout>
    );
}
