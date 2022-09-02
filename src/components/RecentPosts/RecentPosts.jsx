import s from './RecentPosts.module.css';
import {BlogPostCard} from "../BlogPostCard/BlogPostCard";


const RecentPosts = ()=>{
    return (
        <section className={s.RecentPosts}>
            <div className={"containerXL"}>
                <div className={s.upperBlock}>
                    <h2 className={s.heading}>Recent posts</h2>
                    <a className={s.link}>View all</a>

                </div>
                <div className={s.postsBlock}>
                    <BlogPostCard />
                    <BlogPostCard />


                </div>
            </div>

        </section>
    )
}

export {RecentPosts};