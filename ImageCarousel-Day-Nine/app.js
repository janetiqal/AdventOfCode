const featuredPic = document.querySelector('.feature >img');
console.log(featuredPic);
const caption = document.querySelector('.caption');
console.log(caption);
const thumbNail =document.querySelector('.thumbnails >ul');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
//keeping track of index
let selectedIndex=0;
const content = [
  {
    'image': 'dave-hoefler-okUIdo6NxGo-unsplash.jpg',
    'caption': 'Photo by Dave Hoefler on Unsplash'
  },
  {
    'image': 'sherman-yang-VBBGigIuaDY-unsplash.jpg',
    'caption': 'Photo by Sherman Yang n Unsplash'
  },
  {
    'image': 'jakob-owens-EwRM05V0VSI-unsplash.jpg',
    'caption': 'Photo by Jakob Owens on Unsplash'
  },
  {
    'image': 'finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg',
    'caption': 'Photo by Dan Grinwis on Unsplash'
  },
  {
    'image': 'vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
    'caption': 'Photo by Vincentiu Solomon on Unsplash'
  },
  {
    'image': 'silas-baisch-Wn4ulyzVoD4-unsplash.jpg',
    'caption': 'Photo by Silas Baisch on Unsplash'
  },
  {
    'image': 'eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg',
    'caption': 'Photo by Eugene Golovesov on Unsplash'
  },
  {
    'image': 'jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg',
    'caption': 'Photo by Jennifer reynolds on Unsplash'
  },
  {
    'image': 'kellen-riggin-SIBOiXKg0Ds-unsplash.jpg',
    'caption': 'Photo by Kellen Riggin on Unsplash'
  },
  {
    'image': 'rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg',
    'caption': 'Photo by Rafael Hoyos on Unsplash'
  },
  {
    'image': 'sonya-romanovska-wzdXhyi3AiM-unsplash.jpg',
    'caption': 'Photo by Sonya Romanovska on Unsplash'
  },
]

const thumbnailRender = ()=>{
  const thumbNailHTML = content.map((image, i)=>{
    const selectedText = selectedIndex === i ? 'selected' : "";

    return`
    <li class ="${selectedText}">
    <a href="#">
      <img src="./images/${image.image}" alt="${image.caption}">
    </a>
  </li>
    `
  }).join("");
  console.log(selectedIndex);
  thumbNail.innerHTML=thumbNailHTML;

  updateFeature();

}

leftBtn.addEventListener("click", ()=>{
  //wrapping the content so we dont go to -1
  if(selectedIndex==0){
    selectedIndex=  content.length-1;
  }else{
    selectedIndex--;
  }
  console.log(selectedIndex)
  thumbnailRender();
  // updateFeature();

})

rightBtn.addEventListener("click", ()=>{
  //if right toggling but at the end of list go to first item in list
  if(selectedIndex== content.length-1){
    selectedIndex=  0;
  }else{
    selectedIndex++;
  }
  console.log(selectedIndex);
  thumbnailRender();
  // updateFeature();

})

updateFeature= ()=>{
  featuredPic.src = `./images/${content[selectedIndex].image}`;
  featuredPic.alt =  `${content[selectedIndex].caption}`;
  caption.innerText = `${content[selectedIndex].caption}`;
}


updateFeature();
thumbnailRender();