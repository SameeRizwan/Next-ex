import connectDb from "../../utils/connectDb";
import axios from "axios";
import Plcaeinfo from '../../models/Placeinfo';

connectDb();

export default async (req, res) => {

    const { data } = req.body;
    // console.log(data);

    const placesdata = [];

    try {

        for (var x = 0; x < data.length; x++) {
            const place = await Plcaeinfo.find({ name: data[x] });
            placesdata.push(place);
        }
        // console.log(placesdata);
        res.status(201).json(placesdata);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error . Please try again later");
    }


};
