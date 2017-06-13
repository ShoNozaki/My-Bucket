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
        // console.log(req.body)
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
    },
    deleteItem: (req, res) => {
        console.log('id= ',req.params[0].slice(1))
        BucketList.destroy({
            where: {id: req.params[0].slice(1)}
        }).then(() => {
            res.send('deleted successfully');
        }).catch((err) => {
            res.send(err);
        })
    }
}
