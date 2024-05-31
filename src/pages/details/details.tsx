import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// ant
import { Layout } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
//pages
import Sider from "./sider";
import Others from "./others";
import Character from "./character";
//services
import { getCharacter } from "../../services/getCharacter";

const Details = ({ data }: any) => {
  let navigate = useHistory();
  let location = useLocation();

  const [character, setCharacter] = useState<any>(data);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCharacters = async (id: string) => {
    setLoading(true);
    try {
      const dataDetails = await getCharacter(id);
      console.log(dataDetails);
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
      console.log(location.pathname);
      const parts = location.pathname.split("/");
      const id = parts[parts.length - 1]; // Pega a última parte da string

      fetchCharacters(id);
    } else {
      console.error("Invalid pathname, unable to extract ID");
    }
  }, []);

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

  return (
    <>
      <div onClick={() => navigate.push("/")} style={arrowStyle}>
        <ArrowLeftOutlined />
      </div>
      {character && !loading && (
        <Layout style={layoutStyle}>
          <Sider character={character} />
          <Layout.Content>
            <Character character={character} />
            <Others character={character} />
          </Layout.Content>
        </Layout>
      )}
    </>
  );
};

export default Details;
