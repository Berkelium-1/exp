const mongoose = require('mongoose');

// mongoose.set('bufferCommands', false);

const dbURL = 'mongodb://localhost:27017/zoon'; // 数据库地址
// 不用考虑要连接的数据库是否存在, 如果不存在会自动创建


mongoose.connect(dbURL); // 连接数据库

const Schema = mongoose.Schema;

let schema = new Schema({
    username: {
        type: String, // 数据的类型
        required: true // 是否必填
    },
    age: Number
}); // 定义集合结构

const Collection = mongoose.model('cats', schema); // 创建一个模型 (集合)





// 新增数据
const document = new Collection({ username: 'my', age: 22 }); // 创建数据

document.save(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('数据插入成功');
    }
}); // 插入数据




/* 查询数据 */
// Collection.find((err, dom) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(dom); // 打印数据 (文档)
//     }
// });

/* 删除数据 */
Collection.remove({ username: 'zs' }, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('结果=>', res); // 打印数据 (文档)
    }
});