```C#
void Update(){
// 수평축과 수직축의 입력값을 감지하여 저장
float xInput = Input.GetAxis("Horizontal");
float zInput = Input.GetAxis("Vertical");

// 실제 이동 속도를 입력값과 이동 속력을 사용해 결정
float xSpeed = xInput * speed;
float zSpeed = zInput * speed;

// Vector3 속도를 (xSpeed, 0, zSpeed)로 생성
Vector3 newVelocity = new Vector3(xSpeed, 0f, zSpeed);
// 리지드바디의 속도에 newVelocity 할당
playerRigidbody.velocity = newVelocity;
}
```

### Input.GetAxis()
```
float Input.GetAxis(string axisName);
```
Input.GetAxis() 메서드는 축(axis)의 이름을 받습니다.
또한 다음 경우에 따라 감지된 입력 값을 숫자로 반환합니다.
- 축의 음의 방향에 대응되는 버튼을 누름 : -1.0
- 아무것도 누르지 않음 : 0
- 축의 양의 방향에 대응되는 버튼을 누름 : +1.0

Unity의 입력축은 '입력 매니저'를 이용하여 설정합니다.
우선 기본 설정으로 추가되어 있는 Horizontal축과 Vertical축의 대응 입력키와 출력되는 입력값은 다음과 같습니다.

Horizontal 축
- Horizontal(수평) 축에 대응되는 키
    - 음의 방향 : ← (왼쪽 방향키), A키
    - 양의 방향 : → (오른쪽 방향키), D키
- Input.GetAxis("Horizontal")의 출력값
    - 음의 방향 :  -1.0
    - 아무것도 누르지 않음 : 0
    - 양의 방향 : +1.0

Vertical 축
- Vertical(수직) 축에 대응되는 키
    - 음의 방향 : ↓ (아래쪽 방향키), S키
    - 양의 방향 : ↑ (위쪽 방향키), W키
- Input.GetAxis("Vertical")의 출력값
    - 음의방향 : -1.0
    - 아무것도 누르지 않음 : 0
    - 양의 방향 : +1.0
***

속도 계산하기
===
```C#
float xSpeed = xInput * speed;
float zSpeed = zInput * speed;
```

- xSpeed는 X방향 이동 속도, zSpeed는 Z방향 이동 속도를 표현합니다.
- 또한 xInput * speed는 왼쪽, 정지, 오른쪽 이동을 모두 표현할 수 있다는 점을 주목해야한다.

- ← 또는 A 키를 누른 경우
    -  xInput = -1.0
    -  xSpeed = (-1.0) * speed = -speed(왼쪽 이동)
- 아무것도 누르지 않은 경우
    - xInput = 0
    - xSpeed = 0 * speed = 0(정지)
- →  또는 D 키를 누른 경우
    - xInput = +1.0
    - xSpeed = (+1.0) * speed = speed(오른쪽 이동)
***

Vector3 와 velocity
===
```C#
Vector3 newVelocity = new Vector3(xSpeed, 0f, zSpeed);
playerRigidbody.velocity = newVelocity;
```
선언한 Vector3 타입의 변수 newVelocity는 X, Y, Z 방향으로의 속도를 나타내기 위한 변수입니다.

Rigidbody의 AddForce()와 velocity의 차이
---
Update() 메서드의 AddForce() 메서드를 사용하면 힘을 누적하고 속력을 점진적으로 증가시키게됩니다.
이로인해 관성이 생겨 캐릭터의 조작이 무겁게 느껴지게됩니다.

velocity()는 이전 속도를 지우고 새로운 속도를 사용하는 것입니다.
따라서 관성을 무시하고 속도가 즉시 변경됩니다.