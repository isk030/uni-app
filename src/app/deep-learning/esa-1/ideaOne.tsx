/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const IdeaOne = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Interaktion**: Sie können ein Beispielbild auf der linken
                Seite im Lösungstab auswählen. Die rotmarkierten Bilder sind
                Bilder, die schlecht oder falsch klassifiziert wurden. Die
                grümarkierten hingegen sind richtig bzw. gut klassifiziert. Sie
                können eines der Beispielbilder auswählen und mit dem Button
                "Classify Image" eine Klassifizierung durchführen. Ferner sind
                sie in der Lage über den hervorgehobenen Text ein Bild
                hochzuladen und dieses zu klassifizieren. Unten Links können die
                Wahrscheinlichkeitsverteilung der Top10 Klassen einsehen und
                vergleichen.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Architektur**: Die Anwendung ist eine Single Page Application
                mit dem Metaframework Nextjs. Sie dient vornemlich als eine Art
                Semesterdokumentation des Autors. Diese App kommuniziert mit
                einem separaten Server (ML Server), welche das API Framework
                FastAPI nutzt, um Deeplearning Algorithmen und Model in Python
                auszuführen. Beide Systeme sind auf Intanzen des Cloudanbieters
                Railway deployed. Zusätzliches Motiv hierzu war, dass ich meine
                Fähigkeiten als Softwareentwickler verfeinere mit Tools mit
                denen ich nicht soviel Erfahrung habe, allerdings schon immer
                interessiert war. ([Link zu Nextjs](https://nextjs.org/), [Link
                zu FastAPI](https://fastapi.tiangolo.com/))
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Frameworks for DL**: Die Anwendung nutzt Pytorch als Deep
                Learning Framework und das Bildklassifierungsmodel resNet101.
                Pytorch ist ein beliebtes Framework bei Entwicklern und hat
                viele kompatibilitäten mit anderen Frameworks wie z.B.
                Tensorflow. Das Model resNet101 ist in der ML Model Webiste
                Huggingface sehr beliebt und wird von dem großen
                Softwareunternehmen Microsoft gewartet und weiterentwickelt.
                ([Link zu Pytorch](https://pytorch.org/), [Link zu
                resNet101](https://huggingface.co/microsoft/resnet-101))
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Visualisierung**: Die Anwendung nutzt die reCharts Bibliothek,
                um Ergebnisse visuell aufzubereiten. Dieses Tool empfinde ich
                persönlich als minimalistisch, funktional und kompatibel mit
                meinem restlichen Stack. Das visuelle Design der App ist mit
                Tailwind CSS und der Material-Tailwind Bibliothek entwickelt
                worden. ([Link zu reCharts](https://recharts.org/)) ([Link zu
                Tailwind CSS](https://tailwindcss.com/))
            </ReactMarkdown>
            <br />
            <img className='mx-auto' src='arch.png' width={600}></img>
        </>
    );
};
