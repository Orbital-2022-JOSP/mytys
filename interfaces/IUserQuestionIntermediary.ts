import { Types } from "mongoose";

/**
 * The generic user question intermediary model interface
 * 
 * @interface IUserQuestionIntermediary
 * @member {Types.ObjectId} userId The corresponding user id
 * @member {Types.ObjectId} questionId The corresponding question id
 * @member {number} score The score that the user receive for their answer, most likely 0 or 1.
 */
export default interface IUserQuestionIntermediary {
    userId: Types.ObjectId;
    questionId: Types.ObjectId;
    score: number;
}