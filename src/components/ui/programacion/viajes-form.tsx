import React, { useState } from 'react'
import { Button, Form, Input, Select, DatePicker, TimePicker } from 'antd'
import { CalendarOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
const { Option } = Select;
const format = 'HH:mm';
const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};
const onTimeChange = (time: any, timeString: any) => {
    console.log(time, timeString);
}

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
export function ViajesForm() {
    const [form] = Form.useForm();

    const onRutaChange = (value: string) => {
        switch (value) {
            case 'Ayacucho - Huancayo':
                form.setFieldsValue({ ruta: 'Ayacucho - Huancayo' });
                break;
            case 'Huancayo - Ayacucho':
                form.setFieldsValue({ ruta: 'Huancayo - Ayacucho' });
                break;
            default:
        }
    };
    const onBusChange = (value: string) => {
        switch (value) {
            case 'CV2-987':
                form.setFieldsValue({ bus: 'CV2-987' });
                break;
            case 'B9Z-78A':
                form.setFieldsValue({ bus: 'B9Z-78A' });
                break;
            default:
        }
    }

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (


        <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}

            style={{ maxWidth: 300 }}
        >
            <Form.Item name="ruta" label="Ruta" rules={[{ required: true, message: 'La ruta es requerida' }]}>
                <Select
                    placeholder="Ruta"
                    onChange={onRutaChange}
                    allowClear
                >
                    <Option value="Ayacucho - Huancayo">Ayacucho - Huancayo </Option>
                    <Option value="Huancayo - Ayacucho">Huancayo - Ayacucho</Option>
                </Select>
            </Form.Item>
            <Form.Item name="bus" label="Bus" rules={[{ required: true, message: 'El bus es requerido' }]}>
                <Select
                    placeholder="Bus"
                    onChange={onBusChange}
                    allowClear
                >
                    <Option value="CV2-987">CV2-987</Option>
                    <Option value="B9Z-78A">B9Z-78A</Option>

                </Select>

            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.ruta !== currentValues.ruta}
            >
                {({ getFieldValue }) =>
                    getFieldValue('ruta') === 'other' ? (
                        <Form.Item name="customizeGender" label="Personalizar ruta" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
            <Form.Item name="fecha" label="Fecha" rules={[{ required: true, message: 'La fecha es requerida' }]}>
                <DatePicker placeholder='Fecha de Salida' onChange={onDateChange} />
            </Form.Item>
            <Form.Item name="hora" label="Hora" rules={[{ required: true, message: 'La hora es requerida' }]}>
                <TimePicker

                    minuteStep={15} format={format} onChange={onTimeChange} placeholder='Hora de Salida' />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <div className='flex gap-3 mt-7'>
                    <Button className='flex items-center' icon={<CalendarOutlined />} htmlType="submit">

                        Crear Viaje
                    </Button>
                    <Button htmlType="button" danger onClick={onReset}>
                        Cancelar
                    </Button>
                </div>

            </Form.Item>
        </Form>
    )

}


