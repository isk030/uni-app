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

export const GraphicalVisualizationTabs = () => {
    const activeValue: string = useActiveEsaStore((state) => state.activeEsa);

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
            desc: `Das ist die Idee`,
        },
        {
            label: 'Lösung',
            value: 'solution',
            desc: `Das ist die Lösung`,
        },
        {
            label: 'Dokumentation',
            value: 'documentation',
            desc: `Das ist die Dokumentation`,
        },
        {
            label: 'Kommentare',
            value: 'comments',
            desc: `Hier sind Kommentare`,
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
                label='Wähle ESAs'
                value={activeValue}
                onChange={(value: string | undefined) => {
                    value && setActiveValue(value);
                    value && storeValue(value);
                }}
            >
                <Option value='TaskOne'>ESA 1</Option>
                <Option value='TaskTwo'>ESA 2</Option>
                <Option value='TaskThree'>ESA 3</Option>
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
