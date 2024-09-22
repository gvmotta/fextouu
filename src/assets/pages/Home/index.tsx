import Card from "../../components/Card";
import HeaderDesktop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';


const HomePage: React.FC = () => {

    return (
        <>
            {/* <HeaderDesktop></HeaderDesktop> */}
            <HeaderMobile></HeaderMobile>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} sx={{ justifyContent: 'center' }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid key={index}>
                            <Card
                                image={"https://www.afrikanhouse.com.br/images/palavras-chaves/espaco-festas-sp.jpg"}
                                local={"Itupeva, São Paulo, SP"}
                                distancia={"10km de distância"}
                                convidados={"50-100 convidados"}
                                preco={"A partir de R$1.299,90"}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </>
    );
};

export default HomePage;
