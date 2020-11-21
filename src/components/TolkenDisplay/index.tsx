import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { sha1 } from '../../util/sha1';

const SECRET_KEY = 'lucasleolucasdiego';
const GENERATION_INTERVAL = 30000;

const TolkenDisplay : React.FC = () =>{
    const[token,setToken] = useState('123456')
    const[intervalId,setIntervalId] = useState(0);

    const tokenGenerator = () => {
        const counter = Math.floor(Date.now() / GENERATION_INTERVAL);
        const hash = sha1(SECRET_KEY + counter)
        const last4Bytes = hash.substring( hash.length - 8, hash.length)
        const decimal = parseInt(last4Bytes,16)
        let newToken = decimal % Math.pow(10,6) + ''
        newToken = newToken.padStart(6,'0')
        setToken(newToken)
    }

    useEffect(() => { 
        if(intervalId !== 0){
            clearInterval(intervalId);
        }
        tokenGenerator();
        setIntervalId(setInterval(tokenGenerator,GENERATION_INTERVAL));
    },[]);

    return(
        <View style={styles.container}>
            <Text style={styles.digits}>{token}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    digits: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#a11ec9'
    }
})

export default TolkenDisplay;