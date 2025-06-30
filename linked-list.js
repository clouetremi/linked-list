// linked-list.js


class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null // la tête de la liste vide au départ
    }

    append(value) {

        // On créer une variable qui correspon à nouveau Node
        const newNode = new Node(value);
        // Si mon Node actuel est null alors on lui attribue ma variable
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            // Tant que le nextNode de current n'est pas nul alors mon this.head (current) est attribué au nextNode
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            // Quand il est nul alors le nextNode de current est attribué à un newNode
            current.nextNode = newNode;
        }
    }
    
    prepend(value) {
        const newNode = new Node(value)
        // On attribue notre node actuel (this.head) au nextNode de notre newNode;
        newNode.nextNode = this.head;
        // Notre this.head actuel correspond à un nouveau node
        this.head = newNode;
    }

    size() {
        // On créer une varialbe à 0 pour compter
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.nextNode;
        }
        return count
    }

    getHead() {
        // Retourne this.head qui est déjà la première valeur de base
        return this.head;
    }
    
    tail() {
        // Si la liste est vide retourner null
        if (this.head.nextNode === null) return null;
        
        let current = this.head;

        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        return current; // On retourne le current qui correspond donc à au nextNode du dernier avant qu'il soit null
    }

    at(index) {

        if (index < 0) return null; // Index invalide si plus petit que zéro
        
        let current = this.head;
        let i = 0;
        
        while (current !== null && i < index) {
            current = current.nextNode;
            i++;
        }

        return current; // Retourne le Node à l'index ou null si hors limite
    }
    
    pop() {
        if (this.head === null) return null;

        if (this.head.nextNode === null) {
            // Un seul élément dans la liste
            // On créer une variable qui est la valeur de notre Node actuel
            const poppedValue = this.head.value;
            // On attribue à cette variable null pour la retourner
            this.head = null;
            return poppedValue;
        }

        let current = this.head;
        let previous = null;

        while (current.nextNode !== null) {
            previous = current;
            current = current.nextNode;
        }
        
        previous.nextNode = null; // Retire le dernier élément
        return current.value; // Retourne la valeur retirée
    }

    contains(value) {
        
        let current = this.head;
        
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }
    
    find(value) {

        let current = this.head;
        let index = 0;
        
        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }

        return null;
    }
    
    toString() {

        let current = this.head;
        let string = "";
        
        while (current !== null) {
            string += `(${current.value}) -> `;
            current = current.nextNode;
        }
        
        string += "null";
        return string;
    }
    
    insertAt(value, index) {
        const newNode = new Node(value);

        if (index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        }
        
        let current = this.head;
        let previous = null;
        let i = 0;
        
        while (current !== null && i < index) {
            previous = current;
            current = current.nextNode;
            i++;
        }

        // Insérer le nouveau noeud entre previous et current
        newNode.nextNode = current;
        previous.nextNode = newNode;
    }

    removeAt(index) {
        
        if (this.head === null) return; // Liste vide
        
        if (index === 0) {
            this.head = this.head.nextNode;
            return;
        }
        
        let current = this.head;
        let previous = null;
        let i = 0;

        while (current !== null && i < index) {
            previous = current;
            current = current.nextNode;
            i++;
        }

        if (current === null) {
            // Index invalide (trop grand)
            return;
        }
        
        // Retirer le noeud en "sautant" current et le retirer de la liste
        previous.nextNode = current.nextNode;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());