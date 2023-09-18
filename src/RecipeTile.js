import React from 'react';
import './RecipeTile.css';

export default function RecipeTile({recipe}) {
  return (
    <div className='RecipeTile' >
    <img className='Images' src={ recipe["recipe"]["image"] } alt={'alt'} />
        <p className='ParaName'>{recipe["recipe"]["label"]}</p>
    </div>
  )
}
