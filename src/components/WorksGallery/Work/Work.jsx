import s from './Work.module.css';


const Work = ({coverLink, headingText, year, technologies, leadText}) => {
    return (
        <article className={s.Work}>
            <img className={s.cover} src={coverLink} alt=""/>


            <section className={s.textContent}>
                <h1 className={s.heading}>
                    {headingText}
                </h1>
                <div className={s.workInfo}>
                <span className={s.year}>
                    {year}
                </span>
                    <span className={s.technologies}>
                    {technologies}
                </span>
                </div>
                <p className={s.lead}>
                    {leadText}
                </p>
            </section>




        </article>


    )
}


export {Work};