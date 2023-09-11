import Link from "next/link";

const Subjects =  ({subjects}) => {
    return <div className="courses">
        {subjects.map((sub)=>(
            <div key={sub.id} className="card">
                <h2>{sub.title}</h2>
                <small>Level:{sub.level}</small>
                <p>{sub.description}</p>
                <Link href={sub.link} target="_blank" className="btn"> see subject</Link>
            </div>
      ))}
  </div>;
};

export default Subjects;
