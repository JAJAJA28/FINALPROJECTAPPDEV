import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const data = [
  {
    id: '1',
    members: [
      {
        name: 'JOHN ANTHONY TIBAY',
        role: 'BACK/FRONT END DEVELOPER',
        definition: 'Responsible for server-side logic, APIs, and database management.',
        image: require('../assets/IMG5.jpg'),
        color: 'black',
        backgroundColor: 'rgba(9, 62, 64, 0.8)', // Dark teal
      },
      {
        name: 'NELVIC S. SEVIAL',
        role: 'FRONT END DEVELOPER',
        definition: 'Ensures the quality of products through rigorous testing.',
        image: require('../assets/IMG6.jpg'),
        color: 'black',
        backgroundColor: 'rgba(255, 165, 0, 0.7)', // Orange with opacity
      },
      {
        name: 'MHAXINE HORMILLOSA',
        role: 'RELEASE MANAGER',
        definition: 'Oversees the team and project goals, ensuring timely delivery.',
        image: require('../assets/IMG7.jpg'),
        color: 'black',
        backgroundColor: 'rgba(9, 62, 64, 0.8)', // Dark teal
      },
      {
        name: 'ROSE-ANN ARANA',
        role: 'UI/UX DEVELOPER',
        definition: 'Focuses on creating intuitive and visually appealing user interfaces.',
        image: require('../assets/IMG8.jpg'),
        color: 'black',
        backgroundColor: 'rgba(255, 165, 0, 0.7)',
      },
    ],
  },
  {
    id: '2',
    members: [
      {
        name: 'GRACELA SOSOBAN',
        role: 'PROJECT MANAGER',
        definition: 'Coordinates software releases and ensures smooth rollouts.',
        image: require('../assets/IMG9.jpg'),
        color: 'black',
        backgroundColor: 'rgba(9, 62, 64, 0.8)', // Dark teal
      },
      {
        name: 'JOYCE ANN RAPSING',
        role: 'ASSURANCE SPECIALIST',
        definition: 'Builds the client-side of applications using HTML, CSS, and JS.',
        image: require('../assets/IMG10.jpg'),
        color: 'black',
        backgroundColor: 'rgba(255, 165, 0, 0.7)',
      },
      {
        name: 'JOSH ANDREI PLABA',
        role: 'USER INSIGHT SPECIALIST',
        definition: 'Gathers user feedback to improve the product.',
        image: require('../assets/IMG11.jpg'),
        color: 'black',
        backgroundColor: 'rgba(9, 62, 64, 0.8)', // Dark teal
      },
      {
        name: 'CHRISTINE CINCO',
        role: 'DATABASE ADMINISTRATOR',
        definition: 'Manages and maintains the database systems.',
        image: require('../assets/IMG12.jpg'),
        color: 'black',
        backgroundColor: 'rgba(255, 165, 0, 0.7)',
      },
    ],
  },
];

export default function App() {
  const renderGroup = ({ item }) => (
    <View style={styles.page}>
      {item.members.map((member, index) => (
        <View
          key={index}
          style={[
            styles.card,
            {
              backgroundColor: member.backgroundColor,
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Alternate left and right alignment
            },
          ]}
        >
          <View style={styles.imageContainer}>
            <Image source={member.image} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.name, { color: member.color }]}>{member.name}</Text>
            <Text style={styles.role}>{member.role}</Text>
            <Text style={styles.definition}>{member.definition}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderGroup}
      keyExtractor={(item) => item.id}
      horizontal={false}
      pagingEnabled
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    width: '90%',
    borderRadius: 15,
    marginBottom: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    margin: 10,
    borderWidth: 3,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  role: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  definition: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
