```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class BamsongiGenerator : MonoBehaviour
{
    public GameObject bamsongi_prefab;
    private float windthrust_X;
    private float windthrust_y;
    private int countShoot;
    public Text windPrint;
    public Text countShootnum;
    // Start is called before the first frame update
    void Start()
    {
        countShoot = 5; // 탄환 초기값
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            windthrust_X = Random.Range(-10.0f, 10.0f);
            windthrust_y = Random.Range(-5.0f, 5.0f);

            // Instantiate(인스턴스화) : 이미 만들어진 게임 오브젝트를 필요할 때마다 실시간으로 만드는 것
            GameObject bamsongi = Instantiate(bamsongi_prefab) as GameObject;
            // 평면화면(스크린 좌표)에서 찍은 마우스 좌표를 ray를 쏴서 3차원화면(월드 좌표)로 향하는 벡터를 구할 수 있음
            Ray screen_ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            // 로컬 좌표축 기준으로 계산한 방향 벡터에 대해 글로벌 좌표축 기준으로 계산한 결과를 반환한다. 반환되는 벡터의 길이는 매개변수로 전달받은 direction의 길이와 같다.
            Vector3 shooting_ray = screen_ray.direction;
            bamsongi.GetComponent<BamsongiCtrl>().Shoot(shooting_ray * 1000);

            // bamsongi에 windthrust(바람)을 적용
            bamsongi.GetComponent<Rigidbody>().AddForce(new Vector3(windthrust_X, windthrust_y, 0));
            
            countShoot -= 1;
        }
        // 탄환 0개 시 탄환 생성기 제거
        if (countShoot == 0)
        {
            GameObject.Destroy(gameObject);
        }

        WindText();
        ShootCount();
    }

    private void WindText() // 바람의 풍향,풍속을 Text로 화면에 띄움
    {
        windPrint.text = windthrust_X.ToString("F1") + "  " + windthrust_y.ToString("F1");
    }

    private void ShootCount() // 남은 탄환 개수를 Text로 화면에 띄움
    {
        countShootnum.text = "남은탄환 " + countShoot.ToString();
    }
}
```