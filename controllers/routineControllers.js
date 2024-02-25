const { ObjectId } = require('mongodb');

//add routine
const addRoutine = (routineCollection) => async (req, res) => {
  const data = req.body;
  const { category, pic } = data;

  if (!pic || !category) {
    res.status(400).send('Please fill up all the fields!');
    return;
  }

  await routineCollection.insertOne(data);
  res.send(data);
};

//get all routine
const getAllRoutine = (routineCollection) => async (req, res) => {
  const allRoutine = await routineCollection.find().toArray();
  if (allRoutine) {
    res.status(200).json(allRoutine);
  } else {
    res.status(400).json({ message: 'An Error occured!' });
  }
};

// DELETE A routine
const deleteRoutine = (routineCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await routineCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: 'An Error Occured!' });
  }
};

module.exports = {
  addRoutine,
  getAllRoutine,
  deleteRoutine,
};
