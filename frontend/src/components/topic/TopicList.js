// Danh sách các từ hay sai
import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import {Thumbnail, Card, CardItem, Body, Left} from 'native-base';
import CacheableImage from 'react-native-cacheable-image';
import theme, * as fromTheme from '../../theme';

const welcome = require('../../../assets/images/logo.jpg');

class TopicCard extends Component {
    render() {
        return (
            <Card style={StyleSheet.flatten(styles.achievementCard)}>
                <CardItem>
                    <Left>
                        <Thumbnail source={welcome}/>
                        <Body>
                        <Text style={styles.achievementTitle}>{this.props.title}</Text>
                        <Text note>{this.props.description}</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        )
    }
}

class TopicList extends Component {
    render() {
        return (
            <View style={styles.achievementList}>
                {/*<View style={styles.achievementListTitleContainer}>
                    <Text style={styles.achievementListTitle}>THÀNH TÍCH</Text>
                </View>*/}
                <TopicCard title="Growing up" description="Progressing toward psychological maturity"/>
                <TopicCard title="Health" description="Health is the level of functional and metabolic efficiency of a living organism"/>
                <TopicCard title="Sky" description="The sky (or celestial dome) is everything that lies above the surface of the Earth, including the atmosphere and outer space"/>
                <TopicCard title="Information Technology" description="Information technology (IT) is the application of computers to store, study, retrieve, transmit, and manipulate data, or information, often in the context of a business or other enterprise"/>
            </View>
        )
    }
}

export default TopicList;