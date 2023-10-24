/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TaskTwo = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Aufgabenstellung**: Erstellen Sie eine eigene 2D-Geometrie aus
                Linien (etwa 30 Vertices) und stellen Sie diese mittels WebGL
                dar. Dabei können Sie GL_LINES, GL_LINE_STRIP oder GL_LINE_LOOP
                verwenden.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Hinweise**: Sie können die Geometrie auch algorithmisch
                erzeugen, das bedeutet Sie schreiben Code (for-Schleifen, etc.),
                die die Vertices generieren (mehr dazu können Sie recherchieren
                unter dem Stichwort „Procedural Modelling“).
            </ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Linienstärke/LineWidth: Die Linienstärke zu verändern
                funktioniert manchmal (je nach Version) in einigen Browsern
                nicht. In der Anlage unter Dateien finden Sie ein Testprogramm,
                mit dem man feststellen kann, ob der verwendete Browser ein
                Anpassen der Linienstärke zulässt.
            </ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Achten Sie darauf, den count-Parameter der Funktion drawArrays()
                korrekt zu setzen, und zwar nicht auf die Anzahl Werte im
                "vertices" Array, sondern auf die Anzahl der 2D-Vertices.
            </ReactMarkdown>
        </>
    );
};
