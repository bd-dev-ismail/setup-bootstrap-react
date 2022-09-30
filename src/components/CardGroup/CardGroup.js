import React from "react";
import Card from "../Card/Card";
import "./CardGroup.css";
const CardGroup = () => {
    const hotness = [
      {
        id: 1,
        name: "Mia Malkova",
        size: 36,
        image:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        id: 2,
        name: "Mia Khalifa",
        size: 36,
        image:
          "https://images.unsplash.com/photo-1596217431227-472b0c00da7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        id: 3,
        name: "Arina John",
        size: 34,
        image:
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ];
  return (
    
    <>
      <div className="card-group my-5">
        {
            hotness.map(hot => <Card hot={hot} key={hot.id}></Card>)
        }
      </div>
    </>
  );
};

export default CardGroup;
