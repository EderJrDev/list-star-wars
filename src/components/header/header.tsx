import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";

interface HeaderProps {
  onSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const { Title } = Typography;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div>
            <Input
              className="search"
              placeholder="Search a character"
              prefix={<SearchOutlined />}
              onChange={handleSearch}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Col className="gutter-row" span={12}>
            <Title style={{ color: "#EDDE1D" }} level={2}>
              Star Wars Characters
            </Title>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Header;
