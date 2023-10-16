'use client';
import { FC } from 'react';
import { LayoutGrid } from '../components/layoutGrid';
import { MultiLevelSidebar } from '../components/multiLevelSidebar';

const DeepLearningLayout: FC = () => {
    return (
        <LayoutGrid
            navigation={<MultiLevelSidebar openSubs={2} />}
            content={<h1>Under construction</h1>}
            footer={<></>}
        ></LayoutGrid>
    );
};

export default DeepLearningLayout;
