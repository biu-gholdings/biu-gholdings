import { useState } from 'react';

const FORM_ENDPOINT = import.meta.env.VITE_IR_FORM_ENDPOINT;
const SITE_ORIGIN = 'https://biu-gholdings.org';

const COPY = {
    en: {
        fallbackTitle: 'Investor inquiry form unavailable',
        fallbackBody:
            'Investor inquiry form is temporarily unavailable. Please contact us directly.',
        emailLabel: 'Email',
        sectionIntro:
            'Qualified institutional parties may submit an inquiry below. Include accurate contact details and your area of interest.',
        name: 'Full name',
        email: 'Email address',
        institution: 'Organization / institution',
        investorType: 'Investor type',
        investorTypePlaceholder: 'Select type',
        investorTypes: [
            ['institutional', 'Institutional investor'],
            ['family_office', 'Family office'],
            ['sovereign', 'Sovereign / public entity'],
            ['fund', 'Fund / asset manager'],
            ['corporate', 'Corporate strategic'],
            ['other', 'Other'],
        ],
        jurisdiction: 'Jurisdiction',
        areaOfInterest: 'Area of interest',
        areaPlaceholder: 'Select area',
        areas: [
            ['holdings', 'Biu-g Holdings LLC (parent)'],
            ['cubeshackles', 'CubeShackles ecosystem'],
            ['financial', 'Financial infrastructure'],
            ['governance', 'Governance & participation vehicles'],
            ['partnership', 'Institutional partnership (general)'],
            ['other', 'Other'],
        ],
        message: 'Message',
        consent:
            'I understand this inquiry does not constitute an offer, solicitation, investment commitment, or access to private materials.',
        submit: 'Submit IR Request',
        submitting: 'Submitting…',
        disclaimer:
            'This website does not constitute an offer to sell, solicitation to buy, or recommendation regarding any securities, tokens, funds, or investment products.',
    },
    pt: {
        fallbackTitle: 'Formulário de pedido indisponível',
        fallbackBody:
            'O formulário de pedido para investidores está temporariamente indisponível. Contacte-nos diretamente.',
        emailLabel: 'Email',
        sectionIntro:
            'Partes institucionais qualificadas podem submeter um pedido abaixo. Inclua dados de contacto corretos e a sua área de interesse.',
        name: 'Nome completo',
        email: 'Endereço de email',
        institution: 'Organização / instituição',
        investorType: 'Tipo de investidor',
        investorTypePlaceholder: 'Selecionar tipo',
        investorTypes: [
            ['institutional', 'Investidor institucional'],
            ['family_office', 'Family office'],
            ['sovereign', 'Entidade soberana / pública'],
            ['fund', 'Fundo / gestor de ativos'],
            ['corporate', 'Estratégico corporativo'],
            ['other', 'Outro'],
        ],
        jurisdiction: 'Jurisdição',
        areaOfInterest: 'Área de interesse',
        areaPlaceholder: 'Selecionar área',
        areas: [
            ['holdings', 'Biu-g Holdings LLC (mãe)'],
            ['cubeshackles', 'Ecossistema CubeShackles'],
            ['financial', 'Infraestrutura financeira'],
            ['governance', 'Governance e veículos de participação'],
            ['partnership', 'Parceria institucional (geral)'],
            ['other', 'Outro'],
        ],
        message: 'Mensagem',
        consent:
            'Compreendo que este pedido não constitui uma oferta, solicitação, compromisso de investimento ou acesso a materiais privados.',
        submit: 'Submeter Pedido IR',
        submitting: 'A submeter…',
        disclaimer:
            'Este website não constitui uma oferta de venda, solicitação de compra ou recomendação relativamente a quaisquer valores mobiliários, tokens, fundos ou produtos de investimento.',
    },
};

const inputClass =
    'mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500';
const labelClass = 'block text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500';

