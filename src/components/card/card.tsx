import React, { memo } from "react";
import { Link } from "react-router-dom";

import { Card as AntCard, Col } from "antd";
import { PropsCard } from "../../types/card";
import { getCharactersNumber } from "../../utils/getCharactersNumber";

const CharacterCard: React.FC<PropsCard> = memo(({ url, name }) => {
  const getImageSrc = (url: string): string | null => {
    const number = getCharactersNumber(url);
    try {
      return require(`../../static/assets/img/people/${number}.jpg`);
    } catch (err) {
      return "Image not found.";
    }
  };

  return (
    <Col
      key={url}
      className="gutter-row"
      xs={24}
      sm={12}
      md={8}
      lg={6}
      xl={6}
    >
      <Link to={`/characters/${getCharactersNumber(url)}`}>
        <AntCard
          hoverable
          style={{
            borderColor: "#EDDE1D",
            cursor: "pointer",
            width: 290,
            marginBottom: 30,
            backgroundColor: "#EDDE1D",
          }}
          cover={<img alt={name} src={getImageSrc(url) || ""} />}
        >
          <AntCard.Meta title={name} />
        </AntCard>
      </Link>
    </Col>
  );
});

export default CharacterCard;
