/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from 'react';
import { Cat } from './cat';

export const SolutionOne: FC = () => {
    const [iteration, setIteration] = useState(0);
    const [stop, setStop] = useState(false);
    const [left, setLeft] = useState(true);

    const iterate = () => {
        if (left) {
            if (iteration >= 360) {
                setIteration(0);
                return;
            }
            setIteration(iteration + 15);
        } else {
            if (iteration < 0) {
                setIteration(345);
                return;
            }
            setIteration(iteration - 15);
        }
    };

    const keyDownHandler = (event: KeyboardEvent) => {
        if (event.key === 'r') {
            event.preventDefault();
            setStop(true);
            setLeft(false);
            setTimeout(() => {
                return null;
            }, 200);
            if (iteration >= 360 || iteration < 0) {
                setIteration(345);
            } else {
                setIteration(iteration - 15);
            }
        }

        if (event.key === 'l') {
            event.preventDefault();
            setStop(true);
            setLeft(true);
            setTimeout(() => {
                return null;
            }, 200);
            if (iteration >= 360 || iteration <= 0) {
                setIteration(15);
            } else {
                setIteration(iteration + 15);
            }
        }

        if (event.key === 'a') {
            event.preventDefault();
            setStop(!stop);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);

        if (iteration < 0) {
            setIteration(345);
        }

        if (iteration >= 360) {
            setIteration(0);
        }
        if (!stop) {
            if (iteration >= 360) {
                setIteration(0);
            } else {
                setTimeout(iterate, 100);
            }
        }

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [iteration, stop]);
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
