import NavMenu from "./menu/NavMenu";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__heading"> Здравствуйте! Данный сайт - сборник различных вариантов стилизации элементов веб страниц.</h1>
            <p className="header__text">Для навигации можно использовать кнопку <NavMenu /> или перейти на соответсвующий раздел из карточки работы.</p>
        </header>
    )
}

export default Header;