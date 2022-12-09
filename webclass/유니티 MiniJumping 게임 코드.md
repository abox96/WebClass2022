	public class player : MonoBehaviour
	{
	    public float jump_player = 15;
	    
	    void Update()
	    {
	        if (Input.GetButton("Jump"))
	        {
	            GetComponent<Rigidbody>().velocity = new Vector3(0, jump_player, 0);
	        }
	    }

	    private void OnCollisionEnter(Collision other)
	    {
	        SceneManager.LoadScene("main_scene");
	    }
	}
