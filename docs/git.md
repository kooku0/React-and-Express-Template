<a name="git"></a>
# Git
![Git](/images/branching.png)
<a name="some-git-rules"></a>

## 1. Git 규칙
Git에는 명심해야할 규칙들이 있습니다.
* feature 브랜치(branch)에서 작업하세요.

    _이유:_
    > 이 방법을 사용하면 모든 작업은 메인 브랜치 대신에 격리된 별도의 브랜치에서 하게 됩니다. 이렇게 하면 혼란 없이 여러개의 풀 리퀘스트(Pull Request)를 제출할 수 있습니다. 또한 잠재적으로 불안정한, 완료되지 않은 코드로 마스터 브랜치를 오염시키지 않고, 작업을 반복할 수 있습니다. [더 알아보기](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow)

* `develop`에서 브랜치를 만드세요.

    _이유:_
    >이 방법을 사용하면, 마스터 브랜치의 코드를 항상 거의 문제없이 빌드할 수 있고, 릴리즈를 위해서 직접 사용할 수도 있습니다 (일부 프로젝트의 경우 과할 수도 있음).

* `develop`과 `master`에 직접 푸시하지 않고, 풀 리퀘스트를 만드세요.

    _이유:_
    > 풀 리퀘스트는 기능 구현을 완료한 것을 다른 팀 멤버들에게 알립니다. 또한 쉬운 코드 리뷰를 가능케 하며, 제안된 기능에 대해 토론할 수 있는 포럼을 제공합니다.

