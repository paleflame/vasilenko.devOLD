import s from './RecentPosts.module.css';
import {BlogPostCard} from "../../Blog/BlogPostCard/BlogPostCard";


const RecentPosts = ()=>{
    return (
        <section className={s.RecentPosts}>
            <div className={"containerXL"}>
                <div className={s.upperBlock}>
                    <h2 className={s.heading}>Recent posts</h2>
                    <a className={s.link}>View all</a>

                </div>
                <div className={s.postsBlock}>
                    <BlogPostCard
                        headingText={'Making a design system from scratch'}
                        date={'12 Feb 2020'}
                        topicText={'Design, Pattern'}
                        leadText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                        customClass={s.padding}
                    />

                    <BlogPostCard className={s.BlogPostCardInner}
                        headingText={'Creating pixel perfect icons in Figma'}
                        date={'24 Feb 2020'}
                        topicText={'Figma, Icon Design'}
                        leadText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                        customClass={s.padding}
                    />



                </div>
            </div>

        </section>
    )
}

export {RecentPosts};