import { useState } from "react";
import { View, Text } from "@vendetta/metro/common";
import { Switch } from "@vendetta/ui/components";
import { storage } from "@vendetta/plugin";

export default function Settings() {
    const [isEnabled, setIsEnabled] = useState(storage.enableRoulette ?? true);

    const togglePlugin = () => {
        setIsEnabled(!isEnabled);
        storage.enableRoulette = !isEnabled;
    };

    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
                Enable Russian Roulette:
            </Text>
            <Switch value={isEnabled} onValueChange={togglePlugin} />
        </View>
    );
}
