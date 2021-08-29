import s from './Music.module.css'

const Music = (props) => {
    return (
        <div className={s.music}>
            <div>Your Music</div>

            <div>Track 1</div>
            <div>Track 2</div>
            <div>Track 3</div>
            <div>Track 4</div>
        </div>
    )
}

export default Music