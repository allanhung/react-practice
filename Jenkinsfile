pipeline {
  agent {
    dockerfile {
      filename 'deploy/Dockerfile'
      args '-u 0'
    }

  }
  stages {
    stage('Deploy for production') {
      when {
        branch 'prod'
      }
      steps {
        sh 'tar -zcf /tmp/asme-frontend.tar.gz *'
        sh 'mv /tmp/asme-frontend.tar.gz deploy/roles/vtr/files/asme-frontend.tar.gz'         
        sh 'GITCOMMIT=`git rev-parse --short HEAD` && cd deploy && ansible-playbook -i inventory/hosts-prod vtr.yml --extra-vars "gitcommit=${GITCOMMIT}"'
      }
    }
    stage('Deploy for stage') {
      when {
        branch 'stage'
      }
      steps {
        sh 'tar -zcf /tmp/asme-frontend.tar.gz *'
        sh 'mv /tmp/asme-frontend.tar.gz deploy/roles/vtr/files/asme-frontend.tar.gz'         
        sh 'GITCOMMIT=`git rev-parse --short HEAD` && cd deploy && ansible-playbook -i inventory/hosts-stage vtr.yml --extra-vars "gitcommit=${GITCOMMIT}"'
      }
    }
  }
}
