import { View, Text, StyleSheet } from 'react-native';

export default function LoginForm() {
    return (
        <View style={styles.formContainer}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.placeholder}>[Placeholder: Login UI]</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    placeholder: {
        color: '#ccc',
        textAlign: 'center',
    }
});












{/* 👈 Put your Username Input, Password Input, and Login Button here later */}