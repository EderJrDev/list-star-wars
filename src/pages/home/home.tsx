import React, { useEffect, useState } from "react";
import { Card, Col, Divider, Input, Pagination, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

// import images from "../../static/assets/img/people/1.jpg"

const SWAPI_URL = "https://swapi.dev/api/people/";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [imageNumber, setImageNumber] = useState(0);

  const { Meta } = Card;

  useEffect(() => {
    const fetchData = async (page: any) => {
      try {
        const response = await axios.get(`${SWAPI_URL}?page=${page}`);
        setData(response.data.results);
        setTotal(response.data.count);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const getCharactersNumber = (url: any) => {
    const dataArray = url.split("/");
    return dataArray[dataArray.length - 2];
  };
  // import image from "../../static/assets/img/people/"

  const getImageSrc = (url: any) => {
    const number = getCharactersNumber(url);
    try {
      return require(`../../static/assets/img/people/${number}.jpg`);
    } catch (err) {
      console.error(`Image not found for character number ${number}`);
      return null;
    }
  };

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Divider orientation="left">Star Wars characters</Divider>

        <Col className="gutter-row" span={6}>
          <div>
            {" "}
            <Input placeholder="Search" prefix={<SearchOutlined />} />
          </div>
        </Col>
      </Row>

      <Divider orientation="left">Characters</Divider>

      <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {data.map((item: any) => (
          <Col key={item.url} className="gutter-row" span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={getImageSrc(item.url)} />}
            >
              <Meta title={item.name} description="www.instagram.com" />
            </Card>
          </Col>
        ))}
        <Row justify="center">
          <Pagination
            current={currentPage}
            total={total}
            pageSize={10} // número de itens por página
            onChange={handlePageChange}
          />
        </Row>
      </Row>
    </div>
  );
};

export default Home;
