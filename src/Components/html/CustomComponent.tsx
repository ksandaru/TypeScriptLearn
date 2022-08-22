import React from "react";
import Greet from "../Greet";

//use the prop types of greet component in here easily... WooW! Great
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return(
        <div>
            <h1>{props.firstname}</h1>
            <h1>{props.age}</h1>
        </div>
    )

}