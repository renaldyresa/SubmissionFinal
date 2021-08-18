class MovieDetail extends HTMLElement {

    connectedCallback() {
        
        this.render();
    }

    render() {
        this.innerHTML = `
        `;
    }

}

customElements.define("movie-detail", MovieDetail);