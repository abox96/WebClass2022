```C#
public void Die(){
// 자신의 게임 오브젝트를 비활성화
gameObject.SetActive(false);
}
```
SetActive()는 게임 오브젝트를 나타내는 GameObject 타입에 내장되어 있는 메서드이다.
입력으로 bool 값을 받으며 SetActive(true)가 실행되면 게임 오브젝트를 활성화한다.
위의 사용한 gameObject.SetActive(false);는 다음과 같은 순서로 자신의 게임 오브젝트를 비활성 시킨다.
1. gameObject를 사용해 자신의 게임 오브젝트에 접근
2. 접근한 게임 오브젝트의 SetActive(false);를 실행
***

gameObject 와 GameObject
===
gameObject는 컴포넌트 입장에서 자신이 추가된 게임 오브젝트를 가리키는 변수이다.
- gameObject는 GameObject 타입의 변수이며 컴포넌트들의 기반 클래스인 MonoBehaviour에서 제공한다.

모든 컴포넌트는 gameObject 변수를 이용해 자신을 사용 중인 게임 오브젝트에 접근할 수 있다.

PlayerController 스크립트는 Player object에 추가하고 있으며, 따라서 이 스크립트에서 gameObject는 Player object를  가리키게 된다.

**즉, gameObject는 변수로 적용된 오브젝트를 가리킨다.
GameObject는 타입이다.**

