### Jenkins Pipeline Parameters
---

- 파이프라인을 실행시키는 주체가 매개변수를 전달할 때 사용할 수 있다.
- 전달 받은 매개변수는 파이프라인 실행 단계에서 사용할 수 있다.
- 동일 파이프라인으로 매개변수에 따라 다른 동작을 할 수 있는 장점이 있다.
  - ex) java -jar -Dspring.profiles.active=[$PROFILE] [jar 파일]

- [parameterized-scheduler]( https://plugins.jenkins.io/parameterized-scheduler/)
  - 젠킨스 cron을 사용할 때 특정 시간대 별로 parameter들을 변경하여 파이프라인을 실행시킬 수 있다.

> https://www.jenkins.io/doc/book/pipeline/syntax/#parameters
### Jenkins Pipeline Environment
---