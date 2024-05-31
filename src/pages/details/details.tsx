import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getCharacter } from "../../services/getCharacter";
import {
  Avatar,
  Card,
  Col,
  Divider,
  Layout,
  List,
  Row,
  Typography,
} from "antd";

import { ArrowLeftOutlined, PlaySquareOutlined } from "@ant-design/icons";
import { getFilm } from "../../services/getFilm";
import { getVehicles } from "../../services/getVehicles";
import { getStarships } from "../../services/getStarships";

const Details = () => {
  let navigate = useHistory();
  let location = useLocation();

  console.log(location);
  const [character, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCharacters = async (id: string) => {
    setLoading(true);
    try {
      const dataDetails = await getCharacter(id);
      setMovie(dataDetails);
    } catch (error) {
      console.error("Error fetching character details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.pathname) {
      const parts = location.pathname.split("/");
      const id = parts[parts.length - 1]; // Pega a última parte da string
      fetchCharacters(id);
    } else {
      console.error("Invalid pathname, unable to extract ID");
    }
  }, []);

  const { Sider, Content } = Layout;

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    backgroundColor: "transparent",
    color: "#fff",
  };

  const layoutStyle: React.CSSProperties = {
    borderRadius: 8,
    // alignItems: "center",
    justifyItems: "center",
    backgroundColor: "transparent",
  };

  const arrowStyle: React.CSSProperties = {
    height: 20,
    width: 20,
    backgroundColor: "#EDDE1D",
    color: '#000',
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: " space-between",
    padding: 15,
    cursor: "pointer",
    marginBottom: 10,
  };

  const { Title, Text } = Typography;

  const getCharactersNumber = (url: string): string => {
    const dataArray = url.split("/");
    return dataArray[dataArray.length - 2];
  };

  const getImageSrc = (url: string): string | null => {
    const number = getCharactersNumber(url);
    try {
      return require(`../../static/assets/img/people/${number}.jpg`);
    } catch (err) {
      console.error(`Image not found for character number ${number}`);
      return null;
    }
  };

  const [filmNames, setFilmNames] = useState<string[]>([]);
  const [vehiclesNames, setVehiclesNames] = useState<string[]>([]);
  const [startshipsNames, setStartshipsNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchFilmNames = async () => {
      try {
        if (character?.films) {
          const names = await Promise.all(
            character.films.map(async (film: string) => {
              const number = getCharactersNumber(film);
              const response = await getFilm(number);
              return response.title;
            })
          );
          console.log(names);
          setFilmNames(names);
        }
      } catch (error) {
        console.error("Failed to fetch film names", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilmNames();
  }, [character]);

  useEffect(() => {
    const fetchStarshipsNames = async () => {
      try {
        if (character?.starships) {
          const names = await Promise.all(
            character.films.map(async (film: string) => {
              const number = getCharactersNumber(film);
              const response = await getStarships(number);
              console.log(response);
              if (!response.name) {
                return response;
              }
              return response.name;
            })
          );
          console.log(names);
          setStartshipsNames(names);
        }
      } catch (error) {
        console.error("Failed to fetch film names", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStarshipsNames();
  }, [character?.starships]);

  useEffect(() => {
    const fetchVehiclesNames = async () => {
      try {
        if (character?.vehicles) {
          const names = await Promise.all(
            character.films.map(async (film: string) => {
              const number = getCharactersNumber(film);
              const response = await getVehicles(number);
              console.log(response);
              if (!response.name) {
                return response;
              }
              return response.name;
            })
          );
          console.log(names);
          setVehiclesNames(names);
        }
      } catch (error) {
        console.error("Failed to fetch film names", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVehiclesNames();
  }, [character?.vehicles]);

  return (
    <>
      <div onClick={() => navigate.push("/")} style={arrowStyle}>
        <ArrowLeftOutlined />
      </div>
      {character && !loading && (
        <Layout style={layoutStyle}>
          <Sider
            width="25%"
            breakpoint="md"
            collapsedWidth="0"
            style={siderStyle}
          >
            <Avatar
              shape="square"
              size={300}
              src={getImageSrc(character.url) || ""}
            />{" "}
            <Title level={2} style={{ color: "#EDDE1D", marginTop: "20px" }}>
              {character.name}
            </Title>
          </Sider>
          <Content>
            <Divider
              style={{
                color: "#EDDE1D",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Character Details
            </Divider>

            <Row
              gutter={16}
              style={{
                padding: 20,
                gap: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  style={{
                    width: 230,
                  }}
                >
                  <Text>
                    <strong>Name:</strong> {character.name}
                    <br />
                  </Text>
                  <Text>
                    <strong>Height:</strong> {character.height} cm
                    <br />
                  </Text>
                  <Text>
                    <strong>Mass:</strong> {character.mass} kg
                    <br />
                  </Text>
                </Card>
              </Col>

              <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  style={{
                    width: 230,
                  }}
                >
                  <Text>
                    <strong>Hair Color:</strong> {character.hair_color}
                    <br />
                  </Text>
                  <Text>
                    <strong>Skin Color:</strong> {character.skin_color}
                    <br />
                  </Text>
                  <Text>
                    <strong>Eye Color:</strong> {character.eye_color}
                  </Text>
                </Card>
              </Col>

              <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  style={{
                    width: 230,
                  }}
                >
                  <Text>
                    <strong>Birth Year:</strong> {character.birth_year} <br />
                  </Text>
                  <Text>
                    <strong>Gender:</strong> {character.gender}
                    <br />
                  </Text>
                  <Text>
                    <strong>Homeworld:</strong>
                    {/* <a href={character.homeworld}>{character.homeworld}</a> */}
                    <br />
                  </Text>
                </Card>
              </Col>
            </Row>

            <Divider style={{ color: "#EDDE1D" }}>
              Films && Starships && Vehicles
            </Divider>
            <Row
              gutter={16}
              style={{ padding: 20, gap: 20, justifyContent: "center" }}
            >
              <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Films"
                  style={{
                    width: 230,
                  }}
                >
                  <List
                    dataSource={character.films}
                    renderItem={(film, index) => (
                      <List.Item>
                        <PlaySquareOutlined />{" "}
                        <Text>{filmNames[index] || "Loading..."}</Text>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
              <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Starships"
                  style={{
                    width: 230,
                  }}
                >
                  <List
                    dataSource={character.starships}
                    renderItem={(film, index) => (
                      <List.Item>
                        <PlaySquareOutlined />{" "}
                        <Text>{startshipsNames[index] || "Loading..."}</Text>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
              <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Vehicles"
                  style={{
                    width: 230,
                  }}
                >
                  <List
                    dataSource={character.vehicles}
                    renderItem={(film, index) => (
                      <List.Item>
                        <PlaySquareOutlined />{" "}
                        <Text>{vehiclesNames[index] || "Loading..."}</Text>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      )}
    </>
  );
};

export default Details;
