export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "GPT using Agentic AI",
    category: "Artificial Intelligence",
    description:
      "An AI-powered conversational assistant built using LangGraph, FastAPI, Next.js, and GPT-4o. Features real-time web search, conversation memory, human-in-the-loop workflows, and tool orchestration through an agentic architecture.",
    stack: [
      "Python",
      "LangGraph",
      "FastAPI",
      "Next.js",
      "OpenAI GPT-4o",
      "Docker"
    ],
    githubUrl: "https://github.com/Utsav07-hub/GPT-using-Agentic-AI",
  },

  {
    title: "Student Dropout Prediction",
    category: "Machine Learning",
    description:
      "An end-to-end machine learning pipeline that predicts students at risk of dropping out using data preprocessing, model training, hyperparameter tuning, MLflow tracking, and Dockerized deployment.",
    stack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "MLflow",
      "Docker"
    ],
    githubUrl: "https://github.com/Utsav07-hub/student-dropout-prediction",
  },

  {
    title: "VOICEAID – AI Voice Assistant",
    category: "Artificial Intelligence",
    description:
      "A voice-enabled AI assistant designed for rural users, enabling natural voice interaction to improve accessibility through speech recognition and AI-powered responses.",
    stack: [
      "Python",
      "Speech Recognition",
      "OpenAI",
      "FastAPI"
    ],
    githubUrl: "https://github.com/Utsav07-hub/VOICEAID-ai-voice-based-assistant-for-rural-users",
  },

  {
    title: "Image Captioning using CNN–RNN Fusion",
    category: "Deep Learning",
    description:
      "A deep learning model that automatically generates descriptive captions for images using CNN-based feature extraction and an RNN decoder for sequence generation.",
    stack: [
      "Python",
      "TensorFlow",
      "CNN",
      "RNN",
      "NumPy"
    ],
    githubUrl: "https://github.com/Utsav07-hub/Image-Captioning-CNN-RNN-Fusion",
  },

  {
    title: "Unsupervised Anomaly Detection using ResNet50",
    category: "Computer Vision",
    description:
      "An industrial anomaly detection system leveraging ResNet50 feature extraction and unsupervised learning techniques to identify defects in the MVTec AD dataset.",
    stack: [
      "Python",
      "PyTorch",
      "ResNet50",
      "OpenCV",
      "Computer Vision"
    ],
    githubUrl: "https://github.com/Utsav07-hub/Unsupervised_Anomaly_Detection_Using_ResNet50-project",
  },
];
