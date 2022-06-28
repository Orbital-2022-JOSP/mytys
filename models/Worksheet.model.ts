import mongoose, { model, Schema, Types } from 'mongoose';
import { IQuestion } from './Question.model';
import { IQuestionTopic } from './QuestionTopic.model';
import { IQuestionType } from './QuestionType.model';
import { IUser } from './User.model';

/**
 * The worksheet interface
 * 
 * @interface IWorksheet
 * @member {Array<IQuestion>} questions Questions in the worksheet
 * @member {Date} createdAt Date and time that the worksheet was created
 * @member {Date} updatedAt Date and time that the worksheet was last updated
 * @member {IUser} creator The creator of the worksheet
 * @member {Array<IQuestionTopic>} questionTopics Top three question topics from all questions in the worksheet
 * @member {Array<IQuestionType>} questionTypes Top three question types from all questions in the worksheet
 * @member {boolean} deleted Soft Deletion Flag
 */

export interface IWorksheet {
    _id?: Types.ObjectId;
    questions: Array<IQuestion>;
    createdAt: Date;
    updatedAt: Date;
    creator: IUser;
    questionTopics: Array<IQuestionTopic>;
    questionTypes: Array<IQuestionType>;
    deleted: boolean;
}

const WorksheetSchema = new Schema<IWorksheet>({
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }],
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    questionTopics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionTopic"
    }],
    questionTypes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionType"
    }],
    deleted: {
        type: Boolean,
        default: false
    }
})

export default mongoose.models.Worksheet || model<IWorksheet>('Worksheet', WorksheetSchema)