/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import { UnderlineTabs } from '../components/tabs';
import { DocumentationOne } from './esa-1/documentationOne';
import { SolutionOne } from './esa-1/solutionOne';
import { TaskOne } from './esa-1/taskOne';
import SolutionTwo from './esa-2/solutionTwo';
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

    const dataComponents: DataComponentsType = {
        TaskOne: {
            task: <TaskOne />,
            idea: 'Hier ist noch nichts',
            solution: <SolutionOne />,
            documentation: <DocumentationOne />,
            comments: 'Hier ist noch nichts',
        },
        TaskTwo: {
            task: <TaskTwo />,
            idea: 'Hier ist noch nichts',
            solution: <SolutionTwo />,
            documentation: 'Hier ist noch nichts',
            comments: 'Hier ist noch nichts',
        },
        TaskThree: {
            task: <TaskThree />,
            idea: 'Hier ist noch nichts',
            solution: 'Hier ist noch nichts',
            documentation: 'Hier ist noch nichts',
            comments: 'Hier ist noch nichts',
        },
    };

    const data = [
        {
            label: 'Aufgabenstellung',
            value: 'task',
            desc: dataComponents[activeValue]?.task,
        },
        {
            label: 'Idee',
            value: 'idea',
            desc: `Hier ist noch nichts`,
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
