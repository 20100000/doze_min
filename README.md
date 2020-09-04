<h1>Upload of music and audiobook</h1>

<h3>Technology used in project</h3>
Docker-composer for local ambient at develop  <br/>
NodeJs with framework Express to router in APIs<br/>
npm manager packages</br>
Docker MySql container database </br>
Docker node container app </br>
<br/>
<h3>Required ports</h3>
MySql 3308, APP 3000
<h3>Required to start  project</h3>
Docker-composer MySql , Nodejs, and NPM

<h3>Step by step for start project
<h4>1° copy the project</h4> 
<pre>
    git clone https://github.com/20100000/doze_min.git<br/>
    cd doze_min
</pre>
<h4>2° install dependencies</h4>  
<pre>
    npm install
</pre>
<h4>3° Build and run this image</h4>
<pre>
    docker-compose up --build
</pre>

<h4> APIs</h4>
show all audiobook 
<pre>
GET
http://localhost:3000/music
</pre>
show only one music
<pre>
GET
http://localhost:3000/music/1
</pre>

Play music
<pre>
get return in json "file_path": "1599242572752-517991237-teste.mp3",

GET
http://localhost:3000/music/play/1599242572752-517991237-teste.mp3
</pre>

Delete music
<pre>
DELETE
http://localhost:3000/music/1
</pre>
Update music
<pre>
PUT
http://localhost:3000/music/1
{
	"title": "Bem que se quiz 5",
	"description": "uma bosta meda m5",
	"file_path": "123452226testessss.mp3",
	"tags": [
		{
			"id": 8,
			"name": "AXEe"
		},
		{
			"id": 9,
			"name": "MPBb"
		}
	]
}
</pre>
Save music
<pre>
POST
http://localhost:3000/music
{
	"title": "Bem que se quiz 2",
	"description": "uma bosta meda m",
	"file_path": "teste.mp3",
	"tags": [
		{
			"name": "AXE"
		},
		{
			"name": "MPB"
		}
	]
}
</pre>


