/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import { Option, Select } from '@material-tailwind/react';
import { FC, useEffect, useState } from 'react';
import { create } from 'zustand';
import { UnderlineTabs } from '../components/tabs';

const TaskOne = () => {
    return (
        <div>
            <p className='font-bold'>Aufgabenstellung:</p>
            <p>
                Implementieren Sie eine sich drehende 2D-Scheibe aus
                Einzelbildern, welche Sie mit JavaScript laden und in einem
                Image-Element zeigen (nicht im Canvas). Die Einzelbilder sollen,
                ähnlich wie bei einer Sprite-Sheet-Animation oder einem
                Animationsfilm, so ausgetauscht und eingeblendet werden, dass
                visuell der Eindruck einer Rotation entsteht. Auf jedem
                Einzelbild ist ein Rotationszustand der Scheibe zu sehen, z. B.:
                0°, 15°, 30°, ...
            </p>
            <br />
            <p>
                Es ist Ihnen überlassen, ob Sie die Bilder auf mehrere Dateien
                verteilen, oder alle Bilder der Animation als Sprite-Sheet, also
                in einer Datei anordnen.
            </p>
            <br />
            <p className='font-bold'>Erweiterungen: </p>
            <div>
                <ol>
                    <li>
                        1: Außer einer Scheibe kreieren und animieren Sie noch
                        ein anderes Objekt Ihrer Wahl als Sprite-Sheet, z. B.
                        einen hüpfenden Hasen.
                    </li>
                    <br />
                    <li>
                        2: Die Scheibe dreht sich automatisch mit Taste a, dazu
                        muss diese kontinuierlich animiert werden (die Animation
                        sollte bei einem weiteren Drücken von a auch wieder
                        angehalten werden).
                    </li>
                </ol>
            </div>
            <br />
            <p>
                <span className='font-bold'>Interaktion:</span> Auf den
                Tastendruck l oder r soll sich die Scheibe augenscheinlich ein
                Stück nach links beziehungsweise nach rechts drehen. Zum Drehen
                muss man wiederholt drücken (mit l und r soll es nur also einen
                Schritt/ ein Bild weiter gehen.). Das automatische Drehen und
                Stoppen für die Erweiterung erfolgt über die Taste a. Alternativ
                können Sie die Funktionalität auf Button abbilden. Beachten Sie
                dabei Human/Mensch-Computer-Interaction (HCI) Kriterien beim
                Interaktionsdesign: ISO 9241-11 Anforderungen an die
                Gebrauchstauglichkeit und die ISO 9241-110 zu
                Interaktionsprinzipien.
            </p>
        </div>
    );
};

const TaskTwo = () => {
    return (
        <div>
            <p className='font-bold'>Aufgabenstellung:</p>
            <p>Das ist ESA 2</p>
            <br />
            <p>
                Es ist Ihnen überlassen, ob Sie die Bilder auf mehrere Dateien
                verteilen, oder alle Bilder der Animation als Sprite-Sheet, also
                in einer Datei anordnen.
            </p>
            <br />
            <p className='font-bold'>Erweiterungen: </p>
            <div>
                <ol>
                    <li>
                        1: Außer einer Scheibe kreieren und animieren Sie noch
                        ein anderes Objekt Ihrer Wahl als Sprite-Sheet, z. B.
                        einen hüpfenden Hasen.
                    </li>
                    <br />
                    <li>
                        2: Die Scheibe dreht sich automatisch mit Taste a, dazu
                        muss diese kontinuierlich animiert werden (die Animation
                        sollte bei einem weiteren Drücken von a auch wieder
                        angehalten werden).
                    </li>
                </ol>
            </div>
            <br />
            <p>
                <span className='font-bold'>Interaktion:</span> Auf den
                Tastendruck l oder r soll sich die Scheibe augenscheinlich ein
                Stück nach links beziehungsweise nach rechts drehen. Zum Drehen
                muss man wiederholt drücken (mit l und r soll es nur also einen
                Schritt/ ein Bild weiter gehen.). Das automatische Drehen und
                Stoppen für die Erweiterung erfolgt über die Taste a. Alternativ
                können Sie die Funktionalität auf Button abbilden. Beachten Sie
                dabei Human/Mensch-Computer-Interaction (HCI) Kriterien beim
                Interaktionsdesign: ISO 9241-11 Anforderungen an die
                Gebrauchstauglichkeit und die ISO 9241-110 zu
                Interaktionsprinzipien.
            </p>
        </div>
    );
};

const TaskThree = () => {
    return (
        <div>
            <p className='font-bold'>Aufgabenstellung:</p>
            <p>Das ist ESA 3</p>
            <br />
            <p>
                Es ist Ihnen überlassen, ob Sie die Bilder auf mehrere Dateien
                verteilen, oder alle Bilder der Animation als Sprite-Sheet, also
                in einer Datei anordnen.
            </p>
            <br />
            <p className='font-bold'>Erweiterungen: </p>
            <div>
                <ol>
                    <li>
                        1: Außer einer Scheibe kreieren und animieren Sie noch
                        ein anderes Objekt Ihrer Wahl als Sprite-Sheet, z. B.
                        einen hüpfenden Hasen.
                    </li>
                    <br />
                    <li>
                        2: Die Scheibe dreht sich automatisch mit Taste a, dazu
                        muss diese kontinuierlich animiert werden (die Animation
                        sollte bei einem weiteren Drücken von a auch wieder
                        angehalten werden).
                    </li>
                </ol>
            </div>
            <br />
            <p>
                <span className='font-bold'>Interaktion:</span> Auf den
                Tastendruck l oder r soll sich die Scheibe augenscheinlich ein
                Stück nach links beziehungsweise nach rechts drehen. Zum Drehen
                muss man wiederholt drücken (mit l und r soll es nur also einen
                Schritt/ ein Bild weiter gehen.). Das automatische Drehen und
                Stoppen für die Erweiterung erfolgt über die Taste a. Alternativ
                können Sie die Funktionalität auf Button abbilden. Beachten Sie
                dabei Human/Mensch-Computer-Interaction (HCI) Kriterien beim
                Interaktionsdesign: ISO 9241-11 Anforderungen an die
                Gebrauchstauglichkeit und die ISO 9241-110 zu
                Interaktionsprinzipien.
            </p>
        </div>
    );
};

