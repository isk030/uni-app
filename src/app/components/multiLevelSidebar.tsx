'use client';
import {
    faBookOpen,
    faBrain,
    faClapperboard,
    faCubes,
    faMobile,
    faPerson,
    faRobot,
    faVrCardboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
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
import Link from 'next/link';
import { FC, useState } from 'react';

type MultiLevelSidebarProps = {
    openSubs?: number;
};

export const MultiLevelSidebar: FC<MultiLevelSidebarProps> = ({
    openSubs = 0,
}) => {
    const [open, setOpen] = useState(openSubs);

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
                    <Link href='/'>Uni-App</Link>
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
                            <FontAwesomeIcon
                                className='h-5 w-5'
                                icon={faPerson}
                            />
                        </ListItemPrefix>

                        <Link href='/personal'>Iskender Dilaver</Link>
                    </ListItem>
                    <ListItem className='p-0' selected={open === 2}>
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className='border-b-0 p-3'
                        >
                            <ListItemPrefix>
                                <FontAwesomeIcon
                                    className='h-5 w-5'
                                    icon={faBookOpen}
                                />
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
                                    <FontAwesomeIcon
                                        className='h-5 w-5'
                                        icon={faVrCardboard}
                                    />
                                </ListItemPrefix>
                                <Link href='/augmented-and-virtual-reality'>
                                    Augmented and Virtual Reality
                                </Link>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <FontAwesomeIcon
                                        className='h-5 w-5'
                                        icon={faBrain}
                                    />
                                </ListItemPrefix>
                                <Link href='/deep-learning'>Deep Learning</Link>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <FontAwesomeIcon
                                        className='h-5 w-5'
                                        icon={faCubes}
                                    />
                                </ListItemPrefix>
                                <Link href='/graphical-visualisation-technologies'>
                                    Graphical Visualisation Technologies
                                </Link>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <FontAwesomeIcon
                                        className='h-5 w-5'
                                        icon={faRobot}
                                    />
                                </ListItemPrefix>
                                <Link href='/ki'>Künstliche Intelligenz</Link>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <FontAwesomeIcon
                                        className='h-5 w-5'
                                        icon={faMobile}
                                    />
                                </ListItemPrefix>
                                <Link href='/mobile-application-development'>
                                    Mobile Application Development
                                </Link>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <FontAwesomeIcon
                                        className='h-5 w-5'
                                        icon={faClapperboard}
                                    />
                                </ListItemPrefix>
                                <Link href='/motion-design'>Motion Design</Link>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
            </List>
        </Card>
    );
};
