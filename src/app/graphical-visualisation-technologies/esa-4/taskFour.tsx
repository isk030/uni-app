/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TaskFour = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Aufgabenstellung**: 1. Erzeugen Sie zwei neue parametrisierte
                Flächen (die nicht im Modul vorkommen) zunächst mit Linien,
                siehe Material (dort gibt es viele Formeln, die Sie verwenden
                können).
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                2. Füllen Sie dann die Flächen und kolorieren Sie sie passend
                zur jeweiligen Flächenform, z. B. mit Farbverläufen. Die Linien
                sollen noch sichtbar sein, oder es besteht die Möglichkeit,
                zwischen Linien und Füllung umzuschalten.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                3. Kreieren Sie auch eine eigene Parametrisierung für eine
                Fläche und kolorieren Sie diese. Dazu sollen Sie sich eine neue
                Formel ausdenken, diese können Sie natürlich auf der Basis der
                vorhandenen Formeln aufbauen (aus dem Modul oder aus dem
                Material). Versuchen Sie Terme zu mischen und schauen Sie, ob
                das passiert, was Sie erwarten. Alternativ suchen Sie sich eine
                Form und versuchen Sie diese zu erzeugen, vielleicht „eine
                Qualle“ oder Ihre Lampe (dieses Vorgehen ist meist schwieriger).
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {`Beachten Sie die Skalierung der Flächen. Wir arbeiten bisher noch „ohne Kamera“, daher direkt in
                 Normalized-Device-Coordinats (NDC). Das Viewing-Volumen ist ein Würfel, mit den Eckpunkten -1 bis +1 
                 auf allen drei räumlichen Achsen. Alle Punkte, die Sie sehen wollen, müssen sich darin befinden. Zur 
                 Skalierung können Sie den erzeugten Vertices (x, y, z) mit einer reellwertigen Konstanten c mit 0<c<1 
                 multiplizieren oder die Skalierung im Vertex-Shader vornehmen:  gl_Position = vec4(c * pos, 1). Also 
                 denken Sie an die Wertebereiche, x->y in allen 3 Dimensionen. Passt der Input zu der Funktion und der 
                 Output zu dem darstellbaren Werte-/ Bildschirm-Bereich?
                `}
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {`Um mehr als ein Objekt darzustellen, können Sie mehrere gl.drawElements Draw-Calls hintereinander 
                absetzen, und so mehrere Objekte auf einen Canvas zeichnen. Sie können auch mit mehreren Canvas 
                Objekten arbeiten. 
                `}
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {`**Interaktion**: Die Flächen lassen sich, wenn nicht alle gleichzeitig sichtbar sind, mittels eines Buttons oder der Taste „B“ umschalten.
                `}
            </ReactMarkdown>
            <br />
        </>
    );
};
