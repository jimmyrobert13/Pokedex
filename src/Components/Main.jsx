import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import Search from "./Search";
import HomePage from "../pages/home";
import Details from "../pages/details";

const Main=()=> {
//  Start Api 
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon?limit=21");
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();
    const [pokemon, setPokemon]=useState();
    const [pokemonType, setPokemonType]=useState("");

    const pokeFun=async()=>{
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
    }
    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result = await axios.get(item.url);
            setPokeData(state=>{
                state=[...state,result.data]
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state;
            })
        })
    }
    const searchPokemon=async()=>{
        const toArray = []
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokeData(toArray);
        } catch (e){
            console.log(e)
        }
    }

    useEffect(()=>{
        pokeFun();
    },[url])
// END API 

    const handleChange = (e) =>{
        setPokemon(e.target.value.toLowerCase());
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        searchPokemon();
    }

    const clickDetail = (e) => {
        setPokemon(e);
    }

    return(
        <div className="header">
            <Search handleChange={handleChange} handleSubmit={handleSubmit}/>
            {pokemonType ? 
                <Details pokeDex={pokeDex} pokeData={pokeData} 
                            loading={loading} setPokeDex={setPokeDex} prevUrl={prevUrl}
                            setPokeData={setPokeData} nextUrl={nextUrl} clickDetail={clickDetail} handleSubmit={handleSubmit}
                            setUrl={setUrl} setPokeDatas={setPokeData} infoPokemon={poke=>setPokeDex(poke)}/>
            :(
                <HomePage pokeDex={pokeDex} pokeData={pokeData} 
                            loading={loading} setPokeDex={setPokeDex} prevUrl={prevUrl}
                            setPokeData={setPokeData} nextUrl={nextUrl}
                            setUrl={setUrl} setPokeDatas={setPokeData}/>

            )}
        </div>
        // <div className="header">
        //     <Search/>
        //     <div className="container">
        //         <div className="left-content">
        //             <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
        //             <div className="btn-group">
        //                 { prevUrl && <button onClick={()=>{setPokeData([]); setUrl(prevUrl)}}>Previous</button>}
        //                 { nextUrl && <button onClick={()=>{setPokeData([]); setUrl(nextUrl)}}>Next</button>}
        //             </div>
        //         </div>
        //         <div className="right-content">
        //             <Pokeinfo data={pokeDex}/>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Main;