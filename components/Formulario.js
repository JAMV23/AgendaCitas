import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DateTimePickerModal from "react-native-modal-datetime-picker";

function Formulario({ navigation }) {

    // DataPicker

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    // Fecha
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const confirmarFecha = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    // Hora
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    const confirmarHora = (date) => {
        console.warn("A date has been picked: ", date);
        hideTimePicker();
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.formulario}>
                    <Text style={[styles.label, { color: 'white' }]}>Paciente: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                    />
                </View>
                <View style={styles.formulario}>
                    <Text style={[styles.label, { color: 'white' }]}>Dueño: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                    />
                </View>
                <View style={styles.formulario}>
                    <Text style={[styles.label, { color: 'white' }]}>Telefono de contacto: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Citas" onPress={() => navigation.navigate('Citas')} color="white" />
                </View>
                <View style={styles.formulario}>
                    <Text style={[styles.label, { color: 'white' }]}>Síntomas: </Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                    />
                </View>

                <View style={styles.formulario}>
                    <Button title="Seleccione fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                </View>
                <View style={styles.formulario}>
                    <Button title="Seleccionar hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                </View>
            </View>
        </>
    );
}

function CitasScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Citas Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Formulario" component={Formulario} />
                <Stack.Screen name="Cita" component={CitasScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    formulario: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        color: 'white',
    },

    buttonContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        padding: 10,
        zIndex: 1,
    },
});
