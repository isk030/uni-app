/* eslint-disable @next/next/no-img-element */
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import { FC } from 'react';
type Props = {
    onClick: (imageUrl: string) => void;
};
export const ImageCards: FC<Props> = ({ onClick }) => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <Card
                className='w-64 h-64'
                onClick={() => {
                    onClick('./birb.jpg');
                }}
            >
                <CardHeader floated={false} className='h-80'>
                    <img src='./birb.jpg' alt='profile-picture' />
                </CardHeader>
                <CardBody className='text-center'>Hallo</CardBody>
            </Card>
            <Card className='w-64 h-64'>
                <CardHeader floated={false} className='h-80'>
                    <img src='./birb.jpg' alt='profile-picture' />
                </CardHeader>
                <CardBody className='text-center'>Hallo</CardBody>
            </Card>
            <Card className='w-64 h-64'>
                <CardHeader floated={false} className='h-80'>
                    <img src='./birb.jpg' alt='profile-picture' />
                </CardHeader>
                <CardBody className='text-center'>Hallo</CardBody>
            </Card>
            <Card className='w-64 h-64'>
                <CardHeader floated={false} className='h-80'>
                    <img src='./birb.jpg' alt='profile-picture' />
                </CardHeader>
                <CardBody className='text-center'>Hallo</CardBody>
            </Card>
            <Card className='w-64 h-64'>
                <CardHeader floated={false} className='h-80'>
                    <img src='./birb.jpg' alt='profile-picture' />
                </CardHeader>
                <CardBody className='text-center'>Hallo</CardBody>
            </Card>
            <Card className='w-64 h-64'>
                <CardHeader floated={false} className='h-80'>
                    <img src='./birb.jpg' alt='profile-picture' />
                </CardHeader>
                <CardBody className='text-center'>Hallo</CardBody>
            </Card>
        </div>
    );
};
