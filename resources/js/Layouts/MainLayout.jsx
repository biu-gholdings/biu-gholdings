import { PageHead, SiteLink, useSite } from '@/lib/site';
import LanguageToggle from '@/Components/LanguageToggle';

export default function MainLayout({ title, children }) {
    const { pageComponent } = useSite();
    const isPt = /Pt$/.test(pageComponent ?? '');

    const nav = isPt
        ? [
              ['Início', 'home.pt'],
              ['Sobre', 'about.pt'],
              ['Liderança', 'leadership.pt'],
              ['Estrutura', 'corporate.structure.pt'],
              ['Subsidiárias', 'subsidiaries.pt'],
              ['Investidores', 'investor.relations.pt'],
              ['Contacto', 'contact.pt'],
          ]
        : [
              ['Home', 'home'],
              ['About', 'about'],
              ['Leadership', 'leadership'],
              ['Corporate Structure', 'corporate.structure'],
              ['Subsidiaries', 'subsidiaries'],
              ['Investor Relations', 'investor.relations'],
              ['Contact', 'contact'],
          ];

    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
            <PageHead title={title} />
            <header className="border-b border-zinc-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
                    <SiteLink
                        routeName={isPt ? 'home.pt' : 'home'}
                        className="flex min-w-0 items-center gap-3"
                    >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-900 text-[10px] font-bold tracking-tight">
                            BG
                        </div>
                        <div className="flex min-w-0 flex-col leading-tight">
                            <span className="truncate text-sm font-semibold">Biu-g Holdings</span>
                            <span className="truncate text-xs text-zinc-500">
                                {isPt
                                    ? 'Infraestrutura corporativa para África'
                                    : 'Corporate infrastructure for Africa'}
                            </span>
                        </div>
                    </SiteLink>
                    <nav className="hidden flex-wrap items-center gap-5 text-xs font-medium text-zinc-700 lg:flex">
                        {nav.map(([label, routeName]) => (
                            <SiteLink
                                key={routeName}
                                routeName={routeName}
                                className="whitespace-nowrap hover:text-zinc-900"
                            >
                                {label}
                            </SiteLink>
                        ))}
                    </nav>
                    <div className="flex shrink-0 items-center gap-3">
                        <LanguageToggle />
                    </div>
                </div>
                <div className="border-t border-zinc-100 bg-white lg:hidden">
                    <nav className="mx-auto flex max-w-6xl flex-wrap gap-x-4 gap-y-2 px-4 py-3 text-xs font-medium text-zinc-700">
                        {nav.map(([label, routeName]) => (
                            <SiteLink key={routeName} routeName={routeName} className="hover:text-zinc-900">
                                {label}
                            </SiteLink>
                        ))}
                    </nav>
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="mt-auto border-t border-zinc-200 bg-white">
                <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-zinc-500">
                    <span>
                        © {new Date().getFullYear()} Biu-g Holdings LLC.{' '}
                        {isPt ? 'Todos os direitos reservados.' : 'All rights reserved.'}
                    </span>
                </div>
            </footer>
        </div>
    );
}
