const { Track } = require("../models/models");

class PlaylistController {
    async create(req, res) {
        const body = req.body;
        const track = await Track.create(body);
        return res.json(track);
    }

    async delete(req, res) {
        const id = req.params.id
        const track = await Track.findOne({ where: { id: id } });
        await Track.destroy({ where: { id: id } });
        return res.json(track);
    }

    async getAll(req, res) {
        const playlist = await Track.findAll();
        if (req.query.page) {
            if (req.query.limit) {
                const page = parseInt(req.query.page);
                const limit = parseInt(req.query.limit);

                const startIndex = (page - 1) * limit;
                const endIndex = page * limit;

                const resultPlaylist = playlist.slice(startIndex, endIndex)
                return res.json({ total: playlist.length, playlist: resultPlaylist });
            }
            const page = parseInt(req.query.page);
            console.log(page)
            const limit = 5;

            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;

            const resultPlaylist = playlist.slice(startIndex, endIndex)
            return res.json({ total: playlist.length, playlist: resultPlaylist });
        }
        else {
            return res.json({ total: playlist.length, playlist: playlist });
        }
    }
}

module.exports = new PlaylistController();