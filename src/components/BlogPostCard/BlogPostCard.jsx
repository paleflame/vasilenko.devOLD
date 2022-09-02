import s from './BlogPostCard.module.css';


const BlogPostCard = ({headingText, date, topicText, leadText})=>{
    return (
        <article className={s.BlogPostCard}>
            <h1 className={s.heading}>{headingText}</h1>

            <p className={s.info}>
                <span className={s.date}>{date}</span>
                |
                <span className={s.topic}>{topicText}</span>
            </p>

            <p className={s.lead}>
                {leadText}
            </p>



        </article>
    )
}


export {BlogPostCard};