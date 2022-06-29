import Menu from '@mui/material/Menu';
import { useState } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { works } from '../../../works';
import Fab from '@mui/material/Fab';
import uniqid from "uniqid";
import Item from './menuItem/Item';

const NavMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <span className='header__menu'>
            <Fab
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
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
                        maxHeight: 300,
                        minWidth: '40ch',
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