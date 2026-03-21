import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator, 
  TextInput 
} from 'react-native';

const Alumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    // Lista de alumnos de tu facultad
    const listaSimulada = [
      { nombre: 'CANDELARIA MORA SAMANTHA', matricula: '2114354' },
      { nombre: 'CANTU SILVA JAVIER', matricula: '2111889' },
      { nombre: 'CARMONA LOZANO ANGEL EMILIANO', matricula: '2069119' },
      { nombre: 'CASTILLO ACOSTA JORGE', matricula: '2132842' },
      { nombre: 'DAVILA GONZALEZ ALDO ADRIAN', matricula: '1994122' },
      { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018230' },
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
    }, 1000);
  }, []);

  // Lógica de filtrado: se ejecuta cada vez que cambia 'busqueda' o 'alumnos'
  const alumnosFiltrados = alumnos.filter((alumno) => {
    const termino = busqueda.toUpperCase();
    return (
      alumno.nombre.toUpperCase().includes(termino) || 
      alumno.matricula.includes(termino)
    );
  });

  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#C9A84C" />
        <Text style={styles.loadingText}>Cargando alumnos de FCFM...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de Alumnos</Text>
      
      <TextInput
        style={styles.inputBusqueda}
        placeholder="Escribe nombre o matrícula..."
        placeholderTextColor="#8A96B0"
        value={busqueda}
        onChangeText={(texto) => setBusqueda(texto)}
        clearButtonMode="while-editing" // Útil para iOS
      />

      <FlatList
        data={alumnosFiltrados}
        keyExtractor={(item) => item.matricula}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.matricula}>Matrícula: {item.matricula}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No se encontraron coincidencias</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#0F1624',  // Azul noche profundo
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1624',
  },
  loadingText: {
    marginTop: 12,
    color: '#8A96B0',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 22,
    textAlign: 'center',
    color: '#C9A84C',           // Dorado elegante
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  inputBusqueda: {
    height: 48,
    backgroundColor: '#1C2841', // Azul marino medio
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#2E3F63',     // Borde azul suave
    fontSize: 15,
    color: '#E8EDF5',           // Texto claro
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  item: {
    backgroundColor: '#1C2841', // Azul marino medio
    padding: 16,
    marginVertical: 5,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#C9A84C', // Acento dorado en el borde izquierdo
    // Sombras para Android y Web
    elevation: 3,
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  nombre: {
    fontSize: 15,
    fontWeight: '700',
    color: '#E8EDF5',           // Blanco azulado
    letterSpacing: 0.4,
  },
  matricula: {
    fontSize: 13,
    color: '#C9A84C',           // Dorado para la matrícula
    marginTop: 5,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#4A5568',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});

export default Alumnos;