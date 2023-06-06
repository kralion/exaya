import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import type { Item, EditableCellProps } from '~/interfaces/interfaces';
import { originData } from '~/data/programacion-viajes';
import type { ColumnsType, TableProps } from 'antd/es/table';

const EditableCell: React.FC<EditableCellProps> = ({
	editing,
	dataIndex,
	title,
	inputType,
	record,
	index,
	children,
	...restProps
}) => {
	const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{ margin: 0 }}
					rules={[
						{
							required: true,
							message: `Please Input ${title}!`,
						},
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	);
};

export function ProgramacionTable() {
	const [form] = Form.useForm();
	const [data, setData] = useState(originData);
	const [editingKey, setEditingKey] = useState('');

	const isEditing = (record: Item) => record.key === editingKey;

	const edit = (record: Partial<Item> & { key: React.Key }) => {
		form.setFieldsValue(
			{
				ruta: '',
				bus: '',
				fechaSalida: '',
				horaSalida: '',
				estado: '',
				...record,
			}
		);
		setEditingKey(record.key);
	};

	const cancel = () => {
		setEditingKey('');
	};

	const save = async (key: React.Key) => {
		try {
			const row = (await form.validateFields()) as Item;

			const newData = [...data];
			const index = newData.findIndex((item) => key === item.key);
			if (index > -1) {
				const item = newData[index];
				newData.splice(index, 1, {
					...item,
					...row,
				});
				setData(newData);
				setEditingKey('');
			} else {
				newData.push(row);
				setData(newData);
				setEditingKey('');
			}
		} catch (errInfo) {
			console.log('Error de Validacion de Datos', errInfo);
		}
	};

	const columns = [
		{
			title: 'ID',
			dataIndex: 'viajeId',
			width: '5%',
		},
		{
			title: 'Ruta',
			dataIndex: 'ruta',
			width: '20%',
			editable: true,
			filters: [
				{
					text: 'Huancayo - Ayacucho',
					value: 'Huancayo - Ayacucho',
				},
				{
					text: 'Ayacucho - Huancayo',
					value: 'Ayacucho - Huancayo',
				}
			],
			onFilter: (value: string, record) => record.ruta.indexOf(value) === 0,
			sorter: (a, b) => a.ruta.length - b.ruta.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Bus',
			dataIndex: 'bus',
			width: '15%',
			editable: true,
			render: (text: string) =>

				<Typography.Link>
					{text}
				</Typography.Link>



		},
		{
			title: 'Fecha Salida',
			dataIndex: 'fechaSalida',
			width: '15%',
			editable: true,
		},
		{
			title: 'Hora Salida',
			dataIndex: 'horaSalida',
			width: '15%',
			editable: true,
		},
		{
			title: 'Estado',
			dataIndex: 'estado',
			width: '10%',
			editable: true,
		},
		{
			title: 'Acciones',
			dataIndex: 'acciones',
			render: (_: any, record: Item) => {
				const editable = isEditing(record);
				return editable ? (
					<span>
						<Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
							<Button>
								Guardar
							</Button>

						</Typography.Link>
						<Popconfirm title="Seguro que quieres?" onConfirm={cancel}>
							<a>Cancelar</a>
						</Popconfirm>
					</span>
				) : (
					<div className='flex items-baseline gap-7 justify-center'>

						<Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
							Edit
						</Typography.Link>
						<Button >
							Eliminar
						</Button>
					</div>
				);
			},
		},
	];
	const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
		console.log('params', pagination, filters, sorter, extra);
	};

	const mergedColumns = columns.map((col) => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: Item) => ({
				record,
				inputType: col.dataIndex,
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record),
			}),
		};
	}
	);

	return (
		<Form form={form} component={false}>
			<Table
				components={{
					body: {
						cell: EditableCell,
					},
				}}
				bordered
				dataSource={data}
				columns={mergedColumns}
				onChange={onChange}
				rowClassName="editable-row"
				pagination={{
					onChange: cancel,
				}}
			/>
		</Form>
	);
}

