const { ObjectId } = require('mongodb');

//add admission info
const addAdmissionInfo = (admissionInfoCollection) => async (req, res) => {
  const data = req.body;
  const { title, pic, link } = data;

  if (!title || !link || !pic) {
    res.status(400).send('Please fill up all the fields!');
    return;
  }

  await admissionInfoCollection.insertOne(data);
  res.send(data);
};

//get admission info
const getAdmissionInfo = (admissionInfoCollection) => async (req, res) => {
  const allAdmissionInfo = await admissionInfoCollection.find().toArray();
  if (allAdmissionInfo) {
    res.status(200).json(allAdmissionInfo);
  } else {
    res.status(400).json({ message: 'An Error occured!' });
  }
};

// DELETE A admission info
const deleteAdmissionInfo = (admissionInfoCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await admissionInfoCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: 'An Error Occured!' });
  }
};

module.exports = {
  addAdmissionInfo,
  getAdmissionInfo,
  deleteAdmissionInfo,
};
