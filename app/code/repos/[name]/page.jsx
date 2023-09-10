import Repo from "@/app/components/Repo";
import React from "react";

const RepoPage
 = ({params:{name}}) => {
  return <div>
      <Repo name={name}/>
  </div>;
};

export default RepoPage
;
