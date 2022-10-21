using UnityEngine.SceneManagement;

public class scene_transition : MonoBehaviour
{
    void Start()
    {

    }
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            SceneManager.LoadScene("scene2", LoadSceneMode.Single); //scene2로 장면변환
        }
    }
}