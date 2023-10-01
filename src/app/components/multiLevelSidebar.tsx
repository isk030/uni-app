'use client';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { InboxIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from '@material-tailwind/react';
import React from 'react';

export function MultiLevelSidebar() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className='h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
            <div className='mb-2 p-4'>
                <Typography
                    className='text-center'
                    variant='h5'
                    color='blue-gray'
                >
                    UniApp
                </Typography>
            </div>
            <List>
                <Accordion
                    open={open === 2}
                    className='wrap-full'
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 2 ? 'rotate-180' : ''
                            }`}
                        />
                    }
                >
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className='h-5 w-5' />
                        </ListItemPrefix>
                        Iskender Dilaver
                    </ListItem>
                    <ListItem className='p-0' selected={open === 2}>
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className='border-b-0 p-3'
                        >
                            <ListItemPrefix>
                                <ShoppingBagIcon className='h-5 w-5' />
                            </ListItemPrefix>
                            <Typography
                                color='blue-gray'
                                className='mr-auto font-normal'
                            >
                                Studienmodule
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className='py-1'>
                        <List className='p-0'>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Augmented and Virtual Reality
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Deep Learning
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Deep Learning
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Graphical Visualisation Technologies
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Künstliche Intelligenz
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Mobile Application Development
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Motion Design
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
            </List>
        </Card>
    );
}
