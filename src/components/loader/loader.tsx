const Loader = () => {
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          fill="var(--blue-2)"
          d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="0.7s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </svg>
    </div>
  );
};

export default Loader;
