import React from 'react';


  const FilmPoster = props => {
    const {url, title} = props
    // console.log(url)
    const posterUrl = "https://image.tmdb.org/t/p/w780" + url

    return (
      <div>
        <img src={url} alt={title} />
      </div>
    )
  }


export default FilmPoster;
