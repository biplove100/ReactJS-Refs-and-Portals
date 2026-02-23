export default function TimeChallenge({title, description, time}){
    return(
        <section className="challenge">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{time} seconds</p>
            <button>Start Challenge</button>
        </section>
    )
}