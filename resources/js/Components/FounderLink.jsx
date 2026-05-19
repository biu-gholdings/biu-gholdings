import ExternalLink from '@/Components/ExternalLink';

export const FOUNDER_NAME = 'Fábio G. Massanga';
export const FOUNDER_PROFILE_URL = 'https://fabiomassanga.com';

export default function FounderLink({ children = FOUNDER_NAME, className = '' }) {
    return (
        <ExternalLink
            href={FOUNDER_PROFILE_URL}
            ariaLabel={`${typeof children === 'string' ? children : FOUNDER_NAME} (opens in new tab)`}
            className={className}
        >
            {children}
        </ExternalLink>
    );
}
