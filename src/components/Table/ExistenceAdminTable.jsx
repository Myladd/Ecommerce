
import axios from "axios";
import CountAndPrice from "components/Pagination/CountAndPrice";
import Pagination from "components/Pagination/Pagination";
import React, { useEffect, useState } from "react";

function ExistenceAdminTable() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:3001/products');
        setPosts(res.data);
        setLoading(false);
        console.log(res.data);
      };
      fetchPosts();
    }, []);
  
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    return (
      <div className='container mt-5'>
      <CountAndPrice posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ExistenceAdminTable;