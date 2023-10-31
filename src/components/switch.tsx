export function Switch(){

    function togleMode() {
        const html = document.documentElement
        html.classList.toggle('light')
    
    }

    return(
        <div id="switch">
            <button onClick={togleMode}></button>
            <span></span>
        </div>
    );
}