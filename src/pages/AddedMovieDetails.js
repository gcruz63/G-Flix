import './MovieDetails.css'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import requests from '../requests'
// import StarRating from '../components/StarRating/Star'

// function MovieDetails() {
//     //set useState to null to make sure the page only loads when there is details
//     const [details, setMovieDetails] = useState(null)
//     //useParams grabs the parameters past to the url it can have multiple parameters
//     const { movieId } = useParams()


//     // only return dom when we have data in details
//     return details && (
//         <div className='MovieDetails'>
//             <img width='450' src={`https://image.tmdb.org/t/p/original${details.backdrop_path ? details.backdrop_path : details.poster_path}`} />
//             {/* <img width='450' src={`https://image.tmdb.org/t/p/original${details.poster_path ? details.poster_path : details.backdrop_path}`} /> */}

//             {details.overview}
//             {details.genres?.map((gen) => {
//                 return <div key={gen.id} value={gen.id}>{gen.name}</div>
//             })}
//             <StarRating />
//         </div>
//     )
// }

// export default MovieDetails
