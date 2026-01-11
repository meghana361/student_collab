pipeline {
  agent any

  environment {
    BACKEND_IMAGE = "meghana361/student-backend"
    FRONTEND_IMAGE = "meghana361/student-frontend"
  }

  stages {

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
            --build-arg VITE_API_URL=http://backend-service:5000 \
            -t $FRONTEND_IMAGE:latest .
          '''
        }
      }
    }

    stage('Docker Login') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
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

    stage('Deploy to Kubernetes') {
      steps {
        sh '''
          kubectl apply -f k8s/
          kubectl rollout restart deployment backend-deployment || true
          kubectl rollout restart deployment frontend-deployment || true
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
