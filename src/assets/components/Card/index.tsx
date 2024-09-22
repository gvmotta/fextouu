import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface ActionAreaCardProps {
    image: string;
    local: string;
    distancia: string;
    convidados: string;
    preco: string;
}

const ActionAreaCard: React.FC<ActionAreaCardProps> = ({ image, local, distancia, convidados, preco }) => {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', boxShadow: 'none', padding: '0', margin: '0' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    width="300"
                    image={image}
                    alt="green iguana"
                    sx={{ borderRadius: '12px' }}
                />
                <CardContent sx={{paddingLeft: '0'}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'start', fontWeight: 'bold' }}>
                        {local}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start' }}>
                        {distancia} 
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start' }}>
                        {convidados} 
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', fontWeight: 'bold' }}>
                        {preco} 
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ActionAreaCard;