import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TaskThree = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Aufgabenstellung**: Trainieren Sie ein Recurrent Neural
                Network (RNN) und ein Feed-Forward Neural Network (FFNN) mit
                einem Zeitfenster als Input auf der Basis der Daten (siehe
                unten) zur Wortvorhersage (Next Word Prediction). Sie können
                auch einen anderen Datensatz selber aussuchen, oder eigene
                Texte, z. B. Ihre E-Mails, zum Training verwenden.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Experimente und Fragestellungen**
            </ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Experimentieren Sie mit der Netzwerkarchitektur. Dokumentieren
                und begründen Sie Ihre finale Architektur.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Notieren Sie als Resultat, wie oft die Vorhersage genau richtig
                ist (k=1), und wie oft das korrekte nächste Wort unter den
                ersten k Worten, die sie vorhersagen liegt, mit k gleich 5, 10,
                20 und 100. Sie können auch die Perplexity (siehe Hintergrund)
                als Maß Ihrer Resultate nutzen.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Verglichen Sie die Peformance von Recurrent Neural Network (RNN)
                und Feed-Forward Neural Network (FFNN) mit einem Zeitfenster.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Können Sie Ihre ursprünglichen Trainingsdaten (ggf. Ihre
                privaten E-Mails) mittels des trainierten Models rekonstruieren?
                (überlegen Sie, ob sich daraus ein Datenschutzproblem ergibt).
            </ReactMarkdown>
        </>
    );
};
