import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'
import { Card, Grid } from '@nextui-org/react'
import { FavoritePokemos } from '../../components/ui/FavoritePokemos'

const FavoritesPage = () => {

    const [favoritePokemos, setFavoritePokemos] = useState<number[]>([])

    useEffect(() => {
    
        setFavoritePokemos(localFavorites.pokemons)

    }, [])
    

    return(
        <Layout title='Pokémons - favoritos'>
            {
                favoritePokemos.length === 0 
                ? <NoFavorites/>
                : <FavoritePokemos pokemonFavorite={favoritePokemos}/>
            }
           
        </Layout>
    )
}

export default FavoritesPage