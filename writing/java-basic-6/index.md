---
emoji: 📔
title: '[Java 기초] 접근제어자 종류와 캡슐화'
date: '2023-05-22 06:00:00'
author: 이서연
tag: Java
categories: Java
---

## 1. 접근제어자가 필요한 이유

접근 제어자를 사용하면 해당 클래스 외부에서 특정 필드나 메서드에 접근하는 것을 허용하거나 제한할 수 있다. 접근제어자가 왜 필요한가?

스피커에 들어가는 소프트웨어 프로그램을 작성하며 알아보자. 이 스피커의 음량은 절대로 100을 넘으면 안된다.

스피커 객체 클래스

```java
public class Speaker {
	int volume;
	
	Speaker(int volume) {
		this.volume = volume;
	}
	
	void volumeUp() {
		if(volume >= 100) {
			System.out.println("음량을 증가할 수 없습니다. 최대 음량입니다.);
		} else {
			volume += 10;
			System.out.println("음량을 10 증가합니다.);
		}
	}
	
	void volumeDown() {
		volume -= 10;
		System.out.println("volumeDown 호출");
	}
	
	void showVolume() {
		System.out.println("현재 용량:" + volume);
	}
}
```

생성자를 통해 초기 음량 값을 지정할 수 있고, `volumeUp` 메서드를 통해 10씩 음량을 증가시킬 수 있다. 음량이 100을 넘게 되면 음량이 더이상 증가하지 않는다.

SpeakerMain

```java
Speaker speaker = new Speaker(90);
speaker.showVolume();
speaker.volumeUp();
speaker.showVolume();
speaker.volumeUp();
speaker.showVolume();
```

초기 음량 값을 90으로 지정했고, 기대한 대로 음량은 100 이상 넘지 않았다. 

그리고 오랜 시간이 지난 후, 기존의 요구사항을 모르는 새로운 개발자가 소리를 더 올리면 좋겠다고 생각하여 `Speaker` 클래스의 `volume` 필드를 직접 사용하여 `volume` 값을 200으로 설정하고 코드를 실행한 순간, 스피커 부품들에 과부하가 걸리면서 폭발했다.

```java
speaker.volume = 200;
speaker.showVolume();
```

현재 코드로는, `Speaker` 객체를 사용하는 사용자가 `volume` 필드와 메서드에 모두 접근할 수 있다. 그래서 `volumeUp` 메서드로 음량이 100이 넘지 못하도록 기능을 개발하였음에도 `volume` 필드에 직접 접근해서 원하는 값을 설정할 수 있으므로, 소용없다는 것을 알 수 있다.

이런 문제를 근본적으로 해결하기 위해서는 `volume` 필드의 외부 접근을 막을 수 있는 방법이 필요하다. 이것을 접근제어자로 해결하룻 있다.

## 2. 접근제어자 private

```java
public class Speaker {
	private int volume;
}
```

`private` 접근 제어자는 모든 외부 호출을 막는다. 

해당 클래스 내부에서만 호출할 수 있다. `volume` 에 private을 사용하여 `Speaker` 내부에 숨긴 셈이다. 이제 `Speaker` 내부에서만 `volume` 필드에 접근할 수 있다.

`Speaker` 클래스를 개발하는 개발자가 처음부터 `private` 을 사용해서 외부 접근을 막아두었다면, 새로운 개발자도 `volume` 필드에 직접 전근하지 않고 메서드를 통해 접근했을 것이다. 결과적으로 `Speaker` 가 폭발하는 문제는 발생하지 않았을 것이다.

### 3. 접근 제어자의 종류

- `private` : 모든 외부 호출을 막음
- `default` (package-private) : 같은 패키지 안에서 호출은 허용
- `protected` : 같은 패키지 안에서 호출은 허용. 패키지가 달라도 상속 관계의 호출은 허용
- `public` : 모든 외부 호출을 허용

`priavte -> default -> protected -> public` 순으로 가장 많이 차단하는 것에서 가장 많이 허용하는 것으로 정리할 수 있다.

### package-private

