/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
const cardContainer = document.querySelector(".cards")
axios
  .get("https://api.github.com/users/Benji171")

  .then((res) => {
    console.log(res);

    cardContainer.append(component(res))
    })
  .catch((err) => {
    console.log(`You hit an error: ${err}`);
  });

  
const followersArray = [];

axios
    .get('https://api.github.com/users/Benji171/followers')
    .then((res) => {
        const followersArray = res.data;
        const list = followersArray.map((user) => {
            return user.login;
        });
        const followersList = list.slice(0,7)
        return followersList;
    })
    .then((followersList) => {
        followersList.forEach((user) => {
            axios.get(`https://api.github.com/users/${user}`)
            .then((res) => {
              console.log(res);

              cardContainer.append(component(res))
            });
        });
    })
    .catch((err) => console.log(err));


function component(obj) {
  const card = document.createElement("div")
  const img = document.createElement("img")
  const cardInfo = document.createElement("div")
  const name = document.createElement("h3")
  const usrName = document.createElement("p")
  const location = document.createElement("p")
  const profile = document.createElement("p")
  const a = document.createElement("a")
  const followers = document.createElement("p")
  const following = document.createElement("p")
  const bio = document.createElement("p")

  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(usrName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  profile.appendChild(a)

  img.src = obj.data.avatar_url;
  name.textContent = obj.data.name;
  usrName.textContent = obj.data.login;
  location.textContent= `Location: ${obj.data.location}`
  profile.textContent= `Profile:`
  a.href = obj.data.html_url
  a.textContent = obj.data.html_url
  followers.textContent = `Followers: ${obj.data.followers}`
  following.textContent = `Following: ${obj.data.following}`
  bio.textContent = `Bio: ${obj.data.bio}`

  card.classList.add("card")
  cardInfo.classList.add("card-info")
  name.classList.add("name")
  usrName.classList.add("username")

  return card
}

console.log(followersArray)
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
