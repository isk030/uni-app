'use client';
import { FC } from 'react';
import { LayoutGrid } from './components/layoutGrid';
import { MultiLevelSidebar } from './components/multiLevelSidebar';

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
