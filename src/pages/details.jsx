import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDroDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Details({pokeData, loading, setPokeDex, prevUrl, nextUrl, pokeDex, setUrl, setPokeDatas, infoPokemon, clickDetail, handleSubmit}) {
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
                    {console.log(item)}
                    return(
                        <div className="up-down">
                            <form onSubmit={handleSubmit}>
                                <div key={index} className="detail-container-info">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${item.id}.gif`}/>
                                    <h2>No {item.id}</h2>
                                    <h2 className="name-info">{item.name}</h2>
                                    <img className="icon-detail" src="/src/img/pokemon.svg" alt="" />
                                </div>
                                <button onClick={()=>clickDetail(item.id - 1)} className="up-poke"><ArrowDroDownIcon/></button>
                                <button onClick={()=>clickDetail(item.id + 1)} className="up-poke"><ArrowDropUpIcon/></button>

                            </form>
                        </div>
                    )
                })}  

                </div>

            </div>
        </div>

    )
}