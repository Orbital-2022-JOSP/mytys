import mongoose, { model, Schema, Types } from 'mongoose';

/**
 * The open ended question interface that extends from the generic question interface
 * 
 * @interface IOpenEndedQuestion
 * @member {Types.ObjectId} title Title of the question
 * @member {string} questionType open ended
 * @member {string} explanation The explanation of the answer to the question whether that be by a tutor or sysAdmin
 * @member {string} correctAnswer The correct answer of the open ended question
 */

export interface IOpenEndedQuestion {
    _id?: Types.ObjectId;
    questionId: Types.ObjectId;
    questionType: "open ended";
    correctAnswer: string;
}

const OpenEndedQuestionSchema = new Schema<IOpenEndedQuestion>({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },
    questionType: {
        type: String,
        default: "open ended"
    },
    correctAnswer: {
        type: String
    }
}, {
    timestamps: true
})

export default mongoose.models.OpenEndedQuestion || model<IOpenEndedQuestion>('OpenEndedQuestion', OpenEndedQuestionSchema)