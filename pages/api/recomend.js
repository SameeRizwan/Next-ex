import connectDb from "../../utils/connectDb";
import axios from "axios";
import Plcaeinfo from '../../models/Placeinfo';

connectDb();

export default async (req, res) => {

    let { location, interest } = req.body;
    let recomendedplaces;
    interest = "relaxation";
    location = "ss world park";

    // console.log(location);
    // console.log(interest);

    try {
        const url = `http://localhost:5000/recommand`;
        const payload = { location, interest };
        const response = await axios.post(url, payload);
        recomendedplaces = response.data.places;
        const places = [];
        for (var x = 0; x < recomendedplaces.length; x++) {
            places.push(recomendedplaces[x].split(",")[0]);
        }
        res.status(201).json(places);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error . Please try again later");
    }
};
