import React, { useState } from 'react';
import { AutoComplete, Button, Input, Space, Tooltip } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { AliwangwangOutlined, AudioOutlined } from '@ant-design/icons'
import { SizeType } from 'antd/es/config-provider/SizeContext';

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);
const searchResult = (query: string) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <a
                                href={`https://s.taobao.com/search?q=${query}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {category}
                            </a>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });

export const AIAssistantInput = () => {
    const [size, setSize] = useState<SizeType>('large');
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    return (
        <div className='flex gap-2.5'>
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{
                    width: 400,
                }}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
                size='large'

            >
                <Input size='large' placeholder="Que desear hacer !" suffix={
                    <Tooltip title="Comando por voz">
                        <AudioOutlined onClick={() => console.log('Grabando ...')} style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                } />

            </AutoComplete >

            <Button className='backdrop-blur-2xl shadow-md' size={size} icon={<AliwangwangOutlined title='Asistente Artificial' />}>
                ExaIA
            </Button>
        </div>
    );
};

