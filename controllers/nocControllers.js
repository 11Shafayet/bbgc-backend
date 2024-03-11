const { ObjectId } = require('mongodb');

//add noc
const addNOC = (nocCollection) => async (req, res) => {
  const data = req.body;
  const { title, pic, link } = data;

  if (!title || !link || !pic) {
    res.status(400).send('Please fill up all the fields!');
    return;
  }

  await nocCollection.insertOne(data);
  res.send(data);
};

//get all noc
const getAllNOC = (nocCollection) => async (req, res) => {
  const getAllNOC = await nocCollection.find().toArray();
  if (getAllNOC) {
    res.status(200).json(getAllNOC);
  } else {
    res.status(400).json({ message: 'An Error occured!' });
  }
};

// DELETE A noc
const deleteNOC = (nocCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await nocCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: 'An Error Occured!' });
  }
};

module.exports = {
  addNOC,
  getAllNOC,
  deleteNOC,
};
