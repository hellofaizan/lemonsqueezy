import { resolve } from "path";
import * as shell from "shelljs";

/**
 * Change directory to root
 */

shell.cd(resolve(__dirname, ".."));

/**
 * Copy package.json to lib
 */

shell.cp("./package.json", "./lib/package.json");
