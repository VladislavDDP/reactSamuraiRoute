import s from './News.module.css'
import img from './../../../images/default_avatar.png'

const News = (props) => {
    return (
        <div className={s.news}>
            <div>News: </div>
            <div>
                <div className={s.news_block}>
                    <img className={s.news_img} src={img} alt="news img" />
                    <p>Event on Schevchenko street</p>
                </div>
                <div className={s.news_block}>
                    <img className={s.news_img} src={img} alt="news img" />
                    <p>Palace of sport</p>
                </div>
                <div className={s.news_block}>
                    <img className={s.news_img} src={img} alt="news img" />
                    <p>Workout with Tommy</p>
                </div>
            </div>
        </div>
    )
}

export default News