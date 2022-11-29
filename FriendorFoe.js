//o - output should be list of names with 4 letters in their name 
//i- list of names 
//c - only 4 letter names are friends 
//e - 

function friend(friends){
    let newFriends = friends.filter((n) => n.length  === 4 )
    console.log(newFriends) 

}
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])
//["Ryan", "Jimmy", "123", "4", "Cool Man"]
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]