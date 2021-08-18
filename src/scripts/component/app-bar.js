class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light p-2">
            <a class="navbar-brand">
                <img class="icon-bar" src="./src/images/movie.png" alt="Italian Trulli">
                <h2>MOVIES</h2>
            </a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            </form>
        </nav>
        ` ;
    }
}

customElements.define("app-bar", AppBar);