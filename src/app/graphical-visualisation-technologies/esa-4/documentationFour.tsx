/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const DocumentationFour = () => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                **Ansatz**: Es war für mich anfänglich schwer, die Orientierung
                im dreidimensionalen Raum zu behalten. Ich musste abseits des
                Materials mich selbst darin einarbeiten, wie genau
                parametriesierte Flächen in ein Koordinationsystem korrekt
                übertragen werden können. Ich sah ein, dass ich Längen- und
                Breiten einführen muss, um die Vertices über ein imaginäres Netz
                ausbreiten zu können. Somit war ich in der Lage zunächst eine
                Gitterstruktur zu erzeugen. Im nächsten Schritt musste ich
                zusammenhängende Vertices zu Flächen zuordnen. Ich musste oft
                hin- und her probieren um letztendlich die Formeln für die
                parametrischen Flächen korrekt in meinen Code zu übersetzen.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Den Farbverlauf habe ich an die Winkelangaben der
                trigonometrischen Funktionen gekoppelt, sodass eine Art
                Tiefeneffekt durch die Farbverläufe entstehen. Diese und im
                Ansatz aufgeführten Punkte habe ich dann nach und nach in eine
                eigene Funktion gekapselt, sodass man einige Parameter mitgeben
                kann, um die Erscheinung der Flächen zu beeinflussen.
            </ReactMarkdown>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                Nachdem ich hierdurch Vertices, Colors und Indeces berechne,
                gebe ich diese an meine Buffer und letzlich an das Programm zum
                Rendern. Über das React Framwork bin ich in der Lage Zustände
                der Buttons abzulesen und den gesamten WebGl Code entsprechend
                neuzurendern, sodass interaktiv Gitter- und Flächenansicht
                umgeschaltet werden kann. Das Skalieren der Flächen mache ich
                über eine map() Funktion an den Vertices. So konnte ich
                gewährleisten, dass die Figuren vollständig im Canvas angezeigt
                werden können.
            </ReactMarkdown>
            <br />
            <div className='grid grid-cols-4 gap-1'>
                <img src='./esa-4-doc1.png' width='400' alt='' />
                <img src='./esa-4-doc2.png' width='350' alt='' />
                <img src='./esa-4-doc3.png' width='350' alt='' />
                <img src='./esa-4-doc4.png' width='350' alt='' />
            </div>
        </>
    );
};
