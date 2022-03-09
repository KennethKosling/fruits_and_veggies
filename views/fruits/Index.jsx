const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render(){
        const { fruits } = this.props;
        return(
            <DefaultLayout>
            <div>
                {
                    fruits.map((fruit) => (
                        <article>
                            <a href={`/fruits/${fruit._id}`}>
                                <h2>
                                    {fruit.name} - {fruit.readyToEat ? 'Ripe' : 'Not Ripe'}
                                </h2>
                            </a>
                        </article>
                    ))
                }
            </div>
            <a href="/fruits/New"><button>Create A New Fruit</button></a>
            </DefaultLayout>
        );
    };
};

module.exports = Index;