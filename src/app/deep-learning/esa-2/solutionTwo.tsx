/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @next/next/no-img-element */
'use client';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Typography,
} from '@material-tailwind/react';
import { FC, useState } from 'react';
import useFetch from '../esa-1/useFetch';
import { Chart2 } from './chart';

type BodyType = {
    N: number;
    noise_variance: number;
    hidden_layer_option: Array<number>;
    activation_funcs_combination: Array<string>;
    lr: number;
    optimizer_choice: string;
    epoch: number;
    regularization: number;
};

export const SolutionTwo: FC = () => {
    const [body, setBody] = useState({
        N: 5,
        noise_variance: 0.1,
        hidden_layer_option: [10, 10],
        activation_funcs_combination: ['relu', 'elu'],
        lr: 0.1,
        optimizer_choice: 'SGD',
        epoch: 1000,
        regularization: 0.0001,
    });
    const [chartData, setChartData] = useState([]);

    const fetchModel = async () => {
        try {
            // Fetch the base64-encoded image from the server
            const response = await fetch(
                process.env.DL_API_BASE_URL + 'api/dl/esa2/training',
                {
                    method: 'POST', // Die Methode
                    headers: {
                        'Content-Type': 'application/json', // Der Content-Type Header ist wichtig, wenn Sie JSON senden
                    },
                    body: JSON.stringify(body),
                } // Konvertieren der Daten in einen JSON-String
            ); // Replace with the actual server endpoint

            if (response.ok) {
                // Convert the response to a base64-encoded data URL
                const data = (await response.json()) as unknown;
                window.console.log(data);
                setChartData(data as []);
            } else {
                console.error('Error fetching base64 image:', response.status);
            }
        } catch (error) {
            console.error('Error fetching base64 image:', error);
        }
    };

    const { data, loading, error } = useFetch<
        [
            Array<{
                index: number;
                red?: number;
                blue?: number;
                green?: number;
            }>,
            number,
        ]
    >(process.env.DL_API_BASE_URL + 'api/dl/esa2/training', {
        method: 'POST',
        body: body,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className='grid grid-cols-1 gap-4 '>
                <Chart2
                    data={
                        data && chartData.length === 0 ? data[0] : chartData[0]
                    }
                />
                <div className='grid grid-cols-3 gap-4 '>
                    <div className='justify-self-start'>
                        Total Loss: {data && chartData.length === 0 && data[1]}
                    </div>
                    <Button onClick={fetchModel}>Trainieren</Button>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='grid grid-cols-6 gap-4 text-center'>
                        <Card className='mt-6 w-full col-span-2 '>
                            <CardBody className='mx-auto text-center'>
                                <Typography
                                    variant='h5'
                                    color='blue-gray'
                                    className='mb-2'
                                >
                                    Samples (N)
                                </Typography>
                                <ButtonGroup
                                    color='blue'
                                    className='justify-center'
                                >
                                    <Button
                                        onClick={() =>
                                            setBody({ ...body, N: 5 })
                                        }
                                        className={
                                            body.N === 5 ? 'bg-gray-500' : ''
                                        }
                                    >
                                        5
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({ ...body, N: 20 })
                                        }
                                        className={
                                            body.N === 20 ? 'bg-gray-500' : ''
                                        }
                                    >
                                        20
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({ ...body, N: 50 })
                                        }
                                        className={
                                            body.N === 50 ? 'bg-gray-500' : ''
                                        }
                                    >
                                        50
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({ ...body, N: 100 })
                                        }
                                        className={
                                            body.N === 100 ? 'bg-gray-500' : ''
                                        }
                                    >
                                        100
                                    </Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                        <Card className='mt-6 w-full '>
                            <CardBody className='mx-auto text-center'>
                                <Typography
                                    variant='h5'
                                    color='blue-gray'
                                    className='mb-2'
                                >
                                    Rauschen
                                </Typography>
                                <ButtonGroup
                                    color='red'
                                    className='justify-center'
                                >
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                noise_variance: 0.1,
                                            })
                                        }
                                        className={
                                            body.noise_variance === 0.1
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        0.1
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                noise_variance: 0.3,
                                            })
                                        }
                                        className={
                                            body.noise_variance === 0.3
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        0.3
                                    </Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                        <Card className='mt-6 w-full '>
                            <CardBody className=' text-center'>
                                <Typography
                                    variant='h5'
                                    color='blue-gray'
                                    className='mb-2'
                                >
                                    Lernrate
                                </Typography>
                                <ButtonGroup
                                    color='orange'
                                    className='justify-center'
                                >
                                    <Button
                                        onClick={() =>
                                            setBody({ ...body, lr: 0.1 })
                                        }
                                        className={
                                            body.lr === 0.1 ? 'bg-gray-500' : ''
                                        }
                                    >
                                        0.1
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({ ...body, lr: 0.01 })
                                        }
                                        className={
                                            body.lr === 0.01
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        0.01
                                    </Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                        <Card className='mt-6 w-full col-span-2 '>
                            <CardBody className='mx-auto text-center'>
                                <Typography
                                    variant='h5'
                                    color='blue-gray'
                                    className='mb-2'
                                >
                                    Epoch
                                </Typography>
                                <ButtonGroup
                                    color='gray'
                                    className='justify-center'
                                >
                                    <Button
                                        onClick={() =>
                                            setBody({ ...body, epoch: 200 })
                                        }
                                        className={
                                            body.epoch === 200
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        200
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({ ...body, epoch: 500 })
                                        }
                                        className={
                                            body.epoch === 500
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        500
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({ ...body, epoch: 1000 })
                                        }
                                        className={
                                            body.epoch === 1000
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        1000
                                    </Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                        <Card className='mt-6 w-full col-span-2 flex justify-items-center'>
                            <CardBody className='mx-auto '>
                                <Typography
                                    variant='h5'
                                    color='blue-gray'
                                    className='mb-2'
                                >
                                    Hidden Layer 1
                                </Typography>
                                <Typography color='blue-gray' className='mb-2'>
                                    Neuronen
                                </Typography>
                                <ButtonGroup
                                    color='green'
                                    className='justify-center'
                                >
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                hidden_layer_option: [
                                                    10,
                                                    body.hidden_layer_option[1],
                                                ],
                                            })
                                        }
                                        className={
                                            body.hidden_layer_option[0] === 10
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        10
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                hidden_layer_option: [
                                                    20,
                                                    body.hidden_layer_option[1],
                                                ],
                                            })
                                        }
                                        className={
                                            body.hidden_layer_option[0] === 20
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        20
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                hidden_layer_option: [
                                                    50,
                                                    body.hidden_layer_option[1],
                                                ],
                                            })
                                        }
                                        className={
                                            body.hidden_layer_option[0] === 50
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        50
                                    </Button>
                                </ButtonGroup>
                                <Typography
                                    color='blue-gray'
                                    className='mb-2 mt-2'
                                >
                                    Activation Func
                                </Typography>
                                <ButtonGroup
                                    color='green'
                                    className='justify-center'
                                >
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                activation_funcs_combination: [
                                                    'relu',
                                                    body
                                                        .activation_funcs_combination[1],
                                                ],
                                            })
                                        }
                                        className={
                                            body
                                                .activation_funcs_combination[0] ===
                                            'relu'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        relu
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                activation_funcs_combination: [
                                                    'sigmoid',
                                                    body
                                                        .activation_funcs_combination[1],
                                                ],
                                            })
                                        }
                                        className={
                                            body
                                                .activation_funcs_combination[0] ===
                                            'sigmoid'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        sigmoid
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                activation_funcs_combination: [
                                                    'tanh',
                                                    body
                                                        .activation_funcs_combination[1],
                                                ],
                                            })
                                        }
                                        className={
                                            body
                                                .activation_funcs_combination[0] ===
                                            'tanh'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        tanh
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                activation_funcs_combination: [
                                                    'elu',
                                                    body
                                                        .activation_funcs_combination[1],
                                                ],
                                            })
                                        }
                                        className={
                                            body
                                                .activation_funcs_combination[0] ===
                                            'elu'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        elu
                                    </Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                        <Card className='mt-6 w-full col-span-2 flex justify-items-center'>
                            <CardBody className='mx-auto '>
                                <Typography
                                    variant='h5'
                                    color='blue-gray'
                                    className='mb-2'
                                >
                                    Hidden Layer 2
                                </Typography>
                                <Typography color='blue-gray' className='mb-2'>
                                    Neuronen
                                </Typography>
                                <ButtonGroup
                                    color='purple'
                                    className='justify-center'
                                >
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                hidden_layer_option: [
                                                    body.hidden_layer_option[0],
                                                    10,
                                                ],
                                            })
                                        }
                                        className={
                                            body.hidden_layer_option[1] === 10
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        10
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                hidden_layer_option: [
                                                    body.hidden_layer_option[0],
                                                    20,
                                                ],
                                            })
                                        }
                                        className={
                                            body.hidden_layer_option[1] === 20
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        20
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                hidden_layer_option: [
                                                    body.hidden_layer_option[0],
                                                    50,
                                                ],
                                            })
                                        }
                                        className={
                                            body.hidden_layer_option[1] === 50
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        50
                                    </Button>
                                </ButtonGroup>
                                <Typography
                                    color='blue-gray'
                                    className='mb-2 mt-2'
                                >
                                    Activation Func
                                </Typography>
                                <ButtonGroup
                                    color='purple'
                                    className='justify-center'
                                >
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                activation_funcs_combination: [
                                                    body
                                                        .activation_funcs_combination[0],
                                                    'relu',
                                                ],
                                            })
                                        }
                                        className={
                                            body
                                                .activation_funcs_combination[1] ===
                                            'relu'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        relu
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                activation_funcs_combination: [
                                                    body
                                                        .activation_funcs_combination[0],
                                                    'sigmoid',
                                                ],
                                            })
                                        }
                                        className={
                                            body
                                                .activation_funcs_combination[1] ===
                                            'sigmoid'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        sigmoid
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                activation_funcs_combination: [
                                                    body
                                                        .activation_funcs_combination[0],
                                                    'tanh',
                                                ],
                                            })
                                        }
                                        className={
                                            body
                                                .activation_funcs_combination[1] ===
                                            'tanh'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        tanh
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                activation_funcs_combination: [
                                                    body
                                                        .activation_funcs_combination[0],
                                                    'elu',
                                                ],
                                            })
                                        }
                                        className={
                                            body
                                                .activation_funcs_combination[1] ===
                                            'elu'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        elu
                                    </Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                        <Card className='mt-6 w-full col-span-2 flex justify-items-center'>
                            <CardBody className='mx-auto text-center'>
                                <Typography color='blue-gray' className='mb-2'>
                                    Optimierer
                                </Typography>
                                <ButtonGroup
                                    color='lime'
                                    className='justify-center'
                                >
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                optimizer_choice: 'SGD',
                                            })
                                        }
                                        className={
                                            body.optimizer_choice === 'SGD'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        SGD
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                optimizer_choice: 'Adam',
                                            })
                                        }
                                        className={
                                            body.optimizer_choice === 'Adam'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        Adam
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                optimizer_choice: 'RMSprop',
                                            })
                                        }
                                        className={
                                            body.optimizer_choice === 'RMSprop'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        RMSprop
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                optimizer_choice: 'Adagrad',
                                            })
                                        }
                                        className={
                                            body.optimizer_choice === 'Adagrad'
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        Adagrad
                                    </Button>
                                </ButtonGroup>
                                <Typography
                                    color='blue-gray'
                                    className='mb-2 mt-2'
                                >
                                    L2 Regulation
                                </Typography>
                                <ButtonGroup
                                    color='lime'
                                    className='justify-center'
                                >
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                regularization: 0.001,
                                            })
                                        }
                                        className={
                                            body.regularization === 0.001
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        0.001
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setBody({
                                                ...body,
                                                regularization: 0.0001,
                                            })
                                        }
                                        className={
                                            body.regularization === 0.0001
                                                ? 'bg-gray-500'
                                                : ''
                                        }
                                    >
                                        0.0001
                                    </Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};
