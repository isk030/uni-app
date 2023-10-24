/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';
import { UnderlineTabs } from '../components/tabs';
import { DocumentationOne } from './esa-1/documentation';
import { SolutionOne } from './esa-1/solution';
import { TaskOne } from './esa-1/taskOne';
import { TaskTwo } from './esa-2/taskTwo';
import { TaskThree } from './esa-3/taskThree';
import { useActiveEsaStore } from './hooks/useActiveEsaStore';
import { TabOptions } from './tabOptions';

type ComponentType = {
    [key: string]: JSX.Element | undefined;
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

    const components: ComponentType = {
        TaskOne: <TaskOne />,
        TaskTwo: <TaskTwo />,
        TaskThree: <TaskThree />,
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

    const data = [
        {
            label: 'Aufgabenstellung',
            value: 'task',
            desc: components[activeValue],
        },
        {
            label: 'Idee',
            value: 'idea',
            desc: `Hier ist leider nichts`,
        },
        {
            label: 'Lösung',
            value: 'solution',
            desc: <SolutionOne iteration={iteration} />,
        },
        {
            label: 'Dokumentation',
            value: 'documentation',
            desc: <DocumentationOne />,
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
