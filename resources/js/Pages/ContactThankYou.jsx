import { SiteLink } from '@/lib/site';
import MainLayout from '@/Layouts/MainLayout';

export default function ContactThankYou() {
    return (
        <MainLayout title="Message Received – Biu-g Holdings LLC">
            <div className="mx-auto max-w-2xl space-y-8 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Message Received</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        Thank you. Your message has been received by Biu-g Holdings LLC. The team will review it and
                        respond through the appropriate institutional channel if follow-up is required.
                    </p>
                </header>
                <SiteLink
                    routeName="contact"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 sm:w-auto"
                >
                    Return to Contact
                </SiteLink>
            </div>
        </MainLayout>
    );
}
