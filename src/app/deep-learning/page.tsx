'use client';
import { FC } from 'react';
import { LayoutGrid } from '../common/components/layoutGrid';
import { MultiLevelSidebar } from '../common/components/multiLevelSidebar';
import { DeepLearningTabs } from './deepLearningTabs';

const DeepLearningLayout: FC = () => {
    return (
        <LayoutGrid
            navigation={<MultiLevelSidebar openSubs={2} />}
            content={<DeepLearningTabs />}
            footer={<></>}
        ></LayoutGrid>
    );
};

export default DeepLearningLayout;
