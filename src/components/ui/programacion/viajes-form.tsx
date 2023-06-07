import React, { useState, useMemo } from 'react'
import { Button, Form, Select, DatePicker, TimePicker, notification } from 'antd'
import { CalendarOutlined, CheckCircleOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import type { NotificationPlacement } from 'antd/es/notification/interface';


const Context = React.createContext({ name: 'Default' });
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


export function ViajesForm() {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();


    const openNotification = (placement: NotificationPlacement) => {
        api.info({
            type: 'success',
            message: 'Operacion exitosa',
            description: <Context.Consumer>{({ name }) => 'El viaje ha sido creado exitosamente y lo puede visualizar en la tabla'}</Context.Consumer>,
            placement,

            icon: < CheckCircleOutlined className='text-green-500' />
        });
    };

    const contextValue = useMemo(() => ({ name: '' }), []);
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
            className='flex justify-between'
        >
            <div className="flex gap-3.5">

                <Form.Item className='b' name="ruta" rules={[{ required: true, message: 'Campo requerido' }]}>
                    <Select style={{ width: 200 }}
                        placeholder="Ruta"
                        onChange={onRutaChange}
                        allowClear
                    >
                        <Option value="Ayacucho - Huancayo">Ayacucho - Huancayo </Option>
                        <Option value="Huancayo - Ayacucho">Huancayo - Ayacucho</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="bus" rules={[{ required: true, message: '* Requerido' }]}>
                    <Select style={{ width: 120 }}
                        placeholder="Bus"
                        onChange={onBusChange}
                        allowClear
                    >
                        <Option value="CV2-987">CV2-987</Option>
                        <Option value="B9Z-78A">B9Z-78A</Option>

                    </Select>

                </Form.Item>
                <Form.Item name="fecha" rules={[{ required: true, message: '* Requerido' }]}>
                    <DatePicker style={{ width: 150 }} placeholder='Fecha de Salida' onChange={onDateChange} />
                </Form.Item>
                <Form.Item name="hora" rules={[{ required: true, message: '* Requerido' }]}>
                    <TimePicker
                        style={{ width: 150 }}
                        minuteStep={15} format={format} onChange={onTimeChange} placeholder='Hora de Salida' />
                </Form.Item>
            </div>

            <Form.Item >
                <div className='flex gap-3.5'>
                    <Context.Provider value={contextValue}>
                        {contextHolder}

                        <Button type='primary' className='flex items-center' onClick={
                            () => openNotification('bottomRight')
                        } icon={<CalendarOutlined />} htmlType="submit">

                            Crear Viaje
                        </Button>
                    </Context.Provider>
                    <Button htmlType="button" onClick={onReset}>
                        Cancelar
                    </Button>
                </div>

            </Form.Item>
        </Form >
    )

}


