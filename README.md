<h1>Upload of music and create audiobook</h1>

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
Docker-composer MySql , Nodejs and NPM

<h3>Step by step for start project
<h4>1° Copy the project</h4> 
<pre>
    git clone https://github.com/20100000/doze_min.git<br/>
    cd doze_min
</pre>
<h4>2° Install dependencies</h4>  
<pre>
    npm install
</pre>
<h4>3° Build and run this image</h4>
<pre>
    docker-compose up --build
</pre>
<h4>create token</h4>
<pre>
    POST
    http://localhost:3000/login
    {
        "password": "123456",
        "email": "teste@12min.com"
    }
</pre>
copy the token on return and add in the header Authorization Bearer + token for the other apis
<br>
<h4> APIs with token in Authorization header, add bearer</h4>
<h4>Upload file </h4>
<pre>
 curl --request POST \
   --url http://localhost:3000/song/upload \
   --header 'cache-control: no-cache' \
   --header 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
   --header 'postman-token: d57fc380-3dea-71bb-6aa6-5ac24e7f9ee8' \
   --form music=@teste.mp3
</pre>
get return data name file to add in file_path for save and update music.
or use index.html in the project root.
<br>
Show all audiobook 
<pre>
GET
http://localhost:3000/music
</pre>
Show only one music
<pre>
GET
http://localhost:3000/music/1
</pre>

Search music
<pre>
GET
http://localhost:3000/music/search/write_title_or_description
</pre>

Play music
<pre>
get return in json "file_path": "1599242572752-517991237-teste.mp3",

GET
URL + file_path or use playMusic for data return
http://localhost:3000/music/play/1599242572752-517991237-teste.mp3
</pre>

Delete music and tags
<pre>
DELETE
http://localhost:3000/music/1
</pre>

Delete tag
<pre>
DELETE
http://localhost:3000/music/tag/1
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


