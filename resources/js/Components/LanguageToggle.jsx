import { Link, usePage } from '@inertiajs/react';
import { route as ziggyRoute } from 'ziggy-js';

const PAGE_LOCALE_ROUTE_MAP = {
    Home: { en: 'home', pt: 'home.pt' },
    HomePt: { en: 'home', pt: 'home.pt' },
    About: { en: 'about', pt: 'about.pt' },
    AboutPt: { en: 'about', pt: 'about.pt' },
    Leadership: { en: 'leadership', pt: 'leadership.pt' },
    LeadershipPt: { en: 'leadership', pt: 'leadership.pt' },
    CorporateStructure: { en: 'corporate.structure', pt: 'corporate.structure.pt' },
    CorporateStructurePt: { en: 'corporate.structure', pt: 'corporate.structure.pt' },
    Subsidiaries: { en: 'subsidiaries', pt: 'subsidiaries.pt' },
    SubsidiariesPt: { en: 'subsidiaries', pt: 'subsidiaries.pt' },
    Contact: { en: 'contact', pt: 'contact.pt' },
    ContactPt: { en: 'contact', pt: 'contact.pt' },
    InvestorRelations: { en: 'investor.relations', pt: 'investor.relations.pt' },
    InvestorRelationsPt: { en: 'investor.relations', pt: 'investor.relations.pt' },
};

export default function LanguageToggle() {
    const { component: rawComponent, props } = usePage();
    const ziggy = props.ziggy;
    const component = typeof rawComponent === 'string' && rawComponent.includes('/')
        ? rawComponent.split('/').pop()
        : rawComponent;
    const cfg = PAGE_LOCALE_ROUTE_MAP[component];

    if (!cfg || !ziggy) {
        return null;
    }

    const isPt = component.endsWith('Pt');
    const enHref = ziggyRoute(cfg.en, {}, false, ziggy);
    const ptHref = ziggyRoute(cfg.pt, {}, false, ziggy);

    return (
        <div className="flex items-center gap-2 text-xs md:text-sm">
            <Link
                href={enHref}
                className={
                    'rounded-full border px-2 py-1 transition ' +
                    (!isPt
                        ? 'border-zinc-900 bg-zinc-900 text-white'
                        : 'border-zinc-300 text-zinc-600 hover:border-zinc-500 hover:text-zinc-800')
                }
            >
                EN
            </Link>
            <Link
                href={ptHref}
                className={
                    'rounded-full border px-2 py-1 transition ' +
                    (isPt
                        ? 'border-zinc-900 bg-zinc-900 text-white'
                        : 'border-zinc-300 text-zinc-600 hover:border-zinc-500 hover:text-zinc-800')
                }
            >
                PT
            </Link>
        </div>
    );
}
