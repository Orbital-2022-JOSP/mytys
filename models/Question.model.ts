import mongoose, { model, Schema, Types } from 'mongoose';
import { IMCQOption, MCQOptionSchema } from './MCQOption.model';
import { IQuestionTopic } from './QuestionTopic.model';
import { IQuestionType } from './QuestionType.model';

/**
 * The mcq question interface that extends from the generic question interface
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
 * @member {string} questionType The question type of the question
 * @member {IMCQOption} mcqCorrectAnswer The correct answer of the mcq question
 * @member {Array<IMCQOption>} mcqOptions The options of the mcq question
 * @member {string} oeCorrectAnswers The correct answer of the open ended question
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
    questionType: "mcq" | "oe";
    mcqCorrectAnswer: IMCQOption;
    mcqOptions: Array<IMCQOption>;
    oeCorrectAnswers: [string];
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
    questionType: {
        type: String,
        default: "mcq"
    },
    mcqCorrectAnswer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MCQOption"
    },
    mcqOptions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MCQOption"
    }],
    oeCorrectAnswers: [{
        type: String
    }]
}, {
    timestamps: true
})

export default mongoose.models.Question || model<IQuestion>('Question', QuestionSchema)