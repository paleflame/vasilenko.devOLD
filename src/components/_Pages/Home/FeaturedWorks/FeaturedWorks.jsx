import s from './FeaturedWorks.module.css';
import {WorksGallery} from "../../Works/WorksGallery/WorksGallery";

const FeaturedWorks = ()=>{

    return(
        <section className={s.FeaturedWorks}>
            <div className="containerXL">
                <h2 className={s.heading}>Featured works</h2>
                <WorksGallery/>

            </div>




        </section>
    )

}





export {FeaturedWorks};