# 소프트웨어 설계 및 분석

## 비선형성(non-linearity)

- 예측 불가능한 결말(분기점에 따른 결말)
- 멀티엔딩의 형식 - 플레이어의 선택에 결말이 달라짐
- 플레이어의 선택과 능동적인 참여라는 기본 성격으로 구조가 비선형적인 구조를 갖게됨

## 게임의 사회적 특성

- 강한 친화력을 가지며 동시에 강한 공감대를 형성하는 집단으로 만듦
- 게임 커뮤니티 - 길드, 클랜, 혈맹
- 게임, 특히 온라인 게임은 또 하나의 사회이다.

## Zero sum게임

여러 사람이 서로에게 영향을 받는 상태에서 서로의 모든 이익의 총합이 항상 0인 상태

즉, 게임을 할 때 서로의 목표(승리)를 가질 때 서로의 이익이 반대되어 총합이 0이된다.

단 게임에서는 승자가 있어야 하기에 서로의 이익 총합이 0인 제로섬이론에선 승자가 없다.

## 유니티 초기 화면 용어 설명

- Game 뷰
  카메라를 통해 보이는 화면
  게임 동작 시 화면에 어떻게 나타나는지 보여줌
- Scene 뷰 (Game 뷰)
  작성 중인 게임 오브젝트 표시(위치나 크기 등을 조정 가능)
  플레이 중에 변경한 내용(플레이 모드 종료와 동시에 초기화면으로 돌아감)
- Hierarchy뷰 (계층 뷰)
  현재 선택된 Scene에 배치된 모든 오브젝트 포함
  오브젝트의 계층 구조 확인하고 편집하는 공간
  캐릭터, 도형 등의 리소스를 배치하는 공간
- Project뷰
  게임 프로젝트에 사용될 모든 오브젝트와 텍스처, 음악, 스크립트 등 게임 형성 요소를 포함
- Inspector뷰
  선택한 오브젝트의 구성과 요소 확인 및 편집하는 뷰
  요소 - 스크립트, 메시, 오디오, 물리동작 등을 유니티에선 컴포넌트라 부름
- Console뷰
  메시지, 경고, 오류 등의 로그를 표시해주는 뷰

## 스칼라

: 크기만 있고 방향이 없음 ( 무게, 온도, …..)

## 벡터

: 크기와 방향이 함께 존재 (속도, 힘, ….)

## Rigidbody(강체) 컴포넌트

: 물체에 물리적인 특성(강체)을 부여, 외력(중력, 마찰력 등)으로 움직이려면 추가해야함

<aside>
💡 Rigidbody 변수
- Mass : 물체의 질량
- Drag : 공기 저항
- Angular Drag : 회전 운동 저항
- Use Gravity : 중력 영향 여부
- Is Kinematic : 물체에 가해지는 힘의 크기, 방향 등을 계산하지 않음,
즉, 물리엔진 기능을 무효 but 충돌 체크는 여전히 수행함 - Transform을 통해서만 물체 조작 가능

- Interpolate : 물체의 움직임이 지나치게 끊겨 보일 경우 사용

- Collision Detection
1. Discrete - 현재 프레임의 위치만으로 충돌 검사 *Tunneling문제 생길 수 있음
2. Continuous - 이전 프레임과 현제 프레임 사이의 이동 궤적을 바탕으로 충돌 검사
3. Continuous Dynamic - Continuous 충돌 검사에 압도적인 계산량 추가

충돌 검사 시 Rigidbody인 물체 = Discrete충돌 검사, 없는 물체 = Continuous 충돌 검사

</aside>

## GetComponent<componentName>()

<componetName> 현재 스크립트에 연결된 물체에서 찾을 경우에만 허용됨

GetComponet()메서드 사용 시 다른 게임 오브젝트에 속한 스크립트를 참조할 수 있다.


# 입력 함수

## Input 클래스

• Input.GetAxis(“Horizontal”) : 좌우 이동키의 이동 방향
• Input.GetAxis(“Vertical”) : 앞뒤 이동키의 이동 방향

• Input.GetKeyDown() : 특정한 키를 눌렀는 지 여부
• Input.GetButtonDown() : 특정한 키나 버튼을 눌렀는 지 여부
• Input.GetMouseButtonDown() : 마우스버튼을 눌렀는 지 여부

- Input.GetAxis()
  ▪ 입력장치(키보드, 마우스, 조이스틱)의 방향키가 눌려진 방
  향을 -1, 0, 1의 값으로 알려줌
  • Input.GetAxis(“Horizontal”);
  ▪ a : -1, d : 1
  • Input.GetAxis(“Vertical”);
  ▪ s : -1, w : 1

## 물체 이동 코드

위치 변경 코드

transform.position = new Vector3 (Input.mousepostion.x, 0, 0)
this.transform.position += new Vector3 (rnd, rnd, rnd)

각도(회전) 변경 코드
this.transform.rotation = Quaternion.Euler (rnd, 0.0f, 0.0f)

확대/ 축소 비율 변경
this.transform.localScale = new Vector3 (rnd, rnd, rnd);

## 연속성이 있는 물체 이동

- 이동
  – <오브젝트>.transform.Translate(이동 거리);
  • 회전
  – <오브젝트>.transform.Rotate(X 회전각, Y 회전각, Z 회전각);
  • 축소/확대
  – <오브젝트>.transform.localScale = Vector3(sx, sy, sz);

## 플랫폼 성능에 따른 물체 움직임 속도

- 모든 물체는 플랫폼 성능에 따라 FPS(Frame Per Second)가 다를 수 있다. 하지만 플랫폼 성능과 상관없이 항상 일정한 속도로 이동해야한다.
- Time.deltaTime
- 직전 프레임과 현재 프레임 사이의 소요시간
- [매 프레임 이동거리] = 속도 x Time.deltaTime
- 실시간 update로 이동하는 물체에 Time.deltaTime를 걸어주면 성능에 따른 FPS격차를 줄일 수 있다.