import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NoResults from '../../components/NoResults';

const tableHeaders = [' ', 'title', 'price', 'quantity'];

interface  Props {
    orderProducts: Array<any>;
}

function CartTable({orderProducts}: Props) {
    if(orderProducts.length > 0) {
        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {tableHeaders.map((header) => (
                                <TableCell key={header}>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderProducts.map((orderProduct) => (
                            <TableRow key={orderProduct.id}>
                                <TableCell>
                                    <img src={orderProduct.image} width="50" height="60"/>
                                </TableCell>
                                <TableCell>{orderProduct.title}</TableCell>
                                <TableCell>{orderProduct.price}</TableCell>
                                <TableCell>{orderProduct.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    } else {
        return (<NoResults text="No orders in cart. Add products to checkout." />);
    }
}

export default CartTable;
