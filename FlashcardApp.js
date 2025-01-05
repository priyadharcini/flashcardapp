import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert
} from 'react-native';

export default function FlashcardApp() {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [quizMode, setQuizMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  // Add a new flashcard
  const addFlashcard = () => {
    if (question.trim() === '' || answer.trim() === '') {
      Alert.alert('Error', 'Question and Answer cannot be empty');
      return;
    }
    setFlashcards([...flashcards, { question, answer }]);
    setQuestion('');
    setAnswer('');
  };

  // Start the quiz
  const startQuiz = () => {
    if (flashcards.length === 0) {
      Alert.alert('Error', 'Add flashcards before starting the quiz');
      return;
    }
    setQuizMode(true);
    setCurrentCardIndex(0);
    setScore(0);
    setUserAnswer('');
  };

  // Check the user's answer and move to the next question
  const checkAnswer = () => {
    const currentCard = flashcards[currentCardIndex];
    if (userAnswer.trim().toLowerCase() === currentCard.answer.trim().toLowerCase()) {
      setScore(score + 1);
    }

    if (currentCardIndex + 1 < flashcards.length) {
      setCurrentCardIndex(currentCardIndex + 1);
      setUserAnswer('');
    } else {
      Alert.alert('Quiz Completed', `Your score: ${score + 1}/${flashcards.length}`);
      setQuizMode(false);
    }
  };

  // Render flashcards for viewing
  const renderFlashcard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>Q: {item.question}</Text>
      <Text style={styles.cardText}>A: {item.answer}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {quizMode ? (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>
            {flashcards[currentCardIndex].question}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your Answer"
            value={userAnswer}
            onChangeText={setUserAnswer}
          />
          <Button title="Submit Answer" onPress={checkAnswer} />
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Question"
            value={question}
            onChangeText={setQuestion}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Answer"
            value={answer}
            onChangeText={setAnswer}
          />
          <Button title="Add Flashcard" onPress={addFlashcard} />
          <FlatList
            data={flashcards}
            renderItem={renderFlashcard}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button title="Start Quiz" onPress={startQuiz} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
  },
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert
} from 'react-native';

export default function FlashcardApp() {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [quizMode, setQuizMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  // Add a new flashcard
  const addFlashcard = () => {
    if (question.trim() === '' || answer.trim() === '') {
      Alert.alert('Error', 'Question and Answer cannot be empty');
      return;
    }
    setFlashcards([...flashcards, { question, answer }]);
    setQuestion('');
    setAnswer('');
  };

  // Start the quiz
  const startQuiz = () => {
    if (flashcards.length === 0) {
      Alert.alert('Error', 'Add flashcards before starting the quiz');
      return;
    }
    setQuizMode(true);
    setCurrentCardIndex(0);
    setScore(0);
    setUserAnswer('');
  };

  // Check the user's answer and move to the next question
  const checkAnswer = () => {
    const currentCard = flashcards[currentCardIndex];
    if (userAnswer.trim().toLowerCase() === currentCard.answer.trim().toLowerCase()) {
      setScore(score + 1);
    }

    if (currentCardIndex + 1 < flashcards.length) {
      setCurrentCardIndex(currentCardIndex + 1);
      setUserAnswer('');
    } else {
      Alert.alert('Quiz Completed', `Your score: ${score + 1}/${flashcards.length}`);
      setQuizMode(false);
    }
  };

  // Render flashcards for viewing
  const renderFlashcard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>Q: {item.question}</Text>
      <Text style={styles.cardText}>A: {item.answer}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {quizMode ? (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>
            {flashcards[currentCardIndex].question}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your Answer"
            value={userAnswer}
            onChangeText={setUserAnswer}
          />
          <Button title="Submit Answer" onPress={checkAnswer} />
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Question"
            value={question}
            onChangeText={setQuestion}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Answer"
            value={answer}
            onChangeText={setAnswer}
          />
          <Button title="Add Flashcard" onPress={addFlashcard} />
          <FlatList
            data={flashcards}
            renderItem={renderFlashcard}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button title="Start Quiz" onPress={startQuiz} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
  },
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
  },
});