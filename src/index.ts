import { storage } from "@vendetta/plugin";
import { addSettings } from "@vendetta/ui/settings";
import { showToast } from "@vendetta/ui/toasts";
import { removePlugin, listPlugins } from "@vendetta/plugins";
import { showConfirmationAlert } from "@vendetta/ui/alerts";
import Settings from "./Settings";

// Default settings storage with more configuration options
storage.settings ??= {
    allowReroll: false,
    excludeSelf: true, // Prevent removing this plugin
    chanceToRemove: 1, // 1 in 6 chance by default
    confirmRemoval: true // Whether to show confirmation dialog
};

// Function to roll the dice and possibly remove a plugin
const playRussianRoulette = () => {
    // Get all installed plugins
    const allPlugins = Object.entries(listPlugins());
    
    // Filter out this plugin if excludeSelf is enabled
    const currentPluginId = (window as any).__VENDETTA_PLUGIN_ID__;
    const plugins = storage.settings.excludeSelf 
        ? allPlugins.filter(([id]) => id !== currentPluginId)
        : allPlugins;
    
    // Check if there are enough plugins to play
    if (plugins.length === 0) {
        showToast("Not enough plugins to play!", { type: "error" });
        return;
    }
    
    // Roll a number 1-6
    const luckyNumber = Math.floor(Math.random() * 6) + 1;
    
    // Check if the user is lucky (not getting the removal number)
    if (luckyNumber !== storage.settings.chanceToRemove) {
        showToast(`You rolled a ${luckyNumber}. You're safe!`, { type: "success" });
        return;
    }
    
    // Select a random plugin to remove
    const randomIndex = Math.floor(Math.random() * plugins.length);
    const [pluginId, pluginInfo] = plugins[randomIndex];
    
    const removeSelectedPlugin = () => {
        try {
            removePlugin(pluginId);
            showToast(`Plugin "${pluginInfo.name || pluginId}" removed!`, { type: "danger" });
        } catch (error) {
            showToast(`Failed to remove plugin: ${error.message}`, { type: "error" });
        }
    };
    
    // Show confirmation or remove directly based on settings
    if (storage.settings.confirmRemoval) {
        showConfirmationAlert(
            "Russian Roulette",
            `You rolled a ${luckyNumber}. The plugin "${pluginInfo.name || pluginId}" will be removed!`,
            removeSelectedPlugin,
            "Proceed",
            "Cancel"
        );
    } else {
        removeSelectedPlugin();
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
    settingsEntry.remove();
    showToast("Russian Roulette Plugin Unloaded!", { type: "info" });
}

// Export settings and function
export { playRussianRoulette, Settings };
