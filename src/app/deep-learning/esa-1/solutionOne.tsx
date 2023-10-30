/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { PhotoIcon } from '@heroicons/react/24/outline';
import { FC, useEffect, useState } from 'react';
import Chart from './chart';

export const SolutionOne: FC = () => {
    // const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [data, setData] = useState<Array<{ name: string; value: number }>>(
        []
    );

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        void fetch('http://127.0.0.1:8000/')
            .then((res) => res.json())
            .then((data2: Array<{ name: string; value: number }>) => {
                setData(data2);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            // setSelectedImage(file);
            setPreviewImage(imageUrl);
        }
    };
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div>Hallo</div>

            <div>
                <div className='col-span-full'>
                    <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                        <div className='text-center'>
                            {!previewImage ? (
                                <PhotoIcon
                                    className='mx-auto h-12 w-12 text-gray-300'
                                    aria-hidden='true'
                                />
                            ) : (
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
                                        name='file-upload'
                                        type='file'
                                        className='sr-only max-height: 10%'
                                        onChange={handleImageSelect}
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
                <div className='h-96'>
                    <Chart data={data} />
                </div>
            </div>
        </div>
    );
};
