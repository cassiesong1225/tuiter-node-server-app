import * as tuitsDao from "./tuits-dao.js"

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}


const createTuit = async (req, res) => {
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.userName = 'NASA';
    newTuit.image = 'nasa.png';
    newTuit.handle = '@NASA';
    newTuit.time = '1min';
    newTuit.likes = 0;
    newTuit.liked = false;

    res.json(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);


}



const updateTuit = async (req, res) => {
    const tuitdId = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate, updates);
    res.json(status);

    res.sendStatus(200);
}
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    res.json(status);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
