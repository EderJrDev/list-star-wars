import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row, Typography } from "antd";

const Header = () => {
  const { Title } = Typography;
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div>
            {" "}
            <Input
              className="search-movies"
              placeholder="Search a characters"
              prefix={<SearchOutlined />}
            />
          </div>
        </Col>
        {/* <Divider orientation="left"> */} {/* </Divider> */}
      </Row>
      <Row>
        <Col span={24}>
          <Col className="gutter-row" span={12}>
            <Title style={{ color: "#c0d2ff" }} level={2}>
              Star Wars Characters
            </Title>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Header;
