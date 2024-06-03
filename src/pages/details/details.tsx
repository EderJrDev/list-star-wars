import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// ant
import { Layout, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
// pages
import Sider from "./sider/sider";
import Others from "./others/others";
import Character from "./character/character";
// services
import { PropsCharacter } from "../../types/character";
import { getCharacter } from "../../services/getCharacter";

const Details = () => {
  const layoutStyle: React.CSSProperties = {
    borderRadius: 8,
    justifyItems: "center",
    backgroundColor: "transparent",
  };

  const arrowStyle: React.CSSProperties = {
    height: 20,
    width: 20,
    backgroundColor: "#EDDE1D",
    color: "#000",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: " space-between",
    padding: 15,
    cursor: "pointer",
    marginBottom: 10,
  };

  let navigate = useHistory();
  let location = useLocation();

  const [character, setCharacter] = useState<PropsCharacter>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCharacters = async (id: string) => {
    setLoading(true);
    try {
      const dataDetails = await getCharacter(id);
      if (dataDetails === "No data found.") {
        navigate.push("/");
      }
      if (dataDetails) {
        setCharacter(dataDetails);
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.pathname) {
      const parts = location.pathname.split("/");
      const id = parts[parts.length - 1];

      fetchCharacters(id);
    } else {
      console.error("Invalid pathname, unable to extract ID");
    }
  }, []);

  return (
    <>
      <div onClick={() => navigate.push("/")} style={arrowStyle}>
        <ArrowLeftOutlined />
      </div>
      {loading && (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
      {character && !loading && (
        <Layout style={layoutStyle}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={24} order={1}>
              <Sider character={character} />
            </Col>
            <Col xs={24} md={24} order={2}>
              <Layout.Content>
                <Character character={character} />
                <Others character={character} />
              </Layout.Content>
            </Col>
          </Row>
        </Layout>
      )}
    </>
  );
};

export default Details;
