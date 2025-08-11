import React, { useContext } from "react";
import "./blog.css";
import { Context } from "../../context/Context";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = ({ posts }) => {
  const { user } = useContext(Context);
  const PublicFlo = "https://taara-backend.onrender.com/images/";

  return (
    <>
      {/* Add New Post Button */}
      {user && (
        <div className="add-post-container">
          <Link to="/create" className="add-post-button">
            ➕ Add New Post
          </Link>
        </div>
      )}

      {/* Static Blogs */}
      <div className="static-blogs-container">
        {blogs.map(blog => (
          <div className="static-blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="static-blog-image" />
            <div className="static-blog-content">
              <h3 className="static-blog-title">{blog.title}</h3>
              <p className="static-blog-description">{blog.description}</p>
              <div className="static-blog-footer">
                <span>{blog.date}</span>
                <Link to={`/blog/${blog.id}`} className="read-more">Read More →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Blog Posts */}
      <section className="blog">
        <div className="container grid3">
          {Array.isArray(posts) &&
            posts.map((item) => (
              <div className="box boxItems" key={item._id}>
                <div className="img">
                  {item.photo && (
                    <img src={PublicFlo + item.photo} alt="post" />
                  )}
                </div>
                <div className="details">
                  <div className="tag">
                    <AiOutlineTags className="icon" />
                    {Array.isArray(item.categories) &&
                      item.categories.map((c, index) => (
                        <a href="/" key={index}>
                          #{c.name}
                        </a>
                      ))}
                  </div>
                  <Link to={`/post/${item._id}`}>
                    <h3>{item.title || "Untitled Post"}</h3>
                  </Link>
                  <p>
                    {item.desc
                      ? item.desc.slice(0, 180) + "..."
                      : "No description available."}
                  </p>
                  <div className="date">
                    <AiOutlineClockCircle className="icon" />
                    <label>
                      {item.createdAt
                        ? new Date(item.createdAt).toDateString()
                        : "Date not available"}
                    </label>
                    <AiOutlineComment className="icon" /> <label>27</label>
                    <AiOutlineShareAlt className="icon" /> <label>SHARE</label>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

const blogs = [
  {
    id: 1,
    title: "The Power of Community",
    description: "How small actions lead to big change.",
    image: "https://via.placeholder.com/400x200",
    author: "Admin",
    date: "2025-08-11"
  },
  {
    id: 2,
    title: "Empowering Women Through Education",
    description: "Stories from our outreach programs.",
    image: "https://via.placeholder.com/400x200",
    author: "Admin",
    date: "2025-08-10"
  },
  {
    id: 3,
    title: "Sustainable Living Tips",
    description: "Easy changes for a greener planet.",
    image: "https://via.placeholder.com/400x200",
    author: "Admin",
    date: "2025-08-09"
  }
];
