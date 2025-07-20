import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Landing Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex gap-4">
        <Button title="Small" size="small" shape="rounded-sm" />
        <Button title="Medium" size="medium" shape="rounded-md" />
        <Button title="Large" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
