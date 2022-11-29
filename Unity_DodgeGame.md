Scene구성
--
1. ***바닥 만들기***
    1. Plane 생성
    2. Plane 스케일 (2, 1, 2)로 확장
    3. postion (0, 0, 0,)으로 변경

2. ***바닥 Material 적용***
    1. Project창에서 Material 선택
    2. 생선된 Material 이름 -> Plane Color
    3. Material #알베도(Albedo) 설정 -> RGB값 (0, 0, 0)
    4. 준비된 Plane Color을 Plane에 적용

3.  ***벽 만들기
    1. Cube 생성
    2. Cube 이름 변경 - > Wall
    3. Wall 설정 변경 -> postion (0, 0.5, 0) , scale(20, 1, 1)

4. ***4방향으로 벽 배치하기
    1. Wall : postion(0, 0.5, 10) , scale(20, 1, 1)
    2. Wall(1) : postion(0, 0.5, -10) , scale(20, 1, 1)
    3. Wall(2) : postion(10, 0.5, 0) , scale(1, 1, 20)
    4. Wall(3) : postion(-10, 0.5, 0) , scale(20, 1, 1)

5. ***Level 게임 오브젝트로 합치기
    1. Create Empty로 빈 오브젝트 생성
    2. Level로 이름 변경
    3. Level object의 위치 리셋 (Transform 컴포넌트의 ⋮ 버튼 > Reset 클릭)
    4. Plane, Wall, Wall(1), Wall(2), Wall(3)을 모두 선택하여 Level의 자식 오브젝트로 이동

6. ***카메라 설정하기
    1. Main Camera를 선택하여 변경
    2. postion(0, 15, -10)
    3. rotation(60, 0, 0)

7. ***카메라 배경 변경
    1. Camera 컴포넌트에서 Clear Flags 값을 Solid Color로 변경
    2. Background의 컬러 필드 클릭 -> 컬러 창 열림
    3. RGB를 (36, 36, 36)으로 변경 -> 컬러 창 닫기