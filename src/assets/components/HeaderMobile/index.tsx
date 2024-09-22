import festouLogo from '../../../../public/images/festouLogoPrimary.png';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import SearchIcon from '@mui/icons-material/Search'; // Added import
import { TransitionProps } from '@mui/material/transitions';
import { Link, Paper, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CardWithPlaceToChoose from '../CardWithPlaceChoose';
import BottomNavigation from '@mui/material/BottomNavigation';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const [convidados, setConvidados] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setConvidados(event.target.value as string);
    };

    return (
        <header>
            <div className="flex justify-between">
                <img src={festouLogo} className="App-logo" alt="logo" />
                <React.Fragment>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            </div>

            <React.Fragment>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '20px 0',
                    border: '0.5px solid #DDDDDD',
                    borderRadius: '92px',
                    padding: '0px 20px 0px 10px',
                    textAlign: 'start',
                    justifyContent: 'center',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px'
                }}>
                    <SearchIcon sx={{ marginRight: '10px', color: '#000' }} />
                    <Button
                        sx={{
                            width: '100%',
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            textTransform: 'none',
                            alignItems: 'start',
                            justifyContent: 'start',
                            padding: '10px 0 10px 5px',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'start',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                            },
                            outline: 'none', // Remove o outline
                            '&:focus': {
                                outline: 'none', // Remove o outline quando focado
                            },
                            color: 'text.primary',
                        }}
                        onClick={handleClickOpen}
                        disableFocusRipple
                    >
                        <Typography sx={{ fontSize: '14px', fontWeight: '600' }} variant='h6'>Onde será sua festa?</Typography>
                        <Typography sx={{ fontSize: '12px' }} variant='subtitle2'>Quando sera? Quantos convidados?</Typography>
                    </Button>
                    <Dialog
                        fullScreen
                        open={dialogOpen}
                        onClose={handleDialogClose}
                        TransitionComponent={Transition}
                        sx={{}}
                    >
                        <AppBar sx={{ position: 'relative', boxShadow: 'none', paddingRight: '0px !important' }}>
                            <Toolbar sx={{ backgroundColor: 'background.default', border: 'none' }}>
                                <IconButton
                                    edge="start"
                                    sx={{ color: 'text.primary' }}
                                    onClick={handleDialogClose}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Typography sx={{ ml: 2, flex: 1, color: 'text.primary' }} variant="h6" component="div">
                                    Buscar
                                </Typography>
                                {/* <Button autoFocus onClick={handleDialogClose}>
                                    save
                                </Button> */}
                            </Toolbar>
                        </AppBar>
                        <List sx={{ backgroundColor: 'background.default', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
                            <Paper sx={{ borderRadius: '24px', padding: '1rem 1.5rem' }} elevation={4}>
                                <Typography sx={{ fontWeight: '600' }} variant='h5' component="div">
                                    Onde será?
                                </Typography>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: '20px 0',
                                    border: '0.5px solid #DDDDDD',
                                    borderRadius: '92px',
                                    padding: '0px 20px 0px 10px',
                                }}>
                                    <SearchIcon sx={{ marginRight: '10px', color: '#000' }} />
                                    <TextField
                                        id="outlined-basic"
                                        label="Outlined"
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                backgroundColor: 'none',
                                                border: 'none',
                                                boxShadow: 'none',
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                            '& .MuiInputLabel-root': {
                                                display: 'none',
                                            },
                                            '& .MuiInputBase-input': {
                                                padding: 0,
                                                color: '#000', // Change the font color here
                                            },
                                            // 'backgroundColor': 'black',
                                            'padding': '10px 0',
                                        }}
                                    />

                                </div>
                                <div className='overflow-x-auto' style={{ display: 'flex', gap: '10px' }}>
                                    <CardWithPlaceToChoose
                                        pathImage='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320'
                                        text='Mundo inteiro'
                                    />
                                    <CardWithPlaceToChoose
                                        pathImage='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320'
                                        text='Mundo inteiro'
                                    />
                                    <CardWithPlaceToChoose
                                        pathImage='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320'
                                        text='Mundo inteiro'
                                    />
                                    <CardWithPlaceToChoose
                                        pathImage='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320'
                                        text='Mundo inteiro'
                                    />
                                    <CardWithPlaceToChoose
                                        pathImage='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320'
                                        text='Mundo inteiro'
                                    />

                                </div>
                            </Paper>
                            <Paper sx={{ borderRadius: '24px', padding: '1rem 1.5rem' }} elevation={4}>
                                <Typography sx={{ fontWeight: '600' }} variant='h5' component="div">
                                    Quando será?
                                </Typography>


                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <StaticDatePicker
                                        orientation="portrait"
                                        slots={{
                                            actionBar: () => null
                                        }}
                                        views={['year', 'month', 'day']}
                                    />
                                </LocalizationProvider>

                            </Paper>
                            <Paper sx={{ borderRadius: '24px', padding: '1rem 1.5rem', gap: '10px', display: 'flex', flexDirection: 'column' }} elevation={4}>
                                <Typography sx={{ fontWeight: '600' }} variant='h5' component="div">
                                    Quantos convidados?
                                </Typography>


                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth variant='standard'>
                                        <InputLabel id="demo-simple-select-label">Número de convidados</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={convidados}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={50}>10 - 50</MenuItem>
                                            <MenuItem value={100}>50 - 100</MenuItem>
                                            <MenuItem value={150}>100 - 150</MenuItem>
                                            <MenuItem value={200}>150 - 200</MenuItem>
                                            <MenuItem value={250}>200 - 250</MenuItem>
                                            <MenuItem value={400}>250 - 300</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                            </Paper>
                        </List>




                        <Box sx={{
                            padding: '1rem',
                        }}>
                            <BottomNavigation sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: '100%',
                            }}>
                                <Link href="#">Limpar dados</Link>
                                <Button variant="contained">Buscar</Button>
                            </BottomNavigation>
                        </Box>
                    </Dialog>
                </div>
            </React.Fragment>
        </header>
    );
};

export default Header;