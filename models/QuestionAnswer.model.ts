import mongoose, { model, Schema, Types } from 'mongoose';
import { IQuestion } from './Question.model';
import { IUser } from './User.model';

export interface IQuestionAnswerExtended {
    user: IUser;
    question: IQuestion;
    score: number;
    points: number;
}

/**
 * The generic question answer interface
 * 
 * @interface IQuestionAnswer
 * @member {Types.ObjectId} user The user id that answered the question
 * @member {Types.ObjectId} question The question id
 * @member {number} score The score that the user receive for their answer, most likely 0 or 1
 * @member {number} points The points associated with the question
 */


// MCQ Answer and Open Ended Answer might not be necessary in the future
export interface IQuestionAnswer {
    _id?: Types.ObjectId;
    user: Types.ObjectId;
    question: Types.ObjectId;
    score: number;
    points: number;
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
    points: {
        type: Number,
        min: 0,
        default: 0
    },
}, {
    timestamps: true
})

export default mongoose.models.QuestionAnswer || model<IQuestionAnswer>('QuestionAnswer', QuestionAnswerSchema)