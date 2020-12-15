import { useParams } from "react-router-dom";
export default function Redirects() {
  let { id } = useParams();
  return <>{console.log(id)}</>;
}
