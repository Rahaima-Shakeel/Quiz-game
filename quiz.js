#! /usr/bin/env node
import inquirer from "inquirer";
console.log("BEST OF LUCK FOR THE QUIZ");
let quiz_questions = await inquirer.prompt([
    {
        name: "answer1",
        type: "list",
        message: "What is the primary focus Biomedical Engineering?",
        choices: [
            "Developing medical devices",
            "Designing buildings",
            "studying cultures",
        ]
    },
    {
        name: "answer2",
        type: "list",
        message: "Which imaging technique is commonly used in biomedical engineering?",
        choices: [
            "MRI",
            "X-ray",
            "CT scan",
        ]
    },
    {
        name: "answer3",
        type: "list",
        message: "What is a common application of tissue engineering?",
        choices: [
            "Designing software",
            "Developing artificial organs",
            "Building bridges",
        ],
    }
]);
if (quiz_questions.answer1 === "Developing medical devices") {
    console.log("Correct Answer");
}
else {
    console.log("Wrong Answer");
}
if (quiz_questions.answer2 === "MRI") {
    console.log("Correct Answer");
}
else {
    console.log("Wrong Answer");
}
if (quiz_questions.answer3 === "Developing artificial organs") {
    console.log("Correct Answer");
}
else {
    console.log("Wrong Answer");
}
console.log("\n You have Completed Your Quiz \n");
