import React from "react";

const Pokeinfo=({data})=>{
    return(
        <>
            {
                (!data) ? "" : (
                    <div className="pokemon-card">
                        <div className="img-container">
                            <img src={data.sprites.other.home.front_default}/>
                        </div>
                        <div className="detail-container">
                            <div className="title-container">
                                <h1>{data.name}</h1>
                                <hr className="seperator"/>
                                <div className="stats">
                                    {
                                        data.stats.map((poke,index)=>{
                                            if(index == 0){
                                                return(
                                                    <span className="first" key={index}>HP {poke.base_stat}</span>
                                                )
                                            }
                                        })
                                    }
                                    <span className="cp-text">XP {data.base_experience}</span>
                                </div>
                            </div>
                            <button className="btn-transfer">DETALHES</button>
                            <div className="attributes-container">
                                <div className="attributes-content">
                                    <p className="cp-text">{data.weight}</p>
                                    <small className="text-muted">Weight</small>
                                </div>
                                <div className="attributes-content">
                                    <p className="cp-text">{data.height}</p>
                                    <small className="text-muted">Height</small>
                                </div>
                            </div>
                            <div className="player-data">
                                <div className="data-container">
                                    {
                                        data.types.map(poke=>{
                                            return(
                                                <>
                                                    <img key={poke.slot} src={'src/img/' + poke.type.name + '.svg'}/>
                                                    <p key={poke.type.name} className="stardust">{poke.type.name}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default Pokeinfo;