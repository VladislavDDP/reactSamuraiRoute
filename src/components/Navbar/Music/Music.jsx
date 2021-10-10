import s from './Music.module.css'

const Music = (props) => {
    return (
        <div className={s.music}>
            <div>Your Music:</div>
            <audio className={s.track} controls src="https://www.computerhope.com/jargon/m/example.mp3">1</audio>
            <audio className={s.track} controls src="https://www.computerhope.com/jargon/m/example.mp3">2</audio>
            <audio className={s.track} controls src="https://www.computerhope.com/jargon/m/example.mp3">3</audio>
            <audio className={s.track} controls src="https://www.computerhope.com/jargon/m/example.mp3">4</audio>
        </div>
    )
}

export default Music