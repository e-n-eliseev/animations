import { works } from "../../assets/works";
import Project from "./project/Project";
import uniqid from "uniqid";
import Pagination from '@mui/material/Pagination';
import { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";


const Main = memo(() => {

    const pages = Math.ceil(works.length / 9);

    const navigate = useNavigate();
    const location = useLocation();

    const currentPage = +location.pathname.slice(5);

    useEffect(() => {
        if (!currentPage || currentPage > pages) navigate(`/page1`);
    }, [])

    const [page, setPage] = useState(currentPage ? currentPage : 1);

    const handleChange = (event, value) => {
        setPage(value);
        navigate(`/page${value}`)
    };
    return (
        <main className="main">
            <h2 className="main__heading">
                Примеры стилизаций.
            </h2>
            <p className="main__text" >В данной секции располагаются примеры работ, чтобы открыть описание и перейти на соответствующую страницу нажмите кнопку "подробнее" на карточке элемента.</p>
            <p className="main__text" >Сайт периодически пополняется новыми примерами стилизации.</p>
            <div className="main__wrapper">
                {works.slice((page - 1) * 9 + 1, 9 * page).map(item => <Project key={uniqid()} item={item} />)}
            </div>

            <Pagination count={pages} page={page} onChange={handleChange} color="primary" size="large" variant="outlined" siblingCount={0} />

        </main>
    )
})

export default Main;