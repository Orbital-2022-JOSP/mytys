import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../dbConnect";
import QuestionAnswerModel, { IQuestionAnswer } from "../../../models/QuestionAnswer.model";
import UserProfileModel, { IUserProfile } from '../../../models/UserProfile.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            const { authToken } = req.body;

            // Check the auth token to make sure that is authorized.
            if (authToken == process.env.AUTH_KEY) {
                try {
                    const userProfiles = await UserProfileModel.find({});
                    userProfiles.map((profile: IUserProfile) => {
                        const questionAnswers = QuestionAnswerModel.find({
                            user: {
                                $eq: profile.userId
                            }
                        })

                        questionAnswers.then((questionAnswers: IQuestionAnswer[]) => {
                            const totalPoints = questionAnswers.reduce(
                                (pre, curr) => pre + curr.points,
                                0
                            )

                            UserProfileModel
                                .findOneAndUpdate(
                                    {
                                        _id: {
                                            $eq: profile.userId
                                        }
                                    },
                                    {
                                        noOfPoints: totalPoints
                                    }
                                )
                        })
                    })
                    res.status(200).json({ success: true });
                } catch (error) {
                    res.status(400).json({ success: false });
                }
            } else {
                res.status(401).json({ success: false });
            }

            break;

        default:
            res.status(404).end();
            break;
    }
}