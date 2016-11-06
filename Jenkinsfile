 node {
    stage('Build and Test') {
        sh './gradlew build'
    }
    //stage('SonarQube analysis') {
        // requires SonarQube Scanner 2.8+
        //def scannerHome = tool 'SonarQube Scanner 2.8';
        //withSonarQubeEnv('CWSFE_SONAR') {
        //            sh "${scannerHome}/bin/sonar-scanner"
        //}
        //withSonarQubeEnv('CWSFE_SONAR') {
            // requires SonarQube Scanner for Gradle 2.1+
          //  sh './gradlew sonarqube'
        //}
    //
    //}
    stage('Archive results') {
        archiveArtifacts artifacts: '**/build/libs/*.jar', fingerprint: true
        archiveArtifacts artifacts: '**/build/libs/*.war', fingerprint: true
    }
 }
