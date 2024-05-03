import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';

export default function Cita(props) {

    const procesoEliminar = (id) => {
        props.eliminarCitas(id);
    }

    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.texto}>{props.item.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario: </Text>
                <Text style={styles.texto}>{props.item.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Síntomas: </Text>
                <Text style={styles.texto}>{props.item.sintomas}</Text>
            </View>
            <TouchableHighlight onPress={() => procesoEliminar(props.item.id)} style={styles.btnEliminar} underlayColor="transparent">
                <Text style={styles.textoEliminar}>Eliminar</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#E6FFC9', 
        marginBottom: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 4, 
        elevation: 5, 
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'transparent', 
        marginVertical: 10,
    },
    textoEliminar: {
        color: '#000', 
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
