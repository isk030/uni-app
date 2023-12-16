/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TaskEight = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Aufgabenstellung**: Erweitern Sie die Aufgabe Bel-3 (oder
                Bel-2 in schwarz-weiß) aus der Lerneinheit BEL (Kap.14.9). Auf
                einen Tastendruck sollen sich die beiden Lichter in der Szene
                gleichzeitig auf einer Kreisbahn um die Modelle bewegen. Sie
                bewegen sich unabhängig von der Kamera (nicht wie ein Licht, das
                fest auf der Kamera montiert ist).
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Erweiterung**: Schattieren Sie die Szene im Stil eines
                traditionellen Zeichentrickfilms mit einem Toon-Shader (auch als
                Cell-Shader bezeichnet). Was ein Toon-Shader ist und wie dieser
                implementiert wird, müssen Sie recherchieren, siehe dazu den
                Punkt Material.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Hinweise**: Das Toon-Shading sollte im Fragment-Shader
                implementiert werden.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Interaktion**: Bewegung der Lichter in eine vorbestimmte
                Richtung auf Tastendruck 'l' oder 'L' (Shift hat also keinen
                Effekt).
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Visualisierung**: Ihre Lösung (mit allen Erweiterungen) sollte
                auf einer Webseite übersichtlich dargestellt sein. Auch
                Quellenangaben, Benutzungshinweise und Anmerkungen (falls
                notwendig) gehören auf die Webseite, schreiben Sie bitte nichts
                in die Moodle Abgabe-Felder.
            </ReactMarkdown>
        </>
    );
};
