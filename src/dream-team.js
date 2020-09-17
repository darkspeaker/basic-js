module.exports = function createDreamTeam(friends) {
  if(Array.isArray(friends)){
    return friends.filter(friend => typeof(friend) === "string").map(i => i.replace(/\s/g, "").substr(0, 1).toUpperCase()).sort().join("") 
  }
  else{
    return false;
  }
};