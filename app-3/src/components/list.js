import React, { useState} from 'react';
import Input from './input';

const ListInput = (props) => {
    
    const [arr] = useState(['Sushi','Audi R8','McLaren','Wagyu'])

    return(
        <div>
            <Input arr={arr} user={props.user}/>
        </div>
    )
    
}

export default ListInput;