import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate('/login');
    } else if (!authentication && authStatus !== authentication) {
      navigate('/');
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  if (loader) {
    return <div>Loading...</div>; // Or a better loading indicator
  }

  // This is the crucial part: Render the children if authentication is correct
  if (authentication === authStatus) { // added this line to check if the status is same as the authentication
    return children;
  }
  return null; // or you can return <div>Not Authorized </div>

}