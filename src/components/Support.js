import React from 'react';

export const Support = () => {
    (function(d, m){  
        var kommunicateSettings = 
            {"appId":"3dbc0385d61ea40ddf74df7342b5f5e12","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

    const handleClick = () => {
        console.log("Hola");
    }

    return (
        <div className="km-sidemodal km-modal">
            <button onClick={ handleClick } >Hola!</button>
        </div>
    );
}