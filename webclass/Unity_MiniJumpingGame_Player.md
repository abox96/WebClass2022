유니티 Mini Jumping Game Player스크립트
    public class player : MonoBehaviour
	{
	    public float jump_player;
	    float timer;

    void Start()
    {
        jump_player = Random.Range(4, 10);    
    }

	    void Update()
	    {
	        if (Input.GetButton("Jump"))
	        {
	            GetComponent<Rigidbody>().velocity = new Vector3(0, jump_player, 0);
	            timer += Time.deltaTime;
	        }
	    }
	private void OnGUI()
    {
        GUI.TextArea(new Rect(41, Screen.height - 40, 35, 20), "시간");
        GUI.Label(new Rect(81, Screen.height - 40, 128, 32), (Mathf.Round(timer)).ToString());
        GUI.TextArea(new Rect(120, Screen.height - 40, 45, 20), "점프력");
        GUI.Label(new Rect(180, Screen.height - 40, 128, 32), jump_player.ToString());
    }
	    private void OnCollisionEnter(Collision other)
	    {
	        SceneManager.LoadScene("main_scene");
	    }
	}
