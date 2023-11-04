/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const DocumentationOne = () => {
    return (
        <div className='h-[90vh] overflow-visible overflow-scroll'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Ansatz**: Nachdem ich mich für Pytorch als Deep Learning
                Framework entschieden habe, fand ich in den Dokumentationen eine
                Liste von Image Classification Models, die Pytorch von sich aus
                unterstützt. Nach einer kurzen Recherche in Foren und
                Fachartikeln wurde MobileNet V2 als ein gutes Model vorgestellt.
                Ich habe daraufhin das Model in meinen ersten Ausführungen mit
                einigen unterschiedlichen Bilder ausprobiert. Dann stieß ich auf
                ResNet ein vortrainiertes Model auf der ML Platform Huggingface.
                Dieses Model war populär und gut bewertet. Nach ein paar
                Ausführungen auch mit diesem Model, erachtete ich es als etwas
                besser und entschied mich letztlich dafür. Im weiteren Schritt
                wird das Model in den Evaluierungsmodus gesetzt und der "output"
                entnommen, nachdem das Bild übergeben wurde. Ferner werden die
                Ergebnisse mit einer Klassenbezeichnungsdatei abgeglichen und
                bezeichnet. Im letzten Schritt werden die Ergebnisse absteigend
                sortiert und letzendlich die Top 10 als Endpoint der FasAPI der
                Single Page Application zur Verfügung gestellt. ([Link zu
                Pytorch/resNet101](https://pytorch.org/vision/main/models/generated/torchvision.models.resnet101.html))
                ([Link zu IMAGENET](https://image-net.org))
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Resultate**: Meine Resultate zeigen, sehr gute
                Klassifikationsperformance, bei Objekten die zentral im Bild
                wesentliche Indentifikationsmerkmale haben. Wenn es zu viele
                Objekte gibt tut sich das Model schwer eindeutige Ergebnisse zu
                liefern. Nur wenn das Bild zentral soweit geschnitten, wird
                sodass die Anzahl der Objekte bedeutend gesenkt werden können,
                sind bessere und richtige Ergebnisse möglich.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Hinweis**: Sicher könnte man die Performance des Models weiter
                verbessern. Man könnte z.B das Model öfter Evaluiren lassen und
                die Ergebnisse programmatisch bewerten und den Ausschnitt des
                Bildes anpassen. Man könnte Filter und Masken einsetzen etc. Und
                sich so inkrementell einer besseren Confidence nähern.
                Allerdings fand ich mit der geg. Konfiguration des Modells, die
                Klassifierzierungen recht gut und erfolgreich. Es war teils
                herausfordernd negativ Beispiele zu finden.
            </ReactMarkdown>
            <br />
            <div className=' grid grid-cols-2 gap-1s'>
                <img className='mx-auto' src='ml_doc.png' width={600}></img>
                <img className='mx-auto' src='ml_doc2.png' width={600}></img>
                <img
                    className='mx-auto mb-50'
                    src='ml_doc3.png'
                    width={600}
                ></img>
            </div>
        </div>
    );
};
