import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [a, seta] = useState(0)
  const [b, setb] = useState(0)
  const [a2, seta2] = useState(0)
  const [b2, setb2] = useState(0)
  const [c, setc] = useState(0)
  const [text, setText] = useState('')
  const [delta, setdelta] = useState(0)
  const [x2, setx2] = useState(0)
  const [x1, setx1] = useState(0)
  const [ans, setans] = useState(0)
  const [ak0, setak0] = useState(false)
  const [display1, setdisplay1] = useState(false)
  const [display2, setdisplay2] = useState(false) 
  const [display3, setdisplay3] = useState(false) 
  const [displaydeg1, setdisdeg1] = useState(true) 
  const [displaydeg2, setdisdeg2] = useState(false) 
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Sol-Equation App</Text>

      <View style={styles.deg}>
        <Text style={styles.textdeg}>Deg</Text>

        <TouchableOpacity style={[styles.button,{backgroundColor:(displaydeg1 ? "yellow" : "white")}]}
          onPress={()=>{
            setdisdeg1(true) 
            setdisdeg2(false)
          }}
        >
          <Text style={styles.num}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,{backgroundColor:(displaydeg2 ? "yellow" : "white")}]}
          onPress={()=>{
            setdisdeg1(false) 
            setdisdeg2(true)
          }}
        >
          <Text style={styles.num}>2</Text>
        </TouchableOpacity>
      </View>

      <View style={{display:(displaydeg2 ? "flex" : "none"), justifyContent:'center', alignItems:'center'}}>
        <View style={styles.deg2}>
          <View style={styles.inpb}>
            <TextInput
              style={styles.input}
              onChangeText={(vala2) => seta2(parseInt(vala2,10))}
            />
            <Text style={styles.textInput}>x^2</Text>
          </View>

          <View style={styles.inpb}>
            <TextInput
              style={styles.input} 
              onChangeText={(valb2) => setb2(parseInt(valb2,10))}
            />
            <Text style={styles.textInput}>x</Text>
          </View>
      
          <View style={styles.inpb}>
            <TextInput
              style={styles.input} 
              onChangeText={(valc) => setc(parseInt(valc,10))}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.sol}
          onPress={() => {
            setdelta(b2**2 - 4*a2*c) 
            if (delta > 0){
              setx1((-b2 + delta**0.5) / 2*a2)
              setx2((-b2 - delta**0.5) / 2*a2)
              setdisplay1(true)
              setdisplay2(false)
              setdisplay3(false)
            }
            else if (delta === 0){
              setx1(-b2/2*a2)
              setdisplay1(false)
              setdisplay2(true)
              setdisplay3(false)
            }
            else{
              setdisplay1(false)
              setdisplay2(false)
              setdisplay3(true)
            }
          }}
        >
          <Text style={styles.soltext}>SOLVE</Text>
        </TouchableOpacity>

        <View style={{display:(display1 ? "flex" : "none")}}>
          <Text>x1 = {x1}</Text>
          <Text>x2 = {x2}</Text>
        </View>

        <View style={{display:(display3 ? "flex" : "none")}}>
          <Text>No Solution!</Text>
        </View>

        <View style={{display:(display2 ? "flex" : "none")}}>
          <Text>x1 = x2 = {x1}</Text>
        </View>
      </View>

      <View style={{display:(displaydeg1 ? "flex" : "none"), justifyContent:'center', alignItems:'center'}}>
        <View style={styles.deg2}>
          <View style={styles.inpb}>
            <TextInput
              style={styles.input} 
              onChangeText={(vala) => seta(parseInt(vala,10))}
            />
            <Text style={styles.textInput}>x</Text>
          </View>
      
          <View style={styles.inpb}>
            <TextInput
              style={styles.input} 
              onChangeText={(valb) => setb(parseInt(valb,10))}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.sol}
          onPress={() => {
            if (a === 0){
              setak0(false)
            }
            else{
              setak0(true)
              setans(-b/a)
            }
          }}
        >
          <Text style={styles.soltext}>SOLVE</Text>
        </TouchableOpacity>
        <Text style={{display:(ak0 ? "flex" : "none")}}>x = {ans}</Text>
        <Text style={{display:(ak0 ? "none" : "flex")}}>No Solution!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box:{
    justifyContent:'center', 
    alignItems:'center',
  },
  title:{
    marginTop:75, 
    fontSize: 30,
    fontWeight:'600'
  },
  deg:{
    flexDirection:'row',
    marginTop: 10,
  },
  textdeg:{
    fontSize:25,
    marginRight:10,
  },
  num:{
    fontSize:20,
  },
  button:{
    borderWidth: 1.5,
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    height:45, 
    width:45,
    marginLeft:10,
  },
  deg2:{
    flexDirection:'row',
    marginTop:30,
  },
  inpb:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:20,
    marginRight:20,
  },
  textInput:{
    fontSize:20,
    marginLeft:5,
    fontWeight:'300'
  },
  input:{
    height:40, 
    width:50,
    borderWidth:1.5,
    borderRadius:3,
    paddingLeft:3,
    fontSize:15,
  },
  sol:{
    borderWidth:2,
    borderRadius:3,
    width:125,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 30,
    marginBottom: 20,
  },
  soltext:{
    fontSize:25,
    fontWeight:'400',
  }
});
