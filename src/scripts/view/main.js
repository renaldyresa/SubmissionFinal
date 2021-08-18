import "../component/movie-detail.js"
import $ from "jquery/dist/jquery.min.js";
import DataSource from "../resource/data-source.js";
import Category from "./category.js";



const main = () => {
    const popularMovies = new Category({
        className: ".popular",
        title: "Popular",
        dataSourceFunc: DataSource.popularMovies
    });
    popularMovies.getData();

    const nowPlayingMovies = new Category({
        className: ".now-playing",
        title: "Now Playing",
        dataSourceFunc: DataSource.nowPlayingMovies
    })
    nowPlayingMovies.getData();

    const topRated = new Category({
        className: ".top-rated",
        title: "Top Rated",
        dataSourceFunc: DataSource.topRatedMovies
    })
    topRated.getData();

    document.getElementById('myButton').addEventListener('click', function(event) {
        console.log($("#exampleModal"));
        $("#exampleModal").modal('show');
    });

}

export default main;