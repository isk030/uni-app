import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TaskThree = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Aufgabenstellung**: Nutzen Sie ein feed-forward neural Network
                (FFNN) zur Regression der reellwertigen Funktion: y(x) =
                (x+0.8)*(x-0.2)*(x-0.3)*(x-0.6) im Wertebereich [-1,+1]. Zum
                Erzeugen der Trainingsdaten samplen Sie N zufällige,
                gleich-verteilte x Werte (mit N= 5, 10, 20, 50, 100) aus dem
                Intervall [-1,+1] und berechnen dazu y(x). Dann verrauschen Sie
                die Trainingsdaten künstlich. Dazu addieren Sie zu y(x)
                normal-verteiles Rauchen (Gaussian Noise) mit einer Varianz von
                entweder 0.1 oder 0.3. (Kein Rauschen und keine Normalverteilung
                für die x-Werte.)
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Experimente und Fragestellungen**: Stellen Sie die Größe des
                Netzwerkes und die Anzahl N der Trainingsdaten so ein, dass Sie
                die Phänomene Under-Fitting und Over-Fitting simulieren können.
                Experimentieren Sie mit den unterschiedlichen Trainingsdaten,
                der Netzwerkarchitektur und den Parametern der Neuronen und des
                Lernalgorithmus:
            </ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Anzahl der hidden Layer und Neuron pro Layer
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Aktivierungsfunktionen (ReLU, etc.)
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Lernrate und Optimizer
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Anzahl der Trainings Epochs
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Was ist das beste Ergebnis, das Sie erzielen können?
                Dokumentieren und begründen Sie Ihre Parameter und
                Einstellungen. Erklären Sie in diesem Zusammenhang die Begriffe
                Bias und Variance.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Interaktion**: Der Nutzer kann ein Bild zur Klassifikation
                hochladen oder per Drag-and-drop in die Anwendung ziehen.
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
