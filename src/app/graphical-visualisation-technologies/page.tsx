'use client';
import { FC } from 'react';
import { LayoutGrid } from '../components/layoutGrid';
import { MultiLevelSidebar } from '../components/multiLevelSidebar';
import { GraphicalVisualizationTabs } from './tabs';

const GraphicalVisualisationTechnologiesLayout: FC = () => {
    return (
        <LayoutGrid
            navigation={<MultiLevelSidebar openSubs={2} />}
            content={<GraphicalVisualizationTabs />}
            footer={<></>}
        ></LayoutGrid>
    );
};

export default GraphicalVisualisationTechnologiesLayout;
