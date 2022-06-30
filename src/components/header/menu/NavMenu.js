import Menu from '@mui/material/Menu';
import { useState } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { works } from '../../../works';
import Fab from '@mui/material/Fab';
import uniqid from "uniqid";
import Item from './menuItem/Item';
import { useNavigate } from 'react-router';

const NavMenu = () => {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (path) => {
        console.log(path)
        setAnchorEl(null);
        navigate(path);
    };

    return (
        <span className='header__menu'>
            <Fab
                id="menu-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-label="menu-button"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='primary'
            >
                <MenuBookIcon />
            </Fab>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    style: {
                        maxHeight: 200,
                        width: '20ch',
                    },
                }}

            >
                {works.map(item => <Item key={uniqid()} handleClose={handleClose} item={item} />)
                }
            </Menu>
        </span >
    )
}

export default NavMenu;