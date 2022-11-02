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
        if (Input.GetButtonDown("Jump"))
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
}

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
            Instantiate(pf_wall, transform.position, transform.rotation);
            yield return new WaitForSeconds(interval);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
