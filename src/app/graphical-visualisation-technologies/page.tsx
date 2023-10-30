'use client';
import { FC } from 'react';
import { LayoutGrid } from '../common/components/layoutGrid';
import { MultiLevelSidebar } from '../common/components/multiLevelSidebar';
import { GraphicalVisualizationTabs } from './graphicalVisualizationTabs';

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
