

const TypeWriter = () => {
    return (
        <section className="type-writer">
            <h2 className="type-writer__heading">На странице преставлен эффект печатающей машинки.</h2>
            <p className="type-writer__text">Страница корректно работает на разрешении от 1024px</p>
            <div className="type-writer__wrapper">
                <p className="type-writer__text">Так же можно выводить</p>
                <ul className="type-writer__list">
                    <li><span>разные</span></li>
                    <li><span>слова</span></li>
                    <li><span>отдельно</span></li>
                </ul>
            </div>
        </section>
    )
}

export default TypeWriter