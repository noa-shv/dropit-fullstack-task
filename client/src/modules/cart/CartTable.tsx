import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const tableHeaders = [' ', 'title', 'price', 'quantity'];

interface  Props {
    orders: Array<any>;
}

function CartTable({orders}: Props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {tableHeaders.map((header)=>(
                            <TableCell>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>
                                <img src={order.image} width="50" height="60" />
                            </TableCell>
                            <TableCell>{order.title}</TableCell>
                            <TableCell>{order.price}</TableCell>
                            <TableCell>3</TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CartTable;
