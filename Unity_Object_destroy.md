void Update()
{
if(Input.GetMouseButtonDown(0))
{
game_object = GameObject.Find("Cube");
Destroy(game_object);
}
}