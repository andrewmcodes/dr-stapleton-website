import React from 'react'
import Slider from 'react-slick'

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  speed: 800,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true,
}

const Carousel = () => (
  <Slider {...settings}>
    <div>
      <p className="comment-items">
        I’m in the middle of the 2nd year in the Immunobiology PhD program at
        University of Arizona- and I am absolutely loving it! I remind myself
        quite often how lucky I am to have the opportunity to further my
        education here and I know I wouldn’t be here if it wasn’t for you. I
        really appreciate you allowing me to work in your lab and providing me
        with guidance when I applied for school. I just wanted to touch base
        with you and say thanks for being a great mentor and taking the time to
        help us confused students!
      </p>
    </div>
    <div>
      <p className="comment-items">
        Being a new college student, I don’t think I was ready for the challenge
        of honors biology. It was a daunting challenge, but I know now that it
        really prepared me for my future classes. I’m taking a genetics class
        this semester, and I think it’s because of taking Honors Bio 201 that I
        am having an easier time than some of my other classmates. I just wanted
        to thank you for challenging me and preparing me for future classes
        because I don’t think I appreciated it at this time a year and a half
        ago.
      </p>
    </div>
    <div>
      <p className="comment-items">
        As my undergrad experience comes to an end I wanted to that you for all
        the initial effort you put into my education. From the thought provoking
        Honors Bio201 class to helping my find a lab that conducted research I
        liked, and everything in between…I really appreciated it.
      </p>
    </div>
    <div>
      <p className="comment-items">
        Thank you so much for serving on my honors committee, but even more,
        thank you for your constant guidance throughout my undergraduate career.
        I can honestly say that I would not be where I am without your expertise
        and kindness. Thank you for believing in me when I didn’t believe in me.
        Thank you for pushing us all to the limit in “Bio Bootcamp”. Thank you
        for never being too busy to help or talk. I feel truly honored to have
        had the opportunity to learn from you.
      </p>
    </div>
    <div>
      <p className="comment-items">
        You supported and guided me in my college career. You were my first
        biology professor. Your class was hard, but it prepared me for more
        difficult courses down the road. You were on my Honors project
        committee, and your advice was invaluable.
      </p>
    </div>
    <div>
      <p className="comment-items">
        I wanted to take a second to thank you from the bottom of my heart for
        the opportunity to be your student and work in your lab. I have grown
        immeasurably as a student and scientist during my time with you and have
        gained so many skills that I know I can take with me into the
        professional world and into graduate school. You have been a great
        mentor to me. Thank you again for all that you've done for me!
      </p>
    </div>
  </Slider>
)

export default Carousel
