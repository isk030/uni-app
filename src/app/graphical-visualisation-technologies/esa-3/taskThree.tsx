/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TaskThree = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Aufgabenstellung**: Kolorieren Sie eine eigene 2D-Geometrie,
                indem Sie nun Dreiecke (keine Linien) erzeugen (Sie können auf
                der Lösung der vorherigen Aufgabe aufbauen). Sie können dabei
                einfarbige Flächen oder auch Farbverläufe einsetzen.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Hinweise**: Denken Sie daran, dass die Längen aller Arrays
                (auch vertices, color, indices) zueinander und zum Draw-Call
                (drawElements) passen müssen.
            </ReactMarkdown>
            <br />
        </>
    );
};
