'use client';
import { FC } from 'react';
type LayoutGridProps = {
    navigation: React.ReactNode;
    content: React.ReactNode;
    footer: React.ReactNode;
};
export const LayoutGrid: FC<LayoutGridProps> = ({
    navigation,
    content,

    footer,
}) => {
    return (
        <>
            <div className='flex min-h-screen flex-col '>
                <div className='flex flex-1 flex-row'>
                    <main className='flex-1 bg-blue-100  p-0 pr-4'>
                        {content}
                    </main>
                    <nav className='order-first bg-blue-100 p-4 w-[18rem]'>
                        {navigation}
                    </nav>
                </div>
                <footer className='bg-blue-200 p-4'>{footer}</footer>
            </div>
        </>
    );
};
