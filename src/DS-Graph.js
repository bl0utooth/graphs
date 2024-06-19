class PersonNode{
    constructor(name){
        this.name = name;
        this.adjacent = []
    }
}

class FriendGraph{
    constructor(){
        this.nodes = new Set();
    }
    addPerson(node){
        this.nodes.add(node)
    }
    addPeople(peopleList){
        for(let node of peopleList){
            this.addPerson(node)
        }
    }
    setFriends(person1, person2){
        person1.adjacent.add(person2)
        person2.adjacent.add(person1)
    }
}



const homer = new PersonNode('homer simpson')
const marge = new PersonNode('marge simpson')
const maggie = new PersonNode('maggie simpson')
const lisa = new PersonNode('lisa simpson')
const grandpa = new PersonNode('grandpa simpson')

const friends = new FriendGraph();
friends.addPeople([homer, marge, maggie, lisa, grandpa])
friends.setFriends(homer, marge)
friends.setFriends(homer, lisa)
friends.setFriends(homer, maggie)