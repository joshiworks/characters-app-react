
const CharacterCard = (character : Character) => {

    let  alive_status = "unknown";

    switch(character.status) {
        case "Alive": alive_status= "alive";
        break;
        case "Dead": alive_status= "dead";
        break;
        case "unknown": alive_status= "unknown";
        break;

    }

    return (
      
      <article className="characterCard__Wrapper">
            <div className="characterCard__ImgWrapper">
                <img src={character.image} alt={character.name}/>
            </div>
            <div className="characterCard__ContentWrapper">
                <div className="section">
                    <a href={character.url} rel="nofollow noopener noreferrer" target="_blank">
                        <h2>{character.name}</h2>
                    </a>
                    <span className="status"><span className={`status__icon ${alive_status}`}></span> {character.status} - {character.species}</span>
                </div>
                <div className="section">
                    <span className="text-gray">Origin:</span>
                    <a href={character.origin.url} rel="nofollow noopener noreferrer" 
                    target="_blank" >{character.origin.name}</a>
                </div>
                <div className="section">
                    <span className="text-gray">Last known location:</span>
                    <a href={character.location.url} rel="nofollow noopener noreferrer" 
                    target="_blank" >{character.location.name}</a>
                </div>
                <div className="section">
                    <span className="text-gray">First seen in:</span>
                    <a href="https://rickandmortyapi.com/api/episode/10" rel="nofollow noopener noreferrer" 
                    target="_blank" >
                        Close Rick-counters of the Rick Kind</a>
                </div>
            </div>
        </article>
  );
}

export default CharacterCard;