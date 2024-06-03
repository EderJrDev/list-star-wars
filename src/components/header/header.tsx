import { Col, Input, Row, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HeaderProps } from "../../types/header";

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24} style={{ textAlign: "center" }}>
          <Typography.Title style={{ color: "#EDDE1D" }} level={2}>
            Star Wars Characters
          </Typography.Title>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <Input
            className="search"
            placeholder="Search a character"
            prefix={<SearchOutlined />}
            onChange={handleSearch}
          />
        </Col>
      </Row>
    </>
  );
};

export default Header;
