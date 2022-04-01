import react from "react";
import Search from "../Components/Search";
import Card from "../Components/Card";
import Pokeinfo from "../Components/Pokeinfo";



const HomePage=({pokeData, loading, setPokeDex, prevUrl, nextUrl, pokeDex, setUrl, setPokeDatas})=>{
    return(
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    <div className="btn-group">
                        { prevUrl && <button onClick={()=>{setPokeDatas([]); setUrl(prevUrl)}}>Previous</button>}
                        { nextUrl && <button onClick={()=>{setPokeDatas([]); setUrl(nextUrl)}}>Next</button>}
                    </div>
                </div>
                <div className="right-content">
                    <Pokeinfo data={pokeDex}/>
                </div>
            </div>
    )
}

export default HomePage;