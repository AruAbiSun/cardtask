import React from "react";
import Card from "./components/Card";

const App = () => {
  const arrObj = [
    {
      title: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "50Gb Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      domain: "Free Subdomain",
      status: "Monthly Status Reports",
    },
    {
      title: "PLUS",
      price: "$9/month",
      user: "5 User",
      storage: "50Gb Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      domain: "Free Subdomain",
      status: "Monthly Status Reports",
    },
    {
      title: "PRO",
      price: "$49/month",
      user: "Unlimited User",
      storage: "50Gb Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      domain: "Free Subdomain",
      status: "Monthly Status Reports",
    },
  ];
  return (
    <div>
      <Card arrObj={arrObj} />
    </div>
  );
};

export default App;
