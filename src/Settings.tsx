import { View, Text, ScrollView } from "@vendetta/metro/common";
import { General } from "@vendetta/ui/components";
import { playRussianRoulette } from "./index";

const Settings = () => (
    <ScrollView>
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
                Click below to play Russian Roulette with your plugins!
            </Text>
            <General.Button
                text="🎲 Spin the Roulette!"
                onPress={playRussianRoulette}
                style={{ backgroundColor: "#ff4444" }}
                textStyle={{ color: "#fff" }}
            />
        </View>
    </ScrollView>
);

export default Settings;
