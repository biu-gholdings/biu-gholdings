import ExternalLink from '@/Components/ExternalLink';

export const ACADEMY_NAME = 'BIU.G Academy';
export const ACADEMY_URL = 'https://biugacademy.org';

export default function AcademyLink({ children = ACADEMY_NAME, className = '' }) {
    return (
        <ExternalLink
            href={ACADEMY_URL}
            ariaLabel={`${typeof children === 'string' ? children : ACADEMY_NAME} (opens in new tab)`}
            className={className}
        >
            {children}
        </ExternalLink>
    );
}
