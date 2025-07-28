pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('gitlab_anhlhq')
        BRANCH_NAME = "${GIT_BRANCH.split('/')[1]}"
        API_ROLLOUT_RESTART_DEPLOYMENT = "https://07d0718af06a4eafbfb82d5527054f39.test.eidas.vn/e064041634444c11b692f7eea5bd3aab/kubectl/rollout-restart"
		X_API_KEY = "M563FmZH83e4tkDhu4XmwvJCtnYq9rVsdzBesvpPt4aeLjegt84rwPdnSc6YzBvP"
		K8S_NAMESPACE = "dev-pila"
		K8S_DEPLOYMENT = "pila-web-staging"
        IMAGE_NAME="registry.gitlab.com/lehuyco/pila"
		IMAGE_NAME_TAG="${IMAGE_NAME}:dev-pila-web-${BRANCH_NAME}"
    }
    stages {
        stage('Prepare') {
            steps {
                echo "BRANCH_NAME: $BRANCH_NAME"
                script {
                    env.BUILD_RESULT = ''
                    env.GIT_COMMIT_MSG = "${sh(script: 'git log -1 --pretty=%B ${GIT_COMMIT}', returnStdout: true).trim()}"
                }
            }
        }
        stage('Build and push') {
            steps {
                script {
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login registry.gitlab.com -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                    sh 'docker buildx build --no-cache --push -f Dockerfile --build-arg="STAGE=${BRANCH_NAME}" --build-arg="GIT_COMMIT=${GIT_COMMIT}" -t ${IMAGE_NAME_TAG} .'
                }
            }
        }
        stage('Deploy') {
			steps {
				script {
					def json = """
					{
						"deployment": "${K8S_DEPLOYMENT}",
						"namespace": "${K8S_NAMESPACE}"
					}
					"""
					sh "curl --location '${API_ROLLOUT_RESTART_DEPLOYMENT}' \
						--header 'x-api-key: ${X_API_KEY}' \
						--header 'Content-Type: application/json' \
						--data '${json}'"
				}
			}
		}
    }
    post {
        failure {
            sh "$NOTIFY_BUILD_FAILED"
        }
        success {
            sh "$NOTIFY_LARK_SUCCEED"
        }
    }
}
