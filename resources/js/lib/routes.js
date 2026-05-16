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
    contact: '/contact',
    'contact.pt': '/contacto',
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
    '/relacoes-com-investidores': 'InvestorRelationsPt',
    '/contact': 'Contact',
    '/contacto': 'ContactPt',
};

export function url(routeName) {
    return routePaths[routeName] ?? '/';
}
