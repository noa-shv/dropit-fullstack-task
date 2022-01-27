import './ProductCard.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../store/action-creators";
import {Product} from '../../types/product'

interface Props {
    product: Product;
}

function ProductCard({product}: Props) {
    const dispatch = useDispatch()
    const {addOrder} = bindActionCreators(actionCreators, dispatch);
    const handleAdd = (event: React.MouseEvent<HTMLElement>) => {
        addOrder(product.id);
        event.preventDefault();
    };

    return(
        <Card className="product-card">
            <div className="media-wrapper">
                <CardMedia
                    component="img"
                    height="auto"
                    image={product.image}
                    sx={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain"
                    }}
                />
            </div>
            <Typography variant="subtitle2" component="div"> {product.title}</Typography>
            <div className="card-actions">
                <Typography
                    variant="button"
                    component="div"
                    sx={{fontWeight: 'bold', fontSize: 17,}}
                >
                    ILS{product.price}
                </Typography>
                <IconButton
                    onClick={handleAdd}
                >
                    <AddIcon />
                </IconButton>
            </div>
        </Card>
    );
}

export default ProductCard;
