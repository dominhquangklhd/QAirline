// LatestNews.jsx
import React, { useRef } from "react";
import Slider from "react-slick";
import CardPost from "./Card_post";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Post.scss";

const Post = () => {
  const sliderRef = useRef(null);

  // Let's assume we have an array of posts to make it clearer
  const posts = [
    {
      id: 1,
      title: "Hello",
      subtitle: "blog.subtitle",
      cover_url: "SRC.blog_cover/blog.cover_url",
    },
    {
      id: 2,
      title: "Hello",
      subtitle: "blog.subtitle",
      cover_url: "SRC.blog_cover/blog.cover_url",
    },
    {
      id: 3,
      title: "Hello",
      subtitle: "blog.subtitle",
      cover_url: "SRC.blog_cover/blog.cover_url",
    },
    {
      id: 3,
      title: "Hello",
      subtitle: "blog.subtitle",
      cover_url: "SRC.blog_cover/blog.cover_url",
    },
    {
      id: 3,
      title: "Hello",
      subtitle: "blog.subtitle",
      cover_url: "SRC.blog_cover/blog.cover_url",
    },
    {
      id: 3,
      title: "Hello",
      subtitle: "blog.subtitle",
      cover_url: "SRC.blog_cover/blog.cover_url",
    },
    {
      id: 3,
      title: "Hello",
      subtitle: "blog.subtitle",
      cover_url: "SRC.blog_cover/blog.cover_url",
    },
    {
      id: 3,
      title: "Hello",
      subtitle: "blog.subtitle",
      cover_url: "SRC.blog_cover/blog.cover_url",
    },
    {
      id: 3,
      title: "Hello",
      subtitle: "blog.subtitle",
      cover_url: "SRC.blog_cover/blog.cover_url",
    },
    // ... more posts
  ];

  const settings = {
    dots: posts.length > 5, // Only show dots if more than 5 posts
    infinite: posts.length > 5, // Only make it infinite if more than 5 posts
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: posts.length > 5, // Only autoplay if more than 5 posts
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, posts.length), // Show maximum 2 or all posts if less
          slidesToScroll: 1,
          infinite: posts.length > 2,
          dots: posts.length > 2,
          autoplay: posts.length > 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: posts.length > 1,
          dots: posts.length > 1,
          autoplay: posts.length > 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: posts.length > 1,
          dots: posts.length > 1,
          autoplay: posts.length > 1,
        },
      },
    ],
  };

  // Only show navigation buttons if there are more than 5 posts
  const showNavigation = posts.length > 5;
  // const showNavigation = true;
  const handleNext = () => sliderRef.current?.slickNext();
  const handlePrev = () => sliderRef.current?.slickPrev();

  return (
    <div className="latest-news">
      <div className="latest-news__container">
        <div className="latest-news__header">
          <h1 className="latest-news__title">
            <span>Latest News</span>
          </h1>
        </div>

        <div className="latest-news__slider-container">
          {showNavigation && (
            <>
              <button
                onClick={handlePrev}
                className="latest-news__nav-button latest-news__nav-button--prev"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="latest-news__nav-button latest-news__nav-button--next"
              >
                Next
              </button>
            </>
          )}

          <Slider ref={sliderRef} {...settings} className="latest-news__slider">
            {posts.map((post) => (
              <CardPost
                key={post.id}
                _id={post.id}
                title={post.title}
                subtitle={post.subtitle}
                cover_url={post.cover_url}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Post;
