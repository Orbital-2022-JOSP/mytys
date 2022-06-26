import mongoose from 'mongoose';

/**
 * The user interface
 * 
 * @interface IUser
 * @member {string} email The user's email
 * @member {string} name The user's name
 * @member {string} image The user's image uri
 * @member {boolean} emailVerified Email Verified Flag
 * @member {string} userRole The user's role
 */

export interface IUser {
    email: string;
    name: string;
    image: string;
    emailVerified: boolean;
    userRole: string
}

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Required'],
    },
    name: {
        type: String,
        required: [true, "Required"]
    },
    image: {
        type: String,
        required: [true, 'Required'],
    },
    emailVerified: {
        type: Boolean,
        default: null
    },
    userRole: {
        type: String
    }
})

UserSchema.virtual('answeredQuestions', {
    ref: 'QuestionAnswer',
    localField: '_id',
    foreignField: 'user'
});

export default mongoose.models.User || mongoose.model('User', UserSchema, 'users')