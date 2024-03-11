const { ObjectId } = require('mongodb');

//add notice
const addNotice = (noticeCollection) => async (req, res) => {
  const data = req.body;
  const { title, date, category, pic, link } = data;

  if (!title || !date || !category || !pic || !link) {
    res.status(400).send('Please fill up all the fields!');
    return;
  }

  await noticeCollection.insertOne(data);
  res.send(data);
};

//get all notice
const getAllNotice = (noticeCollection) => async (req, res) => {
  const allNotice = await noticeCollection.find().toArray();
  if (allNotice) {
    res.status(200).json(allNotice);
  } else {
    res.status(400).json({ message: 'An Error occured!' });
  }
};

// DELETE A notice
const deleteNotice = (noticeCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await noticeCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: 'An Error Occured!' });
  }
};

module.exports = {
  addNotice,
  getAllNotice,
  deleteNotice,
};
