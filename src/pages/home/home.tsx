import { Suspense, useEffect, useState } from "react";
import { Pagination, Row } from "antd";
//components
import Header from "../../components/header/header";
import Loader from "../../components/loader/loader";
import CharacterCard from "../../components/card/card";
//types
import { PropsCharacter } from "../../types/character";
import { searchCharacter } from "../../services/searchCharacter";
import { pageCharacter } from "../../services/getPageCharacter";

const Home = () => {
  const [data, setData] = useState<PropsCharacter[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchData = async (page: number) => {
      try {
        const response = await pageCharacter(page);
        setData(response.results);
        setTotal(response.count);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const search = async (name: string) => {
    try {
      const response = await searchCharacter(name);
      setData(response);
    } catch (error) {
      console.error("Error searching for character", error);
    }
  };

  return (
    <div>
      <Header onSearch={search} />
      <Suspense fallback={<Loader />}>
        {data?.length === 0 ? (
          <>
            <div>
              <h3>no results found.</h3>
            </div>
          </>
        ) : (
          <>
            <Row
              justify="center"
              style={{ paddingTop: 20 }}
              gutter={{ xs: 8, sm: 8, md: 24, lg: 32 }}
            >
              {data?.map((item: PropsCharacter) => (
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
