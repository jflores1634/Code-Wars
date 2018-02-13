function abbrevName(name){
    var split = name.split(" ");
    return (split[0][0] + "." + split[1][0]).toUpperCase();
}
