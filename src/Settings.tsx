import { View, Text } from "@vendetta/metro/common";
import { General } from "@vendetta/ui/components";

export default function Settings() {
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Russian Roulette Settings
            </Text>
            <General.Switch 
                label="Enable Roulette" 
                value={true} 
                onValueChange={(val) => console.log("Toggled:", val)} 
            />
        </View>
    );
}
