import React from "react";
import { useEffect } from 'react';

const useClickOutside = (handler) => {

    let ref = React.useRef();
    
    useEffect(() => {
    const maybeHandler = event => {
        if(!ref.current.contains(event.target)) {
            handler()
        }
    }
    document.addEventListener("mousedown", maybeHandler)

    return () => {
      // Cleanup the event listener
        document.removeEventListener("mousedown", maybeHandler)
    }
}, [handler])

    return ref 

}
export default useClickOutside
