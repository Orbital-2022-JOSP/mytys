import mongoose, { model, Schema, Types } from 'mongoose';

/**
 * The question topic interface
 * 
 * @interface IQuestionTopic
 * @member {string} name The name of the question topic
 */

export interface IQuestionTopic {
    _id?: Types.ObjectId;
    name: string;
}

const QuestionTopicSchema = new Schema<IQuestionTopic>({
    name: {
        type: String,
        required: [
            function () { return this.name != null; },
            'Name is required'
        ]
    }
}, {
    timestamps: true
})

export default mongoose.models.QuestionTopic || model<IQuestionTopic>('QuestionTopic', QuestionTopicSchema)