const Sequelize = require('sequelize');
const db = require('../config.js');

const BucketListType = db.define('listType', {
    activityType: {
      type: Sequelize.STRING,
      unique: true
    }
})

BucketListType.sync();

module.exports = BucketListType;