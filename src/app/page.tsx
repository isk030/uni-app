'use client';
import { Button, Drawer } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { FC, useState } from 'react';

const Home: FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Drawer
                title='Basic Drawer'
                placement='bottom'
                onClose={onClose}
                open={open}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

            {
                <>
                    <Button
                        type='primary'
                        onClick={showDrawer}
                        style={{
                            position: 'absolute',

                            margin: 'auto',
                            top: '10%',
                            left: '50%',
                            zIndex: '10',
                        }}
                    >
                        Open
                    </Button>
                </>
            }

            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </>
    );
};

export default Home;
