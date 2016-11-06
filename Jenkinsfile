 node {
    stage 'Build and Test' {
        sh './gradlew build'
    }
    stage('SonarQube analysis') {
        // requires SonarQube Scanner 2.8+
        def scannerHome = tool 'SonarQube Scanner 2.8';
        withSonarQubeEnv('CWSFE_SONAR') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }
 }
