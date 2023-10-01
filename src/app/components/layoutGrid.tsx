import { FC } from 'react';
type LayoutGridProps = {
    header: React.ReactNode;
    navigation: React.ReactNode;
    content: React.ReactNode;
    side: React.ReactNode;
    footer: React.ReactNode;
};
export const LayoutGrid: FC<LayoutGridProps> = ({
    header,
    navigation,
    content,
    side,
    footer,
}) => {
    return (
        <div className='flex min-h-screen flex-col'>
            <header className='bg-blue-200 p-4'>{header}</header>
            <div className='flex flex-1 flex-row'>
                <main className='flex-1 bg-blue-50 p-4'>{content}</main>
                <nav className='order-first min-w-1/5 bg-blue-100 p-4'>
                    {navigation}
                </nav>
                <aside className='w-32 bg-blue-100 p-4'>{side}</aside>
            </div>
            <footer className='bg-blue-200 p-4'>{footer}</footer>
        </div>
    );
};
