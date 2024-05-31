import { useEffect, useState } from "react";
import { PlaySquareOutlined } from "@ant-design/icons";
import { Card, Col, Divider, List, Row, Typography } from "antd";
//services
import { getFilm } from "../../services/getFilm";
import { getVehicles } from "../../services/getVehicles";
import { getStarships } from "../../services/getStarships";
// utils
import { getCharactersNumber } from "../../utils/getCharactersNumber";

const Others = ({ character }: any) => {
  const [filmNames, setFilmNames] = useState<string[]>([]);
  const [vehiclesNames, setVehiclesNames] = useState<string[]>([]);
  const [starshipsNames, setStarshipsNames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true; // controle de montagem do componente

    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchFilms =
          character?.films?.map(async (film: string) => {
            const number = getCharactersNumber(film);
            const response = await getFilm(number);
            return response.title;
          }) ?? [];

        const fetchStarships =
          character?.starships?.map(async (starship: string) => {
            const number = getCharactersNumber(starship);
            const response = await getStarships(number);
            return response.name;
          }) ?? [];

        const fetchVehicles =
          character?.vehicles?.map(async (vehicle: string) => {
            const number = getCharactersNumber(vehicle);
            const response = await getVehicles(number);
            return response.name;
          }) ?? [];

        const [films, starships, vehicles] = await Promise.all([
          Promise.all(fetchFilms),
          Promise.all(fetchStarships),
          Promise.all(fetchVehicles),
        ]);

        if (isMounted) {
          setFilmNames(films);
          setStarshipsNames(starships);
          setVehiclesNames(vehicles);
        }
      } catch (error) {
        const erro = ["No data found."];
        setFilmNames(erro);
        setStarshipsNames(erro);
        setVehiclesNames(erro);
        console.error("Failed to fetch data", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [character]);

  return (
    <>
      <Divider style={{ color: "#EDDE1D" }}>
        Films & Starships & Vehicles
      </Divider>
      <Row
        gutter={16}
        style={{ padding: 20, gap: 20, justifyContent: "center" }}
      >
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
          <Card title="Films" style={{ width: 230 }}>
            <List
              dataSource={character.films}
              renderItem={(film, index) => (
                <List.Item>
                  <PlaySquareOutlined />{" "}
                  <Typography.Text>
                    {filmNames[index] || "Loading..."}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
          <Card title="Starships" style={{ width: 230 }}>
            <List
              dataSource={character.starships}
              renderItem={(starship, index) => (
                <List.Item>
                  <PlaySquareOutlined />{" "}
                  <Typography.Text>
                    {starshipsNames[index] || "Loading..."}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
          <Card title="Vehicles" style={{ width: 230 }}>
            <List
              dataSource={character.vehicles}
              renderItem={(vehicle, index) => (
                <List.Item>
                  <PlaySquareOutlined />{" "}
                  <Typography.Text>
                    {vehiclesNames[index] || "Loading..."}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Others;
