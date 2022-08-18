import axios from "axios";
import Carousel1 from "components/Carousel/CarouselHome";
import Header from "layouts/PublicHeader";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import melon from "assets/images/melon.png";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3001/products");
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <Carousel1 />
        <Row xs={1} md={2} className="g-4 mt-3">
          {posts.map((item) => (
            <Col className='d-flex justify-content-center'>
              <Card style={{ width: "18rem" }} key={item.id}>
                <Card.Img variant="top" src={melon} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>متن مربوط به هر محصول</Card.Text>
                  <Button variant="primary">خرید</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </>
  );
}

export default Home;
