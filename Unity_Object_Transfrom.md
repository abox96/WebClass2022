1. Position 위치
''' c++
   if (Input.GetKeyDown(KeyCode.A)) //A키 입력 시 연결된 물체의 위치 변경 
     {
       float rnd = Random.Range(-0.2f, 0.2f);
       this.transform.position += new Vector3(rnd, rnd, rnd);
     }
''' \\<!-- 오브젝트.transform.position += 이동좌표(x, y, z) -->
2. Rotation 각도
''' c++
   if (Input.GetKeyDown(KeyCode.B)) //B키 입력 시 연결된 물체의 각도 변경
    {
      float rnd = Random.Range(0.0f, 360.0f);
      this.transform.rotation = Quaternion.Euler(rnd, 0.0f, 0.0f);
    }
''' \\<!-- 오브젝트.rotation = 회전각도(x, y, z); -->
3. localScale 확대/축소
''' c++
   if (Input.GetKeyDown(KeyCode.C))
    {
      float rnd = Random.Range(0.5f, 1.5f);
      this.transform.localScale = new Vector3(rnd, rnd, rnd);
    }
''' \\<!-- 오브젝트.localScale = 좌표의 크기에 따른 확대/축소(x, y, z); -->
4. Translate 이동
''' c++
   if (Input.GetKeyDown(KeyCode.UpArrow))
    {
      this.transform.Translate(Vector3.forward * 3.0f * Time.deltaTime);
    }
''' \\<!-- (Vector3.forward * 3.0f * Time.deltaTime) Vector3:물체 forward:앞으로 3.0f:해당 힘만큼 Time.deltaTime: fps딜레이 -->
5. Rotate 회전
''' c++
   if (Input.GetKey(KeyCode.R))
    {
      this.transform.Rotate(90.0f * Time.deltaTime, 0.0f, 0.0f);
    }
''' \\<!-- 90.0f * Time.deltaTime : 초당 90도 회전 -->