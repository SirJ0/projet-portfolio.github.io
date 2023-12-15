const questions = [
    {
      question: "Qu'est-ce que l'IA?",
      answer: "L'intelligence artificielle (IA) concerne les systèmes informatiques capables d'exécuter des tâches qui nécessitent normalement l'intelligence humaine. Cela peut inclure des activités comme la reconnaissance de la parole, la prise de décision, la traduction de langues, etc."
    },
    {
      question: "Quels sont les principaux types d'IA?",
      answer: "Les principaux types d'IA sont l'IA faible (ou étroite) et l'IA forte (ou générale). L'IA faible est conçue pour effectuer une tâche spécifique, tandis que l'IA forte vise à reproduire l'intelligence humaine dans sa globalité."
    },
    // Ajouter les autres questions et réponses ici
    {
      question: "Qu'est-ce que le deep learning?",
      answer: "Le deep learning est une branche de l'apprentissage automatique qui utilise des réseaux neuronaux artificiels pour imiter le processus de cognition humaine, en apprenant à partir de données non structurées ou non classifiées."
    }
  ];
  
  let currentQuestion = 0;
  
  function displayQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion].question;
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const result = document.getElementById("result");
  
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      result.textContent = "Correct! Bonne réponse!";
      nextQuestion();
    } else {
      result.textContent = "Incorrect. Désolé, la bonne réponse est : " + questions[currentQuestion].answer;
    }
  }
  
  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      document.getElementById("result").textContent = "";
      document.getElementById("answer").value = "";
      displayQuestion();
    } else {
      document.getElementById("question").textContent = "Fin du quiz. Merci!";
      document.getElementById("answer").style.display = "none";
      document.getElementsByTagName("button")[0].style.display = "none";
      document.getElementById("result").style.display = "none;
      document.getElementsByTagName("button")[1].style.display = "none";
    }
  }
  
  // Afficher la première question au chargement de la page
  displayQuestion();
  