import { Option, Select } from '@material-tailwind/react';
import { FC, useEffect, useState } from 'react';
import { useActiveEsaStore } from '../common/hooks/useActiveEsaStore';

export const DeepLearningTabOptions: FC = () => {
    const [activeValue, setActiveValue] = useState('TaskOne');
    const storeValue = useActiveEsaStore((state) => state.setActiveEsa);
    useEffect(() => {
        storeValue(activeValue);
    }, [storeValue, activeValue]);

    return (
        <div className='w-72'>
            <Select
                name='ESA'
                label='Wähle ESA'
                value={activeValue}
                onChange={(value: string | undefined) => {
                    value && setActiveValue(value);
                    value && storeValue(value);
                }}
            >
                <Option value='TaskOne'>ESA 1</Option>
                <Option value='TaskTwo'>ESA 2</Option>
                <Option disabled value='TaskThree'>
                    ESA 3
                </Option>
            </Select>
        </div>
    );
};
