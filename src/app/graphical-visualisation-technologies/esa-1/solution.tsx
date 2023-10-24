/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { Cat } from './cat';

type SolutionsProps = {
    iteration: number;
};

export const SolutionOne: FC<SolutionsProps> = ({ iteration }) => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <img
                    src={`/sprite/spritesheet_${iteration.toString()}-min.png`}
                    width='512'
                    height='512'
                    alt=''
                />
                <h3 className='font-bold'>Interaktion:</h3>
                <p>
                    'a': Automatisches Rotieren an- oder ausschalten(in letzte
                    bekannter Drehrichtung)
                </p>
                <p>'r': Nächtes Einzelbild anzeigen nach rechts drehend</p>
                <p>'l': Nächstes Einzelbild anzeigen nach links drehend</p>
                <br />
                <br />
                <p>
                    Hinweis: Es wird ein aktueller Chromebrowser empfohlen.
                    Aufgrund der etwas großen Bilder und meinem Server Provider,
                    ist das initiale Laden etwas langsam.
                </p>
            </div>

            <Cat />
        </div>
    );
};
