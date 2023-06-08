import React from 'react';

import { useParams } from 'react-router-dom';
import Categories from '../Components/Categories';
import ItemList from '../Components/ItemList';


const ItemsPage = ({match}) => {

    const params = useParams();

    const category = params.category || 'haeundae';
    return (
     <>
        <Categories/>
        <ItemList category={category}/>
     </>
    );
};

export default ItemsPage;