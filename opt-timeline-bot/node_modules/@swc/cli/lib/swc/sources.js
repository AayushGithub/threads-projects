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
    globSources: ()=>globSources,
    isCompilableExtension: ()=>isCompilableExtension,
    splitCompilableAndCopyable: ()=>splitCompilableAndCopyable,
    requireChokidar: ()=>requireChokidar,
    watchSources: ()=>watchSources
});
const _fastGlob = /*#__PURE__*/ _interopRequireDefault(require("fast-glob"));
const _slash = /*#__PURE__*/ _interopRequireDefault(require("slash"));
const _fs = require("fs");
const _path = require("path");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
async function globSources(sources, includeDotfiles = false) {
    const globConfig = {
        dot: includeDotfiles,
        nodir: true
    };
    const files = await Promise.all(sources.filter((source)=>includeDotfiles || !(0, _path.basename)(source).startsWith(".")).map((source)=>{
        return new Promise((resolve)=>{
            (0, _fs.stat)(source, (err, stat)=>{
                if (err) {
                    resolve([]);
                    return;
                }
                if (!stat.isDirectory()) {
                    resolve([
                        source
                    ]);
                } else {
                    (0, _fastGlob.default)((0, _slash.default)((0, _path.join)(source, "**")), globConfig).then((matches)=>resolve(matches)).catch(()=>resolve([]));
                }
            });
        });
    }));
    return Array.from(new Set(files.flat()));
}
function isCompilableExtension(filename, allowedExtension) {
    const ext = (0, _path.extname)(filename);
    return allowedExtension.includes(ext);
}
function splitCompilableAndCopyable(files, allowedExtension, copyFiles) {
    const compilable = [];
    const copyable = [];
    for (const file of files){
        const isCompilable = isCompilableExtension(file, allowedExtension);
        if (isCompilable) {
            compilable.push(file);
        } else if (copyFiles) {
            copyable.push(file);
        }
    }
    return [
        compilable,
        copyable
    ];
}
async function requireChokidar() {
    try {
        const { default: chokidar  } = await Promise.resolve().then(()=>/*#__PURE__*/ _interopRequireWildcard(require("chokidar")));
        return chokidar;
    } catch (err) {
        console.error("The optional dependency chokidar is not installed and is required for " + "--watch. Chokidar is likely not supported on your platform.");
        throw err;
    }
}
async function watchSources(sources, includeDotfiles = false) {
    const chokidar = await requireChokidar();
    return chokidar.watch(sources, {
        ignored: includeDotfiles ? undefined : (filename)=>(0, _path.basename)(filename).startsWith("."),
        ignoreInitial: true,
        awaitWriteFinish: {
            stabilityThreshold: 50,
            pollInterval: 10
        }
    });
}

//# sourceMappingURL=sources.js.map