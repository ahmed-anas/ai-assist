#!/usr/bin/env node

import { AIRunner } from "./lib/fixer-engine";


async function main() {
    let x = false;

    if(x){
        console.log('debugging');
        console.log(process.cwd());
        return;
    }

    const engine = new AIRunner();

    await engine.processCommand();
}

main();
