import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';


const Contacts = () => {
    return (
        <footer className="contacts">
            <h2 className="contacts__heading">
                Контакты.
            </h2>
            <ul className="contacts__list" >
                <li className="contacts__item">
                    <Button variant="outlined" startIcon={<CallIcon />} href="tel:+79519045116">
                        +7 951 904 5116
                    </Button>
                </li>
                <li className="contacts__item">
                    <Button variant="outlined" startIcon={<EmailIcon />} href="mailto:e.n.eliseev@mail.ru">
                        e.n.eliseev@mail.ru
                    </Button>
                </li>
                <li className="contacts__item">
                    <Button variant="outlined" startIcon={<TelegramIcon />} href="https://t.me/e_n_eliseev">
                        Telegram
                    </Button>
                </li>
                <li className="contacts__item">
                    <Button variant="outlined" startIcon={< GitHubIcon />} href="https://github.com/e-n-eliseev">
                        GitHub
                    </Button>
                </li>
            </ul>
        </footer>
    )
}

export default Contacts;