pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = 'sonjiseokk/sarr-front'
        DOCKER_HUB_CREDENTIALS_ID = 'dockerhub2'
        NETWORK_NAME = 'my-network'
        GITLAB_CREDENTIALS_ID = 'gitlab' // GitLab 인증 정보 ID
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def app = docker.build("${DOCKER_HUB_REPO}:${env.BUILD_NUMBER}", ".")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_HUB_CREDENTIALS_ID}") {
                        def app = docker.image("${DOCKER_HUB_REPO}:${env.BUILD_NUMBER}")
                        app.push()
                    }
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                sshPublisher(publishers: [
                    sshPublisherDesc(
                        configName: 'ubuntu', // Jenkins SSH 서버 설정 이름
                        transfers: [
                            sshTransfer(
                                sourceFiles: '', // 파일 전송이 필요 없으므로 빈 문자열
                                execCommand: """
                                    docker pull ${DOCKER_HUB_REPO}:${env.BUILD_NUMBER}
                                    docker stop front || true
                                    docker rm front || true
                                    docker ps --filter "publish=3000" --format "{{.ID}}" | xargs -r docker stop
                                    docker ps --filter "publish=3000" --format "{{.ID}}" | xargs -r docker rm
                                    docker run -d --name front --network ${NETWORK_NAME} -p 3000:80 ${DOCKER_HUB_REPO}:${env.BUILD_NUMBER}
                                """,
                                remoteDirectory: '/home/ubuntu', // 원격 디렉토리
                                removePrefix: ''
                            )
                        ],
                        usePromotionTimestamp: false,
                        useWorkspaceInPromotion: false,
                        verbose: true
                    )
                ])
            }
        }

        // stage('Push to GitLab Main') {
        //     steps {
        //         withCredentials([usernamePassword(credentialsId: "${GITLAB_CREDENTIALS_ID}", passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
        //             sh '''
        //                 git config --global user.email "thswltjr11@gmail.com"
        //                 git config --global user.name "sonjiseokk"
        //                 git remote set-url origin https://${GIT_USERNAME}:${GIT_PASSWORD}@lab.ssafy.com/s11-webmobile1-sub2/S11P12C209.git
        //                 git checkout main
        //                 git add .
        //                 git commit -m "Automated commit"
        //                 git push --force origin main
        //             '''
        //         }
        //     }
        // }
    }

    post {
        always {
            cleanWs()
        }
    }
}
