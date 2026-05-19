import { Route, Routes } from 'react-router-dom';
import About from '@/Pages/About';
import AboutPt from '@/Pages/AboutPt';
import Contact from '@/Pages/Contact';
import ContactPt from '@/Pages/ContactPt';
import ContactThankYou from '@/Pages/ContactThankYou';
import ContactThankYouPt from '@/Pages/ContactThankYouPt';
import CorporateStructure from '@/Pages/CorporateStructure';
import CorporateStructurePt from '@/Pages/CorporateStructurePt';
import Home from '@/Pages/Home';
import HomePt from '@/Pages/HomePt';
import InvestorRelations from '@/Pages/InvestorRelations';
import InvestorRelationsPt from '@/Pages/InvestorRelationsPt';
import InvestorRelationsThankYou from '@/Pages/InvestorRelationsThankYou';
import InvestorRelationsThankYouPt from '@/Pages/InvestorRelationsThankYouPt';
import Leadership from '@/Pages/Leadership';
import LeadershipPt from '@/Pages/LeadershipPt';
import Subsidiaries from '@/Pages/Subsidiaries';
import SubsidiariesPt from '@/Pages/SubsidiariesPt';
import { routePaths } from '@/lib/routes';

const staticRoutes = [
    { path: routePaths.home, element: <Home /> },
    { path: routePaths['home.pt'], element: <HomePt /> },
    { path: routePaths.about, element: <About /> },
    { path: routePaths['about.pt'], element: <AboutPt /> },
    { path: routePaths.leadership, element: <Leadership /> },
    { path: routePaths['leadership.pt'], element: <LeadershipPt /> },
    { path: routePaths['corporate.structure'], element: <CorporateStructure /> },
    { path: routePaths['corporate.structure.pt'], element: <CorporateStructurePt /> },
    { path: routePaths.subsidiaries, element: <Subsidiaries /> },
    { path: routePaths['subsidiaries.pt'], element: <SubsidiariesPt /> },
    { path: routePaths['investor.relations'], element: <InvestorRelations /> },
    { path: routePaths['investor.relations.pt'], element: <InvestorRelationsPt /> },
    { path: routePaths['investor.relations.thankyou'], element: <InvestorRelationsThankYou /> },
    { path: routePaths['investor.relations.thankyou.pt'], element: <InvestorRelationsThankYouPt /> },
    { path: routePaths.contact, element: <Contact /> },
    { path: routePaths['contact.pt'], element: <ContactPt /> },
    { path: routePaths['contact.thankyou'], element: <ContactThankYou /> },
    { path: routePaths['contact.thankyou.pt'], element: <ContactThankYouPt /> },
];

export default function StaticApp() {
    return (
        <Routes>
            {staticRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
}
