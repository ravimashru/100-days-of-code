class Node {
  constructor(value) {
    this.value = value;
    this.isLeaf = false;
    this.children = [];
    for (let i = 0; i < 26; i++) {
      this.children[i] = null;
    }
  }
}

class Trie {
  constructor() {
    this.root = new Node('');
  }

  getIndex(letter) {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  insert(word) {
    let index = 0;
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
      index = this.getIndex(word[i]);
      if (curr.children[index] === null) {
        curr.children[index] = new Node(word[i]);
      }

      curr = curr.children[index];
    }

    curr.isLeaf = true;
  }

  getPrefix(word) {
    let prefix = '';
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
      const index = this.getIndex(word[i]);
      if (curr.children[index] === null) {
        return word;
      }
      prefix += curr.children[index].value;
      if (curr.children[index].isLeaf) {
        break;
      }
      curr = curr.children[index];
    }

    return prefix;
  }
}

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const trie = new Trie();
  dictionary.forEach((prefix) => trie.insert(prefix));

  return sentence
    .split(' ')
    .map((word) => trie.getPrefix(word))
    .join(' ');
};
