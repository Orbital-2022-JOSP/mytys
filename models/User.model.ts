import mongoose, { Types } from "mongoose";

/**
 * The user interface
 *
 * @interface IUser
 * @member {string} email The user's email
 * @member {string} name The user's name
 * @member {string} image The user's image uri
 * @member {boolean} emailVerified Email Verified Flag
 * @member {string} userRole The user's role
 * @member {number} level The user's "power" level
 * @member {string} grade The user's grade
 */

export interface IUser {
  _id?: Types.ObjectId;
  email: string;
  name: string;
  image: string;
  emailVerified: boolean;
  userRole: string;
  level: number;
grade: string;
}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Required"],
    },
    name: {
      type: String,
      required: [true, "Required"],
    },
    image: {
      type: String,
      required: [true, "Required"],
    },
    emailVerified: {
      type: Boolean,
      default: null,
    },
    userRole: {
      type: String,
    },
    level: {
      type: Number,
      default: 10,
      min: 0,
      max: 100,
    },
    grade: {
      type: String,
      enum: [
        "Grade 1",
        "Grade 2",
        "Grade 3",
        "Grade 4",
        "Grade 5",
        "Grade 6",
        "Grade 7",
        "Grade 8",
        "Grade 9",
      ],
      default: "Grade 1",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.virtual("answeredQuestions", {
  ref: "QuestionAnswer",
  localField: "_id",
  foreignField: "user",
});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema, "users");
