---
emoji: 📔
title: '[Java 기초] 절차지향 프로그래밍과 객체지향 프로그래밍'
date: '2023-05-15 03:00:00'
author: 이서연
tag: Java
categories: Java
---

### 1. 절차지향 vs 절차지향

**절차지향**

- 실행 순서를 중요하게 생각하는 방식
- 프로그램의 흐름을 순차적으로 따르며 처리하는 방식, 즉 ‘어떻게’를 중심으로 프로그래밍함

**객체지향**

- 객체를 중요하게 생각하는 방식
- 실제 세계의 사물이나 사건을 객체로 보고, 이러한 객체들 간의 상호작용을 중심으로 프로그래밍하는 방식

**중요한 차이점**

- 절차지향은 데이터와 해당 데이터에 대한 처리 방식이 분리되어 있다.
- 객체지향에서는 데이터와 그 데이터에 대한 행동(메서드)이 하나의 객체 안에 함께 포함되어 있다

### 2. 절차지향으로 음악 플레이어 만들기

```java
public class MusicPlayerMain1 {
	 public static void main(String[] args) {
	 int volume = 0;
	 boolean isOn = false;
	 //음악 플레이어 켜기
	 isOn = true;
	 System.out.println("음악 플레이어를 시작합니다");
	 //볼륨 증가
	 volume++;
	 System.out.println("음악 플레이어 볼륨:" + volume);
	 //볼륨 증가
	 volume++;
	 System.out.println("음악 플레이어 볼륨:" + volume);
	 //볼륨 감소
	 volume--;
	 System.out.println("음악 플레이어 볼륨:" + volume);
	 //음악 플레이어 상태
	System.out.println("음악 플레이어 상태 확인");
	 if (isOn) {
	   System.out.println("음악 플레이어 ON, 볼륨:" + volume);
	 } 
		else {
		 System.out.println("음악 플레이어 OFF");
		}
	 //음악 플레이어 끄기
	 isOn = false;
	 System.out.println("음악 플레이어를 종료합니다");
	 }
}
```

**데이터를 묶어보기**

음악 플레이어와 관련된 데이터를 `MusicPlayerData`라는 클래스로 묶는다.

음악 플레이어와 관련된 변수들은 해당 클래스 객ㄹ체에 속해있으므로 쉽게 구분할 수 있다.

```java
 public class MusicPlayerData {
	 int volume = 0;
	 boolean isOn = false;
 }
```

```java
MusicPlayerData data = new MusicPlayerData();
//음악 플레이어 켜기
data.isOn = true;
System.out.println("음악 플레이어를 시작합니다");
//볼륨 증가
data.volume++;
System.out.println("음악 플레이어 볼륨:" + data.volume);
//볼륨 증가
data.volume++;
System.out.println("음악 플레이어 볼륨:" + data.volume);
//볼륨 감소
data.volume--;
System.out.println("음악 플레이어 볼륨:" + data.volume);
//음악 플레이어 상태
System.out.println("음악 플레이어 상태 확인");
if (data.isOn) {
  System.out.println("음악 플레이어 ON, 볼륨:" + data.volume);
} 
else {
	System.out.println("음악 플레이어 OFF");
}
//음악 플레이어 끄기
data.isOn = false;
System.out.println("음악 플레이어를 종료합니다");
```

**메서드 추출하기**

- 중복되는 부분, 재사용될 가능성이 있는 부분이 있다
- 음악 플레이어 켜기, 끄기
- 볼륨 증가, 감소
- 음악 플레이어 상태 출력

```java
public static void main(String[] args) {
 MusicPlayerData data = new MusicPlayerData();
 //음악 플레이어 켜기
  on(data);
 //볼륨 증가
  volumeUp(data);
 //볼륨 증가
  volumeUp(data);
 //볼륨 감소
  volumeDown(data);
 //음악 플레이어 상태
  showStatus(data);
 //음악 플레이어 끄기
  off(data);
}
    
static void on(MusicPlayerData data) {
	 data.isOn = true;
	 System.out.println("음악 플레이어를 시작합니다");
}

static void off(MusicPlayerData data) {
 data.isOn = false;
 System.out.println("음악 플레이어를 종료합니다");
}
    
static void volumeUp(MusicPlayerData data) {
 data.volume++;
 System.out.println("음악 플레이어 볼륨:" + data.volume);
}
static void volumeDown(MusicPlayerData data) {
 data.volume--;
 System.out.println("음악 플레이어 볼륨:" + data.volume);
}

static void showStatus(MusicPlayerData data) {
 System.out.println("음악 플레이어 상태 확인");
 if (data.isOn) {
	 System.out.println("음악 플레이어 ON, 볼륨:" + data.volume);
 } 
}
```

각각의 기능을 메서드로 만든 덕분에 각각의 기능이 모듈화되었다. 덕분에 다음과 같은 장점이 생겼다.

