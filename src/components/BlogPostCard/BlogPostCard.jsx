import s from './BlogPostCard.module.css';


const BlogPostCard = (props)=>{
    return (
        <article className={s.BlogPostCard}>
            <h1 className={s.heading}>Making a design system from scratch</h1>

            <p className={s.info}>
                <span className={s.date}>12 Feb 2020</span>
                |
                <span className={s.topic}>Design, Pattern</span>
            </p>

            <p className={s.lead}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>



        </article>
    )
}


export {BlogPostCard};