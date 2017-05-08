import mongoose, { Schema } from 'mongoose';
import mongoosefloat from 'mongoose-float';

// 题目要求 float 类型, 保留小数点后3位,精确到分
// XXX: 但是我更希望是 Int 类型, 从 "分" 开始.
const Float = mongoosefloat.loadType(mongoose, 3);

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  walet: { type: Float, min: 0, defualt: 0 },
});

export default mongoose.model('User', UserSchema);
