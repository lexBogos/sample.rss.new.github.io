import test from './test'

test('!!!')


let newdiv = document.createElement("div");
document.body.appendChild(newdiv);
newdiv.style.marginRight="auto";
newdiv.style.marginLeft="auto";
newdiv.style.minHeight= "945px";
newdiv.style.backgroundColor = '#343D46';

let newInp = document.createElement("input");
newInp.style.height="25px";
newInp.style.width="74%";
newInp.style.borderRadius='10px';
newdiv.appendChild(newInp);

let newdiv1 = document.createElement("div");
newdiv1.style.marginTop="50px";

newdiv1.style.justifyContent = "space-between";
newdiv1.style.width="90%";
newdiv1.style.marginRight="auto";
newdiv1.style.marginLeft="auto";

newdiv1.className = 'quzas';
newdiv.appendChild(newdiv1);

let iva = document.createElement("div");
iva.className = 'iva';
iva.style.minHeight="300px";
iva.style.textAlign="center";
iva.style.margin="30px auto";
iva.style.paddingTop = '50px';
iva.style.backgroundColor = 'white';
iva.style.borderRadius ='30px'; 
newdiv1.appendChild(iva);

let iva1 = document.createElement("div");
iva1.className = 'iva1';
iva1.style.textAlign="center";
iva1.style.margin="30px auto";
iva1.style.paddingTop = '50px';
iva1.style.backgroundColor = 'white';
iva1.style.borderRadius ='30px';
iva1.style.minHeight="300px";
newdiv1.appendChild(iva1);

let iva2 = document.createElement("div");
iva2.className = 'iva2';
iva2.style.textAlign="center";
iva2.style.margin="30px auto";
iva2.style.paddingTop = '50px';
iva2.style.backgroundColor = 'white';
iva2.style.borderRadius ='30px';
iva2.style.minHeight="300px";
newdiv1.appendChild(iva2);

let iva3 = document.createElement("div");
iva3.className = 'iva3';
iva3.style.textAlign="center";
iva3.style.margin="30px auto";
iva3.style.paddingTop = '50px';
iva3.style.backgroundColor = 'white';
iva3.style.borderRadius ='30px';
iva3.style.minHeight="300px";
newdiv1.appendChild(iva3);

let container = document.createElement("div");
container.className='cont';
container.style.minWidth="100%";
container.style.margin="0 auto";

let container1 = document.createElement("div");
container1.className='cont1';
container1.style.width="90%";
container1.style.textAlign="center";
container1.style.margin="0 auto";

let container2 = document.createElement("div");
container2.style.position = "relative";
container2.className='cont2';
container2.style.backgroundColor = "rgb( 255, 255, 255)";
container2.style.backgroundColor = "rgba( 15, 98, 64, 0.8)";
container2.style.top="-100px";

let container3 = document.createElement("div");
container3.className='cont';
container3.style.width="90%";
container3.style.margin="0 auto";

let container4 = document.createElement("div");
container4.className='cont1';
container4.style.width="100%";
container4.style.textAlign="center";
container4.style.margin="0 auto";

let container5 = document.createElement("div");
container5.style.position = "relative";
container5.className='cont2';
container5.style.backgroundColor = "rgba( 15, 98, 64, 0.8)";
container5.style.top="-100px";

let container6 = document.createElement("div");
container6.className='cont';
container6.style.width="90%";
container6.style.margin="0 auto";

let container7 = document.createElement("div");
container7.className='cont1';
container7.style.width="100%";
container7.style.textAlign="center";
container7.style.margin="0 auto";

let container8 = document.createElement("div");
container8.style.position = "relative";
container8.className='cont2';
container8.style.backgroundColor = "rgba( 15, 98, 64, 0.8)";
container8.style.top="-100px";

let container9 = document.createElement("div");
container9.className='cont';
container9.style.width="90%";
container9.style.margin="0 auto";

let container10 = document.createElement("div");
container10.className='cont1';
container10.style.width="100%";
container10.style.textAlign="center";
container10.style.margin="0 auto";

let container11 = document.createElement("div");
container11.style.position = "relative";
container11.className='cont2';
container11.style.backgroundColor = "rgba( 15, 98, 64, 0.8)";
container11.style.top="-100px";

let arrow_minus= document.createElement("a");
arrow_minus.href = "#";
arrow_minus.style.textDecoration = 'none';
arrow_minus.style.fontSize = "30px";
arrow_minus.style.color = "rgb(255,205,67)";
arrow_minus.style.marginLeft = "45%";
arrow_minus.className = 'arrow_minus'; 
newdiv.appendChild(arrow_minus);

let arrow_plus = document.createElement("a"); 
arrow_plus.href = "#";
arrow_plus.style.textDecoration = 'none';
arrow_plus.style.fontSize = "30px";
arrow_plus.style.color = "rgb(255,205,67)";
arrow_plus.style.marginLeft = "8.5%";
arrow_plus.className = 'arrow_plus';
newdiv.appendChild(arrow_plus);

let page_num = document.createElement("div"); 
page_num.style.color = "rgb(255,205,67)";
page_num.style.marginLeft = "8.5%";
page_num.className = 'page_nums';
newdiv.appendChild(page_num);

let page_number = 1;

arrow_plus.innerHTML = '>';
arrow_minus.innerHTML = '<';

