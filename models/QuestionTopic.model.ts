import mongoose, { model, Schema } from 'mongoose';

/**
 * The question topic interface
 * 
 * @interface IQuestionTopic
 * @member {string} name The name of the question topic
 */

export interface IQuestionTopic {
    name: string;
}

const QuestionTopicSchema = new Schema<IQuestionTopic>({
    name: {
        type: String
    }
})

export default mongoose.models.QuestionTopic || model<IQuestionTopic>('QuestionTopic', QuestionTopicSchema)