import axios from "axios";
import { useEffect, useParams } from "react";

const Links = () => {
  const params = useParams();
  const getDataById = async () => {
    const res = await axios.get(
      `http://localhost:8000/link/${params.shortLink}`
    );
    window.location.replace(res.data.data.longlink);
  };

  useEffect(() => {
    getDataById();
  }, []);

  return <div></div>;
};

export default Links;
