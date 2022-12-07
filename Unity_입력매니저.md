Input.GetAxis() 메서드로 Input.GetKey() 메서드를 대체했을 때 우린 입력은 Horizontal과 Vertical 출력은 true, false가 아닌 숫자로 사용했습니다.

이러한 이유는 다음과 같습니다.
1. 입력키 커스터마이제이션을 구현하기 위해
2. 조이스틱 같은 다양한 입력 장치에 대응하기 위해 [다음에..]
***

GetAxis() 메서드와 입력축
---
```
if(Input.GetKey(KeyCode.UpArrow) == true){
playerRigidbody.AddForce(0f, 0f, speed);
}
```
Input.GetKey() 메서드를 사용하여 키보드의 특정 키 UpArrow 입력을 직접 검사했습니다.

이렇게 특정 키 지목 방식은 조작 키를 실시간으로 변경할 수 없는 단점을 가집니다.
키를 변경하려면 코드자체를 수정해야기 때문입니다.

### 입력 이름을 거치는 방식
- 게임 속 조작 키 설정 창은 '기능의 이름'과 '매핑된 키'를 사용하여 구현합니다.

- Edit -> Project Settings... -> Input Manager
  이곳에서 다양한 입력값을 확인하여 해당 입력의 이름을 설정하거나 확인할 수 있습니다.
