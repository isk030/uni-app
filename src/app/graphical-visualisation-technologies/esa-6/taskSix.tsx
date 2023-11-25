/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TaskSix = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Aufgabenstellung**: Teil 1: Erstellen Sie eine Szene aus
                mindestens zwei Grundkörpern oder parametrisierten Flächen. Sie
                soll interaktiv von allen Seiten einsehbar sein, siehe
                Interaktion.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Teil 2: Erstellen Sie ein rekursives Kugel-Modell, wie in
                Lerneinheit GRU beschrieben. Die Tiefe der Rekursion soll direkt
                von der Webseite aus interaktiv einstellbar sein. Es hilft
                zunächst einen Oktaeder zu bauen und auf diesem aufbauend die
                Dreiecksteilung vorzunehmen. Kolorieren Sie das Modell. Die
                Linien dabei sollen zusätzlich sichtbar sein, oder es besteht
                die Möglichkeit zwischen Linien und Füllung umzuschalten. Sie
                können die Kugel in die Szene aus Teil 1 der Aufgabe
                integrieren.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {`**Interaktion**: Die Bewegung der „kreisenden“ Kamera erfolgt über die Pfeiltasten (nur Pfeil nach
                 links und rechtes) auf einer Kreisbahn um die Szene (um die Y-Achse, also in der XZ-Ebene). Mittels
                  der Taste N (und Shift-N) kann man den Radius der Bewegung verändern. Zur Einstellung der
                   Rekursionstiefe für die Kugel erstellen Sie ein kleines Widget oder zwei Buttons mit plus und minus.
                `}
            </ReactMarkdown>
            <br />
        </>
    );
};
