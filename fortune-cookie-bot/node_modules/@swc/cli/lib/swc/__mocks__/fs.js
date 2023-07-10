"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    stat: ()=>stat,
    default: ()=>_default
});
const fsMock = jest.createMockFromModule('fs');
let mockStats = {};
function setMockStats(stats) {
    Object.entries(stats).forEach(([path, stats])=>{
        mockStats[path] = stats;
    });
}
function resetMockStats() {
    mockStats = {};
}
function stat(path, cb) {
    const result = mockStats[path];
    if (result instanceof Error) {
        cb(result, undefined);
    } else {
        cb(undefined, result);
    }
}
fsMock.setMockStats = setMockStats;
fsMock.resetMockStats = resetMockStats;
fsMock.stat = stat;
const _default = fsMock;

//# sourceMappingURL=fs.js.map