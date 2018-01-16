var todo = ['AAAA', 'BBBB', 'CCCC', 'DDDD'];

for(i=0; i<todo.length; i++){
    var list = document.createElement('li');
    list.textContent = todo[i];
    document.getElementById('list').appendChild(list);
}
