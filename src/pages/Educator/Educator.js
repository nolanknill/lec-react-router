import "./Educator.scss";

const Educator = ({ educatorsData, match }) => {
    const { educatorName } = match.params;

    const foundEducator = educatorsData.find((educator) => {
        return educator.name.toLowerCase() === educatorName.toLowerCase();
    })

    return (
        <article className="educator">
            <h1>{foundEducator.name}</h1>
            <p>{foundEducator.bio}</p>
            <img className="educator__profile-picture" src={foundEducator.imageUrl} alt={foundEducator.name} />
        </article>
    );
}

export default Educator;