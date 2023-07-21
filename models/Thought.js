const { Schema, Types, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      currentTime: () => Date.now().toLocaleString("en-US"),
    },
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 230,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    timestamps: {
      currentTime: () => Date.now().toLocaleString("en-US"),
    },
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = { Thought, thoughtSchema };