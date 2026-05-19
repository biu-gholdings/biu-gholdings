/**
 * External outbound link with institutional styling (new tab, noopener, subtle hover).
 */
export default function ExternalLink({ href, children, className = '', ariaLabel }) {
    const resolvedLabel =
        ariaLabel ??
        (typeof children === 'string' ? `${children} (opens in new tab)` : 'External link (opens in new tab)');

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={resolvedLabel}
            className={
                'inline rounded-sm text-inherit no-underline decoration-zinc-900/70 underline-offset-2 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-1 ' +
                className
            }
        >
            {children}
        </a>
    );
}
