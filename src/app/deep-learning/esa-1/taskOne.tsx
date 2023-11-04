import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TaskOne = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Aufgabenstellung**: Erweitern Sie das ml5 Image Classification
                Tutorial so, dass ein Nutzer beliebige Bilder klassifizieren
                kann. Sie verwenden dazu wie im Tutorial ein bestehendes,
                vor-trainiertes Model, Sie müssen also nichts selber
                trainieren/anlernen. Stellen Sie einige Beispiel-Bilder
                (mindestens jeweils 3 für passende und falschen Klassifikation)
                in der Anwendung (direkt zum Anklicken) zum Ausprobieren der
                Klassifikation bereit. Zeigen Sie die wahrscheinlichsten
                Ergebnisse der Klassifikation.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Resultate und Diskussion**: Stellen Sie auf einer separaten
                HTML-Seite Ihre Experimente mit den zugehörigen Resultaten
                übersichtlich dar und diskutieren Sie diese (was hat
                funktioniert, was nicht und warum wohl).
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Hinweise**: Das ml5 Framework ist ein heigh-level API zu
                TensorFlow (TF) oder TFJS. Für mehr Kontrolle über die Logik der
                Anwendung muss eine tiefere Schnittstelle/API gewählt werden.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Interaktion**: Der Nutzer kann ein Bild zur Klassifikation
                hochladen oder per Drag-and-drop in die Anwendung ziehen.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Visualisierung**: Das Netzwerk gibt eine
                Wahrscheinlichkeitsverteilung aus. Diese Werte kann man als
                Confidence interpretieren. Diese Confidence sollen Sie als
                Klassifikationsergebnis ausgeben beziehungsweise darstellen, z.
                B. in Form eines [Balken-, Pie-, etc.] Diagramms. Zur
                Visualisieren Ihrer Ergebnisse können Sie die Bibliotheken
                Plotly nutzen.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Dokumentation**: Nutzen Sie eine separate HTML-Seite, die über
                ein Link/Button von Ihrer Anwendung aus erreichbar ist, zur
                Dokumentation. 1) Interaktion: Listen Sie die möglichen
                Interaktionen mit den zugehörigen Tasten auf der HTML-Seite auf.
                2) Technisch: Listen Sie alle verwendeten Frameworks auf und
                erklären Sie kurz (1–3 Sätze) wozu Sie diese verwenden.
                Dokumentieren Sie technische Besonderheiten Ihrer Lösung. 3)
                Fachlich: Erläutern Sie Ihre Implementierung der Logik und
                alles, was für ihre Lösung wichtig ist (Ansatz, Resultate,
                Quellen, etc.). 4) Quellen: Dokumentieren Sie Ihre Quellen,
                Benutzungshinweise und Anmerkungen (falls notwendig). Schreiben
                Sie bitte nichts in die Moodle Abgabe-Felder.
            </ReactMarkdown>
        </>
    );
};
