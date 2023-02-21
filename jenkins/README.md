# jenkins

- [jenkins-docker-hub](https://hub.docker.com/r/jenkins/jenkins)
- [jenkins-docker-github](https://github.com/jenkinsci/docker)


- jenkins를 활용해 스케쥴링 가능
  - Project > Configure > Build Triggers (빌드 유발)
    - Build periodically -> cron job <- 코드의 변경사항이 없어도 빌드 진행
    - Poll SCM <- 커밋된 내용이 있어야 작업 진행


[Infrastructure as Code란?](https://devops-art-factory.gitbook.io/devops-workshop/terraform/iac)

docker run --privileged --name docker-server -itd -p 10022:22 -p 8081:22 -e container=docker -v /sys/fs/cgroup:/sys/fs/cgroup:rw --cgroupns=host edowon0623/docker-server:m1 /usr/sbin/init


docker run --privileged -itd --name ansible-server -p 20022:22 -p 8081:8080 -e container=docker -v /sys/fs/cgroup:/sys/fs/cgroup --cgroupns=host edowon0623/ansible-server:m1 /usr/sbin/init

docker run --privileged --name docker-server -itd -p 10022:22 -e container=docker -v /sys/fs/cgroup:/sys/fs/cgroup:rw --cgroupns=host edowon0623/docker-server:m1 /usr/sbin/init

ansible-server: 172.17.0.2
docker-server: 172.17.0.3

## ssh 패스워드 입력 없이 접속 가능
ssh-keygen
ssh-copy-id



ansible 특징
- 여러 서버 에이전트들을 연동 시켜 전체 또는 그룹 서버들 대상으로 명렁어를 실행시켜 줄 수 있다.
멱등성
- 같은 설정을 여러 번 적용하더라도 결과가 달라지지 않는다.
  - ex) copy text.txt 라는 명령어 실행한 이후 copy text.txt를 다시 실행하면 이미 실행 완료된 명령어 이기 때문에 실행되지 않는다.
- ansible playbook
  - ansible 명령어를 실행시킬 수 있는 파일
  - 멱등성 때문에 동일한 설정 파일을 실행할 시 변경되는 내용은 없다.
  - 여러 ansible 모듈들의 명령어를 모아 둘 수 있다.



FROM openjdk:11

COPY ci-cd-jenkins-code-0.0.1-SNAPSHOT.jar ci-cd-jenkins-code-0.0.1-SNAPSHOT.jar

CMD ["java", "-jar", "ci-cd-jenkins-code-0.0.1-SNAPSHOT.jar"]


Jenkins 에서 ansible 명령어 실행
ansible의 에이전트들에게 전달


- hosts: all
#   become: true  
  tasks:
  - name: create a docker image with deployed jar file
    command: docker build -t tedgom19/spring-server .
    args: 
        chdir: /root

  - name: push the image on Docker hub
    command: docker push tedgom19/spring-server
    
  - name: remove the docker image from the ansible server
    command: docker rmi tedgom19/spring-server
    ignore_errors: yes
  - name: stop current running container
    command: docker stop my_cicd_project
    ignore_errors: yes
  - name: remove stopped cotainer
    command: docker rm my_cicd_project
    ignore_errors: yes
  - name: remove current docker image
    command: docker rmi cicd-project-ansible
    ignore_errors: yes

  - name: create a container using spring-server image
    command: docker run -d --name spring-server -p 8080:8080 spring-server