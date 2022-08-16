import React from "react";
import Layout3 from "../../Components/Layout3/Layout3";
import Layout4 from "../../Components/Layout4/Layout4";
import Superposition from "../../Components/Superposition/Superposition";

function CatalogPage({ layout, content }) {
  const getLayout = (layout, content) => {
    switch (layout) {
      case "Layout3":
        return <Layout3 content={content} />;
      case "Superposition":
        return <Superposition content={content} />;
      case "Layout4":
      default:
        return <Layout4 content={content} />;
    }
  };

  return (
    <div>
      {getLayout(
        layout,
        content.filter((el) => !el.hidden)
      )}
    </div>
  );
}

export default CatalogPage;
