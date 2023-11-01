import { PhotoIcon } from '@heroicons/react/24/outline';
import { Button } from '@material-tailwind/react';
import { FC, useState } from 'react';
import { Chart, DataType } from './chart';
import { ImageCard } from './imageCard';
import useFetch from './useFetch';

export const SolutionOne: FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const { data, loading, fetchError } = useFetch('/api/dl');
    const [varData, setVarData] = useState(data);

    if (loading) {
        return <div>Lade...</div>;
    }
    if (fetchError !== '') {
        return <div>{fetchError}</div>;
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(file);
            setPreviewImage(imageUrl);
        }
    };
    const handleImageUpload = async () => {
        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            try {
                const response = await fetch('/api/dl', {
                    method: 'POST',
                    body: formData,
                });
                if (!response.ok) {
                    alert('Fehler beim Hochladen des Bildes.');
                }

                const res = (await response.json()) as DataType;
                setVarData(res);
                window.console.log(res);
            } catch (error) {
                console.error('Fehler beim Hochladen des Bildes:', error);
            }
        }
    };

    return (
        <div className='grid grid-cols-2 gap-4 '>
            <div>
                <ImageCard />
            </div>
            <div className='grid grid-cols-1 gap-4'>
                <div className='col-span-full'>
                    <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                        <div className='text-center'>
                            {!previewImage ? (
                                <PhotoIcon
                                    className='mx-auto h-12 w-12 text-gray-300'
                                    aria-hidden='true'
                                />
                            ) : (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    className='mx-auto max-h-64'
                                    src={previewImage}
                                    alt=''
                                />
                            )}
                            <div className='mt-4 flex text-sm leading-6 text-gray-600 text-center justify-center'>
                                <label
                                    htmlFor='file-upload'
                                    className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                                >
                                    <span>Upload a file</span>
                                    <input
                                        id='file-upload'
                                        type='file'
                                        name='image'
                                        accept='.png, .jpg'
                                        className='sr-only max-height: 10%'
                                        onChange={handleImageChange}
                                    />
                                </label>
                                <p className='pl-1'>or drag and drop</p>
                            </div>

                            <p className='text-xs leading-5 text-gray-600'>
                                PNG, JPG up to 10MB
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-full justify-self-center'>
                    <Button
                        variant='gradient'
                        className='flex  gap-3'
                        onClick={handleImageUpload}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='h-5 w-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'
                            />
                        </svg>
                        Classify Image
                    </Button>
                </div>
                <div className='h-96 col-span-full'>
                    <Chart data={varData.length ? varData : data} />
                </div>
            </div>
        </div>
    );
};
