---
emoji: 📔
title: '[Java 기초] 자바에서 패키지란'
date: '2023-05-22 05:00:00'
author: 이서연
tag: Java
categories: Java
---

## **1. 패키지란?**

쇼핑몰 시스템을 개발한다고 할 때, 기능이 계속 추가되어 프로그램이 아주 커진다면 기능을 분류하여 관리할 필요성이 생긴다. 

컴퓨터에서 파일을 분류하기 위해 디렉토리라는 개념을 제공하는 것처럼, 자바에서는 패키지라는 개념이 있다.

쇼핑몰 시스템의 카테고리를 만들고 분류하면 다음과 같다.

```java
user
  ㄴUser
  ㄴUserManager
  ㄴUserHistory
product
  ㄴProduct
  ㄴProductCatalog
  ㄴProductImage
order
  ㄴOrder
  ㄴOrderService
  ㄴOrderHistory
```

여기에서 user, product, order 등으로 패키지로 나눌 수 있음을 알 수 있다. 그리고 해당 패키지 안에 관련 자바 클래스를 넣으면 된다.

## 2. 패키지 사용해보기

```java
 package pack.a;
 
 public class PackageMain {
     Data data = new Data();
     package.a.User user = new pack.a.User();
 }
```

- 패키지를 사용하는 경우 코드 첫 줄에 `package pack` 처럼 패키지 이름을 적어주면 된다.
- 다른 패키지에 있는 클래스를 사용하려면, `package.a.User` 와 같이 패키지 전체 경로를 포함하여 클래스를 적어주어야 한다.
    - import를 사용하면 패키지 전체 경로를 쓰지 않고도 적어줄 수 있다. (아래 설명)

참고: 생성자에 `public` 을 사용했는데, 다른 패키지에서 이 클래스의 생성자를 호출하려면 `public` 사용이 필요하다.

## 3. 패키지 import

```java
 package pack.a.User;
 
 public class PackageMain {
     Data data = new Data();
     User user = new User();
 }
```

import문을 사요하면 다른 패키지에 있는 클래스를 가져와서 사용할 수 있다.

참고: 특정 패키지에 포함된 모든 클래스를 포함하여 사용하고 싶으면 `*` 을 import하면된다.

### 클래스 이름이 중복된다면?

`pack.a.User` , `pack.b.User` 과 같이 둘다 이름이 `User` 인 클래스를 둘다 사용하고 싶으면 어떻게 해야할까?

```java
public class PackageMain3 {
   public static void main(String[] args) {
       User userA = new User();
       pack.b.User userB = new pack.b.User();
}
```

어쩔 수 없이 둘 중 하나만 생략하여 작성할 수 있고, 나머지 클래스는 패키지를 포함한 전체 경로를 적어줘야 한다.

- 보통 더 자주 사용하는 클래스를 import하는 편을 선택한다.

## 3. 패키지 규칙

- 패키지 이름과 위치는 폴더 위치와 같아야 한다.
- 패키지 이름은 모두 소문자를 사용한다. (관례)
- 패키지 이름 앞에는 일반적으로 회사의 도메인 이름을 거꾸로 사용한다. (관례)
    - ex. `com.company.myapp` 같은 패키지 내 같은 클래스 이름이 존재할 수 있는데, 이렇게 지으면 충돌 문제를 방지할 수 있다.
    - 외부에 오픈소스나 라이브러리를 공개할 경우 이를 지키도록 하자

### 패키지와 계층 구조

- a
    - b
    - c

이렇게 패키지를 선언하면 `a` , `a.b` , `a.c` 총 3개의 패키지가 존재한다.

우리 눈에 보기에 계층 구조를 이룰 뿐, 서로 완전히 다른 패키지임에 유의하자. `a` 패키지 클래스에서 `a.b` 패키지의 클래스가 필요하면 import 하여 사용해야 한다.

### 패키지 활용

```java
- com.helloshop
  - user
    - User
    - UserService
  - product
    - Product
    - ProductService
  - order
	  - Order
	  - OrderService
	  - OrderHistory
```

패키지를 구성할 때 서로 관련된 클래스는 하나의 클래스에 모으고, 관련이 적은 클래스는 다른 패키지로 분리하는 것이 좋다.

```toc

```