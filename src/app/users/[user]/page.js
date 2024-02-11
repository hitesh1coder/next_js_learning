import React from "react";

const page = ({ params }) => {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <h2 className="text-3xl">User Deatail</h2>
      <h3 className="text-xl">Welcome {params.user} 😎</h3>
    </div>
  );
};

export default page;
