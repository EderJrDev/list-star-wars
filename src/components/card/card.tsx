import React, { memo } from "react";
import { Card as AntCard, Col } from "antd";
import { Link } from "react-router-dom";

interface PropsItem {
  url: string;
  name: string;
}

const CharacterCard: React.FC<PropsItem> = memo(({ url, name }) => {
  const { Meta } = AntCard;

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

  return (
    <Col key={url} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
      <Link to={`/characters/${getCharactersNumber(url)}`}>
        <AntCard
          hoverable
          style={{
            cursor: "pointer",
            width: 290,
            marginBottom: 30,
            backgroundColor: "#c0d2ff",
          }}
          cover={<img alt={name} src={getImageSrc(url) || ""} />}
        >
          <Meta description title={name} />
        </AntCard>
      </Link>
    </Col>
  );
});

export default CharacterCard;
