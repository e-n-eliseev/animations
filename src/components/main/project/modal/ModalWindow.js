import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router';

const ModalWindow = ({ item }) => {

    const { flex, modal } = useTheme();

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>Подробнее...</Button>
            <Modal
                aria-labelledby="Пример стилизации"
                aria-describedby="Подпробное описание стилизации компонента и используемых технологий"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={{ ...flex, ...modal }} >
                        <Typography id="transition-modal-title" variant="h6" component="h2" >
                            {item[0]}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {item[2]}
                        </Typography>
                        <Button variant="outlined" onClick={() => navigate(item[3])}>Демо</Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default ModalWindow;