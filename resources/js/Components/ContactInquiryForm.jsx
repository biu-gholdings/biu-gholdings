import { useState } from 'react';

const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
const SITE_ORIGIN = 'https://biu-gholdings.org';

const COPY = {
    en: {
        fallbackBody:
            'The contact form is temporarily unavailable. Please contact Biu-g Holdings LLC directly through the email above.',
        emailLabel: 'Email',
        intro: 'Regulators, qualified institutional parties, media, and corporate stakeholders may send a message below. Please include your organization and subject of inquiry.',
        fullName: 'Full name',
        email: 'Email address',
        organization: 'Organization',
        topic: 'Topic',
        topicPlaceholder: 'Select topic',
        topics: [
            ['regulatory', 'Regulatory coordination'],
            ['institutional', 'Institutional partnership'],
            ['media', 'Media inquiry'],
            ['corporate', 'Corporate inquiry'],
            ['governance', 'Governance & structure'],
            ['other', 'Other'],
        ],
        message: 'Message',
        consent:
            'I understand this message does not create a client, investor, advisory, partnership, or legal relationship with Biu-g Holdings LLC.',
        submit: 'Send Message',
        submitting: 'Sending…',
        disclaimer:
            'This website does not constitute an offer to sell, solicitation to buy, or recommendation regarding any securities, tokens, funds, or investment products.',
    },
    pt: {
        fallbackBody:
            'O formulário de contacto está temporariamente indisponível. Contacte a Biu-g Holdings LLC diretamente através do email acima.',
        emailLabel: 'Email',
        intro: 'Reguladores, partes institucionais qualificadas, media e stakeholders corporativos podem enviar uma mensagem abaixo. Inclua a sua organização e assunto do pedido.',
        fullName: 'Nome completo',
        email: 'Endereço de email',
        organization: 'Organização',
        topic: 'Assunto',
        topicPlaceholder: 'Selecionar assunto',
        topics: [
            ['regulatory', 'Coordenação regulatória'],
            ['institutional', 'Parceria institucional'],
            ['media', 'Pedido de media'],
            ['corporate', 'Pedido corporativo'],
            ['governance', 'Governance e estrutura'],
            ['other', 'Outro'],
        ],
        message: 'Mensagem',
        consent:
            'Compreendo que esta mensagem não cria relação de cliente, investidor, advisory, parceria ou relação jurídica com a Biu-g Holdings LLC.',
        submit: 'Enviar Mensagem',
        submitting: 'A enviar…',
        disclaimer:
            'Este website não constitui uma oferta de venda, solicitação de compra ou recomendação relativamente a quaisquer valores mobiliários, tokens, fundos ou produtos de investimento.',
    },
};

const inputClass =
    'mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500';
const labelClass = 'block text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500';

export default function ContactInquiryForm({ locale = 'en' }) {
    const t = COPY[locale] ?? COPY.en;
    const [submitting, setSubmitting] = useState(false);

    const thankYouUrl =
        locale === 'pt' ? `${SITE_ORIGIN}/contacto/obrigado` : `${SITE_ORIGIN}/contact/thank-you`;

    if (!FORM_ENDPOINT) {
        return (
            <article className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 md:p-6">
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
            <p className="text-sm leading-relaxed text-zinc-600">{t.intro}</p>
            <form
                method="POST"
                action={FORM_ENDPOINT}
                className="space-y-4"
                onSubmit={() => setSubmitting(true)}
            >
                <input type="hidden" name="_subject" value="Biu-g Holdings Contact Request" />
                <input type="hidden" name="source" value="biu-gholdings.org" />
                <input type="hidden" name="_next" value={thankYouUrl} />

                <div>
                    <label htmlFor="contact-full-name" className={labelClass}>
                        {t.fullName}
                    </label>
                    <input
                        id="contact-full-name"
                        name="full_name"
                        type="text"
                        required
                        autoComplete="name"
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="contact-email" className={labelClass}>
                        {t.email}
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="contact-organization" className={labelClass}>
                        {t.organization}
                    </label>
                    <input id="contact-organization" name="organization" type="text" required className={inputClass} />
                </div>

                <div>
                    <label htmlFor="contact-topic" className={labelClass}>
                        {t.topic}
                    </label>
                    <select id="contact-topic" name="topic" required className={inputClass} defaultValue="">
                        <option value="" disabled>
                            {t.topicPlaceholder}
                        </option>
                        {t.topics.map(([value, label]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="contact-message" className={labelClass}>
                        {t.message}
                    </label>
                    <textarea id="contact-message" name="message" required rows={4} className={inputClass} />
                </div>

                <div className="flex items-start gap-3">
                    <input
                        id="contact-consent"
                        name="consent"
                        type="checkbox"
                        value="yes"
                        required
                        className="mt-1 h-4 w-4 shrink-0 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-500"
                    />
                    <label htmlFor="contact-consent" className="text-xs leading-relaxed text-zinc-600">
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
