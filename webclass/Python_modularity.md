```python
if __name__ == "__main__":
	함수이름()
```

## 1. ‘__name__’의 정체는 무엇인가?
- 파이썬의 ‘내장 변수’ 혹은 ‘글로벌 변수’이다!

일단 ‘__name__’ 이라는 변수는 파이썬에 기본 탑재되어있는 ‘이미 정해져 있는’ 변수이다.
이 변수는 해당 파이썬 파일의 이름 즉, 모듈의 이름을 담게 된다.

<aside>
💡 그렇기 때문에 main파일 안에서 함수를 실행 시키면 ‘__name__’변수에 담기는 것은 ‘__main__’이라는 값이된다.
반면 다른 파일 즉, 모듈을 import해서 가지고 오는 경우에는 ‘__name__’변수에 가져온 모듈파일의 이름이 담긴다.
- 실행하는 메인 함수에선 해당 파일을 ‘직접 실행’하는 것이 되고,
   import파일에서 해당 변수가 실행되면 다른 파일에서 간접적으로 가져오는 것인 ‘간접 실행’이 된다.

</aside>

---

## 2. 파이썬 파일의 이름을 바꿀 땐 Rename기능을 이용해야한다.

## 3. 파이썬은 메인 함수가 없다.

## 4. 파이썬의 변수는 최초로 값을 할당할 때 자동으로 생성된다.

```python
ix = 2
iy = 3
iresult = ix + iy
print("sum= ", iresult)
// ix 와 iy는 값을 할당(assign)하는 부분이다.
```

## 5. 추상화

복잡한 내용을 묶어서 간단히 표현한 것
*코드 추상화 : 복잡한 코드를 묶어서 간단히 표현

파이썬에서의 추상화는 하나의 함수를 만드는 것과 같다.

`def 함수이름():`

## 6. 전역변수 and 지역변수

전역 변수 : 글로벌 변수라 하며 한 곳에 종속되어있는 변수가 아닌 프로그램이 끝날 때 까지 살아있는 변수이다.

```python
ix = 2
iy = 3
// 함수assign 밖에서 할당된 변수이며 이 두 변수는 전역 변수이다.
def assign():
		iresult = ix + iy
```

지역 변수 : 한 곳에 종속되어 할당된 변수로 종속된 그 곳에서만 사용이 가능하다.

```python
def assign():
	ix = 2
	iy = 3
	iresult = ix + iy
// ix, iy는 함수assign안에서 할당된 변수로 assign안에서만 사용이 가능한 지역 변수이다.
```

따라서 매번 추상화 할 때 마다 같은 의미로 사용될 변수를 할당하는 것은 불필요한 일이므로
이러한 변수는 따로 전역변수로 할당해 놓고 필요할 때 global을 선언하여 값을 넣어주면 편하다.

```python
iX = 0
iY = 0
//함수 밖의 범위인 전역 변수로 초기 할당을 해둔상태
def assign():
global iX, iY
iX = 2
iY = 3
//assign함수에서 미리 할당되어있는 전역 변수를 가져와 값을 넣음
def add():
return iX + iY
```

## 7. 데이터 추상화

코드를 함수로 묶는 일반적인 추상화에서 변수들 까지 같이 묶어 추상화 한 것을 데이터 추상화라 함

```python
묶자 XXX 시작 // class XXX를 만든 것이라 생각하면 됨
iX = 0
iY = 0
def assign():
global iX, iY
iX = 2
iY = 3
def add():
return iX + iY
끝
assign()
iResult = add()
print("Sum = ", iResult)
```

이렇게 변수(데이터)와 함수를 같이 묶어 추상화 한 것을 데이터 추상화라 하며 이렇게 만들어진
XXX는 추상 자료형  이라고 칭한다.

## 8. 추상 자료형을 이용한 변수(객체)

```python
gildong = XXX()
youngja = XXX()
cheolsu = XXX()
```

위의 변수들은 XXX클래스를 기반으로 만든 변수들이다.
이렇게 XXX클래스를 기반으로 만든 변수들을 **객체**라 부르며 객체는 클래스에 있는 기능들을 사용할 수 있다.

## 9. import as

```python
//import point를 하면 point파일의 기능을 사용하기 위해선 gildong = point.Point()와 같이
사용할 때마다 'point.'이라는 긴 코드를 추가해야한다.
import point
gildong = point.Point()
gildong.assign()
iResult = gildong.add()
print("Sum:", iResult)
```

위의 문제를 해결하기 위해 import as 별칭 을 이용하여 긴 코드를 줄일 수 있다.

```python
// point as p는 p를 point라고 지칭하여 앞으로 point를 쓸때 p라고만 하면 인식이 된다.
import point as p
gildong = p.Point()
gildong.assign()
iResult = gildong.add()
print("Sum:", iResult)
```
