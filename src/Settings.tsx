import { View, Text } from "@vendetta/metro/common";
import { General } from "@vendetta/ui/components";
import { playRoulette } from "./index";

export default function Settings() {
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
                Click below to play Russian Roulette with your plugins!
            </Text>
            <General.Button
                text="🎲 Spin the Roulette!"
                onPress={playRoulette}
                style={{ backgroundColor: "#ff4444" }}
                textStyle={{ color: "#fff" }}
            />
        </View>
    );
}
