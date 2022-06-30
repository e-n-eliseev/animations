import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const Item = ({ handleClose, item }) => {
    return (
        <MenuItem onClick={() => handleClose(item[3])}>
            <Typography variant="inherit" noWrap>
                {item[0]}
            </Typography>
        </MenuItem>
    )
}

export default Item
