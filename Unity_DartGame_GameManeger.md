```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
public class GameManager : MonoBehaviour
{
    public static GameManager instance;
    private int count;
    public Text endGame;
    private static int scoreSum;
    public Text scorePrint;
    // Start is called before the first frame update
    private void Awake()
    {
        if(instance == null)
        {
            instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    void Start()
    {
        count = 5;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            count -= 1;
        }
        if (count == 0)
        {
            endGame.text = "Press 'R' to continue";
        }
        if (count <= 0 && Input.GetKeyDown(KeyCode.R))
        {
            SceneManager.LoadScene("SampleScene");
        }
    }

    public void AddScore(int _score)
    {
        scoreSum += _score;
        scorePrint.text = " 점수 : " + scoreSum.ToString();
    }
}

```