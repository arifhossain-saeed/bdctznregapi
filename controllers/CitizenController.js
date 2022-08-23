import validationResult from "express-validator";
import CitizenBio from "../models/CitizenBio.js";

const CitizenController = {};

CitizenController.createCitizen = async (req, res) => {
  try {
    const newCitizen = await CitizenBio.create({ ...req.body });

    if (newCitizen) {
      res.status(200).json(newCitizen);
    } else {
      res.status(404).json("");
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

CitizenController.updateCitizen = async (req, res) => {
  const oldCitizen = { nid: req.body.nid, phone: req.body.phone };
  const newCitizen = { ...req.body };
  // res.json(newCitizen);

  try {
    let updatedCitizen = await CitizenBio.findOneAndUpdate(
      oldCitizen,
      newCitizen
    )
      .select("-_id")
      .select("-__v");
    res.status(200).json(updatedCitizen);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export default CitizenController;
