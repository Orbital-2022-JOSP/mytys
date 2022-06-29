import mongoose, { model, Schema, Types } from 'mongoose';
import { IMCQQuestionOption } from './MCQQuestionOption.model';

/**
 * The mcq question interface that extends from the generic question interface
 * 
 * @interface IMCQQuestion
 * @member {Types.ObjectId} questionId Id of the question
 * @member {string} questionType mcq
 * @member {IMCQQuestionOption} correctAnswer The correct answer of the mcq question
 * @member {Array<IMCQQuestionOption>} options The options of the mcq question
 */

export interface IMCQQuestion {
    _id?: Types.ObjectId;
    questionId: Types.ObjectId;
    questionType: "mcq";
    correctAnswer: IMCQQuestionOption;
    options: Array<IMCQQuestionOption>;
    
}

const MCQQuestionSchema = new Schema<IMCQQuestion>({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },
    questionType: {
        type: String,
        default: "mcq"
    },
    correctAnswer: {
        type: Schema.Types.ObjectId,
        ref: "MCQQuestionOption"
    },
    options: [{
        type: Schema.Types.ObjectId,
        ref: "MCQQuestionOption"
    }]
})

export default mongoose.models.MCQQuestion || model<IMCQQuestion>('MCQQuestion', MCQQuestionSchema)