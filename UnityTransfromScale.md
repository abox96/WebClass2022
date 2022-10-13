public void scale_up()
    {
        this.transform.localScale = new Vector3(0.5f, 0.5f, 0.5f);
    }
    //적용된 오브젝트의 크기를 변화시키는 코드로 class내에서 사용된다.


if(Input.GetKey(KeyCode.S)) //s키가 입력될 때 Cube라는 이름의 오브젝트를 찾아 cube_script를 실행시킨다.
        {
            GameObject game_object = GameObject.Find("Cube") as GameObject;
            game_object.GetComponent<cube_script>().scale_up();
        }

        if (Input.GetKey(KeyCode.D)) //D키가 입력될 때 Sphere라는 이름의 오브젝트를 찾아 sphere_script를 실행시킨다.
        {
            GameObject game_object = GameObject.Find("Sphere") as GameObject;
            game_object.GetComponent<sphere_script>().scale_up();
        }

        if (Input.GetKey(KeyCode.UpArrow)) //위쪽 화살표키가 입력될 때 3.0f만큼 앞으로 위치를 변경한다.
        {
            this.transform.Translate(Vector3.forward * 3.0f * Time.deltaTime);
        }
        
