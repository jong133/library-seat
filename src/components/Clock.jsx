import React from "react"

function Clock(props) {
    return (
        <div>
            <h1>
                { props.timeZone } &nbsp;
                { new Date().toLocaleTimeString(
                    'ko', 
                    {timeZone: props.timeZone}
                    )}
                
            
                
            </h1>
        </div>
    )
}
export default Clock