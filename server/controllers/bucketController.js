const BucketList = require('../../db/models/bucketListItemModel');

module.exports = {
    getAllList: (req, res) => {
        BucketList.findAll()
        .then((ListItems) => {
            res.status(200).send(ListItems);
        })
        .catch((err) => {
            res.send(err);
        })
    },
    addlistItem: (req, res) => {
        BucketList.create({  
            description: req.body.description,
            place: req.body.place,
            cost: req.body.cost,
            url: req.body.url
        }).then((listItem) => {
            res.status(200).send(listItem);
        }).catch((err) => {
            res.send(err);
        })
    }
}
