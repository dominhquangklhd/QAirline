import React, { useState } from "react";
import axios from "axios";

const AdminPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    content: "",
    imageBase64: "", // Store base64 string
    createdAt: new Date(),
  });
  const [preview, setPreview] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFormData((prev) => ({
          ...prev,
          imageBase64: base64String,
        }));
        setPreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/posts", formData);

      if (response.data.success) {
        alert("Post created successfully!");
        // Reset form
        setFormData({
          title: "",
          subtitle: "",
          content: "",
          imageBase64: "",
        });
        setPreview("");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Error creating post");
    }
  };

  return (
    <div className="admin-post-form">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Subtitle:</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Content:</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Cover Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" style={{ maxWidth: "200px" }} />
            </div>
          )}
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default AdminPostForm;