* 개발한 기능을 푸시하고 풀 리퀘스트를 만들기 전에, 로컬 `develop` 브랜치를 업데이트하고 인터랙티브한 리베이스(rebase)를 진행하세요.

    _이유:_
    > 리베이스는 요청한 브랜치(`master` 혹은 `develop`)을 병합(merge)합니다. 또한 병합 커밋을 만들지 않으면서 로컬에서 만든 커밋들을 적용합니다 (충돌이 없다고 가정한다면). 결국 깨끗한 히스토리를 남기게 됩니다. [더 알아보기](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

* 풀 리퀘스트를 만들기 전에 리베이스하는 동안 잠재적인 충돌을 제거하세요.
* 병합 후, 로컬과 원격에 있는 feature 브랜치를 삭제하세요.

    _이유:_
    > 이 방법은 더 이상 사용하지 않는 브랜치들로부터 브랜치 리스트를 정리할 것입니다. 또한, 브랜치가 `master` 또는 `develop`으로 병합되는 것을 단 한 번으로 보장합니다. feature 브랜치는 작업이 진행되고 있는 도중에만 존재해야 합니다.

* 풀 리퀘스트를 생성하기 전에, feature 브랜치는 잘 빌드되는지, 코드 스타일 체크를 포함한 모든 테스트를 통과하는 지 검증하세요.

    _이유:_
    > 안정적인 브랜치에 코드를 새로 푸시하려 할 때, 만약 feature 브랜치의 테스트가 실패한다면, 목표한 브랜치의 빌드도 실패할 가능성이 높습니다. 또한 풀 리퀘스트를 만들기 전에 코드 스타일 검사를 적용해야합니다. 이렇게 하면 가독성을 높이고, 코드에 실제 변경사항을 작성할 때 포맷을 수정하는 변경사항이 섞일 가능성을 낮춥니다.

* 이 [.gitignore file](./.gitignore)을 사용하세요.

    _이유:_
    > 이 파일에는 이미 원격 저장소에 코드와 함께 보내면 안되는 시스템 파일 목록이 있습니다. 또한 이 파일은 가장 많이 사용되는 에디터와 대부분의 공통 의존성 폴더에 대한 폴더 및 파일 설정을 포함하고 있습니다.

* `develop`과 `master` 브랜치를 보호하세요.

    _이유:_
    > 이 방법은 예측하지 못한, 돌이킬 수 없는 변경으로부터 production-ready 브랜치들을 보호합니다. 더 알아보기: [Github](https://help.github.com/articles/about-protected-branches/), [Bitbucket](https://confluence.atlassian.com/bitbucketserver/using-branch-permissions-776639807.html)

<a name="git-workflow"></a>
## 2. Git 워크플로우
상기한 이유들 때문에, 우리는 [인터랙티브 리베이스](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing), 그리고 [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow)의 몇가지 요소(브랜치 네이밍과 develop 브랜치의 보유)와 함께 [Feature 브랜치 워크플로우](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow)를 사용해야 합니다. 주요 단계는 다음과 같습니다.

* 새로운 프로젝트의 경우, 프로젝트 디렉토리에 Git 레포지토리를 초기화하세요. __유지보수 작업의 경우 이 단계는 무시하세요__.
   ```sh
   cd <project directory>
   git init
   ```

* 새로운 feature/bug-fix 브랜치를 체크아웃하세요.
    ```sh
    git checkout -b <branchname>
    ```
* 변경사항을 작성하세요.
    ```sh
    git add
    git commit -a
    ```
    _이유:_
    > `git commit -a`는 제목과 본문을 분리시킨 상태로 에디터를 엽니다. *섹션 1.3*에서 자세히 알아보세요.

* 놓친 변경사항을 받기 위해 원격 저장소와 동기화하세요.
    ```sh
    git checkout develop
    git pull
    ```

    _이유:_
    > 이렇게 하면 충돌(conflict)을 포함하는 풀 리퀘스트를 만드는 대신에, 당신의 컴퓨터에서 리베이스함으로써 충돌을 처리할 수 있습니다.

* 인터랙티브한 리베이스를 통해 develop 브랜치의 마지막 변경사항을 feature 브랜치로 업데이트 하세요.
    ```sh
    git checkout <branchname>
    git rebase -i --autosquash develop
    ```

    _이유:_
    > --autosquash를 사용해서 모든 커밋을 하나의 커밋으로 밀어 넣을 수도 있습니다. develop 브랜치에서 하나의 기능을 위한 많은 커밋들은 아무도 원하지 않기 때문이죠. [더 알아보기](https://robots.thoughtbot.com/autosquashing-git-commits)

* 만약 충돌이 발생하지 않았다면 이 단계를 건너뛰어도 좋습니다. 충돌이 발생했다면, [그것을 해결(resolve)하고](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/) 리베이스를 계속하세요.
    ```sh
    git add <file1> <file2> ...
    git rebase --continue
    ```
* 브랜치를 푸시하세요. 리베이스는 이력을 변경시킵니다. 따라서 당신은 `-f`를 사용해서 원격 브랜치로 강제 변경해야합니다. 만약 다른 누군가가 당신의 브랜치에서 작업하고 있다면, 조금 덜 파괴적인 `--force-with-lease`를 사용하세요.
    ```sh
    git push -f
    ```

    _이유:_
    > 리베이스 할 때, 당신은 feature 브랜치의 이력을 변경하고 있는 겁니다. 그 결과, Git은 일반적인 `git push`를 거부합니다. 대신, 당신은 -f 혹은 --force 플래그를 사용할 필요가 있습니다. [더 알아보기](https://developer.atlassian.com/blog/2015/04/force-with-lease/)

* 풀 리퀘스트를 만드세요.
* 풀 리퀘스트는 리뷰어에 의해 수용되고, 병합되고 종료될 것 입니다.
* 모든 작업이 끝났다면 당신의 로컬 feature 브랜치는 지우세요.

  ```sh
  git branch -d <branchname>
  ```
  원격 저장소에 존재하지 않는 모든 브랜치를 제거하기 위해서는 다음과 같이 하면 됩니다.
  ```sh
  git fetch -p && for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
  ```

<a name="writing-good-commit-messages"></a>
### e. 좋은 커밋 메시지 작성하기

커밋을 작성하는 좋은 가이드라인을 가지고 있으면 Git으로 작업하거나 다른 사람들과 협업하는 것이 상당히 쉬워집니다. 다음은 그 규칙들입니다. ([출처](https://kooku.netlify.com/etc/%EB%82%98%EB%A7%8C%EC%9D%98-commit-message-%EC%9E%91%EC%84%B1%EB%B2%95/))

### 공통 규칙

1. **유형**은 **영어 or emoji**로, **제목**은 **한글**로 작성한다.
2. **메시지 본문**에 모든 **변경 사항을 상세히 작성**한다.

### 커밋 메시지 구성

모든 커밋 메시지는 다음과 같이 **세 영역으로 구성**되며, 각 영영은 **빈 줄로 분리**된다.

* 제목 줄
* 본문 (제목 만으로 표현이 가능할 때에는 생략 가능)
* 꼬리말 (관련 이슈가 없으면 생략 가능)

```
유형: 제목

본문

꼬리말
```

### 유형

유형들이 복합적으로 포함되어 있을 경우, 되도록 커밋을 분리한다. 분리가 어려운 경우 위 순서상 상위 항목의 유형으로 작성한다. (eg. 기능과 테스트가 모두 포함된 경우 기능으로 작성)

- **feat**: 기능 추가, 삭제, 변경(or ✨ emoji) - 제품 코드 수정 발생
- **fix**: 버그 수정(or 🚑 emoji) - 제품 코드 수정 발생
- **docs**: 문서 추가, 삭제, 변경(or 📚 emoji) - 코드 수정 없음
- **style**: 코드 형식, 정렬, 주석 등의 변경, eg; 세미콜론 추가(or 🎨 emoji) - 제품 코드 수정 발생, 하지만 동작에 영향을 주는 변경은 없음
- **refactor**: 코드 리펙토링, eg. renaming a variable(or 🚜 emoji) - 제품코드 수정 발생
- **test**: 테스트 코드 추가, 삭제, 변경 등(or 🔬 emoji) - 제품 코드 수정 없음. 테스트 코드에 관련된 모든 변경에 해당
- **etc**: 위에 해당하지 않는 모든 변경, eg. 빌드 스크립트 수정, 패키지 배포 설정 변경 - 코드 수정 없음

### 제목

1. 제목 줄은 **50자 내로 작성**한다.

2. 제목은 **개조식 구문으로 작성**한다.
3. 제목 줄은 **"유형: 제목"** 의 형식으로 작성한다.
4. 제목 뒤에 특수문자는 삽입하지 않습니다. 예) . ? !

예) "feat: 로그 기능 출력 기능 추가"

> **개조식 구문**
>
> 완전한 서술형으로 문장을 종결하는 것이 아니라 간결하고 요점적인 단어로 서술되는 문장형태로서, 내용을 길게 풀어서 표현하지 않고 중요하고 핵심적인 요소만 간추려 항목별로 나열하듯이 표현하는 방식
>
> \- *국립국어원*  \-

### 본문

1. 본문은 **한 줄 당 72자 내**로 작성한다.
2. 본문 내용은 양에 구애받지 않고 **최대한 상세히 작성**한다.
3. 본문 내용은 어떻게 변경했는지 보다 **무엇을 변경했는지** 또는 **왜 변경했는지**를 설명한다.

### 꼬리말

1. 꼬리말은 optional이고 **이슈 트래커 ID**를 작성한다.
2. 꼬리말은 **"유형: #이슈번호"** 형식으로 사용한다.
3. 여러개의 이슈번호를 적을때는 쉼표로 구분합니다.
4. 이슈 트래커 유형은 다음 중 하나를 사용한다.
   * **Fixes**: 이슈 수정중 (아직 해결되지 않은 경우)
   * **Resolves**: 이슈를 해결했을 때 사용
   * **Ref**: 참고할 이슈가 있을 때 사용
   * **Related to**: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)

예) `Fixes: #45` `Reloated to: #34, #23`

### 예시

```
feat: 패킷 송신 이벤트에 관련된 로그 출력 기능 추가

커밋에 대한 자세한 설명..

Resolves: #123
Ref: #456
Related to: #48, #45
```

### 커밋 메시지 작성시 사용할만한 Emoji

| Emoji | Raw Emoji Code     | Description                                                                                              |
| ----- | ------------------ | -------------------------------------------------------------------------------------------------------- |
| 🎨    | `:art:`            | 코드의 **형식** / 구조를 개선 할 때                                                                                  |
| 📰    | `:newspaper:`      | **새 파일을** 만들 때                                                                                           |
| 📝    | `:pencil:`         | **사소한 코드 또는 언어**를 변경할 때                                                                                  |
| 🐎    | `:racehorse:`      | **성능을** 향상시킬 때                                                                                           |
| 📚    | `:books:`          | **문서를** 쓸 때                                                                                              |
| 🐛    | `:bug:`            | **버그** reporting할 때, [`@FIXME`](https://github.com/slashsbin/styleguide-todo-grammar#bug-report)주석 태그 삽입 |
| 🚑    | `:ambulance:`      | **버그를** 고칠 때                                                                                             |
| 🐧    | `:penguin:`        | **리눅스에서** 무언가를 고칠 때                                                                                      |
| 🍎    | `:apple:`          | **Mac OS에서** 무언가를 고칠 때                                                                                   |
| 🏁    | `:checkered_flag:` | **Windows에서** 무언가를 고칠 때                                                                                  |
| 🔥    | `:fire:`           | **코드 또는 파일 제거**할 때 , `@CHANGED`주석 태그와 함께                                                                 |
| 🚜    | `:tractor:`        | **파일 구조를 변경할** 때 . 🎨과 함께 사용                                                                             |
| 🔨    | `:hammer:`         | 코드를 **리팩토링** 할 때                                                                                         |
| ☔️    | `:umbrella:`       | **테스트를** 추가 할 때                                                                                          |
| 🔬    | `:microscope:`     | **코드 범위를** 추가 할 때                                                                                        |
| 💚    | `:green_heart:`    | **CI** 빌드를 고칠 때                                                                                          |
| 🔒    | `:lock:`           | **보안을** 다룰 때                                                                                             |
| ⬆️    | `:arrow_up:`       | **종속성을** 업그레이드 할 때                                                                                       |
| ⬇️    | `:arrow_down:`     | **종속성을** 다운 그레이드 할 때                                                                                     |
| ⏩     | `:fast_forward:`   | 이전 버전 / 지점에서 **기능**을 **전달할** 때                                                                           |
| ⏪     | `:rewind:`         | 최신 버전 / 지점에서 **기능**을 **백 포트** 할 때                                                                        |
| 👕    | `:shirt:`          | **linter** / strict / deprecation 경고를 제거 할 때                                                             |
| 💄    | `:lipstick:`       | **UI** / style 개선시                                                                                       |
| ♿️    | `:wheelchair:`     | **접근성을** 향상시킬 때                                                                                          |
| 🚧    | `:construction:`   | **WIP** (진행중인 작업)에 커밋, `@REVIEW`주석 태그와 함께 사용                                                             |
| 💎    | `:gem:`            | New **Release**                                                                                          |
| 🔖    | `:bookmark:`       | 버전 **태그**                                                                                                |
| 🎉    | `:tada:`           | **Initial** Commit                                                                                       |
| 🔈    | `:speaker:`        | **로깅을** 추가 할 때                                                                                           |
| 🔇    | `:mute:`           | **로깅을** 줄일 때                                                                                             |
| ✨     | `:sparkles:`       | **새로운** 기능을 소개 할 때                                                                                       |
| ⚡️    | `:zap:`            | 도입 할 때 **이전 버전과 호환되지 않는** 특징, `@CHANGED`주석 태그 사용                                                         |
| 💡    | `:bulb:`           | 새로운 **아이디어**, `@IDEA`주석 태그                                                                               |
| 🚀    | `:rocket:`         | 배포 / **개발 작업** 과 관련된 모든 것                                                                                |
| 🐘    | `:elephant:`       | **PostgreSQL** 데이터베이스 별 (마이그레이션, 스크립트, 확장 등)                                                             |
| 🐬    | `:dolphin:`        | **MySQL** 데이터베이스 특정 (마이그레이션, 스크립트, 확장 등)                                                                 |
| 🍃    | `:leaves:`         | **MongoDB** 데이터베이스 특정 (마이그레이션, 스크립트, 확장 등)                                                               |
| 🏦    | `:bank:`           | **일반 데이터베이스** 별 (마이그레이션, 스크립트, 확장명 등)                                                                    |
| 🐳    | `:whale:`          | **도커** 구성                                                                                                |
| 🤝    | `:handshake:`      | **파일을 병합** 할 때                                                                                           |