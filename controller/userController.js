const {ObjectId} = require('mongodb');

async function addUserInfo(req, res){
    try {
        const collection  = req.collection;
        const {name, email, password, phone} = req.body;

        const result = await collection.insertOne({name, email, password, phone});
        return res.status(201).json({
            status: "success",
            data: {
                result
            }
        })
    } catch (error) {
        return res.status(400).json({
            status: "failure",
            message: error.message
        })
    }
}

async function getAllUsers(req, res){
    try {
        const collection = req.collection;

        const result = await collection.find({}).toArray();
        return res.status(201).json({
            status: "success",
            data: {
                result
            }
        })

    } catch (error) {
        return res.status(400).json({
            status: "failure",
            message: error.message
        })
    }
}

async function deleteUsers(req, res){
    try {
        const collection = req.collection;
        const {id} = req.params;

        const result = await collection.deleteOne({_id: new ObjectId(id)});

        if(result.deletedCount === 1){
            return res.status(200).json({
                status: "deleted successfully",
                data: {result}
            })
        }
        else {
            return res.status(404).json({
                status: "user not found",
                message: "please enter valid id"
            })
        }
    } catch (error) {
        return res.status(400).json({
            status: "failure",
            message: error.message
        })
    }
}

module.exports = {
    addUserInfo,
    getAllUsers,
    deleteUsers
}