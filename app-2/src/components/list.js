import React, { useState} from 'react';

const ListInput = () => {
    
    const [arr] = useState(['Sushi','Audi R8','McLaren','Wagyu'])

    const allArr = arr.map((e, i) => <h2 key={i}>{e}</h2>)

    return(
        <div>
            {allArr}
        </div>
    )
    
}

export default ListInput