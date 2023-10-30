'use client';
import { FC } from 'react';
import { LayoutGrid } from './common/components/layoutGrid';
import { MultiLevelSidebar } from './common/components/multiLevelSidebar';

const Home: FC = () => {
    return (
        <LayoutGrid
            navigation={<MultiLevelSidebar />}
            content={<></>}
            footer={<></>}
        ></LayoutGrid>
    );
};

export default Home;
