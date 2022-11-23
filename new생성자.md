
유니티 C# 스크립트 Animal.cs를 기준으로 설명

	using system.Collections;
	using system.Collections.Generic;
	using UnityEngine
	
	public class Animal MonoBegaviour{
		void Start(){
			Animal tom = new Animal();
			tom.name = "톰";
			tome.sound = "냐옹!"
			
			tom.PlaySound();
		}
	}

Zoo.cs의 Start() 메서드에서 작성한 코드 중 일부분인
new 연산자를 이용하여 만든 오브젝트(인스턴스)이다.

	Animal tom = new Animal();

"new Animal()"은 Animal클래스의 기본 생성자로 생성 시 초기화에 필요한 별다른 입력을 받지 않는다.
생성자는 클래스를 기반으로 새로운 오브젝트를 생성할 때 실행하는 특수한 메서드라고 생각해도 좋다.

정리하자면 new Animal();은 새로운 Animal 오브젝트(인스턴스)를 만들어라! 라고 하는 명령어라고 생각할 수 있다.

	new Animal() -> Animal object 생성
	여기에선 Animal오브젝트를 생성하고 Animal 타입의 변수 tom에 할 당했다! 라고 볼 수 있겠다.

생성자의 기본 원칙
---
	public class Animal MonoBegaviour{
		void Start(){
			Animal tom = new Animal();
		}
	}
	// 클래스의 이름(Animal)와 생성자(Animal)의 이름이 동일해야 한다.
	// void 즉, 리턴 타입이 없다.
	// 매개변수가 다른 생성자를 여러개 만드는 오버로딩이 가능하다.
	// new연산자를 이용하여 선언한다.
	// 주된 목적은 필드(멤버변수)의 초기화를 하기 위해 사용된다.
	// this로 생성자를 호출할 수 있다.
	// 매개변수나 내용이 없으면 디폴트 생성자가 자동으로 생성한다.

번외
===
MonoBehaviour는 new를 사용하지 않는다.
---------------

- C#에서는 클래스를 기반으로 새로운 오브젝트를 생성할 때 new를 사용하는 것이 일반적이지만 유니티C#스크립트에서는 new를 거의 사용하지 않는다는 사실을 알고 있어야한다.

- 유니티에서 작성하는 대부분의 스크립트는 MonoBehaviour 클래스를 상속한다.
  그런데 MonoBehaviour를 상속한 클래스는 new로 오브젝트를 생성할 수 없다.
- MonoBehaviour를 상속한 클래스는 '드래그 & 드롭' 등으로 스크립트를
  게임 오브젝트에 컴포넌트(부품으로 부여시키는 것)로 추가하는 방법으로만 오브젝트로 만들 수 있다.

- new연산자로 오브젝트를 생성하면 필요한 초기화 과정을 생략하고 바로 오브젝트를 생성한다.
  그러나 MonoBehaviour를 상속한 클래스는 컴포넌트로 동작하며 컴포넌트는  게임 오브젝트에 추가될 때 컴포넌트로서 필요한 초기화 과정을 거친다.
  따라서 new연산자로 초기화를 생략해버리면 생성된 오브젝트는 컴포넌트 오브젝트로서 기능을 정상적으로 동작하지 못한다.