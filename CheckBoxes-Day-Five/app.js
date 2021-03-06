const episodeSection = document.querySelector('ul.episodes')
const body= document.querySelector('body')
const episodes = [
  {
    'id': 1,
    'name': 'James Q Quick\'s Origin Story'
  },
  {
    'id': 2,
    'name': 'Amy Dutton\'s Origin Story'
  },
  {
    'id': 3,
    'name': 'The Tech Behind Compressed.fm'
  },
  {
    'id': 4,
    'name': 'Starting a New Development Project'
  },
  {
    'id': 5,
    'name': 'How Do you Start a New Design Project?'
  },
  {
    'id': 6,
    'name': 'Freelancing (Part 1)'
  },
  {
    'id': 7,
    'name': 'Freelancing (Part 2)'
  },
  {
    'id': 8,
    'name': 'The Tech Behind jamesqquick.com'
  },
  {
    'id': 9,
    'name': 'Teh Tech Behind SelfTeach.me'
  },
  {
    'id': 10,
    'name': 'Design Fundamentals (Part 1)',
  },
  {
    'id': 11,
    'name': 'Design Fundamentals (Part 2)',
  },
  {
    'id': 12,
    'name': 'Productivity: Tools, Tips, and Workflows'
  },
  {
    'id': 13,
    'name': 'The Future of Code with No Code'
  },
  {
    'id': 14,
    'name': 'Building the Perfect Desk Setup'
  },
  {
    'id': 15,
    'name': 'Everything You Need to Know to Get Started in SvelteKit'
  },
  {
    'id': 16,
    'name': 'Live Streaming for Beginners'
  },
  {
    'id': 17,
    'name': 'All Things Automated'
  },
  {
    'id': 18,
    'name': 'Amy Gives James a Design Consult'
  },
  {
    'id': 19,
    'name': 'Figma for Everyone'
  },
  {
    'id': 20,
    'name': 'Learning and Building in Public'
  },
  {
    'id': 21,
    'name': 'Getting Your First Dev Job'
  },
  {
    'id': 22,
    'name': 'Hiring a Designer or Getting Your First UI / UX Job'
  },
  {
    'id': 23,
    'name': 'IRL Freelance Proposal'
  },
  {
    'id': 24,
    'name': 'Getting Started on YouTube'
  },
  {
    'id': 25,
    'name': 'Starting your own Podcast'
  },
  {
    'id': 26,
    'name': 'How Blogging Can Change Your Career'
  },
  {
    'id': 27,
    'name': 'Talking to Some of Our Favorite Content Creators'
  },
  {
    'id': 28,
    'name': 'Our Favorite Things: A Crossover Episode with Web Dev Weekly'
  },
  {
    'id': 29,
    'name': 'Freelancing IRL: Unveiling a Site Redesign'
  },
  {
    'id': 30,
    'name': 'Wordpress in 2021'
  },
  {
    'id': 31,
    'name': 'Struggle Bus'
  },
  {
    'id': 32,
    'name': 'Getting Started with TypeScript'
  },
  {
    'id': 33,
    'name': 'Small Design Tweaks that Make All the Difference'
  },
  {
    'id': 34,
    'name': 'Getting git'
  },
  {
    'id': 35,
    'name': 'Crossover Episode with Purrfect Dev'
  },
  {
    'id': 36,
    'name': 'SVGs FTW'
  },
  {
    'id': 37,
    'name': 'Building a Course'
  }
];

let shiftIsOn= false
let firstEpisodeSelected = null;
const checkedBoxes ={};

//adding event listeners for key presses on Shift btn
body.addEventListener('keyup',(e)=>{
  if(e.key ==='Shift'){
    shiftIsOn = false
    console.log('shift is not being pressed')
  }
})

body.addEventListener('keydown',(e)=>{
  if(e.key ==='Shift'){
    shiftIsOn = true
    console.log('shift IS being pressed')
  }
})
// Render the list of episodes dynamically from the data instead of hardcoding
const renderEpisodes =()=>{
  const htmlString = episodes.map( episode=>{
    //this overwrites HTML default behavior, writing checked in the input attribute checks the checkbox, so we need to dynamically create 'checked' when our user clicks on a checkbox while holding down shift.
    const isChecked = checkedBoxes[episode.id]; 
    const checkedString = isChecked ? 'checked' : '';
    console.log(isChecked, checkedString)
    return `
     <li>
    <label for="episode-${episode.id}">
    <input ${checkedString} type="checkbox" name="episode-${episode.id}" id="episode-${episode.id}" onClick="handleCheckBoxClick(event,${episode.id})" />
         <span>${episode.id} || ${episode.name}</spa>
    </label>
  </li> `
  }).join('');
  episodeSection.innerHTML= htmlString;  
}
//To Do: if the shift key is being pressed, need to know the first episode click, and the last and  then mark everything between the first clicked and the last as checked.
const handleCheckBoxClick= (e, index)=>{
  if(firstEpisodeSelected && shiftIsOn) {
    if(firstEpisodeSelected < index){
      for(let i=firstEpisodeSelected; i<=index; i++){
        console.log('first then index', firstEpisodeSelected, index)
        //added the 'checked' statement 
        checkedBoxes[i]= true;
      }
    }else{
      //just in case user selects epise 10 and then episode 4
      for(let i=index; i <=firstEpisodeSelected; i++){
        checkedBoxes[i]= true
      }
    }
    }else{
      //toggling between 'checked' true and false, so if its false its now true and vice versa
      checkedBoxes[index] = !checkedBoxes[index];
    }
    //updating the first episode with the one we've clicked on 
    firstEpisodeSelected= index;
    renderEpisodes();
}


renderEpisodes();