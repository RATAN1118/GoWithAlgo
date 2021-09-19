//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "How many sub arrays does the quick sort algorithm divide the entire array into?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Foue",
        correctOption: "optionB"
    },

    {
        question: "What is a randomized QuickSort?",
        optionA: "The leftmost element is chosen as the pivot",
        optionB: "The rightmost element is chosen as the pivot",
        optionC: "Any element in the array is chosen as the pivot",
        optionD: "A random number is generated which is used as the pivot",
        correctOption: "optionD"
    },

    {
        question: "What is the worst case time complexity of a quick sort algorithm",
        optionA: "O(N)",
        optionB: "O(N log N)",
        optionC: "O(N2)",
        optionD: "O(log N)",
        correctOption: "optionC"
    },

    {
        question: "Which of the following sorting algorithms is the fastest?",
        optionA: "Merge sort",
        optionB: "Quick sort",
        optionC: "Insertion sort",
        optionD: "Shell sort",
        correctOption: "optionB"
    },

    {
        question: "Quick sort is a space-optimised version of ____",
        optionA: "Bubble sort",
        optionB: "Selection sort",
        optionC: "Murge sort",
        optionD: "Binary tree sort",
        correctOption: "optionD"
    },
    {
        question: "Merge sort uses which of the following technique to implement sorting?",
        optionA: "backtracking",
        optionB: "greedy algorithm",
        optionC: "divide and conquer",
        optionD: "dynamic programming",
        correctOption: "optionC"
    },

    {
        question: "What is the average case time complexity of merge sort?",
        optionA: "O(n log n)",
        optionB: "O(n2)",
        optionC: "O(n2 log n)",
        optionD: "O(n log n2)",
        correctOption: "optionA"
    },
    {
        question: "What is the auxiliary space complexity of merge sort?",
        optionA: "O(1)",
        optionB: "O(log n)",
        optionC: "O(n)",
        optionD: "O(n log n)",
        correctOption: "optionC"
    },
    {
        question: "Merge sort is preferred for arrays over linked lists",
        optionA: "true",
        optionB: "false",
        optionC: "may be",
        optionD: "can't say",
        correctOption: "optionB"
    },
    {
        question: "Which of the following sorting algorithm does not use recursion",
        optionA: "Merge sort",
        optionB: "Quick sort",
        optionC: "Insertion sort",
        optionD: "bottom up merge sort",
        correctOption: "optionD"
    },
    {
        question: "What is the worst case complexity of bubble sort?",
        optionA: "O(nlogn)",
        optionB: "O(logn)",
        optionC: "O(n)",
        optionD: "O(n2)",
        correctOption: "optionD"
    },
    {
        question: "Which of the following is not an advantage of optimised bubble sort over other sorting techniques in case of sorted elements?",
        optionA: "It is faster",
        optionB: "Consumes less memory",
        optionC: "Detects whether the input is already sorted",
        optionD: "Consumes less time",
        correctOption: "optionC"
    },
    {
        question: "What is the average case complexity of bubble sort?",
        optionA: "O(nlogn)",
        optionB: "O(logn)",
        optionC: "O(n)",
        optionD: "O(n2)",
        correctOption: "optionD"

    },
    {
        question: "Which of the following sorting algorithm does not use recursion",
        optionA: "Merge sort",
        optionB: "Quick sort",
        optionC: "Insertion sort",
        optionD: "bottom up merge sort",
        correctOption: "optionD"
    },{
        question: "Which of the following sorting algorithm does not use recursion",
        optionA: "Merge sort",
        optionB: "Quick sort",
        optionC: "Insertion sort",
        optionD: "bottom up merge sort",
        correctOption: "optionD"
    }




]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions


function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
var name = document.getElementById("check").innerHTML;
  
  var m = 0;
  if(name==="Quick sort"){
    m= 0;
  }
  else if(name==="Merge sort"){
      m=5;
  }
  else if(name==="Bubble sort"){
      m=10
  }
  var i = m;


  
    while (shuffledQuestions.length <= (5+m-1)) {
        const random = questions[i]
            shuffledQuestions.push(random)
            i++;
    }
   
}




let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 4) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 1) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 2 && playerScore <= 3) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 4) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 5) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
