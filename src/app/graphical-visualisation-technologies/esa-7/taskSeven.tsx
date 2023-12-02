/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TaskSeven = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Aufgabenstellung**: Erstellen Sie eine Szene aus mindestens
                drei Grundkörpern dar, die einander überschneiden, damit man
                ihre relative Lage besser einschätzen kann. Stellen Sie den
                Tiefen-Buffer (Z-Buffer), das heißt die Z-Werte der Fragmente im
                Framebuffer, als Graustufen dar. Die Fragmente, die in
                Z-Richtung näher an der Kamera sind, sollen dunkler dargestellt
                werden. In der Szene soll möglichst viel Tiefe erzeugt werden,
                sodass der Effekt deutlich wird.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {`**Interaktion**:  Bewegung der Kamera in der XY-Ebene über die Tasten WASD und Drehung der
                 Szene über die Pfeiltasten.
                `}
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Hinweis**: Sie können im Fragment-Shader über die Variable
                gl_FragCoord auf den Z-Wert eines Fragments zugreifen.
            </ReactMarkdown>
        </>
    );
};
