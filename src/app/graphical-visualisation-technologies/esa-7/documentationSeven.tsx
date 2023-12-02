/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const DocumentationSeven = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Ansatz**: Ich habe durch den Zugriff auf gl.FragCoord die
                Z-Achse an das rgb Attribut angebunden. Somit konnte ich den
                Grundkörpern eine Basisfarbe (schwarz) zuweisen und mit Z-Wert
                skalieren. Somit entstehen Graustufen abhängig von der Distanz
                zur Kamera.
            </ReactMarkdown>
        </>
    );
};
