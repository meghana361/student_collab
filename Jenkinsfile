pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    BACKEND_IMAGE = "meghana361/student-backend"
    FRONTEND_IMAGE = "meghana361/student-frontend"
  }

  stages {

    stage('Clone Repository') {
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
          sh '''
          docker build \
            --build-arg VITE_API_URL=/ \
            -t $FRONTEND_IMAGE:latest .
          '''
        }
      }
    }

    stage('Docker Login') {
      steps {
        sh '''
        echo $DOCKERHUB_CREDENTIALS_PSW | docker login \
        -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
        '''
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

    stage('Deploy to Kubernetes') {
      steps {
        sh '''
        kubectl apply -f k8s/
        kubectl rollout restart deployment backend-deployment
        kubectl rollout restart deployment frontend-deployment
        '''
      }
    }
  }

  post {
    success {
      echo "🎉 CI/CD Pipeline Successful!"
    }
    failure {
      echo "❌ CI/CD Pipeline Failed!"
    }
  }
}
