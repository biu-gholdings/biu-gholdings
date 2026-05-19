import { useEffect } from 'react';
import { Head, Link as InertiaLink, usePage } from '@inertiajs/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { pathToComponent, url } from '@/lib/routes';

const isStaticSite = import.meta.env.VITE_STATIC_SITE === 'true';
const appName = import.meta.env.VITE_APP_NAME || 'Biu-g Holdings';

function parseInertiaComponent(raw) {
    if (typeof raw === 'string' && raw.includes('/')) {
        return raw.split('/').pop();
    }

    return raw;
}

export function useSite() {
    if (isStaticSite) {
        const { pathname } = useLocation();

        return {
            pageComponent: pathToComponent[pathname] ?? 'Home',
        };
    }

    const { component: rawComponent } = usePage();

    return {
        pageComponent: parseInertiaComponent(rawComponent) ?? 'Home',
    };
}

export function SiteLink({ routeName, className, children }) {
    const href = url(routeName);

    if (isStaticSite) {
        return (
            <RouterLink to={href} className={className}>
                {children}
            </RouterLink>
        );
    }

    return (
        <InertiaLink href={href} className={className}>
            {children}
        </InertiaLink>
    );
}

function DocumentTitle({ title }) {
    useEffect(() => {
        document.title = title ? `${title} | ${appName}` : appName;
    }, [title]);

    return null;
}

export function PageHead({ title }) {
    if (isStaticSite) {
        return <DocumentTitle title={title} />;
    }

    return <Head title={title} />;
}

export { isStaticSite };
