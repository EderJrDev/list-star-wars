import { useEffect, useState } from "react";
import { Card, Col, Divider, Row, Typography } from "antd";

import { PropsSider } from "../../../types/sider";
import { getPlanet } from "../../../services/getPlanet";
import { getCharactersNumber } from "../../../utils/getCharactersNumber";

const Character: React.FC<PropsSider> = ({ character }) => {
  const [homeWorld, setHomeWord] = useState<string>("");

  async function findPlanet(url: string) {
    const number = getCharactersNumber(url);
    const response = await getPlanet(number);

    setHomeWord(response.name);
  }
  useEffect(() => {
    if (character.url) {
      findPlanet(character.url);
    }
  }, [character]);

  return (
    <div>
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
              margin: "0 auto"
            }}
          >
            <Typography.Text>
              <strong>Name:</strong> {character.name}
              <br />
            </Typography.Text>
            <Typography.Text>
              <strong>Height:</strong> {character.height} cm
              <br />
            </Typography.Text>
            <Typography.Text>
              <strong>Mass:</strong> {character.mass} kg
              <br />
            </Typography.Text>
          </Card>
        </Col>

        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
          <Card
            style={{
              width: 230,
              margin: "0 auto"
            }}
          >
            <Typography.Text>
              <strong>Hair Color:</strong> {character.hair_color}
              <br />
            </Typography.Text>
            <Typography.Text>
              <strong>Skin Color:</strong> {character.skin_color}
              <br />
            </Typography.Text>
            <Typography.Text>
              <strong>Eye Color:</strong> {character.eye_color}
            </Typography.Text>
          </Card>
        </Col>

        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
          <Card
            style={{
              width: 230,
              margin: "0 auto"
            }}
          >
            <Typography.Text>
              <strong>Birth Year:</strong> {character.birth_year} <br />
            </Typography.Text>
            <Typography.Text>
              <strong>Gender:</strong> {character.gender}
              <br />
            </Typography.Text>
            <Typography.Text>
              <strong>Homeworld:</strong> {homeWorld}
              <br />
            </Typography.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Character;
