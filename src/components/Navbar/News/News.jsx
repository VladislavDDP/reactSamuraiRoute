import s from './News.module.css'

const News = (props) => {
    return (
        <div className={s.news}>
            <div>News</div>

            <div>Event on Schevchenko street</div>
            <div>Palace of sport</div>
            <div>Workout with Tommy</div>
            <div>Drink coffee with milk</div>
        </div>
    )
}

export default News