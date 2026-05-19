import AcademyLink, { ACADEMY_NAME } from '@/Components/AcademyLink';
import FounderLink, { FOUNDER_NAME } from '@/Components/FounderLink';

export { FOUNDER_NAME, ACADEMY_NAME };

export function renderLinkedEntityName(name, className = '') {
    if (name === FOUNDER_NAME) {
        return <FounderLink className={className}>{name}</FounderLink>;
    }
    if (name === ACADEMY_NAME) {
        return <AcademyLink className={className}>{name}</AcademyLink>;
    }
    return name;
}

/** Splits prose on "BIU.G Academy" and inserts outbound links (no nested anchors). */
export function linkAcademyInText(text) {
    if (!text.includes(ACADEMY_NAME)) {
        return text;
    }

    const segments = text.split(ACADEMY_NAME);
    const nodes = [];

    segments.forEach((segment, index) => {
        if (segment) {
            nodes.push(segment);
        }
        if (index < segments.length - 1) {
            nodes.push(<AcademyLink key={`academy-${index}`} />);
        }
    });

    return nodes;
}
