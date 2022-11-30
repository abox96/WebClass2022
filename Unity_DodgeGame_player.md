[[Scene]] 구성 보기

- Player가 가질 기능
    1. 파란색 캡슐 모양이다.
    2. 상화좌우를 WASD 키로 움직일 수 있다.
    3. 탄알에 맞으면 죽는다.

1. Player <span style= "color: red;">오브젝트</span> 만들기
    1. Capsule object 생성
    2. object name 변경 -> Player
    3. Player 위치 변경 -> postion(0, 1, 0)

2. Player Meterial 만들기
    1. Material 생성
    2. Material name 변경 -> Player Color
    3. Player Color 변경 -> Albedo color(0, 100, 164)
    4. Player Color 적용 -> Player object

3. Player Tag 설정하기
    - 탄알 입장에서 충돌한 object가 Player인지 확인하기 위해 objcet Tag를 설정한다.
    1. Player object를 선택하여 Inspector창에서 Tag를 Player로 변경

4. Rigidbody Component 추가
    1. Inspector -> Add Component -> Rigidbody추가
    2. Rigidbody 제약 설정 (Constraints 필드)
        - `Freeze Position :` [Y]
        - Freeze Rotation : [X], [Z]

5. 스크립트 작성
    1. [[PlayerController]] : Player 컨트롤에 관한 스크립트