import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const ModalWindow = ({ item }) => {

    const { flex, modal } = useTheme();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>Подробнее...</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
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
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {item[0]}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {item[6]}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Разработано для браузеров: {item[4]}
                        </Typography>
                        <Button variant="outlined" href={item[2]}>Посетить сайт</Button>
                        <Button variant="outlined" href={item[3]}>Посетить GitHub проекта</Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default ModalWindow;