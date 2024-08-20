node {
    def DOCKER_IMAGE
    def DOCKER_TAG
    stage('Checkout') {
        echo 'Checking out source code'
        checkout scm
    }
    stage('Build Test') {
        
        // echo "${env.dockerRegistry}"
        // DOCKER_TAG = "${env.dockerRegistry}"
        // DOCKER_TAG = DOCKER_TAG.replace("http://","").replace("https://", "")
        // DOCKER_IMAGE = "${DOCKER_TAG}/bpm-core-web-template"

        // docker.withRegistry("${env.dockerRegistry}", 'docker') {
        //     /* It is possible to pass other arguments to docker build by adding them
        //      * to the second argument of the build() method. When passing arguments this way,
        //      * the last value in the string must be the path to the docker file, 
        //      * and should end with the folder to use as the build context.
        //      */
        //     def dockerImage = docker.build(
        //         DOCKER_IMAGE
        //         )
        //     // dockerImage.push()
        // }
        
    }
    stage('Test') {
        echo 'Testing'
        /*
        docker.image(DOCKER_IMAGE).inside {
            sh 'set +e'
            sh 'npm run test'
        }
        */
        DOCKER_IMAGE = 'bpm-core-web-template'
        sh "docker container stop ${DOCKER_IMAGE}-test || true"
        sh "docker container rm ${DOCKER_IMAGE}-test || true"
        sh "docker build -t ${DOCKER_IMAGE} -f Dockerfile.test ."
        sh "docker run -d --name ${DOCKER_IMAGE}-test ${DOCKER_IMAGE}"
        sh "docker exec ${DOCKER_IMAGE}-test npm run test || true"
        sh "docker cp ${DOCKER_IMAGE}-test:/src/junit.xml ."
        sh "docker stop ${DOCKER_IMAGE}-test"
        sh "docker container rm ${DOCKER_IMAGE}-test"

        // sh "docker build -t ${DOCKER_IMAGE} --progress=plain --no-cache --target test -o type=local,dest=./results -f Dockerfile.test ."
        //sh 'ls'
    }
    stage('Test Results') {
        junit 'junit.xml'
    }
    stage('Deploy') {
        echo 'Deploying'
    }
}