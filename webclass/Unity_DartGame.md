유니티 다트게임 다트 발사 스크립트

    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;
    
    public class BamsongiCtrl : MonoBehaviour
    {
    float timer = 0.0f;
    bool is_shot = false;
    
        // Start is called before the first frame update
        void Start()
        {
            
        }
    
        // Update is called once per frame
        void Update()
        {
            timer += Time.deltaTime;
            if(timer > 0.05 && !is_shot)
            {
                Shoot(new Vector3(-600, 500, 0));
                is_shot = true;
            }
        }
    
        public void Shoot(Vector3 dir)
        {
            GetComponent<Rigidbody>().AddForce(dir);
        }
    
        private void OnCollisionEnter(Collision other)
        {
            GetComponent<Rigidbody>().isKinematic = true;
            GetComponent<ParticleSystem>().Play();
        }
    }
