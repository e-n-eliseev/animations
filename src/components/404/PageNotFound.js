import img from "../../assets/404.png";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { useEffect } from "react";


const PageNotFound = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let timeout = setTimeout(() => navigate("/"), 5000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <article className="notFound">
            <h2 className="notFound__heading">Извините, страница не найдена!</h2>
            <figure className="notFound__wrapper">
                <img className="notFound__img" src={img} alt="Ошибка" />
                <figcaption className="notFound__text">
                    <p>
                        Через 5 секунд вы будете переведены на главную страницу или можете на жать на ссылку ниже
                    </p>
                    <Link to="/"><HomeIcon fontSize="large" color="primary" /></Link>
                </figcaption>
            </figure>
        </article>
    )
}

export default PageNotFound;