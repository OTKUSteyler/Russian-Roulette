import { storage } from "@vendetta/plugin";
import { addSettings } from "@vendetta/ui/settings";
import { showToast } from "@vendetta/ui/toasts";
import { removePlugin, listPlugins } from "@vendetta/plugins";
import { showConfirmationAlert } from "@vendetta/ui/alerts";
import Settings from "./Settings"; // Ensure this file exists

// Default settings storage
storage.settings ??= {
    allowReroll: false, // Example setting
};

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

// Register settings in the Vendetta UI
const settingsEntry = addSettings("Russian Roulette", Settings);

// Plugin start logic
export function onLoad() {
    showToast("Russian Roulette Plugin Loaded!", { type: "info" });
}

// Plugin unload logic
export function onUnload() {
    settingsEntry.remove(); // Remove settings when unloading
    showToast("Russian Roulette Plugin Unloaded!", { type: "info" });
}

// Export settings and function
export { playRussianRoulette, Settings };
