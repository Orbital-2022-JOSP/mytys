import mongoose, { model, Schema, Types } from 'mongoose';
import { IQuestionTopic } from './QuestionTopic.model';
import { IQuestionType } from './QuestionType.model';

/**
 * The user profile interface
 * 
 * @interface IUserProfile
 * @member {Types.ObjectId} userId The corresponding user id
 * @member {number} noOfPoints The number of points the user has
 * @member {number} dayStreaks The number of active days the user has been participating
 * @member {string} rank The user's rank based on points
 * @member {Array<IQuestionTopic>} bestQuestionTopics The user's best question topics
 * @member {Array<IQuestionType>} bestQuestionTypes The user's best question types
 * @member {Array<IQuestionTopic>} worstQuestionTopics The user's worst question topics
 * @member {Array<IQuestionType>} worstQuestionTypes The user's worst question types
 */

export interface IUserProfile {
    userId: Types.ObjectId;
    noOfPoints: number;
    dayStreaks: number;
    rank: string;
    bestQuestionTopics: Array<IQuestionTopic>;
    bestQuestionTypes: Array<IQuestionType>;
    worstQuestionTopics: Array<IQuestionTopic>;
    worstQuestionTypes: Array<IQuestionType>;
}

const UserProfileSchema = new Schema<IUserProfile>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    noOfPoints: {
        type: Number,
        min: 0
    },
    dayStreaks: {
        type: Number,
        min: 0
    },
    rank: {
        type: String
    },
    bestQuestionTopics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionTopic"
    }],
    bestQuestionTypes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionType"
    }],
    worstQuestionTopics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionTopic"
    }],
    worstQuestionTypes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionType"
    }]
})

export default mongoose.models.UserProfile || model<IUserProfile>('UserProfile', UserProfileSchema)