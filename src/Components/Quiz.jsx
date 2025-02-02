import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizImg from "../assets/Images/Quiz.png";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);

  // Weighted scoring system (0-3 points per question)
  const questions = [
    {
      question: "How often do you feel overwhelmed by daily stressors?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
      weights: [0, 1, 2, 3]
    },
    {
      question: "How would you rate your sleep quality?",
      options: ["Excellent", "Good", "Fair", "Poor"],
      weights: [0, 1, 2, 3]
    },
    {
      question: "Do you find it easy to relax and unwind?",
      options: ["Always", "Usually", "Sometimes", "Rarely"],
      weights: [3, 2, 1, 0]
    },
    {
      question: "How often do you engage in physical activity?",
      options: ["Daily", "3-4 times/week", "1-2 times/week", "Never"],
      weights: [0, 1, 2, 3]
    },
    {
      question: "How supported do you feel in your social relationships?",
      options: ["Very Supported", "Supported", "Neutral", "Isolated"],
      weights: [0, 1, 2, 3]
    }
  ];

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    const questionScore = questions[currentQuestionIndex].weights[optionIndex];
    setScore(prev => prev + questionScore);
  };

  const calculateMentalState = () => {
    const maxScore = questions.length * 3;
    const percentage = (score / maxScore) * 100;
    
    if (percentage <= 25) return { status: 'green', label: 'Optimal Wellness' };
    if (percentage <= 60) return { status: 'yellow', label: 'Moderate Stress' };
    return { status: 'red', label: 'Professional Support Recommended' };
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleResultAction = () => {
    const result = calculateMentalState().status;
    
    if (result === 'green') {
      navigate('/FeelGood');
    } else if (result === 'yellow') {
      navigate('/FeelGood', { state: { message: "Consider taking some time for self-care and relaxation." } });
    } else {
      setShowWarningModal(true);
    }
  };

  const ProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-7 mb-0">
      <div 
        className="bg-prim h-2.5 rounded-full transition-all duration-500" 
        style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
      />
    </div>
  );

  const StatusIndicator = ({ status }) => (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div className={`absolute inset-0 rounded-full animate-pulse ${{
        green: 'bg-green-600/20',
        yellow: 'bg-yellow-600/20',
        red: 'bg-red-600/20'
      }[status]}`}/>
      <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl shadow-lg ${
        status === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600' :
        status === 'yellow' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
        'bg-gradient-to-br from-red-400 to-red-600'
      }`}>
        {status === 'green' ? '✓' : status === 'yellow' ? '⚠' : '❗'}
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-bgcolor">
      {/* Warning Modal */}
      {showWarningModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Support Recommended</h3>
            <p className="text-gray-600 mb-6">
              Based on your responses, we recommend consulting with a mental health professional. 
              This can help you develop strategies to improve your wellbeing.
            </p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={() => window.location.href = 'https://procto-website.com'}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Find Professional Help
              </button>
              <button
                onClick={() => navigate('/FeelGood')}
                className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Continue Anyway
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-gray-500 max-w-md mx-auto px-4 overflow-hidden md:max-w-4xl lg:max-w-6xl">
        <div>
          <div className="pt-2 text-center tracking-wide leading-snug text-2xl font-libre text-gray-700 md:text-3xl md:leading-normal lg:text-4xl lg:leading-normal">
          Your Mental Health Pulse
          </div>
          
          <div className="md:flex md:justify-between">
            <div className="md:shrink-0 md:content-center">
              <img
                className="hidden mx-auto h-72 w-72 rounded-2xl object-cover opacity-70 md:block md:h-72 md:w-72 lg:h-96 lg:w-96"
                src={QuizImg}
                alt="Quiz"
              />
            </div>

            <div className="flex-1 md:max-w-xl">
              {!showResult ? (
                <>
                  <ProgressBar />
                  
                  <div className="pt-6 tracking-wide leading-snug text-base font-libre text-gray-700 md:text-lg md:leading-normal md:text-left lg:text-xl lg:leading-normal">
                    <span className="text-prim font-bold">Question {currentQuestionIndex + 1}</span>
                    <p className="mt-4 text-xl font-medium">{questions[currentQuestionIndex].question}</p>
                  </div>

                  <div className="py-7">
                  <div className="relative flex flex-col rounded-lg shadow-sm border border-sec bg-sec/10">
                      <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                          <div
                            key={index}
                            role="button"
                            onClick={() => handleAnswerSelect(index)}
                            className={`text-gray-700 flex w-full items-center rounded-md p-3 transition-all 
                              ${selectedAnswer === index 
                                ? 'bg-prim text-white shadow-md' 
                                : 'hover:bg-sec/20 hover:text-gray-900'}`
                            }
                          >
                            <span className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center 
                              ${selectedAnswer === index ? 'border-white' : 'border-gray-400'}`}>
                              {selectedAnswer === index && <div className="w-3 h-3 rounded-full bg-white"/>}
                            </span>
                            {option}
                          </div>
                        ))}
                      </nav>
                    </div>

                    <div className="flex justify-end mt-6">
                      <button
                        onClick={handleNext}
                        disabled={selectedAnswer === null}
                        className="flex items-center rounded-lg border border-prim bg-prim/10 py-2.5 px-6 text-center text-sm font-medium transition-all 
                          shadow-sm hover:bg-prim hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {currentQuestionIndex === questions.length - 1 ? 'View Results' : 'Continue'}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 ml-1.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-xl md:text-2xl md:font-bold mb-8 text-gray-600 font-libre">
                    {calculateMentalState().label}
                  </div>
                  
                  <div className="flex justify-center mb-8">
                    <StatusIndicator status={calculateMentalState().status} />
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-gray-600 text-lg">
                      {calculateMentalState().status === 'green' && 
                        "Your responses indicate healthy stress management patterns. Keep up the good work!"}
                      {calculateMentalState().status === 'yellow' && 
                        "Your results suggest moderate stress levels. Consider incorporating regular self-care practices."}
                      {calculateMentalState().status === 'red' && 
                        "Your responses indicate significant stress levels. Professional support can help you develop effective coping strategies."}
                    </p>
                  </div>

                  <button
                    onClick={handleResultAction}
                    className="bg-prim text-white px-8 py-3 rounded-lg hover:bg-prim transition-colors font-medium text-lg"
                  >
                    {calculateMentalState().status === 'red' 
                      ? 'Connect with Professionals' 
                      : 'Continue to Wellness Resources'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;