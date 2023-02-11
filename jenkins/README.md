# jenkins

- [jenkins-docker-hub](https://hub.docker.com/r/jenkins/jenkins)
- [jenkins-docker-github](https://github.com/jenkinsci/docker)


- jenkins를 활용해 스케쥴링 가능
  - Project > Configure > Build Triggers (빌드 유발)
    - Build periodically -> cron job <- 코드의 변경사항이 없어도 빌드 진행
    - Poll SCM <- 커밋된 내용이 있어야 작업 진행