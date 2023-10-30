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
    desc: JSX.Element | string | undefined;
};

type TabData = {
    data: Array<TabElement>;
    initialActiveTab: string | JSX.Element;
    tabOptions?: JSX.Element;
};

export const UnderlineTabs: FC<TabData> = ({
    data,
    initialActiveTab,
    tabOptions,
}) => {
    const [activeTab, setActiveTab] = useState(initialActiveTab || 'html');
    const dataContainer = data || [];

    return (
        <Card className='h-[calc(100vh-2rem)] w-full my-4 p-4  shadow-xl shadow-blue-gray-900/5'>
            {tabOptions && tabOptions}
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
                            value &&
                            desc && (
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
