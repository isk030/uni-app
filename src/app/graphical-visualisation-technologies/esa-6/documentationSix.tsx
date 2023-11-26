/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const DocumentationSix = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Ansatz**: Entsprechend der Kursmaterialien habe ich mit einer
                Kugel zunächst experimentiert. Hierbei habe ich die Translation
                und Rotation auch auf den Torus angewandt. Entsprechen konnte
                ich iterativ mich an das vorliegende Ergebnis annähern. Es ist
                immer wieder eine Herausforderung Animationen mit Webgl in
                Einklang mit den Renderzyklen des React-Frameworks anzupassen.
                Zurzeit wird bei jedem Renderzyklus mit einem setTimeout() die
                Werte für Rotation Translation für die Objekte neuberechnet. Ich
                kann mir vorstellen, das wiederkehrende Ergebnisse der
                Berechnungen 'gechached' werden könnten, um ressourcensparender
                zu animieren.
            </ReactMarkdown>
        </>
    );
};
