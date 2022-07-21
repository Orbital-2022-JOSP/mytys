import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import MCQOptionModel from "../../../../models/MCQOption.model";
import QuestionModel from "../../../../models/Question.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    const fs = require('fs');

    switch (method) {
        case 'GET':
            try {
                fs.readFile('./lib/mockData/mytys_mock_question.json', (err, data) => {
                    if (err) {
                        return res.status(500).end();
                    } else {
                        let questions = JSON.parse(data);
                        try {
                            questions.forEach(async questionData => {
                                if (questionData.questionType == "mcq") {
                                    const mcqCorrectAnswer = questionData.mcqCorrectAnswer;
                                    const mcqOptions = questionData.mcqOptions;
                                    delete questionData.mcqCorrectAnswer;
                                    delete questionData.mcqOptions;

                                    const newQuestion = new QuestionModel(questionData)
                                    const newCorrectMCQOption = await MCQOptionModel.create({
                                        questionId: newQuestion._id,
                                        text: mcqCorrectAnswer.text
                                    })

                                    const filteredOptions = mcqOptions.filter((x) => x.text != newCorrectMCQOption.text).map((x) => ({
                                        ...x,
                                        questionId: newQuestion._id
                                    }));

                                    const newOtherOptions = await MCQOptionModel.insertMany(filteredOptions)
                                    const optionsIds = newOtherOptions.map((x) => x._id)
                                    optionsIds.push(newCorrectMCQOption._id);

                                    newQuestion.mcqCorrectAnswer = newCorrectMCQOption._id;
                                    newQuestion.mcqOptions = optionsIds;
                                    newQuestion.save();
                                    res.status(200).end();
                                } else {
                                    QuestionModel.create(questionData);
                                    res.status(200).end();
                                }
                            });
                        } catch (error) {
                            res.status(500).end();
                        }
                    }
                });
            } catch (error) {
                res.status(400).end();
            }

            break;

        default:
            res.status(404).end();
            break;
    }
}