import { storage } from "@vendetta/plugin";
import { showToast } from "@vendetta/ui/toasts";
import { removePlugin, listPlugins } from "@vendetta/plugins";
import { showConfirmationAlert } from "@vendetta/ui/alerts";
import Settings from "./Settings"; // ✅ Import Settings

// Function to roll the dice and possibly remove a plugin
export const playRoulette = () => {
    const plugins = Object.keys(listPlugins());
    if (plugins.length <= 1) {
        showToast("Not enough plugins to play!", { type: "error" });
        return;
    }

    const luckyNumber = Math.floor(Math.random() * 6) + 1;

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
    showToast("Russian Roulette Plugin Loaded!", { type: "info" });
};

export const onUnload = () => {
    showToast("Russian Roulette Plugin Unloaded!", { type: "info" });
};

// ✅ Register Settings
export { playRoulette, Settings };
