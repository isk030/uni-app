/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import { UnderlineTabs } from '../common/components/tabs';
import { useActiveEsaStore } from '../common/hooks/useActiveEsaStore';
import { DocumentationTwo } from '../graphical-visualisation-technologies/esa-2/documentationTwo';
import SolutionTwo from '../graphical-visualisation-technologies/esa-2/solutionTwo';
import { TaskTwo } from '../graphical-visualisation-technologies/esa-2/taskTwo';
import { DocumentationThree } from '../graphical-visualisation-technologies/esa-3/documentationThree';
import SolutionThree from '../graphical-visualisation-technologies/esa-3/solutionThree';
import { TaskThree } from '../graphical-visualisation-technologies/esa-3/taskThree';
import { DeepLearningTabOptions } from './deepLearningTabOptions';
import { DocumentationOne } from './esa-1/documentationOne';
import { SolutionOne } from './esa-1/solutionOne';
import { TaskOne } from './esa-1/taskOne';

type DataComponentsType = {
    [key: string]: {
        [key: string]: JSX.Element | string | undefined;
    };
};

export const DeepLearningTabs = () => {
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
            tabOptions={<DeepLearningTabOptions />}
        />
    );
};
