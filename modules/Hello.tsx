import React, {useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//Declaramos los props que recibe
export type Props={
    name: string;
    contadorBase?: number;
}

const Hello: React.FC<Props>=({
    name='Mike',
    contadorBase =0
})=>{
    const [contador, setContador] = useState(contadorBase); //useState

    const incrementar=()=>{
        setContador(contadorBase+1);
        console.log("Aumentando")
    }

    const restar=()=> {
        setContador(contadorBase > 0 ? contadorBase-1 : 0)
        console.log("Restando")
    }

    /* const getExclamationMarks = (numChars: number)=> numChars>0 ? Array(numChars+1).join('!'): '' ; */
    const getExclamationMarks=(num: number)=>{
        console.log("Función")
         return num>0 ? Array(num+1).join('!') : ''
    }

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                Quibo {name} {getExclamationMarks(contador) || ''}
            </Text>
            <View>
                <Button
                    title="Aumentar entusiasmo"
                    accessibilityLabel="incrementar"
                    onPress={incrementar}
                    color="blue"
                />
                <Button
                    title="Disminuir entusiasmo"
                    accessibilityLabel="disminuir"
                    onPress={restar}
                    color="red"
                />
            </View>
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16
      }
});

export default Hello;