const { ObjectId } = require('mongodb');

//add syllabus
const addSyllabus = (syllabusCollection) => async (req, res) => {
  const data = req.body;
  const { title, pic, link } = data;

  if (!title || !link || !pic) {
    res.status(400).send('Please fill up all the fields!');
    return;
  }

  await syllabusCollection.insertOne(data);
  res.send(data);
};

//get syllabus
const getAllSyllabus = (syllabusCollection) => async (req, res) => {
  const allSyllabus = await syllabusCollection.find().toArray();
  if (allSyllabus) {
    res.status(200).json(allSyllabus);
  } else {
    res.status(400).json({ message: 'An Error occured!' });
  }
};

// DELETE A syllabus
const deleteSyllabus = (syllabusCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await syllabusCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: 'An Error Occured!' });
  }
};

module.exports = {
  addSyllabus,
  getAllSyllabus,
  deleteSyllabus,
};
