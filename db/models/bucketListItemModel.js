const Sequelize = require('sequelize');
const db = require('../config.js');
// const bucketListType = require('./bucketListTypeModel.js');

const BucketListItem = db.define('listItem', {
    // listType_Id: Sequelize.INTEGER,
    description: Sequelize.STRING,
    place: Sequelize.STRING,
    cost: Sequelize.INTEGER,
    url: Sequelize.STRING
})

// BucketListItem.belongsTo(bucketListType);
BucketListItem.sync();

module.exports = BucketListItem;