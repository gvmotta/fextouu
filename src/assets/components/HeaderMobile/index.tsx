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
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import SearchIcon from '@mui/icons-material/Search'; // Added import
import { TransitionProps } from '@mui/material/transitions';

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
                        <Typography sx={{fontSize: '14px', fontWeight: '600'}} variant='h6'>Onde será sua festa?</Typography>
                        <Typography sx={{fontSize: '12px'}} variant='subtitle2'>Quando sera? Quantos convidados?</Typography>
                    </Button>
                    <Dialog
                        fullScreen
                        open={dialogOpen}
                        onClose={handleDialogClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar sx={{ position: 'relative' }}>
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleDialogClose}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                    Sound
                                </Typography>
                                <Button autoFocus onClick={handleDialogClose}>
                                    save
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <List>
                            <ListItemButton>
                                <ListItemText primary="Phone ringtone" secondary="Titania" />
                            </ListItemButton>
                            <Divider />
                            <ListItemButton>
                                <ListItemText
                                    primary="Default notification ringtone"
                                    secondary="Tethys"
                                />
                            </ListItemButton>
                        </List>
                    </Dialog>
                </div>
            </React.Fragment>
        </header>
    );
};

export default Header;