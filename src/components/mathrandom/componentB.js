import React from 'react';
import ComponentC from './componentC';


function ComponentB (props) {

    return(
        <>
            <ComponentC f2={props.f1} />
        </>
    )
}
export default ComponentB;