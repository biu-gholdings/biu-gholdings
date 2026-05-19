import MainLayout from '@/Layouts/MainLayout';
import { linkAcademyInText, renderLinkedEntityName } from '@/lib/publicLinks';

const executives = [
    {
        name: 'Fábio G. Massanga',
        role: 'Sócio-Gerente, Fundador, Presidente & CEO da CubeShackles, Inc.',
        location: 'Angola / Estados Unidos',
        bio: 'Sócio-Gerente da Biu-g Holdings e Presidente & CEO da CubeShackles, Inc. Lidera a estratégia de longo prazo do grupo entre Angola, Portugal e Estados Unidos, com foco em infraestrutura financeira de nível institucional, sistemas digitais, plataformas nacionais e alinhamento regulatório.',
    },
    {
        name: 'José Quembi',
        role: 'Chief Technology Officer (CTO)',
        location: 'Lubango, Angola',
        bio: 'Responsável pela arquitectura técnica e implementação da CubeShackles, Angola National Wallet, Terminal BualaBuitu e do ecossistema de developers, com foco em infraestrutura offline-first, nativa em AOA.',
    },
];

export default function LeadershipPt() {
    return (
        <MainLayout title="Liderança – Biu-g Holdings">
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
                <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Liderança</p>
                    <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Liderança &amp; Governação</h1>
                    <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                        A Biu-g Holdings é liderada por operadores que combinam execução no terreno em Angola com uma
                        visão global de mercados de capitais, tecnologia e alinhamento regulatório. A liderança do grupo
                        é estruturada para equilibrar prioridades nacionais, disciplina institucional e criação de valor
                        sustentável para os acionistas.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">Equipa Executiva</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {executives.map((exec) => (
                            <article
                                key={exec.name}
                                className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-4 md:p-5"
                            >
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-zinc-900">
                                        {renderLinkedEntityName(exec.name, 'font-semibold')}
                                    </h3>
                                    <p className="text-xs font-medium text-zinc-700">{exec.role}</p>
                                    {exec.location && (
                                        <p className="text-[11px] text-zinc-500">{exec.location}</p>
                                    )}
                                </div>
                                <p className="mt-3 text-xs leading-relaxed text-zinc-600">{exec.bio}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">Filosofia de Governação</h2>
                    <p className="text-sm text-zinc-600">
                        A governance na Biu-g Holdings é desenhada com base em linhas claras de responsabilidade, rigor
                        jurisdicional e continuidade multi-década. À medida que o grupo integra administradores
                        independentes, parceiros institucionais e advisors estratégicos, a governance formaliza-se em:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600">
                        <li>Um conselho ao nível da holding Biu-g Holdings LLC (EUA).</li>
                        <li>Conselhos específicos para as entidades em Portugal e Angola.</li>
                        <li>Comités especializados de risco, auditoria, tecnologia e remuneração.</li>
                        <li>Canais formais de relação com reguladores e parceiros institucionais.</li>
                    </ul>
                    <p className="text-sm text-zinc-600">
                        {linkAcademyInText(
                            'O objetivo é simples: garantir que cada plataforma core — CubeShackles, FGMS, PraçaNgola, National Data Platform, BIU.G Academy — opera com o mesmo grau de disciplina esperado de instituições globais, mantendo ao mesmo tempo um enraizamento real na realidade angolana.',
                        )}
                    </p>
                </section>
            </div>
        </MainLayout>
    );
}
