require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://Shafayet:Shafayet111@cluster0.8laudjn.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const userRoutes = require('./routes/userRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const teachersRoutes = require('./routes/teachersRoutes');
const routineRoutes = require('./routes/routineRoutes');
const studentsInfoRoutes = require('./routes/studentsInfoRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const resultsRoutes = require('./routes/resultsRoutes');
const nocRoutes = require('./routes/nocRoutes');
const examRoutes = require('./routes/examRoutes');
const syllabusRoutes = require('./routes/syllabusRoutes');
const admissionInfoRoutes = require('./routes/admissionInfoRoutes');

async function run() {
  try {
    // await client.connect();

    const userCollection = client.db('bbgc').collection('users');
    const noticeCollection = client.db('bbgc').collection('notices');
    const teachersCollection = client.db('bbgc').collection('teachers');
    const routineCollection = client.db('bbgc').collection('routine');
    const studentsInfoCollection = client
      .db('bbgc')
      .collection('students-info');
    const eventsCollection = client.db('bbgc').collection('events');
    const resultsCollection = client.db('bbgc').collection('results');
    const nocCollection = client.db('bbgc').collection('noc');
    const examCollection = client.db('bbgc').collection('exam');
    const syllabusCollection = client.db('bbgc').collection('syllabus');
    const admissionInfoCollection = client
      .db('bbgc')
      .collection('admission-Info');

    app.use('/user', userRoutes(userCollection));
    app.use('/notice', noticeRoutes(noticeCollection));
    app.use('/teachers', teachersRoutes(teachersCollection));
    app.use('/routine', routineRoutes(routineCollection));
    app.use('/studentsInfo', studentsInfoRoutes(studentsInfoCollection));
    app.use('/events', eventsRoutes(eventsCollection));
    app.use('/results', resultsRoutes(resultsCollection));
    app.use('/noc', nocRoutes(nocCollection));
    app.use('/exam', examRoutes(examCollection));
    app.use('/syllabus', syllabusRoutes(syllabusCollection));
    app.use('/admissionInfo', admissionInfoRoutes(admissionInfoCollection));

    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    //await client.close()
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('BBGC server is running');
});

app.listen(port, () => {
  console.log(`BBGC server is running at PORT: ${port}`);
});
