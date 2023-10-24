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

type DataComponentsType = {
    [key: string]: {
        [key: string]: JSX.Element | string | undefined;
    };
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

    const dataComponents: DataComponentsType = {
        TaskOne: {
            task: <TaskOne />,
            idea: '',
            solution: <SolutionOne iteration={iteration} />,
            documentation: <DocumentationOne />,
            comments: '',
        },
        TaskTwo: {
            task: <TaskTwo />,
            idea: '',
            solution: '',
            documentation: '',
            comments: '',
        },
        TaskThree: {
            task: <TaskThree />,
            idea: '',
            solution: '',
            documentation: '',
            comments: '',
        },
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
            desc: dataComponents[activeValue]?.task,
        },
        {
            label: 'Idee',
            value: 'idea',
            desc: `Hier ist leider nichts`,
        },
        {
            label: 'Lösung',
            value: 'solution',
            desc: dataComponents[activeValue]?.solution,
        },
        {
            label: 'Dokumentation',
            value: 'documentation',
            desc: dataComponents[activeValue]?.documentation,
        },
        {
            label: 'Kommentare',
            value: 'comments',
            desc: `Hier ist noch nichts`,
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
