const { ObjectId } = require('mongodb');

//add teacher
const addTeacher = (teachersCollection) => async (req, res) => {
  const data = req.body;
  const { name, dep, mobile, designation, pic } = data;

  if (!name || !mobile || !pic || !designation || !dep) {
    res.status(400).send('Please fill up all the fields!');
    return;
  }

  await teachersCollection.insertOne(data);
  res.send(data);
};

//get all teacher
const getAllTeacher = (teachersCollection) => async (req, res) => {
  const allTeachers = await teachersCollection.find().toArray();
  if (allTeachers) {
    res.status(200).json(allTeachers);
  } else {
    res.status(400).json({ message: 'An Error occured!' });
  }
};

// DELETE A teacher
const deleteTeacher = (teachersCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await teachersCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: 'An Error Occured!' });
  }
};

module.exports = {
  addTeacher,
  getAllTeacher,
  deleteTeacher,
};
