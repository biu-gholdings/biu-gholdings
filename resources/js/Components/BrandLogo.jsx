import logoUrl from '@/assets/biu-gholdings-logo.png';

export default function BrandLogo({ className = 'h-10 w-10 shrink-0 object-contain' }) {
    return (
        <img
            src={logoUrl}
            alt="Biu-g Holdings"
            width={40}
            height={40}
            className={className}
            decoding="async"
        />
    );
}
