const { ObjectId } = require('mongodb');

//add result
const addResult = (resultsCollection) => async (req, res) => {
  const data = req.body;
  const { title, pic, link } = data;

  if (!title || !link || !pic) {
    res.status(400).send('Please fill up all the fields!');
    return;
  }

  await resultsCollection.insertOne(data);
  res.send(data);
};

//get results
const getAllResults = (resultsCollection) => async (req, res) => {
  const allResults = await resultsCollection.find().toArray();
  if (allResults) {
    res.status(200).json(allResults);
  } else {
    res.status(400).json({ message: 'An Error occured!' });
  }
};

// DELETE A result
const deleteResult = (resultsCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await resultsCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: 'An Error Occured!' });
  }
};

module.exports = {
  addResult,
  getAllResults,
  deleteResult,
};
