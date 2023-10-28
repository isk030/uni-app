/* eslint-disable react/no-unescaped-entities */

import { FC } from 'react';

/* eslint-disable @next/next/no-img-element */
export const DocumentationTwo: FC = () => {
    return (
        <div>
            <p>
                Zur Erstellung der Geometrie habe ich eine prozedurale
                Manipulation der Vertices unternommen. Ich habe hier auf
                verschienden Foren und Seiten mich darüber informiert, wie ich
                eine Art Sternenform erstellen könnte und durch Probieren mich
                einer endgültigen Form angenähert.
            </p>
            <p>
                Ferner habe ich wesentliche Eigenschaften des Shaders initial
                eingestellt (Koordination und Farbe der Linien)
            </p>
            <br />
            <p>
                Nach diesem Schritt wurden die Shader kompiliert und dem
                Shaderprogramm zur Verfügung gestellt.
            </p>
            <br />
            <p>
                Als letzten Schritt konnte ich mit gl.LINE_LOOP die Geometrie
                final zeichnen.
            </p>
            <br />
            <div className='grid grid-cols-3 gap-1'>
                <img src='./esa2_doc1.png' width='400' alt='' />
                <img src='./esa2_doc2.png' width='350' alt='' />
                <img src='./esa2_doc3.png' width='450' alt='' />
            </div>
        </div>
    );
};
