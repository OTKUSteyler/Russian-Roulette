import { registerSettings, unregisterSettings } from "@vendetta/settings";
import { showToast } from "@vendetta/ui/toasts";
import { removePlugin, listPlugins } from "@vendetta/plugins";
import { showConfirmationAlert } from "@vendetta/ui/alerts";
import Settings from "./Settings";

// Function to roll the dice and possibly remove a plugin
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

// Plugin start and stop logic
export const onLoad = () => {
    registerSettings("Russian Roulette", Settings); // Register settings UI
    showToast("Russian Roulette Plugin Loaded!", { type: "info" });
};

export const onUnload = () => {
    unregisterSettings("Russian Roulette"); // Unregister settings UI
    showToast("Russian Roulette Plugin Unloaded!", { type: "info" });
};

// Export the function so you can trigger it from the settings UI
export { playRussianRoulette };