- 접근 제어자를 명시하지 않으면 `default` 접근 제어자가 적용됨
- 동일 패키지 내에서만 접근 가능하기 때문에, `package-private` 가 더 정확한 표현임

### 접근 제어자 사용 위치

- 필드, 메서드, 생성자, 클래스 레벨

```java
public class Speaker {   //클래스 레벨
	  private int volume;   //필드
	
	  public Speaker(int volume) {}   //생성자
	
	  public void volumeUp() {}   //메서드
	  public void volumeDown() {}
	  public void showVolume() {}
 }
```

접근 제어자의 핵심은 속성과 기능을 외부로부터 숨기는 것이다.

- private: 나의 클래스 안으로 속성과 기능을 숨길 때 사용
- default: 나의 패키지 안으로 속성과 기능을 숨길 때 사용
- protected: 상속 관계로 속성과 기능을 숨길 때 사용
- public: 기능을 숨기지 않음

## 4. 접근 제어자 사용-필드, 메서드

### 클래스 내에서 호출하기

```java
package access.a;

 public class AccessData {
		 public int publicField;
		 int defaultField;
		 private int privateField;
 
    public void publicMethod() {
		   System.out.println("publicMethod 호출 "+ publicField);
    }
	
		void defaultMethod() {
		    System.out.println("defaultMethod 호출 " + defaultField);
		}
		
		private void privateMethod() {
			  System.out.println("privateMethod 호출 " + privateField);
		}
		
		public void innerAccess() {
				System.out.println("내부 호출");
				publicField = 100;
				defaultField = 200;
				privateField = 300;
				publicMethod();
				defaultMethod();
				privateMethod();
		}
    
```

- `innerAccess()` 메서드에서 모든 메서드를 내부 호출했다. 내부 호출하는 경우 private을 포함한 모든 곳에서 접근 할 수 있다.

### 같은 패키지 내에서 호출하기

```java
package access.a;

 public class AccessInnerMain {
    public static void main(String[] args) {
		    AccessData data = new AccessData();
		    
		    //public 호출 가능
		    data.publicField = 1;
		    data.publicMethod();
		    
		    //같은 패키지 default 호출 가능
		    data.defaultField = 2;
		    data.defaultMethod();
		    
		    //private 호출 불가
		    //data.privateField = 3;
		    //data.privateMethod();
		    
				data.innerAccess();
	}
}
```

- `private` 외에 다른 메소드는 접근 가능하다

### 다른 패키지에서 호출하기

```java
package access.b;

 import access.a.AccessData;
 
 public class AccessInnerMain {
    public static void main(String[] args) {
		    AccessData data = new AccessData();
		    
		    //public 호출 가능
		    data.publicField = 1;
		    data.publicMethod();
		    
		    //같은 패키지 default 호출 불가
		    // data.defaultField = 2;
		    // data.defaultMethod();
		    
		    //private 호출 불가
		    //data.privateField = 3;
		    //data.privateMethod();
		    
				data.innerAccess();
	}
}
```

- `default` , `private` 접근제어자가 붙은 것은 접근할 수 없다.

## 5. 접근제어자-클래스 레벨

### 클래스 레벨의 접근 제어자 규칙

- 클래스 레벨의 접근 제어자는 `public` , `default` 만 사용할 수 있다
- `public` 클래스는 반드시 파일명과 이름이 같아야 한다
    - 하나의 자바 파일에 `public` 클래스는 하나만 등장 가능
    - 하나의 자바 파일에 `default` 클래스는 여러개 가능

```java
package access.a;

 public class PublicClass {
		 public static void main(String[] args) {
				 PublicClass publicClass = new PublicClass();
				 DefaultClass1 class1 = new DefaultClass1();
				 DefaultClass2 class2 = new DefaultClass2();
		}
}

class DefaultClass1 {
}

class DefaultClass2 {
}
```

### 같은 패키지 내에서 사용하기

```java
package access.a;

public class PublicClassInnerMain {
		public static void main(String[] args) {
				PublicClass publicClass = new PublicClass();
				DefaultClass1 class1 = new DefaultClass1();
				DefaultClass2 class2 = new DefaultClass2();
		}
}
```

