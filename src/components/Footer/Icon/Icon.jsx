import s from "./Icon.module.css";



const Icon = ({imageSrc, imageAlt})=>{
    return (
        <li className={s.Icon}>
            <a href="#">
                <img
                    src={imageSrc} alt={imageAlt}/>
            </a>
        </li>
    )

}

export {Icon};
