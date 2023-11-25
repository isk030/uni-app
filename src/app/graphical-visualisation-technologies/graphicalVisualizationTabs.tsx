/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import { UnderlineTabs } from '../common/components/tabs';
import { useActiveEsaStore } from '../common/hooks/useActiveEsaStore';
import { DocumentationOne } from './esa-1/documentationOne';
import { SolutionOne } from './esa-1/solutionOne';
import { TaskOne } from './esa-1/taskOne';
import { DocumentationTwo } from './esa-2/documentationTwo';
import SolutionTwo from './esa-2/solutionTwo';
import { TaskTwo } from './esa-2/taskTwo';
import { DocumentationThree } from './esa-3/documentationThree';
import SolutionThree from './esa-3/solutionThree';
import { TaskThree } from './esa-3/taskThree';
import { DocumentationFour } from './esa-4/documentationFour';
import SolutionFour from './esa-4/solutionFour';
import { TaskFour } from './esa-4/taskFour';
import { DocumentationFive } from './esa-5/documentationFive';
import { SolutionFive } from './esa-5/solutionFive';
import { TaskFive } from './esa-5/taskFive';
import { DocumentationSix } from './esa-6/documentationSix';
import { SolutionSix } from './esa-6/solutionSix';
import { TaskSix } from './esa-6/taskSix';
import { GraphicalVisualizationTabOptions } from './graphicalVisualizationTabOptions';

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
            documentation: <DocumentationTwo />,
            comments: 'Hier ist noch nichts',
        },
        TaskThree: {
            task: <TaskThree />,
            idea: 'Hier ist noch nichts',
            solution: <SolutionThree />,
            documentation: <DocumentationThree />,
            comments: 'Hier ist noch nichts',
        },
        TaskFour: {
            task: <TaskFour />,
            idea: 'Hier ist noch nichts',
            solution: <SolutionFour />,
            documentation: <DocumentationFour />,
            comments: 'Hier ist noch nichts',
        },
        TaskFive: {
            task: <TaskFive />,
            idea: 'Hier ist noch nichts',
            solution: <SolutionFive />,
            documentation: <DocumentationFive />,
            comments: 'Hier ist noch nichts',
        },
        TaskSix: {
            task: <TaskSix />,
            idea: 'Hier ist noch nichts',
            solution: <SolutionSix />,
            documentation: <DocumentationSix />,
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
            tabOptions={<GraphicalVisualizationTabOptions />}
        />
    );
};
