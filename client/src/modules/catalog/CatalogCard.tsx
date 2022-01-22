import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface Props {
  img: string;
  title: string;
  price: number;
};

function CatalogView({img, title, price}: Props) {
    return(
        <Card sx={{height: "75vh"}}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={img}
                    alt="green iguana"
                    sx={{
                        maxHeight: "70%",
                        maxWidth: "100%",
                        objectFit: "contain"
                    }}
                />
        <CardContent>
                <Typography variant="subtitle2" component="div">{title}</Typography>
                <Typography
                    variant="button"
                    component="div"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: 17,
                        marginTop: 1.8,
                    }}
                >
                    ILS{price}
                </Typography>
    </CardContent>
        </Card>
    );
}

export default CatalogView;
