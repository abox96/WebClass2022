유니티 Mini Jumping Game wall 스크립트
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;
    
    public class wall : MonoBehaviour
    {
    
        public float wallspeed;
    
        // Start is called before the first frame update
        void Start()
        {
            wallspeed = Random.Range(-4, -3); //생선된 벽의 랜덤 이동속도
            Destroy(gameObject, 30.0f);
        }
    
        // Update is called once per frame
        void Update()
        {
            
            transform.Translate(wallspeed * Time.deltaTime, 0, 0); //벽이 다가오는 속도
        }
    }

유니티 Mini Jumping Game spawn 스크립트
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
                Instantiate(pf_wall, new Vector3(transform.position.x , Random.Range(4, -4), transform.position.z), transform.rotation);//벽 높이 랜덤 생성
                yield return new WaitForSeconds(Random.Range(1.8f,3));// 벽 스폰 랜덤 주기
            }
        }
    
        // Update is called once per frame
        void Update()
        {
            
        }
    }
