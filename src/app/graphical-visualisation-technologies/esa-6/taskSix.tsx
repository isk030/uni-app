/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TaskSix = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Aufgabenstellung**: Lassen Sie die vier Kugeln aus dem
                Beispielprogramm aus der Lerneinheit TFM interaktiv durch den
                Torus fliegen. Dabei bewegen sich die Kugeln kontinuierlich auf
                Kreisbahnen so, dass sie sich nie berühren.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {`**Interaktion**: Beim jedem Drücken der Taste "k" (Sie können auch einen Button nutzen) sollen sich
                 alle Kugeln ein Stück weiter bewegen oder die Bewegung erfolgt automatisch und kann ein- und
                  ausgeschaltet werden. 
                `}
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Erweiterungen**: Der Torus dreht sich um eine seiner Achsen
                (aber nicht nur wie ein Autoreifen), ohne dass er von den Kugeln
                berührt wird. Beide Bewegungen werden synchron animiert.
            </ReactMarkdown>
        </>
    );
};
