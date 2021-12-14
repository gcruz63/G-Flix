import './Star.css'
import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa"

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div>
            {/* //give you 5 empty arrays and puts star in each, */}
            {/* // the i is an iterator through the array */}
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name='rating'
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            className='star'
                            // if rating value is less than or equal to hover or rating make it yellow if not make it grey
                            //hover comes before the rating so it will be grey whenever you hover over it
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
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