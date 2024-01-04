const { MongoClient } = require('mongodb');

const uri = mongodb+srv://user_kcE:wangck2121@cluster0.o6j85dg.mongodb.net/?retryWrites=true&w=majority;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

exports.handler = async function(event, context) {
  if (!db) {
    await client.connect();
    db = client.db();
  }

  // 在这里执行 Twikoo 相关的操作，包括读取和写入评论数据

  // 示例：读取评论数据
  const comments = await db.collection('comments').find().toArray();

  // 示例：写入评论数据
  const newComment = { name: 'John', content: 'This is a new comment!' };
  await db.collection('comments').insertOne(newComment);

  // 返回适当的响应

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Twikoo handler executed successfully' })
  };
};



exports.handler = require('twikoo-netlify').handler
