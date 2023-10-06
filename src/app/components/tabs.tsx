'use client';
import {
    Card,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from '@material-tailwind/react';
import { FC, useState } from 'react';

type TabElement = {
    label: string;
    value: string;
    desc: string | JSX.Element;
};

type TabData = {
    data: Array<TabElement>;
    initialActiveTab: string | JSX.Element;
    menu?: JSX.Element;
};

export const UnderlineTabs: FC<TabData> = ({
    data,
    initialActiveTab,
    menu,
}) => {
    const [activeTab, setActiveTab] = useState(initialActiveTab || 'html');
    const dataContainer = data || [
        {
            label: 'HTML',
            value: 'html',
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: 'React',
            value: 'react',
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: 'Vue',
            value: 'vue',
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: 'Angular',
            value: 'angular',
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: 'Svelte',
            value: 'svelte',
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

    return (
        <Card className='h-[calc(100vh-2rem)] w-full my-4 p-4  shadow-xl shadow-blue-gray-900/5'>
            {menu && menu}
            <br />
            <Tabs value={activeTab}>
                <TabsHeader
                    className='rounded-none border-b border-blue-gray-50 bg-transparent p-0'
                    indicatorProps={{
                        className:
                            'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
                    }}
                >
                    {dataContainer.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={
                                activeTab === value ? 'text-gray-900' : ''
                            }
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {dataContainer.map(
                        ({ value, desc }) =>
                            value && (
                                <TabPanel key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            )
                    )}
                </TabsBody>
            </Tabs>
        </Card>
    );
};
