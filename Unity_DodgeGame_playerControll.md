```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

pubilc class PlayerController : MonoBehaviour {
	public Rigidbody playerRigidbody; // 이동에 사용할 리지드 바디 컴포넌트
	public float speed = 8f; // 이동 속력

	void Start() {
	
	}

	void Update() {
	
	}
}
```

Rigidbody타입 변수에 대한 설명
---
Rigidbody타입의 변수 playerRigidbody를 선언한다고 해서 Rigidbody 타입의 오브젝트가 생성
지는 않는다.
하지만 변수 playerRigidbody를 통해 Rigidbody 타입의 오브젝트를 가리킬 순 있다.
이때 playerRigidbody에 Player object의 rigidbody component를 할당하시면
playerRigidbody를 통해 Player object의 rigidbody component를 조종할 수 있게된다.
***


```C#
void Update(){
	if (input.GetKey(KeyCode.UpArrow) == true) {
		// 위쪽 방향키 입력이 감지된 경우 z 방향 힘 주기
		playerRigidbody.AddForce(0f, 0f, speed);
	}

	if (input.GetKey(KeyCode.DownArrow) == true) {
		// 위쪽 방향키 입력이 감지된 경우 -z 방향 힘 주기
		playerRigidbody.AddForce(0f, 0f, -speed);
	}

	if (input.GetKey(KeyCode.RightArrow) == true) {
		// 위쪽 방향키 입력이 감지된 경우 x 방향 힘 주기
		playerRigidbody.AddForce(speed, 0f, 0f);
	}

	if (input.GetKey(KeyCode.LiftArrow) == true) {
		// 위쪽 방향키 입력이 감지된 경우 -x 방향 힘 주기
		playerRigidbody.AddForce(-speed, 0f, 0f);
	}
}
```
Input을 이용한 입력 감지
---
유니티의 Input클래스는 사용자 입력을 감지하는 메서드를 모아둔 집합니다.
1초에 수십 번씩 실행되는 Update() 메서드에서 입력 감지 메서드를 사용하면 매우 짧은 간격으로 반복 실행되기 때문에 플레이어는 입력이 즉시 감지된다고 느끼게된다.
- Input.GetKey() : 해당 키를 *__'누르는 동안'__* true, 그 외에는 false 반환
- Input.GetKeyDown() : 해당 키를 *__'누르는 순간'__* true, 그 외에는 false 반환
___


