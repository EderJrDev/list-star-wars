import { Suspense, useEffect, useState } from "react";
import { Pagination, Row } from "antd";

import axios from "axios";

import Header from "../../components/header/header";
import Loader from "../../components/loader/loader";
import CharacterCard from "../../components/card/card";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async (page: number) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SWAPI_URL}/people?page=${page}`
        );
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

  const searchCharacter = async (name: string) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SWAPI_URL}/people?search=${name}`
      );
      setData(response.data.results);
    } catch (error) {
      console.error("Error searching for character", error);
    }
  };

  return (
    <div>
      <Header onSearch={searchCharacter} />
      <Suspense fallback={<Loader />}>
        {data?.length <= 0 ? (
          <>
            <div>
              <h3>no results found.</h3>
            </div>
          </>
        ) : (
          <>
            <Row
              style={{ paddingTop: 20 }}
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              {data.map((item: any) => (
                <CharacterCard
                  key={item.name}
                  url={item.url}
                  name={item.name}
                />
              ))}
            </Row>
            <Row justify="center">
              <Pagination
                style={{
                  color: "#fff",
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  padding: 3,
                }}
                current={currentPage}
                total={total}
                pageSize={10}
                onChange={handlePageChange}
              />
            </Row>
          </>
        )}
      </Suspense>
    </div>
  );
};

export default Home;
