# jenkins

- [jenkins-docker-hub](https://hub.docker.com/r/jenkins/jenkins)
- [jenkins-docker-github](https://github.com/jenkinsci/docker)


### jenkins docker
---

- docker pull

    ```bash 
    docker run -d -v jenkins_home:/var/jenkins_home -p 8088:8080 -p 50000:50000 --name=jenkins-server --restart=on-failure jenkins/jenkins:lts-jdk11
    ```

- docker exec
    ```bash
    docker exec -it jenkins-server bash
    ```

> [Jenkins(젠킨스) | Gradle, Jar 빌드&배포하기)](https://kitty-geno.tistory.com/91)