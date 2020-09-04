const toJsonObject = async (data) =>{
    data.forEach((item,idx) => {
        item.tags = JSON.parse(item.tags)
    });
    return data;
}

const _saveMusic = async (req, res, next, model) => {
    try {
        const music = req.body;
        const file = req.files;
        console.log('fileeeeeeeeeeeeeeeeeeee', file)

        if (music.title && music.file_path) {
            const data = await model.insertMusic(music);
            return res.send(JSON.stringify({success: true, data: data}));
        } else {
            res.status(400);
            return res.send(JSON.stringify({success: false, error: 'insira title e file_path'}));
        }

    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _musicAll = async (req, res, next, model) => {

    try {
        let data = await model.getAllMusic();
         data = await toJsonObject(data);

        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _getMusic = async (req, res, next, model) => {
    const id = req.params.id
    try {
        let data = await model.getMusic(id, false);
        data = await toJsonObject (data);
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _searchMusic = async (req, res, next, model) => {
    const find = req.params.find
    try {
        let data = await model.getMusic(false, find);
        data = await toJsonObject (data);
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _updateMusic = async (req, res, next, model) => {
    const id = req.params.id
    const music = req.body;
    try {
        if (music.title && music.file_path){
            const data = await model.mUpdateMusic(music, id);
            return res.send(JSON.stringify({success: true, data: data}));
        }else{
            res.status(400);
            return res.send(JSON.stringify({success: false, error: 'insira nome e cidade'}));
        }
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _deleteMusic = async (req, res, next, model) => {
    const id = req.params.id
    try {
    let data = await model.rmMusic(id);
    return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _deleteTag = async (req, res, next, model) => {
    const id = req.params.id
    try {
        let data = await model.rmTag(id);
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _playMusic = async (req, res, next, fs) => {
    const { audio } = req.params;
    const movieAudio = `./uploads/${audio}`;
    fs.stat(movieAudio, (err, stats) => {
        if (err) {
            console.log(err);
            return res.status(404).end('<h1>Movie Not found</h1>');
        }
        const { range } = req.headers;
        const { size } = stats;
        const start = Number((range || '').replace(/bytes=/, '').split('-')[0]);
        const end = size - 1;
        const chunkSize = (end - start) + 1;
        res.set({
            'Content-Range': `bytes ${start}-${end}/${size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'audio/mpeg'
        });
        res.status(206);
        const stream = fs.createReadStream(movieAudio, { start, end });
        stream.on('open', () => stream.pipe(res));
        stream.on('error', (streamErr) => res.end(streamErr));
    });
};

const getController = (model,fs) => ({
    saveMusic: (req, res, next) => _saveMusic(req, res, next, model),
    musicAll: (req, res, next) => _musicAll(req, res, next, model),
    getMusic: (req, res, next) => _getMusic(req, res, next, model),
    searchMusic: (req, res, next) => _searchMusic(req, res, next, model),
    updateMusic: (req, res, next) => _updateMusic(req, res, next, model),
    deleteMusic: (req, res, next) => _deleteMusic(req, res, next, model),
    deleteTag: (req, res, next) => _deleteTag(req, res, next, model),
    playMusic: (req, res, next) => _playMusic(req, res, next, fs),
});

module.exports.getController = getController;
