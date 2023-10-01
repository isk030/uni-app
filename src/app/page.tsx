import { FC } from 'react';
import { LayoutGrid } from './components/layoutGrid';
import { MultiLevelSidebar } from './components/multiLevelSidebar';

const Home: FC = () => {
    return (
        <LayoutGrid
            header={<></>}
            navigation={<MultiLevelSidebar />}
            content={<></>}
            side={<></>}
            footer={<></>}
        ></LayoutGrid>
    );
};

export default Home;
