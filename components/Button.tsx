import { TouchableOpacity, Text } from 'react-native';

const Button = ({ label, onPress }: { label: string, onPress: () => void }) => {
    return (
        <TouchableOpacity 
            className="m-1 px-4 py-2 bg-yellow-500 rounded-md" 
            onPress={onPress}
        >
            <Text className="text-white text-center font-bold">{label}</Text>
        </TouchableOpacity>
    );
}

export default Button;
    