'use client' 
import { useState,useEffect } from "react";
import LoadingPage from "./loading";
import Link from "next/link";
import Subjects from "./components/Subjects";
import CourseSearch from "./components/CourseSearch";
export default function Home() {
  const [subject,setSubject]=useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/subjects')
      const sub = await res.json()
      setSubject(sub)
      setLoading(false)
    }
    fetchCourses()

  }, []);
  if (loading) {
    return <LoadingPage/>
  }
  
  return (
    <div>
      <h1>welcome to Gordino LTD</h1>
      <CourseSearch getSearchResults={(results) => setSubject
        (results)} />
      <Subjects subjects={subject} />
      
    </div>
  );
}
