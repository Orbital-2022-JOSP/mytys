/**
 * The generic question interface
 * 
 * @interface IQuestion
 * @member {string} title Title of the question
 * @member {string} description Description of the question
 * @member {string} questionType Question type, currently only mcq and open ended
 * @member {number} difficulty The difficulty of the question, 0 to 100 based on user feedback, convert integer into out of 5 stars rating
 * @member {string} explanation The explanation of the answer to the question whether that be by a tutor or sysAdmin
 */
export interface IQuestion {
    title: string;
    description: string;
    questionType: "mcq" | "open ended";
    difficulty: number;
    explanation: string;
}