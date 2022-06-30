import mongoose, { model, Schema, Types } from 'mongoose';

/**
 * The mcq question option interface
 * 
 * @interface IMCQOption
 * @member {Types.ObjectId} id The id of the mcq question option
 * @member {Types.ObjectId} questionId The corresponding question id
 * @member {string} text The text of the question option
 */

export interface IMCQOption {
    _id?: Types.ObjectId;
    questionId: Types.ObjectId;
    text: string;
}

export const MCQOptionSchema = new Schema<IMCQOption>({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MCQ'
    },
    text: {
        type: String
    }
}, {
    timestamps: true
})

export default mongoose.models.MCQOption || model<IMCQOption>('MCQOption', MCQOptionSchema)