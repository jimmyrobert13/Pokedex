import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export default function Details({pokeData, loading, setPokeDex, prevUrl, nextUrl, pokeDex, setUrl, setPokeDatas, infoPokemon}) {
    return(
        <div className="container">
            <div className="left-content">
                { pokeData.map((item, index)=>{
                    return(
                        <div key={index} className="details-card">
                            <img src={item.sprites.other.dream_world.front_default}/>
                        </div>
                    )
                })}   

            </div>
            <div className="right-content">
                <div className="pokemon-card">
                { pokeData.map((item, index)=>{
                    return(
                        <div className="up-down">
                            <button className="up-poke" value={item.id + 1}><ArrowDropUpIcon/></button>
                            <div key={index} className="detail-container-info">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${item.id}.gif`}/>
                                <h2>No {item.id}</h2>
                                <h2 className="name-info">{item.name}</h2>
                                <img className="icon-detail" src="/src/img/pokemon.svg" alt="" />
                                
                            </div>
                        </div>
                    )
                })}  

                </div>

            </div>
        </div>

    )
}