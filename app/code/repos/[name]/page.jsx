import Repo from "@/app/components/Repo";
import RepoDir from "@/app/components/RepoDir";
import {Suspense} from "react";
import Link from "next/link";

const RepoPage
 = ({params:{name}}) => {
   return <div className="card">
    <Link className="btn btn-back" href='/code/repos'>Back to Repos</Link>
     <Suspense fallback={<div> Loading Repo....</div>}>
     <Repo name={name} />
     </Suspense> 
     <Suspense fallback={<div> Loading Directories....</div>}>
      <RepoDir name={name}/>
     </Suspense> 
  </div>;
};

export default RepoPage
;
