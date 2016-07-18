"use strict"

let done = new Map();
function routes(rights, downs) {
    let key = rights + "_" + downs;
    if (done.has(key))
        return done.get(key);
    if (rights == 0 || downs == 0)
        return 1;
    let rightRoutes = routes(rights - 1, downs);
    let downRoutes = routes(rights, downs - 1);
    let total = rightRoutes + downRoutes;
    done.set(key, total);
    return total;
}

console.log(routes(20, 20));
