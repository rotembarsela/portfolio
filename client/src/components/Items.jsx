import React from 'react'

const Items = ({ items, loading, selectedPokemon, setSelectedPokemon }) => {
    return (
        <>
            {loading ? <h2>Loading...</h2> :
                <ul className='flex flex-col gap-4 md:gap-1'>
                    {items.map(item => (
                        <li key={item.dexNo} name={item.name.toLowerCase()} className={`${selectedPokemon?.name === item.name ? 'pokemon-active' : 'pokemon'}`} onClick={() => setSelectedPokemon(item)}>
                            <p className='overflow-ellipsis overflow-hidden whitespace-nowrap'>{item.name}</p>
                            <img src={item.iconImg} alt='image' />
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}

export default Items