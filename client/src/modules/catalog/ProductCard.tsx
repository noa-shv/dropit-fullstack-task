import './ProductCard.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../store/action-creators";

interface Props {
    id: number;
  img: string;
  title: string;
  price: number;
};

function ProductView({id, img, title, price}: Props) {
    const dispatch = useDispatch()
    const {addOrder} = bindActionCreators(actionCreators, dispatch);
    return(
        <Card className="product-card">
            <div className="media-wrapper">
                <CardMedia
                    component="img"
                    height="auto"
                    image={img}
                    sx={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain"
                    }}
                />
            </div>
            <Typography variant="subtitle2" component="div"> {title}</Typography>
            <div className="card-cations">
                <Typography
                    variant="button"
                    component="div"
                    sx={{fontWeight: 'bold', fontSize: 17,}}
                >
                    ILS{price}
                </Typography>
                <IconButton
                    sx={{position:'relative', bottom:'15%'}}
                    onClick={() => addOrder(id)}
                >
                    <AddIcon />
                </IconButton>
            </div>
        </Card>
    );
}

export default ProductView;
