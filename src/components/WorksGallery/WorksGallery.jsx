import s from './WorksGallery.module.css';
import {Work} from "./Work/Work";


const WorksGallery = () => {
    return (
        <div className={s.WorksGallery}>
            <Work coverLink={'https://i0.wp.com/www.giantfreakinrobot.com/wp-content/uploads/2022/08/rick-astley.jpg'}
                  headingText={'Rick Astley'}
                  year={'2022'}
                  technologies={'SASS'}
                  leadText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
            <Work coverLink={'https://i.hurimg.com/i/hdn/75/0x0/60ded33f4e3fdf0bfcebef57.jpeg'}
                  headingText={'Jim Morrison'}
                  year={'2022'}
                  technologies={'SASS'}
                  leadText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
            <Work coverLink={'https://images.squarespace-cdn.com/content/v1/5602e09be4b053956b5c8d3a/1488824299673-PNQFP8JB861KXX1202PW/image-asset.jpeg?format=1000w'}
                  headingText={'Eric Clapton'}
                  year={'2022'}
                  technologies={'SASS'}
                  leadText={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>

        </div>
    )

}


export {WorksGallery};