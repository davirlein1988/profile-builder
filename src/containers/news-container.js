import React, { useState, useEffect } from 'react';
import { News } from '../components';
import axios from 'axios';

export function NewsContainer() {
  const [items, setItems] = useState([]);

  async function getNews() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=4'
    );
    setItems(data);
  }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <News id="blog" className="fix">
      <News.Box className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
        <News.Box className="container">
          <News.Row className="row align-items-end">
            <News.Col className="col-lg-12 col-md-12 col-sm-12 col-12">
              <News.Box className="section-title text-center">
                <h2>Latest News</h2>
                <p>
                  What's going on in the tech world, trending software
                  <br />
                  something to share with the world
                </p>
              </News.Box>
            </News.Col>
          </News.Row>
          <News.Row className="row align-items-end">
            <News.Items className="row mt--60 mt_sm--40">
              {items.map((item, i) => (
                <News.Col className="col-lg-4 col-md-6 col-12" key={i}>
                  <News.Box className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href="/blog-details">
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${
                            0 + item.id.toString()
                          }.jpg`}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{item.title.substring(1, 10)}</p>
                      <h4 className="title">
                        <a href="/blog-details">{item.body.substring(1, 80)}</a>
                      </h4>
                      <div className="blog-btn">
                        <a className="rn-btn text-white" href="/blog-details">
                          Read More
                        </a>
                      </div>
                    </div>
                  </News.Box>
                </News.Col>
              ))}
            </News.Items>
          </News.Row>
        </News.Box>
      </News.Box>
    </News>
  );
}
