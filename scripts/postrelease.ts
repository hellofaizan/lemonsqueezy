import { resolve } from "path";
import * as shell from "shelljs";

/**
 * Change directory to root
 */

shell.cd(resolve(__dirname, ".."));

/**
 * Remove build files
 */

shell.rm("-R", ["./lib"]);
