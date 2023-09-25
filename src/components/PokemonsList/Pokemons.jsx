import { useEffect, useState } from "react"
import Card from "../Card/Card"
import styles from "./Pokemons.module.css"
import Navbar from "../Navbar/Navbar"

export default function Pokemons({pokemons,types}){

    const [page,setPage] = useState(0)
    const [pageNumber,setPageNumber] = useState(0)
    const [pageSize,setPageSize] = useState(12)
    const [displayPokemons, setDisplayPokemons] = useState([])

    useEffect(()=>{
        const pokemonsToDisplay = pokemons.slice(page,pageSize)
        setDisplayPokemons(pokemonsToDisplay)
    },[pokemons,page,pageSize])

    console.log(page,"-",pageSize,"-",pageNumber);

    const handlePage = (handler) => {
        switch(handler){
        case "next":
            if (pageNumber <= Math.ceil(pokemons.length / 12)) {
                setPage(page + 12);
                setPageSize(pageSize + 12);
                setPageNumber(pageNumber +1)
            }
            break
        case "prev":
            if (pageNumber >= 1) {
                setPage(page - 12);
                setPageSize(pageSize - 12)
                setPageNumber(pageNumber -1)
            }
            break
        default:
            break;
        }
    }

    // const pageHandler = () => {
    //     setPage((page-1)*12);
    //     setPageSize((page-1)*12+12);
    //     setPageNumber(page-1)
    // }

    return <div className={styles.elementContainer}>
                <div className={styles.navContainer}>
                    <Navbar types={types} />
                </div>
                <div className={styles.mainContainer}>
                    <div className={styles.cardContainer}>
                        {displayPokemons.map( pokemon =>{
                            return <Card key={pokemon?.id} data={pokemon}/>
                        })}
                    </div>
                    {/* <div className={styles.pageBar}>
                    {page >= 1 && <button className={styles.buttons} onClick={()=>handlePage("prev")} > Previous Page</button>}
                            {((page/pokemons.length) < 1) && <button className={styles.buttons} onClick={()=>pageHandler(pageNumber+1)}>{pageNumber+1}</button>}
                            <button hidden = {(((page+12)/pokemons.length) >= 1)} className={styles.buttons} onClick={()=>pageHandler(pageNumber+2)}>{pageNumber+2}</button>
                            <button hidden = {(((page+24)/pokemons.length) >= 1)} className={styles.buttons} onClick={()=>pageHandler(pageNumber+3)}>{pageNumber+3}</button>
                    {(page >= 0 && displayPokemons.length === 12) && <button className={styles.buttons} onClick={()=> handlePage("next")} >Next Page</button> }
                    </div> */}
                    <div className={styles.pageBar}>
                        {page >= 1 && <button className={styles.buttons} onClick={()=>handlePage("prev")} > Previous Page</button>}
                        <input className={styles.inputPage} type="number" value={pageNumber+1} /> <span className={styles.textSpan}>of {Math.ceil(pokemons.length / 12)}</span>
                        {(page >= 0 && displayPokemons.length === 12) && <button className={styles.buttons} onClick={()=> handlePage("next")} >Next Page</button> }
                    </div>
                </div>
            </div>
}