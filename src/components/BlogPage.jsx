import React, {useEffect } from 'react';  //when using blog cards import usestate
import './BlogPage.css';

// const dummyBlogs = [
//   {
//     id: 1,
//     title: 'Networking & Services',
//     content: 'This is a blog about networking and services. More technical insights will be provided here...',
//   },
//   {
//     id: 2,
//     title: 'Legal Basics for Startups',
//     content: 'Understand the basic legal structure and compliance needs for your startup.',
//   },
//   {
//     id: 3,
//     title: 'Your Rights as an Employee',
//     content: 'A comprehensive look at employment law and how it protects you.',
//   },
// ];

export default function BlogPage() {
  // const [blogs, setBlogs] = useState(dummyBlogs);
  // const [showEditor, setShowEditor] = useState(false);
  // const [modalBlog, setModalBlog] = useState(null);

  // Secret key to reveal editor
  // useEffect(() => {
  //   let typed = '';
  //   const handleKeyDown = (e) => {
  //     typed += e.key;
  //     if (typed.toLowerCase().includes('aceattorn')) {
  //       setShowEditor(true);
  //     }
  //   };
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // }, []);

  // ✅ Instagram script (Fouita)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://wdg.fouita.com/widgets/0x2b633f.js';
    script.async = true;
    document.body.appendChild(script);

    return () => script.remove();
  }, []);

  // ✅ LinkedIn Newsletter script (RSS.app)
  useEffect(() => {
    const oldScript = document.querySelector("script[src='https://widget.rss.app/v1/carousel.js']");
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.src = "https://widget.rss.app/v1/carousel.js";
    script.async = true;
    document.body.appendChild(script);

    return () => script.remove();
  }, []);

  // Blog actions
  // const addBlog = () => {
  //   const title = prompt('Enter blog title:');
  //   const content = prompt('Enter blog content:');
  //   if (title && content) {
  //     const newBlog = { id: Date.now(), title, content };
  //     setBlogs([...blogs, newBlog]);
  //   }
  // };

  // const removeBlog = (id) => {
  //   setBlogs(blogs.filter((b) => b.id !== id));
  // };

  // const updateBlog = (id) => {
  //   const updatedTitle = prompt('Enter new title:');
  //   const updatedContent = prompt('Enter new content:');
  //   setBlogs(
  //     blogs.map((blog) =>
  //       blog.id === id ? { ...blog, title: updatedTitle, content: updatedContent } : blog
  //     )
  //   );
  // };

  return (
    <div className="blog-page">
      {/* <h1 className="blog-header">Our Blogs</h1> */}
      {/* <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 100)}...</p>
            <button onClick={() => setModalBlog(blog)}>Read More</button>
            {showEditor && (
              <div className="editor-buttons">
                <button onClick={() => updateBlog(blog.id)}>Edit</button>
                <button onClick={() => removeBlog(blog.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div> */}

      {/* {showEditor && (
        <button className="add-button" onClick={addBlog}>Add New Blog</button>
      )} */}

      {/* {modalBlog && (
        <div className="modal-overlay" onClick={() => setModalBlog(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>{modalBlog.title}</h2>
            <div className="modal-content">{modalBlog.content}</div>
            <button onClick={() => setModalBlog(null)}>Close</button>
          </div>
        </div>
      )} */}

      {/* ✅ LinkedIn Newsletter Embed Section */}
      <div className="newsletter-feed">
        <h2 className="newsletter-heading">📩 Our LinkedIn Newsletter</h2>
        <rssapp-carousel id="N6ApjSEILWbA4uXN"></rssapp-carousel>
      </div>

      {/* 📸 Instagram Carousel Feed Section */}
      <div className="instagram-feed">
        <h2 className="instagram-heading">Our Social Media Updates</h2>
        <div data-key="Carousel Instagram Feed" className="ft" id="ftsrc5wuk" style={{ minHeight: '500px' }}></div>
      </div>
    </div>
  );
}
