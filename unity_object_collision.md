private void OnCollisionEnter(Collision collision){
Vector3 launch_direction = new Vector3(0, 1, 1);
if (collision.gameObject.name == "Sphere"){ //Sphere의 이름을 가지고 있는 오브젝트를 해당시킴
ball.GetComponent<Rigidbody>().AddForce(launch_direction * power);
}
}
유니티에서 오브젝트와 오브젝트가 충돌 시 해당 오브젝트를 vector(0, 1, 1)방향으로 이동시키는 코드
