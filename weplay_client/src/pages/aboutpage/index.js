import React, { Component } from 'react'
import ProfileCard from './../../components/ProfileCard';

export default class AboutPage extends Component {

    teammates = [];

    componentWillMount() {
        this.teammates = this.props.teammates;
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={`m-24`}>
                <div>
                    <h1 className={`text-2xl`}>About us!</h1>
                    <p>We are a tight, niche group of young entrepreneurs. Our shared values and beliefs influence the work that we do, along with the positive impact we hope to instill in communities.

</p>
                </div>
                <br />
                <div>
                    <h2 className={`text-2xl`}>Our Story</h2>
                    <p>It all began while refereeing at a local indoor soccer facility to make enough money to pay for school. Late hours turned into learning sessions. I began to think about how could I improve the business for the better. In the background, hearing players complaining about league information they didn’t have, players not aware of game times, owners not receiving payments on time, etc. WePlay is a social network search engine service, namely, providing an online social network in the field of sports recreation and providing management tools to facilitate things, such as; payment, marketing, and communication. From designing VR/AR games, playing guitar, writing code, an athlete, Yu-gi-oh card players, our team is unique in its essence to practice creative collaboration. All backgrounds, experiences, and skillsets truly define WePlay.  WePlay is at the forefront of creating change through social network efforts, connecting the dots between consumers and businesses.


</p>
                </div>
                <br />
                <div>
                    <h2 className={`text-2xl`}>Meet the team</h2>
                    <div>
                        {this.teammates ? this.teammates.map(teamamte =>
                            <ProfileCard teamamte={teamamte} />
                        ) : ""}
                    </div>

                </div>
            </div>
        )
    }
}
