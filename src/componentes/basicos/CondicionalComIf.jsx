import React from "react";
import If from "./If"

export default props => {
    return (
        <div>
            <h2>O numero {props.numero}</h2>
            <If test={props.numero % 2 === 0}>
                <span>É Par</span>
            </If>
            <If test={props.numero % 2 === 1}>
                : <span>É Impar</span>
            </If>

            {/*props.numero % 2 == 0 ?
                <span>É Par</span>
            : <span>É Impar</span>*/}
        </div>
    )
}