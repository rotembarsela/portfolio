import React from 'react'

const PokemonDetails = ({ pokemon }) => {
    return (
        <div className='flex flex-col justify-between py-5 items-center w-full h-full p-2'>
            <p>PokedexNo:&nbsp;#{pokemon?.dexNo}</p>
            <p>Pokename:&nbsp;{pokemon?.name}</p>
            <img loading='lazy' className='w-48 h-48 border-2 cursor-pointer hover:border border-primary' src={`https://img.pokemondb.net/artwork/${pokemon?.name?.toLowerCase() || 'bulbasaur'}.jpg`} alt='pokemon' />
        </div>
    )
}

export default PokemonDetails