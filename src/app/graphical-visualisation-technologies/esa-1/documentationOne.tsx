/* eslint-disable react/no-unescaped-entities */

import { FC } from 'react';

/* eslint-disable @next/next/no-img-element */
export const DocumentationOne: FC = () => {
    return (
        <div>
            <p>
                Zur 2D Scheibe: Diese 2D Scheibe wurde mittels dem AI Dienst von
                Midjourney erstellt. Durch wiederholtem Probieren konnte ich
                eine Scheibe generieren, die ausreichend rund war und Muster
                beinhaltete, die sich bei einer Rotation nicht als störend
                hevortaten.
            </p>
            <p>
                Angewandte Prompt-Eingabe: "2 D flat detailed beautiful round
                circle spiral total symmetric no background":
                https://www.midjourney.com/
            </p>
            <br />
            <p>
                Zusatzanimation (Katze): Ich habe ein Spritesheet mit
                Lizenzfreigabe heruntergeladen und diese in Einzelbilder
                herausgelöst und entsprechend dynamisch hintereinander
                angezeigt:
                https://www.freepik.com/free-vector/hand-drawn-animation-frames-element-collection_33591464.htm#query=animation%20sprite%20sheet&position=0&from_view=keyword&track=ais
            </p>
            <br />
            <p>
                Allgemein: Ich nutze das Metaframewok Nextjs 13, welches auf
                React aufbaut. Ich nutze die Renderclylen des Frameworks aus und
                kann hierdurch zu bestimmten Zeiten dymanisch den Pfad zum
                nächsten Einzelbild anzeigen. Dies findet insbesondere im
                useEffect Hook statt. Hier wird auch gewährleistet, dass nur
                gültige Frames zur Anzeige herangezogen werden.
            </p>
            <div className='grid grid-cols-3 gap-1'>
                <img src='./carbon.png' width='400' alt='' />
                <img src='./carbon-3.png' width='350' alt='' />
                <img src='./carbon-2.png' width='450' alt='' />
            </div>
        </div>
    );
};
