import mongoose, { Schema } from 'mongoose';

const ArticleSchema = new Schema({
  title: String,
  url: String,
  text: String,
});

ArticleSchema.virtual('date')
  .get(function getTimestamp() {
    return this._id.getTimestamp();  // eslint-disable-line
  });

export default mongoose.model('Article', ArticleSchema);
