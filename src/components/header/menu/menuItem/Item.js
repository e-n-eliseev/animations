import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const Item = ({ handleClose, item }) => {
    return (
        <MenuItem onClick={handleClose}>
            <Typography variant="inherit" noWrap>
                {item[1]}
            </Typography>
        </MenuItem>
    )
}

export default Item