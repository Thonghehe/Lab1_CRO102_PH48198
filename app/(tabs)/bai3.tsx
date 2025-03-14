import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';

const bai3: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.content}>
                    <CustomInput
                        title="Tên người dùng"
                        value={text}
                        onChangeText={setText}
                        placeholder="Nhập tên người dùng"
                        required={true}
                    />

                    <CustomInput
                        title="Mật khẩu"
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Nhâp mật khẩu"
                        required={true}
                        eyePassword={true}
                        secureTextEntry={!passwordVisible}
                        onPressEyeIcon={() => setPasswordVisible(!passwordVisible)}
                    />

                    <CustomInput
                        title="Xác nhận mật khẩu"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Xác nhận mật khẩu"
                        required={true}
                        eyePassword={true}
                        secureTextEntry={!confirmPasswordVisible}
                        onPressEyeIcon={() =>
                            setConfirmPasswordVisible(!confirmPasswordVisible)
                        }
                        error={
                            confirmPassword && confirmPassword !== password
                                ? 'Mật khẩu không khớp'
                                : ''
                        }
                    />

                    <CustomInput
                        title="Nhập email"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Nhập email"
                        required={true}
                        error={
                            email && (!email.includes('@') || !email.includes('.'))
                                ? 'Email không hợp lệ'
                                : ''
                        }
                        keyboardType="email-address"
                        description="Email là thứ duy nhất giúp bạn khôi phục mật khẩu"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    content: {
        padding: 20,
    },
});

export default bai3;