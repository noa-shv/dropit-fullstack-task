import './ProductCard.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

interface Props {
    id: string;
  img: string;
  title: string;
  price: number;
  addToCart: (id: string) => void;
};

function ProductView({id, img, title, price, addToCart}: Props) {
    return(
        <Card sx={{
            height: "75vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingRight:"15px",
        }}>
            <div className="media-wrapper">
                <CardMedia
                    component="img"
                    height="auto"
                    image={img}
                    alt="green iguana"
                    sx={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain"
                    }}
                />
            </div>
                <Typography
                    variant="subtitle2"
                    component="div"
                >
                    {title}
                </Typography>
            <div className="card-cations">
                <Typography
                    variant="button"
                    component="div"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: 17,
                    }}
                >
                    ILS{price}
                </Typography>
                <IconButton
                    sx={{position:'relative', bottom:'15%'}}
                    onClick={() => addToCart(id)}
                >
                    <AddIcon />
                </IconButton>
            </div>
        </Card>
    );
}

export default ProductView;
