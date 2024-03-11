const { ObjectId } = require('mongodb');

//add event
const addEvents = (eventsCollection) => async (req, res) => {
  const data = req.body;
  const { title, pic, link } = data;

  if (!title || !link || !pic) {
    res.status(400).send('Please fill up all the fields!');
    return;
  }

  await eventsCollection.insertOne(data);
  res.send(data);
};

//get event
const getAllEvents = (eventsCollection) => async (req, res) => {
  const allEvents = await eventsCollection.find().toArray();
  if (allEvents) {
    res.status(200).json(allEvents);
  } else {
    res.status(400).json({ message: 'An Error occured!' });
  }
};

// DELETE A event
const deleteEvent = (eventsCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await eventsCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res.status(400).json({ message: 'An Error Occured!' });
  }
};

module.exports = {
  addEvents,
  getAllEvents,
  deleteEvent,
};
