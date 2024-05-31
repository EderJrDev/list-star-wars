import { Avatar, Layout, Typography } from "antd";
import React from "react";
import { getCharactersNumber } from "../../utils/getCharactersNumber";

const Sider = ({ character }: any) => {
  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    backgroundColor: "transparent",
    color: "#fff",
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

  return (
    <Layout.Sider
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
      <Typography.Title
        level={2}
        style={{ color: "#EDDE1D", marginTop: "20px" }}
      >
        {character.name}
      </Typography.Title>
    </Layout.Sider>
  );
};

export default Sider;
