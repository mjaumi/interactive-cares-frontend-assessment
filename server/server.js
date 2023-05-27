const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rkr8dkt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        await client.connect();

        // database fetching here
        const edTechDB = client.db('ed-tech');

        // collections declaration here
        const videosCollection = edTechDB.collection('videos');
        const usersCollection = edTechDB.collection('users');

        console.log('MongoDB Connected');

        // GET API to get all the videos
        app.get('/videos', async (req, res) => {
            const videos = await videosCollection.find({}).toArray();
            res.send(videos);
        });

        // GET API to get single video by video id
        app.get('/video/:videoId', async (req, res) => {
            const videoId = req.params.videoId;
            const video = await videosCollection.findOne({ video_id: Number(videoId) });
            res.send(video);
        });

        // GET API to get user by email
        app.get('/user', async (req, res) => {
            const userEmail = req.query.email;
            const user = await usersCollection.findOne({ email: userEmail });
            res.send(user);
        });

        // PATCH API to update the video watch list
        app.patch('/update-watched-videos', async (req, res) => {
            const videoId = Number(req.query.videoId);
            const userEmail = req.query.email;
            const filter = { email: userEmail };
            const user = await usersCollection.findOne(filter);
            const updateWatchedListQuery = {
                $set: {
                    watched_videos: [...user.watched_videos, videoId]
                }
            };

            const updateResult = await usersCollection.updateOne(filter, updateWatchedListQuery);
            res.send(updateResult);
        });

        // PATCH API to delete a specific note
        app.patch('/delete-note', async (req, res) => {
            const noteId = req.query.noteId;
            const userEmail = req.query.email;
            const filter = { email: userEmail };
            const deleteNoteQuery = {
                $pull: {
                    added_notes: { _id: new ObjectId(noteId) }
                },
            };

            const deletedNote = await usersCollection.updateOne(filter, deleteNoteQuery);

            res.send(deletedNote);
        });

        // PATCH API to update a particular note
        app.patch('/update-note', async (req, res) => {
            const userEmail = req.query.email;
            const noteId = req.query.noteId;
            const updatedNote = req.body;
            const filter = {
                $and: [
                    { email: userEmail },
                    { 'added_notes._id': new ObjectId(noteId) },
                ]
            };
            const updateNoteQuery = {
                $set: {
                    'added_notes.$.note': updatedNote.note,
                },
            };

            const updateResult = usersCollection.updateOne(filter, updateNoteQuery);

            res.send(updateResult);
        });

        // PATCH API to update (insert) new notes 
        app.patch('/notes', async (req, res) => {
            const userEmail = req.query.email;
            const newNote = req.body;
            const filter = { email: userEmail };
            const user = await usersCollection.findOne(filter);
            const addNewNoteQuery = {
                $set: {
                    added_notes: [
                        ...user.added_notes,
                        {
                            _id: new ObjectId(),
                            ...newNote,
                        }
                    ],
                },
            };

            const updateNotes = await usersCollection.updateOne(filter, addNewNoteQuery);
            res.send(updateNotes);
        });

    } finally {

    }
}
run().catch(console.dir);

// BASE API
app.get('/', (req, res) => {
    res.send('Ed Tech Server Running');
});

// Listening API
app.listen(port, () => {
    console.log('Listening to port', port);
});
