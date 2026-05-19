import AcademyLink from '@/Components/AcademyLink';
import ContactInquiryForm from '@/Components/ContactInquiryForm';
import MainLayout from '@/Layouts/MainLayout';

export default function Contact() {
    return (
        <MainLayout title="Contact – Biu-g Holdings">
            <div className="mx-auto max-w-3xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Contact Biu-g Holdings</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        For regulatory coordination, institutional partnerships, and corporate inquiries across the
                        United States, Portugal, and Angola, contact the group office using the channel below.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">Corporate &amp; Institutional Contact</h2>
                    <ContactInquiryForm locale="en" />
                </section>

                <section className="rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 md:p-5">
                    <p className="font-semibold text-zinc-900">Jurisdictions</p>
                    <p className="mt-2 text-zinc-700">
                        United States (Biu-g Holdings) · Portugal (Biu-g SGPS) · Angola (CubeShackles, FGM Capital, FGMS,{' '}
                        <AcademyLink />, and future subsidiaries)
                    </p>
                </section>
            </div>
        </MainLayout>
    );
}
