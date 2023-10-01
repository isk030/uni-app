'use client';
import { FC } from 'react';
import { LayoutGrid } from '../components/layoutGrid';
import { MultiLevelSidebar } from '../components/multiLevelSidebar';
import { UnderlineTabs } from '../components/tabs';

const DeepLearningLayout: FC = () => {
    return (
        <LayoutGrid
            navigation={<MultiLevelSidebar openSubs={2} />}
            content={<UnderlineTabs />}
            footer={<></>}
        ></LayoutGrid>
    );
};

export default DeepLearningLayout;
