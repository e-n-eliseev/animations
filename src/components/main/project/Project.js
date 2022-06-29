import AOS from "aos";
import "aos/dist/aos.css";
import { memo, useEffect } from 'react';
import ModalWindow from "./modal/ModalWindow";


const Project = memo(({ item }) => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <section className="project" data-aos="flip-left" >
            <h3 className="project__heading">{item[0]}</h3>
            <p className="project__text">{item[1]}</p>
            <ModalWindow item={item} />
        </section>
    )
})

export default Project;