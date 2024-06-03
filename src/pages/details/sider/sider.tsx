import { Avatar, Typography } from "antd";
import { PropsSider } from "../../../types/sider";
import { getCharactersNumber } from "../../../utils/getCharactersNumber";

const Sider: React.FC<PropsSider> = ({ character }) => {
  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    backgroundColor: "transparent",
    color: "#fff",
  };

  const getImageSrc = (url: string): string | null => {
    const number = getCharactersNumber(url);
    try {
      return require(`../../../static/assets/img/people/${number}.jpg`);
    } catch (err) {
      console.error("Image not found");
      return null;
    }
  };

  return (
    <div style={siderStyle}>
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
    </div>
  );
};

export default Sider;
