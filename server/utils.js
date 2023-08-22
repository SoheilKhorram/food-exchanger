const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

var db,codes_clct,users_clct;

async function connect_to_db() 
{
    await client.connect();
    db = client.db('food_exchange');
    return {
        codes_clct: db.collection('codes'),
        users_clct: db.collection('users')
    }

};

connect_to_db().then(res => 
{
    users_clct = res.users_clct;
    codes_clct = res.codes_clct; 
});

const insert_to_users = async (obj) => { await users_clct.insertOne(obj); return "DONE"; }
const get_users = async () => { const result = await users_clct.find().toArray(); return result; }
const get_user = async (id) => { const result = await users_clct.find({ id }).toArray(); return result[0]; }
const update_user = async (id, value) => { await users_clct.updateOne({ id }, { $set: value }, function () {}); return "DONE"; }

const insert_to_codes = async (obj) => { await codes_clct.insertOne(obj); return "DONE"; }
const get_codes = async () => { const result = await codes_clct.find().toArray(); return result; }
const get_code = async (id) => { const result = await codes_clct.find({ id }).toArray(); return result[0]; }
const update_code = async (id, value) => { await codes_clct.updateOne({ id }, { $set: value }, function () {}); return "DONE"; }

const uid = () => { return Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000; }

module.exports = 
{
    uid,
    insert_to_users,
    get_users,
    get_user,
    update_user,
    insert_to_codes,
    get_codes,
    get_code,
    update_code,
    connect_to_db,
};