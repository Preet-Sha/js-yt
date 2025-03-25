const myobject={
    js:'javascript',
    cpp:'c++',
    rb : 'ruby',
    swift : 'swipt by apple'
}

//for in loop is used to iterate on object it can be used in another also

for (const key in myobject) {
    console.log(`${key} shortcut for ${myobject[key]}`);
    
}

//for array (for in ) here we get key in array whereas in for of we get values
//for in not applicable in map because it is not iterable
