import s from './HeaderContent.module.css';

const HeaderContent = ()=>{
    return (
        <div className={"container"}>
            <section className={s.HeaderContent}>
                <div className={s.textContent}>
                    <h1 className={s.heading}>Hi, I am John,
                        Creative Technologist</h1>
                    <p className={s.lead}> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis easdasdnim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <a className={s.button} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={"_blank"}>
                        Скачать резюме
                    </a>
                </div>

                <img className={s.myImage} src="https://phantom-marca.unidadeditorial.es/951a1ca91903fabfecac0ac837ee8a5d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/06/19/16556554784469.jpg" alt=""/>

            </section>
        </div>
    )
}


export {HeaderContent};