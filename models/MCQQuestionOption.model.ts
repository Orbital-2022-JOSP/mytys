import mongoose, { model, Schema, Types } from 'mongoose';

/**
 * The mcq question option interface
 * 
 * @interface IMCQQuestionOption
 * @member {Types.ObjectId} questionId The corresponding question id
 * @member {string} text The text of the question option
 */

export interface IMCQQuestionOption {
    questionId: Types.ObjectId;
    text: string;
}

const MCQQuestionOptionSchema = new Schema<IMCQQuestionOption>({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MCQQuestion'
    },
    text: {
        type: String
    }
})

export default mongoose.models.MCQQuestionOption || model<IMCQQuestionOption>('MCQQuestionOption', MCQQuestionOptionSchema)