import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pd from "./Pd";
import axios from "axios";

const ItemListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ItemList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "haeundae" ? "haeundae" : `${category}`;
        var response;

        switch (query) {
          case "haeundae":
            response = await axios.get(
              "https://apis.data.go.kr/3330000/HeaundaeTourAttrInfoService/getTourAttrList?serviceKey=5I8gFkgEEZq%2FHx%2BJ7gcp%2FHjdj%2BNJuyPEbsuUiXGINYc7onaqfXdpBQ2hQT8EJdA9c0I7JN56jDKVIcZk0xWezw%3D%3D&pageNo=1&numOfRows=10&resultType=json"
            );

            console.log(response.data.getTourAttrList.item);
            setArticles(response.data.getTourAttrList.item);
            break;

          case "busantheme":
            response = await axios.get(
              "https://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=5I8gFkgEEZq%2FHx%2BJ7gcp%2FHjdj%2BNJuyPEbsuUiXGINYc7onaqfXdpBQ2hQT8EJdA9c0I7JN56jDKVIcZk0xWezw%3D%3D&pageNo=1&numOfRows=10&resultType=json"
            );

            console.log(response.data.getRecommendedKr.item);
            setArticles(response.data.getRecommendedKr.item);
            break;

          default:
            alert("카테고리 선택 해주세요.");
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <ItemListBlock>대기중.....</ItemListBlock>;
  }

  if (!articles) {
    console.log("articles 응답이 없습니다. ");
    return null;
  }

  return (
    <ItemListBlock>
      {articles.map((article, index) => (
        <Pd key={index} article={article} />
      ))}
    </ItemListBlock>
  );
};

export default ItemList;
