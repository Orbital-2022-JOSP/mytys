import mongoose, { model, Schema, Types } from 'mongoose';
import { IQuestion } from './Question.model';
import { IQuestionTopic } from './QuestionTopic.model';
import { IQuestionType } from './QuestionType.model';

/**
 * The generic course interface
 * 
 * @interface ICourse
 * @member {string} title Title of the course
 * @member {string} description Description of the course
 * @member {number} difficulty The difficulty of the course, 0 to 100 based on user feedback, convert integer into out of 5 stars rating
 * @member {Array<IQuestionTopic>} courseTopics The question topics covered by this course
 * @member {Array<IQuestionType>} courseTypes The question types covered by this course
 * @member {Array<IQuestion>} questions The questions covered by this course
 */

export interface ICourse {
    _id?: Types.ObjectId;
    title: string;
    description: string;
    difficulty: number;
    courseTopics: Array<IQuestionTopic>;
    courseTypes: Array<IQuestionType>;
    questions: Array<IQuestion>
}

const CourseSchema = new Schema<ICourse>({
    title: {
        type: String
    },
    description: {
        type: String
    },
    difficulty: {
        type: Number
    },
    courseTopics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionTopic"
    }],
    courseTypes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionType"
    }],
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }]
}, {
    timestamps: true
})

export default mongoose.models.Course || model<ICourse>('Course', CourseSchema)