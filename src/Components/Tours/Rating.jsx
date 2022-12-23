import React from 'react'
import {AiFillStar} from "react-icons/ai"
import {ImStarHalf} from "react-icons/im"
import {HiOutlineStar} from "react-icons/hi"


const Rating = ({rating,reviews}) => {
  return (
    <div className='rating'>
      {rating >=1 ?(<AiFillStar className='rating-icon'/> ) :
       rating >=0.5 ? (<ImStarHalf className='rating-icon'/>) : <HiOutlineStar className='rating-icon'/> }

       {rating >=2 ?(<AiFillStar className='rating-icon'/> ) :
       rating >=1.5 ? (<ImStarHalf className='rating-icon'/>) : <HiOutlineStar className='rating-icon'/> }

       {rating >=3 ?(<AiFillStar className='rating-icon'/> ) :
       rating >=2.5 ? (<ImStarHalf className='rating-icon'/>) : <HiOutlineStar className='rating-icon'/> }

       {rating >=4 ?(<AiFillStar className='rating-icon'/> ) :
       rating >=3.5 ? (<ImStarHalf className='rating-icon'/>) : <HiOutlineStar className='rating-icon'/> }

       {rating >=5 ?(<AiFillStar className='rating-icon'/> ) :
       rating >=4.5 ? (<ImStarHalf className='rating-icon'/>) : <HiOutlineStar className='rating-icon'/> }

       <span>{rating}</span>
       <span>({reviews} reviews)</span>
    </div>
  )
}

export default Rating;
