import mongoose, { Schema } from 'mongoose';
import mongoosefloat from 'mongoose-float';

// 题目要求 float 类型, 保留小数点后3位,精确到分
// XXX: 但是我更希望是 Int 类型, 从 "分" 开始.
const Float = mongoosefloat.loadType(mongoose, 3);

const ProductSchema = new Schema({
  name: { type: String, required: true, unique: true },
  sold: { type: Number, enum: [0, 1], default: 0 }, // <0|1  1表明已经被卖出>
  listPrice: { type: Float, min: 0, required: true },
  bidPrice: { type: Float, min: 0 },
  ts: { type: Number, default: Date.now, timestamps: true },
  tenderList: [
    {
      userId: { type: String, required: true },
      price: { type: Number, required: true },
    }],
  deadline: { type: Number, timestamps: true },
  //发布时间戳
});

export default mongoose.model('Product', ProductSchema);
