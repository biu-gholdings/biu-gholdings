/**
 * Canonical public URL map (mirrors routes/web.php).
 * Used by static GitHub Pages build and shared navigation helpers.
 */
export const routePaths = {
    home: '/',
    'home.pt': '/pt',
    about: '/about',
    'about.pt': '/sobre',
    leadership: '/leadership',
    'leadership.pt': '/lideranca',
    'corporate.structure': '/corporate-structure',
    'corporate.structure.pt': '/estrutura-corporativa',
    subsidiaries: '/subsidiaries',
    'subsidiaries.pt': '/subsidiarias',
    'investor.relations': '/investor-relations',
    'investor.relations.pt': '/relacoes-com-investidores',
    'investor.relations.thankyou': '/investor-relations/thank-you',
    'investor.relations.thankyou.pt': '/relacoes-com-investidores/obrigado',
    contact: '/contact',
    'contact.pt': '/contacto',
    'contact.thankyou': '/contact/thank-you',
    'contact.thankyou.pt': '/contacto/obrigado',
};

export const pathToComponent = {
    '/': 'Home',
    '/pt': 'HomePt',
    '/about': 'About',
    '/sobre': 'AboutPt',
    '/leadership': 'Leadership',
    '/lideranca': 'LeadershipPt',
    '/corporate-structure': 'CorporateStructure',
    '/estrutura-corporativa': 'CorporateStructurePt',
    '/subsidiaries': 'Subsidiaries',
    '/subsidiarias': 'SubsidiariesPt',
    '/investor-relations': 'InvestorRelations',
    '/investor-relations/thank-you': 'InvestorRelationsThankYou',
    '/relacoes-com-investidores': 'InvestorRelationsPt',
    '/relacoes-com-investidores/obrigado': 'InvestorRelationsThankYouPt',
    '/contact': 'Contact',
    '/contact/thank-you': 'ContactThankYou',
    '/contacto': 'ContactPt',
    '/contacto/obrigado': 'ContactThankYouPt',
};

export function url(routeName) {
    return routePaths[routeName] ?? '/';
}

/** All public URLs included in the GitHub Pages static export (18 pages). */
export const allPublicPaths = Object.values(routePaths);
