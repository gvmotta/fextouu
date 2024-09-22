import { Typography } from "@mui/material";

interface CardProps {
    pathImage: string;
    text: string;
}

const CardWithPlaceToChoose = ({ pathImage, text }: CardProps) => {
    return (
        <div style={{  display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', marginBottom: '8px' }}>
            <img src={pathImage} alt="" style={{ borderRadius: '12px', minWidth: '120px' }} />
            <p style={{ fontStyle: 'italic', fontSize: '14px' }}>{text}</p>
        </div>
    )
}

export default CardWithPlaceToChoose;