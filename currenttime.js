(function () {
    const TEMPLATE = document.createElement("template");
    const TEMPLATECONTENT = `
    
	<p id="output"></p>`;

    TEMPLATE.innerHTML = TEMPLATECONTENT;

    class CT extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({
                mode: 'open'
            });

            this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
        }

        connectedCallback() {

            const output = this.shadowRoot.getElementById("output");
            const date =new Date();
            let day =date.getDate();
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            let month =months[date.getMonth()];
            let year = date.getFullYear();
            let h =date.getHours();
            let m = date.getMinutes();

            output.innerHTML= day+"/"+month+"-"+year+"  "+h+":"+m;
        }
    }

    
    window.customElements.define('m-time', CT);
})();