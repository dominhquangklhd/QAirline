import React, {useState, useRef} from "react";
import '../../Pages/HomePage/Post.scss';
import CardPost from "../../Pages/HomePage/Card_post";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Posts() {
    const sliderRef = useRef(null);
    const [selectedPost, setSelectedPost] = useState(null);
    const [editingPost, setEditingPost] = useState(null);
    const [isAddingPost, setIsAddingPost] = useState(false);
    const [error, setError] = useState("");
    const [newPost, setNewPost] = useState({
        id: "",
        title: "",
        subtitle: "",
        content: "",
        cover_url: "",
    });


    const [posts, setPosts] = useState([
        {
          id: 1,
          title: "Hello1",
          subtitle: "blog.subtitle",
          cover_url: "SRC.blog_cover/blog.cover_url",
          content: "Detailed content for the post goes here. You can add more properties from the selected post if needed.",
        },
        {
          id: 2,
          title: "Hello2",
          subtitle: "blog.subtitle",
          cover_url: "SRC.blog_cover/blog.cover_url",
          content: "Detailed content for the post goes here. You can add more properties from the selected post if needed.",
        },
        {
          id: 3,
          title: "Hello3",
          subtitle: "blog.subtitle",
          cover_url: "SRC.blog_cover/blog.cover_url",
          content: "Detailed content for the post goes here. You can add more properties from the selected post if needed.",
        },
        {
          id: 4,
          title: "Hello4",
          subtitle: "blog.subtitle",
          cover_url: "SRC.blog_cover/blog.cover_url",
          content: "Detailed content for the post goes here. You can add more properties from the selected post if needed.",
        },
        {
          id: 5,
          title: "Hello5",
          subtitle: "blog.subtitle",
          cover_url: "SRC.blog_cover/blog.cover_url",
          content: "Detailed content for the post goes here. You can add more properties from the selected post if needed.",
        },
        {
          id: 6,
          title: "Hello6",
          subtitle: "blog.subtitle",
          cover_url: "SRC.blog_cover/blog.cover_url",
          content: "Detailed content for the post goes here. You can add more properties from the selected post if needed.",
        },
        {
          id: 7,
          title: "Hello7",
          subtitle: "blog.subtitle",
          cover_url: "SRC.blog_cover/blog.cover_url",
          content: "Detailed content for the post goes here. You can add more properties from the selected post if needed.",
        },
        {
          id: 8,
          title: "Hello8",
          subtitle: "blog.subtitle",
          cover_url: "SRC.blog_cover/blog.cover_url",
          content: "Detailed content for the post goes here. You can add more properties from the selected post if needed.",
        },
        {
          id: 9,
          title: "Hello9",
          subtitle: "blog.subtitle",
          cover_url: "SRC.blog_cover/blog.cover_url",
          content: "Detailed content for the post goes here. You can add more properties from the selected post if needed.",
        },
    ]);

    const settings = {
        dots: posts.length > 5, // Only show dots if more than 5 posts
        speed: 500,
        infinite: posts.length > 5,
        slidesToShow: 5,
        slidesToScroll: 1,
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

    const handleAddPost = (e) => {
        e.preventDefault();
        if (!newPost.title.trim() || !newPost.content.trim()) {
            setError("Title and content are required!");
            return;
        }
        setPosts([...posts, { ...newPost, id: posts.length + 1 }]); // Add new post
        setIsAddingPost(false); // Close modal
        setNewPost({ id: "", title: "", subtitle: "", content: "", cover_url: "" }); // Reset form
        setError(""); // Clear error
    };
    

    const handlePostClick = (post) => {
        setSelectedPost(post); // Set the clicked post as selected
    };

    const handleEdit = (post) => {
        setEditingPost(post);
    };

    const saveChanges = () => {
        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === editingPost.id ? editingPost : post))
        );
        setEditingPost(null);
        setSelectedPost(editingPost);
      };
    
    const handleDelete = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    setSelectedPost(null);
    //Delete logic them vao day ...
    };
    

    return (
        <div className="posts">
            <button className="add-post-button" onClick={() => setIsAddingPost(true)}>
                Add New Post
            </button>
            <div className="latest-news">
                <div className="latest-news__container">
                    <div className="latest-news__header">
                        <h1 className="latest-news__title">
                            <span>Latest Posts</span>
                        </h1>
                    </div>

                    <div className="latest-news__slider-container">
                        {showNavigation && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="latest-news__nav-button latest-news__nav-button--prev"
                                >
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="latest-news__nav-button latest-news__nav-button--next"
                                >
                                </button>
                            </>
                        )}

                        <Slider ref={sliderRef} {...settings} className="latest-news__slider">
                            {posts.map((post) => (
                                <div key={post._id} onClick={() => handlePostClick(post)}>
                                    <CardPost
                                    _id={post.id}
                                    title={post.title}
                                    subtitle={post.subtitle}
                                    cover_url={post.cover_url}
                                    className={selectedPost === post._id ? 'news-card news-card--active' : 'news-card'}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* Expanded content rendered below the slider */}
                {selectedPost && (
                    <div className="expanded-post-section">
                        <h2>{selectedPost.title}</h2>
                        <p>{selectedPost.subtitle}</p>
                        <p>{selectedPost.content}</p>
                        <img src={selectedPost.cover_url} alt={selectedPost.title} />
                        <div className="buttons">
                            <button onClick={() => handleEdit(selectedPost)}>Edit</button>
                            <button onClick={() => handleDelete(selectedPost._id)}>Delete</button>
                            <button onClick={() => setSelectedPost(null)}>Close</button>
                        </div>
                    </div>
                )}
                {isAddingPost && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h3>Add New Post</h3>
                            <form onSubmit={handleAddPost}>
                                {error && <p className="error-message">{error}</p>}
                                <input
                                    type="text"
                                    value={newPost.title}
                                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                    placeholder="Enter Title"
                                />
                                <input
                                    type="text"
                                    value={newPost.subtitle}
                                    onChange={(e) => setNewPost({ ...newPost, subtitle: e.target.value })}
                                    placeholder="Enter Subtitle"
                                />
                                <textarea
                                    value={newPost.content}
                                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                    placeholder="Enter Content"
                                ></textarea>
                                <input
                                    type="text"
                                    value={newPost.cover_url}
                                    onChange={(e) => setNewPost({ ...newPost, cover_url: e.target.value })}
                                    placeholder="Enter Cover URL"
                                />
                                <button type="submit">Add</button>
                                <button onClick={() => setIsAddingPost(false)}>Cancel</button>
                            </form>
                        </div>
                    </div>
                )}


                {editingPost && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h3>Edit Post</h3>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    saveChanges(editingPost); // Save the changes
                                }}
                            >
                                <input
                                    type="text"
                                    value={editingPost.title}
                                    onChange={(e) =>
                                        setEditingPost({ ...editingPost, title: e.target.value })
                                    }
                                    placeholder="Edit Title"
                                />
                                <input
                                    type="text"
                                    value={editingPost.subtitle}
                                    onChange={(e) =>
                                        setEditingPost({ ...editingPost, subtitle: e.target.value })
                                    }
                                    placeholder="Edit Subtitle"
                                />
                                <textarea
                                    value={editingPost.content}
                                    onChange={(e) =>
                                        setEditingPost({ ...editingPost, content: e.target.value })
                                    }
                                    placeholder="Edit Content"
                                ></textarea>
                                <input
                                    type="text"
                                    value={editingPost.cover_url}
                                    onChange={(e) =>
                                        setEditingPost({ ...editingPost, cover_url: e.target.value })
                                    }
                                    placeholder="Edit Cover URL"
                                />
                                <button type="submit">Save</button>
                                <button onClick={() => setEditingPost(null)}>Cancel</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Posts;
