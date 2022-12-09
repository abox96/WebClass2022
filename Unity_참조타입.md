	Animal tom = new Animal();

클래스로 만든 변수는 참조 타입이다.
참조 타입의 변수는 실체화된 오브젝트가 아니다.
참조 타입의 변수를 선언하는 것만으로는 오브젝트가 생성되지 않기 때문에 new를 사용해 오브젝트를 개별적으로 생성해야 한다.

위의 코드를 보면 Animal타입으로 생성한 tom은 Animal오브젝트 그 자체가 아니다.

이제부터 그 이유를 살펴보자

	void Start(){
		Animal tom = new Animal();
		tom.name = "톰";
		tom.sound = "냐옹!";
		
		Animal jerry = new Animal();
		jerry.name = "제리";
		jerry.sound = "찍찍!";
		
		tom.PlaySound();
		jerry.PlaySound();
	}
	
	Animal jerry = new Animal();
	jerry.name = "제리";
	jerry.sound = "찍찍!";
	
	//콘솔로 실행 결과
	톰 : 냐옹!
	제리 : 찍찍!

기본적으로 Animal타입으로 생성한 tom, jerry를 PlaySound()로 실행하면
각각 정상적으로 톰은 냐옹!, 제리는 찍찍으로 log가 찍힌다.

	void Start(){
		Animal tom = new Animal();
		tom.name = "톰";
		tom.sound = "냐옹!";
		
		Animal jerry = new Animal();
		jerry.name = "제리";
		jerry.sound = "찍찍!";

		jerry = tom;
		jerry.name = "미키";
		
		tom.PlaySound();
		jerry.PlaySound();
	}
	
	// 실행
	미키 : 냐옹!
	미키 : 냐옹!

참조 타입은 오브젝트 그 자체에 해당하는 것이 아닌 '참조' 그 자체로
여기서는 Animal오브젝트를 가리키고 있는 가상 주소?로 볼 수 있다.

jerry = tom;로 인해 jerry 참조는 이제 tom오브젝트를 가리키게 되고
jerry.name = "미키";로 인해 tom오브젝트의 name을 '미키'로 바꾸게 된다.

최종 출력으로 tom과 jerry둘다 name = 미키, sound = 냐옹!으로 출력된 이유는 결국 tom참조와 jerry참조 둘다 tom오브젝트를 가리키는 참조 타입의 변수이기 때문이다.