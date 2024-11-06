import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  // to know paramters that in url
  const params = useParams();
  const location = useLocation();
  const [searchParam, setSearchParam] = useSearchParams();
  console.log(params, location, searchParam.get("name"));

  return <p>User{params.id}</p>;
};

export default UserDetailPage;
