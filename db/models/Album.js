const { Sequelize, Model, DataTypes } = require('sequelize');
const seq = require('../db.js');

class Album extends Model {}

Album.init({
    album_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    artist_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Artists",
            key: "artist_id"
        }
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1, 60]
        }
    }
}, {
    indexes: [
        {
            fields: ['artist_id']
        }
    ],
    sequelize: seq
});

module.exports = Album;