type ComponentType = {
    [key: string]: JSX.Element | undefined;
};

const Cat = () => {
    const [iteration2, setIteration2] = useState(0);
    const iterate2 = () => {
        setIteration2(iteration2 + 1);
    };
    useEffect(() => {
        if (iteration2 < 0) {
            setIteration2(345);
        }

        if (iteration2 >= 6) {
            setIteration2(0);
        }

        setTimeout(iterate2, 100);
    }, [iteration2]);

    return (
        <img
            src={`/sprite/cat_${iteration2}-min.png`}
            width='256'
            height='256'
            alt=''
        />
    );
};

export const GraphicalVisualizationTabs = () => {
    const activeValue: string = useActiveEsaStore((state) => state.activeEsa);
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

    const components: ComponentType = {
        TaskOne: <TaskOne />,
        TaskTwo: <TaskTwo />,
        TaskThree: <TaskThree />,
    };

    const data = [
        {
            label: 'Aufgabenstellung',
            value: 'task',
            desc: components[activeValue],
        },
        {
            label: 'Idee',
            value: 'idea',
            desc: `Hier ist leider noch nichts`,
        },
        {
            label: 'Lösung',
            value: 'solution',
            desc: (
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <img
                            src={`/sprite/spritesheet_${iteration}-min.png`}
                            width='512'
                            height='512'
                            alt=''
                        />
                        <h3 className='font-bold'>Interaktion:</h3>
                        <p>
                            'a': Automatisches Rotieren an- oder ausschalten(in
                            letzte bekannter Drehrichtung)
                        </p>
                        <p>'r': Nächtes Einzelbild anzeigen nach rechts </p>
                        <p>'l': Nächstes Einzelbild anzeigen nach links</p>
                        <br />
                        <br />
                       <p>Hinweis: Es wird ein aktueller Chromebrowser empfohlen. Aufgrund der etwas großen Bilder und meinem Server Provider, ist das initiale Laden etwas langsam.</p>
                    </div>

                    <Cat />
                </div>
            ),
        },
        {
            label: 'Dokumentation',
            value: 'documentation',
            desc: (
                <div>
                    <p>
                        Zur 2D Scheibe: Diese 2D Scheibe wurde mittels dem AI
                        Dienst von Midjourney erstellt. Durch wiederholtem
                        Probieren konnte ich eine Scheibe generieren, die
                        ausreichend rund war und Muster beinhaltete, die sich
                        bei einer Rotation nicht als störend hevortaten.
                    </p>
                    <p>
                        Angewandte Prompt-Eingabe: "2 D flat detailed beautiful
                        round circle spiral total symmetric no background":
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
                        Allgemein: Ich nutze das Metaframewok Nextjs 13, welches
                        auf React aufbaut. Ich nutze die Renderclylen des
                        Frameworks aus und kann hierdurch zu bestimmten Zeiten
                        dymanisch den Pfad zum nächsten Einzelbild anzeigen.
                        Dies findet insbesondere im useEffect Hook statt. Hier
                        wird auch gewährleistet, dass nur gültige Frames zur
                        Anzeige herangezogen werden.
                    </p>
                    <div className='grid grid-cols-3 gap-1'>
                        <img src='./carbon.png' width='400' alt='' />
                        <img src='./carbon-3.png' width='350' alt='' />
                        <img src='./carbon-2.png' width='450' alt='' />
                    </div>
                </div>
            ),
        },
        {
            label: 'Kommentare',
            value: 'comments',
            desc: `Hier ist leider noch nichts`,
        },
    ];
    return (
        <UnderlineTabs
            data={data}
            initialActiveTab={'task'}
            tabOptions={<TabOptions />}
        />
    );
};

const TabOptions: FC = () => {
    const [activeValue, setActiveValue] = useState('TaskOne');
    const storeValue = useActiveEsaStore((state) => state.setActiveEsa);
    useEffect(() => {
        storeValue(activeValue);
    }, [storeValue, activeValue]);

    return (
        <div className='w-72'>
            <Select
                name='ESA'
                label='Wähle ESA'
                value={activeValue}
                onChange={(value: string | undefined) => {
                    value && setActiveValue(value);
                    value && storeValue(value);
                }}
            >
                <Option value='TaskOne'>ESA 1</Option>
                <Option disabled value='TaskTwo'>
                    ESA 2
                </Option>
                <Option disabled value='TaskThree'>
                    ESA 3
                </Option>
            </Select>
        </div>
    );
};

interface activeEsaStore {
    activeEsa: string;
    setActiveEsa: (value: string) => void;
}

const useActiveEsaStore = create<activeEsaStore>()((set) => ({
    activeEsa: '',
    setActiveEsa: (value) => set(() => ({ activeEsa: value })),
}));
