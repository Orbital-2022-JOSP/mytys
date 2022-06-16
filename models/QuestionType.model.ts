import { model, Schema } from 'mongoose';

/**
 * The question type interface
 * 
 * @interface IQuestionType
 * @member {string} name The name of the question type
 */

export interface IQuestionType {
    name: string;
}

const QuestionTypeSchema = new Schema<IQuestionType>({
    name: {
        type: String
    }
})

export default mongoose.models.QuestionType || model<IQuestionType>('QuestionType', QuestionTypeSchema)