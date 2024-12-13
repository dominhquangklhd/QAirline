// LatestNewsCard.jsx
import React from "react";
import PropTypes from "prop-types";
import "./Post.scss";

const CardPost = ({ _id, title, subtitle, cover_url }) => {
  return (
    <div className="news-card">
      <img src={cover_url} alt={title} className="news-card__image" />
      <div className="news-card__content">
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__subtitle">{subtitle}</p>
      </div>
    </div>
  );
};
CardPost.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cover_url: PropTypes.string.isRequired,
};

export default CardPost;