import { packofloaders } from "../../assets/packOfLoaders";
import Loader from "./loader/Loader";
import uniqid from "uniqid";


const PackOfLoaders = () => {
    return (
        <section className="pack-of-loaders">
            <h2 className="pack-of-loaders__heading">
                На странице представлена сборка кастомных анимаций загрузки.
            </h2>
            <div className="pack-of-loaders__wrapper">
                {packofloaders.map(item => <Loader key={uniqid()} item={item} />)}
            </div>
        </section>
    )
}

export default PackOfLoaders;