- 같은 패키지 내이므로 모두 접근 가능하다.

### 다른 패키지에서 사용하기

```java
package access.b;

//import access.a.DefaultClass1;
import access.a.PublicClass;

public class PublicClassOuterMain {
		public static void main(String[] args) {
				PublicClass publicClass = new PublicClass();
				
				//다른 패키지 접근 불가
				//DefaultClass1 class1 = new DefaultClass1();
				//DefaultClass2 class2 = new DefaultClass2();
		}
}
```

- `default` 클래스는 접근할 수 없다.

## 6. 캡슐화

캡슐화(Encapsulation)는 데이터와 해당 데이터를 처리하는 메서드를 하나로 묶어서 외부에서의 접근을 제한하는 것이다. 캡슐화를 통해 데이터의 직접적인 변경을 방지하거나 제한할 수 있다.

- 속성과 기능을 하나로 묶고, 외부에 꼭 필요한 기능만 노출하고 나머지는 내부로 숨김

이 캡슐화를 안전하게 완성할 수 있게 하는 장치가 **접근제어자**다.

### 1) 데이터를 숨겨라

- 객체의 속성(데이터)과 기능(메서드) 중 필수로 숨겨야 할 것은 속성(데이터)다.
- 객체 내부의 데이터를 외부에서 함부로 접근하게 두면, 클래스 안에서 데이터를 다루는 로직을 무시하고 데이터를 변경할 수 있게 된다. (캡슐화 깨짐)

**객체의 데이터는 객체가 제공하는 기능인 메서드를 통해서 접근해야 한다.**

### 2) 기능을 숨겨라

- 객체의 기능 중에서도 내부에서만 사용하는 기능이 있는데, 이런 것들도 모두 감추는 것이 좋다.
- 사용자에게 이런 기능까지 모두 알려준다면, 사용자가 자동차에 대해 너무 많은 것을 알아야 한다. 사용자 입장에서 꼭 필요한 기능만 외부에 노출하자.

**데이터는 모두 숨기고, 꼭 필요한 기능만 노출하는 것이 좋은 캡슐화다.**

### 잘 캡슐화된 코드 예제

은행 계좌 프로그램

```java
package access;
public class BankAccount {
		private int balance;
		public BankAccount() {
				balance = 0;
		}
		
		// public 메서드
		public void deposit(int amount) {
				if (isAmountValid(amount)) {
						balance += amount;
		    } else {
						System.out.println("유효하지 않은 금액입니다.");
		}
		
		// public 메서드
		public void withdraw(int amount) {
				if (isAmountValid(amount) && balance - amount >= 0) {
					  balance -= amount;
				} 
				else {
						System.out.println("유효하지 않은 금액이거나 잔액이 부족합니다.");
				}
		}
		
		// public 메서드
		public int getBalance() {
				return balance;
		}
		
		// private 메서드
		private boolean isAmountValid(int amount) {
				// 금액이 0보다 커야함
				return amount > 0;
		}
}
```

```java
package access;
public class BankAccountMain {
		public static void main(String[] args) {
				BankAccount account = new BankAccount();
				account.deposit(10000);
				account.withdraw(3000);
				System.out.println("balance = " + account.getBalance());
		}
}
```

**private**

- `balance`: 데이터 필드 노출 X
- `isAmoundValid()`: 내부에서만 사용하는 기능임

**public**

- `deposit()`: 입금 기능
- `withdraw()`: 출금 기능
- `getBalace()`: 잔고 확인 기능

**내부 메소드를 외부에 노출하면?**

- 개발자 입장에서 알아야 할 메서드가 하나 더 늘게 된다.

**필드를 외부에 노출하면?**

- 개발자 입장에서 이 필드를 직접 사용해도 된다고 생각할 수 있다. 그래서 모든 검증과 캡슐화가 깨지게 되고, 기능이 망가지는 문제가 발생할 수 있다.

### 정리

접근제어자와 캡슐화를 통해 데이터를 안전하게 보호할 수 있고, 개발자 입장에서도 해당 기능을 사용하는 복잡도도 낮출 수 있다.

```toc

```