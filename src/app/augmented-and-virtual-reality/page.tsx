'use client';
import { FC } from 'react';
import { LayoutGrid } from '../components/layoutGrid';
import { MultiLevelSidebar } from '../components/multiLevelSidebar';
import { AugAndVrTabs } from './tabs';

const AugAndVrLayout: FC = () => {
    return (
        <LayoutGrid
            navigation={<MultiLevelSidebar openSubs={2} />}
            content={<AugAndVrTabs />}
            footer={<></>}
        ></LayoutGrid>
    );
};

export default AugAndVrLayout;
