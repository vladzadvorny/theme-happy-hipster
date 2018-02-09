import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'icons';

// Lorem Ipsum is simply dummy text of the printing.
import Hello from './components/Hello';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Button transpatent onPress={() => this.setState({ hello: false })}>
          <Icon name="arrow-back" />
        </Button>
        <View title="Lorem Ipsum">
          <Hello hello={this.state.hello} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontWeight: 'bold'
  }
});
