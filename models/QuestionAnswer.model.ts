import mongoose, { model, Schema, Types } from 'mongoose';
import { IMCQQuestionOption } from './MCQQuestionOption.model';
import { IQuestion } from './Question.model';
import { IUser } from './User.model';

export interface IQuestionAnswerExtended {
    user: IUser;
    question: IQuestion;
    score: number;
    MCQAnswer?: IMCQQuestionOption;
    OpenEndedAnswer?: string;
}

/**
 * The generic question answer interface
 * 
 * @interface IQuestionAnswer
 * @member {Types.ObjectId} user The user id that answered the question
 * @member {Types.ObjectId} question The question id
 * @member {number} score The score that the user receive for their answer, most likely 0 or 1
 * @member {Types.ObjectId} MCQAnswer The answer if the question is a MCQ question
 * @member {string} OpenEndedAnswer The answer if the question is an open ended question
 */


// MCQ Answer and Open Ended Answer might not be necessary in the future
export interface IQuestionAnswer {
    user: Types.ObjectId;
    question: Types.ObjectId
    score: number;
    MCQAnswer?: Types.ObjectId;
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