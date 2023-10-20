export default function Image ({ source, altName }) {
    return (
        <img className="round-image" src={source} alt={altName}/>
    )
}