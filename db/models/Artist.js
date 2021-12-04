const { Sequelize, Model, DataTypes } = require('sequelize');
const seq = require('../db.js');

class Artist extends Model {}

Artist.init({
    artist_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
            fields: ['name']
        }
    ],
    sequelize: seq
});

module.exports = Artist;