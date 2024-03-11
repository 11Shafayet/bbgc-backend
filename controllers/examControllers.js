const { ObjectId } = require('mongodb');

//add exam
const addExam = (examCollection) => async (req, res) => {
  const data = req.body;
  const { title, pic, link } = data;

  if (!title || !link || !pic ) {
    res.status(400).send('Please fill up all the fields!');
    return;
  }

  await examCollection.insertOne(data);
  res.send(data);
};

//get exam
const getAllExams = (examCollection) => async (req, res) => {
  const allExams = await examCollection.find().toArray();
  if (allExams) {
    res.status(200).json(allExams);
  } else {
    res.status(400).json({ message: 'An Error occured!' });
  }
};

// DELETE A exam
const deleteExam = (examCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await examCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: 'An Error Occured!' });
  }
};

module.exports = {
  addExam,
  getAllExams,
  deleteExam,
};
