import mongoose, { model, Schema, Types } from 'mongoose';

/**
 * The question type interface
 * 
 * @interface IQuestionType
 * @member {string} name The name of the question type
 */

export interface IQuestionType {
    _id?: Types.ObjectId;
    name: string;
}

const QuestionTypeSchema = new Schema<IQuestionType>({
    name: {
        type: String
    }
})

export default mongoose.models.QuestionType || model<IQuestionType>('QuestionType', QuestionTypeSchema)