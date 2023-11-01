/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const DocumentationThree = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Ich habe hier mehrere Dreiecke gezeichnet und versucht eine
                abstrakte Figur mit Ohren darzustellen. (33 Vertices)
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Den Farbverlauf konnte ich durch Anpassnungen am
                ***fragmentShaderSource*** realisieren.
            </ReactMarkdown>
            <br />

            <div className='grid grid-cols-3 gap-1'>
                <img src='./esa3_doc1.png' width='400' alt='' />
                <img src='./esa3_doc2.png' width='350' alt='' />
                <img src='./esa_3_doc3.png' width='350' alt='' />
            </div>
        </>
    );
};
