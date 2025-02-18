import { useSelector } from "react-redux"

function Home() {
  
  const authStatus = useSelector((state) => state.auth);
  console.log(authStatus);

  return (
    <div>
      hy ji.....
    </div>
  )
}

export default Home
