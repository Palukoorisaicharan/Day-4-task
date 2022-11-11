var obj1 = {"name":"Sai","Age":"20"};
        var obj2 = {"Age":"20","name":"Sai"};

var obj=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            obj=false;
            break;
        }
    }
}
else {
    obj=false;
}
console.log("Object is equal"+obj);