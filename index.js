// Code your solutions in this file

const friends = ["allen", "lucy", "david"];

function writeCards(friends, event){
    const updFriends = [];
    for(let i = 0; i<friends.length; i++){

     let message = `Thank you, ${friends[i]}, for the wonderful ${event} gift!`;
     updFriends.push(message); 
       
    }
    return updFriends;
}
//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
//writeCards(friends, "wedding");


function countDown(postiveInteger){
    while(postiveInteger>=0){
        console.log(postiveInteger);
        postiveInteger--;
    }

}

countDown(12);
