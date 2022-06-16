import mongoose, { model, Schema } from 'mongoose';
import { IMCQQuestionOption } from './MCQQuestionOption.model';
import { IQuestion } from './Question.model';
import { IUser } from './User.model';

/**
 * The generic question answer interface
 * 
 * @interface IQuestionAnswer
 * @member {IUser} user The user that answered the question
 * @member {IQuestion} question The question
 * @member {number} score The score that the user receive for their answer, most likely 0 or 1
 * @member {IMCQQuestionOption} MCQAnswer The answer if the question is a MCQ question
 * @member {string} OpenEndedAnswer The answer if the question is an open ended question
 */

export interface IQuestionAnswer {
    user: IUser;
    question: IQuestion;
    score: number;
    MCQAnswer?: IMCQQuestionOption;
    OpenEndedAnswer?: string;
}

const QuestionAnswerSchema = new Schema<IQuestionAnswer>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },
    score: {
        type: Number,
        min: 0
    },
    MCQAnswer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MCQQuestionOption"
    },
    OpenEndedAnswer: {
        type: String
    }
})

export default mongoose.models.QuestionAnswer || model<IQuestionAnswer>('QuestionAnswer', QuestionAnswerSchema)