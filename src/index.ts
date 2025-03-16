import { storage } from "@vendetta/plugin";
import { addSettings } from "@vendetta/ui/settings";
import { showToast } from "@vendetta/ui/toasts";
import { removePlugin, getPlugins } from "@vendetta/plugins";
import { showConfirmationAlert } from "@vendetta/ui/alerts";
import Settings from "./Settings";

// Default settings storage
storage.settings ??= {
    allowReroll: false,
    excludeSelf: true
};

// Function to roll the dice and possibly remove a plugin
const playRussianRoulette = () => {
    // Get all installed plugins - using getPlugins() for v267014 compatibility
    const allPlugins = getPlugins();
    const pluginIds = Object.keys(allPlugins);
    
    // Filter out this plugin if excludeSelf is enabled
    const currentPluginId = window.__vendetta_loader__.plugins.find(p => p.manifest && p.manifest.name === "Russian-Roulette")?.id;
    
    const eligiblePluginIds = storage.settings.excludeSelf && currentPluginId
        ? pluginIds.filter(id => id !== currentPluginId)
        : pluginIds;
    
    // Check if there are enough plugins to play
    if (eligiblePluginIds.length === 0) {
        showToast("Not enough plugins to play!", getToastOptions("error"));
        return;
    }
    
    // Roll a number 1-6
    const luckyNumber = Math.floor(Math.random() * 6) + 1;
    
    // Check if the user is lucky (not getting 6)
    if (luckyNumber !== 6) {
        showToast(`You rolled a ${luckyNumber}. You're safe!`, getToastOptions("success"));
        return;
    }
    
    // Select a random plugin to remove
    const randomIndex = Math.floor(Math.random() * eligiblePluginIds.length);
    const pluginId = eligiblePluginIds[randomIndex];
    const pluginName = allPlugins[pluginId]?.manifest?.name || pluginId;
    
    // Show confirmation
    showConfirmationAlert({
        title: "Russian Roulette",
        content: `You rolled a ${luckyNumber}. The plugin "${pluginName}" will be removed!`,
        confirmText: "Proceed",
        cancelText: "Cancel",
        onConfirm: () => {
            try {
                removePlugin(pluginId);
                showToast(`Plugin "${pluginName}" removed!`, getToastOptions("danger"));
            } catch (error) {
                showToast(`Failed to remove plugin: ${error?.message || "Unknown error"}`, getToastOptions("error"));
            }
        }
    });
};

// Helper function for toast options compatibility
function getToastOptions(type) {
    // Check if old API or new API
    if (typeof showToast === "function" && showToast.length >= 2) {
        return { type };
    }
    return { content: type };
}

// Register settings in the Vendetta UI
let settingsEntry;
try {
    settingsEntry = addSettings("Russian Roulette", Settings);
} catch (e) {
    console.error("Failed to add settings:", e);
}

// Plugin start logic
export function onLoad() {
    showToast("Russian Roulette Plugin Loaded!", getToastOptions("info"));
}

// Plugin unload logic
export function onUnload() {
    if (settingsEntry && typeof settingsEntry.remove === "function") {
        settingsEntry.remove();
    }
    showToast("Russian Roulette Plugin Unloaded!", getToastOptions("info"));
}

// Export settings and function
export { playRussianRoulette, Settings };