export default function InvestorInquiryForm({ locale = 'en' }) {
    const t = COPY[locale] ?? COPY.en;
    const [submitting, setSubmitting] = useState(false);

    const thankYouUrl =
        locale === 'pt'
            ? `${SITE_ORIGIN}/relacoes-com-investidores/obrigado`
            : `${SITE_ORIGIN}/investor-relations/thank-you`;

    if (!FORM_ENDPOINT) {
        return (
            <article className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 md:p-6">
                <p className="text-sm font-medium text-zinc-900">{t.fallbackTitle}</p>
                <p className="text-sm leading-relaxed text-zinc-600">{t.fallbackBody}</p>
                <div className="space-y-1">
                    <p className={labelClass}>{t.emailLabel}</p>
                    <a
                        href="mailto:support@biu-gholdings.org"
                        className="inline-block text-sm font-medium text-zinc-900 underline"
                    >
                        support@biu-gholdings.org
                    </a>
                </div>
                <p className="border-t border-zinc-100 pt-4 text-[11px] leading-relaxed text-zinc-500">{t.disclaimer}</p>
            </article>
        );
    }

    return (
        <article className="space-y-5 rounded-lg border border-zinc-200 bg-white p-4 md:p-6">
            <p className="text-sm leading-relaxed text-zinc-600">{t.sectionIntro}</p>
            <form
                method="POST"
                action={FORM_ENDPOINT}
                className="space-y-4"
                onSubmit={() => setSubmitting(true)}
            >
                <input type="hidden" name="_subject" value="Biu-g Holdings Investor Inquiry" />
                <input type="hidden" name="source" value="biu-gholdings.org" />
                <input type="hidden" name="_next" value={thankYouUrl} />

                <div>
                    <label htmlFor="ir-name" className={labelClass}>
                        {t.name}
                    </label>
                    <input id="ir-name" name="name" type="text" required autoComplete="name" className={inputClass} />
                </div>

                <div>
                    <label htmlFor="ir-email" className={labelClass}>
                        {t.email}
                    </label>
                    <input
                        id="ir-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="ir-institution" className={labelClass}>
                        {t.institution}
                    </label>
                    <input id="ir-institution" name="institution" type="text" required className={inputClass} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="ir-investor-type" className={labelClass}>
                            {t.investorType}
                        </label>
                        <select id="ir-investor-type" name="investor_type" required className={inputClass} defaultValue="">
                            <option value="" disabled>
                                {t.investorTypePlaceholder}
                            </option>
                            {t.investorTypes.map(([value, label]) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="ir-jurisdiction" className={labelClass}>
                            {t.jurisdiction}
                        </label>
                        <input id="ir-jurisdiction" name="jurisdiction" type="text" required className={inputClass} />
                    </div>
                </div>

                <div>
                    <label htmlFor="ir-area" className={labelClass}>
                        {t.areaOfInterest}
                    </label>
                    <select id="ir-area" name="area_of_interest" required className={inputClass} defaultValue="">
                        <option value="" disabled>
                            {t.areaPlaceholder}
                        </option>
                        {t.areas.map(([value, label]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="ir-message" className={labelClass}>
                        {t.message}
                    </label>
                    <textarea id="ir-message" name="message" required rows={4} className={inputClass} />
                </div>

                <div className="flex items-start gap-3">
                    <input
                        id="ir-consent"
                        name="consent"
                        type="checkbox"
                        value="yes"
                        required
                        className="mt-1 h-4 w-4 shrink-0 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-500"
                    />
                    <label htmlFor="ir-consent" className="text-xs leading-relaxed text-zinc-600">
                        {t.consent}
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    aria-label={submitting ? t.submitting : t.submit}
                    className={
                        'w-full cursor-pointer rounded-md border border-zinc-900 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition ' +
                        'hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 ' +
                        'disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[12rem]'
                    }
                >
                    {submitting ? t.submitting : t.submit}
                </button>
            </form>
            <p className="border-t border-zinc-100 pt-4 text-[11px] leading-relaxed text-zinc-500">{t.disclaimer}</p>
        </article>
    );
}
