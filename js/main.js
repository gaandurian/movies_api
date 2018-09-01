var movie

fetch(`https://api.themoviedb.org/3/search/movie?api_key=9ae610065f5ba26bd6dd4c300b1f56f9&query=${prompt('het movie id')}`, {
        method: 'get'
    })
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData)
        jsonData.results.map(function( movie) {
            $('body').append(`<h1>${ movie.title }</h1>`)
            $('body').append(`<p>${ movie.overview }</p>`)
        })
        $('body').append(`<h1>${ jsonData.results[0].title }</h1>`)
        $('body').append(`<p>${ jsonData.results[0].overview }</p>`)
        $('body').append(`<img src=https://api.themoviedb.org/3/movie/${jsonData.backdrop_path}>`)
    })
    .catch(err => {
            //error block
        })