let arr_for_slyder = [];  
let help_arr_for_videos = [];
let pageToken='';
let curr_pos=0;

newInp.addEventListener('keyup', searcher)
function searcher(){
	let searcherValue = newInp.value;
  	updateDisplay(searcherValue);
}
  
    function updateDisplay(searcherValue) {
        if (curr_pos>help_arr_for_videos.length){
            pageToken='pageToken='+arr_for_slyder[arr_for_slyder.length-1]+'&'
            if(pageToken === 'pageToken=undefined&'){
                pageToken = '';
              }
            }
        let url = 'https://www.googleapis.com/youtube/v3/search?'+pageToken+'part=snippet&maxResults=24&type=video&q=' + searcherValue + '&key=AIzaSyA-49FCq9Ez_hSOdQ2pL5aR1pkog6kMmnU';
        console.log('url',url)

        let request = new XMLHttpRequest();
      	request.open('GET', url);
      	request.responseType = "json";
      	
      	request.onload = function() {
      		// console.log(request.response)
          if(curr_pos===help_arr_for_videos.length){ 
            console.log('curr_pos===help_arr_for_videos.length')
             arr_for_slyder.push(String(request.response.nextPageToken))
             console.log('arr_for_slyder', arr_for_slyder) 
          } 
      		help_arr_for_videos = [];
      		for (let k=0; k<=24; k++){
     	 			help_arr_for_videos.push(String(request.response.items[k].id.videoId))
      		}
      	};

     	request.send();

     	// console.log("help_arr_for_videos", help_arr_for_videos)
      
      let url_1 ='';

      for(let i =0; i<=curr_pos; i+=4){
     	url_1 = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA-49FCq9Ez_hSOdQ2pL5aR1pkog6kMmnU&id='+help_arr_for_videos[i]+','+help_arr_for_videos[i+1]+','+help_arr_for_videos[i+2]+','+help_arr_for_videos[i+3]+','+'&part=snippet,statistics'
     	};
      let request_1 = new XMLHttpRequest();
     	  request_1.open('GET', url_1);
      	request_1.responseType = "json";
        let iva_arr = [iva, iva1, iva2, iva3]
        request_1.onload = function() {
        let container_arr = [container, container1, container2, container3, container4, container5, container6, container7, container8, container9, container10, container11]
      	// console.log(request_1.response)
        for (let i=0; i<4; i++){  
      	let picture = request_1.response.items[i].snippet.thumbnails.high.url;
      	let channel = request_1.response.items[i].snippet.channelTitle;
      	let description = request_1.response.items[i].snippet.description;
      	let publication_date = request_1.response.items[i].snippet.publishedAt;
      	let view_rate = request_1.response.items[i].statistics.viewCount;
      	let title = request_1.response.items[i].snippet.localized.title;
      	description = description.slice(0,100)+'...';
      	publication_date = publication_date.slice(0, 10);
        title = title.slice(0, 50);
			    
        container_arr[i*3].innerHTML ='<img src="'+picture+'" style="max-height: 150px; max-width: 150px" alt="картинка">';
			  container_arr[i*3+1].innerHTML ='<p>'+channel+'</p>'+'<p>'+publication_date+'</p>'+'<p>'+view_rate+'</p>'+'<p>'+description+'</p>';
			  container_arr[i*3+2].innerHTML = '<a style="text-decoration: none; color: black;" href=https://www.youtube.com/watch?v='+request_1.response.items[i].id+'>'+title+'</a>';
             
        iva_arr[i].appendChild(container_arr[i*3])
        iva_arr[i].appendChild(container_arr[i*3+2])
        iva_arr[i].appendChild(container_arr[i*3+1])

      	     };
        };
       page_num.innerHTML = 'page number:' + page_number  ; 
     	request_1.send();
     };

        arrow_plus.addEventListener('click',  next_slide);
        function next_slide (){  
        page_number  += 1 ;
        if (curr_pos<=help_arr_for_videos.length){
            curr_pos+=4
            updateDisplay(newInp.value)
          }
        else{
          curr_pos=0
          updateDisplay(newInp.value)
          console.log('arr_for_slyder')
          console.log(arr_for_slyder)
          }  
        };

        arrow_minus.addEventListener('click', prev_slide);
        function prev_slide (){
          if (page_number>1){ 
           page_number -= 1 ;
          }
           if (curr_pos-4 >= 0){
              curr_pos-=4
            }
           else{
            arr_for_slyder.pop()
            curr_pos = 20
          console.log('arr_for_slyder')
          console.log(arr_for_slyder)
          }
           updateDisplay(newInp.value)
           
        }; 

updateDisplay('')

     // <div class="nav_block_click_item">
     //    <span class="block_click_item" onclick="slide(0)" style="background: transparent;"></span>
     //    <span class="block_click_item" onclick="slide(1)" style="background: transparent;"></span>
     //    <span class="block_click_item" onclick="slide(2)" style="background: rgb(0, 0, 0);"></span>
     //    <span class="block_click_item" onclick="slide(3)" style="background: transparent;"></span>
     //    <span class="block_click_item" onclick="slide(4)" style="background: transparent;"></span>
     //    <span class="block_click_item" onclick="slide(5)" style="background: transparent;"></span>
     //  </div>  
