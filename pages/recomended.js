import axios from "axios";
import catchErrors from "../utils/catchErrors";
import baseUrl from "../utils/baseUrl";
import { withRouter } from 'next/router'
import PlacesSummary from '../components/Places/PlacesSummary'
import { Button } from 'antd';

function Recommended({places}) {

 const place =places.flat();
//  console.log(place);

  return <>
  <div className="places-form">
    <PlacesSummary placesdata={place} />
  </div> 

{/* <h1>Home</h1> */}
</>;
}

Recommended.getInitialProps = async ({query}) => {
  // console.log("Query " + query.data);
  const data = query.data;
  const url = `${baseUrl}/api/getrecomend`;
  const payload = { data };
  const response = await axios.post(url,payload);
  return { places: response.data };
}

export default withRouter(Recommended);
