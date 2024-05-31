import { Card, Col, Divider, Row, Typography } from "antd";

const Character = ({ character }: any) => {
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
              <strong>Homeworld:</strong>
              <br />
            </Typography.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Character;
