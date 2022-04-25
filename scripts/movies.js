// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let moviediv=document.getElementById("movies");
let id;
async function searchMovies(){
    // http://www.omdbapi.com/?i=tt3896198&apikey=9a7ce8e4

    //http://img.omdbapi.com/?apikey=[yourkey]&

     try{
        const query=document.getElementById("search").value;

        let res=await fetch(`http://www.omdbapi.com/?s=${query}&apikey=9a7ce8e4`)

        let data=await res.json();
        console.log("data",data);

        let movies=data.search;

        return movies;

     }catch(err){
        console.log("err",err)
    }
}

function appendMovies(data){
    if(data==undefined){
        return false;

    }
    console.log(data);

    showDetail(data);
}

async function main(){
    let data=await searchMovies();

    if(data==undefined){
        return false;
    }
    appendmovies(data)
    console.log(data);

}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func();
    },delay)
}


function showDetail(el){

    data.forEach(function(el){

    
    let box1=document.createElement("div");

    let img=document.createElement("img");
    img.src=el.Poster;

    let title=document.createElement("h3")
    title.innerText=el.Title;

    let btn=document.createElement("button")
    btn.innerText="Book Now";

    box1.append(img,title,btn);

    document.getElementById("movies").append(box1);
 
 })
}

