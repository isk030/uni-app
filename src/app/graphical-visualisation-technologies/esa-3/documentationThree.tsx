/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const DocumentationThree = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                In dieser Aufgabe baue ich auf der ESA 2 auf. Hierbei habe ich
                den Radius und die Anzahl der Vertices etwas angepasst.
                Schlussendlich führe ich meine Draw-Methode mit gl.TRIANGLE_FAN
                aus. Hierdurch wird das Polygon als Komposition von Dreiecken
                "aufgefächert".
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Den Farbverlauf konnte ich durch Anpassnungen am
                ***fragmentShaderSource*** realisieren.
            </ReactMarkdown>
            <br />

            <div className='grid grid-cols-3 gap-1'>
                <img src='./esa3_doc_1.png' width='400' alt='' />
                <img src='./esa3_doc2.png' width='350' alt='' />
                <img src='./esa_3_doc3.png' width='350' alt='' />
            </div>
        </>
    );
};
