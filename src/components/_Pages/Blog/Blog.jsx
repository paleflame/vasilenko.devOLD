import s from './Blog.module.css';
import {BlogPostCard} from "./BlogPostCard/BlogPostCard";

const Blog = () =>{
    return(
        <main className={s.Blog}>
            <div className="containerXL">
                <BlogPostCard
                    headingText={'Making a design system from scratch'}
                    date={'12 Feb 2020'}
                    topicText={'Design, Pattern'}
                    leadText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                    customClass={s.pageBlogPost}
                />

                <BlogPostCard
                headingText={'Making a design system from scratch'}
                date={'12 Feb 2020'}
                topicText={'Design, Pattern'}
                leadText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                customClass={s.pageBlogPost}
            />

                <BlogPostCard
                headingText={'Making a design system from scratch'}
                date={'12 Feb 2020'}
                topicText={'Design, Pattern'}
                leadText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                customClass={s.pageBlogPost}
            />

                <BlogPostCard
                headingText={'Making a design system from scratch'}
                date={'12 Feb 2020'}
                topicText={'Design, Pattern'}
                leadText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                customClass={s.pageBlogPost}
            />

                <BlogPostCard
                headingText={'Making a design system from scratch'}
                date={'12 Feb 2020'}
                topicText={'Design, Pattern'}
                leadText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                customClass={s.pageBlogPost}
            />
            </div>

        </main>
    )
}


export {Blog};