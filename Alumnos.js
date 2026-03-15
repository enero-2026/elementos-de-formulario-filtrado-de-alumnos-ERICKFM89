import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Alumnos = () => {

  const [alumnos, setAlumnos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [buscaAlumno, setBuscaAlumno] = useState(""); 


  useEffect(() => {
    console.log("Pantalla cargada");
  }, []);


  useEffect(() => {
    const listaSimulada = [
      { nombre: 'CANDELARIA MORA SAMANTHA', matricula: '2114354' },
      { nombre: 'CANTU SILVA JAVIER', matricula: '2111889' },
      { nombre: 'CARMONA LOZANO ANGEL EMILIANO', matricula: '2069119' },
      { nombre: 'CASTILLO ACOSTA JORGE', matricula: '2132842' },
      { nombre: 'DAVILA GONZALEZ ALDO ADRIAN', matricula: '1994122' },
      { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018230' },
      { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '21045641' },
      { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '20182301' },
      { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '2104564' },
      { nombre: 'FLORES LÓPEZ DIEGO', matricula: '2066033' },
      { nombre: 'FLORES MARTINEZ ERICK ADRIAN', matricula: '2132976' },
      { nombre: 'GARZA AVALOS DIEGO', matricula: '2066114' },
      { nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL', matricula: '2031243' },
      { nombre: 'GRANJA PEÑA DIEGO', matricula: '20647331' },
      { nombre: 'IBARRA RODRIGUEZ ALEXIS', matricula: '20312431' },
      { nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN', matricula: '2064733' },
      { nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA', matricula: '2094647' },
      { nombre: 'MIRELES VELAZQUEZ ALEJANDRO', matricula: '2005102' },
      { nombre: 'MONSIVAIS SALAZAR ANDRES', matricula: '2064574' },
      { nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA', matricula: '2024783' },
      { nombre: 'PEÑA MUNGARRO LUIS ANGEL', matricula: '2066077' },
      { nombre: 'PUENTE REYNOSO JULIO CESAR', matricula: '2092151' },
      { nombre: 'RAMIREZ LOPEZ BRYAN', matricula: '2103708' },
      { nombre: 'RAMOS AVILA LILIANA VALERIA', matricula: '2115192' },
      { nombre: 'RICO JAUREGUI MAURICIO', matricula: '2037503' },
      { nombre: 'RIVERA LUNA ADRIAN', matricula: '2131513' },
      { nombre: 'RIVERA REYNA JOSE EMILIO', matricula: '2013503' },
      { nombre: 'RODRIGUEZ OLVERA ROSA ISELA', matricula: '2004613' },
      { nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL', matricula: '2133022' },
      { nombre: 'SANCHEZ GALARZA JUAN CARLOS', matricula: '2026061' },
      { nombre: 'SOLIS ORTIZ ALFREDO', matricula: '2095320' },
      { nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL', matricula: '2025350' },
      { nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL', matricula: '2103895' },
      { nombre: 'ZACATENCO OLIVE RODRIGO', matricula: '1857791' },
      { nombre: 'ZAVALA CANTU TERESA MARGARITA', matricula: '2025218' }
    ];

    setTimeout(() => {
      setAlumnos(listaSimulada);
      setCargando(false);
    }, 1500);

  }, []);


  const alumnosFiltrados = alumnos.filter((alumno) =>
    alumno.nombre.toLowerCase().includes(buscaAlumno.toLowerCase()) ||
    alumno.matricula.includes(buscaAlumno)
  );


  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 10 }}>Cargando lista</Text>
      </View>
    );
  }

  if (alumnos.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No hay alumnos disponibles</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Lista de Alumnos</Text>

      {/* Barra de búsqueda */}
      <Searchbar
        placeholder="Buscar alumno"
        value={buscaAlumno}
        onChangeText={setBuscaAlumno}
        style={styles.search}
      />

      <FlatList
        data={alumnosFiltrados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.matricula}>Matricula: {item.matricula}</Text>
          </View>
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  search:{
    marginBottom:15
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  nombre: {
    fontSize: 16,
    fontWeight: '600',
  },
  matricula: {
    fontSize: 14,
    color: '#8a24af',
    marginTop: 4,
  },
});

export default Alumnos;