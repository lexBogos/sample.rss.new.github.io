import test from './test'

test("les't start")

let newdiv = document.createElement("div");
document.body.appendChild(newdiv);
newdiv.className = 'newdiv';


let newInp = document.createElement("input");
newInp.className = 'inp';
newInp.placeholder="press 'Enter' after entering" ;
newdiv.appendChild(newInp);

let newdiv1 = document.createElement("div");
newdiv1.className = 'quzas';
newdiv.appendChild(newdiv1);

let iva = document.createElement("div");
iva.className = 'iva';
newdiv1.appendChild(iva);

let iva1 = document.createElement("div");
iva1.className = 'iva1';
newdiv1.appendChild(iva1);

let iva2 = document.createElement("div");
iva2.className = 'iva2';
newdiv1.appendChild(iva2);

let iva3 = document.createElement("div");
iva3.className = 'iva3';
newdiv1.appendChild(iva3);

let container = document.createElement("div");
container.className='cont';


let container1 = document.createElement("div");
container1.className='cont1';


let container2 = document.createElement("div");
container2.className='cont2';


let container3 = document.createElement("div");
container3.className='cont';


let container4 = document.createElement("div");
container4.className='cont1';


let container5 = document.createElement("div");
container5.className='cont2';


let container6 = document.createElement("div");
container6.className='cont';


let container7 = document.createElement("div");
container7.className='cont1';


let container8 = document.createElement("div");
container8.className='cont2';


let container9 = document.createElement("div");
container9.className='cont';


let container10 = document.createElement("div");
container10.className='cont1';

let container11 = document.createElement("div");
container11.className='cont2';


let arrow_minus= document.createElement("a");
arrow_minus.href = "#";
arrow_minus.className = 'arrow_minus'; 
newdiv.appendChild(arrow_minus);

let arrow_plus = document.createElement("a"); 
arrow_plus.href = "#";
arrow_plus.className = 'arrow_plus';
newdiv.appendChild(arrow_plus);

let page_num = document.createElement("div"); 
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
        if (curr_pos>24){
            curr_pos=0
            pageToken='pageToken='+arr_for_slyder[arr_for_slyder.length-1]+'&'
            if(pageToken === 'pageToken=undefined&'){
                pageToken = '';
              }  
            }
         if (curr_pos<0){
            curr_pos=0
            if(arr_for_slyder.length>0){
              curr_pos=20
            arr_for_slyder.pop()
            pageToken='pageToken='+arr_for_slyder[arr_for_slyder.length-1]+'&'
            if(pageToken === 'pageToken=undefined&'){
                pageToken = '';
                }
              }  
            }
        let url = 'https://www.googleapis.com/youtube/v3/search?'+pageToken+'part=snippet&maxResults=24&type=video&q=' + searcherValue + '&key=AIzaSyA-49FCq9Ez_hSOdQ2pL5aR1pkog6kMmnU';
        console.log('url',url)

        let request = new XMLHttpRequest();
      	request.open('GET', url);
      	request.responseType = "json";
      	
      	request.onload = function() {
          console.log('curr_pos', curr_pos)
          if(curr_pos===help_arr_for_videos.length&&help_arr_for_videos.length>0){ 
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
       page_num.innerHTML = 'page number: ' + page_number  ; 
     	request_1.send();
     };

        arrow_plus.addEventListener('click',  next_slide);
        function next_slide (){  
        page_number  += 1 ;
        curr_pos+=4
        updateDisplay(newInp.value)
        };

        arrow_minus.addEventListener('click', prev_slide);
        function prev_slide (){
          if (page_number>1){ 
           page_number -= 1 ;
          }
            curr_pos-=4
            updateDisplay(newInp.value)
        }
    

updateDisplay('')


