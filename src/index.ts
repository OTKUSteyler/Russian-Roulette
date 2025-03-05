import { storage } from "@vendetta/plugin";
import settings from "./Settings";

// Function to get installed plugins
const getInstalledPlugins = () => Object.keys(vendetta.plugins.plugins);

// Russian Roulette Logic
const playRoulette = () => {
    const plugins = getInstalledPlugins();
    if (plugins.length === 0) {
        console.log("[Roulette] No plugins to remove.");
        return "No plugins installed.";
    }

    // Roll a number
    const roll = Math.floor(Math.random() * plugins.length);
    const chosenPlugin = plugins[roll];

    // Delete the chosen plugin
    vendetta.plugins.uninstallPlugin(chosenPlugin);
    console.log(`[Roulette] Removed plugin: ${chosenPlugin}`);
    return `Removed plugin: ${chosenPlugin}`;
};

export const onLoad = () => {
    console.log("Russian Roulette Plugin Loaded!");
};

export const onUnload = () => {
    console.log("Russian Roulette Plugin Unloaded!");
};

export { settings, playRoulette };