- 중복제거: 같은 로직이 필요하면 해당 메서드를 호출하면 된다
- 변경 영향 범위: 기능을 수정할 때 메서드를 수정하면 된다
- 메서드 이름 추가: 메서드 이름을 통해 코드를 더 쉽게 이해할 수 있다

**절차 지향 프로그래밍의 한계**

위의 코드의 한계는 데이터와 기능이 분리되어 있다는 점이다. 음악 플레이어의 데이터는 `MusicPlayerData`에 있는데, 그 데이터를 사용하는 기능은 Main에 있는 각각의 메서드에 분리되어 있다. 그래서 음악 플레이어와 관련된 데이터는 `MusicPlayerData` 를 사용해야 한느데, 음악 플레이어와 관련된 기능은 mani의 각 메서드를 사용해야 한다.

즉, `MusicPlayerData` 의 데이터를 변경하면, 데이터를 사용하는 메서드도 같이 수정해야 한다. 이렇게 데이터와 기능이 분리되어 있으면 유지보수 관점엥서도 관리 포인트가 2곳으로 늘어난다.

객체지향을 도입하면, 데이터와 기능을 온전히 하나로 묶어서 사용할 수 있다.

### 3. 객체 지향은 메서드를 포함할 수 있다

자바 같은 객체 지향 언어는 클래스 내부에 속성(데이터)과 기능(메서드)을 함께 포함할 수 있다. 객체는 자신의 메서드를 통해 자신의 멤버 변수에 접근할 수 있다. 따라서 객체의 메서드 내부에서 접근하는 멤버 변수는 객체 자신의 멤버변수다.

```java
 public class ValueObject {
	 int value;
	 void add() {
		 value++;
		 System.out.println("숫자 증가 value=" + value);
	 }
 }
```

```java
ValueObject valueObject = new ValueObject();
valueObject.add();
valueObject.add();
valueObject.add();
System.out.println("최종 숫자=" + valueObject.value);
```

*참고: 메서드는 객체를 생성해야 호출할 수 있다. 그런데 static 메서드를 함께 정의했다. static이 붙으면 객체를 생성하지 않고도 메서드를 호출할 수 있다.

 

### 4. 객체지향으로 음악 플레이어 만들기

이제 데이터와 기능을 하나로 묶어 음악 플레이어라는 개념을 하나의 클래스에 담는다.

음악 플레이어가 어떤 속성(데이터)를 가지고 어떤 기능(메서드)를 제공하는지 초점에 맞춘다. 그리고 음악 플레어어를 만들어서 제공하는 개발자와 음악 플레이어를 사용하는 개발자가 분리되어 있다고 생각한다.

음악 플레이어

- 속성: volume, isOn
- 기능: `on()`, `off()`, `volumeUp()`, `volumeDown()`, `showStatus()`

```java
 public class MusicPlayer {
    int volume = 0;
    boolean isOn = false;
    
    void on() {
        isOn = true;
        System.out.println("음악 플레이어를 시작합니다");
    }
    
    void off() {
        isOn = false;
        System.out.println("음악 플레이어를 종료합니다");
    }
    
    void volumeUp() {
        volume++;
        System.out.println("음악 플레이어 볼륨:" + volume);
    }
    
    void volumeDown() {
        volume--;
        System.out.println("음악 플레이어 볼륨:" + volume);
    }
    
    void showStatus() {
        System.out.println("음악 플레이어 상태 확인");
        if (isOn) {
            System.out.println("음악 플레이어 ON, 볼륨:" + volume);
        } else {
        }
			  System.out.println("음악 플레이어 OFF");
    }
 }
```

음악 플레이어가 어떻게 구현되어 있는지는 모르지만, 음악 플레이어를 사용하는 입장에서는 메서드만 호출하기만 하면 기능을 사용할 수 있다.

```java
MusicPlayer player = new MusicPlayer();
//음악 플레이어 켜기
player.on();
//볼륨 증가
player.volumeUp();
//볼륨 증가
player.volumeUp();
//볼륨 감소
player.volumeDown();
//음악 플레이어 상태
player.showStatus();
//음악 플레이어 끄기
player.off();
```

**캡슐화**

MusicPlayer를 보면 음악 플레이어를 구성하기 위한 속성과 기능이  마치 하나의 캡슐에 쌓여있는 것 같다. 이렇게 속성과 기능을 하나로 묶어서 필요한 기능을 메서드를 통해 외부에 제공하는 것을 **캡슐화**라 한다.

이렇게 만들면, **코드가 더 읽기 쉬워지고, 속성과 기능이 한 곳에 있기 때문에 변경도 쉬워진다.** 필드 이름을 변경한다고 하면 내부 클래스에서만 변경하면 된다. (물론 외부에서 호출하는 메서드의 이름을 변경한다면 호출하는 곳의 코드도 변경해야 한다.)