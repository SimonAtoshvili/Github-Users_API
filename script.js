const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");
const mode = document.getElementById("mode");
const dataUrl = "https://api.github.com/users/";

const img = document.querySelector("img");
const naame = document.querySelector("h1");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const joinTime = document.getElementById("join-time");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const locationPlace = document.getElementById("location");
const twitter = document.getElementById("twitter");
const blog = document.getElementById("blog");
const office = document.getElementById("office");

searchButton.addEventListener("click", function(){
    let val = searchField.value;
    let userUrl = dataUrl + val;
    let func = async () => {
        const response = await fetch(userUrl);
        const data = await response.json();

        img.src = data.avatar_url;
        naame.innerText = data.name;
        username.innerText = "@" + data.login;
        bio.innerText = data.bio ? data.bio : "This profile has no bio";

        const date = new Date(data.created_at);
        const day = date.getDate();
        const month = date.toLocaleDateString("default", {month: 'short'});
        const year = date.getFullYear();
        joinTime.innerText = data.created_at ? "Joined " + day + " " + month + " " + year : "Joined Unknow";

        repos.innerText = data.public_repos;
        followers.innerText = data.followers;
        following.innerText = data.following;
        locationPlace.innerText = data.location ? data.location : "Unknown";
        twitter.innerText = data.twitter_username ? data.twitter_username : "Unknown";
        blog.innerText = data.blog ? data.blog : "Unknown";
        office.innerText = data.company ? data.company : "Unknown"

    }

    func();
})

const container = document.querySelector(".container");
const head = document.querySelector(".head");
const search = document.querySelector(".search");
const mainSec = document.querySelector(".main_section");
const numbersDiv = document.querySelector(".numbers");

mode.addEventListener("click", function(){
    container.classList.toggle("container_light");
    head.classList.toggle("head_light");
    search.classList.toggle("search_light");
    searchField.classList.toggle("input_light");
    mainSec.classList.toggle("main_section_light");
    numbersDiv.classList.toggle("numbers_light");
})

const searchIcon = document.querySelector(".fa-magnifying-glass");

searchIcon.addEventListener("click", function(){
    searchField.focus();
})