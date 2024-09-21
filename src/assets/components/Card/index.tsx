import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: 'transparent' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    width="300"
                    image="https://www.afrikanhouse.com.br/images/paginas/casamento-1.jpg"
                    alt="green iguana"
                    sx={{ borderRadius: '12px' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'start' }}>
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}