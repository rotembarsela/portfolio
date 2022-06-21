import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { pokemonOptions } from '../api/rapidApiOptions'
import PaginationUtil from '../utils/PaginationUtil'
import Items from './Items'
import PokemonDetails from './PokemonDetails'

const Pagination = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(5) // bring back setter if you want to allow the user choose how many items per page
    const [selectedPokemon, setSelectedPokemon] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await axios.get(`https://poke-info-api.p.rapidapi.com/pokemons`, {
                headers: pokemonOptions.headers
            })
            setItems(res.data)
            setLoading(false)
        }

        fetchData()
    }, [])

    // Paginate Calcs
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
    const pageCount = Math.ceil(items.length / itemsPerPage)
    const onPageChange = ({ selected }) => {
        setCurrentPage(selected + 1)
    }

    useEffect(() => {
        if (!loading) {
            setSelectedPokemon(items[0])
        }
    }, [items, loading])

    return (
        <>
            <div className='flex flex-col md:flex-row md:gap-1 gap-3 h-full w-full bg-navbg p-3 md:p-2 md:pl-3'>
                <div className='w-full md:w-1/2'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='w-full h-[35vh] md:h-[34vh] md:mt-0 md:w-1/2'>
                            <Items loading={loading} items={currentItems} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
                        </div>
                    </div>
                    <div className='w-full overflow-auto overflow-y-hidden flex items-center pt-7 md:pt-3'>
                        {loading ? "" : <>
                            <PaginationUtil
                                pageCount={pageCount}
                                onPageChange={onPageChange}
                                currentPage={currentPage}
                            />
                        </>}
                    </div>
                </div>
                {loading ? "" :
                    <>
                        <div className='flex-row flex md:w-1/2'>
                            <PokemonDetails pokemon={selectedPokemon} />
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Pagination