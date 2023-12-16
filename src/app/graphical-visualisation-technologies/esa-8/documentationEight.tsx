/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const DocumentationEight = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Ansatz**: Ich habe Anpassungen in den Vertex/Fragment Shadern
                unternommen, um den Toon Shader zu implementieren. Die
                Lichtberechnung erfolgt dabei durch eine Abfrage der Helligkeit
                des Pixels. Je nach Helligkeit wird dann eine bestimmte Farbe
                ausgegeben. Die Helligkeit wird dabei durch die
                Dot-Product-Berechnung des Vertex-Normals und der Lichtquelle
                ermittelt. Die Lichtquellen konnte ich als Objecte ins Setting
                hinzufügen und durch trigonometrische Funktionen bewegen lassen.
                Die Lichtquellen sind dabei als kleine Kugeln dargestellt. Die
                Lichtquellen werden dabei in der Szene als Objekte dargestellt,
                die sich bewegen.
            </ReactMarkdown>
            <br />
            <div className='grid grid-cols-4 gap-1'>
                <img src='./esa8Doc.png' width='400' alt='' />
                <img src='./esa8Doc2.png' width='350' alt='' />
            </div>
        </>
    );
};
