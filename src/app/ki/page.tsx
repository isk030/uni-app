'use client';
import { FC } from 'react';
import { LayoutGrid } from '../common/components/layoutGrid';
import { MultiLevelSidebar } from '../common/components/multiLevelSidebar';

const KiLayout: FC = () => {
    return (
        <LayoutGrid
            navigation={<MultiLevelSidebar openSubs={2} />}
            content={<h1>Under construction</h1>}
            footer={<></>}
        ></LayoutGrid>
    );
};

export default KiLayout;
