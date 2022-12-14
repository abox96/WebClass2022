using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class BamsongiCtrl : MonoBehaviour
{

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // bamsongi_Prefab발사 후 3초 뒤 오브젝트 파괴
        GameObject.Destroy(gameObject, 3f);
    }

    public void Shoot(Vector3 dir)
    {
        GetComponent<Rigidbody>().AddForce(dir);
    }

    private void OnCollisionEnter(Collision other)
    {
        // isKinematic : 외부에서 가해지는 물리적 힘에 반응하지 않는 오브젝트라는 의미
        GetComponent<Rigidbody>().isKinematic = true;
        GetComponent<ParticleSystem>().Play();
        Vector3 collided_position = transform.position;

        // target 중앙에서 bamsongi중앙 까지의 거리 측정
        float distance = collided_position.x * collided_position.x + (collided_position.y - 6.5f) * (collided_position.y - 6.5f);
        distance = Mathf.Sqrt(distance);
        Debug.Log(collided_position);
        Debug.Log(distance);
        
        Scorezz(distance);
        Debug.Log(Scorezz(distance));
        GameManager.instance.AddScore(Scorezz(distance)); // GameManager 스크립트의 instance변수에 접근해 AddScorezz메서드를 사용
       
    }

    // 거리별 점수 차등 계산
    public int Scorezz(float Value)
    {
        if(Value <= 0.4)
        {
            return 100;
        }
        else if (Value <= 0.8){
            return 80;
        }else if (Value <= 1.2)
        {
            return 60;
        }else if(Value <= 1.6)
        {
            return 40;
        }else if(Value <= 2.0)
        {
            return 20;
        }
        else
        {
            return 0;
        }
       
    }
}
