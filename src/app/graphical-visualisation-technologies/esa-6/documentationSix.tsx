/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const DocumentationSix = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Ansatz**: Ich habe bei dieser Aufgabe mich stark an dem
                Kurs-Material orientiert. Ich habe zunächst das Camera-Setup
                durchgeführt und daraufhin das Beispielmodel in meine Szene
                geladen. Dann habe ich eines meiner Models, welches ich schon
                bereits für ESA4 genutzt hatte an das 'createVertexData'
                angepasst. Ähnliches gilt auch für die Sphere, die mittels
                Rekursion unterteilt werden kann.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Hinweis**: Aufgrund der Nutzung des von mir gewählten
                Frameworks, musste ich einiges an Code für meine App hier
                anpassen. Dies war recht zeitintensiv, daher bin ich diesmal in
                der Dokumentation etwas kürzer getreten.
            </ReactMarkdown>
        </>
    );
};
