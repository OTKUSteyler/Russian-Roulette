import { registerSettings, unregisterSettings } from "@vendetta/settings";
import { showToast } from "@vendetta/ui/toasts";
import { removePlugin, listPlugins } from "@vendetta/plugins";
import { showConfirmationAlert } from "@vendetta/ui/alerts";
import Settings from "./Settings";

// Russian Roulette function
const playRussianRoulette = () => {
    const plugins = Object.keys(listPlugins()); // Get installed plugins
    if (plugins.length <= 1) {
        showToast("Not enough plugins to play!", { type: "error" });
        return;
    }

    const luckyNumber = Math.floor(Math.random() * 6) + 1; // Roll a number 1-6

    if (luckyNumber === 6) {
        showToast("You're lucky! No plugin removed.", { type: "success" });
    } else {
        const randomPlugin = plugins[Math.floor(Math.random() * plugins.length)];
        showConfirmationAlert(
            "Russian Roulette",
            `You rolled a ${luckyNumber}. The plugin "${randomPlugin}" will be removed!`,
            () => {
                removePlugin(randomPlugin);
                showToast(`Plugin "${randomPlugin}" removed!`, { type: "danger" });
            },
            "Proceed",
            "Cancel"
        );
    }
};

// Load Plugin
export const onLoad = () => {
    try {
        registerSettings("RussianRoulette", Settings);
        showToast("Russian Roulette Plugin Loaded!", { type: "info" });
    } catch (err) {
        console.error("Error loading settings:", err);
        showToast("Error loading settings!", { type: "error" });
    }
};

// Unload Plugin
export const onUnload = () => {
    try {
        unregisterSettings("RussianRoulette");
        showToast("Russian Roulette Plugin Unloaded!", { type: "info" });
    } catch (err) {
        console.error("Error unloading settings:", err);
    }
};

// Export function to settings
export { playRussianRoulette };
