import s from './PageHeading.module.css';


const PageHeading = ({headingText})=>{
    return (
        <h1 className={s.PageHeading}>{headingText}</h1>
    )

}

export {PageHeading};