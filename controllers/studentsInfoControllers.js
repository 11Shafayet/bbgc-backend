const { ObjectId } = require('mongodb');

//add student info
const addStudentsInfo = (studentsInfoCollection) => async (req, res) => {
  const data = req.body;
  const { title, pic, link } = data;

  if (!title || !link || !pic) {
    res.status(400).send('Please fill up all the fields!');
    return;
  }

  await studentsInfoCollection.insertOne(data);
  res.send(data);
};

//get students info
const getStudentsInfo = (studentsInfoCollection) => async (req, res) => {
  const allStudentsInfo = await studentsInfoCollection.find().toArray();
  if (allStudentsInfo) {
    res.status(200).json(allStudentsInfo);
  } else {
    res.status(400).json({ message: 'An Error occured!' });
  }
};

// DELETE A student info
const deleteStudentInfo = (studentsInfoCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await studentsInfoCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: 'An Error Occured!' });
  }
};

module.exports = {
  addStudentsInfo,
  getStudentsInfo,
  deleteStudentInfo,
};
