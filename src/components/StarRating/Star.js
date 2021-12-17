import './Star.css'
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"


const StarRating = ({ movieId }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [currentUser] = useState(JSON.parse(localStorage.getItem("gflix_user")))

    const addRating = (ratingValue) => {
        const copy = { ...rating }

        copy.userId = currentUser.id
        copy.movieId = movieId
        copy.saveRating = ratingValue
        setRating(copy)
        saveRating(copy)


    }

    const saveRating = (ratingCopy) => {
        console.log(ratingCopy)
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ratingCopy)
        }
        fetch("http://localhost:8088/ratings", fetchOption)
            .then(() => {
                getItems()
            })


    }
    useEffect(() => {


        getItems()
    }, [movieId])
    const getItems = async () => {

        const resp = await fetch(`http://localhost:8088/ratings`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        const data = await resp.json();

        if (data === null) return;
        console.log(data)

        data.forEach((item) => {
            if (item.movieId === parseInt(movieId)) setRating(item)
        })

    }

    return (
        <div>
            {/* //gives you 5 empty arrays and puts star in each, */}
            {/* // the i is an iterator through the array */}
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name='rating'
                            value={ratingValue}
                            onClick={() => addRating(ratingValue)}
                        />
                        <FaStar
                            className='star'
                            // if rating value is less than or equal to hover or rating make it yellow if not make it grey
                            //hover comes before the rating so it will be grey whenever you hover over it
                            color={ratingValue <= (hover || rating?.saveRating) ? "#ffc107" : "#e4e5e9"}
                            size={50}
                            // when the mouse is hovering over show the value
                            onMouseEnter={() => setHover(ratingValue)}
                            // when it moves away set it to null
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating