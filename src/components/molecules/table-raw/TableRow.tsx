import { TableCell } from "../../atoms/table-cell/TableCell";

export const TableRow = (props: {
    _key: string,
    value: string,
    default?: string,
    leftCn: string,
    rightCn: string
}) => {
    return (
        <tr className='divide-y divide-x'>
            <TableCell className={`text-center font-bold border border-x ${props.leftCn}`}>
                {props._key}
            </TableCell>
            <TableCell className={`text-gray-500 ${props.rightCn}`}>
                {props.value ?? props.default ?? '-'}
            </TableCell>
        </tr>
    );
};