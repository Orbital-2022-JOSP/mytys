import mongoose, { model, Schema, Types } from 'mongoose';
import { IQuestionTopic } from './QuestionTopic.model';
import { IQuestionType } from './QuestionType.model';

/**
 * The generic question interface
 * 
 * @interface IQuestion
 * @member {Types.ObjectId} id Id of the question
 * @member {string} title Title of the question
 * @member {string} description Description of the question
 * @member {number} difficulty The difficulty of the question, 0 to 100 based on user feedback, convert integer into out of 5 stars rating
 * @member {string} explanation The explanation of the answer to the question whether that be by a tutor or sysAdmin
 * @member {Array<IQuestionTopic>} questionTopics The question topics covered by this question
 * @member {Array<IQuestionType>} questionTypes The question types covered by this question
 * @member {string} subject The subject of the question
 */

export interface IQuestion {
    _id?: Types.ObjectId;
    title: string;
    description: string;
    difficulty: number;
    explanation: string;
    questionTopics: Array<IQuestionTopic>;
    questionTypes: Array<IQuestionType>;
    subject: string;
}

const QuestionSchema = new Schema<IQuestion>({
    title: {
        type: String
    },
    description: {
        type: String
    },
    difficulty: {
        type: Number
    },
    explanation: {
        type: String
    },
    questionTopics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionTopic"
    }],
    questionTypes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionType"
    }],
    subject: {
        type: String
    },
}, {
    toJSON: { virtuals: true }
})

QuestionSchema.virtual('mcqQuestions', {
    ref: 'MCQQuestion',
    localField: '_id',
    foreignField: 'questionId'
});

export default mongoose.models.Question || model<IQuestion>('Question', QuestionSchema)