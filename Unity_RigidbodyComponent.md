```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

pubilc class PlayerController : MonoBehaviour {
	private Rigidbody playerRigidbody; // 이동에 사용할 리지드 바디 컴포넌트
	public float speed = 8f; // 이동 속력

	void Start() {
	// 게임 오브젝트에서 Rigidbody를 찾아 playerRigidbody에 할당
	playerRigidbody = GetComponent<Rigidbody>();
	
	}

	void Update() {
	
	}
}
```
변수 playerRigidbody의 접근 한정자를 public -> private로 변경함
따라서 inspector창에서 접근을 불가능하게 됨

### GetComponent()메서드
- 원하는 타입의 컴포넌트를 자신의 게임 오브젝트에서 찾아오는 메서드
  <>로 가져올 타입을 받는다.

### 정리
- Start() 메서드에서 실행된 GetComponent<Rigidbody>();는 자신의 게임 오브젝트에서 Rigidbody타입의 컴포넌트를 찾아서 가져온다.
  즉, 해당 코드는 Player 오브젝트에서 리지드바디 컴포넌트를 찾아서 playerRigidbody 변수에 할당한다.

# NOTE
- GetComponent() 메서드가 컴포넌트를 찾지 못했을 때
  게임 오브젝트에 찾으려는 타입의 컴포넌트가 추가되어 있지 않으면 GetComponet() 메서드 null을 반환한다.
  