import { UnderlineTabs } from '../components/tabs';

const data = [
    {
        label: 'Aufgabenstellung',
        value: 'task',
        desc: `Das ist die Aufgabe`,
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
export const AugAndVrTabs = () => {
    return <UnderlineTabs data={data} />;
};
