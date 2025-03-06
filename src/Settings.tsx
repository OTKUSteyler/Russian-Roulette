import { View, Text, Button } from "@vendetta/metro/common";
import { General } from "@vendetta/ui/components";
import { playRoulette } from "./index"; // ✅ Correct import

const Settings = () => (
    <View>
        <Text>Welcome to Russian Roulette!</Text>
        <Button text="Spin the Wheel" onPress={playRoulette} />
    </View>
);

export default Settings;
