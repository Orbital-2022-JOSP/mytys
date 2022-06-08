import mongoose, { model, Schema } from 'mongoose';
import { IQuestionAnswer } from './QuestionAnswer.model';
import { IUser } from './User.model';
import { IWorksheet } from './Worksheet.model';

/**
 * The work document interface
 * 
 * @interface IWorkdoc
 * @member {IWorksheet} worksheet The corresponding worksheet
 * @member {Array<IQuestionAnswer>} questionAttempts The list of question attempts
 * @member {IUser} user The user's id
 * @member {number} userScore The user's score for this worksheet
 * @member {number} maximumScore The maximum score possible for this worksheet
 * @member {number} pointsEarned No of points the user earned from completing this worksheet
 */

export interface IWorkdoc {
    worksheet: IWorksheet;
    questionAttempts: Array<IQuestionAnswer>;
    user: IUser;
    userScore: number;
    maximumScore: number;
    pointsEarned: number;
}

const WorkdocSchema = new Schema<IWorkdoc>({
    worksheet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Worksheet"
    },
    questionAttempts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionAnswer"
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    userScore: {
        type: Number,
        min: 0
    },
    maximumScore: {
        type: Number,
        min: 0
    },
    pointsEarned: {
        type: Number,
        min: 0
    }
})

export default mongoose.models.Workdoc || model<IWorkdoc>('Workdoc', WorkdocSchema)