import { useRef } from "react";


const Parallax = () => {

    const bg1 = useRef();
    const bg2 = useRef();
    const bg3 = useRef();

    const handleChange = (event) => {
        let x = event.clientX / window.innerWidth;
        let y = event.clientY / window.innerHeight;
        bg1.current.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        bg2.current.style.transform = 'translate(+' + x * 75 + 'px, -' + y * 75 + 'px)';
        bg3.current.style.transform = 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)';
    }

    return (
        <section className="parallax" onMouseMove={handleChange} >
            <h1 className="parallax__heading"> На странице представлен пример исполнения паралакс эффекта при движении мыши</h1>
            <div className="parallax__wrapper">
                <div ref={bg1} className="parallax__bg1"></div>
                <div ref={bg2} className="parallax__bg2"></div>
                <div ref={bg3} className="parallax__bg3"></div>
            </div>
        </section>
    )
}

export default Parallax;