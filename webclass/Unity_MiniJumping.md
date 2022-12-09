--플레이어 점프에 관한 코드
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class player : MonoBehaviour
{
public float jump_player = 5;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetButtonDown("Jump")) //스페이스버튼을 유지 시 적용되는 코드 if (Input.GetButton("Jump"))
        {
            GetComponent<Rigidbody>().velocity = new Vector3(0, jump_player, 0);
        }
    }

    private void OnCollisionEnter(Collision other)
    {
        SceneManager.LoadScene("main_scene");
    }
}

-- 스크린속 벽(장애물)에 관한 코드
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class wall : MonoBehaviour
{
public float speed = -5;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(speed * Time.deltaTime, 0, 0);
    }
// void Update() 
{

        transform.Translate(Random.Range(-3, -100) * Time.deltaTime, 0, 0);
    }
}
//Translate의 x파라미터를 랜덤을 지정하여 게임 시작 시 지정된 범위내의 속도중 랜덤으로 게임난이도가 정해지게 된다.

-- 벽(장애물)을 연속적으로 생성시키는 코드
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class spawn : MonoBehaviour
{
public GameObject pf_wall;
public float interval = 1.5f;

    // Start is called before the first frame update
    IEnumerator Start()
    {
        while (true)
        {
            Instantiate(pf_wall, transform.position, transform.rotation); //오브젝트 스폰 시 x축을 랜덤으로 생성시키는 코드 Instantiate(pf_wall, new Vector3(transform.position.x , Random.Range(3, -4), transform.position.z), transform.rotation);
            yield return new WaitForSeconds(interval);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
