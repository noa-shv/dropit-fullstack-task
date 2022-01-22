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
                        maxHeight: "72%",
                        maxWidth: "100%",
                        objectFit: "contain"
                    }}
                />
        <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">{title}</Typography>
                <Typography gutterBottom variant="h6" component="div">ILS{price}</Typography>
    </CardContent>
        </Card>
    );
}

export default CatalogView;
