pipeline {
  agent any

  environment {
    BACKEND_IMAGE = "meghana361/student-backend"
    FRONTEND_IMAGE = "meghana361/student-frontend"
  }

  stages {

    stage('Checkout Code') {
      steps {
        git branch: 'main',
            url: 'https://github.com/meghana361/student_collab.git'
      }
    }

    stage('Build Backend Image') {
      steps {
        dir('server') {
          sh 'docker build -t $BACKEND_IMAGE:latest .'
        }
      }
    }

    stage('Build Frontend Image') {
      steps {
        dir('client') {
          sh 'docker build -t $FRONTEND_IMAGE:latest .'
        }
      }
    }

    stage('Push Images') {
      steps {
        sh '''
          docker push $BACKEND_IMAGE:latest
          docker push $FRONTEND_IMAGE:latest
        '''
      }
    }
  }

  post {
    success {
      echo "✅ Docker images built and pushed successfully"
    }
    failure {
      echo "❌ Jenkins pipeline failed"
    }
  }
}
