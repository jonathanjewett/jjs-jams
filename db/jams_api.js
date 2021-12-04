const Artist = require('./models/Artist.js');
const Album = require('./models/Album.js');


// All artists and albums
const allContent = () => {
    return Artist.findAll({
        attributes: [
            'artist_id',
            'name'
        ]
    }).then((artists) => {
        var albums = [];
        for (var i = 0; i < artists.length; i++) {
            albums.push(Album.findAll({
                attributes: [
                    'name'
                ],
                where: {
                    artist_id: artists[i].dataValues.artist_id
                }
            }));
        }

        return Promise.all(albums).then((albums) => {
            for (var j = 0; j < artists.length; j++) {
                let tempArray = albums[j]
                artists[j].dataValues.albums = tempArray;
            }

            return artists;
        });
    });
}

const addArtist = (req_body) => {
    console.log(req_body);
    let artist = {};
    artist.name = req_body.artist_name;
    return Artist.findOrCreate({
       where: {
           name: req_body.artist_name
       }
    }).then((results) => {
        return Album.findOrCreate({
            where: {
                artist_id: results[0].dataValues.artist_id,
                name: req_body.album_name
            }
        })
    });
}

const addAlbum = (req_body) => {
    let album = {};
    album.artist_id = req_body.artist_id;
    album.name = req_body.name;
    return Album.findOrCreate(album);
}

module.exports.allContent = allContent;
module.exports.addArtist = addArtist;
module.exports.addAlbum = addAlbum;